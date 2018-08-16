import Todo from '../Screens/Todo';
import { createStackNavigator } from 'react-navigation'

const routes = {
    list: {
        screen: Todo,
        navigationOptions: {
            title: 'Lista de Tarefas',
            headerStyle: {
                backgroundColor: '#2196F3',
            },
            headerTitleStyle: {
                color: '#fff',
                alignSelf: 'center',
                marginLeft: '30%',
                fontFamily: 'sans-serif-light'
            }
        }
    }
}

const config = {};

const Navigator = createStackNavigator(routes, config);

export default Navigator;