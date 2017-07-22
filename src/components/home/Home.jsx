import React, { Component, PropTypes } from 'react';

import s from '../styles/index.scss';
import { Parallax } from 'react-parallax';

const pitches = [
  {
    img: '/images/docs.png',
    header: 'One API for Everything',
    paragraph: 'Data scientists spend 70% of thier time just formatting data, and this makes sense considering data sets can be any form of csv, json, pdf or other format. Zenow provides a single API to access all data so you save time.'
  },
  {
    img: '/images/table.png',
    header: 'Share your own Data',
    paragraph: 'Use schemas to structure datasets and ensure that all data is well formatted.'
  },
  {
    img: '/images/type.png',
    header: 'Always get the Right Format',
    paragraph: 'Upload your own dataset to Zenow and instantly make it accessible to anyone using the API.'
  }
];

export default class Home extends Component {
  static propTypes = {
    location: PropTypes.object,
    params: PropTypes.object
  }

  render() {
    return (
      <div>
        <div className={s.banner}>
          <video src="nyc.mp4" autoplay poster="posterimage.jpg" />
          <div key="title" className={s.centeredMessage + ' ' + s.largeHeader}>
            <h1>zenow</h1>
            <p>The most accessible data on this side of the Galaxy!</p>
            <form className={s.emailBox}>
              <input type="text" placeholder="Email" />
              <input type="submit" value="Get in Early" />
            </form>
          </div>
        </div>
        <div className={s.cards} />
        <div className={s.bannerSpacer} />
        {pitches.map((pitch) => {
          return (
            <div className={s.pitchArea}>
              <div className={s.pitchInner}>
                <img src={pitch.img} />
                <section>
                  <h2>{pitch.header}</h2>
                  <p>{pitch.paragraph}</p>
                </section>
              </div>
              <Parallax bgImage="images/background.png" strength={400}>
                <div className={s.parallaxSpacer} />
              </Parallax>
            </div>
          );
        })}
        <footer>
          <p>Join the Community</p>
          <form className={s.emailBox}>
            <input type="text" placeholder="Email" />
            <input type="submit" value="Get in Early" />
          </form>
        </footer>
      </div>
    );
  }
}
