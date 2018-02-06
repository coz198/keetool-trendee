import React, {Component} from 'react';
import {
    Image,
    Text,
    TouchableOpacity,
    View,
    Platform,
    FlatList
} from 'react-native';
import {Container} from 'native-base';
import styles from "../../styles/styles";
import CloseButton from "../../commons/CloseButton"
import {connect} from "react-redux";
import Masonry from 'react-native-masonry';

class DetailUserBlogContainer extends Component {
    constructor() {
        super();
        this.state = {
            imageList: []
        }
    }

    componentWillMount(){
        const newArr = this.props.data.map((item) => {
            return{
                uri: item.url
            }
        })
        this.setState({imageList: newArr})
    }

    render () {
        const {navigate} = this.props.navigation;
        const {goBack} = this.props.navigation;
        const {data} = this.props;

        return (
            <Container style={styles.wrapperContainer}>
                <View style={styles.imageFullWidth}>
                    <Image
                        resizeMode={'cover'}
                        style={styles.imageFullWidth}
                        source={{uri: 'https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?auto=format&fit=crop&w=334&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D'}}
                    />
                    <View style={{position:"absolute", top:20, flex: 1, right: 20}}>
                        <CloseButton
                            goBack={goBack}
                            color={'#FFF'}
                        />
                    </View>
                    <View style={[styles.wrapperTextInFeatureImage, {bottom: 0}]}>
                        <FlatList
                            ref="listRef"
                            horizontal={true}
                            showsVerticalScrollIndicator={false}
                            data={data[0].member.slice(0,3)}
                            ListFooterComponent={
                                data[0].member.length > 3
                                    ?
                                    <TouchableOpacity style={[styles.wrapperTextAfterListFriend, {marginLeft: 10}]}>
                                        <Text style={styles.textSubDescriptionLight}> +{data[0].member.length - 3} Friends</Text>
                                    </TouchableOpacity>
                                    :
                                    <Text/>
                            }
                            renderItem={({item}) => {
                                return(
                                    <TouchableOpacity style={[styles.wrapperImageCircleTiny,{marginRight: -8}]}>
                                        <Image source={{uri: item.url}} style={[styles.imageCircleNormal]}/>
                                    </TouchableOpacity>
                                )
                            }}/>
                    </View>
                </View>
                <View style={{padding: 20}}>
                    <Text style={styles.textTitleDark}>ACTIVITY NAME HERE</Text>
                    <Text style={styles.textDescriptionGray}>Create at</Text>
                </View>
                <View style={[{flex: 1}, styles.paddingLeftRight]}>
                    <Masonry
                        imageContainerStyle={{borderRadius: 10}}
                        sorted
                        spacing={5}
                        columns={2}
                        bricks={this.state.imageList}
                    />
                </View>
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

export default connect(mapStateToProps)(DetailUserBlogContainer)
