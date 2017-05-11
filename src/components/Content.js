import React,{Component, PropTypes} from 'react';
import '../styles/Content.css';
export default class Content extends Component{
  static propTypes = {
    profile: PropTypes.object.isRequired
  };

  render(){
    const {profile} = this.props;
    return (
      <div className="flex content-container">
        <div className="image">
          <img src={profile.avatar_url} width={200} height={200}/>
          <p>{profile.name}</p>
        </div>
        <div className="info">
          <ul>
            <li>email: {profile.email}</li>
            <li>created: {profile.created_at}</li>
            <li>location: {profile.location}</li>
            <li>blog: {profile.blog}</li>
            <li>followers: {profile.followers}</li>
            <li>following: {profile.following}</li>
            <li>id: {profile.id}</li>
            <li>repos: {profile.public_repos}</li>
          </ul>
        </div>
      </div>
    );
  }
}