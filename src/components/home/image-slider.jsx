const ImageSlider = () => {
  return (
    <div className="w-full carousel">
      <div id="slide1" className="relative w-full carousel-item">
        <img src="/1.jpg" className="w-full" />
        <div className="top-1/2 right-5 left-5 absolute flex justify-between transform -translate-y-1/2">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="relative w-full carousel-item">
        <img src="2.jpg" className="w-full" />
        <div className="top-1/2 right-5 left-5 absolute flex justify-between transform -translate-y-1/2">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="relative w-full carousel-item">
        <img src="3.jpg" className="w-full" />
        <div className="top-1/2 right-5 left-5 absolute flex justify-between transform -translate-y-1/2">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="relative w-full carousel-item">
        <img src="1.jpg" className="w-full" />
        <div className="top-1/2 right-5 left-5 absolute flex justify-between transform -translate-y-1/2">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
