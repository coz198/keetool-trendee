
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
import Gradient from '../../commons/Gradient'
import StatisticalTrend from '../../commons/StatisticalTrend'
import styles from "../../styles/styles";
import * as size from "../../styles/sizes";
import Carousel, { ParallaxImage } from 'react-native-snap-carousel';

class CarouselContainer extends Component {
    render () {
        return (
            <Carousel
                loop={true}
                layout={'default'}
                sliderWidth={size.deviceWidth}
                itemWidth={size.deviceWidth}
                hasParallaxImages={true}
                slideStyle={{ width: size.deviceWidth }}
                autoplay={true}
                inactiveSlideScale={0.9}
                inactiveSlideOpacity={0.7}
                autoplayDelay={500}
                data={this.props.data}
                renderItem={({item, i}, parallaxProps) => {
                    return (
                        <TouchableOpacity
                            activeOpacity={1}
                            onPress={() => this.props.navigate('DetailTrendContainer')}
                            style={[styles.wrapperCenter, {paddingTop: 20}]} key={i}>
                            <View>
                                <View style={[styles.imageFeature, styles.shadow]}>
                                    <ParallaxImage
                                        source={{ uri: item.url }}
                                        containerStyle={styles.imageFeature}
                                        style={styles.imageFeature}
                                        parallaxFactor={0.4}
                                        {...parallaxProps}
                                    />
                                    {/*<Image style={styles.imageFeature} source={{uri: item.url}}/>*/}
                                    <Gradient style={styles.gradientImageFeature}/>
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
                                    <View style={styles.paddingLeftRight}>

                                    </View>
                                    <Text style={[styles.textTitleLight, styles.paddingLine]} numberOfLines={2}>TITLE</Text>
                                    <Text style={styles.textDescriptionLight} numberOfLines={4}>Description Description Description</Text>
                                </View>
                                <Text style={[styles.categoryInImage]}>Category</Text>
                            </View>

                            <View style={[styles.wrapperRowSpaceBetween, styles.wrapperTextAuthorFeatureImage]}>
                                <View style={styles.wrapperRowCenterVertical}>
                                    <Image
                                        resizeMode={'cover'}
                                        source={{uri: item.url}}
                                        style={[styles.imageCircleTiny, {marginRight: 5}]}/>
                                    <Text style={styles.textDescriptionGray}>Author</Text>
                                </View>
                                <StatisticalTrend/>
                            </View>
                        </TouchableOpacity>
                    );
                }}

            />

        );
    }
}

export default (CarouselContainer);
