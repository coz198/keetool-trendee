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
import AddButtonRight from "../../commons/AddButtonRight";
import {connect} from "react-redux";

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
                <View style={[styles.wrapperHeader, styles.paddingLeftRight]}>
                <BackButton goBack={goBack}/>
                </View>
                <View style={{alignItems: 'center', marginTop: -20}}>
                    <Image
                        style={styles.imageCircleBig}
                        source={{uri: 'https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?auto=format&fit=crop&w=334&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D'}}
                    />
                    <Text style={[styles.textTitleDark, styles.paddingLine, {marginTop: 10}]}>Cong</Text>
                    <Text style={styles.textDescriptionGray}>60 Activities</Text>
                </View>
                <View>
                    <View style={styles.wrapperRowSpaceBetween}>
                        <TouchableOpacity
                            onPress={() => this.View(0)}
                            style={styles.wrapperTabInColumn}>
                            <Text style={tab == 0 ? styles.buttonTabInColumn : styles.buttonTabInColumnDisable}>ACTIVITIES</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => this.View(1)}
                            style={styles.wrapperTabInColumn}>
                            <Text style={tab == 1 ? styles.buttonTabInColumn : styles.buttonTabInColumnDisable}>WISH LIST</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
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
                <AddButtonRight function={() => navigate('IdeaContainer')}/>
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
