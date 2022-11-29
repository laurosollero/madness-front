import React, { CSSProperties, useContext, useState, useEffect } from "react"
import { GameContext, GAMESTATE, SCORE } from "Context/gameContext"
import GameButton from "Components/button/GameButton.styles"

function ModalComponent() {
  const { runningGame, newGame } = useContext(GameContext)
  const [gameStatus, setGameStatus] = useState<number>(runningGame)
  const [message, setMessage] = useState<string>("")

  const winMessage = "Congratulations!\n You won the game!"
  const loseMessage = "GAME OVER."

  useEffect(() => {
    setGameStatus(runningGame)
    if (runningGame === GAMESTATE.VICTORY) setMessage(winMessage)
    if (runningGame === GAMESTATE.DEFEAT) setMessage(loseMessage)
  }, [setGameStatus, runningGame])

  const styles = {
    background: {
      position: "absolute",
      background: "rgba(0,0,0,0.25)",
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "5px",
      display: gameStatus === GAMESTATE.RUNNING ? "none" : "grid"
    },
    container: {
      background: "white",
      width: "550px",
      maxWidth: "90vw",
      minHeight: "300px",
      maxHeight: "80vh",
      display: "grid",
      alignItems: "center",
      justifyContent: "center",
      padding: "30px",
      fontSize: "18px",
      borderRadius: "5px",
      boxShadow: "#000000b3 0 3px 10px",
      textAlign: "center"
    },
    title: {
      margin: 0
    },
    message: {
      margin: 0,
      fontSize: "2em",
      whiteSpace: "pre-wrap"
    }
  }
  return (
    <div
      className="modal-background"
      style={styles.background as CSSProperties}
    >
      <div
        className="modal-container"
        style={styles.container as CSSProperties}
      >
        {message ? (
          <p style={styles.message as CSSProperties}>{message}</p>
        ) : (
          <>
            <h1 style={styles.title as CSSProperties}>
              Welcome to DoubleJargon!
            </h1>
            <p>
              Your objective is to get to {SCORE.MAX} points to win the game.
            </p>
            <p>
              For each correct answer you will gain {SCORE.DELTA} points, but
              pay attention: you will also lose the same amount for each wrong
              answer!
            </p>
          </>
        )}

        <GameButton
          buttonProps={{ title: "Start a new game" }}
          handleClick={newGame}
          text="New Game"
        />
      </div>
    </div>
  )
}

export default ModalComponent
