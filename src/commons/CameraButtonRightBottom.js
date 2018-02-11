import React, {Component} from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    Platform
} from 'react-native';
import Icon from './Icon';
import * as color from "../styles/colors";
import {buttonCircleAbsolute} from "../styles/sizes";

export default class CameraButtonRightBottom extends Component{
    render(){
        return(
            <TouchableOpacity
                activeOpacity={0.9}
                style={[styles.buttonSearch, styles.shadow]}
                onPress={this.props.function}
            >
                <Icon name={'Entypo|camera'} size={25} color={'#FFF'}/>
            </TouchableOpacity>
        );
    }
}

const isIOS = Platform.OS === 'ios';

const styles = StyleSheet.create({
    buttonSearch: {
        bottom: 25,
        position: 'absolute',
        bottom: 20,
        right: 10,
        backgroundColor: color.mainColor,
        width: buttonCircleAbsolute,
        height: buttonCircleAbsolute,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: buttonCircleAbsolute / 2,
    },
    shadow: isIOS
        ?
        {
            shadowColor: color.shadowColor,
            shadowOffset: {width: 0, height: 1},
            shadowOpacity: 0.3,
        }
        :
        {
            elevation: 1,
        },
})