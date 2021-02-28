import { Meta, Story } from '@storybook/react/types-6-0'
import { withKnobs, text } from '@storybook/addon-knobs'
import Main from '.'

export default {
  title: 'Main',
  component: Main,
  decoratores: [withKnobs],
} as Meta

export const Basic: Story = () => (
  <Main
    title={text('Title', 'React Avançado')}
    description={text(
      'Description',
      'TypeScript, ReactJS, NextJS e StyleComponents'
    )}
  />
)

export const Secondary: Story = () => (
  <Main
    title={text('Title', 'React Avançado 2x')}
    description={text(
      'Description',
      'TypeScript, ReactJS, NextJS e StyleComponents 2x'
    )}
  />
)
