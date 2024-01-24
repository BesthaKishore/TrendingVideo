import {
  FailureContainer,
  FailureImage,
  FailureHeading,
  FailurePara,
  FailureButton,
} from './styledComponents'

import ThemeAndVideoContext from '../../Context/ThemeAndVideoContext'

const FailureView = props => {
  const {onRetry} = props

  const onClickRetryBtn = () => {
    onRetry()
  }

  return (
    <ThemeAndVideoContext.Consumer>
      {value => {
        const {isDark} = value

        const FailureImg = isDark
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'

        const FailureHeadingText = isDark ? '#f1f5f9' : '#00306e'

        const FailureParaText = isDark ? '#e2e8f0' : '#475569'

        return (
          <FailureContainer>
            <FailureImage src={FailureImg} alt="failure view" />
            <FailureHeading FailureHeadingText={FailureHeadingText}>
              Oops! something Went Wrong
            </FailureHeading>
            <FailurePara FailureParaText={FailureParaText}>
              We are having some trouble to complete your request.
            </FailurePara>
            <FailurePara FailureParaText={FailureParaText}>
              Please ty again.
            </FailurePara>
            <FailureButton type="button" onClick={onClickRetryBtn}>
              Retry
            </FailureButton>
          </FailureContainer>
        )
      }}
    </ThemeAndVideoContext.Consumer>
  )
}

export default FailureView
