import React from 'react';
import DeptLogo from '../../Generic/logo/DeptLogo';
import { MenuBar, StyledModal, UnstyledList, CloseButtonIcon, MenuButton } from './styles';

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
        <MenuButton onClick={this.handleOpenModal}>MENU</MenuButton>

        <StyledModal
          isOpen={this.state.showModal}
          contentLabel="Minimal Modal Example"
          color="black"
        >
          <DeptLogo />

          <CloseButtonIcon onClick={this.handleCloseModal} />

          <UnstyledList>
            <li>
              <a href="https://www.deptagency.com/nl-nl/">Home</a>
            </li>
            <li>
              <a href="https://www.deptagency.com/nl-nl/cases/">Work</a>
            </li>
            <li>
              <a href="https://www.deptagency.com/about/">About</a>
            </li>
            <li>
              <a href="https://www.deptagency.com/services/">Services</a>
            </li>
            <li>
              <a href="https://www.deptagency.com/partners/">Partners</a>
            </li>
            <li>
              <a href="https://www.deptagency.com/stories/">Stories</a>
            </li>
            <li>
              <a href="https://www.deptagency.com/careers/">Careers</a>
            </li>
            <li>
              <a href="https://www.deptagency.com/contact/">Contact</a>
            </li>
          </UnstyledList>
        </StyledModal>
      </MenuBar>
    );
  }
}
export default Navbar;
