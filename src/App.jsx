import { useCatImage } from './hooks/useCatImage'
import { useFact } from './hooks/useFact'

export default function App () {
  const { threeFirstWords } = useFact()
  const { imageUrl } = useCatImage(threeFirstWords)
  return (
    <div>
      {threeFirstWords && <p>{threeFirstWords}</p>}
      {imageUrl && <img src={imageUrl} alt={`image from three first words for ${threeFirstWords}`} />}
    </div>
  )
}
