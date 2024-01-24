import {Link} from 'react-router-dom'

import {formatDistanceToNow} from 'date-fns'

import ThemeAndVideoContext from '../../Context/ThemeAndVideoContext'

import './index.css'

import {
  VideoCardListBgContainer,
  VideoCardListCardContainer,
  VideoCardListImage,
  VideoCardDetailsContainer,
  EachDetailsContainer,
  ProfileImageUrl,
  VideoCardTitle,
  EachItemsDetailsContainer,
  EachItemsName,
  NumberOfViews,
  Dot,
} from './styledComponent'

const VideoCardList = props => {
  const {eachVideoDetails} = props
  const {
    thumbnailUrl,
    title,
    profileImageUrl,
    name,
    publishedAt,
    viewCount,
    id,
  } = eachVideoDetails

  const CurrentDate = formatDistanceToNow(new Date(publishedAt))

  return (
    <ThemeAndVideoContext.Consumer>
      {value => {
        const {isDark} = value

        const BgTextColor = isDark ? '#f9f9f9' : '#231f20'

        const TextColor = isDark ? ' #cbd5e1' : '#909090'

        return (
          <Link to={`/videos/${id}`} className="nav_link">
            <VideoCardListCardContainer>
              <VideoCardListBgContainer>
                <VideoCardListCardContainer>
                  <VideoCardListImage
                    src={thumbnailUrl}
                    alt="video thumbnail"
                  />
                  <VideoCardDetailsContainer>
                    <ProfileImageUrl src={profileImageUrl} alt="channel logo" />
                    <EachDetailsContainer>
                      <VideoCardTitle BgTextColor={BgTextColor}>
                        {title}
                      </VideoCardTitle>
                      <EachItemsDetailsContainer>
                        <EachItemsName TextColor={TextColor}>
                          {name}
                        </EachItemsName>
                        <NumberOfViews TextColor={TextColor}>
                          {viewCount} views <Dot>&#8226;</Dot> {CurrentDate} ago
                        </NumberOfViews>
                      </EachItemsDetailsContainer>
                    </EachDetailsContainer>
                  </VideoCardDetailsContainer>
                </VideoCardListCardContainer>
              </VideoCardListBgContainer>
            </VideoCardListCardContainer>
          </Link>
        )
      }}
    </ThemeAndVideoContext.Consumer>
  )
}

export default VideoCardList
