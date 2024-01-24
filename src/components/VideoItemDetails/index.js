import {Component} from 'react'

// import Cookies from 'js-cookie'

import Header from '../Header'

import NavigationBar from '../NavigationBar'

import {
  VideoItemDetailsBgContainer,
  Heading,
  VideoItemDetailsCardContainer,
} from './styledComponent'

class VideoItemDetails extends Component {
  //   componentDidMount() {
  //     this.getVideos()
  //   }

  //   getVideos = async () => {
  //     const {match} = this.props
  //     const {params} = match
  //     const {id} = params

  //     const jwtToken = Cookies.get('jwt_token')

  //     const ApiUrl = `https://apis.ccbp.in/videos/${id}`

  //     const options = {
  //       headers: {
  //         Authorization: `Bearer${jwtToken}`,
  //       },
  //       method: 'GET',
  //     }

  //     const response = await fetch(ApiUrl, options)
  //     const fetchData = await response.json()
  //   }

  render() {
    return (
      <VideoItemDetailsBgContainer>
        <Header />

        <VideoItemDetailsCardContainer>
          <NavigationBar />
          <Heading>kishore</Heading>
        </VideoItemDetailsCardContainer>
      </VideoItemDetailsBgContainer>
    )
  }
}

export default VideoItemDetails
