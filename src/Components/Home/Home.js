import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import CountUp from "react-countup";
import ReactVisibilitySensor from "react-visibility-sensor";
import Products from "../Products/Products";
import "./Home.css";
const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://evening-mesa-55779.herokuapp.com/inventory")
      .then((response) => setProducts(response.data));
  }, []);

  return (
    <div>
      <section id="hero" className="hero d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 d-flex flex-column justify-content-center">
              <h1 data-aos="fade-up">
                We offer modern solutions for Electronic warehouse!
              </h1>
              <h2 data-aos="fade-up" data-aos-delay="400">
                We are team of talented developer making your life easy.
              </h2>
              <div data-aos="fade-down" data-aos-delay="600">
                <div className="text-center my-3 text-lg-start">
                  <Button>
                    Get Start <i className="bi bi-arrow-right"></i>
                  </Button>
                </div>
              </div>
            </div>
            <div
              className="col-lg-6 hero-img"
              data-aos="zoom-out"
              data-aos-delay="200"
            >
              <img
                src="https://img.freepik.com/free-vector/gamers-using-different-devices-playing-mobile-phone-tablet-laptop-console-cartoon-illustration_74855-14380.jpg?t=st=1651395673~exp=1651396273~hmac=901298e00622ebe499fb81cc16906377abae1776bd669c9ca53bce4928466ab8&w=740"
                className="img-fluid"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="about">
        <div className="container" data-aos="fade-up">
          <div className="row gx-0">
            <div
              className="col-lg-6 d-flex flex-column justify-content-center"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="content">
                <h3>Who We Are</h3>
                <h2>
                  We are team from Bangladesh and we help you to manage your
                  Electronic store easily.
                </h2>
                <p>
                  A warehouse is a building for storing goods. Warehouses are
                  used by manufacturers, importers, exporters, wholesalers,
                  transport businesses, customs, etc. They are usually large
                  plain buildings in industrial parks on the outskirts of
                  cities, towns, or villages.
                </p>
                <div className="text-center text-lg-start">
                  <Button>
                    Read more <i className="bi bi-arrow-right"></i>
                  </Button>
                </div>
              </div>
            </div>

            <div
              className="col-lg-6 d-flex align-items-center"
              data-aos="zoom-out-left"
              data-aos-duration="3000"
            >
              <img
                src="https://img.freepik.com/free-vector/logistic-workers-carrying-boxes-with-loaders_74855-6541.jpg?t=st=1651397689~exp=1651398289~hmac=987c9400f6992d1799795727920b09381aa83b3dfb732b83e4c58c53396bb5c3&w=740"
                className="img-fluid"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      <section id="values" className="values">
        <div className="container" data-aos="fade-up">
          <header className="section-header">
            <h2>Our Values</h2>
            <p>Your Satisfactions is our main priority</p>
          </header>

          <div className="row">
            <div className="col-lg-4" data-aos="fade-up" data-aos-delay="200">
              <div className="box">
                <img
                  src="https://i.ibb.co/Z8Bmbfz/values-1.png"
                  className="img-fluid"
                  alt=""
                />
                <h3>Manage Your Inventory</h3>
                <p>
                  You'll always need to keep your inventory at an optimal level
                  for your retail business growth. It minimizes the risk of a
                  profit deficit.
                </p>
              </div>
            </div>

            <div
              className="col-lg-4 mt-4 mt-lg-0"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="box">
                <img
                  src="https://i.ibb.co/CvcJ2qJ/values-2.png"
                  className="img-fluid"
                  alt=""
                />
                <h3>Take Faster support</h3>
                <p>
                  An effective way to lower employee turnover is to hire the
                  right employees from the start. The hiring process needs to
                  select candidates whose skill sets fit the job description.
                </p>
              </div>
            </div>

            <div
              className="col-lg-4 mt-4 mt-lg-0"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <div className="box">
                <img
                  src="https://i.ibb.co/HzfY2Cr/values-3.png"
                  className="img-fluid"
                  alt=""
                />
                <h3>Modern management tools</h3>
                <p>
                  You always need to innovate store management processes and
                  streamline them in the long term. However, human error is
                  inevitable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container">
        <header className="section-header">
          <h2>Inventory</h2>
          <p>Top selling Products</p>
        </header>
        <div
          className="product-container"
          data-aos="fade-up-left"
          data-aos-delay="600"
        >
          {products.slice(0, 6).map((product) => (
            <Products product={product}></Products>
          ))}
        </div>
      </section>

      <section id="counts" className="counts text-center">
        <div className="container" data-aos="fade-up">
          <div className="row gy-4">
            <div className="col-lg-3 col-md-6">
              <div
                className="count-box"
                data-aos-delay="800"
                data-aos="fade-up"
              >
                <i className="bi bi-emoji-smile"></i>
                <div>
                  <CountUp end={36} redraw={true} suffix="+">
                    {({ countUpRef, start }) => (
                      <ReactVisibilitySensor onChange={start} delayedCall>
                        <span ref={countUpRef} />
                      </ReactVisibilitySensor>
                    )}
                  </CountUp>
                  <p>Happy Clients</p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div
                className="count-box"
                data-aos-delay="600"
                data-aos="fade-up"
              >
                <i className="bi bi-journal-richtext"></i>
                <div>
                  <CountUp end={24} redraw={true} suffix="+">
                    {({ countUpRef, start }) => (
                      <ReactVisibilitySensor onChange={start} delayedCall>
                        <span ref={countUpRef} />
                      </ReactVisibilitySensor>
                    )}
                  </CountUp>
                  <p>Projects</p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div
                className="count-box"
                data-aos-delay="400"
                data-aos="fade-up"
              >
                <i className="bi bi-headset"></i>
                <div>
                  <CountUp end={80} redraw={true} suffix="+">
                    {({ countUpRef, start }) => (
                      <ReactVisibilitySensor onChange={start} delayedCall>
                        <span ref={countUpRef} />
                      </ReactVisibilitySensor>
                    )}
                  </CountUp>
                  <p>Hours Of Support</p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div
                className="count-box"
                data-aos-delay="200"
                data-aos="fade-up"
              >
                <i className="bi bi-people"></i>
                <div>
                  <CountUp end={20} redraw={true} suffix="+">
                    {({ countUpRef, start }) => (
                      <ReactVisibilitySensor onChange={start} delayedCall>
                        <span ref={countUpRef} />
                      </ReactVisibilitySensor>
                    )}
                  </CountUp>
                  <p>Hard Workers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div
        className="footer-newsletter"
        data-aos="fade-up-right"
        data-aos-duration="1000"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12 text-center">
              <h4>Our Newsletter</h4>
              <p>
                Subscribe to get our mothly dose of Warehouse knowledge,
                inspiration and news.
              </p>
            </div>
            <div className="col-lg-6 text-center">
              <input type="email" name="email" id="" placeholder="E-mail" />
              <input type="submit" value="Subscribe" />
            </div>
          </div>
        </div>
      </div>

      <div data-aos="fade-up" data-aos-easing="linear" data-aos-duration="2000">
        <footer
          class="text-center text-lg-start text-white"
          style={{ backgroundColor: "#929fba" }}
        >
          <div class="container p-4 pb-0">
            <section class="">
              <div class="row">
                <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                  <h6 class="text-uppercase mb-4 font-weight-bold">GADGET-X</h6>
                  <p>
                    The term in brief: Warehouse technology deals with the
                    storage and commissioning of goods. It is part of
                    intralogistics and closely linked to materials handling and
                    packaging technology
                  </p>
                </div>

                <hr class="w-100 clearfix d-md-none" />

                <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                  <h6 class="text-uppercase mb-4 font-weight-bold">Products</h6>
                  <p>
                    <a href="/" class="text-white">
                      LINK 1
                    </a>
                  </p>
                  <p>
                    <a href="/" class="text-white">
                      LINK 2
                    </a>
                  </p>
                  <p>
                    <a href="/" class="text-white">
                      LINK 3
                    </a>
                  </p>
                  <p>
                    <a href="/" class="text-white">
                      LINK 4
                    </a>
                  </p>
                </div>

                <hr class="w-100 clearfix d-md-none" />

                <hr class="w-100 clearfix d-md-none" />

                <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                  <h6 class="text-uppercase mb-4 font-weight-bold">Contact</h6>
                  <p>
                    <i class="bi bi-house mr-3"></i> Gulistan, Dhaka, Bangladesh
                  </p>
                  <p>
                    <i class="bi bi-envelope mr-3"></i> info@gmail.com
                  </p>
                  <p>
                    <i class="bi bi-phone mr-3"></i> 0177777
                  </p>
                  <p>
                    <i class="bi bi-printer mr-3"></i> 0155555
                  </p>
                </div>

                <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                  <h6 class="text-uppercase mb-4 font-weight-bold">
                    Follow us
                  </h6>

                  <a
                    class="btn btn-primary btn-floating m-1"
                    style={{ backgroundColor: "#3b5998" }}
                    href="/"
                    role="button"
                  >
                    <i class="bi bi-facebook"></i>
                  </a>

                  <a
                    class="btn btn-primary btn-floating m-1"
                    style={{ backgroundColor: "#55acee" }}
                    href="/"
                    role="button"
                  >
                    <i class="bi bi-twitter"></i>
                  </a>

                  <a
                    class="btn btn-primary btn-floating m-1"
                    style={{ backgroundColor: "#dd4b39" }}
                    href="/"
                    role="button"
                  >
                    <i class="bi bi-google"></i>
                  </a>

                  <a
                    class="btn btn-primary btn-floating m-1"
                    style={{ backgroundColor: "#ac2bac" }}
                    href="/"
                    role="button"
                  >
                    <i class="bi bi-instagram"></i>
                  </a>

                  <a
                    class="btn btn-primary btn-floating m-1"
                    style={{ backgroundColor: "#0082ca" }}
                    href="/"
                    role="button"
                  >
                    <i class="bi bi-linkedin"></i>
                  </a>

                  <a
                    class="btn btn-primary btn-floating m-1"
                    style={{ backgroundColor: "#333333" }}
                    href="/"
                    role="button"
                  >
                    <i class="bi bi-github"></i>
                  </a>
                </div>
              </div>
            </section>
          </div>

          <div
            class="text-center p-3"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
          >
            © 2022 Copyright:{" "}
            <a class="text-white" href="/">
              gadgetx.com
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Home;
