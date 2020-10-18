import React from 'react'
import * as Icons from '../components/icons'
import Avatar from '../components/avatar'
import ProfileBox from '../components/profile-box'

export default {
  title: 'Icons',
  component: Icons
}
const Template = (args) => <Icons {...args} />
export const Icon = () => (
  <div className={'icons'}>
    <Icons.ArrowBottom />
    <Icons.Bookmark />
    <Icons.BookmarkFill />
    <Icons.Emoji />
    <Icons.Explore />
    <Icons.ExplorerFill />
    <Icons.Gif />
    <Icons.Home />
    <Icons.HomeFill />
    <Icons.Like />
    <Icons.Lists />
    <Icons.ListsFill />
    <Icons.Media />
    <Icons.Messages />
    <Icons.MessagesFill />
    <Icons.More />
    <Icons.Notification />
    <Icons.NotificationFill />
    <Icons.Options />
    <Icons.Profile />
    <Icons.ProfileFill />
    <Icons.Question />
    <Icons.Reply />
    <Icons.Retweet />
    <Icons.Search />
    <Icons.Share />
    <Icons.TimelineProp />
    <Icons.Twitter />
  </div>
)
export const ProfilePic = () => <Avatar />
export const Box = () => <ProfileBox />
