import { RuleInterface } from '../../types'

const createUniqueNumbersArray = (length: number): Array<number> => {
  const uniqueNumbersArray: Array<number> = []

  while (uniqueNumbersArray.length < length) {
    const r = Math.floor(Math.random() * 9)
    if (!uniqueNumbersArray.includes(r)) uniqueNumbersArray.push(r)
  }

  return uniqueNumbersArray
}

const createUniqueRules = (rulesLength: number, rulesQuantity: number): Array<Array<number>> => {
  const rulesNumbers: Array<Array<number>> = []

  while (rulesNumbers.length < rulesQuantity) {
    const newRuleNumbers = createUniqueNumbersArray(rulesLength)
    if (!hasExistentSimilarArray(newRuleNumbers, rulesNumbers)) rulesNumbers.push(newRuleNumbers)
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

const hasExistentSimilarArray = (currentArray: Array<number>, accumulatorArray: Array<Array<number>>): Boolean => {
  if (!accumulatorArray.length) {
    return false
  }

  let similarArrayFounded = false

  accumulatorArray.forEach((accumulatorArrayItem) => {
    const similarNumbers = getSimilarNumbersCount(currentArray, accumulatorArrayItem)

    if (similarNumbers === currentArray.length) {
      similarArrayFounded = true
    }
  })

  return similarArrayFounded
}

export const createRules = (rulesLength: number, rulesQuantity: number): Array<RuleInterface> => {
  const answerReference: Array<number> = createUniqueNumbersArray(rulesLength)
  const rules: Array<RuleInterface> = []
  const rulesNumbers: Array<Array<number>> = createUniqueRules(rulesLength, rulesQuantity)

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
