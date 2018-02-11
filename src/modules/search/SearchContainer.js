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
    FlatList,
} from 'react-native';
import IconDefault from '../../commons/IconDefault'
import {Container} from 'native-base';
import styles from "../../styles/styles";
import Loading from '../../commons/Loading';
import {connect} from "react-redux";
import Gradient from '../../commons/Gradient'

const category = [
    {
        "id" : 0,
        "title" : "alone"
    },
    {
        "id" : 1,
        "title" : "couple"
    },
    {
        "id" : 2,
        "title" : "small group"
    },
    {
        "id" : 3,
        "title" : "large group"
    },
    {
        "id" : 4,
        "title" : "bleand"
    },
    {
        "id" : 5,
        "title" : "forest"
    },
    {
        "id" : 6,
        "title" : "boy"
    },
    {
        "id" : 7,
        "title" : "girl"
    },
    {
        "id" : 8,
        "title" : "adult"
    },

]

class SearchContainer extends Component {
    constructor() {
        super();
        this.state = {
            category: 0,
            isLoadingCategory: false
        }
    }
    isLoading() {
        this.setState({isLoadingCategory: true});
        setTimeout(() => this.setState({isLoadingCategory: false}), 100);
    }

    chooseCategory(id){
        this.setState({category: id})
        this.isLoading()
    }
    render() {
        const {navigate} = this.props.navigation;
        const {goBack} = this.props.navigation;
        const {isLoadingCategory} = this.state;

        return (
            <Container style={styles.wrapperContainer}>
                <View style={[styles.wrapperHeader, styles.paddingLeftRight]}>
                    <View style={[styles.wrapperSearchBar, styles.wrapperRowCenter]}>
                        <IconDefault name={"EvilIcons|search"} size={20}/>
                        <Text style={styles.textDescriptionGray}>Search</Text>
                    </View>
                </View>
                <View style={{justifyContent: 'center', marginTop: 10, marginBottom: 10}}>
                    <FlatList
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        data={category}
                        ListFooterComponent={
                            <View style={{width: 10}}/>
                        }
                        renderItem={({item}) =>
                            <TouchableOpacity
                                activeOpacity={0.9}
                                onPress={() => this.chooseCategory(item.id)}
                                style={{justifyContent: 'center'}}>
                                <Text style={[ category[0] ? {marginLeft: 20} :  {marginLeft: 0} , item.id == this.state.category ? styles.buttonTabInColumn : styles.buttonTabInColumnDisable]}>{item.title.toUpperCase()}</Text>
                            </TouchableOpacity>
                        }
                    />
                </View>
                {
                    isLoadingCategory
                        ?
                        <Loading/>
                        :
                        <FlatList
                            ref="listRef"
                            showsVerticalScrollIndicator={false}
                            data={this.props.data}
                            onEndReachedThreshold={5}
                            renderItem={({item}) =>
                                <TouchableOpacity
                                    onPress={() => navigate('DetailTrendContainer')}
                                    activeOpacity={0.9}
                                    style={[styles.marginLeftRight, styles.imageItemSearch, styles.shadow, {marginBottom: 10, marginTop: 10}]}>
                                    <Image
                                        borderRadius={Platform.OS === 'android' ? 15 : null}
                                        resizeMode={'cover'}
                                        source={{uri: item.url}}
                                        style={styles.imageItemSearch}
                                    />
                                    <Gradient style={styles.gradientImageSearch}/>
                                    <View style={[styles.wrapperTextInFeatureImage, {bottom: 0}]}>
                                        <Text style={styles.textTitleLight} numberOfLines={1}>TITLE</Text>
                                        <Text style={styles.textDescriptionLight} numberOfLines={2}>Description</Text>
                                    </View>
                                    <Text style={[styles.categoryInImageTopRight]}>Category</Text>

                                </TouchableOpacity>
                            }
                        />
                }

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
    return {}
}

export default connect(mapStateToProps)(SearchContainer)
