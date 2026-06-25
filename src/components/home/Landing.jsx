import React, { useEffect } from "react";
import NFT from "../../images/nft.png";
import backgroundImage from "../../images/bg-shape-1.jpg";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";



const Landing = () => {
  // Initialize AOS when the component mounts
  useEffect(() => {
    Aos.init({
      duration: 1000, // Duration of animations in milliseconds
      once: false,     // Whether animation should happen only once while scrolling down
    });
  }, []);

  return (
    <section
      id="section-hero"
      aria-label="section"
      className="no-top no-bottom vh-100"
      data-bgimage="url(images/bg-shape-1.jpg) bottom"
      style={{ background: `url(${backgroundImage}) bottom / cover` }}
    >
      <div className="v-center">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="spacer-single"></div>
              
              {/* Added fade-up with a fast trigger */}
              <h6 data-aos="fade-up" data-aos-delay="100">
                <span className="text-uppercase id-color-2">
                  Ultraverse Market
                </span>
              </h6>
              
              <div className="spacer-10"></div>
              
              {/* Added fade-up with a slight delay */}
              <h1 data-aos="fade-up" data-aos-delay="250">
                Create, sell or collect digital items.
              </h1>
              
              {/* Added fade-up with a further delay */}
              <p className="lead" data-aos="fade-up" data-aos-delay="400">
                Unit of data stored on a digital ledger, called a blockchain,
                that certifies a digital asset to be unique and therefore not
                interchangeable
              </p>
              
              <div className="spacer-10"></div>
              
              {/* Button fades in last */}
              <div data-aos="fade-up" data-aos-delay="550">
                <Link className="btn-main lead" to="/explore">
                  Explore
                </Link>
              </div>
              
              <div className="mb-sm-30"></div>
            </div>

            {/* Right side image slides/fades in smoothly from the right side */}
            <div className="col-md-6 xs-hide" data-aos="fade-left" data-aos-delay="300">
              <img src={NFT} className="lazy img-fluid" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;