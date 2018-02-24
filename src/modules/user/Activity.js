import React, {Component} from 'react';
import {
    Image,
    Text,
    TouchableOpacity,
    View,
    Platform,
    FlatList
} from 'react-native';
import {Container, Content, Item, Input, Left, Right} from 'native-base';
import styles from "../../styles/styles";
import StatisticalTrend from "../../commons/StatisticalTrend";

class Activity extends Component {
    render() {
        const {data} = this.props;
        return (
            <FlatList
                ref="listRef"
                showsVerticalScrollIndicator={false}
                data={data}
                ListFooterComponent={
                    <View style={{height: 20}}/>
                }
                renderItem={({item}) =>
                    <TouchableOpacity
                        activeOpacity={0.9}

                        onPress={() => this.props.navigate('DetailUserBlogContainer')}
                        style={[styles.marginLeftRight, {marginBottom: 20}]}>
                        <View style={styles.marginTopBottom}>
                            <Text style={[styles.textDescriptionGray, styles.paddingLine]} numberOfLines={1}>22 December, 2018</Text>
                            <Text style={styles.textTitleDark} numberOfLines={1}>This Is Where I Live in New Zealand! ~ Coromandel Peninsula!</Text>
                        </View>


                        <Image
                            borderRadius={Platform.OS === 'android' ? 15 : null}
                            resizeMode={'cover'}
                            source={{uri: item.url}}
                            style={styles.imageItemSearch}
                        />
                        <View style={[{marginTop: 5}, styles.wrapperRowSpaceBetween]}>
                            {/* <FlatList
                                ref="listRef"
                                horizontal={true}
                                showsVerticalScrollIndicator={false}
                                data={item.member.slice(0, 3)}
                                ListFooterComponent={
                                    item.member.length > 3
                                        ?
                                        <TouchableOpacity style={[styles.wrapperTextAfterListFriend, {marginLeft: 10}]}>
                                            <Text
                                                style={styles.textDescriptionGray}> +{item.member.length - 3} Friends</Text>
                                        </TouchableOpacity>
                                        :
                                        <Text/>
                                }
                                renderItem={({item}) => {
                                    return (
                                        <TouchableOpacity style={[styles.wrapperImageCircleTiny, {marginRight: -8}]}>
                                            <Image source={{uri: item.url}} style={[styles.imageCircleNormal]}/>
                                        </TouchableOpacity>
                                    )
                                }}/> */}
                            <StatisticalTrend/>
                        </View>

                        {/*<Text style={[styles.categoryInImageTopRight]}>Category</Text>*/}
                    </TouchableOpacity>

                }
            />
        );
    }
}

export default (Activity);
