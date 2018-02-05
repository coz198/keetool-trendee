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
import {Container, Content, Item, Form, Input} from 'native-base';
import styles from "../../styles/styles";
import Carousel, { ParallaxImage } from 'react-native-snap-carousel';
import * as chooseImageFunction from './chooseImageFunction';

class IdeaContainer extends Component {
    constructor() {
        super();
        this.state = {
            imageSource: null,
            videoSource: '',
        }
    }
    // FUNCTION CHOICE IMAGE
    choiceImage() {
        chooseImageFunction.chooseImage(source => this.setState({imageSource: source}))
    }

    // FUNCTION CHOICE VIDEO
    choiceVideo() {
        chooseImageFunction.chooseVideo(source => this.setState({videoSource: source}))
    }
    render () {
        const {navigate} = this.props.navigation;
        const {goBack} = this.props.navigation;
        const {imageSource} = this.state;
        return (
            <Container style={styles.wrapperContainer}>
                <View style={[styles.wrapperHeader, styles.paddingLeftRight]}>
                    <Text style={styles.textHeaderScreen}>
                        ACTIVITY IDEA
                    </Text>


                    <TouchableOpacity
                        activeOpacity={0.5}
                        onPress={() => goBack()}
                    >
                        <IconDefault
                            name={'Ionicons|md-close'}
                            style={{paddingLeft :0}}
                        />
                    </TouchableOpacity>
                </View>

                <TouchableOpacity
                    activeOpacity={1}
                    onPress={() => this.choiceImage()}
                >
                    <Image
                        resize={'cover'}
                        style={[styles.imageFullWidth, styles.marginTopBottom]}
                        source={imageSource == null ? require('../../../assets/image/defaultImage.png') : imageSource}/>
                </TouchableOpacity>
                <Form>
                    <Item>
                        <Input style={styles.textDescriptionGray} placeholder="Activity Name" />
                    </Item>
                    <Item>
                        <Input style={styles.textDescriptionGray} placeholder="Description" />
                    </Item>
                </Form>
                <View style={styles.wrapperButtonBottom}>
                    <TouchableOpacity style={styles.buttonBottom}>
                        <Text style={styles.textTitleLight}>Let's try this!</Text>
                    </TouchableOpacity>
                </View>

            </Container>
        );
    }
}

export default (IdeaContainer);
