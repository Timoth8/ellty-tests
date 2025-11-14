import React from 'react'
import './HomeComponent.css'

interface Page {
  id: number
  text: string
  checked: boolean
}

interface HomeComponentProps {
  mainChecked: boolean
  pages: Page[]
  onMainCheckboxChange: () => void
  onPageCheckboxChange: (id: number) => void
  onDoneClick: () => void
}

const HomeComponent: React.FC<HomeComponentProps> = ({
  mainChecked,
  pages,
  onMainCheckboxChange,
  onPageCheckboxChange,
  onDoneClick,
}) => {
  return (
    <div className="home-component">
      <div className="home-card">
        <div className="home-item main-item">
          <span className="home-item-text">All pages</span>
          <label className="checkbox-wrapper">
            <input
              type="checkbox"
              checked={mainChecked}
              onChange={onMainCheckboxChange}
              className="checkbox-input"
            />
            <span className="checkbox-custom">
              {mainChecked && (
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

        <div className="divider"></div>

        {pages.map((page) => (
          <div key={page.id} className="home-item page-item">
            <span className="home-item-text">{page.text}</span>
            <label className="checkbox-wrapper">
              <input
                type="checkbox"
                checked={page.checked}
                onChange={() => onPageCheckboxChange(page.id)}
                className="checkbox-input"
              />
              <span className="checkbox-custom">
                {page.checked && (
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

        <div className="divider"></div>

        <button className="home-done-button" onClick={onDoneClick}>
          Done
        </button>
      </div>
    </div>
  )
}

export default HomeComponent
