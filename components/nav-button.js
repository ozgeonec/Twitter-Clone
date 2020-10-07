import React from 'react'
import styles from './nav-button.module.css'
import Button from './button'
import cn from 'classnames'
function NavButton({ notify, selected, children, ...props }) {
  return (
    <Button
      className={cn(styles.navButton, selected && styles.navButtonSelected)}
      {...props}
    >
      {children}
      {notify && <span className={styles.notify}>{notify}</span>}
    </Button>
  )
}

export default NavButton
