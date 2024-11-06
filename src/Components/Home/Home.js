import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <div className="container-fluid main_header">
        <div className="row">
          <div className="col-md-10 col-12 mx-auto">
            <div className="row">
              {/* Left side div */}
              <div className="col-md-6 col-12 main_header_left">
                <p>Welcome to the Weather App</p>
                <h1>
                  Get the latest <span className="text-co">weather</span> info of your city
                </h1>
                <Link to="/weather">
                  <button>Check me</button>
                </Link>
              </div>

              {/* Right side div */}
              <div className="col-md-6 col-12 main_header_right">
                <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                  <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
                  </div>
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img src="images/1.png" className="d-block w-100" alt="Slide 1" />
                    </div>
                    <div className="carousel-item">
                      <img src="images/2.png" className="d-block w-100" alt="Slide 2" />
                    </div>
                    <div className="carousel-item">
                      <img src="images/3.png" className="d-block w-100" alt="Slide 3" />
                    </div>
                    <div className="carousel-item">
                      <img src="images/4.jpg" className="d-block w-100" alt="Slide 4" />
                    </div>
                    <div className="carousel-item">
                      <img src="images/5.png" className="d-block w-100" alt="Slide 5" />
                    </div>
                  </div>
                  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
