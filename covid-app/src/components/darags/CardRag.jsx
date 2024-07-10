import { Card } from "./StyleRegions";


const CardRag = (props) => {
  const { dabals } = props;
  const { numbers } = dabals;

  return (
    <Card>
      <div className='contain'>
        <h3 className='card__title'>{dabals.name}</h3>

        <div className='card__wrapper'>
          <div className='status'>
            <p className='status__title'>Confirmed</p>
            <h1 className='card__value total_confirmed'>{numbers.confirmed.toLocaleString('en-US', { useGrouping: true }).replace(/,/g, '.')}</h1>
          </div>

          <img src="./icons/confirmed.png" className='card__icon' />
        </div>

        <div className='card__wrapper'>
          <div className='status'>
            <p className='status__title'>Death</p>
            <h1 className='card__value total_death' > {numbers.death.toLocaleString('en-US', { useGrouping: true }).replace(/,/g, '.')}</h1>
          </div>
          <img src="./icons/death.png" className='card__icon' />
        </div>

        <div className='card__wrapper'>
          <div className='status'>
            <p className='status__title'>Recovered</p>
            <h1 className='card__value total_recovered'> {numbers.recovered.toLocaleString('en-US', { useGrouping: true }).replace(/,/g, '.')}</h1>
          </div>
          <img src='./icons/recovered.png' className='card__icon' />
        </div>

      </div>
    </Card>
  );
};

export default CardRag;


// <h1 className={`${dabal.status === "Positif" ? styles.total_positif : dabal.status === "Sembuh" ? styles.total_sembuh : dabal.status === "Meninggal" ? styles.total_meninggal : styles.total_positif}`'>{dabal.total.toLocaleString('en-US', { useGrouping: true }).replace(/,/g, '.')}</h1>

// {dabals[0].total.toLocaleString('en-US', { useGrouping: true }).replace(/,/g, '.')}