import React from 'react';
import './Card.css';

class Card extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div class="card-1">
        <p><b><i>{this.props.title}</i></b></p>
        <p>~{this.props.date}</p>
      </div>
    );
  }
}

export default Card;

