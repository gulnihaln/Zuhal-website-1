export default function GalleryCard({ images }) {
  return (
    <div>
      {images.map((image) => (
        <img src={image.src} alt={image.alt} />
      ))}
    </div>
  );
}
