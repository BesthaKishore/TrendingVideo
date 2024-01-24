import {Component} from 'react'

import {MdHome} from 'react-icons/md'

import {HiFire} from 'react-icons/hi'

import {SiYoutubegaming} from 'react-icons/si'

import {RiMenuAddLine} from 'react-icons/ri'

import ThemeAndVideoContext from '../../Context/ThemeAndVideoContext'

import {
  NavigationBarBgContainer,
  NavigationBarCardContainer,
  NavBarLink,
  NavigationBarOptionsContainer,
  NavigationBarItems,
  NavigationBarCardContainerBottom,
  BottomHeading,
  NavigationBarImageContainer,
  NavigationBarImage,
  NavigationBarPara,
} from './styledComponent'

class NavigationBar extends Component {
  render() {
    return (
      <ThemeAndVideoContext.Consumer>
        {value => {
          const {isDark, activeTab, changeTab} = value

          const TextColor = isDark ? '#ffffff' : '#181818'

          const bgColor = isDark ? '#231f20' : '#f8fafc'

          const TabColor = isDark ? '#475569' : '#cbd5e1'

          const onClickHomeBtn = () => {
            changeTab('HOME')
          }

          const onClickTrendBtn = () => {
            changeTab('TRENDING')
          }

          const onClickGamingBtn = () => {
            changeTab('GAMING')
          }

          const onClickSavedBtn = () => {
            changeTab('SAVED')
          }

          return (
            <NavigationBarBgContainer bgColor={bgColor}>
              <NavigationBarCardContainer>
                <NavigationBarOptionsContainer
                  TabBgColor={activeTab === 'HOME' ? TabColor : 'none'}
                  key="home"
                  onClick={onClickHomeBtn}
                >
                  <NavBarLink to="/">
                    {activeTab === 'HOME' ? (
                      <MdHome size={25} color="#ff0000" />
                    ) : (
                      <MdHome size={25} color="#424242" />
                    )}

                    <NavigationBarItems TextColor={TextColor}>
                      Home
                    </NavigationBarItems>
                  </NavBarLink>
                </NavigationBarOptionsContainer>
                <NavigationBarOptionsContainer
                  TabBgColor={activeTab === 'TRENDING' ? TabColor : 'none'}
                  key="trending"
                  onClick={onClickTrendBtn}
                >
                  {activeTab === 'TRENDING' ? (
                    <HiFire size={25} color="#ff0000" />
                  ) : (
                    <HiFire size={25} color="#424242" />
                  )}
                  <NavBarLink to="/trending">
                    <NavigationBarItems TextColor={TextColor}>
                      Trending
                    </NavigationBarItems>
                  </NavBarLink>
                </NavigationBarOptionsContainer>
                <NavigationBarOptionsContainer
                  key="gaming"
                  TabBgColor={activeTab === 'GAMING' ? TabColor : 'none'}
                  onClick={onClickGamingBtn}
                >
                  {activeTab === 'GAMING' ? (
                    <SiYoutubegaming size={25} color="#ff0000" />
                  ) : (
                    <SiYoutubegaming size={25} color="#424242" />
                  )}
                  <NavBarLink to="/">
                    <NavigationBarItems TextColor={TextColor}>
                      Gaming
                    </NavigationBarItems>
                  </NavBarLink>
                </NavigationBarOptionsContainer>
                <NavigationBarOptionsContainer
                  key="saved"
                  TabBgColor={activeTab === 'SAVED' ? TabColor : 'none'}
                  onClick={onClickSavedBtn}
                >
                  {activeTab === 'SAVED' ? (
                    <RiMenuAddLine size={25} color="#ff0000" />
                  ) : (
                    <RiMenuAddLine size={25} color="#424242" />
                  )}
                  <NavBarLink to="/">
                    <NavigationBarItems TextColor={TextColor}>
                      Saved videos
                    </NavigationBarItems>
                  </NavBarLink>
                </NavigationBarOptionsContainer>
              </NavigationBarCardContainer>
              <NavigationBarCardContainerBottom>
                <BottomHeading TextColor={TextColor}>CONTACT US</BottomHeading>
                <NavigationBarImageContainer>
                  <NavigationBarImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                    alt="facebook logo"
                  />
                  <NavigationBarImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                    alt="twitter logo"
                  />
                  <NavigationBarImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                    alt="linked in logo"
                  />
                </NavigationBarImageContainer>
                <NavigationBarPara TextColor={TextColor}>
                  Enjoy! Now to see your <br /> channels and <br />{' '}
                  recommendations!
                </NavigationBarPara>
              </NavigationBarCardContainerBottom>
            </NavigationBarBgContainer>
          )
        }}
      </ThemeAndVideoContext.Consumer>
    )
  }
}

export default NavigationBar
