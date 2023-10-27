import CompletaryData from '../../../components/ComplementaryData/complementaryData';
import { ErrorContainer, LoaderContainer } from '../ScoreChart/ScoreChart';
import { Loader } from '../../../utils/styles/Atoms';
import { useConsumption } from '../../../service/useService';

const Consumption = () => {
  const { isLoading, dataFormated, isError } = useConsumption();
  if (isLoading) {
    return (
      <LoaderContainer>
        <Loader />
      </LoaderContainer>
    );
  }

  if (isError) {
    return <ErrorContainer> Error! Cannot GET Consumption</ErrorContainer>;
  }

  return <CompletaryData data={dataFormated} />;
};

export default Consumption;
