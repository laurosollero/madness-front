import React, { useState, createContext, useCallback } from "react"
import WordServices from "Services/WordServices"
import { GameContextType } from "Types/Game"
import IWord from "Types/Word"

export const GameContext = createContext<GameContextType>({
  score: 10,
  runningGame: 0,
  chars: 0,
  word: undefined,
  correctAnswer: () => {},
  wrongAnswer: () => {},
  newGame: () => {},
  newWord: () => {}
})

export enum SCORE {
  START = 10,
  MAX = 50,
  MIN = 0,
  DELTA = 10
}

export enum GAMESTATE {
  NEW = 0,
  RUNNING = 1,
  VICTORY = 2,
  DEFEAT = 3
}

interface Props {
  children: React.ReactNode
}

const initialStateWord: IWord = {
  original: "",
  translated: "",
  difficulty: 0
}

function ScoreProvider({ children }: Props) {
  const [score, setScore] = useState<number>(0)
  const [runningGame, setRunningGame] = useState<GAMESTATE>(GAMESTATE.NEW)
  const [chars, setChars] = useState<number>(1)
  const [word, setWord] = useState<IWord>(initialStateWord)

  const correctAnswer = useCallback(() => {
    setScore((previousScore) => {
      if (previousScore + 10 >= SCORE.MAX) {
        setRunningGame(GAMESTATE.VICTORY)
      }
      return previousScore + SCORE.DELTA
    })
  }, [])

  const wrongAnswer = useCallback(() => {
    setScore((previousScore) => {
      if (previousScore - 10 <= SCORE.MIN) {
        setRunningGame(GAMESTATE.DEFEAT)
      }
      return previousScore - SCORE.DELTA
    })
  }, [])

  const newGame = useCallback(() => {
    setRunningGame(GAMESTATE.RUNNING)
    setScore(SCORE.START)
    setWord(initialStateWord)
  }, [])

  const newWord = useCallback((difficulty: number) => {
    if (difficulty < 1) difficulty = 0
    WordServices.getWord(difficulty)
      .then((currentWord) => {
        setWord(currentWord)
        setChars(currentWord.translated.replace(/[\s-]+/gi, "").length)
      })
      .catch((error) => console.error(error))
  }, [])

  return (
    <GameContext.Provider
      value={{
        score,
        runningGame,
        chars,
        word,
        correctAnswer,
        wrongAnswer,
        newGame,
        newWord
      }}
    >
      {children}
    </GameContext.Provider>
  )
}

export default ScoreProvider
