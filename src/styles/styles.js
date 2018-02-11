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
    wrapperSpace: {
        height :20,
        backgroundColor: color.noneColor,
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
    wrapperSearchBar: {
        borderRadius: 5,
        height: 40,
        width: size.deviceWidth - 40,
        backgroundColor: '#eaeaea',
    },
    wrapperTabInColumn: {
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: color.backgroundColor,
    },
    wrapperButtonBottom: {
        width: size.deviceWidth,
        marginTop: 20,
        height: 60,
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

    buttonTabInColumn: {
        overflow:"hidden",
        borderRadius: 13,
        padding: 15,
        paddingTop: 5,
        paddingBottom: 5,
        backgroundColor: color.mainColor,
        color: '#FFF',
        fontSize: 12,
        fontFamily: 'Montserrat-SemiBold',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonTabInColumnDisable: {
        overflow:"hidden",
        borderRadius: 13,
        padding: 15,
        paddingTop: 5,
        paddingBottom: 5,
        backgroundColor: color.noneColor,
        color: color.disableColor,
        fontSize: 12,
        fontFamily: 'Montserrat-SemiBold',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paddingLeftRight: {
        paddingLeft: 20,
        paddingRight: 20,
    },
    paddingLeftRightImage: {
        paddingLeft: 10,
        paddingRight: 10,
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
    category: {
        backgroundColor: 'rgba(211, 211, 211, 0.7)',
        padding: 5,
        paddingLeft: 10,
        paddingRight: 10,
        borderRadius: 13,
        overflow: "hidden",
        fontSize: 12,
        color: '#3a3a3a'
    },
    categoryInImageTopRight: {
        position: 'absolute',
        top: 10,
        right: 15,
        backgroundColor: 'rgba(211, 211, 211, 0.7)',
        padding: 5,
        paddingLeft: 10,
        paddingRight: 10,
        borderRadius: 13,
        overflow: "hidden",
        fontSize: 12,
        color: '#3a3a3a'
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

        },
    imageFeature:{
        borderRadius: 20,
        width: size.deviceWidth - 40,
        height: size.deviceHeight * 2 / 3
    },
    gradientImageFeature:{
        borderRadius: 20,
        width: size.deviceWidth - 40,
        height: size.deviceHeight * 2 / 9
    },
    wrapperLogoDrawer:{
        height: size.deviceHeight / 3
    },
    imageSquare:{
        borderRadius: 5,
        width: 120,
        height: 120,
    },
    imageFullWidth: {
        width: size.deviceWidth,
        height: size.deviceHeight / 3,
        backgroundColor: color.background
    },
    imageCircleTiny:{
        width: 16,
        height: 16,
        borderRadius: 8,

    },
    wrapperImageCircleTiny:{
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 11,
        width: 22,
        height: 22,
        backgroundColor: color.backgroundColor
    },
    wrapperTextAfterListFriend:{
        justifyContent: 'center',
        height: 22,
    },
    imageCircleNormal:{
        borderRadius: 10,
        width: 20,
        height: 20
    },
    imageCircleBig:{
        borderRadius: 40,
        width: 80,
        height: 80
    },
    imageItemSearch:{
        borderRadius: 10,
        height: size.deviceHeight / 4
    },
    gradientImageSearch:{
        width: size.deviceWidth - 20,
        borderRadius: 10,
        height: size.deviceHeight / 12
    },
    wrapperTextAuthorFeatureImage:{
        backgroundColor: color.noneColor,
        padding: 10,
        width: size.deviceWidth - 50,
    },
    wrapperTextInFeatureImage:{
        width: size.deviceWidth - 40,
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
        fontSize: 13,
    },
    inputLogin:{
        width: size.deviceWidth * 0.8,
    },
    badge:{
        backgroundColor: color.mainColor,
        height: 10,
        width: 10,
        borderRadius: 5,
        position: 'absolute',
        top: -2,
        right: -2,
    },
    textDescriptionGray:{
        color: '#3a3a3a',
        fontFamily: 'Montserrat-Regular',
        fontSize: 13,
    },
    textTitleLight:{
        color: '#FFF',
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 16,
    },
    textTitleDark:{
        color: '#3a3a3a',
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 14,
    }
}

const styles = StyleSheet.create(style)

export default (styles)