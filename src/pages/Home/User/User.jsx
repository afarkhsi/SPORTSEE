import { useParams } from 'react-router-dom';
import Adapter from '../../../utils/adapter/adapter';
import useFetch, { apiUrl } from '../../../utils/hooks/useFetch';
import CardInfo from '../../../components/CardInfos/CardInfos';

const useUser = () => {
  const { userId } = useParams();

  const url = `${apiUrl}/user/${userId}`;
  const mockedUrl = `../../../mockDataUser.json`;

  const { data, error, isLoading } = useFetch(url);
  const dataFormated = new Adapter(data?.data).userInfo();
  //   console.log('testo:', dataFormated);
  return { isLoading, isError: error, dataFormated };
};

const User = () => {
  const { isLoading, dataFormated, isError } = useUser();
  if (isLoading) {
    return <div>Loading ...</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  return <CardInfo data={dataFormated} />;
};
export default User;
