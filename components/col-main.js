import React from 'react'
import styles from './col-main.module.css'
import cn from 'classnames'
function Main({ children }) {
  return <div className={cn(styles.layout)}>{children}</div>
}

export default Main
