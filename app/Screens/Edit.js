import React from 'react';
import { View, Text, TouchableHighlight, TextInput, KeyboardAvoidingView } from 'react-native';
import { connect } from 'react-redux';
import { editTodo } from '../Actions/todo';

class Edit extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: this.props.navigation.state.params.todo.title,
      description: this.props.navigation.state.params.todo.description
    };
  }

  editTodo() {
    if (this.state.title !== '' && this.state.description !== '') {
      this.props.dispatch(editTodo(this.state.title, this.state.description, this.props.navigation.state.params.todo.id));
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
          />
          <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
            onChangeText={(description) => this.setState({description})}
            value={this.state.description}
          />
        </View>
        <TouchableHighlight onPress={() => this.editTodo()}>
            <Text>
                Edit Page
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

export default connect()(Edit);