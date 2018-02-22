import React from 'react';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

const Header= (props) => {
    return (
        <div className='header'>
            <div className='container header__container'>
                <div>
                    <h1 className='header__title'>{ props.title }</h1>
                    { props.subtitle &&
                        <h2 className='header__subtitle'>{ props.subtitle }</h2>
                    }
                </div>
                <div className='header__user'>
                    <span>{ props.userName }</span>
                    <img className='header__user-avatar' src={ props.photoURL } />
                    <button className='button button--link' onClick={ props.startLogout } >Logout</button>
                </div>
            </div>
        </div>
    );
};

Header.defaultProps = {
    title: 'Indecision'
};

const mapStateToProps = (state) => ({
  userName: state.auth.displayName,
  photoURL: state.auth.photoURL
});

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);