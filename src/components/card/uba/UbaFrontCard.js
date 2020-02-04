import React, { useContext } from 'react';

import bg from '../../../images/bg.jpg';
import uba_logo from '../../../images/UBA-logo.png';
import chip from '../../../images/chip.png';
import visa from '../../../images/visa.png';
import mastercard from '../../../images/mastercard.png';

import cardContext from '../../../context/cardContext';

const UbaCard = () => {
  const {
    state: { detail, rotate, card }
  } = useContext(cardContext);

  /* Handle User Detail from state */

  const { holderName, cardNumber, expireDate } = detail;

  // User Name
  let holder_name = '';

  if (holderName !== undefined) {
    const name_array = holderName.split(' ');
    name_array.forEach(name => {
      holder_name += `${name.charAt(0).toUpperCase()}${name.slice(1)} `;
    });
  }
  holder_name = holder_name.substr(0, 24);

  // Card Number
  let card_number = '';

  if (cardNumber !== undefined) {
    card_number += `${cardNumber.slice(0, 4)} ${cardNumber.slice(
      4,
      8
    )} ${cardNumber.slice(8, 12)} ${cardNumber.slice(12, 16)}`;
  }

  return (
    <div
      style={{ transform: rotate && 'rotateY(180deg)' }}
      className='card-front'
    >
      {card === 'master' && (
        <div className='master-card'>
          <img src={mastercard} alt='master-card' />
          <p>Electronic use only</p>
        </div>
      )}
      <img src={bg} alt='card-bg' className='card-bg' />
      <div className='card-item'>
        <div>
          <img src={uba_logo} alt='logo' className='bank-logo' />
          <div className='chip-debit'>
            <img src={chip} alt='card-chip' className='chip' />
            <p className='debit'>Debit</p>
          </div>
        </div>
        <div>
          <div className='card-number-container'>
            <p className='card-number'>{card_number}</p>
            <div>
              <div className='number-initial'>
                {cardNumber !== undefined && cardNumber.slice(0, 4)}
              </div>
              <div className='card-expire-date'>
                <p>
                  Expire
                  <br />
                  End of
                </p>
                <p className='card-date'>{expireDate && expireDate}</p>
              </div>
            </div>
          </div>

          <div className='name-logo'>
            <p className='card-holder-name'>{holder_name}</p>
            {card === 'visa' && (
              <img src={visa} alt='visa-logo' className='visa-logo' />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UbaCard;
