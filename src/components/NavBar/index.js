import React from 'react';

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
        <a href="#">MENU</a>
      </MenuBar>
    );
  }
}
export default Navbar;
