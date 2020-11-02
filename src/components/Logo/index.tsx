import * as S from './styles'

export type LogoProps = {
  color?: 'white' | 'black'
  size?: 'normal' | 'large'
  hideOnMobile?: boolean
}

const Logo = ({
  color = 'black',
  size = 'normal',
  hideOnMobile = false
}: LogoProps) => (
  <S.Wrapper color={color} size={size} hideOnMobile={hideOnMobile}>
    <h1>
      The Music Shop <span className="text">Your equip is here</span>
    </h1>
  </S.Wrapper>
)

export default Logo
