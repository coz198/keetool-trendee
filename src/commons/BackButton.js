import React, {Component} from 'react';
import {
    TouchableOpacity, StyleSheet
} from 'react-native';
import IconDefault from './IconDefault';

export default class BackButton extends Component{
    render(){
        return(
            <TouchableOpacity
                onPress={() => this.props.goBack(null)}
            >
                <IconDefault
                    name={'Ionicons|ios-arrow-back'}
                    style={{paddingLeft :0}}
                />
            </TouchableOpacity>
        );
    }
}
