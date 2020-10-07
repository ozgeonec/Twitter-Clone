import React from 'react'
import styles from './navigation.module.css'
import {
  Twitter,
  Home,
  Explore,
  Notification,
  Messages,
  Bookmark,
  Lists,
  Profile,
  More
} from './icons'
import NavButton from './nav-button'
import TitleBold from './title-bold'

function Navigation({ selectedKey }) {
  return (
    <nav className={styles.navButton}>
      <NavButton>
        <Twitter />
      </NavButton>

      <NavButton selected={selectedKey === 'home'}>
        <Home />
        <TitleBold>Home</TitleBold>
      </NavButton>

      <NavButton selected={selectedKey === 'explore'}>
        <Explore />
        <TitleBold>Explore</TitleBold>
      </NavButton>

      <NavButton notify={17} selected={selectedKey === 'notification'}>
        <Notification />
        <TitleBold>Notification</TitleBold>
      </NavButton>

      <NavButton selected={selectedKey === 'messages'}>
        <Messages />
        <TitleBold>Messages</TitleBold>
      </NavButton>

      <NavButton selected={selectedKey === 'bookmark'}>
        <Bookmark />
        <TitleBold>Bookmark</TitleBold>
      </NavButton>

      <NavButton selected={selectedKey === 'lists'}>
        <Lists />
        <TitleBold>Lists </TitleBold>
      </NavButton>

      <NavButton selected={selectedKey === 'profile'}>
        <Profile />
        <TitleBold>Profile</TitleBold>
      </NavButton>

      <NavButton selected={selectedKey === 'more'}>
        <More />
        <TitleBold>More</TitleBold>
      </NavButton>
    </nav>
  )
}

export default Navigation
