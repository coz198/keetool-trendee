import React, {Component} from 'react';
import {
    Image,
    Text,
    TouchableOpacity,
    View,
    Platform,
    StyleSheet,
    Dimensions,
    KeyboardAvoidingView,
    Animated, Easing
} from 'react-native';
import {Container, Form, Item, Input} from 'native-base';
import IconDefault from '../../commons/IconDefault'
import * as size from "../../styles/sizes";

class IconLoop extends Component {
    constructor() {
        super();
        this.state = {
            modalIdea: false,
            modalIDetailTrend: false,
            iconHorizontal0: new Animated.Value(-50),
            iconVertical0: new Animated.Value(Math.floor(Math.random() * 300) + 1),
            iconHorizontal1: new Animated.Value(-100),
            iconVertical1: new Animated.Value(Math.floor(Math.random() * 300) + 1),
            iconHorizontal2: new Animated.Value(-150),
            iconVertical2: new Animated.Value(Math.floor(Math.random() * 300) + 1),
            iconHorizontal3: new Animated.Value(-200),
            iconVertical3: new Animated.Value(Math.floor(Math.random() * 300) + 1),
            iconHorizontal4: new Animated.Value(-250),
            iconVertical4: new Animated.Value(Math.floor(Math.random() * 300) + 1),
            iconHorizontal5: new Animated.Value(-300),
            iconVertical5: new Animated.Value(Math.floor(Math.random() * 300) + 1),
            iconHorizontal6: new Animated.Value(-350),
            iconVertical6: new Animated.Value(Math.floor(Math.random() * 300) + 1),
            iconHorizontal7: new Animated.Value(-400),
            iconVertical7: new Animated.Value(Math.floor(Math.random() * 300) + 1),
            iconHorizontal8: new Animated.Value(-450),
            iconVertical8: new Animated.Value(Math.floor(Math.random() * 300) + 1),
            iconHorizontal9: new Animated.Value(-500),
            iconVertical9: new Animated.Value(Math.floor(Math.random() * 300) + 1),
        }
    }

    componentDidMount() {
        const timeAnimate = 25000;

        const iconHorizontal0 = Animated.timing(
            this.state.iconHorizontal0, {
                toValue: size.deviceWidth + 500,
                duration: timeAnimate,
            },
        );
        const iconVertical0 = Animated.timing(
            this.state.iconVertical0, {
                toValue: Math.floor(Math.random() * 300) + 0,
                duration: timeAnimate,
            },
        );
        const iconHorizontal1 = Animated.timing(
            this.state.iconHorizontal1, {
                toValue: size.deviceWidth + 450,
                duration: timeAnimate,
            },
        );
        const iconVertical1 = Animated.timing(
            this.state.iconVertical1, {
                toValue: Math.floor(Math.random() * 300) + 0,
                duration: timeAnimate,
            },
        );
        const iconHorizontal2 = Animated.timing(
            this.state.iconHorizontal2, {
                toValue: size.deviceWidth + 400,
                duration: timeAnimate,
            },
        );
        const iconVertical2 = Animated.timing(
            this.state.iconVertical2, {
                toValue: Math.floor(Math.random() * 300) + 0,
                duration: timeAnimate,
            },
        );

        const iconHorizontal3 = Animated.timing(
            this.state.iconHorizontal3, {
                toValue: size.deviceWidth + 350,
                duration: timeAnimate,
            },
        );
        const iconVertical3 = Animated.timing(
            this.state.iconVertical3, {
                toValue: Math.floor(Math.random() * 300) + 0,
                duration: timeAnimate,
            },
        );

        const iconHorizontal4 = Animated.timing(
            this.state.iconHorizontal4, {
                toValue: size.deviceWidth + 300,
                duration: timeAnimate,
            },
        );
        const iconVertical4 = Animated.timing(
            this.state.iconVertical4, {
                toValue: Math.floor(Math.random() * 300) + 0,
                duration: timeAnimate,
            },
        );

        const iconHorizontal5 = Animated.timing(
            this.state.iconHorizontal5, {
                toValue: size.deviceWidth + 250,
                duration: timeAnimate,
            },
        );
        const iconVertical5 = Animated.timing(
            this.state.iconVertical5, {
                toValue: Math.floor(Math.random() * 300) + 0,
                duration: timeAnimate,
            },
        );
        const iconHorizontal6 = Animated.timing(
            this.state.iconHorizontal6, {
                toValue: size.deviceWidth + 200,
                duration: timeAnimate,
            },
        );
        const iconVertical6 = Animated.timing(
            this.state.iconVertical6, {
                toValue: Math.floor(Math.random() * 300) + 0,
                duration: timeAnimate,
            },
        );

        const iconHorizontal7 = Animated.timing(
            this.state.iconHorizontal7, {
                toValue: size.deviceWidth + 150,
                duration: timeAnimate,
            },
        );
        const iconVertical7 = Animated.timing(
            this.state.iconVertical7, {
                toValue: Math.floor(Math.random() * 300) + 0,
                duration: timeAnimate,
            },
        );

        const iconHorizontal8 = Animated.timing(
            this.state.iconHorizontal8, {
                toValue: size.deviceWidth + 100,
                duration: timeAnimate,
            },
        );
        const iconVertical8 = Animated.timing(
            this.state.iconVertical8, {
                toValue: Math.floor(Math.random() * 300) + 0,
                duration: timeAnimate,
            },
        );

        const iconHorizontal9 = Animated.timing(
            this.state.iconHorizontal9, {
                toValue: size.deviceWidth + 50,
                duration: timeAnimate,
            },
        );
        const iconVertical9 = Animated.timing(
            this.state.iconVertical9, {
                toValue: Math.floor(Math.random() * 300) + 0,
                duration: timeAnimate,
            },
        );

        const ani0 = Animated.parallel([iconHorizontal0, iconVertical0])
        const ani1 = Animated.parallel([iconHorizontal1, iconVertical1])
        const ani2 = Animated.parallel([iconHorizontal2, iconVertical2])
        const ani3 = Animated.parallel([iconHorizontal3, iconVertical3])
        const ani4 = Animated.parallel([iconHorizontal4, iconVertical4])
        const ani5 = Animated.parallel([iconHorizontal5, iconVertical5])
        const ani6 = Animated.parallel([iconHorizontal6, iconVertical6])
        const ani7 = Animated.parallel([iconHorizontal7, iconVertical7])
        const ani8 = Animated.parallel([iconHorizontal8, iconVertical8])
        const ani9 = Animated.parallel([iconHorizontal9, iconVertical9])

        Animated.loop(ani0).start()
        Animated.loop(ani1).start()
        Animated.loop(ani2).start()
        Animated.loop(ani3).start()
        Animated.loop(ani4).start()
        Animated.loop(ani5).start()
        Animated.loop(ani6).start()
        Animated.loop(ani7).start()
        Animated.loop(ani8).start()
        Animated.loop(ani9).start()
    }

