import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header.js'
import { Switch, Route } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Contacts from './Pages/Contacts'
import Blog from './Pages/Blog'
import Error from './Pages/Error'

// import DragDrop1 from './Pages/DragDrop1'
import DragDropPro from './Pages/DragDropPro'

export const DataContext = React.createContext();


export default class App extends React.Component {
  state = {
    userAuth: false
  }

  componentDidMount() {
    const user = localStorage.getItem('user');

    user 
    ? this.setState({userAuth: true})
    : this.setState({userAuth: false})
  }

  render() {

    return (
      <DataContext.Provider value={{filter: 'white-theme'}}>

        <Header userAuth={this.state.userAuth}/>

        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/about" component={ () => <About userAuth={this.state.userAuth}/> } />
          <Route path="/contacts" component={Contacts} />
          <Route path="/blog" component={Blog} />
          { 
            this.state.userAuth
            ? <Route path="/tasks" component={ DragDropPro } />
            : null
          }
          <Route render={Error} />
        </Switch>
      </DataContext.Provider>
    )
  }
}