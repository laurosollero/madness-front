import React, {
  FC,
  useCallback,
  useEffect,
  useState,
  CSSProperties
} from "react"
import InputBox from "Components/Input/MultiInput.styles"

type InputProps = {
  amount?: number
  autoFocus?: boolean
  handleOutputString: (text: string) => void
  inputProps?: any
  inputRegExp?: RegExp
  text: string
  disabled: boolean
}

const MultiInput: FC<InputProps> = (props) => {
  const [characterArray, setCharacterArray] = useState<string[]>(
    Array(props.amount).fill(null)
  )
  const inputElements = {}

  useEffect(() => {
    setCharacterArray(Array(props.amount).fill(null))
    Array.from(
      document.querySelectorAll(".multi-input-container input")
    ).forEach((input: HTMLInputElement, index: number) => {
      input.value = ""
      if (index == 0) {
        input.disabled = true
        input.value = props.text[0]
      }
      if (index == 1) input.focus()
    })
  }, [setCharacterArray, props.amount, props.text])

  useEffect(() => {
    props.handleOutputString(characterArray.join(""))
  }, [setCharacterArray, characterArray])

  const focusPrevChar = (target: HTMLInputElement) => {
    if (target.previousElementSibling !== null) {
      const previous = target.previousElementSibling as HTMLInputElement
      previous.focus()
    }
  }

  const focusNextChar = (target: HTMLInputElement) => {
    if (target.nextElementSibling !== null) {
      const next = target.nextElementSibling as HTMLInputElement
      next.focus()
    }
  }

  const setModuleOutput = useCallback(
    (target: HTMLInputElement) => {
      let tmp = characterArray
      let updatedCharacters = tmp.map((character, number) => {
        return inputElements["input" + number].value
      })
      setCharacterArray(updatedCharacters)
    },
    [setCharacterArray, characterArray]
  )

  const handleChange = ({ target }) => {
    if (target.value.match(props.inputRegExp)) {
      focusNextChar(target)
      setModuleOutput(target)
    } else {
      target.value = ""
      setCharacterArray[target.name.replace("input", "")]
    }
  }

  const handleKeyDown = ({ target, key }) => {
    if (key === "Backspace") {
      if (
        target.value === "" &&
        target.previousElementSibling !== null &&
        target.previousElementSibling.disabled != true
      ) {
        target.previousElementSibling.value = ""
        focusPrevChar(target)
      } else {
        target.value = ""
      }
      setModuleOutput(target)
    } else if (key === "ArrowLeft") {
      focusPrevChar(target)
    } else if (key === "ArrowRight" || key === " ") {
      focusNextChar(target)
    }
  }

  const renderItems = () => {
    let items = []
    let inputProps = props.inputProps || {}

    for (var i = 0; i < props.amount; i++) {
      items.push(
        <InputBox
          type="text"
          key={i}
          handleKeyDown={handleKeyDown}
          handleChange={handleChange}
          name={"input" + i}
          disabled={props.disabled}
          inputProps={inputProps[i] || inputProps}
          inputRef={(el) => {
            if (!el) return
            inputElements[el.name] = el
          }}
        />
      )
    }

    return items
  }

  const styles = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap"
  }

  return (
    <div className="multi-input-container" style={styles as CSSProperties}>
      {renderItems()}
    </div>
  )
}

export default MultiInput
