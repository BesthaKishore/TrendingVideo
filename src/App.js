import {Switch, Route, Redirect} from 'react-router-dom'

import {Component} from 'react'

import LoginForm from './components/LoginForm'

import HomeRoute from './components/HomeRoute'

import ProtectedRoute from './components/ProtectedRoute'

import VideoItemDetails from './components/VideoItemDetails'

import TrendingRoute from './components/TrendingRoute'

import NotFound from './components/NotFound'

import ThemeAndVideoContext from './Context/ThemeAndVideoContext'

import './App.css'

class App extends Component {
  state = {isDark: false, activeTab: 'HOME'}

  changeTab = tab => {
    this.setState({activeTab: tab})
  }

  toggleTheme = () => {
    this.setState(prevState => ({isDark: !prevState.isDark}))
  }

  render() {
    const {isDark, activeTab} = this.state
    return (
      <ThemeAndVideoContext.Provider
        value={{
          isDark,
          activeTab,
          toggleTheme: this.toggleTheme,
          changeTab: this.changeTab,
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginForm} />
          <ProtectedRoute exact path="/" component={HomeRoute} />
          <ProtectedRoute exact path="/trending" component={TrendingRoute} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <Route exact path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </ThemeAndVideoContext.Provider>
    )
  }
}
export default App
