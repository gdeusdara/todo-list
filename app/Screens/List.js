import React from 'react';
import { View, Text } from 'react-native';

export default class List extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>
            List Page
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