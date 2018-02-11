import React, {Component} from 'react';
import {
    Image,
    Text,
    TouchableOpacity,
    View,
    Platform,
    StyleSheet,
    Dimensions,
    KeyboardAvoidingView
} from 'react-native';
import IconDefault from '../../commons/IconDefault'
import {Container, Content} from 'native-base';
import styles from "../../styles/styles";
import Loading from "../../commons/Loading";
import BackButton from "../../commons/BackButton";
import Activity from "./Activity";
import WishList from "./WishList";
import Invitation from "./Invitation";
import {connect} from "react-redux";
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import parallaxStyle from '../../styles/parallaxStyle';
import * as size from '../../styles/sizes';

class UserContainer extends Component {
    constructor() {
        super();
        this.state = {
            isLoadingState: false,
            tab: 0,

        }
    }
    View(tab) {
        setTimeout(() => {
            this.setState({isLoadingState: false})
        }, 100);
        this.setState({tab: tab, isLoadingState: true})
    }
    ViewTab() {
        const {navigate} = this.props.navigation;
        const {goBack} = this.props.navigation;
        switch (this.state.tab) {
            case 0:
                return (
                    <Activity
                        navigate={navigate}
                        goBack={goBack}
                        data={this.props.data}
                    />
                );
            case 1 :
                return (
                    <WishList
                        navigate={navigate}
                        goBack={goBack}
                        data={this.props.data}
                    />

                );
            case 2 :
                return (
                    <Invitation
                        navigate={navigate}
                        goBack={goBack}
                        data={this.props.data}
                    />
                );
        }
    }
    render () {
        const {navigate} = this.props.navigation;
        const {goBack} = this.props.navigation;
        const {isLoadingState, tab} = this.state;

        return (
            <Container style={styles.wrapperContainer}>
                <ParallaxScrollView
                    backgroundColor={'#FFF'}
                    showsVerticalScrollIndicator={false}
                    headerBackgroundColor={'#FFF'}
                    stickyHeaderHeight={Platform.OS === 'ios' ? 70 : 50}
                    parallaxHeaderHeight={size.deviceHeight / 3.5}
                    backgroundSpeed={10}
                    renderForeground={() => (
                        <View style={[styles.wrapperCenter, styles.imageFullWidth, {marginTop: 10}]}>
                            <Image
                                style={styles.imageCircleBig}
                                source={{uri: 'https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?auto=format&fit=crop&w=334&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D'}}
                            />
                            <Text style={[styles.textTitleDark, styles.paddingLine, {marginTop: 10}]}>Cong</Text>
                            <Text style={styles.textDescriptionGray}>60 Activities</Text>
                        </View>
                    )}
                    renderStickyHeader={() => (
                        <View key="sticky-header" style={parallaxStyle.stickySection}>
                            <View
                                style={[styles.wrapperCenter, Platform.OS === 'ios' ? {marginTop: 30} : {marginTop: 20}]}>
                                <Text style={[styles.textTitleDark, {paddingLeft: 50, paddingRight: 50}]}
                                      numberOfLines={1}>
                                    CONG
                                </Text>
                            </View>
                        </View>
                    )}
                    renderFixedHeader={() => (
                        <View style={{position: "absolute", top: 20, flex: 1, left: 20}}>
                            <BackButton
                                goBack={goBack}
                                color={'#000'}
                            />
                        </View>
                    )}
                >
                    <View>
                        <View style={styles.wrapperRowSpaceBetween}>
                            <TouchableOpacity
                                activeOpacity={0.9}
                                onPress={() => this.View(0)}
                                style={styles.wrapperTabInColumn}>
                                <Text style={tab == 0 ? styles.buttonTabInColumn : styles.buttonTabInColumnDisable}>ACTIVITIES</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                activeOpacity={0.9}

                                onPress={() => this.View(1)}
                                style={styles.wrapperTabInColumn}>
                                <Text style={tab == 1 ? styles.buttonTabInColumn : styles.buttonTabInColumnDisable}>WISH LIST</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                activeOpacity={0.9}

                                onPress={() => this.View(2)}
                                style={styles.wrapperTabInColumn}>
                                <Text style={tab == 2 ? styles.buttonTabInColumn : styles.buttonTabInColumnDisable}>INVITATION</Text>
                            </TouchableOpacity>
                        </View>
                        {
                            isLoadingState
                                ?
                                <Loading/>
                                :
                                this.ViewTab()
                        }
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

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer)
