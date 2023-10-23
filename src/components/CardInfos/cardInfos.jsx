/**En tant qu’utilisateur, je veux pouvoir voir mes informations clés sous forme de card. Chaque card comprend un icône, des protéines, etc. */
import styled from 'styled-components';
// import { USER_MAIN_DATA } from '../../mockData';

const CardInfoContainer = styled.article``;

const CardInfoTitle = styled.h1`
  margin-bottom: 0px;
  font-size: 48px;
`;

const CardInfoSubtitle = styled.h2`
  font-size: 18px;
  font-weight: 400;
`;

const CardFirstname = styled.span`
  color: #e60000;
`;

const CardInfo = (props) => {
  const data = props.data;
  const dataUserInfo = data?.data?.userInfos;
  const firstName = dataUserInfo?.firstName;
  // const lastName = USER_MAIN_DATA[0].userInfos.lastName;
  // console.log(dataTest);
  return (
    <CardInfoContainer>
      <CardInfoTitle>
        Bonjour <CardFirstname>{firstName}</CardFirstname>
      </CardInfoTitle>
      <CardInfoSubtitle>
        Félicitation ! Vous avez explosé vos objectifs hier 👏
      </CardInfoSubtitle>
    </CardInfoContainer>
  );
};

export default CardInfo;
