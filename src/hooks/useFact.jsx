import { useEffect, useState } from 'react'

const URL_FACT_RANDOM = 'https://catfact.ninja/fact'

export function useFact () {
  const [fact, setFact] = useState()
  const [threeFirstWords, setThreeFirstWords] = useState()
  useEffect(() => {
    fetch(URL_FACT_RANDOM)
      .then(res => {
        if (!res.ok) throw new Error('Error fetching fact')
        return res.json()
      })
      .then(data => {
        const { fact } = data
        setFact(fact)
      })
  }, [])
  useEffect(() => {
    if (!fact) return
    const threeWords = fact.split(' ', 3).join(' ')

    setThreeFirstWords(threeWords)
  }, [fact])

  return {
    threeFirstWords
  }
}
