import React from 'react'
import styles from './navigation.module.css'
import cn from 'classnames'
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

const MENU = [
  {
    key: 'twitter',
    icon: <Twitter />,
    title: '',
    notify: 0
  },
  {
    key: 'home',
    icon: <Home />,
    title: 'Home',
    notify: 0
  },
  {
    key: 'explore',
    icon: <Explore />,
    title: 'Explore',
    notify: 0
  },
  {
    key: 'notifications',
    icon: <Notification />,
    title: 'Notifications',
    notify: 17
  },
  {
    key: 'messages',
    icon: <Messages />,
    title: 'Messages',
    notify: 0
  },
  {
    key: 'bookmarks',
    icon: <Bookmark />,
    title: 'Bookmarks',
    notify: 0
  },
  {
    key: 'lists',
    icon: <Lists />,
    title: 'Lists',
    notify: 0
  },
  {
    key: 'profile',
    icon: <Profile />,
    title: 'Profile',
    notify: 0
  },
  {
    key: 'more',
    icon: <More />,
    title: 'More',
    notify: 0
  }
]

function Navigation({ flat = false, selectedKey }) {
  return (
    <nav className={styles.nav}>
      {MENU.map((menu) => {
        const showTitle = !flat || menu.title.length === 0
        return (
          <NavButton
            key={menu.key}
            notify={menu.notify}
            selected={selectedKey === menu.key}
          >
            {menu.icon}
            {showTitle && <TextTitle>{menu.title}</TextTitle>}
          </NavButton>
        )
      })}
    </nav>
  )
}

export default Navigation
