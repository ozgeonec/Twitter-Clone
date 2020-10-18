import React from 'react'

import Button from '../components/button'
import NavButton from '../components/nav-button'
import Navigation from '../components/navigation'
import { Home } from '../components/icons'
import TextTitle from '../components/text-title'
import ThemeButton from '../components/theme-button'

export default {
  title: 'Example/Button',
  component: Button
}

const Template = (args) => <Button {...args} />
export const Normal = () => <Button>Save</Button>
export const Theme = () => (
  <div>
    <ThemeButton>Save</ThemeButton>
    <ThemeButton full>Save Full</ThemeButton>
    <ThemeButton full big>
      Save Big
    </ThemeButton>
  </div>
)
export const NavButtonExample = () => (
  <NavButton>
    <Home />
    <TextTitle>Home</TextTitle>
  </NavButton>
)
export const Navi = () => <Navigation selectedKey="explore">Save</Navigation>
