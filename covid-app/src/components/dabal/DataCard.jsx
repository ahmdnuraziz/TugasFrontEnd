import styles from "./DataCard.module.css";
import { ContainerDabal } from "./StyleDabal";

const DataCard = (props) => {
  const { dabals, title = '', subtitle = '' } = props;

  return (
    <ContainerDabal>
      <section className='dabals'>
        <h2 className='dabals__title'>{title}</h2>
        <p className='dabals__content'>
          {subtitle}
        </p>
        <div className='dabal__container'>
          {dabals.map((dabal) => (
            <div key={dabal.status} className='dabal'>
              <div className='dabal__kolom'>
                <div className='dabal__card'>
                  <div className="">
                    <h3 className='dabal__status'>{dabal.status}</h3>
                    <h1 className={`${dabal.status === "confirmed" ?
                      'total_positif' : dabal.status === "recovered" ?
                        'total_sembuh' : dabal.status === "death" ?
                          'total_meninggal' : styles.total_positif}`}>
                      {dabal.total.toLocaleString('en-US', { useGrouping: true }).replace(/,/g, '.')}
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </ContainerDabal>
  );
};

export default DataCard;
