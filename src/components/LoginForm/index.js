import {Component} from 'react'

import Cookies from 'js-cookie'

import {Redirect} from 'react-router-dom'

import ThemeAndVideoContext from '../../Context/ThemeAndVideoContext'

import {
  LoginFormBgContainer,
  LoginFormContainer,
  LoginFormImage,
  LoginFormInputContainer,
  InputLabel,
  InputItems,
  CheckBoxContainer,
  CheckBox,
  CheckBoxLabel,
  LoginFormButton,
  LoginFormError,
} from './styledComponents'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    checked: false,
    isShow: false,
    errorMsg: '',
  }

  onSubmitFailure = msg => {
    this.setState({isShow: true, errorMsg: msg})
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props

    Cookies.set('jwt_token', jwtToken, {expires: 30, path: '/'})
    history.replace('/')
  }

  onSubmitForm = async event => {
    event.preventDefault()

    const {username, password} = this.state

    const ApiUrl = `https://apis.ccbp.in/login`

    const userDetails = {username, password}

    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(ApiUrl, options)
    const fetchData = await response.json()

    console.log(fetchData)
    if (response.ok === true) {
      this.onSubmitSuccess(fetchData.jwt_token)
    } else {
      this.onSubmitFailure(fetchData.error_msg)
    }
  }

  onChangeUserInput = event => {
    this.setState({username: event.target.value})
  }

  onChangePasswordInput = event => {
    this.setState({password: event.target.value})
  }

  onChangeCheckBoxInput = () => {
    this.setState(prevState => ({checked: !prevState.checked}))
  }

  getRenderInputUser = () => {
    const {username} = this.state

    return (
      <LoginFormInputContainer>
        <InputLabel htmlFor="Username">USERNAME</InputLabel>
        <InputItems
          type="text"
          placeholder="Username"
          value={username}
          id="Username"
          onChange={this.onChangeUserInput}
        />
      </LoginFormInputContainer>
    )
  }

  getRenderPasswordUser = () => {
    const {password, checked} = this.state
    const checkType = checked ? 'text' : 'password'

    return (
      <LoginFormInputContainer>
        <InputLabel htmlFor="password">PASSWORD</InputLabel>
        <InputItems
          type={checkType}
          placeholder="Password"
          value={password}
          id="password"
          onChange={this.onChangePasswordInput}
        />
        <CheckBoxContainer>
          <CheckBox
            type="checkbox"
            id="checkbox"
            value={checked}
            onChange={this.onChangeCheckBoxInput}
          />
          <CheckBoxLabel htmlFor="checkbox">Show Password</CheckBoxLabel>
        </CheckBoxContainer>
      </LoginFormInputContainer>
    )
  }

  render() {
    const {isShow, errorMsg} = this.state
    const jwtToken = Cookies.get('jwt_token')

    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <ThemeAndVideoContext.Consumer>
        {value => {
          const {isDark} = value

          const bgColor = isDark ? '#475569' : '#f9f9f9'

          const bgColorItems = isDark ? '#000000' : '#ffffff'

          const bgImage = isDark
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

          return (
            <LoginFormBgContainer bgColor={bgColor}>
              <LoginFormContainer
                onSubmit={this.onSubmitForm}
                bgColorItems={bgColorItems}
              >
                <LoginFormImage src={bgImage} alt="website logo" />
                {this.getRenderInputUser()}
                {this.getRenderPasswordUser()}
                <LoginFormButton type="submit">Login</LoginFormButton>
                {isShow && <LoginFormError>*{errorMsg}</LoginFormError>}
              </LoginFormContainer>
            </LoginFormBgContainer>
          )
        }}
      </ThemeAndVideoContext.Consumer>
    )
  }
}

export default LoginForm
