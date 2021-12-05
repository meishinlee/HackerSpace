import React from "react";
import './Card.css';

export default class Card extends React.Component {
  render() {
    return (
        <div class="project_item">
            <h2> {this.props.projectName} </h2>
            <h6> {this.props.ownerName} </h6>
            <p> Description: {this.props.projectDescription.slice(0, 100)}</p>
            <details>
            <summary>
            <span id="open">read more</span>
            <span id="close">close</span>
            </summary>
            <p>{this.props.projectDescription}</p>
            </details><br/>
            <a href={`mailto:${this.props.email}`}> Click here to send us an email!!!</a>
        </div>
    );
  }
}
