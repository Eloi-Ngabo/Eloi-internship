import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


const LandingIntro = () => {
  // Initialize AOS when the component mounts
  useEffect(() => {
    AOS.init({
      duration: 1000, // 1 second animation duration
      once: false,     // Animation triggers only once when scrolling down
    });
  }, []);

  return (
    <section id="section-intro" className="no-top no-bottom">
      <div className="container">
        <div className="row">
          
          {/* Step 1: Fades up first */}
          <div className="col-lg-4 col-md-6 mb-sm-30" data-aos="fade-up" data-aos-delay="100">
            <div className="feature-box f-boxed style-3">
              <i className="bg-color-2 i-boxed icon_wallet"></i>
              <div className="text">
                <h4 className="">Set up your wallet</h4>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem.
                </p>
              </div>
              <i className="wm icon_wallet"></i>
            </div>
          </div>
          
          {/* Step 2: Fades up with a short delay */}
          <div className="col-lg-4 col-md-6 mb-sm-30" data-aos="fade-up" data-aos-delay="250">
            <div className="feature-box f-boxed style-3">
              <i className="bg-color-2 i-boxed icon_cloud-upload_alt"></i>
              <div className="text">
                <h4 className="">Add your NFT's</h4>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem.
                </p>
              </div>
              <i className="wm icon_cloud-upload_alt"></i>
            </div>
          </div>
          
          {/* Step 3: Fades up last */}
          <div className="col-lg-4 col-md-6 mb-sm-30" data-aos="fade-up" data-aos-delay="400">
            <div className="feature-box f-boxed style-3">
              <i className="bg-color-2 i-boxed icon_tags_alt"></i>
              <div className="text">
                <h4 className="">Sell your NFT's</h4>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem.
                </p>
              </div>
              <i className="wm icon_tags_alt"></i>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default LandingIntro;
