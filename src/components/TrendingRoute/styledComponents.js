import styled from 'styled-components'

export const TrendingRouteBgCardContainer = styled.div``

export const TrendingRouteBgCardItemsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
`
export const TrendingRouteImageBgContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 20px;
  background-color: ${props => props.BgColorTrending};
  width: 100%;
`

export const TrendingRouteImageCon = styled.div`
  background-color: ${props => props.BgColorImage};
  padding-top: 25px;
  padding-bottom: 25px;
  padding-left: 25px;
  padding-right: 25px;
  border-radius: 50px;
  margin-right: 15px;

  @media screen and (max-width: 767px) {
    padding-top: 20px;
    padding-bottom: 20px;
    padding-left: 20px;
    padding-right: 20px;
  }
`

export const TrendingRouteHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 45px;
  font-weight: 600;
  color: ${props => props.TextColor};
  @media screen and (max-width: 767px) {
    font-size: 30px;
  }
`

export const DesktopContainer = styled.div``
