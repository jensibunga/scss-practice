import styled from 'styled-components/macro';

export const Button = styled.button`
  grid-column: 2/12;
  @media only screen and (max-width: 540px) {
    margin-top: 25px;
    width: 450px;
    height: 50px;
    border: none;
    text-decoration: none;
    font-stretch: normal;
    font-size: 15px;
    padding-top: 10px;
    padding-bottom: 10px;
    color: #ffffff;
    letter-spacing: normal;
    text-align: center;
    background-color: #0e0e0e;
    font-family: Helvetica, Arial, sans-serif;
  }
  @media only screen and (min-width: 541px) {
    /* grid-column: 10/12; */
    grid-column-start: 11;
    grid-column-end: 12;
    /* grid-row: 11/12; */
    position: absolute;
    width: 170px;
    height: 50px;
  }

  button {
    position: absolute;
    right: 100px;
    bottom: -800px;
    display: inline-block;
    border: none;
    width: 100%;
    height: 100%;
    text-decoration: none;
    font-weight: bold;
    font-stretch: normal;
    font-size: 15px;
    padding-top: 10px;
    padding-bottom: 10px;
    color: #ffffff;
    line-height: 2;
    letter-spacing: normal;
    text-align: center;
    background-color: #0e0e0e;
    font-family: Helvetica, Arial, sans-serif;
  }
`;
