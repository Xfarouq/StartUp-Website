const NavBar = () => {
  return (
    <header>
      <div className="navbar">
        <div className="logo">
          <img src="/assets/images/Logo.svg" alt="LOGO" />
          <h3>Start</h3>
        </div>
        <div className="ham">
          <img src="/assets/images/Hamburger.png" alt="Hamburger Icon" />
        </div>
      </div>
      <img src="/assets/images/HeaderImg" alt="Header-Banner" />
      <div className="header-text">
        <h3>WELCOME</h3>
        <h2>Lorem ipsum dolor sit amet consectetur </h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam nobis cum est eos error ipsum, voluptate culpa nesciunt delectus iste?</p>
        <button className="header-button">Explore</button>
      </div>
    </header>
  );
};

export default NavBar;
