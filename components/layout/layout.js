import React from 'react'
import styles from './layout.module.css'
import cn from 'classnames'
import Sidebar from '../column/col-sidebar'
import CONST from '../../constants'
import Main from '../column/col-main'
import Extra from '../column/col-extra'
import useWindowSize from '../../hooks/useWindowSize'

function Layout({ children }) {
  const size = useWindowSize()
  return (
    <div className={cn(styles.layout)}>
      <Sidebar flat={size.width < CONST.DESKTOP_SIZE}>sidebar</Sidebar>
      <Main>{children}</Main>
      {size.width > CONST.TABLET_SIZE && <Extra>extra</Extra>}
    </div>
  )
}

export default Layout
