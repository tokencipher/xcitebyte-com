import React from 'react';
import './Art.css';
import Card from '../Card/Card';

class Art extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <div className="art">
          <a href={this.props.imgsrc} target="_blank" rel="noreferrer">
            <img className={this.props.imgframe} src={this.props.imgsrc} alt={this.props.imgalt}/>
          </a>
        </div>

        <Card title={this.props.cardtitle} date={this.props.carddate} />
      </>
    ); 
  }
}

export default Art;