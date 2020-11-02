import styled, { css } from 'styled-components'
import { LogoProps } from '.'
import media from 'styled-media-query'

const wrapperModifiers = {
  normal: () => css`
    font-size: 1rem;
  `,
  large: () => css`
    font-size: 2rem;
  `,
  hideOnMobile: () => css`
    ${media.lessThan('medium')`
    font-size: 1rem;
    .text{
        display: none;
    }
    `}
  `
}

export const Wrapper = styled.div<LogoProps>`
  ${({ theme, color, size, hideOnMobile }) => css`
    color: ${theme.colors[color!]};
    ${!!size && wrapperModifiers[size]};
    ${!!hideOnMobile && wrapperModifiers.hideOnMobile}
  `}
`
