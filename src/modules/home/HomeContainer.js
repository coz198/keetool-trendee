import React, {Component} from 'react';
import {
    Image,
    Text,
    TouchableOpacity,
    View,
    Platform,
    FlatList,
    StatusBar
} from 'react-native';
import {Container} from 'native-base';
import styles from "../../styles/styles";
import CarouselContainer from "./CarouselContainer";
import {connect} from 'react-redux';
import Loading from '../../commons/Loading';
import {bindActionCreators} from 'redux';
import * as homeAction from './homeAction';

const category = [
    {
        "id" : 0,
        "title" : "alone"
    },
    {
        "id" : 1,
        "title" : "couple"
    },
    {
        "id" : 2,
        "title" : "small group"
    },
    {
        "id" : 3,
        "title" : "large group"
    },
    {
        "id" : 4,
        "title" : "bleand"
    },
    {
        "id" : 5,
        "title" : "forest"
    },
    {
        "id" : 6,
        "title" : "boy"
    },
    {
        "id" : 7,
        "title" : "girl"
    },
    {
        "id" : 8,
        "title" : "adult"
    },

]

class HomeContainer extends Component {
    constructor() {
        super();
        this.state = {
            modalIdea: false,
            modalIDetailTrend: false,
            category: 0,
            isLoadingCategory: false
        }
    }

    componentDidMount() {
        this.props.homeAction.getListTrend(1);
    }

    isLoading() {
        this.setState({isLoadingCategory: true});
        setTimeout(() => this.setState({isLoadingCategory: false}), 100);
    }

    chooseCategory(id){
        this.setState({category: id})
        this.isLoading()
    }

    render () {
        const {navigate} = this.props.navigation;
        const {isLoadingCategory} = this.state;
        const {data} = this.props;
        return (
            <Container style={styles.wrapperContainer}>
                <StatusBar barStyle={'dark-content'} backgroundColor={'#FFF'}/>
                <View style={[styles.wrapperHeader, styles.paddingLeftRight]}>
                    <TouchableOpacity onPress={() => {}}>
                        <Image
                            resizeMode={'cover'}
                            style={[styles.imageCircleNormal, styles.shadow]}
                            source={{uri: ''}}/>
                    </TouchableOpacity>
                    <Text style={styles.textLogo}>SPREADY</Text>

                    <TouchableOpacity
                        activeOpacity={0.9}
                        onPress={() => navigate('UserContainer')}
                    >
                        <Image
                            resizeMode={'cover'}
                            style={[styles.imageCircleNormal, styles.shadow]}
                            source={{uri: 'https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?auto=format&fit=crop&w=334&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D'}}/>
                        <View style={styles.badge}/>
                    </TouchableOpacity>
                </View>
                <View style={{justifyContent: 'center'}}>
                    <FlatList
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        data={data}
                        ListFooterComponent={
                            <View style={{width: 10}}/>
                        }
                        renderItem={({item}) =>
                            <TouchableOpacity
                                activeOpacity={0.9}
                                onPress={() => this.chooseCategory(item.id)}
                                style={{justifyContent: 'center'}}>
                                <Text style={[ category[0] ? {marginLeft: 20} :  {marginLeft: 0} , item.id == this.state.category ? styles.buttonTabInColumn : styles.buttonTabInColumnDisable]}>{item.title.toUpperCase()}</Text>
                            </TouchableOpacity>
                        }
                    />
                </View>
                <View style={[{flex: 1}, styles.wrapperCenter]}>
                    {/* {
                        isLoadingCategory
                            ?
                            <Loading/>
                            :
                            <CarouselContainer
                                navigate={navigate}
                                data={this.props.data}/>
                    } */}
                </View>
            </Container>



        );
    }
}
function mapStateToProps(state) {
    return {
        data: state.home.data
    }
}

function mapDispatchToProps(dispatch) {
    return {
        homeAction: bindActionCreators(homeAction, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer)
