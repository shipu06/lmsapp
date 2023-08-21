/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { persistor, store } from './src/redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import GlobalContext from './src/context/GlobalContext';
import SplashScreen from './src/screen/splashScreen/SplashScreen';
import i18n from './src/localization/i18n';
import { I18nextProvider } from 'react-i18next';
import ScreenContainer from './src/screen/screenContainer/ScreenContainer';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

function App(): JSX.Element {
  const [isDark, setIsDark] = useState(false);
  const backgroundStyle = {
    backgroundColor: isDark ? Colors.darker : Colors.lighter,
    flex: 1
  };


  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <PersistGate loading={<SplashScreen />} persistor={persistor}>
          <GlobalContext.Provider value={{ isDark, setIsDark }}>
            <I18nextProvider i18n={i18n}>
              <SafeAreaView style={backgroundStyle}>
                <StatusBar
                  barStyle={'light-content'}
                  backgroundColor={'black'}
                />
                <ScreenContainer />
              </SafeAreaView>
            </I18nextProvider>
          </GlobalContext.Provider>
        </PersistGate>
      </Provider>
    </SafeAreaProvider>
  );
}

export default App;