    render() {
        const {iconHorizontal0, iconVertical0} = this.state;
        const {iconHorizontal1, iconVertical1} = this.state;
        const {iconHorizontal2, iconVertical2} = this.state;
        const {iconHorizontal3, iconVertical3} = this.state;
        const {iconHorizontal4, iconVertical4} = this.state;
        const {iconHorizontal5, iconVertical5} = this.state;
        const {iconHorizontal6, iconVertical6} = this.state;
        const {iconHorizontal7, iconVertical7} = this.state;
        const {iconHorizontal8, iconVertical8} = this.state;
        const {iconHorizontal9, iconVertical9} = this.state;
        const rotate = this.state.iconHorizontal0.interpolate({
            inputRange: [-50, size.deviceWidth + 500],
            outputRange: ['-20deg', '50deg']
        })
        const colorIcon = 'rgba(255, 255, 255, 0.2)';
        const sizeIcon = 40;

        return (
            <View style={[{position: 'absolute', width: size.deviceWidth, height: size.deviceHeight * 2 / 5}]}>
                <Animated.View
                    style={{top: iconVertical0, left: iconHorizontal0, position: 'absolute', transform: [{rotate}]}}>
                    <IconDefault name={"EvilIcons|camera"} color={colorIcon} size={sizeIcon}/>
                </Animated.View>
                <Animated.View
                    style={{top: iconVertical1, left: iconHorizontal1, position: 'absolute', transform: [{rotate}]}}>
                    <IconDefault name={"EvilIcons|gear"} color={colorIcon} size={sizeIcon}/>
                </Animated.View>
                <Animated.View
                    style={{top: iconVertical2, left: iconHorizontal2, position: 'absolute', transform: [{rotate}]}}>
                    <IconDefault name={"EvilIcons|envelope"} color={colorIcon} size={sizeIcon}/>
                </Animated.View>
                <Animated.View
                    style={{top: iconVertical3, left: iconHorizontal3, position: 'absolute', transform: [{rotate}]}}>
                    <IconDefault name={"EvilIcons|image"} color={colorIcon} size={sizeIcon}/>
                </Animated.View>
                <Animated.View
                    style={{top: iconVertical4, left: iconHorizontal4, position: 'absolute', transform: [{rotate}]}}>
                    <IconDefault name={"EvilIcons|star"} color={colorIcon} size={sizeIcon}/>
                </Animated.View>
                <Animated.View
                    style={{top: iconVertical5, left: iconHorizontal5, position: 'absolute', transform: [{rotate}]}}>
                    <IconDefault name={"EvilIcons|spinner"} color={colorIcon} size={sizeIcon}/>
                </Animated.View>
                <Animated.View
                    style={{top: iconVertical6, left: iconHorizontal6, position: 'absolute', transform: [{rotate}]}}>
                    <IconDefault name={"EvilIcons|trophy"} color={colorIcon} size={sizeIcon}/>
                </Animated.View>
                <Animated.View
                    style={{top: iconVertical7, left: iconHorizontal7, position: 'absolute', transform: [{rotate}]}}>
                    <IconDefault name={"EvilIcons|trash"} color={colorIcon} size={sizeIcon}/>
                </Animated.View>
                <Animated.View
                    style={{top: iconVertical8, left: iconHorizontal8, position: 'absolute', transform: [{rotate}]}}>
                    <IconDefault name={"EvilIcons|paperclip"} color={colorIcon} size={sizeIcon}/>
                </Animated.View>
                <Animated.View
                    style={{top: iconVertical9, left: iconHorizontal9, position: 'absolute', transform: [{rotate}]}}>
                    <IconDefault name={"EvilIcons|check"} color={colorIcon} size={sizeIcon}/>
                </Animated.View>
            </View>
        );
    }
}


export default (IconLoop)

