import IWord from "Types/Word"

export type GameContextType = {
  score: number
  runningGame: number
  chars: number
  word: IWord
  correctAnswer: () => void
  wrongAnswer: () => void
  newGame: () => void
  newWord: (difficulty: number) => void
}
