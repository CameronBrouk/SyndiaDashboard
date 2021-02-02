import React, { useState } from 'react'
import Tab from 'components/Tab'

import 'stylesheets/TabMenu.scss'

const TabMenu = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState('gender')

  // Render content of currently active tab only
  const renderActiveContent = () => {
    const currentTab = tabs.find(({ id }) => id === activeTab)
    if (!currentTab) return null
    if (!currentTab.content) return null
    return <div className='content'>{currentTab.content}</div>
  }

  return (
    <div className='tabMenu'>
      {tabs && (
        <ul className='tabList'>
          {tabs.map(tab => (
            <li key={`tab-${tab.id}`}>
              <Tab
                label={tab.label}
                id={tab.id}
                onClickAction={() => setActiveTab(tab.id)}
                active={tab.id === activeTab}
              />
            </li>
          ))}
        </ul>
      )}
      {renderActiveContent()}
    </div>
  )
}

export default TabMenu
