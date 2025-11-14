import React from 'react'
import './ButtonComponent.css'

interface Button {
  id: number
  text: string
  clicked: boolean
}

interface ButtonComponentProps {
  buttons: Button[]
  onButtonClick: (id: number) => void
}

const ButtonComponent: React.FC<ButtonComponentProps> = ({
  buttons,
  onButtonClick,
}) => {
  return (
    <div className="button-component">
      <div className="button-component-header">
        <span className="figma-icon">◆</span>
        <span className="component-title">Button</span>
      </div>
      <div className="button-list">
        {buttons.map((button) => (
          <button
            key={button.id}
            className={`done-button ${button.clicked ? 'clicked' : ''}`}
            onClick={() => onButtonClick(button.id)}
          >
            {button.text}
          </button>
        ))}
      </div>
    </div>
  )
}

export default ButtonComponent
