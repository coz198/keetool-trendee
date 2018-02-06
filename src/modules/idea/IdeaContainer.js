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
import CloseButton from '../../commons/CloseButton'
import {Container, Content, Item, Form, Input} from 'native-base';
import styles from "../../styles/styles";
import * as chooseImageFunction from './chooseImageFunction';

class IdeaContainer extends Component {
    constructor() {
        super();
        this.state = {
            imageSource: '',
        }
    }
    // FUNCTION CHOICE IMAGE
    chooseImage() {
        chooseImageFunction.chooseImage(source => this.setState({imageSource: source}))
    }

    render () {
        const {navigate} = this.props.navigation;
        const {goBack} = this.props.navigation;
        const {imageSource} = this.state;
        return (
            <Container style={styles.wrapperContainer}>
                <View style={[styles.wrapperHeader, styles.paddingLeftRight]}>
                    <Text style={styles.textHeaderScreen}>ACTIVITY IDEA</Text>
                    <CloseButton goBack={goBack}/>
                </View>
                <KeyboardAvoidingView
                    behavior={Platform.OS === 'ios' ? 'position' : undefined}
                >
                    <TouchableOpacity
                        activeOpacity={1}
                        onPress={() => this.chooseImage()}
                        style={styles.imageFullWidth}
                    >
                        <Image
                            resize={'cover'}
                            style={[styles.imageFullWidth, styles.marginTopBottom]}
                            source={imageSource == '' ? require('../../../assets/image/defaultImage.png') : imageSource}/>
                    </TouchableOpacity>
                    <Form style={{marginTop: 10}}>
                        <Item style={{marginRight: 15}}>
                            <Input style={styles.textDescriptionGray} placeholder="Activity Name" />
                        </Item>
                        <Item style={{marginRight: 15}}>
                            <Input style={styles.textDescriptionGray} placeholder="Description" />
                        </Item>
                        <Item style={{marginRight: 15}}>
                            <Input style={styles.textDescriptionGray} placeholder="Suitable For" />
                        </Item>
                        <Item style={{marginRight: 15}}>
                            <Input style={styles.textDescriptionGray} placeholder="Budget" />
                        </Item>
                    </Form>
                </KeyboardAvoidingView>

                <View style={styles.wrapperButtonBottom}>
                    <TouchableOpacity
                        style={[styles.buttonBottom, styles.shadow]}
                        activeOpacity={0.9}
                    >
                        <Text style={styles.textTitleLight}>Let's try this!</Text>
                    </TouchableOpacity>
                </View>
            </Container>
        );
    }
}

export default (IdeaContainer);
