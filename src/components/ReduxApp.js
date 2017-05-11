import React,{Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {getData} from '../actions/actions';

import Search from './Search';
import Content from './Content';
import '../styles/App.css';
class App extends Component{
  static propTypes = {
    isFetchData: PropTypes.bool.isRequired,
    profile: PropTypes.object.isRequired,
    fetchInfo: PropTypes.func.isRequired
  };

  render(){
    const {isFetchData, profile, fetchInfo} = this.props;
    return (
      <div className="container flex">
        <Search isFetchData={isFetchData} fetchInfo={fetchInfo}/>
        {profile? <Content profile={profile}/> : ''}
      </div>
    );
  }
}


function mapStateToProps(state){
  return {
    isFetchData: state.isFetchData,
    profile: state.profile
  }
}

function mapDispatchToProps(dispatch){
  return {
    fetchInfo: name => dispatch(getData(name))
  }
}

const ReduxApp = connect(mapStateToProps, mapDispatchToProps)(App);

export default ReduxApp;