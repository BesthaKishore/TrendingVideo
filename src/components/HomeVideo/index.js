import VideoCardList from '../VideoCardList'

import {
  HomeVideoContainer,
  HomeVideoUnOrderContainer,
  FailureContainer,
  FailureImage,
  FailureHeading,
  FailurePara,
  FailureButton,
} from './styledComponent'

import ThemeAndVideoContext from '../../Context/ThemeAndVideoContext'

const HomeVideo = props => {
  const {videoList, onRetry} = props

  const onClickRetryBtn = () => {
    onRetry()
  }

  const VideoLength = videoList.length

  return (
    <ThemeAndVideoContext.Consumer>
      {value => {
        const {isDark} = value

        const FailureImg =
          'https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png'

        const FailureHeadingText = isDark ? '#f1f5f9' : '#231f20'

        const FailureParaText = isDark ? '#e2e8f0' : '#475569'

        return (
          <HomeVideoContainer>
            {VideoLength > 0 ? (
              <HomeVideoUnOrderContainer>
                {videoList.map(eachVideo => (
                  <VideoCardList
                    eachVideoDetails={eachVideo}
                    key={eachVideo.id}
                  />
                ))}
              </HomeVideoUnOrderContainer>
            ) : (
              <FailureContainer>
                <FailureImage src={FailureImg} alt="failure view" />
                <FailureHeading FailureHeadingText={FailureHeadingText}>
                  No Search results found
                </FailureHeading>
                <FailurePara FailureParaText={FailureParaText}>
                  Try different key words or remove search filter
                </FailurePara>
                <FailureButton type="button" onClick={onClickRetryBtn}>
                  Retry
                </FailureButton>
              </FailureContainer>
            )}
          </HomeVideoContainer>
        )
      }}
    </ThemeAndVideoContext.Consumer>
  )
}

export default HomeVideo
