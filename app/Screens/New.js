import React from 'react';
import { View, Text, TouchableHighlight, FlatList, Switch } from 'react-native';
import { connect } from 'react-redux';
import { addTodo, editTodo, removeTodo } from '../Actions/todo';

class New extends React.Component {

  showItem(item) {
    console.log('item: ');
    console.log(item);
    console.log(this.props.dispatch);
    
    
    
    return(
      <TouchableHighlight 
        onPress={() => this.props.navigation.navigate('edit', {todo: item})} 
        onLongPress={() => this.props.removeTodo(item.id)}
      >
        <View>
          <Text>
            {item.title} - {item.description}
          </Text>
          <Switch value={item.done} />
        </View>      
      </TouchableHighlight>
    );
  }

  render() {
    console.log(this.props.todo);
    
    return (
      <View style={styles.container}>
        <TouchableHighlight 
          onPress={() => this.props.addNewTodo('teste', 'Descrição')}
        >
          <Text>
              Adicione uma tarefa
          </Text>
        </TouchableHighlight>
        <FlatList
          data={this.props.todo}
          keyExtractor={(item) => {
            return item.id.toString();
          }}
          renderItem={(data) => {
            return this.showItem(data.item);
          }}
        />

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

const mapStateToProps = (state) => {
  return {
    todo: state.todo
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addNewTodo: (title, description) => {
      const todo = {
        title: title,
        description: description,
        done: false
      };
      return dispatch(addTodo(todo));
    },
    editTheTodo: (title, description, id) => {
      return dispatch(editTodo(title, description, id));
    },
    removeTodo: (id) => {
      return dispatch(removeTodo(id));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(New);