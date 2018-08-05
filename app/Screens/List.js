import React from 'react';
import { View, Text, FlatList, TouchableHighlight, Switch } from 'react-native';
import { connect } from 'react-redux';
import { removeTodo, toggleTodo } from '../Actions/todo';

class List extends React.Component {

  showItem(item) {
    return(
      <TouchableHighlight 
        onPress={() => this.props.navigation.navigate('view', {todo: item})} 
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
    return (
      <View style={styles.container}>
        <View style={{flex: 10}} >
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
        <View style={{flex: 1}} >
          <TouchableHighlight onPress={() => this.props.navigation.navigate('new')}>
              <Text>
                  adicionar tarefa
              </Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1
  }
}

const mapStateToProps = (state) => {
  return {
    todo: state.todo
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeTodo: (id) => {
      return dispatch(removeTodo(id));
    },
    toggleTodo: (id) => {
      return dispatch(toggleTodo(id));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(List);