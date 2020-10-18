import React from 'react'
import cn from 'classnames'
import styles from './profile-box.module.css'
import Avatar from './avatar'
import { ArrowBottom } from './icons'
import Button from './button'
import TextBody from './text-body'

function ProfileBox({ name = 'özge öneç', slug = 'ozgeonec' }) {
  return (
    <Button className={cn([styles.box])}>
      <Avatar />
      <div className={styles.body}>
        <TextBody bold>{name}</TextBody>
        <TextBody className={styles.slug}>@{slug}</TextBody>
      </div>
      <ArrowBottom className={styles.icon} />
    </Button>
  )
}

export default ProfileBox
