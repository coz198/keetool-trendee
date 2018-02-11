import React, {Component} from 'react';
import {
    Image,
    Text,
    TouchableOpacity,
    View,
    StyleSheet,
} from 'react-native';
import IconDefault from '../../commons/IconDefault'
import {Container} from 'native-base';
import { DrawerItems } from 'react-navigation';
import styles from "../../styles/styles";
import * as color from "../../styles/colors";
import {deviceWidth} from "../../styles/sizes";

class DrawerContainer extends Component {


    render () {
        const {navigate} = this.props.navigation;
        const {goBack} = this.props.navigation;
        return (
            <Container style={styles.wrapperContainer}>
                <View
                    style={[styles.wrapperLogoDrawer, styles.wrapperCenter]}
                >
                    <Text style={[styles.textLogo, {fontSize: 30}]}>
                        TRENDEE
                    </Text>
                </View>
                <DrawerItems {...this.props} />
                <TouchableOpacity style={customStyles.wrapperButtonLogout}>
                    <Text style={[customStyles.buttonLogout, styles.textDescriptionGray, {color: color.mainColor}]}>Log out</Text>
                </TouchableOpacity>
            </Container>
        );
    }
}

const customStyles = StyleSheet.create({
    wrapperButtonLogout:{
        borderTopWidth: 0.5,
        borderColor: '#e0e0e0',
        width: deviceWidth * 3/4,
        height: 40,
        position: 'absolute',
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: color.noneColor,
    },

})

export default (DrawerContainer)
