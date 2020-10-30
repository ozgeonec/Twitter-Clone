import React from 'react'
import styles from './style.module.css'
import Avatar from '../avatar/avatar'
import formatDate from 'date-fns/formatDistanceToNowStrict'
import * as Icon from '../icons'
import IconButton from '../button/icon'

function Tweet({ name, slug, datetime, text }) {
  return (
    <article className={styles.tweet}>
      {/*  avatar */}
      <div className={styles.avatar}>
        <Avatar />
      </div>
      {/* body */}
      <div className={styles.body}>
        <header className={styles.header}>
          <span className={styles.name}>{name}</span> <span>@{slug}</span> ·{' '}
          <span>{formatDate(datetime)}</span>
        </header>
        <div className={styles.content}>{text}</div>
        <footer className={styles.footer}>
          <div className={styles.footerButton}>
            {/*  reply */}
            <IconButton className={styles.actionButton}>
              <Icon.Reply />
            </IconButton>
            <span>3</span>
          </div>
          {/*  retweet */}
          <div className={styles.footerButton}>
            <IconButton className={styles.actionButton}>
              <Icon.Retweet />
            </IconButton>
            <span>13</span>
          </div>
          {/*  like */}
          <div className={styles.footerButton}>
            <IconButton className={styles.actionButton}>
              <Icon.Like />
            </IconButton>
          </div>
          {/*  share */}
          <div className={styles.footerButton}>
            <IconButton className={styles.actionButton}>
              <Icon.Share />
            </IconButton>
          </div>
        </footer>
      </div>
    </article>
  )
}

export default Tweet
