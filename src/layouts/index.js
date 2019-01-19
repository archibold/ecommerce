import React, { Component } from 'react'

import getFirebase from '../firebase'
import FirebaseContext from '../components/FirebaseContext'

class Layout extends Component {
  state = {
    firebase: null,
  }

  componentDidMount() {
    const app = import('firebase/app')
    const database = import('firebase/database')

    Promise.all([app, database]).then(values => {
      const firebase = getFirebase(values[0])
      this.setState({ firebase })
    })
  }

  render = () => {
    const { firebase } = this.state

    if (!firebase) return null

    return (
      <FirebaseContext.Provider value={firebase}>
        {this.props.children}
      </FirebaseContext.Provider>
    )
  }
}

export default Layout
