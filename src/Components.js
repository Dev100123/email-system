import React from "react";
import "./App.css";
import logo from "./logo/University_Federico_II_Logo.svg.png";
import image1 from "./logo/semanto.png";
import image2 from "./logo/rajib.png";
// UniversityLogo component
const UniversityLogo = () => {
  return (
    <div className="logo-container">
      <img src={logo} alt="University Logo" className="logo-image" />
      <h1 className="university-name">
        Università degli Studi di Napoli Federico II
      </h1>
    </div>
  );
};

const Description = () => {
  return (
    <div className="description-container">
      <p className="description-text">
        Welcome to our project, the Email Monitoring System. We have built our
        own machine learning model using various techniques such as Decision
        Tree, Bidirectional LSTM, Transformer, and BERT models. We have also
        created an executable file for easy download and program execution.
      </p>
      <h2 className="subsection-title">Email Monitoring System</h2>
    </div>
  );
};

// DownloadButton component
const DownloadButton = () => {
  return (
    <div className="download-button-container">
      <a
        href="https://drive.google.com/file/d/1aDOKwxiMYmY2mde7gmHP2PkGRidYN56t/view?usp=drive_link"
        download
        className="download-button"
      >
        Download
      </a>
    </div>
  );
};

// FriendsList component

const friendsData = [
  {
    name: "Semanto Mondal",
    field: "Data Science",
    email: "s.mondal@studenti.unina.it",
    imageUrl: image1,
  },
  {
    name: "Rajib Chandra Ghosh",
    field: "Data Science",
    email: "r.chandraghosh@studenti.unina.it",
    imageUrl: image2,
  },
];

const FriendsList = () => {
  return (
    <div className="friends-list-container">
      {friendsData.map((friend, index) => (
        <div className="card mb-1" style={{ maxWidth: "400px" }} key={index}>
          <div className="row g-0 ">
            <div className="col-md-4">
              <img
                src={friend.imageUrl}
                className="img-fluid rounded-start"
                alt="Friend"
              />
            </div>
            <div className="col-md-8 border border-light-subtle">
              <div
                className="card-body bg-black"
                style={{ width: "100%", height: "100%" }}
              >
                <h5 className="card-title text-white">{friend.name}</h5>
                <p className="card-text text-white">{friend.field}</p>
                <p className="card-text">
                  <small className="text-white">{friend.email}</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="footertext">
      <div className="">
        <span className="">
          Email Monitoring System | Università degli Studi di Napoli Federico II
        </span>
        <br />
        <span className="footertext">copyright@2024</span>
      </div>
    </footer>
  );
};

// ScrollContainer component
const ScrollContainer = () => {
  return (
    <div className="scroll-container">
      <Description />
      <DownloadButton />
      <FriendsList />
      <Footer />
    </div>
  );
};

// App component
const App = () => {
  return (
    <div className="app-container">
      <UniversityLogo />
      <ScrollContainer />
    </div>
  );
};

export default App;
