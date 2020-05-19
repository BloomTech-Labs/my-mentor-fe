import React, { Component, PropTypes } from 'react'
import Nav from '../../home-components/nav-drawer';

import { connect } from 'react-redux'
import { loginUser, fetchQuote, fetchSecretQuote } from './redux/actions/index';
import { Route, Switch } from "react-router-dom";
import MentorList from '../../mentorProfile/src/mentorContacts/mentors';

import MenteeLogin from "../../components/Login/MenteeLogin";
import MentorLogin from "../../components/Login/MentorLogin";

class Dashboard extends Component {
    render() {
      const { dispatch, quote, isAuthenticated, errorMessage, isSecretQuote } = this.props
      return (
        <div>
          <Navbar
            isAuthenticated={isAuthenticated}
            errorMessage={errorMessage}
            dispatch={dispatch}
          />
          <div className='container'>
            <MentorList
              onQuoteClick={() => dispatch(fetchQuote())}
              onSecretQuoteClick={() => dispatch(fetchSecretQuote())}
              isAuthenticated={isAuthenticated}
              quote={quote}
              isSecretQuote={isSecretQuote}
            />
          </div>
        </div>
      )
    }
  }
  
  Dashboard.propTypes = {
    dispatch: PropTypes.func.isRequired,
    quote: PropTypes.string,
    isAuthenticated: PropTypes.bool.isRequired,
    errorMessage: PropTypes.string,
    isSecretQuote: PropTypes.bool.isRequired
  }
  
  // These props come from the application's
  // state when it is started
  function mapStateToProps(state) {
  
    const { quotes, auth } = state
    const { quote, authenticated } = quotes
    const { isAuthenticated, errorMessage } = auth
  
    return {
      quote,
      isSecretQuote: authenticated,
      isAuthenticated,
      errorMessage
    }
  }
  
  export default connect(mapStateToProps)(Dashboard)
