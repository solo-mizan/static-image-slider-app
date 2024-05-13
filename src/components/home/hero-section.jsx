const HeroSection = () => {
  return (
    <div
      className="min-h-screen hero"
      style={{
        backgroundImage: "url(/hero-image.jpg)",
      }}
    >
      <div className="bg-opacity-60 hero-overlay"></div>
      <div className="text-center text-neutral-content hero-content">
        <div className="max-w-md">
          <h1 className="mb-5 font-bold text-5xl">
            Welcome to image slider of Rajshahi City!
          </h1>
          <p className="mb-5">
            This web app allows you to showcase a collection of images in a
            dynamic and engaging way. The images will transition smoothly
            through a user-controlled slider, creating a visually appealing
            presentation.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
