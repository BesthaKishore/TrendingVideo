import styled from 'styled-components'

export const HomeVideoContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const HomeVideoUnOrderContainer = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  padding-left: 0px;
  margin-top: 15px;
  margin-bottom: 15px;
  @media screen and (max-width: 767px) {
    flex-direction: column;
    align-items: flex-start;
  }
`

export const FailureContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  margin-top: 35px;
  margin-bottom: 35px;
`

export const FailureImage = styled.img`
  margin-top: 45px;
  margin-bottom: 15px;
  width: 400px;
`
export const FailureHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 30px;
  text-align: center;
  color: ${props => props.FailureHeadingText};
`

export const FailurePara = styled.p`
  font-family: 'Roboto';
  font-size: 23px;
  text-align: center;
  color: ${props => props.FailureParaText};
`
export const FailureButton = styled.button`
  font-family: 'Roboto';
  font-size: 18px;
  color: #ffffff;
  width: 120px;
  height: 45px;
  background-color: #4f46e5;
  border-width: 0px;
  border-radius: 6px;
`
