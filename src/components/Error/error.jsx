import styled from 'styled-components';
import ErrorIllustration from '../../assets/404.png';
import './style.css';

const ErrorWrapper = styled.main`
  margin: auto 10px;
  display: flex;
  flex-direction: column;
  background-color: white;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  height: 92%;
`;

const ErrorSubtitle = styled.h2`
  font-weight: 300;
  color: #e60000;
  text-align: center;
`;

const Illustration = styled.img`
  max-width: 597px;
  max-height: 263px;
  width: 100%;
`;

// Function generating Error when the url is undifined or false
function ErrorMessage() {
  return (
    <ErrorWrapper className="error_container">
      <Illustration src={ErrorIllustration} className="error_container_img" />
      <ErrorSubtitle className="error_container_subtitle">
        Oups! La page que vous demandez n'existe pas.
      </ErrorSubtitle>
    </ErrorWrapper>
  );
}

export default ErrorMessage;
