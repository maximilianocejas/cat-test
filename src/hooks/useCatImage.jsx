import { useEffect, useState } from 'react'

const URL_PREFIX_IMAGE = 'https://cataas.com/'

export function useCatImage (fact) {
  const [imgUrl, setImgUrl] = useState()
  useEffect(() => {
    if (!fact) return
    fetch(`https://cataas.com/cat/says/${fact}?size=50&color=red&json=true`)
      .then(res => {
        if (!res.ok) throw new Error('Error fetch image')
        return res.json()
      })
      .then(response => {
        const { _id } = response
        const url = `/cat/${_id}/says/${fact}`
        setImgUrl(url)
      })
  }, [fact])
  return {
    imageUrl: `${URL_PREFIX_IMAGE}${imgUrl}`
  }
}
