import CardInfo from '../../../components/CardInfos/cardInfos';
import { useUserInfo } from '../../../service/useService';
import { Loader } from '../../../utils/styles/Atoms';
import { ErrorContainer, LoaderContainer } from '../ScoreChart/ScoreChart';

const UserInfo = () => {
  const { isLoading, dataFormated, isError } = useUserInfo();
  if (isLoading) {
    return (
      <LoaderContainer>
        <Loader />
      </LoaderContainer>
    );
  }

  if (isError) {
    return <ErrorContainer> Error! Cannot GET Activity</ErrorContainer>;
  }

  return <CardInfo data={dataFormated} />;
};
export default UserInfo;
