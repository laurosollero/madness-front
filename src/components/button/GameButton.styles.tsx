import React from "react"
import PropTypes from "prop-types"

import styled from "styled-components"

const Button = styled.button`
  width: 170px;
  border-radius: 10px;
  border: 0;
  padding: 0;
  margin: 0 auto;
  position: relative;
  cursor: pointer;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: -5px;
    border-radius: inherit;
    background: linear-gradient(
      315deg,
      rgba(2, 0, 36, 1) 0%,
      rgba(9, 9, 121, 1) 35%,
      rgba(0, 212, 255, 1) 100%
    );
  }
  span {
    padding: 14px 20px;
    text-transform: uppercase;
    color: white;
    font-family: "Concert One";
    border-radius: 10px;
    position: relative;
    background: linear-gradient(to bottom, #2140de, #4584ff);
    display: block;
  }
`

const GameButton = ({ handleClick, text, buttonProps }) => {
  return (
    <Button onClick={handleClick} {...buttonProps}>
      <span>{text}</span>
    </Button>
  )
}

GameButton.propTypes = {
  text: PropTypes.string.isRequired,
  handleClick: PropTypes.func,
  buttonProps: PropTypes.object
}

export default GameButton
