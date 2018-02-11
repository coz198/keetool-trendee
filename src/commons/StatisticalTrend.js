import React, {Component} from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    Platform,
    View,
    Text,
} from 'react-native';
import IconDefault from "./IconDefault"
import styles from "../styles/styles";

export default class StatisticalTrend extends Component{
    render(){
        return(
            <View style={styles.wrapperRowSpaceBetween}>
                <TouchableOpacity style={styles.wrapperRowCenterVertical}>
                    <IconDefault name={"EvilIcons|heart"} style={{paddingRight: 3}} size={20}/>
                    <Text style={styles.textDescriptionGray}>16</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.wrapperRowCenterVertical}>
                    <IconDefault name={"EvilIcons|comment"}  style={{paddingRight: 3}} size={20}/>
                    <Text style={styles.textDescriptionGray}>5</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.wrapperRowCenterVertical}>
                    <IconDefault name={"EvilIcons|star"}  style={{paddingRight: 3}} size={20}/>
                    <Text style={styles.textDescriptionGray}>98</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

