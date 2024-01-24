import {Component} from 'react'

import Cookies from 'js-cookie'

import {HiFire} from 'react-icons/hi'

import Header from '../Header'

import NavigationBar from '../NavigationBar'

import ThemeAndVideoContext from '../../Context/ThemeAndVideoContext'

import {
  TrendingRouteBgCardContainer,
  TrendingRouteBgCardItemsContainer,
  TrendingRouteImageBgContainer,
  TrendingRouteImageCon,
  TrendingRouteHeading,
} from './styledComponents'

class TrendingRoute extends Component {
  componentDidMount() {
    this.getTrendingVideo()
  }

  getTrendingVideo = async () => {
    const JwtToken = Cookies.get('jwt_token')
    const ApiUrl = `https://apis.ccbp.in/videos/trending`

    const options = {
      headers: {
        Authorization: `Bearer${JwtToken}`,
      },
      method: 'GET',
    }

    const response = await fetch(ApiUrl, options)
    const TrendingDate = await response.json()

    console.log(TrendingDate)
  }

  render() {
    return (
      <ThemeAndVideoContext.Consumer>
        {value => {
          const {isDark} = value

          const BgColorTrending = isDark ? '#383838' : '#f4f4f4'

          const BgColorImage = isDark ? '#000000' : '#e2e8f0'

          const TextColor = isDark ? '#ffffff' : '#383838'
          return (
            <TrendingRouteBgCardContainer>
              <Header />
              <TrendingRouteBgCardItemsContainer>
                <NavigationBar />
                <TrendingRouteImageBgContainer
                  BgColorTrending={BgColorTrending}
                >
                  <TrendingRouteImageCon BgColorImage={BgColorImage}>
                    <HiFire size={35} color="#ff0000" />
                  </TrendingRouteImageCon>
                  <TrendingRouteHeading TextColor={TextColor}>
                    Trending
                  </TrendingRouteHeading>
                </TrendingRouteImageBgContainer>
              </TrendingRouteBgCardItemsContainer>
            </TrendingRouteBgCardContainer>
          )
        }}
      </ThemeAndVideoContext.Consumer>
    )
  }
}

export default TrendingRoute
