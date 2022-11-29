import { GameContext, GAMESTATE } from "Context/gameContext"
import React, {
  useContext,
  useEffect,
  useState,
  useRef,
  CSSProperties
} from "react"

function ScoreComponent({}) {
  const { score, runningGame } = useContext(GameContext)
  const [currentScore, setCurrentScore] = useState<number>(score)
  const [showMessage, setShowMessage] = useState<boolean>(false)
  const [gameStatus, setGameStatus] = useState<number>(runningGame)
  const [message, setMessage] = useState<string>("")

  const didMount = useRef(false)

  const messages = {
    positive: {
      20: "GOOD",
      30: "GREAT!",
      40: "EXCELLENT!!",
      50: "EXCEPTIONAL!!!"
    },
    negative: {
      0: "BUMMER!!!",
      10: "WATCH OUT!!",
      20: "CAUTION!",
      30: "DON'T PANIC"
    }
  }

  useEffect(() => {
    setGameStatus(runningGame)
  }, [setGameStatus, runningGame])

  useEffect(() => {
    if (didMount.current) {
      setCurrentScore((previousScore) => {
        if (gameStatus === GAMESTATE.RUNNING) {
          setShowMessage(true)
        }
        if (previousScore < score) {
          setMessage(messages["positive"][score])
        } else {
          setMessage(messages["negative"][score])
        }
        return score
      })
    } else {
      didMount.current = true
    }
  }, [setCurrentScore, score])

  const styles = {
    wrapper: {
      display: gameStatus === GAMESTATE.NEW ? "none" : "block",
      padding: "45px 30px",
      fontSize: "25px"
    },
    message: {
      position: "absolute",
      marginTop: "-1em",
      right: "30px",
      WebkitTextFillColor: "#ffffff",
      textShadow: "#ff6700b3 0px 0px 7px, #fcff00b3 0px 0px 19px"
    }
  }
  return (
    <div className="text" style={styles.wrapper as CSSProperties}>
      <div
        style={styles.message as CSSProperties}
        className={showMessage ? "visible" : "hidden"}
        onTransitionEnd={() => setShowMessage(false)}
      >
        {message}
      </div>
      SCORE: {score}
    </div>
  )
}

export default ScoreComponent
