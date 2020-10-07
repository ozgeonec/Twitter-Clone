import React from 'react'

import Button from '../components/button'
import NavButton from '../components/nav-button'
import Navigation from '../components/navigation'
import { Home } from '../components/icons'
import TitleBold from '../components/title-bold'

export default {
  title: 'Example/Button',
  component: Button
}

const Template = (args) => <Button {...args} />
export const Normal = () => <Button>Save</Button>
export const NavButtonExample = () => (
  <NavButton>
    <Home />
    <TitleBold>Home</TitleBold>
  </NavButton>
)
export const Navi = () => <Navigation selectedKey="explore">Save</Navigation>
