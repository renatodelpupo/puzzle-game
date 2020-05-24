import { Rule } from '../../types'

export const generateRules = (rulesLength: number): Array<Rule> => {
  const createAnswerBase = () => {
    return createUniqueNumbersKey()
  }

  const createUniqueNumbersKey = () => {
    const uniqueNumbers: Array<number> = []

    while (uniqueNumbers.length < rulesLength) {
      const r = Math.floor(Math.random() * 9)
      if (!uniqueNumbers.includes(r)) uniqueNumbers.push(r)
    }

    return uniqueNumbers
  }

  const createRulesBase = () => {
    const rules: Array<any> = []

    for (let i = 0; i < 6; i++) {
      rules.push({
        correctNumbers: null,
        correctPositions: null,
        numbers: createUniqueNumbersKey()
      })
    }

    return rules
  }

  const defineRulesMatches = (answerBase: Array<number>, rules: Array<any>) => {
    rules.forEach(rule => {
      const numbers: Array<number> = rule.numbers

      const equalNumbers = numbers.filter(number => answerBase.includes(number))
      const equalPositions = numbers.filter((number, numberIndex) =>
        answerBase.includes(number) && answerBase.indexOf(number) === numberIndex
      )

      rule.correctNumbers = equalNumbers.length
      rule.correctPositions = equalPositions.length
    })

    return rules
  }

  const _answerBase = createAnswerBase()
  const _rulesBase = createRulesBase()
  const rules = defineRulesMatches(_answerBase, _rulesBase)

  return rules
}

export const testRules = (attempt: Array<number>, rules: Array<any>) => {
  let hasError = null

  rules.forEach(rule => {
    const numbers: Array<number> = rule.numbers

    const verifyNumbers = attempt.filter(attemptItem => numbers.includes(attemptItem))
    const verifyPositions = attempt.filter((attemptItem, attemptIndex) =>
      numbers.includes(attemptItem) && numbers.indexOf(attemptItem) === attemptIndex
    )

    const numbersCorrect = verifyNumbers.length === rule.correctNumbers
    const positionsCorrect = verifyPositions.length === rule.correctPositions

    if (!numbersCorrect || !positionsCorrect) hasError = true
  })

  return !hasError
}
