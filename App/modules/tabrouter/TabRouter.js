import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Navigation } from 'react-native-navigation'
import { isLoggedIn } from '../../shared/reducers/account.reducer'
import { connect } from 'react-redux'

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Colors } from '../../shared/themes'

import ApplianceScreen from '../../modules/entities/appliances/appliances-screen'
import LightScreen from '../../modules/entities/lights/lights-screen'
import SocketScreen from '../../modules/entities/sockets/sockets-screen'
import StatisticScreen from '../../modules/entities/statistics/statistics-screen'
import { LOGIN_SCREEN } from '../../navigation/layouts';

const Tab = createBottomTabNavigator();

class TabRouter extends React.Component {
  constructor(props) {
    super(props)
    Navigation.events().bindComponent(this)
    this.state = {
      loggedIn: false
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.loggedIn !== prevState.loggedIn) {
      return { loggedIn: nextProps.loggedIn };
    }
    else return null;
  }

  componentDidMount() {
    if (!this.props.loggedIn) {
      Navigation.push(this.props.componentId, {
        component: {
          name: LOGIN_SCREEN,
          options: {
            topBar: {
              visible: false,
              drawBehind: true,
            },
          },
        }
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (!this.props.loggedIn) {
      Navigation.push(this.props.componentId, {
        component: {
          name: LOGIN_SCREEN,
          options: {
            topBar: {
              visible: false,
              drawBehind: true,
            },
          },
        }
      });
    }
  }

  componentDidAppear() {
    Navigation.mergeOptions(this.props.componentId, {
      sideMenu: {
        left: {
          enabled: true,
          visible: false,
        },
      },
    })
  }

  showSideMenu() {
    Navigation.mergeOptions(this.props.componentId, {
      sideMenu: {
        left: {
          visible: true,
        },
      },
    })
  }

  navigationButtonPressed({ buttonId }) {
    this.showSideMenu()
  }

  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === 'Appliances') {
                iconName = 'devices';
                color = focused ? Colors.bronze : Colors.darkAsh
              } else if (route.name === 'Lights') {
                iconName = 'home-lightbulb';
                color = focused ? Colors.bronze : Colors.darkAsh
              } else if (route.name === 'Sockets') {
                iconName = 'power-socket-uk';
                color = focused ? Colors.bronze : Colors.darkAsh
              } else if (route.name === 'Statistics') {
                iconName = 'chart-bar-stacked';
                color = focused ? Colors.bronze : Colors.darkAsh
              }

              // You can return any component that you like here!
              return (<Icon name={iconName} size={30} color={color} />);
            },
          })}
          tabBarPosition='bottom'
          initialRouteName='Statistics'
          swipeEnabled={true}
          animationEnabled={false}
          allowFontScaling={true}
          lazy={true}
          tabBarOptions={{
            showLabel: true,
            labelStyle: {
              fontSize: 14
            },
            tabStyle: {
              justifyContent: 'center',
            },
            backBehavior: 'none',
            style: {
              backgroundColor: Colors.skinBlue,
              height: 65,
              shadowOpacity: 1.0,
              shadowOffset: { width: 0, height: 3 },
              shadowColor: '#e9e9e9',
              borderTopWidth: 1,
              borderTopColor: '#e9e9e9'
            },
            activeTintColor: Colors.snow,
          }}
        >
          <Tab.Screen name="Appliances" component={ApplianceScreen} />
          <Tab.Screen name="Lights" component={LightScreen} />
          <Tab.Screen name="Sockets" component={SocketScreen} />
          <Tab.Screen name="Statistics" component={StatisticScreen} />
        </Tab.Navigator>
      </NavigationContainer >
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loggedIn: isLoggedIn(state.account),
    fetching: state.register.fetching,
    error: state.register.error,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TabRouter)