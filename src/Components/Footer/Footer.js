import React from "react";

const Footer = () => {
  return (
    <div>
      <footer
        class="text-center text-lg-start text-white"
        style={{ backgroundColor: "#012970" }}
      >
        <div class="container p-4 pb-0">
          <section class="">
            <div class="row">
              <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                <h6 class="text-uppercase mb-4 font-weight-bold">GADGET-X</h6>
                <p>
                  The term in brief: Warehouse technology deals with the storage
                  and commissioning of goods. It is part of intralogistics and
                  closely linked to materials handling and packaging technology
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
                <h6 class="text-uppercase mb-4 font-weight-bold">Follow us</h6>

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
  );
};

export default Footer;
