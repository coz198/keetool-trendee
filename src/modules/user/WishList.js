import React, {Component} from 'react';
import {
    Image,
    Text,
    TouchableOpacity,
    View,
    Platform,
    FlatList
} from 'react-native';
import IconDefault from '../../commons/IconDefault'
import {Container, Content, Item, Input, Left, Right} from 'native-base';
import styles from "../../styles/styles";

class WishList extends Component {
    render () {
        const {data} = this.props;
        return (
            <FlatList
                ref="listRef"
                showsVerticalScrollIndicator={false}
                data={data}
                ListFooterComponent={
                    <View style={{height: 300}}/>
                }
                renderItem={({item}) =>
                    <TouchableOpacity
                        style={[styles.marginLeftRight, styles.imageItemSearch, styles.shadow, {marginBottom: 20}]}
                    >
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
        );
    }
}

export default (WishList);
