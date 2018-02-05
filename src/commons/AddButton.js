import React, {Component} from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    Platform
} from 'react-native';
import Icon from './Icon';
import * as color from "../styles/colors";

export default class AddButton extends Component{
    render(){
        return(
            <TouchableOpacity
                activeOpacity={0.9}
                style={[styles.buttonAdd, styles.shadow]}
                onPress={this.props.function}
            >
                <Icon name={'Entypo|plus'} size={35} color={'#FFF'}/>
            </TouchableOpacity>
        );
    }
}

const isIOS = Platform.OS === 'ios';

const styles = StyleSheet.create({
    buttonAdd: {
        position: 'absolute',
        bottom: 20,
        left: 20,
        backgroundColor: color.mainColor,
        width: 60,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
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