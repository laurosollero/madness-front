import React, { useState, useContext, CSSProperties, useEffect } from "react"
import { GameContext, GAMESTATE } from "Context/gameContext"
import MultiInput from "Components/input/MultiInput"

function WordComponent() {
  const {
    score,
    runningGame,
    chars,
    word,
    correctAnswer,
    wrongAnswer,
    newWord
  } = useContext(GameContext)
  const [gameStatus, setGameStatus] = useState<number>(runningGame)
  const [currentScore, setCurrentScore] = useState<number>(score)

  useEffect(() => {
    setGameStatus(runningGame)
  }, [setGameStatus, runningGame])

  useEffect(() => {
    setCurrentScore((oldScore) => {
      if (runningGame === GAMESTATE.RUNNING) {
        const change: number = oldScore < score ? 1 : -1
        setTimeout(() => {
          newWord(word.difficulty + change)
        }, 500)
      }
      return score
    })
  }, [setCurrentScore, score])

  const handleOutput = (s: string) => {
    if (s.length == chars) {
      handleSave(s.toUpperCase())
    }
  }

  const handleSave = (currentAnswer: string) => {
    const translated = word.translated.replace(/[\s-]+/gi, "")
    if (currentAnswer == translated) {
      correctAnswer()
    } else {
      wrongAnswer()
    }
  }

  const styles = {
    main: {
      padding: "30px",
      minHeight: "250px"
    },
    title: {
      textTransform: "uppercase",
      textAlign: "center"
    },
    original: {
      margin: "20px 0px",
      fontSize: "3em",
      textAlign: "center"
    },
    tip: {
      position: "absolute",
      textTransform: "uppercase",
      bottom: "5px",
      right: "10px",
      transform: "rotateZ(180deg)"
    }
  }

  return (
    <main style={styles.main as CSSProperties}>
      <h1 style={styles.title as CSSProperties} className="text">
        What's the English translation?
      </h1>
      <div
        className="word-original text"
        style={styles.original as CSSProperties}
      >
        {word.original}
      </div>
      <div className="word-answer">
        {word.translated ? (
          <MultiInput
            disabled={gameStatus == GAMESTATE.RUNNING ? false : true}
            amount={chars}
            handleOutputString={handleOutput}
            inputProps={{
              style: { textTransform: "uppercase" }
            }}
            inputRegExp={/^[a-zA-Z]$/}
            text={word.translated}
          />
        ) : null}
      </div>
      <div style={styles.tip as CSSProperties}>
        {word.translated
          ? `Tip: ${word.translated} [${word.difficulty}]`
          : null}
      </div>
      <div className="text"></div>
    </main>
  )
}

export default WordComponent
