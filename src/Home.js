import React from "react";
import Footer from "./components/Footer";
import TrendingSection from "./components/TrendingSection";

function Home() {
  return (
    <>
      {/* Banner section */}
      <div className="pb-4 mw1920 mcen">
        <a href="home">
          {" "}
          <img src="/img/ban.svg" alt="banner" className="w-100" />
        </a>
      </div>

      {/* second  Section  */}
      <div className="container categorySec py-4 pt-4">
        <div className="row">
          <div className="col-lg-2 col-md-4 col-6 text-center py-4">
            <a href="demo" className="text-decoration-none ">
              {" "}
              <img src="/img/Ellipse1.svg" alt="Clothes" />
              <p className="mb0 mt20 ">Men’s T-Shirts</p>
            </a>
          </div>
          <div className="col-lg-2 col-md-4 col-6 text-center py-4">
            <a href="demo" className="text-decoration-none ">
              {" "}
              <img src="/img/Ellipse2.svg" alt="Clothes" />
              <p className="mb0 mt20 ">Women’s Wear</p>
            </a>
          </div>
          <div className="col-lg-2 col-md-4 col-6 text-center py-4">
            <a href="demo" className="text-decoration-none ">
              {" "}
              <img src="/img/Ellipse3.svg" alt="Clothes" />
              <p className="mb0 mt20 ">Winter Collections</p>
            </a>
          </div>
          <div className="col-lg-2 col-md-4 col-6 text-center py-4">
            <a href="demo" className="text-decoration-none ">
              {" "}
              <img src="/img/Ellipse4.svg" alt="Clothes" />
              <p className="mb0 mt20 ">Hooded T-Shirts</p>
            </a>
          </div>
          <div className="col-lg-2 col-md-4 col-6 text-center py-4">
            <a href="demo" className="text-decoration-none ">
              {" "}
              <img src="/img/Ellipse5.svg" alt="Clothes" />
              <p className="mb0 mt20 ">Polo Neck T-Shirts</p>
            </a>
          </div>
          <div className="col-lg-2 col-md-4 col-6 text-center py-4">
            <a href="demo" className="text-decoration-none ">
              {" "}
              <img src="/img/Ellipse6.svg" alt="Clothes" />
              <p className="mb0 mt20 ">Full Sleeves T-Shirts</p>
            </a>
          </div>
        </div>
      </div>

      <div className="container  py-3 ">
        <div className="row">
          <div className="col-12 col-lg-6 col-md-6 py-2">
            <a href="Demo">
              <img
                src="/img/discountImg1.svg"
                className="w-100"
                alt="Discount 60% of Baggy Clothes"
              />
            </a>
          </div>
          <div className="col-12 col-lg-6 col-md-6 py-2">
            <a href="Demo">
              <img
                src="/img/discountImg2.svg"
                className="w-100"
                alt="Discount 60% of Baggy Clothes"
              />
            </a>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-lg-4 col-md-6 py-2">
            <a href="Demo">
              <img
                src="/img/discountImg3.svg"
                className="w-100"
                alt="Discount 60% of Baggy Clothes"
              />
            </a>
          </div>
          <div className="col-12 col-lg-4 col-md-6 py-2">
            <a href="Demo">
              <img
                src="/img/discountImg4.svg"
                className="w-100"
                alt="Discount 60% of Baggy Clothes"
              />
            </a>
          </div>
          <div className="col-12 col-lg-4 col-md-6 py-2">
            <a href="Demo">
              <img
                src="/img/discountImg5.svg"
                className="w-100"
                alt="Discount 60% of Baggy Clothes"
              />
            </a>
          </div>
        </div>
      </div>

      <TrendingSection />

      {/* Sale */}
      <div className="py-4">
        <a href="sale">
          <img src="/img/banner2.png" className="w-100" alt="LooseFit" />
        </a>
      </div>

      {/* New Products */}
      <div className="container trendingWrap py-4">
        <div className="title1 mb20">
          <span></span>
          <h3>New Products</h3>
        </div>
        <div className="row">
          <div className="col-6 col-md-3 col-sm-4 item ">
            <div className="image">
              <img
                src="/img/trending1.svg"
                className="w-100"
                alt="Trending T-shirts"
              />

              <div className="isHover">
                <div className="inner">
                  <a href="Demo">
                    <img src="/img/cart.svg" alt="Cart" />
                  </a>
                  <a href="Demo">
                    <img src="/img/like.svg" alt="like" />
                  </a>
                  <a href="Demo">
                    <img src="/img/share.svg" alt="share" />
                  </a>
                </div>
              </div>
            </div>
            <div className="content">
              <h5>
                Men Henley Neck <br />
                Full Sleeve Red Wine
              </h5>
              <p>
                ₹399<span>₹1299</span>
              </p>
              <div className="d-flex align-items-center size justify-content-between">
                <span>S</span>
                <span>M</span>
                <span>L</span>
                <span>XL</span>
                <span>XXL</span>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-3 col-sm-4 item ">
            <div className="image">
              <img
                src="/img/trending2.svg"
                className="w-100"
                alt="Trending T-shirts"
              />

              <div className="isHover">
                <div className="inner">
                  <a href="Demo">
                    <img src="/img/cart.svg" alt="Cart" />
                  </a>
                  <a href="Demo">
                    <img src="/img/like.svg" alt="like" />
                  </a>
                  <a href="Demo">
                    <img src="/img/share.svg" alt="share" />
                  </a>
                </div>
              </div>
            </div>
            <div className="content">
              <h5>
                Men Henley Neck <br />
                Full Sleeve Red Wine
              </h5>
              <p>
                ₹399<span>₹1299</span>
              </p>
              <div className="d-flex align-items-center size justify-content-between">
                <span>S</span>
                <span>M</span>
                <span>L</span>
                <span>XL</span>
                <span>XXL</span>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-3 col-sm-4 item ">
            <div className="image">
              <img
                src="/img/trending3.svg"
                className="w-100"
                alt="Trending T-shirts"
              />

              <div className="isHover">
                <div className="inner">
                  <a href="Demo">
                    <img src="/img/cart.svg" alt="Cart" />
                  </a>
                  <a href="Demo">
                    <img src="/img/like.svg" alt="like" />
                  </a>
                  <a href="Demo">
                    <img src="/img/share.svg" alt="share" />
                  </a>
                </div>
              </div>
            </div>
            <div className="content">
              <h5>
                Men Henley Neck <br />
                Full Sleeve Red Wine
              </h5>
              <p>
                ₹399<span>₹1299</span>
              </p>
              <div className="d-flex align-items-center size justify-content-between">
                <span>S</span>
                <span>M</span>
                <span>L</span>
                <span>XL</span>
                <span>XXL</span>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-3 col-sm-4 item ">
            <div className="image">
              <img
                src="/img/trending4.svg"
                className="w-100"
                alt="Trending T-shirts"
              />

              <div className="isHover">
                <div className="inner">
                  <a href="Demo">
                    <img src="/img/cart.svg" alt="Cart" />
                  </a>
                  <a href="Demo">
                    <img src="/img/like.svg" alt="like" />
                  </a>
                  <a href="Demo">
                    <img src="/img/share.svg" alt="share" />
                  </a>
                </div>
              </div>
            </div>
            <div className="content">
              <h5>
                Men Henley Neck <br />
                Full Sleeve Red Wine
              </h5>
              <p>
                ₹399<span>₹1299</span>
              </p>
              <div className="d-flex align-items-center size justify-content-between">
                <span>S</span>
                <span>M</span>
                <span>L</span>
                <span>XL</span>
                <span>XXL</span>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt30">
          <a className="btn1" href="#demo">
            VIEW ALL
          </a>
        </div>
      </div>

      {/* Best Selling products */}
      <div className="container trendingWrap py-4">
        <div className="title1 mb20">
          <span></span>
          <h3>Best Selling Products</h3>
        </div>
        <div className="row">
          <div className="col-6 col-md-3 col-sm-4 item ">
            <div className="image">
              <img
                src="/img/trending1.svg"
                className="w-100"
                alt="Trending T-shirts"
              />

              <div className="isHover">
                <div className="inner">
                  <a href="Demo">
                    <img src="/img/cart.svg" alt="Cart" />
                  </a>
                  <a href="Demo">
                    <img src="/img/like.svg" alt="like" />
                  </a>
                  <a href="Demo">
                    <img src="/img/share.svg" alt="share" />
                  </a>
                </div>
              </div>
            </div>
            <div className="content">
              <h5>
                Men Henley Neck <br />
                Full Sleeve Red Wine
              </h5>
              <p>
                ₹399<span>₹1299</span>
              </p>
              <div className="d-flex align-items-center size justify-content-between">
                <span>S</span>
                <span>M</span>
                <span>L</span>
                <span>XL</span>
                <span>XXL</span>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-3 col-sm-4 item ">
            <div className="image">
              <img
                src="/img/trending2.svg"
                className="w-100"
                alt="Trending T-shirts"
              />

              <div className="isHover">
                <div className="inner">
                  <a href="Demo">
                    <img src="/img/cart.svg" alt="Cart" />
                  </a>
                  <a href="Demo">
                    <img src="/img/like.svg" alt="like" />
                  </a>
                  <a href="Demo">
                    <img src="/img/share.svg" alt="share" />
                  </a>
                </div>
              </div>
            </div>
            <div className="content">
              <h5>
                Men Henley Neck <br />
                Full Sleeve Red Wine
              </h5>
              <p>
                ₹399<span>₹1299</span>
              </p>
              <div className="d-flex align-items-center size justify-content-between">
                <span>S</span>
                <span>M</span>
                <span>L</span>
                <span>XL</span>
                <span>XXL</span>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-3 col-sm-4 item ">
            <div className="image">
              <img
                src="/img/trending3.svg"
                className="w-100"
                alt="Trending T-shirts"
              />

              <div className="isHover">
                <div className="inner">
                  <a href="Demo">
                    <img src="/img/cart.svg" alt="Cart" />
                  </a>
                  <a href="Demo">
                    <img src="/img/like.svg" alt="like" />
                  </a>
                  <a href="Demo">
                    <img src="/img/share.svg" alt="share" />
                  </a>
                </div>
              </div>
            </div>
            <div className="content">
              <h5>
                Men Henley Neck <br />
                Full Sleeve Red Wine
              </h5>
              <p>
                ₹399<span>₹1299</span>
              </p>
              <div className="d-flex align-items-center size justify-content-between">
                <span>S</span>
                <span>M</span>
                <span>L</span>
                <span>XL</span>
                <span>XXL</span>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-3 col-sm-4 item ">
            <div className="image">
              <img
                src="/img/trending4.svg"
                className="w-100"
                alt="Trending T-shirts"
              />

              <div className="isHover">
                <div className="inner">
                  <a href="Demo">
                    <img src="/img/cart.svg" alt="Cart" />
                  </a>
                  <a href="Demo">
                    <img src="/img/like.svg" alt="like" />
                  </a>
                  <a href="Demo">
                    <img src="/img/share.svg" alt="share" />
                  </a>
                </div>
              </div>
            </div>
            <div className="content">
              <h5>
                Men Henley Neck <br />
                Full Sleeve Red Wine
              </h5>
              <p>
                ₹399<span>₹1299</span>
              </p>
              <div className="d-flex align-items-center size justify-content-between">
                <span>S</span>
                <span>M</span>
                <span>L</span>
                <span>XL</span>
                <span>XXL</span>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt30">
          <a className="btn1" href="#demo">
            VIEW ALL
          </a>
        </div>
      </div>

      {/* loosfit */}
      <div className="py-4">
        <a href="loosefit">
          <img
            src="/img/foosefit_banner.png"
            className="w-100"
            alt="LooseFit"
          />
        </a>
      </div>

      {/* offer section */}
      <div className="container offerSection py-4">
        <div className="row">
          <div className="col-lg-6 col-sm-6 ">
            <div className="item" style={{ backgroundColor: "#CCCEA7" }}>
              <img src="/img/diamond.svg" alt="" />
              <h4>Hurry Up!</h4>
              <h3>85% OFF</h3>
              <p>Sale</p>
              <a href="shopnow">shop now</a>
            </div>
          </div>
          <div className="col-lg-6 col-sm-6">
            <div className="item" style={{ backgroundColor: "#D6BEBE" }}>
              <img src="/img/discount.svg" alt="" />
              <h4>Hurry Up!</h4>
              <h3>75% OFF</h3>
              <p>Sale</p>
              <a href="shopnow">shop now</a>
            </div>
          </div>
        </div>
      </div>

      {/* Policy Section */}
      <div className="policyWrper">
        <div className="container inerWrap">
          <div className="row ">
            <div className="col-lg-3 col-md-6 col-6 inerItem">
              <img src="/img/policySection/policy1.svg" alt="7 Days return" />
              <p>7 Days Return</p>
            </div>
            <div className="col-lg-3 col-md-6 col-6 inerItem">
              <img
                src="/img/policySection/policy2.svg"
                alt="Quality Products"
              />
              <p>Quality Products</p>
            </div>
            <div className="col-lg-3 col-md-6 col-6 inerItem">
              <img src="/img/policySection/policy3.svg" alt="Safe Payment" />
              <p>Safe Payment</p>
            </div>
            <div className="col-lg-3 col-md-6 col-6 inerItem">
              <img src="/img/policySection/policy4.svg" alt="24x7 Helpline" />
              <p>24x7 Helpline</p>
            </div>
          </div>
        </div>
        <img
          src="/img/policySection/left_vactor.svg"
          className="polVactLeft d-lg-block d-none"
          alt="vactor"
        />
        <img
          src="/img/policySection/right_vactor.svg"
          className="polVactRight d-lg-block d-none"
          alt="vactor"
        />
      </div>

      {/* ############################### Subscribe Section #######################*/}

      <div className="container subcribeSec">
        <div style={{ maxWidth: "750px" }} className="mcen">
          <h2>
            Subscribe to get updates on exciting offers <br />& deals
          </h2>
          <form>
            <div className="sinput d-flex">
              <input
                type="email"
                name="emailID"
                placeholder="Enter your email"
              />
              <button type="submit">Subscribe</button>
            </div>
          </form>
        </div>
        <img
          src="/img/formVactorLeft.svg"
          className="formImgLeft"
          alt="vactor"
        />
        <img
          src="/img/formVactorRight.svg"
          className="formImgRight"
          alt="vactor"
        />
      </div>

      <Footer />
    </>
  );
}

export default Home;
