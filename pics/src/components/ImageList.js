import React from 'react';

const ImageList = (props) => {
  const images = props.images.map((image) => {
    return (
      <img key={image.id} alt={image.description} src={image.urls.thumb} />
    );
  });

  console.log(props.images);
  return <div>{images}</div>;
};

export default ImageList;
