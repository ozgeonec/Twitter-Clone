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
import TextTitle from './text-title'

function Navigation({ selectedKey }) {
  return (
    <nav className={styles.navButton}>
      <NavButton>
        <Twitter />
      </NavButton>

      <NavButton selected={selectedKey === 'home'}>
        <Home />
        <TextTitle>Home</TextTitle>
      </NavButton>

      <NavButton selected={selectedKey === 'explore'}>
        <Explore />
        <TextTitle>Explore</TextTitle>
      </NavButton>

      <NavButton notify={17} selected={selectedKey === 'notification'}>
        <Notification />
        <TextTitle>Notification</TextTitle>
      </NavButton>

      <NavButton selected={selectedKey === 'messages'}>
        <Messages />
        <TextTitle>Messages</TextTitle>
      </NavButton>

      <NavButton selected={selectedKey === 'bookmark'}>
        <Bookmark />
        <TextTitle>Bookmark</TextTitle>
      </NavButton>

      <NavButton selected={selectedKey === 'lists'}>
        <Lists />
        <TextTitle>Lists </TextTitle>
      </NavButton>

      <NavButton selected={selectedKey === 'profile'}>
        <Profile />
        <TextTitle>Profile</TextTitle>
      </NavButton>

      <NavButton selected={selectedKey === 'more'}>
        <More />
        <TextTitle>More</TextTitle>
      </NavButton>
    </nav>
  )
}

export default Navigation
