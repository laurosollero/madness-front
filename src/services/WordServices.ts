import http from "Base/httpCommon"
import IWord from "Types/Word"

const getWord = async (difficulty: number = 0) => {
  try {
    const response = await http.get<IWord>(`/verb?difficulty=${difficulty}`)
    const data = response.data
    data.original = data.original.toUpperCase()
    data.translated = data.translated.toUpperCase()
    return data
  } catch (error) {
    console.error(error)
  }
}

const WordService = {
  getWord
}

export default WordService
