import React, {Component} from 'react';
import LinearGradient from 'react-native-linear-gradient';
export default class Gradient extends Component{
    render(){
        return(
            <LinearGradient colors={['transparent', 'rgba(79, 79, 79, 0.2)', 'rgba(79, 79, 79, 0.7)']} style={[this.props.style, {position:'absolute', bottom: 0}]}/>
        );
    }
}

