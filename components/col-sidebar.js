import React from 'react'
import styles from './col-sidebar.module.css'
import cn from 'classnames'
import Navigation from './navigation'
import ThemeButton from './theme-button'
import ProfileBox from './profile-box'
function Sidebar({ flat }) {
  return (
    <div className={cn(styles.sidebar)}>
      <Navigation flat={flat} />
      <ThemeButton big full>
        Tweet
      </ThemeButton>
      <ProfileBox />
    </div>
  )
}

export default Sidebar
