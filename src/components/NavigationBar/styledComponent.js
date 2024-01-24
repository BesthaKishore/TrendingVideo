import {Link} from 'react-router-dom'

import styled from 'styled-components'

export const NavBarLink = styled(Link)`
  text-decoration: none;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`

export const NavigationBarBgContainer = styled.div`
  background-color: ${props => props.bgColor};
  width: 23%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 25px;
  padding-top: 0px;
  margin-top: 0px;
  @media screen and (max-width: 767px) {
    display: none;
  }
`

export const NavigationBarCardContainer = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0px;
`

export const NavigationBarOptionsContainer = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-top: 0px;
  margin-bottom: 10px;
  background-color: ${props => props.TabBgColor};
  width: 100%;
  padding-left: 35px;
  margin-bottom: 10px;
`

export const NavigationBarItems = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  margin-left: 25px;
  margin-right: 15px;
  font-weight: 600;
  color: ${props => props.TextColor};
`
export const NavigationBarCardContainerBottom = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-left: 35px;
`

export const BottomHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 23px;
  font-weight: 600;
  color: ${props => props.TextColor};
`

export const NavigationBarImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: 20px;
  margin-bottom: 20px;
  padding-left: 0px;
`

export const NavigationBarImage = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 15px;
`

export const NavigationBarPara = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  line-height: 1.5;
  color: ${props => props.TextColor};
  font-weight: 500;
`
