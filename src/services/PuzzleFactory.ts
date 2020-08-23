import { RuleInterface } from '../../types'

const createUniqueRules = (length: number): Array<number> => {
  const uniqueNumbersArray: Array<number> = []

  while (uniqueNumbersArray.length < length) {
    const r = Math.floor(Math.random() * 9)
    if (!uniqueNumbersArray.includes(r)) uniqueNumbersArray.push(r)
  }

  return uniqueNumbersArray
}

const createUniqueNumbersRules = (rulesLength: number, rulesQuantity: number): Array<Array<number>> => {
  const rulesNumbers: Array<Array<number>> = []

  const ruleNumbersIsUnique = (newRuleNumbers: Array<number>) => {
    rulesNumbers.forEach((rule) => {
      if (!rulesNumbers.length) return true

      const similarNumbers = getSimilarNumbersCount(newRuleNumbers, rule)

      if (similarNumbers === rulesLength) {
        return false
      }
    })

    return true
  }

  while (rulesNumbers.length < rulesQuantity) {
    const newRuleNumbers = createUniqueRules(rulesLength)
    if (ruleNumbersIsUnique(newRuleNumbers)) rulesNumbers.push(newRuleNumbers)
  }

  return rulesNumbers
}

const getSimilarNumbersCount = (a: Array<number>, b: Array<number>): number => {
  const similarNumbers = b.filter((number) => a.includes(number))
  return similarNumbers.length
}

const getSimilarPositionsCount = (a: Array<number>, b: Array<number>): number => {
  const similarPositions = b.filter((number, numberIndex) => a.includes(number) && a.indexOf(number) === numberIndex)
  return similarPositions.length
}

export const createRules = (rulesLength: number, rulesQuantity: number): Array<RuleInterface> => {
  const answerReference: Array<number> = createUniqueRules(rulesLength)
  const rules: Array<RuleInterface> = []
  const rulesNumbers: Array<Array<number>> = createUniqueNumbersRules(rulesLength, rulesQuantity)

  while (rules.length < rulesQuantity) {
    rules.push({
      correctNumbers: getSimilarNumbersCount(answerReference, rulesNumbers[rules.length]),
      correctPositions: getSimilarPositionsCount(answerReference, rulesNumbers[rules.length]),
      numbers: rulesNumbers[rules.length]
    })
  }

  return rules
}

export const testRules = (attempt: Array<number>, rules: Array<RuleInterface>): boolean => {
  let hasError = null

  rules.forEach((rule) => {
    const numbers: Array<number> = rule.numbers

    const numbersCorrect = getSimilarNumbersCount(numbers, attempt) === rule.correctNumbers
    const positionsCorrect = getSimilarPositionsCount(numbers, attempt) === rule.correctPositions

    if (!numbersCorrect || !positionsCorrect) hasError = true
  })

  return !hasError
}
