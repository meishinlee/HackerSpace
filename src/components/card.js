import React from "react";
import './Card.css';

export default class Card extends React.Component {
  render() {
    return (
        <div class="project_item">
            <h3 class="project_text"> {this.props.projectName} </h3>
            <h5 class="project_text"> {this.props.ownerName} <p class="project_text"> {this.props.pronouns} </p></h5>
            <p class="project_text"> Description: {this.props.projectDescription.slice(0, 100)}</p>
            <details>
            <summary>
            <span class="project_text_readmore" id="open">read more</span>
            <span class="project_text" id="close">close</span>
            </summary>
            <p class="project_text">{this.props.projectDescription}</p>
            <p class="project_text"> LGBTQ: {this.props.lgbtq}</p>
            <p class="project_text"> Disabled: {this.props.disabled}</p>
            <p class="project_text"> Veteran: {this.props.veteran}</p>
            </details><br/>
            <a class="project_text_email" href={`mailto:${this.props.email}`}> Click here to send us an email!!!</a>
        </div>
    );
  }
}
