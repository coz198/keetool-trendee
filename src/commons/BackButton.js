import React, {Component} from 'react';
import {
    TouchableOpacity, StyleSheet
} from 'react-native';
import Icon from './Icon';
import * as color from '../styles/colors'

export default class BackButton extends Component{
    render(){
        return(
            <TouchableOpacity
                onPress={() => this.props.goBack(null)}
            >
                <Icon name="Entypo|chevron-thin-left"
                      size={25}
                      color={color.iconColor}
                />
            </TouchableOpacity>
        );
    }
}
