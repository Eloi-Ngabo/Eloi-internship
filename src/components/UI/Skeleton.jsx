import React from "react";


const Skeleton = ({ width, height, borderRadius }) => {
  return (
    <div
      className="skeleton-box"
      style={{
        width: '300px',
        height: '100px',
        borderRadius: '8px'
      }}
    ></div>
  );
};

export default Skeleton;
