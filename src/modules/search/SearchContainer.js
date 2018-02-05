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
import {Container, Content, Item, Input, Left, Right} from 'native-base';
import styles from "../../styles/styles";
import Carousel, { ParallaxImage } from 'react-native-snap-carousel';

class SearchContainer extends Component {
    render () {
        return (
            <Container style={styles.wrapperContainer}>
                <View style={[styles.wrapperHeader, styles.paddingLeftRight]}>
                    <TouchableOpacity>
                        <IconDefault
                            name={'MaterialIcons|menu'}
                            style={{paddingLeft :0}}
                        />
                    </TouchableOpacity>

                    <Text style={styles.textLogo}>TRENDEE</Text>

                    <TouchableOpacity
                        activeOpacity={0.9}
                        onPress={() => navigate('UserContainer')}
                    >
                        <Image
                            resizeMode={'cover'}
                            style={styles.imageCircleNormal}
                            source={{uri: 'https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?auto=format&fit=crop&w=334&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D'}}/>
                    </TouchableOpacity>
                </View>
            </Container>
        );
    }
}

export default (SearchContainer);
