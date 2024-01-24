import styled from 'styled-components'

export const NotFoundNavigationBarContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 40px;
`

export const NotFoundImage = styled.img`
  width: 500px;
  height: 400px;
  margin-bottom: 15px;
`

export const NotFoundHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 30px;
  color:${props => props.color}
  font-weight: 600;
  text-align: center;
`

export const NotFoundPara = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  color: #909090;
  font-weight: 400;
  text-align: center;
`
