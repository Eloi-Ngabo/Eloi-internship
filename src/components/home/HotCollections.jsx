import React, { useEffect, useState } from "react";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import AuthorImage from "../../images/author_thumbnail.jpg";
import nftImage from "../../images/nftImage.jpg";

const HotCollections = () => {
  // const { id } = useParams();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
     async function fetchHotCollections() {
    const { data } = await axios.get(`https://us-central1-nft-cloud-functions.cloudfunctions.net/hotCollections`);
    setPosts(data);
    setLoading(false)
    }
    fetchHotCollections();
     
  }, []);

  const options = {
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
      0:    { items: 1 },
      576:  { items: 2 },
      768:  { items: 3 },
      1024: { items: 4 },
    },
  };

//  if (!posts.length) return <p>Loading...</p>;

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
          {
            loading
            ? (
          <div className="skeleton-box"></div>
          
             ):(

            //  <div className="col-lg-12">
            // <OwlCarousel className="owl-theme" {...options}>
              posts.map((post) => (
                <div className="nft_coll" key={index}>
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
              ))
            )}
          
            // </OwlCarousel>
          </div>
        </div>
      </div>
    </section>
    </>
  );

// return (
//     <section id="section-collections" className="no-bottom">
//       <div className="container">
//         <div className="row">
//           <div className="col-lg-12">
//             <div className="text-center">
//               <h2>Hot Collections</h2>
//               <div className="small-border bg-color-2"></div>
//             </div>
//           </div>
//           <OwlCarousel className="owl-theme" {...options}>
//           {(posts && posts.length > 0
//             ? posts.map((post, index) => (
//                 <div
//                   // className="col-lg-3 col-md-6 col-sm-6 col-xs-12"
//                   key={index}
//                 >
//                   <div className="nft_coll">
//                     <div className="nft_wrap">
//                       <Link to="/item-details">
//                         <img
//                           src={post?.nftImage || nftImage}
//                           className="lazy img-fluid"
//                           alt=""
//                         />
//                       </Link>
//                     </div>
//                     <div className="nft_coll_pp">
//                       <Link to="/author">
//                         <img
//                           className="lazy pp-coll"
//                           src={post?.authorImage || AuthorImage}
//                           alt=""
//                         />
//                       </Link>
//                       <i className="fa fa-check"></i>
//                     </div>
//                     <div className="nft_coll_info">
//                       <Link to="/explore">
//                         <h4>{post?.title || "Pinky Ocean"}</h4>
//                       </Link>
//                       <span>{post?.code || "ERC-192"}</span>
//                     </div>
//                   </div>
//                 </div>
               
//               ))
              
//             : new Array(4).fill(0).map((_, index) => (
//                 <div
//                   className="col-lg-3 col-md-6 col-sm-6 col-xs-12"
//                   key={index}
//                 >
//                   <div className="nft_coll">
//                     <div className="nft_wrap">
//                       <Link to="/item-details">
//                         <img
//                           src={nftImage}
//                           className="lazy img-fluid"
//                           alt=""
//                         />
//                       </Link>
//                     </div>
//                     <div className="nft_coll_pp">
//                       <Link to="/author">
//                         <img
//                           className="lazy pp-coll"
//                           src={AuthorImage}
//                           alt=""
//                         />
//                       </Link>
//                       <i className="fa fa-check"></i>
//                     </div>
//                     <div className="nft_coll_info">
//                       <Link to="/explore">
//                         <h4>Pinky Ocean</h4>
//                       </Link>
//                       <span>ERC-192</span>
//                     </div>
//                   </div>
//                 </div>
//               )))}
//                </OwlCarousel>
//         </div>
//       </div>
//     </section>
//   );









};

export default HotCollections;



 

