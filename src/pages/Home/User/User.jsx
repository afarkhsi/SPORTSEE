import { useParams } from 'react-router-dom';
import Adapter from '../../../utils/adapter/adapter';
import useFetch, { apiUrl } from '../../../utils/hooks/useFetch';
import CardInfo from '../../../components/CardInfos/CardInfos';
import { ErrorContainer, LoaderContainer } from '../ScoreChart/ScoreChart';
import { Loader } from '../../../utils/styles/Atoms';

export const useUser = () => {
  const { userId } = useParams();

  const url = `${apiUrl}/user/${userId}`;
  // const mockedUrl = `../../../mockDataUser.json`;

  const { data, error, isLoading } = useFetch(url);
  const dataFormated = new Adapter(data?.data).userInfo();

  return { isLoading, isError: error, dataFormated };
};

const User = () => {
  const { isLoading, dataFormated, isError } = useUser();
  if (isLoading) {
    return (
      <LoaderContainer>
        <Loader />
      </LoaderContainer>
    );
  }

  if (isError) {
    return <ErrorContainer> Error! Cannot GET User</ErrorContainer>;
  }

  return <CardInfo data={dataFormated} />;
};
export default User;
