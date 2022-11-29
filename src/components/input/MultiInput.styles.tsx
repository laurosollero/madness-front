import React from "react"
import PropTypes from "prop-types"

import styled from "styled-components"

const Input = styled.input`
  justify-content: space-between;
  width: 45px;
  height: 45px;
  margin: 5px;
  border-radius: 5px;
  text-align: center;
  font-size: 34px;
  font-family: "Concert One";
  text-shadow: white 0 0px 6px, white 0 0px 7px;
  color: #2e2900;
  border-color: #ff9d00;
  background: linear-gradient(
    0deg,
    rgba(253, 235, 45, 1) 1%,
    rgba(255, 191, 19, 1) 50%,
    rgba(253, 235, 45, 1) 100%
  );
  &[disabled] {
    background: linear-gradient(
      0deg,
      rgba(255, 191, 19, 1) 1%,
      rgba(242, 123, 11, 1) 50%,
      rgba(255, 191, 19, 1) 100%
    );
  }
`

const InputBox = ({
  type,
  handleKeyDown,
  handleChange,
  handleFocus,
  handleOnPaste,
  name,
  inputRef,
  disabled,
  inputProps
}) => {
  return (
    <Input
      {...inputProps}
      type={type}
      onKeyDown={handleKeyDown}
      onChange={handleChange}
      onFocus={handleFocus}
      onPaste={handleOnPaste}
      maxLength="1"
      name={name}
      ref={inputRef}
      disabled={disabled}
    />
  )
}

InputBox.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  handleKeyDown: PropTypes.func,
  handleFocus: PropTypes.func,
  handleOnPaste: PropTypes.func,
  handleChange: PropTypes.func,
  inputRef: PropTypes.func,
  disabled: PropTypes.bool,
  inputProps: PropTypes.object
}

export default InputBox
