import React from 'react';
import {images} from '../../constants';
import {SubHeading} from '../../components';

import './Header.css';

const Header = () => (
  <div className='app__header app__wraper section__padding' id='home'>
    <div className="app__wrapper_info">

      <SubHeading title="Chase the new flavour"/>

      <h1 className='app__header-h1'>The Key to Fine Dining</h1>
      <p className="app__opensans" style={{margin: "2rem 0", color:'white'}}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit ad eius labore dolorum. Suscipit tenetur dolores corrupti quae consequatur nesciunt repudiandae praesentium natus, fuga amet voluptates dolorem, quod assumenda odit! </p>
      <button type='button' className='custom__button'>Explore Menu</button>
    </div>

    <div className='app__wrapper_img'>
      <img src={images.welcome} alt="header img" />
    </div>
  </div>
);

export default Header;
