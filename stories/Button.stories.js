import React from 'react'

import Button from '../components/button'
import NavButton from '../components/nav-button'
import Navigation from '../components/navigation'

export default {
  title: 'Example/Button',
  component: Button
}

const Template = (args) => <Button {...args} />
export const Normal = () => <Button>Save</Button>
export const Menu = () => <NavButton>Save</NavButton>
export const Nav = () => <Navigation>Save</Navigation>
