import React from 'react'

import './SpecialMenu.css'
import { subHeading, MenuItem } from '../../components'
import { images, data } from '../../constants'

const SpecialMenu = () => (
  <div className="app__specialMenu flex_center section__padding" id="menu">
    <div className="app__specialMenu-title">
      <subHeading title="Menu that fits your pallette" />
      <h1 className="headtext__cormorant">Today&apos;s Special</h1>
    </div>

    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_wine flex__center">
        <p className="app__specialMenu_menu_heading">Wine and Beer</p>
        <div className="app__specialMenu-menu_menu_items">
          {data.wines.map((wine, index) => (
            <p>{wine.title}</p>
          ))}
        </div>
      </div>
    </div>

    <div app__specialMenu-menu_img>
      <img src={images.menu} alt="menu_img" />
    </div>

    <div className="app__specialMenu-menu_cocktails  flex__center">
      <p className="app__specialMenu-menu_heading">Cocktails</p>
      <div className="app__specialMenu_menu_items">
        {data.cocktails.map((cocktail, index) => (
          <MenuItem
            key={cocktail.title + index}
            title={cocktail.title}
            price={cocktail.price}
            tags={cocktail.tags}
          />
        ))}
      </div>
    </div>

    <div style={{ marginTop: '15px' }}>
      <button type="button" className="custom__button"></button>
    </div>
  </div>
)

export default SpecialMenu
