import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

export default function CarouselImage({ source, content }: any) {
  return (
    <>
      <style className="carousel-img">
        {`
            `}
      </style>
      <div>
        <img style={{height:"300px", backgroundSize:"cover"}} src={source} className="rounded-6" />
        {/* <p className="legend carousel-img">{content}</p> */}
      </div>
    </>
  );
}
