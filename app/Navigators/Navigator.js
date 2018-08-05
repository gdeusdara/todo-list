import New from '../Screens/New';
import Edit from '../Screens/Edit';
import List from '../Screens/List';
import ViewTodo from '../Screens/ViewTodo';
import { createStackNavigator } from 'react-navigation'

const routes = {
    new: {
        screen: New
    },
    list: {
        screen: List,
        navigationOptions: {
            title: 'Lista de Tarefas'
        }
    },
    view: {
        screen: ViewTodo
    },
    edit: {
        screen: Edit
    }
}

const config = {};

const Navigator = createStackNavigator(routes, config);

export default Navigator;