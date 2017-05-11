import React,{Component, PropTypes} from 'react';
import '../styles/Search.css';
export default class Search extends Component{
  static propTypes = {
    isFetchData: PropTypes.bool.isRequired,
    fetchInfo: PropTypes.func.isRequired
  };

  handleClick(e){
    const node = this.refs.input;
    let value = node.value.trim();
    this.props.fetchInfo(value);
    node.value = '';
  }

  render(){
    const {isFetchData} = this.props;
    return (
      <div className="search_container">
        <input type="text" ref="input" required/>
        <div className="button">
          <button onClick={this.handleClick.bind(this)}>{isFetchData ? '查询中...' : '点击我查询'}</button>
        </div>

      </div>
    );
  }
}
