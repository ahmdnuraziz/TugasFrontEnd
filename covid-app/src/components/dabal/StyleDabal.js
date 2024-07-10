import styled from 'styled-components';

export const ContainerDabal = styled.div`
    margin: 5rem auto;

    /* Small Screen */
.dabal {
    margin-bottom: 1rem;
  }
  
  .dabal__image {
    border-radius: 25px;
    max-width: 100%;
    height: auto;
    margin-bottom: 1rem;
  }

  .dabal__status {
    color: #000;
    font-size: 39px;
    margin-bottom: 5px;
  }
  
  .dabal__genre {
    color: #64748b;
  }
  
  .dabal__card {
    background-color: white;
    /* padding: 1rem; */
    width: 350px;
    height: 350px;

    border-radius: 8px;
    box-shadow: 0px 0px 4px 2px rgba(0,0,0,0.75) inset;
    display: flex;
    justify-content: center; /* Untuk konten horizontal */
    align-items: center; /* Untuk konten vertikal */
  }
  .total_positif {
    color: #118AB2;
    font-size: 61px;
  }
  .total_sembuh {
    color: #06D6A0;
    font-size: 61px;
  }
  .total_meninggal {
    color: #EF476F;
    font-size: 61px;
  }
  /* --------------------------------- */
  
/* Small Screen */


.dabals {
  text-align: center;
}

.dabals__title {
  font-size: 61px;
  color: #06D6A0;
}
.dabals__content {
  margin-bottom: 61px;

}

.dabal__container {
  display: flex;
  flex-direction: column;
    justify-content: center; /* Untuk konten horizontal */
    align-items: center;
}

/* Medium Screen */
@media (min-width: 768px) {
  .dabal__container {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
}

/* Large Screen */
@media (min-width: 992px) {
    max-width: 1200px;
}

  /* Medium Screen */
  @media (min-width: 768px) {
    .dabal {
      flex-basis: 50%;
    }
  }
  
  /* Large Screen */
  @media (min-width: 992px) {
    .dabal {
      flex-basis: 25%;
      padding: 1rem;
    }
  }

    
`;
