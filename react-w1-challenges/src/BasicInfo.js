import React, { Component } from 'react';

class BasicInfo extends Component {
  render() {
    return (
      <div>
        <ul>
      {this.props.person.map(info => (
        <li>Name: {info.Name} Phone: {info.Phone} DOB: {info.DOB}</li>
      ))}
    </ul>
  </div>
    )
  }
  }


export default BasicInfo;