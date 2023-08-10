import React, { useState } from "react";
import ava from "../../img/Avatar.png"
import aval from "../../img/Rectangle 2.png"
import "./index.css"

const Home = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
    };  return (
    <div id="home">
      <div className="container">
        <div className="home">
          <center>
            <div href="" onClick={openModal} style={isModalOpen ? {display: "none"} : {display: "block"}}>
              <img src={ava} alt="" />
              <p>click to avatar</p>
            </div>
            {isModalOpen && (
                <div className="mod">
                <img src={aval} alt="" />
                <h1>Асылбек уулу Аскат</h1>
                <p>Открой по кнопке мой телеграм</p>
                <a href="https://t.me/salimbaevvv_1">Открыть</a>
                <button onClick={closeModal}>X</button>
            </div>
            )}
          </center>
        </div>
      </div>
    </div>
  );
};

export default Home;
