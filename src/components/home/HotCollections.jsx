import React, { useEffect, useState } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import axios from "axios";
import { Link } from "react-router-dom";
import AuthorImage from "../../images/author_thumbnail.jpg";
import nftImage from "../../images/nftImage.jpg";

const HotCollections = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchHotCollections() {
      const { data } = await axios.get(
        `https://us-central1-nft-cloud-functions.cloudfunctions.net/hotCollections`,
      );
      setPosts(data);
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    }
    fetchHotCollections();
  }, []);

  const options = {
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
      0: { items: 1 },
      576: { items: 2 },
      768: { items: 3 },
      1024: { items: 4 },
    },
  };

  return (
    <>
      <section id="section-collections" className="no-bottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="text-center">
                <h2>Hot Collections</h2>
                <div className="small-border bg-color-2"></div>
              </div>
            </div>
            {loading ? (
              <>
                {[1, 2, 3, 4].map((item) => (
                  <div className="col-lg-3 col-md-6 col-sm-12" key={item}>
                    <div
                      className="skeleton-box"
                      style={{
                        width: "100%",
                        height: "300px",
                        borderRadius: "12px",
                      }}
                    ></div>
                  </div>
                ))}
              </>
            ) : (
              <div className="col-lg-12">
                <OwlCarousel className="owl-theme" {...options}>
                  {posts.map((post, index) => (
                    <div className="nft_coll" key={index}>
                      <div className="nft_wrap">
                        <Link to="/item-details">
                          <img
                            src={post.nftImage}
                            className="lazy img-fluid"
                            alt=""
                          />
                        </Link>
                      </div>
                      <div className="nft_coll_pp">
                        <Link to="/author">
                          <img
                            className="lazy pp-coll"
                            src={post.authorImage}
                            alt=""
                          />
                        </Link>
                        <i className="fa fa-check"></i>
                      </div>
                      <div className="nft_coll_info">
                        <Link to="/explore">
                          <h4>{post.title}</h4>
                        </Link>
                        <span>ERC-{post.code}</span>
                      </div>
                    </div>
                  ))}
                </OwlCarousel>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default HotCollections;
