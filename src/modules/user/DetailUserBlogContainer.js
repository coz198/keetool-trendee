import React, {Component} from 'react';
import {
    Image,
    Text,
    TouchableOpacity,
    View,
    Platform,
    FlatList
} from 'react-native';
import {Container} from 'native-base';
import styles from "../../styles/styles";
import CloseButton from "../../commons/CloseButton"
import {connect} from "react-redux";
import Masonry from 'react-native-masonry';
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import parallaxStyle from '../../styles/parallaxStyle';
import * as size from '../../styles/sizes';


class DetailUserBlogContainer extends Component {
    constructor() {
        super();
        this.state = {
            imageList: []
        }
    }

    componentWillMount(){
        const newArr = this.props.data.map((item) => {
            return{
                uri: item.url
            }
        })
        this.setState({imageList: newArr})
    }

    render () {
        const {navigate} = this.props.navigation;
        const {goBack} = this.props.navigation;
        const {data} = this.props;

        return (
            <Container style={styles.wrapperContainer}>
                <ParallaxScrollView
                    backgroundColor={'#FFF'}
                    showsVerticalScrollIndicator={false}
                    headerBackgroundColor={'#FFF'}
                    stickyHeaderHeight={Platform.OS === 'ios' ? 70 : 50}
                    parallaxHeaderHeight={size.deviceHeight / 3}
                    backgroundSpeed={10}
                    renderBackground={() => (
                        <View style={styles.imageFullWidth}>
                            <Image
                                resizeMode={'cover'}
                                style={styles.imageFullWidth}
                                source={{uri: 'https://images.pexels.com/photos/433398/pexels-photo-433398.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'}}
                            />
                            <View style={[styles.wrapperTextInFeatureImage, {bottom: 0}]}>
                                <FlatList
                                    ref="listRef"
                                    horizontal={true}
                                    showsVerticalScrollIndicator={false}
                                    data={data[0].member.slice(0,3)}
                                    ListFooterComponent={
                                        data[0].member.length > 3
                                            ?
                                            <TouchableOpacity style={[styles.wrapperTextAfterListFriend, {marginLeft: 10}]}>
                                                <Text style={styles.textSubDescriptionLight}> +{data[0].member.length - 3} Friends</Text>
                                            </TouchableOpacity>
                                            :
                                            <Text/>
                                    }
                                    renderItem={({item}) => {
                                        return(
                                            <TouchableOpacity style={[styles.wrapperImageCircleTiny,{marginRight: -8}]}>
                                                <Image source={{uri: item.url}} style={[styles.imageCircleNormal]}/>
                                            </TouchableOpacity>
                                        )
                                    }}/>
                            </View>
                        </View>
                    )}
                    renderStickyHeader={() => (
                        <View key="sticky-header" style={parallaxStyle.stickySection}>
                            <View
                                style={[styles.wrapperCenter, Platform.OS === 'ios' ? {marginTop: 30} : {marginTop: 20}]}>
                                <Text style={[styles.textTitleDark, {paddingLeft: 50, paddingRight: 50}]}
                                      numberOfLines={1}>
                                    ACTIVITY NAME HERE
                                </Text>
                            </View>
                        </View>
                    )}
                    renderFixedHeader={() => (
                        <View style={{position: "absolute", top: 20, flex: 1, right: 20}}>
                            <CloseButton
                                goBack={goBack}
                                color={'#000'}
                            />
                        </View>
                    )}
                >
                    <View style={{padding: 20}}>
                        <Text style={styles.textTitleDark}>ACTIVITY NAME HERE</Text>
                        <Text style={styles.textDescriptionGray}>Create at</Text>
                    </View>
                    <View style={[{flex: 1, marginBottom: 20}, styles.paddingLeftRight]}>
                        <Masonry
                            imageContainerStyle={{borderRadius: 10}}
                            sorted
                            spacing={5}
                            columns={2}
                            bricks={this.state.imageList}
                        />
                    </View>
                </ParallaxScrollView>


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
    }
}

export default connect(mapStateToProps)(DetailUserBlogContainer)
