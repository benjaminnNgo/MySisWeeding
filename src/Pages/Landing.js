import React, { useEffect } from "react";
import MainCarousel from "../Component/MainCarousel";
import MainNav from "../Component/MainNav";
import { motion } from "framer-motion";
import welcome_img from "../assets/img/Couple-my.jpg";

import when_01 from "../assets/img/when-01-my.jpg";
import when_02 from "../assets/img/when-02-my.jpg";

import gallery01 from "../assets/img/Album-1.jpg";
import gallery02 from "../assets/img/Album-2.jpg";
import gallery03 from "../assets/img/Album-3.jpg";
import gallery04 from "../assets/img/Album-4.jpg";
import gallery05 from "../assets/img/Album-5.jpg";
import gallery06 from "../assets/img/Album-6.jpg";

import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaSearchLocation, FaClock } from "react-icons/fa";

const Landing = () => {
  const animation_duration = 2;
  const animation_duration_medium = 1.5;
  const animation_duration_fast = 1;
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };
  const fadeLeft = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  };
  const fadeRight = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };
  const animation_fade_up = useAnimation();
  const animation_fade_left = useAnimation();
  const animation_fade_right = useAnimation();

  const { ref, inView } = useInView();
  const { ref_when, inView_when } = useInView();

  useEffect(() => {
    if (inView) {
      animation_fade_up.start({
        opacity: 1,
        y: 0,
        transition: { duration: animation_duration_fast },
      });
      animation_fade_left.start({
        opacity: 1,
        x: 0,
        transition: { duration: animation_duration_fast },
      });
      animation_fade_right.start({
        opacity: 1,
        x: 0,
        transition: { duration: animation_duration_medium },
      });
    }
    if (window.innerWidth > 768) {
      if (!inView) {
        animation_fade_up.start({
          opacity: 0,
          y: 50,
        });
        animation_fade_left.start({
          opacity: 0,
          x: 50,
        });
        animation_fade_right.start({
          opacity: 1,
          x: -50,
        });
      }
    }
  }, [inView]);

  return (
    <div class="landing ">
      {/* HEADING */}
      <div className="heading">
        <MainNav class="container" />
        <div className="carousel-main">
          <MainCarousel />
          <div className="overlay" />
          <div className="carousel-tittle flex  ">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ duration: animation_duration }}
            >
              <h2> Lâm & Vy</h2>
              <h6> May 06 | Hồ Chí Minh</h6>
              <h6> May 14 | Phú Yên</h6>
            </motion.div>
          </div>
        </div>
      </div>
      {/* WELCOME */}
      <div className="welcome section-padding">
        <div className="container">
          <div className=" text-center">
            <div className="welcome-mt">
              <div className="welcome-image-wrapper">
                <div className="img">
                  <a href="#">
                    <img src={welcome_img}></img>
                  </a>
                </div>
              </div>
            </div>
            <div className="welcome-content">
              <h6 className="welcome-intro">Hello & Welcome</h6>
              <h2 className="welcome-announcement">We're getting married</h2>
              <p className="welcome-info">
                Now at last they were beginning Chapter One of the Great Story
                which no one on earth has read: which goes on for ever : in
                which every chapter is better than the one before.
                <br></br>
                -C.S.Lewis, The last Battle-
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* COUPLE */}
      {/* <div id="couple" ref={ref} className="couple section-padding">
        <div className="container">
          <div className="row">
            <motion.div
              animate={animation_fade_up}
              className="col-12 text-center mb-30"
            >
              <h6 className="couple-subtitle">Bridge & Groom</h6>
              <h2 className="couple-title">Happy Couple</h2>
            </motion.div>
            <div className="col-3"></div>
            <motion.div
              animate={animation_fade_right}
              className="col-3 text-center"
            >
              <div className="item mb-30">
                <div className="img">
                  <img src={bride}></img>
                </div>
                <div className="info">
                  <div className="full-width">
                    <h6>Khánh Vy</h6>
                    <span>The Bride</span>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              animate={animation_fade_left}
              className="col-3 text-center"
            >
              <div className="item mb-30">
                <div className="img">
                  <img src={groom}></img>
                </div>
                <div className="info">
                  <div className="full-width">
                    <h6>Nguyễn Lâm</h6>
                    <span>The Groom</span>
                  </div>
                </div>
              </div>
            </motion.div>
            <div className="col-3"></div>
          </div>
        </div>
      </div> */}
      {/* WHEN AND WHERE */}
      <div id="when" ref={ref} className="when-where section-padding">
        <div className="container">
          <div ref={ref_when} className="row">
            <motion.div
              animate={animation_fade_up}
              className="col-12 text-center"
            >
              <h6 className="section-subtitle">Save the date</h6>
              <h2 className="section-title">When & When</h2>
            </motion.div>
          </div>
          <div className="row">
            <motion.div animate={animation_fade_right} className="col-md-6">
              <div className="img left">
                <img src={when_01} alt="#" />
              </div>
            </motion.div>
            <motion.div
              animate={animation_fade_left}
              className="col-md-6 valign"
            >
              <div className="content">
                <div className="date">
                  <h3>06</h3>
                  <h6>May 2023</h6>
                </div>
                <div className="cont">
                  <div className="info">
                    <h6>Are you ready?</h6>
                  </div>
                  <h4>Wedding Ceremony</h4>
                  <ul className="list-unstyled cont-list">
                    <li>
                      <div className="icon">
                        <FaSearchLocation />
                      </div>
                      <div className="text">
                        <p>
                          Trung Tâm Tiệc Cưới Capella Parkview
                          <br></br>
                          03 Đặng Văn Sâm, Phường 9<br></br>
                          Q.Phú Nhuận, TP. Hồ Chí Minh
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <FaClock />
                      </div>
                      <div className="text">
                        <p>6:00 pm</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
          <motion.div className="row">
            <motion.div
              animate={animation_fade_right}
              className="col-md-6 valign"
            >
              <div className="content">
                <div className="date">
                  <h3>14</h3>
                  <h6>May 2023</h6>
                </div>
                <div className="cont">
                  <div className="info">
                    <h6>Are you ready?</h6>
                  </div>
                  <h4>Wedding Ceremony</h4>
                  <ul className="list-unstyled cont-list">
                    <li>
                      <div className="icon">
                        <FaSearchLocation />
                      </div>
                      <div className="text">
                        <p>
                          Nhà Hàng Công Đoàn
                          <br />
                          278 Nguyễn Huệ
                          <br></br>
                          TP. Tuy Hòa, tỉnh Phú Yên
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <FaClock />
                      </div>
                      <div className="text">
                        <p>10:30 am</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
            <motion.div animate={animation_fade_left} className="col-md-6">
              <div className="img left">
                <img src={when_02} alt="#" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      {/* BANNER */}
      <div className="banner section-padding">
        <div className="overlay" />
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h6 className="banner-save">Save the date</h6>
              <h2 className="banner-looking">Looking forward to see you!</h2>
            </div>
          </div>
        </div>
      </div>
      {/* Gallery */}
      <div id="gallery" className="gallery section-padding">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h6 className="section-subtitle">Save this moment</h6>
              <h2 className="section-title">Our gallery</h2>
            </div>
            <div className="col-md-4 gallery-item">
              <div className="img-box mt-2">
                <img src={gallery06}></img>
              </div>
              <div className="img-box mt-4">
                <img src={gallery04}></img>
              </div>
            </div>

            <div className="col-md-4 gallery-item">
              <div className="img-box">
                <img src={gallery01}></img>
              </div>
            </div>
            <div className="col-md-4 gallery-item">
              <div className="img-box mt-2">
                <img src={gallery02}></img>
              </div>
              <div className="img-box mt-4">
                <img src={gallery05}></img>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* FOOTER */}
      <div className="footer ">
        <div className="container">
          <div className="top-footer">
            <div className="row">
              <div className="col-12">
                <div className="section-padding text-center">
                  <h2>
                    Lâm
                    <small> & </small>
                    Vy
                  </h2>
                  <h6>06.05.2023, Ho Chi Minh City</h6>
                  <h6 className="mt-3">14.05.2023, Phu Yen</h6>
                </div>
              </div>
            </div>
          </div>
          <div className="sub-footer">
            <div className="row">
              <div className="col-12 text-center">
                <p>
                  Made with love by ntgbaoo - Bride's Brother. All right
                  reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Landing;
