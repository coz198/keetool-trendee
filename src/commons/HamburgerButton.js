import React, {Component} from 'react';
import {
    TouchableOpacity
} from 'react-native';
import IconDefault from './commons/IconDefault';

export default class HamburgerButton extends Component{
    render(){
        return(
            <TouchableOpacity
                onPress={() => this.props.navigate('DrawerOpen')}>

            </TouchableOpacity>
        );
    }
}

