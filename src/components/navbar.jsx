const Navbar = () => {
  return (
    <div className="bg-base-100 navbar">
      <div className="flex-1">
        <a className="text-xl btn btn-ghost">Photo Slider App</a>
      </div>
      <div className="flex-none gap-4 px-2">
        <button className="btn btn-primary">About me</button>
        <button className="btn btn-outline">Sign up</button>
      </div>
    </div>
  );
};

export default Navbar;
