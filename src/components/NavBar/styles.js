import styled from 'styled-components/macro';
import ReactModal from 'react-modal';

export const MenuBar = styled.div`
  line-height: 30px;
  height: 30px;
  &:hover {
    color: white;
    cursor: pointer;
  }

  @media only screen and (max-width: 540px) {
    line-height: 2.75;
    overflow: hidden;
  }

  @media only screen and (min-width: 541px) {
    overflow: hidden;
  }

  span {
    font-family: Teko;
    font-size: 18px;
    line-height: 1;
    font-weight: 600;
    font-style: normal;
    font-stretch: normal;
    letter-spacing: 3px;
    color: #0e0e0e;
    text-decoration: none;
  }
`;

export const MenuButton = styled.span``;

export const CloseButtonIcon = styled.div`
  background-image: url('/images/cancel.svg');
  width: 25px;
  height: 25px;
  background-size: cover;
  position: absolute;
  top: 20px;
  right: 20px;
  &:hover {
    cursor: pointer;
  }
`;
export const StyledModal = styled(ReactModal)`
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  border: 1px solid rgb(204, 204, 204);
  background: #0e0e0e;
  overflow: auto;
  border-radius: 4px;
  outline: none;
  padding: 20px;
  z-index: 9999;
  @media (min-width: 541px) {
    top: 40px;
    left: 40px;
    right: 40px;
    bottom: 40px;
  }
`;

export const UnstyledList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  text-align: right;

  li a {
    text-decoration: none;
    width: 184px;
    height: 110px;
    font-family: Teko;
    font-size: 110px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    font-size: 50px;
    font-weight: 800;
    line-height: 1;
    letter-spacing: normal;
    color: #ffffff;
    text-transform: uppercase;
    background-color: transparent;

    &:before {
      content: '';
      width: 10px;
      height: 10px;
      background-image: url('/images/arrow-white.svg');
      background-size: cover;
      display: none;
      width: 25px;
      height: 25px;
      margin-right: 10px;
    }

    &:hover:before {
      display: inline-block;
    }
  }
  a:hover {
    color: yellow;
  }

  li {
    border-bottom: 1px solid #272727;
  }
`;
