import React from 'react';
import DeptLogo from '../../Generic/logo/DeptLogo';
import ReactModal from 'react-modal';
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
      <div className="menu-bar">
        <span className="menu-link" onClick={this.handleOpenModal}>MENU</span>

        <ReactModal
          isOpen={this.state.showModal}
          contentLabel="Minimal Modal Example"
          color="black"
          className="Modal"
          overlayClassName="Overlay"
       >
          <DeptLogo />

          <div className="close-button-icon" onClick={this.handleCloseModal} />

          <ul className="unstyled-list">
            <li className="menu-list">
              <a  className="menu-link" href="https://www.deptagency.com/nl-nl/">Home</a>
            </li>
            <li className="menu-list">
              <a   className="menu-link" href="https://www.deptagency.com/nl-nl/cases/">Work</a>
            </li>
            <li className="menu-list">
              <a   className="menu-link" href="https://www.deptagency.com/about/">About</a>
            </li>
            <li className="menu-list">
              <a   className="menu-link" href="https://www.deptagency.com/services/">Services</a>
            </li>
            <li className="menu-list">
              <a  className="menu-link"  href="https://www.deptagency.com/partners/">Partners</a>
            </li>
            <li className="menu-list">
              <a   className="menu-link" href="https://www.deptagency.com/stories/">Stories</a>
            </li>
            <li className="menu-list">
              <a   className="menu-link" href="https://www.deptagency.com/careers/">Careers</a>
            </li>
            <li className="menu-list">
              <a   className="menu-link" href="https://www.deptagency.com/contact/">Contact</a>
            </li>
          </ul>
        </ReactModal>
      </div>
    );
  }
}
export default Navbar;
