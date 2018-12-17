import { StackNavigator } from 'react-navigation';
import Home from './components/home';
import ExampleOne from './components/exampleOne';
import ExampleTwo from './components/exampleTwo';
import ExampleThree from './components/exampleThree';
import ExampleFour from './components/exampleFour';
import ExampleFive from './components/exampleFive';
import ExampleSix from './components/exampleSix';

const stackNavigatorConfig = {
  navigationOptions: {
    headerStyle: {
      backgroundColor: '#f6f8fa'
    },
    headerBackTitle: null,
    headerTintColor: '#abd0ce',
    headerTitleStyle: {
      color: '#7c7877',
      fontWeight: '100'
    }
  }
};

export default StackNavigator ({
  Home: {
    screen: Home
  },
  ExampleOne: {
    screen: ExampleOne
  },
  ExampleTwo: {
    screen: ExampleTwo
  },
  ExampleThree: {
    screen: ExampleThree
  },
  ExampleFour: {
    screen: ExampleFour
  },
  ExampleFive: {
    screen: ExampleFive
  },
  ExampleSix: {
    screen: ExampleSix
  }
}, stackNavigatorConfig);
