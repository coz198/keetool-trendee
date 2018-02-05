import React, {Component} from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    Platform
} from 'react-native';
import Icon from './Icon';
import * as color from "../styles/colors";

export default class SearchButton extends Component{
    render(){
        return(
            <TouchableOpacity
                activeOpacity={0.9}
                style={[styles.buttonSearch, styles.shadow]}
                onPress={this.props.function}
            >
                <Icon name={'Ionicons|ios-search'} size={30} color={'#FFF'}/>
            </TouchableOpacity>
        );
    }
}

const isIOS = Platform.OS === 'ios';

const styles = StyleSheet.create({
    buttonSearch: {
        position: 'absolute',
        bottom: 20,
        right: 20,
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