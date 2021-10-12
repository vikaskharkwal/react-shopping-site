import { useImageCarouselData } from '../hooks/useImageCarouselData';

function ImageCarousel({ delay }) {
  const [imageObject, currentImage] = useImageCarouselData(delay);

  return (
    <div
      className='w-full text-center bg-gray-700 overflow-hidden '
      style={{ height: 'calc(100vh - 3.85rem)' }}>
      {imageObject.map((item, index) => {
        return (
          <img
            className={`w-full h-full object-cover absolute left-0 top-0 transition duration-1000  ${
              index === currentImage ? 'opacity-100' : 'opacity-0'
            }`}
            loading='eager'
            src={item.src}
            key={item.id}
            alt={item.alt}
          />
        );
      })}
    </div>
  );
}

export default ImageCarousel;
