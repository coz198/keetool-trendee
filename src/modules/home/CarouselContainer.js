
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
import styles from "../../styles/styles";
import * as size from "../../styles/sizes";
import Carousel, { ParallaxImage } from 'react-native-snap-carousel';


class CarouselContainer extends Component {
    render () {
        return (
            <Carousel
                loop={true}
                layout={'stack'}
                layoutCardOffset={10}
                data={this.props.data}
                renderItem={({item, i}) => {
                    return (
                        <TouchableOpacity
                            activeOpacity={1}
                            onPress={() => this.props.navigate('DetailTrendContainer')}
                            style={styles.wrapperCenter} key={i}>
                            <View>
                                <View style={[styles.imageFeature]}>
                                    <Image style={[styles.imageFeature]} source={{uri: item.url}}/>
                                </View>
                                <View style={styles.wrapperTextInFeatureImage}>
                                    <View style={styles.wrapperRowCenterVertical}>
                                        <View style={[styles.wrapperIconBeforeText, {marginRight: 5}]}>
                                            <IconDefault
                                                name={'Ionicons|md-arrow-up'}
                                                style={{padding :0}}
                                                size={10}
                                                color={'#FFF'}
                                            />
                                        </View>
                                        <Text style={styles.textSubDescriptionLight}>Top 5 on Trending</Text>
                                    </View>
                                    <Text style={[styles.textTitleLight, styles.paddingLine]}>Title</Text>
                                    <Text style={styles.textDescriptionLight}>Description</Text>
                                </View>
                                <Text style={[styles.categoryInImage]}>Category</Text>
                            </View>


                            <View style={[styles.wrapperRowCenterVertical, styles.wrapperTextAuthorFeatureImage]}>
                                <Image
                                    resizeMode={'cover'}
                                    source={{uri: item.url}}
                                    style={[styles.imageCircleTiny, {marginRight: 5}]}/>
                                <Text style={styles.textDescriptionGray}>Author</Text>
                            </View>
                        </TouchableOpacity>
                    );
                }}
                sliderWidth={size.deviceWidth}
                inactiveSlideShift={10}
                itemWidth={size.deviceWidth}
                hasParallaxImages={true}
                slideStyle={{ width: size.deviceWidth }}
                autoplay={true}
                inactiveSlideScale={0.9}
                inactiveSlideOpacity={0.1}
                autoplayDelay={1000}
            />

        );
    }
}

export default (CarouselContainer);
