import styled from "styled-components";

export const ContainerRegions = styled.div`
  margin: 5rem auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

.dabals__title {
  font-size: 61px;
  color: #06D6A0;
}

.dabals__subtitle {
  margin-bottom: 61px;
}

.cards {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  width: 100%;
  padding: 0 1rem;
}

/* Card styles */

/* Medium Screen */
@media (min-width: 768px) {
  .cards {
    grid-template-columns: 1fr 1fr;
  }
}

/* Large Screen */
@media (min-width: 992px) {
  .cards {
    grid-template-columns: 1fr 1fr 1fr;
  }
}`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  margin: 10px;
  background-origin: padding-box;
  box-shadow: 0px 4px 4px 0px #00000040;


.contain {
  width: 100%;
  max-width: 282px;
  height: 319px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 29px auto;
}

.card__title {
  font-size: 30px;
  text-align: center;
  margin-bottom: 44px;
}

.card__wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 282px;
  margin-bottom: 15px;
}

.status {
  display: flex;
  flex-direction: column;
  align-items: start;
}

.status__title {
  font-size: 16px;
}

.card__value {
  font-size: 25px;
}

.card__icon {
  width: 40px;
  height: 40px;
}

.total_confirmed {
  color: #06D6A0;
}

.total_recovered {
  color: #118AB2;
}

.total_death {
  color: #EF476F;
}
`