import { createGlobalStyle, css } from 'styled-components'

const GlobalStyles = createGlobalStyle`

@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-display: swap;
  font-weight: 200;
  src: local('Poppins ExtraLight'), local('Poppins-ExtraLight'),
       url('/fonts/poppins-v13-latin-200.woff2') format('woff2'),  
}

@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-display: swap;
  font-weight: 400;
  src: local('Poppins Regular'), local('Poppins-Regular'),
       url('/fonts/poppins-v13-latin-regular.woff2') format('woff2'),        
}

@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-display: swap;
  font-weight: 600;
  src: local('Poppins SemiBold'), local('Poppins-SemiBold'),
       url('/fonts/poppins-v13-latin-600.woff2') format('woff2'),        
}

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  ${({ theme }) => css`
    html {
      font-size: 62.5%;
    }
    body {
      font-family: ${theme.font.family};
      font-size: ${theme.font.sizes.medium};
    }
  `}
`

export default GlobalStyles
