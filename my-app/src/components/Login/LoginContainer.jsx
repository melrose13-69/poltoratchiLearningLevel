import { connect } from 'react-redux';
import { compose } from 'redux';
import { login } from '../../redux/auth-reducer';
import Login from './Login';


const mapStateToProps = state => {
    return {
        isAuth: state.auth.isAuth,
        captcha: state.auth.captcha
    };
};

export default compose(
    connect( mapStateToProps, { login } )
)( Login );