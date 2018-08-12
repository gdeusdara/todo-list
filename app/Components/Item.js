import React from 'react';
import { TouchableHighlight, View, Text, Switch } from 'react-native';

export default class Item extends React.Component {
  render() {
    return (
      <TouchableHighlight
        onPress={() => this.props.onPress()}
      >
        <View style={{ alignItems: 'center', flexDirection: 'row', backgroundColor: '#fff', justifyContent: 'space-around', height: 60 }}>
          <View style={{ flex: 6, alignItems: 'flex-start', justifyContent: 'center', marginLeft: '3%' }}>
            <Text style={{ marginLeft: 3, color: '#212121' }} >
              {this.props.item.description}
            </Text>
          </View>
          <View style={{ flex: 2, alignItems: 'flex-end', justifyContent: 'center', flexDirection: 'row' }}>

            {this.props.item.done ?
              <Text style={{ color: '#1976D2', alignSelf: 'center' }}>
                Feito
              </Text>
              :
              <View style={{ flex: 0.7 }} />
            }
            <Switch
              onValueChange={() => this.props.switch()}
              value={this.props.item.done}
            />
          </View>
        </View>
      </TouchableHighlight>
    );
  }
}