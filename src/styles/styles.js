import {StyleSheet, Platform} from 'react-native';
import * as color from './colors';
import * as size from './sizes';
import {deviceHeight} from "./sizes";


const isIOS = Platform.OS === 'ios';

const style = {

    wrapperContainer: {
        flex: 1,
        backgroundColor: '#FFF',
    },
    wrapperRowSpaceBetween: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    wrapperRowCenterVertical: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    wrapperRowCenterHorizontal: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    wrapperRowCenter: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    wrapperCenter:{
        alignItems: 'center',
        justifyContent: 'center',
    },
    wrapperHeader: {
        height: isIOS ? 70 : 50,
        paddingTop: isIOS ? 20 : 0,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: color.backgroundColor,
    },
    wrapperButtonBottom: {
        width: size.deviceWidth,
        height: 60,
        position: 'absolute',
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: color.noneColor,
    },
    buttonBottom: {
        borderRadius: 50,
        width: size.deviceWidth * 0.8,
        padding: 8,
        backgroundColor: color.mainColor,
        alignItems: 'center',
        justifyContent: 'center',
    },

    paddingLeftRight: {
        paddingLeft: 20,
        paddingRight: 20,
    },
    paddingTopBottom: {
        paddingTop: 20,
        paddingBottom: 20,
    },
    paddingLine: {
        paddingTop: 3,
        paddingBottom: 3,
    },
    marginLeftRight: {
        marginLeft: 10,
        marginRight: 10,
    },
    marginTopBottom: {
        marginTop: 10,
        marginBottom: 10,
    },

    categoryInImage: {
        position: 'absolute',
        bottom: 10,
        left: 15,
        backgroundColor: 'rgba(211, 211, 211, 0.7)',
        padding: 5,
        paddingLeft: 10,
        paddingRight: 10,
        borderRadius: 13,
        overflow: "hidden",
        fontSize: 12,
        color: '#3a3a3a'
    },
    categoryAbsolute: {
        position: 'absolute',
        backgroundColor: color.mainColor,
        padding: 5,
        paddingLeft: 10,
        paddingRight: 10,
        borderRadius: 13,
        overflow: "hidden"
    },
    category: {
        backgroundColor: color.mainColor,
        padding: 5,
        paddingLeft: 10,
        paddingRight: 10,
        borderRadius: 13,
        overflow: "hidden"
    },

    shadow: isIOS
        ?
        {
            shadowColor: color.shadowColor,
            shadowOffset: {width: 0, height: 1},
            shadowOpacity: 0.3,
        }
        :
        {
            elevation: 1,
        },
    imageFeature:{
        borderRadius: 20,
        width: size.deviceWidth - 40,
        height: size.deviceHeight * 3 / 5
    },
    imageFullWidth: {
        width: size.deviceWidth,
        height: size.deviceHeight / 3,
        backgroundColor: color.background
    },
    imageCircleTiny:{
        borderRadius: 10,
        width: 20,
        height: 20
    },
    imageCircleNormal:{
        borderRadius: 15,
        width: 30,
        height: 30
    },
    wrapperTextAuthorFeatureImage:{
        backgroundColor: color.backgroundColor,
        padding: 10,
        width: size.deviceWidth - 50,
    },
    wrapperTextInFeatureImage:{
        bottom: 30,
        backgroundColor: color.noneColor,
        position: 'absolute',
        padding: 15,
    },
    wrapperIconBeforeText:{
        backgroundColor: color.mainColor,
        borderRadius: 10,
        width: 20,
        height: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    wrapperModal: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        alignItems: 'center',
        justifyContent: 'center',
    },
    wrapperModalFullSize: {
        width: size.deviceWidth,
        height: size.deviceHeight,
        flex: 1,
        backgroundColor: color.backgroundColor,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textLogo:{
        color: color.mainColor,
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 18,
    },
    textHeaderScreen:{
        color: '#3a3a3a',
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 18,
    },
    textSubDescriptionLight:{
        color: '#FFF',
        fontFamily: 'Montserrat-Regular',
        fontSize: 12,
    },
    textDescriptionLight:{
        color: '#FFF',
        fontFamily: 'Montserrat-Regular',
        fontSize: 14,
    },
    textDescriptionGray:{
        color: '#3a3a3a',
        fontFamily: 'Montserrat-Regular',
        fontSize: 14,
    },
    textTitleLight:{
        color: '#FFF',
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 16,
    }
}

const styles = StyleSheet.create(style)

export default (styles)