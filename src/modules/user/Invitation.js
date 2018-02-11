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
import Gradient from '../../commons/Gradient'

class Invitation extends Component {
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
                        style={[styles.marginLeftRight, styles.imageItemSearch, styles.shadow, {marginBottom: 20}]}
                    >

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
        );
    }
}

export default (Invitation);
