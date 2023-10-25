import NavBar from '../../components/NavBar/navBar';
import styled from 'styled-components';
import { Link, generatePath, useLocation, useNavigate } from 'react-router-dom';
import UserButton from '../../components/UserButton/UserButton';
import useFetch from '../../utils/hooks/useFetch';
import { useEffect, useState } from 'react';
const apiUrl = 'http://localhost:3000';
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

// const UsersWrapperButton = styled(Link)`
// width: 200px;
//     height: 60px;
//     font-size: 25px;
//     font-weight: 500;
//     color: white;
//     background-color: #E60000;
//     border: 2px solid #E60000;
//     border-radius: 5px;
//     align-items: center;
//     display: flex;
//     justify-content: center;
//     text-decoration: none;
//     &:hover{
//         background-color: white;
//         color: #E60000;
//         border: 2px solid #E60000;
//         cursor: pointer;
//     }
// }
// `;

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
