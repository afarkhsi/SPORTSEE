/**En tant qu’utilisateur, je veux pouvoir voir mes informations clés sous forme de card. Chaque card comprend un icône, des protéines, etc. */
import styled from 'styled-components';

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

// Function generating Component User informations
const CardInfo = ({ data }) => {
  console.log('test:', data);
  return (
    <CardInfoContainer>
      <CardInfoTitle>
        Bonjour <CardFirstname>{data}</CardFirstname>
      </CardInfoTitle>
      <CardInfoSubtitle>
        Félicitation ! Vous avez explosé vos objectifs hier 👏
      </CardInfoSubtitle>
    </CardInfoContainer>
  );
};

export default CardInfo;
