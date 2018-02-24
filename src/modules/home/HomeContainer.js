import React, { Component } from 'react';
import {
    Image,
    Text,
    TouchableOpacity,
    View,
    Platform,
    FlatList,
    StatusBar
} from 'react-native';
import IconDefault from '../../commons/IconDefault'
import { Container } from 'native-base';
import styles from "../../styles/styles";
import CarouselContainer from "./CarouselContainer";
import { connect } from 'react-redux';
import Loading from '../../commons/Loading';
import { bindActionCreators } from 'redux';
import * as homeAction from './homeAction';
import Gradient from '../../commons/Gradient'
import StatisticalTrend from '../../commons/StatisticalTrend'
import * as size from "../../styles/sizes";
import Carousel, {ParallaxImage} from 'react-native-snap-carousel';

const category = [
    {
        "id": 0,
        "title": "alone"
    },
    {
        "id": 1,
        "title": "couple"
    },
    {
        "id": 2,
        "title": "small group"
    },
    {
        "id": 3,
        "title": "large group"
    },
    {
        "id": 4,
        "title": "bleand"
    },
    {
        "id": 5,
        "title": "forest"
    },
    {
        "id": 6,
        "title": "boy"
    },
    {
        "id": 7,
        "title": "girl"
    },
    {
        "id": 8,
        "title": "adult"
    },

]

class HomeContainer extends Component {
    constructor() {
        super();
        this.state = {
            page: 1,
            modalIdea: false,
            modalIDetailTrend: false,
            category: 0,
            isLoadingCategory: false
        }
    }

    componentWillMount() {
        this.props.homeAction.getListTrend(1);
    }

    isLoading() {
        this.setState({ isLoadingCategory: true });
        setTimeout(() => this.setState({ isLoadingCategory: false }), 100);
    }

    chooseCategory(id) {
        this.setState({ category: id })
        this.isLoading()
    }

    getMoreListTrend() {
        const { isLoadingMore, homeAction, data } = this.props;
        if (data.length >= this.state.page * 20) {
            let page = this.state.page + 1;
            this.setState({ page: page });
            homeAction.getMoreListTrend(page);
        }
    }

    fixUrlImage(url){
        if(url.indexOf("http://") == -1)
            return "http://" + url
        else 
            return url
    }

    loadMore() {
        if (this.props.isLoadingMore)
            return (
                <View style={[styles.wrapperCenter,{flex: 1}]}>
                    <Loading />
                </View>
        )
        else
            return (<View />)
    }

