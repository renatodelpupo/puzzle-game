export const generateRules = (rulesLength) => {
  const createAnswerBase = () => {
    return createUniqueNumbersArray()
  }

  const createUniqueNumbersArray = () => {
    const uniqueNumbersArray = []

    while (uniqueNumbersArray.length < rulesLength) {
      const r = Math.floor(Math.random() * 9)
      if (!uniqueNumbersArray.includes(r)) uniqueNumbersArray.push(r)
    }

    return uniqueNumbersArray
  }

  const createRulesBaseWithNumbersArray = () => {
    const rules = []

    for (let i = 0; i < 6; i++) {
      rules.push({
        correctNumbers: null,
        correctPositions: null,
        numbers: createUniqueNumbersArray()
      })
    }

    return rules
  }

  const defineRulesMatches = (answerBase, rules) => {
    rules.forEach(rule => {
      const numbers = rule.numbers

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
  const _rulesBase = createRulesBaseWithNumbersArray()
  const rules = defineRulesMatches(_answerBase, _rulesBase)

  return rules
}

export const testRules = (attempt, rules) => {
  let hasError = null

  rules.forEach(rule => {
    const numbers = rule.numbers

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