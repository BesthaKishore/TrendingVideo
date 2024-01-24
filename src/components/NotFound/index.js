import Header from '../Header'

import NavigationBar from '../NavigationBar'

import {
  NotFoundNavigationBarContainer,
  NotFoundContainer,
  NotFoundImage,
  NotFoundHeading,
  NotFoundPara,
} from './styledComponent'

import ThemeAndVideoContext from '../../Context/ThemeAndVideoContext'

const NotFound = () => (
  <ThemeAndVideoContext.Consumer>
    {value => {
      const {isDark} = value

      const color = isDark ? '#000000' : '#ffffff'

      const images = isDark
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'

      return (
        <>
          <Header />
          <NotFoundNavigationBarContainer>
            <NavigationBar />
            <NotFoundContainer>
              <>
                <NotFoundImage src={images} alt="not found" />
                <NotFoundHeading color={color}>Page Not Found</NotFoundHeading>
                <NotFoundPara>
                  We are sorry,the page you requested could not be found.
                </NotFoundPara>
              </>
            </NotFoundContainer>
          </NotFoundNavigationBarContainer>
        </>
      )
    }}
  </ThemeAndVideoContext.Consumer>
)

export default NotFound
