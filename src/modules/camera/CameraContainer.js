import React, {Component} from 'react';
import {Container} from 'native-base';
import styles from "../../styles/styles";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class CameraContainer extends Component {
    constructor() {
        super();
        this.state = {
            modalIdea: false,
            modalIDetailTrend: false,
        }
    }
    componentWillMount() {

    }

    render () {
        const {navigate} = this.props.navigation;
        return (
            <Container style={styles.wrapperContainer}>

            </Container>



        );
    }
}
function mapStateToProps(state) {
    return {

    }
}

function mapDispatchToProps(dispatch) {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CameraContainer)
