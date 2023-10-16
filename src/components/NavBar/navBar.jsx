import styled from 'styled-components';
import YogaLogo from '../../assets/yoga.svg';
import SwimLogo from '../../assets/swimming.svg';
import BikeLogo from '../../assets/bike.svg';
import GymLogo from '../../assets/gym.svg';
import './style.css';

const NavBarContainer = styled.section`
  max-width: 117px;
  width: 100%;
  background-color: black;
  height: 700px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 7rem;
`;

const NavBarIcons = styled.img`
  width: 64px;
  opacity: 0.8;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
`;
const NavBarCopyright = styled.small`
  transform: rotate(270deg);
  color: white;
`;
function NavBar() {
  return (
    <NavBarContainer>
      <article className="navBar_logo">
        <NavBarIcons
          className="navBar_logo_img"
          src={YogaLogo}
          alt="Yoga Logo"
        />
        <NavBarIcons
          className="navBar_logo_img"
          src={SwimLogo}
          alt="Swimming Logo"
        />
        <NavBarIcons
          className="navBar_logo_img"
          src={BikeLogo}
          alt="Bike Logo"
        />
        <NavBarIcons className="navBar_logo_img" src={GymLogo} alt="Gym Logo" />
      </article>

      <NavBarCopyright>Copiryght, SportSee 2020</NavBarCopyright>
    </NavBarContainer>
  );
}

export default NavBar;
