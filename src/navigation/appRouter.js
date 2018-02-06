import {TabNavigator, StackNavigator, DrawerNavigator} from 'react-navigation';
import HomeContainer from '../modules/home/HomeContainer';
import DetailTrendContainer from '../modules/trend/DetailTrendContainer';
import DetailUserBlogContainer from '../modules/user/DetailUserBlogContainer';
import SearchContainer from '../modules/search/SearchContainer';
import UserContainer from '../modules/user/UserContainer';
import IdeaContainer from '../modules/idea/IdeaContainer';

export const Main = StackNavigator(
    {
        HomeContainer: {screen: HomeContainer},
        DetailTrendContainer: {screen: DetailTrendContainer},
        DetailUserBlogContainer: {screen: DetailUserBlogContainer},
        SearchContainer: {screen: SearchContainer},
        UserContainer: {screen: UserContainer},
        IdeaContainer: {screen: IdeaContainer},

    },
    {headerMode: 'none' , mode: 'modal'},
);
