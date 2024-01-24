import styled from 'styled-components'

export const VideoCardListBgContainer = styled.li`
  list-style-type: none;
  width: 320px;
  margin-right: 25px;
  margin-left: 0px;
  margin-bottom: 25px;
  margin-top: 25px;
  @media screen and (max-width: 767px) {
    width: 100%;
  }
`

export const VideoCardListCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`

export const VideoCardListImage = styled.img`
  width: 100%;
  margin-bottom:15px;
  }
`

export const VideoCardDetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
`

export const EachDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-left: 15px;
`

export const ProfileImageUrl = styled.img`
  width: 40px;
  height: 40px;
  margin-top: 14px;
`

export const VideoCardTitle = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  line-height: 1.5;
  font-weight: 500;
  color: ${props => props.BgTextColor};
  margin-bottom: 0px;
`

export const EachItemsDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  @media screen and (max-width: 767px) {
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
  }
`

export const EachItemsName = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  color: ${props => props.TextColor};
  line-height: 1.5;
  font-weight: 400;
  margin-bottom: 0px;
  margin-right: 10px;
`

export const NumberOfViews = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  color: ${props => props.TextColor};
  line-height: 1.5;
  font-weight: 400;
  margin-bottom: 0px;
`

export const Dot = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  padding-left: 5px;
  padding-right: 5px;
`
