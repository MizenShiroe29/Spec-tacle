import React from "react";

function Home() {
  return (
    <React.Fragment>
      <section className="section__carousel">
        <div className="container carouselCarton">
          <div className="row">
            <div
              id="carouselControls"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselControls"
                  data-bs-slide-to="0"
                  class="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselControls"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselControls"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
              </div>
              <div className="carousel-inner c-item">
                <div className="carousel-item active">
                  <img
                    src="https://tinyurl.com/7c8cjs8t"
                    className="d-block w-100 c-img rounded"
                    alt="glasses"
                  />
                  <div className="carousel-caption top-0 mt-4 ">
                    <p className="mt-5 fs-3 text-uppercase">
                      Some representative placeholder content for the second
                      slide.
                    </p>
                    <h1 className="display-1 fs-1 fw-bolder text-capitalize">
                      First slide label
                    </h1>
                    <button className="btn btn-primary px-4 py-2 fs-5 mt-5">
                      Select
                    </button>
                  </div>
                </div>
                <div className="carousel-item c-item">
                  <img
                    src="https://tinyurl.com/3wmyfx7a"
                    className="d-block w-100 c-img rounded"
                    alt="glasses"
                  />
                  <div className="carousel-caption top-0 mt-4 ">
                    <p className="mt-5 fs-3 text-uppercase">
                      Some representative placeholder content for the second
                      slide.
                    </p>
                    <h1 className="display-1 fs-1 fw-bolder text-capitalize">
                      First slide label
                    </h1>
                    <button className="btn btn-primary px-4 py-2 fs-5 mt-5">
                      Select
                    </button>
                  </div>
                </div>

                <div className="carousel-item c-item">
                  <img
                    src="https://tinyurl.com/bdfh4njt"
                    className="d-block w-100 c-img rounded"
                    alt="glasses"
                  />
                  <div className="carousel-caption top-0 mt-4 ">
                    <p className="mt-5 fs-3 text-uppercase">
                      Some representative placeholder content for the second
                      slide.
                    </p>
                    <h1 className="display-1 fs-1 fw-bolder text-capitalize">
                      First slide label
                    </h1>
                    <button className="btn btn-primary px-4 py-2 fs-5 mt-5">
                      Select
                    </button>
                  </div>
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselControls"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselControls"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div class="card mb-3 mt-3">
          <div class="row g-0">
            <div className="col-md-3">
              <img
                src="https://tinyurl.com/msjpvavb"
                class="img-fluid rounded-start rounded-end card-img-top card-image-home"
                alt="..."
              />
            </div>
            <div className="col-md-6">
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p className="card-text">
                  <small className="text-body-secondary">
                    Last updated 3 mins ago
                  </small>
                </p>
              </div>
            </div>
          </div>

          <div className="card">
            <div class="row g-0">
              <div className="col-md-9">
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <p className="card-text">
                    <small className="text-body-secondary">
                      Last updated 3 mins ago
                    </small>
                  </p>
                </div>
              </div>
              <div className="col-md-3">
                <img
                  src="https://tinyurl.com/39hrced4"
                  className="img-fluid rounded-start rounded-end card-img-bottom card-image-home"
                  alt="..."
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default Home;
