import NavBar from '../../components/NavBar/navBar';
import styled from 'styled-components';
import UserButton from '../../components/UserButton/UserButton';
const UsersContainer = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 92%;
`;

const UsersWrapper = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const UsersSelect = () => {
  return (
    <UsersContainer className="users_container">
      <NavBar />
      <UsersWrapper>
        <UserButton id="12" firstName="Karl" />
        <UserButton id="18" firstName="Cecilia" />
      </UsersWrapper>
    </UsersContainer>
  );
};

export default UsersSelect;
