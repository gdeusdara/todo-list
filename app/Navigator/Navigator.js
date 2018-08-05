import Todo from '../Screens/Todo';
import { createStackNavigator } from 'react-navigation'

const routes = {
    list: {
        screen: Todo,
        navigationOptions: {
            title: 'Lista de Tarefas'
        }
    }
}

const config = {};

const Navigator = createStackNavigator(routes, config);

export default Navigator;