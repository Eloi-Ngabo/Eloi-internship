import React, { useEffect, useState } from "react";
import OwlCarousel from 'react-owl-carousel';

import axios from "axios";
import { Link, useParams } from "react-router-dom";
import AuthorImage from "../../images/author_thumbnail.jpg";
import nftImage from "../../images/nftImage.jpg";




const HotCollections = () => {
  const { id } = useParams();
  const [posts, setPosts] = useState ([])
 

  useEffect(() => {
    async function fetchHotCollections() {
     const {data} = await axios.get(`https://us-central1-nft-cloud-functions.cloudfunctions.net/hotCollections?userId=${id}`)
    setPosts(data); 
    console.log(data) 
    }
   fetchHotCollections()
  },[]);


  return (
    <section id="section-collections" className="no-bottom">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text-center">
              <h2>Hot Collections</h2>
              <div className="small-border bg-color-2"></div>
            </div>
          </div>
        <OwlCarousel  loop margin={10} nav>  
          {posts.map((post, index) => (
            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12" key={index}>
              <div className="nft_coll">
                <div className="nft_wrap">
                  <Link to="/item-details">
                    <img src={post.nftImage} className="lazy img-fluid" alt="" />
                  </Link>
                </div>
                <div className="nft_coll_pp">
                  <Link to="/author">
                    <img className="lazy pp-coll" src={post.authorImage} alt="" />
                  </Link>
                  <i className="fa fa-check"></i>
                </div>
                <div className="nft_coll_info">
                  <Link to="/explore">
                    <h4>{post.title}</h4>
                  </Link>
                  <span>{post.code}</span>
                </div>
              </div>
            </div>
          ))}
          </OwlCarousel>
        </div>
      </div>
    </section>
  );
};

export default HotCollections;
