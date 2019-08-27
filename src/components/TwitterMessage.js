import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      messageText: ""
    };
  }

  handleChange = (event) => {
    this.setState({messageText: event.target.value});
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" 
          name="message" 
          id="message" 
          onChange={this.handleChange} 
          value={this.state.messageText} // Why do you need this? App looks like it works...
          />
        <p>Characters Remaining: {
          this.props.maxChars-this.state.messageText.length
          }</p>
      </div>
    );
  }
}

export default TwitterMessage;
