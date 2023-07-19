import ImageShow from './ImageShow';

function ImageList({ images }) {
  const renderedImages = images.map((images) => {
    return <ImageShow image={images} />;
  });

  return <div>{renderedImages}</div>;
}
export default ImageList;
