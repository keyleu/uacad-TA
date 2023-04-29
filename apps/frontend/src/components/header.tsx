import styled from 'styled-components';
import logo from '../images/logoAcademy.png';

const Header1 = styled.h1`
  background-color: #262d34;
  border-radius: 0px;
  padding-top: 31px;
  padding-bottom: 31px;
  padding-left: 30px;
`;

function Header() {
  return (
    <Header1>
      <img src={logo} alt="Logo" width="155px" height="35px"></img>
    </Header1>
  );
}

export default Header;
