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
    FlatList
} from 'react-native';
import IconDefault from '../../commons/IconDefault'
import BackButton from '../../commons/BackButton'
import {Container} from 'native-base';
import styles from "../../styles/styles";
import SearchButton from "../../commons/SearchButton"
import {connect} from "react-redux";

class SearchContainer extends Component {
    constructor() {
        super();
        this.state = {
        }
    }

    render () {
        const {navigate} = this.props.navigation;
        const {goBack} = this.props.navigation;
        return (
            <Container style={styles.wrapperContainer}>
                <View style={[styles.wrapperHeader, styles.paddingLeftRight]}>
                    <BackButton goBack={goBack}/>
                    <Text style={styles.textLogo}>TRENDEE</Text>
                    <TouchableOpacity
                        activeOpacity={0.9}
                        onPress={() => navigate('UserContainer')}
                    >
                        <Image
                            resizeMode={'cover'}
                            style={styles.imageCircleNormal}
                            source={{uri: 'https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?auto=format&fit=crop&w=334&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D'}}/>
                        <View style={styles.badge}/>
                    </TouchableOpacity>
                </View>
                <View style={[styles.paddingLeftRight, styles.wrapperRowSpaceBetween, {marginBottom: 10}]}>
                    <View style={styles.wrapperRowCenterVertical}>
                        <View style={[styles.wrapperIconBeforeText, {marginRight: 10}]}>
                            <IconDefault
                                name={'Ionicons|md-arrow-up'}
                                style={{padding :0}}
                                size={10}
                                color={'#FFF'}
                            />
                        </View>
                        <Text style={styles.textDescriptionGray}>TRENDING ACTIVITY</Text>
                    </View>
                    <TouchableOpacity>
                        <IconDefault
                            name={'Entypo|pencil'}
                            style={{padding :0}}
                            size={20}
                        />
                    </TouchableOpacity>
                </View>
                <FlatList
                    ref="listRef"
                    showsVerticalScrollIndicator={false}
                    data={this.props.data}
                    onEndReachedThreshold={5}
                    renderItem={({item}) =>
                        <TouchableOpacity style={[styles.marginLeftRight, styles.imageItemSearch ,styles.shadow, {marginBottom: 20}]}>
                            <Image
                                borderRadius={Platform.OS === 'android' ? 15 : null}
                                resizeMode={'cover'}
                                source={{uri: item.url}}
                                style={styles.imageItemSearch}
                            />
                            <View style={[styles.wrapperTextInFeatureImage, {bottom: 0}]}>
                                <Text style={styles.textTitleLight} numberOfLines={1}>TITLE</Text>
                                <Text style={styles.textDescriptionLight} numberOfLines={2}>Description</Text>
                            </View>
                            <Text style={[styles.categoryInImageTopRight]}>Category</Text>
                        </TouchableOpacity>

                    }
                />
                <SearchButton/>
            </Container>
        );
    }
}
function mapStateToProps(state) {
    return {
        data: state.home.data
    }
}

function mapDispatchToProps(dispatch) {
    return {
    }
}

export default connect(mapStateToProps)(SearchContainer)
