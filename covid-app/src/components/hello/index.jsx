import { Container } from "./StyleHello";


function Hello() {
  return (
    <Container>
      <section className='hello'>
        <div className='hello__left'>
          <h2 className='hello__title'>Covid APP</h2>
          <h3 className='hello__tagline'>
            Monitoring Perkembangan Covid
          </h3>
          <p className='hello__description'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam
            cum accusamus quisquam earum velit ea nobis maiores exercitationem
            nam temporibus.
          </p>
          <button className='hello__button'>Vaccine</button>
        </div>
        <div className="hello__right">
          <img
            className='hello__image'
            src="https://miro.medium.com/v2/resize:fit:828/format:webp/0*4vSXfacg2gYP6rre.png"
            alt="placeholder"
          />
        </div>
      </section>
    </Container>
  );
}

export default Hello;