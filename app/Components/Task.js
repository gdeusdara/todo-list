import React from 'react';
import { View, Text } from 'react-native';

export default class Task extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>
            Task Page
        </Text>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
}