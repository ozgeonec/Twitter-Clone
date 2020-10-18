import React from 'react'
import cn from 'classnames'
import styles from './avatar.module.css'

function Avatar({ src, alt }) {
  return (
    <div className={cn([styles.photo])}>
      <img
        className={styles.img}
        src="https://pbs.twimg.com/profile_images/1317573845944029184/e_bgjyJO_400x400.jpg"
        alt={alt}
      />
    </div>
  )
}

export default Avatar
