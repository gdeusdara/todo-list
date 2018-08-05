import React from 'react';
import { View, Text, FlatList, TouchableHighlight, Switch, TextInput, Modal, Alert, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { removeTodo, toggleTodo, addTodo, editTodo } from '../Actions/todo';

class Todo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      description: '',
      edit: false,
      modalVisible: false,
    };
  }

  options(item) {
    Alert.alert(
      'Escolha',
      'Deseja editar ou excluir?',
      [
        {text: 'Cancelar', onPress: () => {}, style: 'cancel'},
        {text: 'Editar', onPress: () => this.edit(item)},
        {text: 'Excluir', onPress: () => this.props.removeTodo(item.id)},
      ],
      { cancelable: false }
    )
  }

  showItem(item) {
    return(
      <TouchableHighlight
        onPress={() => this.options(item)}
      >
        <View style={{alignItems: 'center', flexDirection: 'row', backgroundColor: '#fff', justifyContent: 'space-around', height: 50}}>
        <View style={{flex: 6, alignItems: 'flex-start', justifyContent: 'center', marginLeft: 2}}>
          <Text>
            {item.description}
          </Text>
        </View>
          <View style={{flex: 2, alignItems: 'flex-end', justifyContent: 'center', marginRight: 2, flexDirection: 'row'}}>
            {item.done ?
              <Text style={{color: 'green'}}>
                Feito
              </Text>
            :
              <View />
            }
            <Switch
              style={{}}
              onValueChange={() => this.props.toggleTodo(item.id)}
              value={item.done}
            />
          </View>
        </View>
      </TouchableHighlight>
    );
  }

  edit(item) {
    console.log('ID DO ITEM EDITAvel = ' + item.id);
    this.setState({edit: true, description: item.description, todoId: item.id, modalVisible: true});
  }

  createTodo() {
    if (this.state.description !== '') {
      if (this.state.edit) {
        this.props.editTodo(this.state.description, this.state.todoId);
        this.setState({edit: false});
      } else {
        this.props.newTodo(this.state.description);
      }
      this.setState({description: ''});
      this.setModalVisible(!this.state.modalVisible);
    }
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  modal() {
    return (
      <Modal
        animationType="slide"
        transparent={false}
        visible={this.state.modalVisible}
        transparent={true}
        onRequestClose={() => this.setModalVisible(false)}>
        <View style={{flex: 1, margin: 22, alignSelf: 'center', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff', width: '70%', height: '50%'}}>
          <View>
            <TextInput
              style={{height: 40, borderColor: '#000', borderWidth: 1, borderRadius: 10, marginBottom: 10}}
              onChangeText={(description) => this.setState({description})}
              value={this.state.description}
              autoFocus={true}
            />
            <TouchableHighlight
              onPress={() => {
                this.createTodo();
            }}>
              <View style={{borderWidth: 1, borderColor: 'green', borderRadius: 20, width: 130, height: 30, alignItems: 'center', justifyContent: 'center'}} >
                {this.state.edit ? 
                  <Text style={{color: 'green'}}>Editar</Text> 
                :
                  <Text style={{color: 'green'}}>Adicionar tafefa</Text>
                }
              </View>
           </TouchableHighlight>
         </View>
       </View>
     </Modal>
    );
  }

  list() {
    console.log(this.props.todo.length);
      return (
        <View style={{flex: 8}} >
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

  button() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff'}}>
        <TouchableHighlight onPress={() => this.setModalVisible(!this.state.modalVisible)}>
          <View style={{borderWidth: 1, borderColor: 'green', borderRadius: 20, width: 130, height: 30, alignItems: 'center', justifyContent: 'center'}} >
            <Text style={{color: 'green'}}>
                adicionar tarefa
            </Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }

  render() {
    console.log(this.state.edit);
    return (
      <View style={styles.container}>
        {this.modal()}
        {this.list()}
        {this.button()}
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
    newTodo: (description) => {
      const todo = {
        description: description,
        done: false
      };
      return dispatch(addTodo(todo));
    },
    removeTodo: (id) => {
      return dispatch(removeTodo(id));
    },
    toggleTodo: (id) => {
      return dispatch(toggleTodo(id));
    },
    editTodo: (description, id) => {
      return dispatch(editTodo(description, id))
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
