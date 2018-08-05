import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import { editTodo } from '../Actions/todo';

class Edit extends React.Component {

  editTodo() {
    console.log('\n\nEDIT\n');
    
    console.log(this.props.navigation.state.params);
    console.log(this.props.navigation.state.params.todo.id);

    this.props.dispatch(editTodo('novo todo', 'nova descricao', this.props.navigation.state.params.todo.id));
    this.props.navigation.navigate('new');
  }
  
  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={() => this.editTodo()}>
            <Text>
                Edit Page
            </Text>
        </TouchableHighlight>
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

export default connect()(Edit);