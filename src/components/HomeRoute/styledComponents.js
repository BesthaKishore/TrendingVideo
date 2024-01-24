import styled from 'styled-components'

export const HomeBgCardContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const Heading = styled.h1``

export const HomeBgItemsCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`

export const HomeBgCardItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
`

export const VideoPlayContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: ${props => props.BgColor};
  min-height: 100vh;
  padding: 30px;
`

export const PremiumItemsContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png ');
  background-size: cover;
  padding: 30px;
  width: 100%;
  min-height: 40vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 20px;
`

export const PremiumItemsCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`

export const PremiumItemsImage = styled.img`
  width: 170px;
  margin-right: 25px;
  margin-bottom: 15px;
`
export const PremiumItemsPara = styled.p`
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: 500;
  line-height: 1.5;
  color: #313131;
`

export const PremiumButton = styled.button`
  width: 150px;
  height: 50px;
  background-color: transparent;
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 600;
  color: #313131;
  border: solid 2px #313131;
  margin-top: 25px;
`
export const PremiumDeleteButton = styled.button`
  background-color: transparent;
  border-width: 0px;
`

export const HomeSearchInputContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 550px;
  border-color: ${props => props.BorderColor};
  border-width: 1px;
  border-style: solid;
  @media screen and (max-width: 767px) {
    width: 100%;
  }
`

export const HomeInput = styled.input`
  width: 100%;
  padding: 8px;
  font-family: 'Roboto';
  font-size: 18px;
  color: ${props => props.SearchColor};
  border-width: 0px;
  background-color: transparent;
  cursor: pointer;
  outline: none;
`

export const HomeSearchInputButton = styled.button`
  width: 100px;
  padding: 8px;
  background-color: ${props => props.BorderBgColor};
  border-color: ${props => props.BorderColor};
  border-width: 1px;
  border-style: solid;
`

export const LoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`
