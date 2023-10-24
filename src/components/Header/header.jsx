import { NavLink, Link } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../../assets/logo.svg';
import './style.css';

const HomeLogo = styled.img`
  background-color: none;
`;

const NavContainer = styled.nav`
  display: flex;
  // justify-content: space-between;
  align-items: center;
  padding: 0px 10px;
  height: 8%;
  min-height: 80px;
  // margin: 0 auto;
  // width: 100%;
  background-color: black;
`;

const StyledLink = styled(NavLink)`
  color: white;
  text-decoration: none;
  text-align: center;
  &:hover {
    color: red;
  }
  font-size: 24px;
  font-weight: 500;
`;

// Function generating Header in all pages
function Header() {
  return (
    <NavContainer className="header">
      <Link className="header_logo" to="/">
        <HomeLogo className="header_logo_img" src={Logo} alt="Kasa logo" />
      </Link>
      <div className="header_nav">
        {/* <StyledLink to="/" className="header_logo">
          <HomeLogo
            className="header_logo_img"
            src={Logo}
            alt="SportSee logo"
          />
        </StyledLink> */}
        <StyledLink to="/" className="header_nav_link">
          Accueil
        </StyledLink>
        <StyledLink to="/" className="header_nav_link">
          Profil
        </StyledLink>
        <StyledLink to="/" className="header_nav_link">
          Réglages
        </StyledLink>
        <StyledLink to="/" className="header_nav_link">
          Communauté
        </StyledLink>
      </div>
    </NavContainer>
  );
}

export default Header;
