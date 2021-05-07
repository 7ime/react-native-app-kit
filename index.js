import 'react-native-gesture-handler'
import React from 'react'
import {AppRegistry} from 'react-native'
import {Provider} from 'react-redux'
import {ThemeProvider} from 'styled-components/native'

import appData from './app.json'
import {sagaMiddleware} from './src/store/middleware'
import saga from './src/store/saga'
import getAppStore from './src/store'
import theme from './src/styles/theme'
import App from './src/components/app'

sagaMiddleware.run(saga)

const RN = () => (
    <Provider store={getAppStore()}>
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    </Provider>
)

AppRegistry.registerComponent(appData.name, () => RN)
