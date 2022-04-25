import React from 'react'
import avatar from './images/avatar-michelle.jpg'
import share from './images/icon-share.svg'
import pinterest from './images/icon-pinterest.svg'
import facebook from './images/icon-facebook.svg'
import twitter from './images/icon-twitter.svg'
function myFunction() {
  const span = document.querySelector('span')

  if (span.className === '') {
    span.classList.toggle('active')
  } else {
    span.classList.remove('active')
    // console.log(span)
  }
}
const Right = () => {
  return (
    <>
      <div className="grid-content-container">
        <div className="grid-content margin">
          <h2>
            Shifts the overall look and feel by adding these wonderful touches
            to furniture in your home
          </h2>
          <p>
            Ever been in a room and felt something was missing ? Perhaps it felt
            slightly bare and uninviting. I've got some simple tips to help you
            make any room feel complete.
          </p>
        </div>
        <div className="avatar margin">
          <img className="avatar-image" src={avatar} alt="avatar" />
          <div className="name-container">
            <h3>Michelle Appleton</h3>
            <p>28 June 2020</p>
          </div>

          <img
            className="share"
            onClick={myFunction}
            src={share}
            alt="share-icon"
          />
          <span>
            <img className="links facebook" src={facebook} alt="" />
            <img className="links twitter" src={twitter} alt="" />
            <img className="links pinterest" src={pinterest} alt="" />
          </span>
        </div>
      </div>
    </>
  )
}

export default Right