    render() {
        const { navigate } = this.props.navigation;
        const { isLoadingCategory } = this.state;
        const { data, isLoading, isLoadingMore, loginStatus } = this.props;
        return (
            <Container style={styles.wrapperContainer}>
                <StatusBar barStyle={'dark-content'} backgroundColor={'#FFF'} />
                <View style={[styles.wrapperHeader, styles.paddingLeftRight]}>
                    <TouchableOpacity onPress={() => { }}>
                        <Image
                            resizeMode={'cover'}
                            style={[styles.imageCircleNormal, styles.shadow]}
                            source={{ uri: '' }} />
                    </TouchableOpacity>
                    <Text style={styles.textLogo}>SPREADY</Text>

                    <TouchableOpacity
                        activeOpacity={0.9}
                        onPress={
                            loginStatus
                                ?
                                () => navigate('UserContainer')
                                :
                                () => navigate('LoginContainer')
                        }
                    >
                        <Image
                            resizeMode={'cover'}
                            style={[styles.imageCircleNormal, styles.shadow]}
                            source={
                                loginStatus
                                    ?
                                    { uri: this.fixUrlImage(this.props.user.avatar_url) }
                                    :
                                    require('../../../assets/image/defaultUser.png')
                            } />
                        <View style={styles.badge} />
                    </TouchableOpacity>
                </View>
                <View style={{ justifyContent: 'center' }}>
                    <FlatList
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        data={category}
                        ListFooterComponent={
                            <View style={{ width: 10 }} />
                        }
                        renderItem={({ item }) =>
                            <TouchableOpacity
                                activeOpacity={0.9}
                                onPress={() => this.chooseCategory(item.id)}
                                style={{ justifyContent: 'center' }}>
                                <Text style={[category[0] ? { marginLeft: 20 } : { marginLeft: 0 }, item.id == this.state.category ? styles.buttonTabInColumn : styles.buttonTabInColumnDisable]}>{item.title.toUpperCase()}</Text>
                            </TouchableOpacity>
                        }
                    />
                </View>
                <View style={[{ flex: 1 }, styles.wrapperCenter]}>
                    {
                        isLoadingCategory
                            ?
                            <Loading />
                            :
                            <Carousel
                                layout={'default'}
                                sliderWidth={size.deviceWidth}
                                itemWidth={size.deviceWidth}
                                hasParallaxImages={true}
                                slideStyle={{ width: size.deviceWidth }}
                                autoplay={true}
                                autoplayDelay={500}
                                inactiveSlideScale={0.9}
                                inactiveSlideOpacity={0.7}
                                data={this.props.data}
                                onEndReachedThreshold={5}
                                onEndReached={
                                    () => this.getMoreListTrend()
                                }
                                ListFooterComponent={
                                    this.loadMore()
                                }
                                keyExtractor={(item, index) => item.id}
                                renderItem={({ item, i }, parallaxProps) => {
                                    return (
                                        <TouchableOpacity
                                         id={item.id}
                                            activeOpacity={1}
                                            onPress={() => navigate('DetailTrendContainer', { id: item.id })}
                                            style={[styles.wrapperCenter, { paddingTop: 20 }]} key={i}>
                                            <View>
                                                <View style={[styles.imageFeature, styles.shadow]}>
                                                    <ParallaxImage
                                                        resizeMode={'cover'}
                                                        source={{ uri: item.avatar_url }}
                                                        containerStyle={styles.imageFeature}
                                                        style={styles.imageFeature}
                                                        parallaxFactor={0.4}
                                                        {...parallaxProps}
                                                    />
                                                    <Gradient style={styles.gradientImageFeature} />
                                                </View>
                                                <View style={styles.wrapperTextInFeatureImage}>
                                                    <View style={styles.wrapperRowCenterVertical}>
                                                        <View style={[styles.wrapperIconBeforeText, { marginRight: 5 }]}>
                                                            <IconDefault
                                                                name={'Ionicons|md-arrow-up'}
                                                                style={{ padding: 0 }}
                                                                size={10}
                                                                color={'#FFF'}
                                                            />
                                                        </View>
                                                        <Text style={styles.textSubDescriptionLight}>Top 5 on Trending</Text>
                                                    </View>
                                                    <View style={styles.paddingLeftRight}>

                                                    </View>
                                                    <Text style={[styles.textTitleLight, styles.paddingLine]} numberOfLines={2}>
                                                        {item.title}
                                                    </Text>
                                                    <Text style={styles.textDescriptionLight} numberOfLines={4}>
                                                        {item.description}
                                                    </Text>
                                                </View>
                                                <Text style={[styles.categoryInImage]}>Category</Text>
                                            </View>

                                            <View style={[styles.wrapperRowSpaceBetween, styles.wrapperTextAuthorFeatureImage]}>
                                                {
                                                    item.creator
                                                        ?
                                                        <View style={styles.wrapperRowCenterVertical}>
                                                            <Image
                                                                resizeMode={'cover'}
                                                                source={{ uri: this.fixUrlImage(item.avatar_url) }}
                                                                style={[styles.imageCircleTiny, { marginRight: 5 }]} />
                                                            <Text style={styles.textDescriptionGray}>{item.creator.name}</Text>
                                                        </View>
                                                        :
                                                        <View />
                                                }

                                                <StatisticalTrend />
                                            </View>
                                        </TouchableOpacity>
                                    );
                                }}

                            />
                    }
                </View>
            </Container>



        );
    }
}
function mapStateToProps(state) {
    return {
        user: state.login.user,
        data: state.home.data,
        isLoadingMore: state.home.isLoadingMore,
        isLoading: state.home.isLoading,
        loginStatus: state.login.loginStatus
    }
}

function mapDispatchToProps(dispatch) {
    return {
        homeAction: bindActionCreators(homeAction, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer)
