import styled from 'styled-components';
import { Link } from 'react-router-dom';

const UsersWrapperButton = styled(Link)`
width: 200px;
    height: 60px;
    font-size: 25px;
    font-weight: 500;
    color: white;
    background-color: #E60000;
    border: 2px solid #E60000;
    border-radius: 5px;
    align-items: center;
    display: flex;
    justify-content: center;
    text-decoration: none;
    &:hover{
        background-color: white;
        color: #E60000;
        border: 2px solid #E60000;
        cursor: pointer;
    }
}
`;

const UserButton = ({ id, firstName }) => {
  const state = {
    userId: id,
  };

  return (
    <UsersWrapperButton to={`/user/${state?.userId}`} state={state} id={id}>
      {firstName}
    </UsersWrapperButton>
  );
};

export default UserButton;
