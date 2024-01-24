import styled from 'styled-components'

export const LoginFormBgContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: ${props => props.bgColor};
`

export const LoginFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 450px;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.12);
  padding: 30px;
  border-radius: 10px;
  padding-bottom: 30px;
  background-color: ${props => props.bgColorItems};
`

export const LoginFormImage = styled.img`
  width: 180px;
  align-self: center;
  margin-bottom: 15px;
`

export const LoginFormInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  margin-top: 15px;
  margin-bottom: 15px;
`

export const InputLabel = styled.label`
  font-family: 'Roboto';
  font-size: 14px;
  color: #475569;
  font-weight: 600;
`

export const InputItems = styled.input`
  width: 100%;
  padding: 10px;
  font-family: 'Roboto';
  font-size: 14px;
  color: #475569;
  margin-top: 6px;
  margin-bottom: 6px;
  background-color: #f1f5f9;
  border: 1px solid #94a3b8;
  cursor: pointer;
  outline: none;
  border-radius: 4px;
`
export const CheckBoxContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-top: 15px;
  margin-bottom: 15px;
`

export const CheckBox = styled.input`
  width: 18px;
  height: 18px;
  margin-right: 10px;
`

export const CheckBoxLabel = styled.label`
  font-family: 'Roboto';
  font-size: 18px;
  color: #475569;
  font-weight: 600;
`

export const LoginFormButton = styled.button`
  width: 100%;
  height: 40px;
  border-width: 0px;
  border-radius: 8px;
  font-family: 'Roboto';
  font-size: 14px;
  color: #ffffff;
  background-color: #4f46e5;
  cursor: pointer;
  outline: none;
`
export const LoginFormError = styled.p`
  font-size: 16px;
  font-family: 'Roboto';
  color: #ff0000;
`
