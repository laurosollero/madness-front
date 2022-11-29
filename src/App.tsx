import { hot, setConfig } from "react-hot-loader"
import React from "react"
import HeaderComponent from "Components/layout/Header"
import WordComponent from "Components/layout/Word"
import ModalComponent from "Components/layout/Modal"
import GameProvider from "Context/gameContext"
import "Base/App.scss"

setConfig({
  showReactDomPatchNotification: false
})

const App = () => {
  return (
    <>
      <GameProvider>
        <HeaderComponent />
        <WordComponent />
        <ModalComponent />
      </GameProvider>
    </>
  )
}

export default hot(module)(App)
