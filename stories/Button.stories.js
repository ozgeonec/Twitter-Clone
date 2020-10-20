import React from 'react'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs'
import Button from '../components/button'
import NavButton from '../components/nav-button'
import Navigation from '../components/navigation'
import { Home } from '../components/icons'
import TextTitle from '../components/text-title'
import ThemeButton from '../components/theme-button'

export default {
  title: 'Example/Button',
  component: Button,
  decorators: [withKnobs]
}

const Template = (args) => <Button {...args} />
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
export const Navi = () => {
  const flat = boolean('Flat', false)
  return (
    <Navigation flat={flat} selectedKey="explore">
      Save
    </Navigation>
  )
}
