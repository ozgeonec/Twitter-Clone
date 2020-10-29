import React from 'react'
import styles from './theme-button.module.css'
import Button from '../button/button'
import cn from 'classnames'

function ThemeButton({
  big = false,
  full = false,
  className,
  children,
  ...props
}) {
  return (
    <Button
      className={cn(
        styles.button,
        full && styles.fullWidth,
        big && styles.big,
        className
      )}
      {...props}
    >
      {children}
    </Button>
  )
}

export default ThemeButton
