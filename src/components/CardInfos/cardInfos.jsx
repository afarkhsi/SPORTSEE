/**En tant qu’utilisateur, je veux pouvoir voir mes informations clés sous forme de card. Chaque card comprend un icône, des protéines, etc. */
import styled from 'styled-components';

const CardInfoContainer = styled.article``;

const CardInfoTitle = styled.h1``;

const CardInfoSubtitle = styled.h2``;

const CardInfo = () => {
  return (
    <CardInfoContainer>
      <CardInfoTitle>Bonjour Thomas Dupuis</CardInfoTitle>
      <CardInfoSubtitle>
        Félicitation ! Vous avez explosé vos objectifs hier 👏
      </CardInfoSubtitle>
    </CardInfoContainer>
  );
};

export default CardInfo;
