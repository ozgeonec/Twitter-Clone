import React from 'react'
import styles from './nav-button.module.css'
import Button from './button'

function NavButton({ children }) {
  return <Button className={styles.navButton}>{children}</Button>
}

export default NavButton
