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
    StatusBar, Alert, ActivityIndicator
} from 'react-native';
import {Container, Form, Item, Input} from 'native-base';
import styles from "../../styles/styles";
import IconDefault from '../../commons/IconDefault'
import IconLoop from './IconLoop'
import LinearGradient from 'react-native-linear-gradient';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {NavigationActions} from 'react-navigation';
import * as size from "../../styles/sizes";
import * as loginAction from './loginActions';

class LoginContainer extends Component {
    constructor(props) {
        super(props);
    }
    // componentWillMount() {
    //     this.props.loginAction.getDataLogin(this.props.status);
    // }

    saveData() {
        this.props.loginAction.setDataLogin(this.props.login)
    }

    signIn() {
        let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        if (this.props.login.email == '' || this.props.login.password == '') {
            Alert.alert("Có lỗi xảy ra", "Bạn cần nhập đầy đủ thông tin ");
        } else if (reg.test(this.props.login.email) == false) {
            Alert.alert("Có lỗi xảy ra", "Địa chỉ email không hợp lệ")
        } else {
            this.props.loginAction.loginUser(this.props.login);
            this.saveData();
        }
    }
    updateData(name, value) {
        let login = this.props.login;
        login[name] = value;
        this.props.loginAction.updateDataLogin(login);
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.status == 200) {
            const resetAction = NavigationActions.reset({
                index: 0,
                actions: [
                    NavigationActions.navigate({routeName: 'Home'})
                ]
            })
            this.props.navigation.dispatch(resetAction)
        }
    }
    render() {
        const {navigate} = this.props.navigation;
        return (
            <Container style={styles.wrapperContainer}>
                <StatusBar barStyle={'light-content'}/>
                <LinearGradient
                    colors={['#FF5858', '#F09819']}
                    style={styles.wrapperContainer}
                >
                    <View style={[{flex: 4, alignItems: 'center'}]}>
                        <IconLoop/>
                        <Text style={styleLogin.textLogo}>
                            SPREADY
                        </Text>
                    </View>
                    {/*<IconLoop/>*/}
                    <View style={[{flex: 6, alignItems: 'center', justifyContent: 'space-between', padding: 20}]}>
                        <Form style={[{marginTop: 10}, styles.wrapperCenter]}>
                            <Item style={[{marginRight: 15, borderColor: '#FFF'}, styleLogin.inputLogin]}>
                                <Input style={[styles.textDescriptionLight]}
                                       placeholderTextColor={'#FFF'}
                                       placeholder="User Name"
                                       keyboardType={'email-address'}
                                       onChangeText={(email) => {
                                        this.updateData('email', email);
                                    }}
                                    value={this.props.login.email}
                                />
                            </Item>
                            <Item style={[{marginRight: 15, borderColor: '#FFF'}, styleLogin.inputLogin]}>
                                <Input style={styles.textDescriptionLight}
                                       placeholderTextColor={'#FFF'}
                                       placeholder="Password"
                                       returnKeyType={'go'}
                                       secureTextEntry={true}
                                       onChangeText={(password) => {
                                        this.updateData('password', password);
                                    }}
                                    value={this.props.login.password}


                                />
                            </Item>
                            <TouchableOpacity
                                style={[styleLogin.buttonLogin, styles.wrapperCenter, {marginTop: 30}]}
                                onPress={() => {
                                    this.signIn()
                                }}
                                >
                                {(this.props.isLoading) ? (
                                <ActivityIndicator
                                    animated={true}
                                    color={"#FFF"}
                                    style={{
                                        height: 20,
                                    }}
                                    size='small'
                                />
                            ) : (
                              <Text style={styles.textDescriptionLight}>LOG IN</Text>
                            )
                            }
                            </TouchableOpacity>
                        </Form>
                        <View style={styles.wrapperCenter}>
                            <TouchableOpacity
                                activeOpacity={0.9}
                                style={[styleLogin.buttonLoginFacebook, styles.wrapperRowCenterVertical, styles.shadow]}>
                                <View style={[{width: 60}, styles.wrapperCenter]}>
                                    <IconDefault name={"FontAwesome|facebook-f"} color={"#FFF"} size={20}/>
                                </View>
                                <Text style={styles.textDescriptionLight}>Log in with facebook</Text>
                            </TouchableOpacity>
                            <View style={styles.wrapperSpace}/>
                            <TouchableOpacity
                                activeOpacity={0.9}
                                style={[styleLogin.buttonLoginGoogle, styles.wrapperRowCenterVertical, styles.shadow]}>
                                <View style={[{width: 60}, styles.wrapperCenter]}>
                                    <IconDefault name={"FontAwesome|google-plus"} color={"#FFF"} size={20}/>
                                </View>
                                <Text style={styles.textDescriptionLight}>Log in with google</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                activeOpacity={0.9}
                                style={{marginTop: 20}}>
                                <Text style={styles.textDescriptionLight}>Forgot your password?</Text>
                            </TouchableOpacity>
                        </View>
                        <View/>
                    </View>
                </LinearGradient>
            </Container>


        );
    }
}

function mapStateToProps(state) {
    return {
        login: state.login.login,
        isLoading: state.login.isLoading,
        status: state.login.status,
        error: state.login.error,
        isGetLocalData: state.login.isGetLocalData,
        isAutoLogin: state.login.isAutoLogin,
        save: state.login.save
    }
}
function mapDispatchToProps(dispatch) {
    return {
        loginAction: bindActionCreators(loginAction, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)

const styleLogin = StyleSheet.create({
    inputLogin: {
        width: size.deviceWidth * 0.8,
        marginRight: 15,
        borderColor: '#FFF',

    },
    textLogo: {
        marginTop: 60,
        color: '#FFF',
        fontFamily: 'Montserrat-Bold',
        fontSize: 30,
        letterSpacing: 5,
    },
    buttonLogin:{
        alignItems: 'center',
        padding: 10,
        paddingLeft: 20,
        borderRadius: 50,
        width: size.deviceWidth * 0.7,
    },
    buttonLoginFacebook:{
        alignItems: 'center',
        backgroundColor: '#2d5199',
        padding: 10,
        paddingLeft: 20,
        borderRadius: 50,
        width: size.deviceWidth * 0.7,
    },
    buttonLoginGoogle:{
        alignItems: 'center',
        backgroundColor: '#e92913',
        padding: 10,
        paddingLeft: 20,
        borderRadius: 50,
        width: size.deviceWidth * 0.7,
    }
})