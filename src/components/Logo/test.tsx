import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import 'jest-styled-components'

import Logo from '.'

describe('<Logo />', () => {
  // it('should render a white label by default', () => {
  //   //render component

  //   renderWithTheme(<Logo />)

  //   //select the element and assert

  //   expect(screen.getByLabelText(/Music Shop/i).parentElement).toHaveStyle({
  //     color: '#FAFAFA'
  //   })
  // })

  // it('should render a black label when its passed', () => {
  //   renderWithTheme(<Logo color="black" />)
  //   expect(screen.getByLabelText(/Music Shop/i).parentElement).toHaveStyle({
  //     color: '#030517'
  //   })
  // })

  // it('should render a bigger logo setting large', () => {
  //   renderWithTheme(<Logo size="large" />)
  //   expect(screen.getByLabelText(/Music Shop/i).parentElement).toHaveStyle({
  //     width: '20rem'
  //   })
  // })
  // it('should render a bigger logo setting normal', () => {
  //   renderWithTheme(<Logo size="normal" />)
  //   expect(screen.getByLabelText(/Music Shop/i).parentElement).toHaveStyle({
  //     width: '11rem'
  //   })
  // })
  it('should not display logo in a small screen', () => {
    renderWithTheme(<Logo hideOnMobile />)
    expect(screen.getByText(/your equip is here/i)).toHaveStyleRule(
      'display',
      'none',
      {
        media: '(max-width: 768px)'
      }
    )
  })
})
