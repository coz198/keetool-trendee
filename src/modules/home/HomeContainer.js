
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
import IconDefault from '../../commons/IconDefault'
import styles from "../../styles/styles";
import SearchButton from "../../commons/SearchButton"
import AddButton from "../../commons/AddButton"
import CarouselContainer from "./CarouselContainer"
import Modal from 'react-native-modalbox';



class HomeContainer extends Component {
    constructor() {
        super();
        this.state = {
            modalIdea: false,
            modalIDetailTrend: false,
            data: [
                {
                    "index" : 0,
                    "url": "https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?auto=format&fit=crop&w=334&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D",
                    "title": "Electric VR suit shocks gamers",
                    "description": "Technology",
                    "created_at": "24h ago"
                },
                {
                    "index" : 1,
                    "url": "https://images.unsplash.com/photo-1507537362848-9c7e70b7b5c1?auto=format&fit=crop&w=750&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D",
                    "title": "Smart gadgets for safety conscious bikers",
                    "description": "Technology",
                    "created_at": "24h ago"
                },
                {
                    "index" : 2,
                    "url": "https://images.unsplash.com/photo-1501159873713-dc65286617cc?auto=format&fit=crop&w=750&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D",
                    "title": "A new way to study the night sky",
                    "description": "Technology",
                    "created_at": "24h ago"
                },
                {
                    "index" : 3,
                    "url": "https://images.unsplash.com/photo-1485436442739-c12c6e3673af?auto=format&fit=crop&w=553&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D",
                    "title": "Zuckerberg's resolution: 'Fix' Facebook",
                    "description": "Technology",
                    "created_at": "24h ago"
                },
                {
                    "index" : 4,
                    "url": "https://images.unsplash.com/photo-1485893226355-9a1c32a0c81e?auto=format&fit=crop&w=500&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D",
                    "title": "FCC chairman cancels attendance at CES",
                    "description": "Technology",
                    "created_at": "24h ago"
                },
                {
                    "index" : 5,
                    "url": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=750&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D",
                    "title": "Nintendo Switch boasts speedy US sales",
                    "description": "Technology",
                    "created_at": "24h ago"
                },
            ]
        }
    }

    setModalIdea(visible) {
        this.setState({modalIdea: visible});
    }

    // setModalDetailTrend(visible) {
    //     this.setState({modalIDetailTrend: visible});
    // }

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
                            style={styles.imageCircleNormal}
                            source={{uri: 'https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?auto=format&fit=crop&w=334&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D'}}/>
                    </TouchableOpacity>
                </View>

                <View style={{paddingTop: 20}}>
                    <CarouselContainer
                        navigate={navigate}
                        data={this.state.data}/>
                </View>
                <SearchButton function={() => navigate('SearchContainer')}/>
                <AddButton function={() => navigate('IdeaContainer')}/>


                {/*<Modal swipeToClose={true}*/}
                       {/*isOpen={this.state.modalIdea}*/}
                       {/*onClosed={() => this.setModalIdea(false)}*/}
                       {/*style={[styles.wrapperModal, {position: 'absolute'}]}*/}
                       {/*ref={"modal"}*/}
                {/*>*/}
                    {/*<View style={[styles.wrapperModalFullSize]}>*/}

                    {/*</View>*/}
                {/*</Modal>*/}


                {/*<Modal swipeToClose={true}*/}
                       {/*isOpen={this.state.modalIDetailTrend}*/}
                       {/*onClosed={() => this.setModalDetailTrend(false)}*/}
                       {/*style={[styles.wrapperModal, {position: 'absolute'}]}*/}
                       {/*ref={"modal"}*/}
                {/*>*/}
                    {/*<View style={[styles.wrapperModalFullSize]}>*/}
                    {/*</View>*/}
                {/*</Modal>*/}
            </Container>



        );
    }
}

export default (HomeContainer);
