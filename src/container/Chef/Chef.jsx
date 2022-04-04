import React from 'react'

import './Chef.css'
import { subHeading } from '../../components'
import { images } from '../../constants'
const Chef = () => (
  <div className="app__bg ap__wrapper section__padding">
    <div className="ap__wraper_img app__wrapper_img">
      <img src={images.chef} alt="chef_image" />
    </div>

    <div className="app__wrapper_info">
      <subHeading title="Chef Word" />
      <h1 className="headtext__cormorant">What We Believe In</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote_image" />
          <p className="p__opensans">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit
            .auctor sit
          </p>
        </div>
        <p className="p__opensans">
          auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit.
          Nulla scelerisque scelerisque congue ac consequat, aliquam molestie
          lectus eu. Congue iaculis integer curabitur semper sit nunc.
        </p>
      </div>
    </div>

    <div className="app__chef-sign">
      <p>Kevin Luo</p>
      <p className="p__opensans">chef & Founder</p>
      <img src={images.sign} alt="sign_image" />
    </div>
  </div>
)

export default Chef
