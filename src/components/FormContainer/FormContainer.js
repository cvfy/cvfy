import React from "react";
import "./formContainer.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: ""
    };
  }

  onNameChange(event) {
    this.setState({ name: event.target.value });
  }

  onEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  onMessageChange(event) {
    this.setState({ message: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
      <div className="FormContainer">
        <h1>Contact Us</h1>
        <p>
          Got a question? We'd love to hear from you! Send us a message and
          we'll respond as soon as possible.
        </p>
        <form
          // id="contact-form"
          onSubmit={this.handleSubmit.bind(this)}
          // method="POST"
        >
          <div className="form-group">
            <label htmlFor="name">Name*</label>
            <input
              type="text"
              className="form-control"
              value={this.state.name}
              onChange={this.onNameChange.bind(this)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address*</label>
            <input
              type="email"
              className="form-control"
              value={this.state.email}
              onChange={this.onEmailChange.bind(this)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message*</label>
            <textarea
              className="form-control"
              rows="10"
              value={this.state.message}
              onChange={this.onMessageChange.bind(this)}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    );
  }
}

export default App;
