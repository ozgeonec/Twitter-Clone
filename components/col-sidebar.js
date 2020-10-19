import React from 'react'
import styles from './col-sidebar.module.css'
import cn from 'classnames'
function Sidebar({ children }) {
  return <div className={cn(styles.layout)}>{children}</div>
}

export default Sidebar
