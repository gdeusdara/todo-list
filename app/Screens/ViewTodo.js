import React from 'react';
import { View, Text } from 'react-native';

export default class ViewTodo extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>
            View Page
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