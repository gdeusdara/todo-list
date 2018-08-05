import React from 'react';
import { View, Text, TouchableHighlight, TextInput, KeyboardAvoidingView } from 'react-native';
import { connect } from 'react-redux';
import { addTodo } from '../Actions/todo';

class New extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: ''
    };
  }

  editTodo() {
    if (this.state.title !== '' && this.state.description !== '') {
      const todo = {
        title: this.state.title,
        description: this.state.description,
        done: false
      };
      this.props.dispatch(addTodo(todo));
      this.props.navigation.navigate('list');
    } else {

    }
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.container}>
        <View>
          <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
            onChangeText={(title) => this.setState({title})}
            value={this.state.title}
            autoFocus={true}
          />
          <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
            onChangeText={(description) => this.setState({description})}
            value={this.state.description}
          />
        </View>
        <TouchableHighlight onPress={() => this.editTodo()}>
            <Text>
                Criar
            </Text>
        </TouchableHighlight>
      </KeyboardAvoidingView>
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

export default connect()(New);
