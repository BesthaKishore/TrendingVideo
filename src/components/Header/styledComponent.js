import styled from 'styled-components'

export const HeaderDesktopBgContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  background-color: ${props => props.bgColor};
`

export const HeaderDesktopCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: 40px;
  padding-right: 40px;
  @media screen and (max-width: 766px) {
    display: none;
  }
`
export const HeaderMobileCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: 40px;
  padding-right: 40px;
  @media screen and (min-width: 767px) {
    display: none;
  }
`

export const HeaderDesktopImage = styled.img`
  width: 160px;
  margin-right: 10px;
`

export const HeaderUnOrderContainer = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding-left: 0px;
`

export const HeaderListContainer = styled.li`
  list-style-type: none;
  margin-right: 20px;
  margin-left: 20px;
`

export const HeaderButton = styled.button`
  background-color: transparent;
  border-width: 0px;
`

export const HeaderListProfile = styled.img`
  width: 40px;
  height: 40px;
`
export const HeaderLogOutButton = styled.button`
  width: 100px;
  height: 30px;
  background-color: ${props => props.bgColor};
  font-family: 'Roboto';
  font-size: 16px;
  color: ${props => props.color};
  font-weight: 600;
  border-color: ${props => props.color};
  border-style: solid;
  border-width: 1px;
  border-radius: 3px;
`
export const PopupContainer = styled.div`
  background-color: ${props => props.bgColor};
  width: 450px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 40vh;
  border-radius: 10px;
`

export const PopupContainerPara = styled.p`
  font-family: 'Roboto';
  font-size: 20px;
  color: ${props => props.PopColor};
  font-weight: 500;
`

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  margin-top: 15px;
`

export const CloseButton = styled.button`
  width: 90px;
  height: 45px;
  font-family: 'Roboto';
  font-size: 18px;
  color: #7e858e;
  background-color: transparent;
  border: 1px solid #7e858e;
  border-radius: 6px;
  margin-right: 35px;
`

export const ConfirmButton = styled.button`
  width: 90px;
  height: 45px;
  font-family: 'Roboto';
  font-size: 18px;
  color: #ffffff;
  background-color: #3b82f6;
  border-width: 0px;
  border-radius: 6px;
  margin-right: 35px;
`
