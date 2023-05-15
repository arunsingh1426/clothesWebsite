import React from "react";
function Header() {
    // const [isopen, setIsopen] = useState(true)
    // const [toggleWidth, SettoggleWidth] = useState()


    // SettoggleWidth={
    //     width:"250px"
    // }

   

  return (
    <div className="container">
      <div className="d-flex justify-content-between align-items-center mt20 mb20">
        <div>
          {/* <div style={toggleWidth} class="sidepanel"> */}
          <div class="sidepanel">
            <a href="#home" className="closebtn" >
              &times;
            </a>
            <a href="#Home">About</a>
            <a href="#Home">Services</a>
            <a href="#Home">Clients</a>
            <a href="#Home">Contact</a>
          </div>
          {/* onClick={toggle} */}
          <button className="openbtn">
           <img src="/img/header/1.svg" alt="Toggle Icon" />
          </button>
        </div>
        <div>Logo Here</div>
        <div className="d-flex headerCallBack align-items-center">
            <img src="/img/header/search.svg" alt="search" />
            <img src="/img/header/like.svg" alt="like" />
            <img src="/img/header/beg.svg" alt="beg" />
            <img src="/img/header/user.svg" alt="user" />
        </div>
      </div>
    </div>
  );
}

export default Header;
