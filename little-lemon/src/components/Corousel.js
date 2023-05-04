import React from 'react';

const Corousel = () => {
  return (
    <section
      id="carouselExampleCaptions"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <aside className="carousel-inner">
        <article className="carousel-item active">
          <img
            src="https://thumbs2.imgbox.com/75/4e/tax9MvIQ_t.jpg"
            className="d-block w-100"
            alt="little Lemon"
          />
          <div className="carousel-caption d-none d-md-block">
            <h5 className="display-title color-primary">Little Lemon</h5>
            <p className="lead-text text-dark">
              We offer the best deals for any occassion.
            </p>
          </div>
        </article>
        <article className="carousel-item">
          <img
            src="https://thumbs2.imgbox.com/eb/86/nABGGzMP_t.png"
            className="d-block w-100"
            alt="Little Lemon"
          />
          <div className="carousel-caption d-none d-md-block">
            <h5 className="display-title">Little Lemon</h5>
            <p>Our service is second to none.</p>
          </div>
        </article>
        <article className="carousel-item">
          <img
            src="https://thumbs2.imgbox.com/c5/2c/Sif1sLAS_t.png"
            className="d-block w-100"
            alt="Little Lemon"
          />
          <div className="carousel-caption d-none d-md-block">
            <h5 className="display-title">Little Lemon</h5>
            <p>Come and have taste of our unbeatable recipes</p>
          </div>
        </article>
      </aside>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </section>
  );
};

export default Corousel;
