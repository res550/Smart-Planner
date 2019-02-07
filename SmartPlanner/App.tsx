/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * 
 * Generated with the TypeScript template
 * https://github.com/emin93/react-native-template-typescript
 * 
 * @format
 */

import React, { Component } from 'react';
import { Provider } from 'react-redux'
import Store from './redux/Store'
import MainApp from './MainApp'

export default class App extends Component<{}> {

  public render() {
    return(
      <Provider store={Store}>
        <MainApp/>
      </Provider>
    )
  }
}