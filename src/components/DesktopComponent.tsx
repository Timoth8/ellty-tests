import React from 'react'
import './DesktopComponent.css'

interface DesktopItem {
  id: number
  text: string
  checked: boolean
}

interface DesktopComponentProps {
  items: DesktopItem[]
  onCheckboxChange: (id: number) => void
}

const DesktopComponent: React.FC<DesktopComponentProps> = ({
  items,
  onCheckboxChange,
}) => {
  return (
    <div className="desktop-component">
      <div className="desktop-component-header">
        <span className="figma-icon">◆</span>
        <span className="component-title">Desktop</span>
      </div>
      <div className="desktop-items-container">
        {items.map((item) => (
          <div key={item.id} className="desktop-item">
            <span className="desktop-item-text">{item.text}</span>
            <label className="checkbox-wrapper">
              <input
                type="checkbox"
                checked={item.checked}
                onChange={() => onCheckboxChange(item.id)}
                className="checkbox-input"
              />
              <span className="checkbox-custom">
                {item.checked && (
                  <svg
                    width="14"
                    height="11"
                    viewBox="0 0 14 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 5.5L5 9.5L13 1.5"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </span>
            </label>
          </div>
        ))}
      </div>
    </div>
  )
}

export default DesktopComponent
