import {connect} from "react-redux";
import Navbar from "./Navbar";
import { compose } from 'redux';


const mapStateToProps = state => {
    return {
        friends: state.sideBar.friends
    }
};


export default compose(
    connect(mapStateToProps)
)(Navbar);