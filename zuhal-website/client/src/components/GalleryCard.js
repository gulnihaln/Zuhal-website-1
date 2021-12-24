export default function GalleryCard({ images, cardIndex }) {
  console.log(images);
  return (
    <div>
      {images[cardIndex].map((image) => (
        <img src={image.src} alt={image.alt} />
      ))}
    </div>
  );
}
