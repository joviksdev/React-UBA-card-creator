import React, { useContext } from 'react';

import bg from '../../../images/bg2.jpg';
import laptop from '../../../images/laptop.png';
import phone from '../../../images/phone.png';

import cardContext from '../../../context/cardContext';

const UbaBackCard = () => {
  const {
    state: { detail, rotate }
  } = useContext(cardContext);

  return (
    <div style={{ transform: rotate && 'rotateY(0)' }} className='card-back'>
      <img src={bg} alt='card' className='card-bg back-img' />
      <div className='card-item'>
        <div className='div'>
          <p className='tel'>
            tel: +23412808822, +2348002255822, +2347002255822 (Toll free in
            Nigeria)
          </p>
          <div className='black'></div>
          <div className='auth'>
            <p>authorised signature not valid unless signed</p>
            <p>gemelato sgp u11388990</p>
          </div>
          <div className='white'>
            <p className='three-digit'>
              {detail.backDigit !== undefined && detail.backDigit.slice(0, 3)}
            </p>
          </div>
          <div className='description'>
            <p>
              Use this card to enrol on UBA Online Banking platforms to manage
              your account, check balance, transfer money, pay bills, buy
              airtime and do much more
            </p>
            <div className='download'>
              <div className='image-phone-laptop'>
                <img src={phone} alt='phone' className='phone' />
                <img src={laptop} alt='laptop' className='laptop' />
              </div>
              <p>UBA Online Banking (Download from apps Stores</p>
            </div>
            <p>
              Email: cfc@ubagroup.com <br />
              www.ubagroup.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UbaBackCard;
