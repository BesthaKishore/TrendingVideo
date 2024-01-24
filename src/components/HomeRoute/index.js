import {Component} from 'react'

import {AiOutlineClose, AiOutlineSearch} from 'react-icons/ai'

import Cookies from 'js-cookie'

import Loader from 'react-loader-spinner'

import Header from '../Header'

import NavigationBar from '../NavigationBar'

import FailureView from '../FailureView'

import HomeVideo from '../HomeVideo'

import ThemeAndVideoContext from '../../Context/ThemeAndVideoContext'

import {
  HomeBgCardContainer,
  HomeBgItemsCard,
  HomeBgCardItemsContainer,
  VideoPlayContainer,
  PremiumItemsContainer,
  PremiumItemsCardContainer,
  PremiumItemsImage,
  PremiumItemsPara,
  PremiumButton,
  PremiumDeleteButton,
  HomeSearchInputContainer,
  HomeInput,
  HomeSearchInputButton,
  LoaderContainer,
} from './styledComponents'

const ApiStatuesContent = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  in_loading: 'IN_LOADING',
}

class HomeRoute extends Component {
  state = {
    PremiumShow: true,
    SearchInput: '',
    videoList: [],
    ApiStatus: ApiStatuesContent.initial,
  }

  componentDidMount() {
    this.getNxtWatchVideo()
  }

  getNxtWatchVideo = async () => {
    this.setState({ApiStatus: ApiStatuesContent.in_loading})
    const {SearchInput} = this.state

    const ApiUrl = `https://apis.ccbp.in/videos/all?search=${SearchInput}`

    const jwtToken = Cookies.get('jwt_token')

    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }

    const response = await fetch(ApiUrl, options)

    if (response.ok === true) {
      const fetchData = await response.json()

      const UpDateData = fetchData.videos.map(eachVideos => ({
        name: eachVideos.channel.name,
        profileImageUrl: eachVideos.channel.profile_image_url,
        id: eachVideos.id,
        publishedAt: eachVideos.published_at,
        thumbnailUrl: eachVideos.thumbnail_url,
        title: eachVideos.title,
        viewCount: eachVideos.view_count,
      }))
      this.setState({
        videoList: UpDateData,
        ApiStatus: ApiStatuesContent.success,
      })
    } else {
      this.setState({ApiStatus: ApiStatuesContent.failure})
    }
  }

  onClickPremiumButton = () => {
    this.setState({PremiumShow: false})
  }

  onChangeSearchInput = event => {
    this.setState({SearchInput: event.target.value})
  }

  onClickGetSearchInput = () => {
    this.getNxtWatchVideo()
  }

  onRetry = () => {
    this.setState({SearchInput: ''}, this.getNxtWatchVideo)
  }

  getRenderLoader = () => (
    <LoaderContainer className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#4f46e5" height="80" width="80" />
    </LoaderContainer>
  )

  getRenderSuccess = () => {
    const {videoList} = this.state
    return <HomeVideo videoList={videoList} onRetry={this.onRetry} />
  }

  getRenderFailure = () => <FailureView onRetry={this.onRetry} />

  getRenderApiContent = () => {
    const {ApiStatus} = this.state

    switch (ApiStatus) {
      case ApiStatuesContent.in_loading:
        return this.getRenderLoader()
      case ApiStatuesContent.success:
        return this.getRenderSuccess()
      case ApiStatuesContent.failure:
        return this.getRenderFailure()
      default:
        return null
    }
  }

  render() {
    const {PremiumShow, SearchInput} = this.state
    return (
      <ThemeAndVideoContext.Consumer>
        {value => {
          const {isDark} = value

          const BgColor = isDark ? '#181818 ' : '#f9f9f9'

          const BorderColor = isDark ? '#383838' : '#d7dfe9'

          const BorderBgColor = isDark ? '#424242' : '#f1f5f9'

          const SearchColor = isDark ? '#f4f4f4' : '#212121'

          return (
            <HomeBgCardContainer>
              <Header />
              <HomeBgItemsCard>
                <NavigationBar />
                <HomeBgCardItemsContainer>
                  <VideoPlayContainer BgColor={BgColor} data-testid="home">
                    {PremiumShow ? (
                      <PremiumItemsContainer data-testid="banner">
                        <PremiumItemsCardContainer>
                          <PremiumItemsImage
                            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                            alt="website logo"
                          />
                          <PremiumItemsPara>
                            Buy NXT Watch Premium prepaid plans with <br /> UPI
                          </PremiumItemsPara>
                          <>
                            <PremiumButton type="button">
                              GET IT NOW
                            </PremiumButton>
                          </>
                        </PremiumItemsCardContainer>
                        <PremiumDeleteButton
                          type="button"
                          data-testid="close"
                          onClick={this.onClickPremiumButton}
                        >
                          <AiOutlineClose size={25} />
                        </PremiumDeleteButton>
                      </PremiumItemsContainer>
                    ) : null}
                    <HomeSearchInputContainer BorderColor={BorderColor}>
                      <HomeInput
                        type="search"
                        placeholder="Search"
                        SearchColor={SearchColor}
                        value={SearchInput}
                        onChange={this.onChangeSearchInput}
                      />
                      <HomeSearchInputButton
                        type="button"
                        BorderBgColor={BorderBgColor}
                        BorderColor={BorderColor}
                        data-testid="searchButton"
                        onClick={this.onClickGetSearchInput}
                      >
                        <AiOutlineSearch size={20} />
                      </HomeSearchInputButton>
                    </HomeSearchInputContainer>
                    {this.getRenderApiContent()}
                  </VideoPlayContainer>
                </HomeBgCardItemsContainer>
              </HomeBgItemsCard>
            </HomeBgCardContainer>
          )
        }}
      </ThemeAndVideoContext.Consumer>
    )
  }
}

export default HomeRoute
