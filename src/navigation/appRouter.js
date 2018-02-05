import {TabNavigator, StackNavigator, DrawerNavigator} from 'react-navigation';
import HomeContainer from '../modules/home/HomeContainer';
import DetailTrendContainer from '../modules/detailTrend/DetailTrendContainer';
import SearchContainer from '../modules/search/SearchContainer';
import UserContainer from '../modules/user/UserContainer';
import IdeaContainer from '../modules/idea/IdeaContainer';

export const Main = StackNavigator(
    {
        HomeContainer: {screen: HomeContainer},
        DetailTrendContainer: {screen: DetailTrendContainer},
        SearchContainer: {screen: SearchContainer},
        UserContainer: {screen: UserContainer},
        IdeaContainer: {screen: IdeaContainer},

    },
    {headerMode: 'none',mode: 'modal'},
);
