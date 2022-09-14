import React, { useState } from "react";
import "./Modal.css";
import portal from "../assets/portal.png";

export default function Modal() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  const [char, setChar] = useState(null);


  const handleSearch = () =>{
    var number = [Math.floor(Math.random() * 826)];
    fetch(`https://rickandmortyapi.com/api/character/${number}`)
    .then((response) => {
        if(response.status == 200){
            return response.json();
        }
    })
    .then((data) => {
        console.log(data)
        setChar(data)
        toggleModal();
    });
    
}


  return (
    <>
      <img src={portal} alt="" className="rotateCenter" onClick={handleSearch}/>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <img src={char.image} alt="" className="charImage" />
            <h2>{char.name} <span className="greyText"> ({char.species}, {char.status}) </span> </h2>
            <p>
            <span className="blackText">Gender:</span> {char.gender} <br/>
            <span className="blackText">Origin:</span> {char.origin.name} <br/>
            <span className="blackText">Location:</span> {char.location.name} <br/>
            </p>
            <button className="close-modal" onClick={toggleModal}>
              CLOSE
            </button>
          </div>
        </div>
      )}
      
    </>
  );
}