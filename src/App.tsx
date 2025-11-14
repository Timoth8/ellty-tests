import { useState } from 'react'
import HomeComponent from './components/HomeComponent.tsx'
import './App.css'

function App() {
  // State for Home component
  const [homeMainChecked, setHomeMainChecked] = useState(false)
  const [homePages, setHomePages] = useState([
    { id: 1, text: 'Page 1', checked: false },
    { id: 2, text: 'Page 2', checked: false },
    { id: 3, text: 'Page 3', checked: false },
    { id: 4, text: 'Page 4', checked: false },
  ])

  const handleHomeMainCheckboxChange = () => {
    const newCheckedState = !homeMainChecked
    setHomeMainChecked(newCheckedState)
    // When "All pages" is checked/unchecked, update all page checkboxes
    setHomePages(prev =>
      prev.map(page => ({ ...page, checked: newCheckedState }))
    )
  }

  const handleHomePageCheckboxChange = (id: number) => {
    setHomePages(prev => {
      const updated = prev.map(page =>
        page.id === id ? { ...page, checked: !page.checked } : page
      )
      // Update main checkbox based on whether all pages are checked
      const allChecked = updated.every(page => page.checked)
      setHomeMainChecked(allChecked)
      return updated
    })
  }

  const handleHomeDoneClick = () => {
    const checkedPages = homePages.filter(page => page.checked)
    console.log('Done clicked!', {
      mainChecked: homeMainChecked,
      checkedPages: checkedPages.map(p => p.text),
    })
    alert(`Done! Selected: ${checkedPages.length > 0 ? checkedPages.map(p => p.text).join(', ') : 'None'}`)
  }

  return (
    <div className="app">
      <HomeComponent
        mainChecked={homeMainChecked}
        pages={homePages}
        onMainCheckboxChange={handleHomeMainCheckboxChange}
        onPageCheckboxChange={handleHomePageCheckboxChange}
        onDoneClick={handleHomeDoneClick}
      />
    </div>
  )
}

export default App
