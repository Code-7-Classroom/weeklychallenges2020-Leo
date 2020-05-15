import React, { Component } from 'react';
import './App.css';
import BasicInfo from './BasicInfo'

class App extends Component {
  constructor() {
    super();

    this.state = {
        person: [
          {
          Name: 'Leeangelo Riley',
          Phone: '234-248-9877',
          DOB: '03/28/2001'
        },
        {
          Name: 'Joshua McNeill',
          Phone:'934-245-3934',
          DOB: '11/08/93'
        },
        {
          Name: 'David Garica',
          Phone: '823-992-0494',
          DOB: '05/28/98'
        },
        {
          Name: 'Kelvin Melendez',
          Phone: '324-123-3333',
          DOB: '02/28/2000'
        }
      ]
    }
}
  render() {
    return <BasicInfo person={this.state.person} />;
  }
}


export default App;