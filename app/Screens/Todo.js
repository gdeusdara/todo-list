import React from 'react';
import { View, Text, FlatList, TouchableHighlight, Switch, TextInput, Modal, Alert, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { removeTodo, toggleTodo, addTodo, editTodo } from '../Actions/todo';
import Item from '../Components/Item';
import { Fab, Icon } from 'native-base';

class Todo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      description: '',
      edit: false,
      modalVisible: false,
    };
  }

  edit(item) {
    this.setState({ edit: true, description: item.description, todoId: item.id, modalVisible: true });
  }

  changeList() {
    if (this.state.description !== '') {
      if (this.state.edit) {
        this.props.editTodo(this.state.description, this.state.todoId);
        this.setState({ edit: false });
      } else {
        this.props.newTodo(this.state.description);
      }
      this.setState({ description: '' });
      this.setModalVisible(!this.state.modalVisible);
    }
  }

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  modal() {
    return (
      <Modal
        animationType="slide"
        transparent={false}
        visible={this.state.modalVisible}
        transparent={true}
        onRequestClose={() => this.setModalVisible(false)}
      >
        <View style={styles.modal}>
          <View style={styles.modalUp} >
            <Text>Descrição</Text>
            <TextInput
              style={{ height: 40, borderColor: '#00BCD4', borderWidth: 1, borderRadius: 5, marginBottom: 10, width: '90%', height: '40%' }}
              onChangeText={(description) => this.setState({ description })}
              value={this.state.description}
              autoFocus={true}
            />

            <TouchableHighlight
              onPress={() => {
                this.changeList();
              }}>
              <View style={styles.button} >
                {this.state.edit ?
                  <Text style={{ color: '#1976D2' }}>Salvar</Text>
                  :
                  <Text style={{ color: '#1976D2' }}>Adicionar tafefa</Text>
                }
              </View>
            </TouchableHighlight>
          </View>

          <View style={styles.modalDown} >
            <TouchableHighlight
              onPress={() => this.setState({ description: '', modalVisible: false })}
            >
              <Text style={{ color: '#757575' }}>
                Cancelar
              </Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
    );
  }

  list() {
    return (
      <View style={{ flex: 8 }} >
        <FlatList
          data={this.props.todo}
          keyExtractor={(item) => {
            return item.id.toString();
          }}
          renderItem={(data) => {
            return (
              <Item
                item={data.item}
                onPress={() => this.props.toggleTodo(data.item.id)}
                edit={() => this.edit(data.item)}
                erase={() => this.props.removeTodo(data.item.id)}
              />
            );
          }}
        />
      </View>
    );
  }

  button() {
    return (
      <Fab
        containerStyle={{}}
        style={{ backgroundColor: '#1976D2' }}
        position="bottomRight"
        onPress={() => this.setModalVisible(true)}>
        <Icon name='add' />
      </Fab>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        {this.modal()}
        {this.list()}
        {this.button()}
      </View>
    );
  }
} //end of Class


const styles = {
  container: {
    flex: 1
  },
  button: {
    borderWidth: 1,
    borderColor: '#1976D2',
    borderRadius: 20,
    width: 130,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bottom: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    elevation: 1,
    shadowRadius: 2
  },
  modal: {
    flex: 1,
    margin: 22,
    borderRadius: 5,
    backgroundColor: '#fff',
    alignSelf: 'center',
    width: '70%',
    height: '50%',
    elevation: 1
  },
  modalUp: {
    flex: 8,
    alignItems: 'center',
    justifyContent: 'center'
  },
  modalDown: {
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
