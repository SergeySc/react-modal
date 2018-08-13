import React, { PureComponent } from "react";
import ReactDOM from "react-dom";
import Modal from "./components/modal";

import "./index.css";

class Page extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false
    };
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    this.setState({ modalOpen: !this.state.modalOpen });
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.toggleModal}>Show modal</button>
        <Modal open={this.state.modalOpen} toggleModal={this.toggleModal} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Page />, rootElement);
