import React from 'react';
import UpperBody from './UpperBody';
import LowerBody from './LowerBody'
import '../assets/dist/Index.css'

class Index extends React.Component {
  render() {
    return (
      <div>
        <div>
        <UpperBody />
        <LowerBody />
       </div>
    </div>
    )
  }
}

export default Index;