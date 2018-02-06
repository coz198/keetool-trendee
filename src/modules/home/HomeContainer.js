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
import {Container} from 'native-base';
import IconDefault from '../../commons/IconDefault';
import styles from "../../styles/styles";
import SearchButton from "../../commons/SearchButton";
import AddButton from "../../commons/AddButton";
import CarouselContainer from "./CarouselContainer";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as homeAction from './homeAction';

class HomeContainer extends Component {
    constructor() {
        super();
        this.state = {
            modalIdea: false,
            modalIDetailTrend: false,
        }
    }
    componentWillMount() {
        this.props.homeAction.getData();
    }

    render () {
        const {navigate} = this.props.navigation;
        return (
            <Container style={styles.wrapperContainer}>
                <View style={[styles.wrapperHeader, styles.paddingLeftRight]}>
                    <TouchableOpacity>
                        <IconDefault
                            name={'MaterialIcons|menu'}
                            style={{paddingLeft :0}}
                        />
                    </TouchableOpacity>
                    <Text style={styles.textLogo}>TRENDEE</Text>

                    <TouchableOpacity
                        activeOpacity={0.9}
                        onPress={() => navigate('UserContainer')}
                    >
                        <Image
                            resizeMode={'cover'}
                            style={[styles.imageCircleNormal, styles.shadow]}
                            source={{uri: 'https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?auto=format&fit=crop&w=334&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D'}}/>
                        <View style={styles.badge}/>
                    </TouchableOpacity>
                </View>

                <View style={{paddingTop: 20}}>
                    <CarouselContainer
                        navigate={navigate}
                        data={this.props.data}/>
                </View>
                <SearchButton function={() => navigate('SearchContainer')}/>
                <AddButton function={() => navigate('IdeaContainer')}/>
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
        homeAction: bindActionCreators(homeAction, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer)
