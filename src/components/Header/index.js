import {Link, withRouter} from 'react-router-dom'

import Cookies from 'js-cookie'

import Popup from 'reactjs-popup'

import {BsMoon, BsBrightnessHigh} from 'react-icons/bs'

import {MdMenu} from 'react-icons/md'

import {FiLogOut} from 'react-icons/fi'

import ThemeAndVideoContext from '../../Context/ThemeAndVideoContext'

import {
  HeaderDesktopBgContainer,
  HeaderDesktopCardContainer,
  HeaderMobileCardContainer,
  HeaderDesktopImage,
  HeaderUnOrderContainer,
  HeaderListContainer,
  HeaderButton,
  HeaderListProfile,
  HeaderLogOutButton,
  PopupContainer,
  PopupContainerPara,
  ButtonContainer,
  CloseButton,
  ConfirmButton,
} from './styledComponent'

const Header = props => (
  <ThemeAndVideoContext.Consumer>
    {value => {
      const {isDark, toggleTheme} = value

      const color = isDark ? '#ffffff' : '#3b82f6'

      const PopColor = isDark ? '#ffffff' : '#00306e'

      const bgColor = isDark ? '#231f20' : '#f8fafc'

      const bgImage = isDark
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

      const {history} = props

      const onClickLogout = () => {
        Cookies.remove('jwt_token')
        history.replace('/login')
      }

      const onchangeThemes = () => {
        toggleTheme()
      }

      return (
        <HeaderDesktopBgContainer bgColor={bgColor}>
          <HeaderDesktopCardContainer>
            <Link to="/">
              <HeaderDesktopImage src={bgImage} alt="website logo" />
            </Link>
            <HeaderUnOrderContainer>
              <HeaderListContainer>
                <HeaderButton
                  type="button"
                  onClick={onchangeThemes}
                  data-testid="theme"
                >
                  {isDark ? (
                    <BsBrightnessHigh color="ffffff" size={25} />
                  ) : (
                    <BsMoon size={25} />
                  )}
                </HeaderButton>
              </HeaderListContainer>
              <HeaderListContainer>
                <HeaderListProfile
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                  alt="profile"
                />
              </HeaderListContainer>
              <HeaderListContainer>
                <Popup
                  modal
                  trigger={
                    <HeaderLogOutButton
                      type="button"
                      color={color}
                      bgColor={bgColor}
                    >
                      Logout
                    </HeaderLogOutButton>
                  }
                >
                  {close => (
                    <>
                      <PopupContainer bgColor={bgColor}>
                        <PopupContainerPara PopColor={PopColor}>
                          Are you sure you want to logout?
                        </PopupContainerPara>
                        <ButtonContainer>
                          <CloseButton type="button" onClick={() => close()}>
                            Cancel
                          </CloseButton>
                          <ConfirmButton type="button" onClick={onClickLogout}>
                            Confirm
                          </ConfirmButton>
                        </ButtonContainer>
                      </PopupContainer>
                    </>
                  )}
                </Popup>
              </HeaderListContainer>
            </HeaderUnOrderContainer>
          </HeaderDesktopCardContainer>

          <HeaderMobileCardContainer>
            <Link to="/">
              <HeaderDesktopImage src={bgImage} alt="website logo" />
            </Link>
            <HeaderUnOrderContainer>
              <HeaderListContainer>
                <HeaderButton
                  type="button"
                  onClick={onchangeThemes}
                  data-testid="theme"
                >
                  {isDark ? (
                    <BsBrightnessHigh color="ffffff" size={35} />
                  ) : (
                    <BsMoon size={35} />
                  )}
                </HeaderButton>
              </HeaderListContainer>
              <HeaderListContainer>
                {isDark ? (
                  <MdMenu size={35} color="ffffff" />
                ) : (
                  <MdMenu size={35} />
                )}
              </HeaderListContainer>
              <HeaderListContainer>
                <Popup
                  modal
                  trigger={
                    isDark ? (
                      <FiLogOut size={35} color="ffffff" />
                    ) : (
                      <FiLogOut size={35} />
                    )
                  }
                >
                  {close => (
                    <>
                      <PopupContainer bgColor={bgColor}>
                        <PopupContainerPara PopColor={PopColor}>
                          Are you sure you want to logout?
                        </PopupContainerPara>
                        <ButtonContainer>
                          <CloseButton type="button" onClick={() => close()}>
                            Cancel
                          </CloseButton>
                          <ConfirmButton type="button" onClick={onClickLogout}>
                            Confirm
                          </ConfirmButton>
                        </ButtonContainer>
                      </PopupContainer>
                    </>
                  )}
                </Popup>
              </HeaderListContainer>
            </HeaderUnOrderContainer>
          </HeaderMobileCardContainer>
        </HeaderDesktopBgContainer>
      )
    }}
  </ThemeAndVideoContext.Consumer>
)

export default withRouter(Header)
