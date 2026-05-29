import { StyleSheet, Text, useColorScheme, View } from 'react-native';
import React from 'react';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View
      style={[
        styles.container,
        isDarkMode ? styles.blackBackground : styles.whiteBackground,
      ]}
    >
      <Text style={isDarkMode ? styles.blackText : styles.whiteText}>
        Test⭐
      </Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  blackBackground: {
    backgroundColor: '#141313ff',
  },
  whiteBackground: {
    backgroundColor: '#ffffff',
  },
  blackText: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  whiteText: {
    color: '#000000',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
