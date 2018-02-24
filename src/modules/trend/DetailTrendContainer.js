import React, { Component } from 'react';
import {
    Image,
    Text,
    TouchableOpacity,
    View,
    Platform,
    StyleSheet,
    Dimensions,
    KeyboardAvoidingView,
    FlatList
} from 'react-native';
import { Container, Content } from 'native-base';
import styles from "../../styles/styles";
import CloseButton from "../../commons/CloseButton"
import WebViewAutoHeight from "../../commons/WebViewAutoHeight"
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import parallaxStyle from '../../styles/parallaxStyle';
import * as size from '../../styles/sizes';
import CameraButtonRightBottom from "../../commons/CameraButtonRightBottom";
import * as trendAction from "./trendAction"

class DetailTrendContainer extends Component {
    constructor() {
        super();

    }

    componentWillMount() {
        this.props.trendAction.getDetailTrend(this.props.navigation.state.params.id)
    }
    fixUrlImage(url){
        if(url.indexOf("http://") == -1)
            return "http://" + url
        else 
            return url
    }
    render() {
        const { navigate } = this.props.navigation;
        const { goBack } = this.props.navigation;
        const { data, isLoading } = this.props;

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
                                source={{ uri: isLoading ? "" : this.fixUrlImage(data.avatar_url) }}
                            />
                        </View>
                    )}
                    renderStickyHeader={() => (
                        <View key="sticky-header" style={parallaxStyle.stickySection}>
                            <View
                                style={[styles.wrapperCenter, Platform.OS === 'ios' ? { marginTop: 30 } : { marginTop: 20 }]}>
                                <Text style={[styles.textTitleDark, { paddingLeft: 50, paddingRight: 50 }]}
                                    numberOfLines={1}>
                                    {isLoading ? "Đang tải..." : data.title}
                                </Text>
                            </View>
                        </View>
                    )}
                    renderFixedHeader={() => (
                        <View style={{ position: "absolute", top: 20, flex: 1, right: 20 }}>
                            <CloseButton
                                goBack={goBack}
                                color={'#000'}
                            />
                        </View>
                    )}
                >
                    <View style={[styles.wrapperRowCenterVertical, styles.paddingLeftRight, { marginTop: 10 }]}>
                        <Image
                            resizeMode={'cover'}
                            source={{ 
                                uri: data.creator ?
                                this.fixUrlImage( data.creator.avatar_url ) : "" }}
                            style={[styles.imageCircleTiny, { marginRight: 5 }]} />
                        <Text style={styles.textDescriptionGray}>
                            {
                                data.creator
                                    ?
                                    isLoading ?
                                        "Loading..."
                                        :
                                        data.creator.name
                                    :
                                    ""
                            }
                        </Text>
                        <Text style={[styles.category, styles.marginLeftRight]}>Category</Text>

                    </View>
                    <View style={[styles.paddingLeftRight, styles.marginTopBottom]}>
                        <Text style={styles.textTitleDark}>{isLoading ? "Đang tải..." : data.title}</Text>
                    </View>
                    {/* <View>
                        <FlatList
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            data={data}
                            ListFooterComponent={
                                <View style={{width: 10}}/>
                            }
                            renderItem={({item}) =>
                                <View
                                    style={item == data[0] ? [styles.imageSquare, styles.wrapperCenter, {marginLeft: 20}] : [styles.imageSquare, {marginLeft: 10}]}>
                                    <Image
                                        resizeMode={'cover'}
                                        source={{uri: item.url}}
                                        style={[styles.imageSquare]}
                                    />
                                </View>
                            }
                        />
                    </View> */}
                    <WebViewAutoHeight
                        source={data.content ? data.content : ""} />
                </ParallaxScrollView>
                <CameraButtonRightBottom />
            </Container>
        );
    }
}

function mapStateToProps(state) {
    return {
        data: state.trend.data,
        isLoading: state.trend.isLoading,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        trendAction: bindActionCreators(trendAction, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailTrendContainer)
