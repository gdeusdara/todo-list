import React from 'react';
import { TouchableHighlight, View, Text, Switch } from 'react-native';
import { SwipeRow, Icon, Button, Right, Left } from 'native-base';
export default class Item extends React.Component {
  render() {
    return (
      <SwipeRow
        leftOpenValue={75}
        rightOpenValue={-75}
        left={
          <Button success onPress={() => this.props.edit()}>
            <Icon active type='MaterialIcons' name='edit' />
          </Button>
        }
        body={
          <TouchableHighlight
            style={{ flex: 1, alignSelf: 'center' }}
            onPress={() => this.props.onPress()}
            underlayColor='transparent'
          >
            <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'center', alignItems: 'center', minHeight: 40 }} >
              <View style={{ flex: 8 }}>
                <Text style={{ marginLeft: 7, color: this.props.item.done ? '#2196F3' : '#212121', fontSize: 16, fontFamily: 'sans-serif-thint' }}>
                  {this.props.item.description}
                </Text>
              </View>
              {this.props.item.done ?
                <View style={{ alignSelf: 'flex-end', flex: 1, alignSelf: 'center', alignItems: 'center' }} >
                  <Icon type='MaterialIcons' name='done' style={{color: '#2196F3'}} />
                </View>
              :
                <View style={{ flex: 1 }} />
              }
            </View>
          </TouchableHighlight>
        }
        right={
          <Button danger onPress={() => this.props.erase()}>
            <Icon active name='trash' />
          </Button>
        }
      />
    );
  }
}