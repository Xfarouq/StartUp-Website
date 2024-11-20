const Home = () => {
  return (
    <div className="head">
      <header>
        <div className="hd-img">
          <img
            src="/assets/images/HeaderImg.png"
            alt="Header-Banner"
            className="hd"
          />
          <div className="header-text">
            <h3>WELCOME</h3>
            <h2>Lorem ipsum dolor sit amet consectetur </h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit
              nemo hic quos, ab, dolor aperiam nobis cum est eos error ipsum,
              voluptate culpa nesciunt delectus iste?
            </p>
            <button className="header-button">Explore</button>
          </div>
        </div>
      </header>
      <div className="partner">
        <div className="partner-txt">
          <h3>PARTNERS</h3>
          <h2>Lorem Ipsum Dolor</h2>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="part-img">
          <img src="/assets/images/Google.svg" alt="Google Logo" />
          <img src="/assets/images/Microsoft.svg" alt="Microsoft Logo" />
          <img src="/assets/images/Airbnb.svg" alt="Airbnb Logo" />
          <img src="/assets/images/Facebook.svg" alt="Facebook Logo" />
          <img src="/assets/images/spotify.svg" alt="Spotify Logo" />
        </div>
        <button className="part-btn">Learn More</button>
      </div>
      <div className="chat">
        <img src="/assets/images/header2.png" alt="Section Banner 1" />
        <div className="chat-text">
          <h2>Lorem ipsum dolor sit amet consectetur </h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit
            nemo hic quos, ab, dolor aperiam nobis cum est eos error ipsum,
            voluptate culpa nesciunt delectus iste?
          </p>
          <button className="chat-btn">Learn More</button>
        </div>
      </div>
      <div className="study">
        <img src="/assets/images/header3.png" alt="Section Banner 2" />
        <div className="study-text">
          <h2>Lorem ipsum dolor sit amet consectetur </h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit
            nemo hic quos, ab, dolor aperiam nobis cum est eos error ipsum,
            voluptate culpa nesciunt delectus iste?
          </p>
          <button className="chat-btn">Learn More</button>
        </div>
      </div>
      <div className="team">
        <div className="team-txt">
          <h2>TEAM</h2>
          <h3>Our Talents</h3>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="cards">
          <div className="card">
            <img src="/assets/images/talent1.png" alt="Team Member Images" />
            <h2>Peg Legge</h2>
            <p>CEO</p>
          </div>
          <div className="card">
            <img src="/assets/images/talent2.png" alt="Team Member Images" />
            <h2>Richard Guerra</h2>
            <p>CTO</p>
          </div>
          <div className="card">
            <img src="/assets/images/talent3.png" alt="Team Member Images" />
            <h2>Alexandra Stolz</h2>
            <p>DESGINER</p>
          </div>
          <div className="card">
            <img src="/assets/images/talent4.png" alt="Team Member Images" />
            <h2>Janet Bray</h2>
            <p>DEVELOPER</p>
          </div>
        </div>
        <button className="team-btn">Learn More</button>
      </div>
    </div>
  );
};

export default Home;
