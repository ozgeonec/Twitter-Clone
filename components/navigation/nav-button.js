import React from 'react'
import styles from './nav-button.module.css'
import Button from '../button/button'
import cn from 'classnames'
function NavButton({ href, notify, selected, children, className, ...props }) {
  return (
    <Button
      className={cn(
        styles.navButton,
        selected && styles.navButtonSelected,
        className
      )}
      {...props}
      href={href}
    >
      {notify > 0 && <span className={styles.notify}>{notify}</span>}
      {children}
    </Button>
  )
}

export default NavButton
