import React from 'react';
import ReactModal from 'react-modal';

import { MenuBar } from './styles';

class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
    };
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }
  handleOpenModal() {
    this.setState({ showModal: true });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }
  render() {
    return (
      <MenuBar>
        <span onClick={this.handleOpenModal}>MENU</span>
        <ReactModal
          isOpen={this.state.showModal}
          contentLabel="Minimal Modal Example"
        >
          <button onClick={this.handleCloseModal}>Close Modal</button>
        </ReactModal>
      </MenuBar>
    );
  }
}
export default Navbar;
