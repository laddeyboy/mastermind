import React, {Component} from 'react'
import './Button.css'

export function SoloGameModeButtons () {
  return (
    <div className="Modal-game-options">
      <button className="Modal-btn"
        onClick={() => this.onBtnClick()}>Easy</button>
      <button className="Modal-btn"
        onClick={() => this.onBtnClick()}>Hard</button>
    </div>
  )
}

export function MultiGameModeButtons () {
  return (
    <div className="Modal-game-options">
      <button className="Modal-btn"
        onClick={() => this.onBtnClick()}>Easy</button>
      <button className="Modal-btn"
        onClick={() => this.onBtnClick()}>Hard</button>
    </div>
  )
}
