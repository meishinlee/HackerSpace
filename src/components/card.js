import React from "react";
import './Card.css';

export default class Card extends React.Component {
  render() {
    return (
        <div class="project_item">
            <h2 class="project_text"> {this.props.projectName} </h2>
            <h6 class="project_text"> {this.props.ownerName} </h6>
            <p class="project_text"> Description: {this.props.projectDescription.slice(0, 100)}</p>
            <details>
            <summary>
            <span class="project_text_readmore" id="open">read more</span>
            <span class="project_text" id="close">close</span>
            </summary>
            <p class="project_text">{this.props.projectDescription}</p>
            </details><br/>
            <a class="project_text_email" href={`mailto:${this.props.email}`}> Click here to send us an email!!!</a>
        </div>
    );
  }
}
