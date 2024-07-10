import CardRag from "./CardRag";
import { ContainerRegions } from "./StyleRegions";

const Regions = (props) => {
  const { dabals, title = '', subtitle = '' } = props;

  if (!dabals || dabals.length === 0) {
    return (
      <ContainerRegions>
        <h2 className='dabals__title'></h2>
        <p className='dabals__subtitle'>No data available</p>
      </ContainerRegions>
    );
  }

  return (
    <ContainerRegions>
      <h2 className="dabals__title">{title}</h2>
      <p className='dabals__subtitle'>
        {subtitle}
      </p>
      <div className='cards'>
        {dabals.map((dabal, key) => (
          <CardRag key={key} dabals={dabal} />
        ))}
      </div>
    </ContainerRegions>
  );
};

export default Regions;