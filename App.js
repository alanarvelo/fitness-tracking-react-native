import React from 'react'
import { View } from 'react-native'
import AddEntry from './components/AddEntry'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import entries from './reducers'
import History from './components/History'

export default function App() {
  return (
    <Provider store={createStore(entries)}>
      <View style={{flex: 1}}>
        <View style={{height: 20}}>
          <History />
        </View>
      </View>
    </Provider>
  )
}