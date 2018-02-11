import {TabNavigator, StackNavigator, DrawerNavigator} from 'react-navigation';
import HomeContainer from '../modules/home/HomeContainer';
import DetailTrendContainer from '../modules/trend/DetailTrendContainer';
import DetailUserBlogContainer from '../modules/user/DetailUserBlogContainer';
import SearchContainer from '../modules/search/SearchContainer';
import UserContainer from '../modules/user/UserContainer';
import IdeaContainer from '../modules/idea/IdeaContainer';
import NotificationContainer from '../modules/notification/NotificationContainer';
import DrawerContainer from '../modules/drawer/DrawerContainer';
import CameraContainer from '../modules/camera/CameraContainer';
import LoginContainer from '../modules/login/LoginContainer';
import {deviceWidth} from "../styles/sizes";
import * as color from "../styles/colors";
import * as size from "../styles/sizes";
import IconDefault from '../commons/IconDefault';
import CameraButton from '../commons/CameraButton';
import * as React from 'react';
import {mainColor}  from "../styles/colors";

const Drawer = DrawerNavigator({
    Home: {
        screen: HomeContainer,
        navigationOptions: ({navigation}) => ({
            title: 'Home',
        })
    },
    Idea: {
        screen: IdeaContainer,
        navigationOptions: ({navigation}) => ({
            title: 'Add Idea',
        })
    },
    UserContainer: {
        screen: UserContainer,
        navigationOptions: ({navigation}) => ({
            title: 'My trends',
        })
    },
    SearchContainer: {
        screen: UserContainer,
        navigationOptions: ({navigation}) => ({
            title: 'Social',
        })
    }
}, {
    contentOptions: {
        activeTintColor: mainColor,
    },
    drawerWidth: deviceWidth * 3 / 4,
    drawerPosition: 'left',
    useNativeAnimations: 'false',
    disableOpenGesture: false,
    drawerLockMode: 'locked-closed',
    contentComponent: props => (<DrawerContainer {...props}/>)
});


export const TabNavigatorBottomStyle = {
    indicatorStyle: {
        border: 5,
        backgroundColor: color.noneColor,
    },
    initialRouteName: 'HomeContainer',
    tabBarPosition: 'bottom',
    tabBarOptions: {
        indicatorStyle: {backgroundColor: 'transparent'},
        showIcon: true,
        activeTintColor: color.mainColor,
        inactiveTintColor: color.disableColor,
        style: {
            borderTopWidth: 0.5,
            borderTopColor: color.disableColor,
            backgroundColor: 'rgb(254, 254, 254)',
        },
        showLabel: false,
    }
};


const Home = TabNavigator(
    {

        HomeContainer: {
            screen: HomeContainer,
            navigationOptions: {
                tabBarIcon: ({tintColor}) => (
                    <IconDefault
                        name="EvilIcons|star" size={size.iconSize}
                        color={tintColor}
                    />
                )
            }
        },
        NotificationContainer: {
            screen: NotificationContainer,
            navigationOptions: {
                tabBarIcon: ({tintColor}) => (
                    <IconDefault
                        name="EvilIcons|bell" size={size.iconSize}
                        color={tintColor}
                    />
                ),
            }
        },
        CameraContainer: {
            screen: CameraContainer,
            navigationOptions: {
                tabBarIcon: ({tintColor}) => (
                    <CameraButton/>
                ),
            }
        },
        SearchContainer: {
            screen: SearchContainer,
            navigationOptions: {
                tabBarIcon: ({tintColor}) => (
                    <IconDefault
                        name="EvilIcons|search" size={size.iconSize}
                        color={tintColor}
                    />
                ),
            }
        },
        IdeaContainer: {
            screen: IdeaContainer,
            navigationOptions: {
                tabBarIcon: ({tintColor}) => (
                    <IconDefault
                        name="EvilIcons|plus" size={size.iconSize}
                        color={tintColor}
                    />
                ),
            }
        },
    },
    TabNavigatorBottomStyle
);
export const Main = StackNavigator(
    {
        // Drawer: {screen: Drawer},
        Home: {screen: Home},
        LoginContainer: {screen: LoginContainer},
        IdeaContainer: {screen: IdeaContainer},
        HomeContainer: {screen: HomeContainer},
        DetailTrendContainer: {screen: DetailTrendContainer},
        DetailUserBlogContainer: {screen: DetailUserBlogContainer},
        SearchContainer: {screen: SearchContainer},
        UserContainer: {screen: UserContainer},

    },
    {headerMode: 'none' , mode: 'modal'},
);
