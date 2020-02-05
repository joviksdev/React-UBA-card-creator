import React, { useState, useContext, useEffect } from 'react';
import cardContext from '../../../context/cardContext';

const Form = () => {
  // Prevent defaul form action
  const onSubmit = e => e.preventDeafult();

  // Use context
  const {
    state: { preview },
    setUpdate,
    flipCard,
    reverseFlip
  } = useContext(cardContext);

  const [user, setUser] = useState({
    holderName: '',
    cardNumber: '',
    expireDate: '',
    backDigit: '',
    error: {}
  });

  // Check For input

  let input = (name, value) => {
    let error = '';

    // Card Holder Name
    if (name === 'holderName') {
      const value_array = value.split(' ');
      value_array.forEach(value => {
        if (!isNaN(value)) {
          error = {
            [name + 'Error']: true
          };
        }
      });
    }

    // Card Number
    if (name === 'cardNumber') {
      const num_array = [...value];
      num_array.forEach(num => {
        if (isNaN(num) || num_array.length > 16) {
          error = {
            [name + 'Error']: true
          };
        }
      });
      value = value.slice(0, 16);
    }

    // Expire Date
    const month = /[0|1][0-9]/;
    const year = /[0|1|2|3][0-9]/;

    if (name === 'expireDate') {
      const num_array = value.split('/');
      num_array.forEach(num => {
        if (isNaN(num) || num.length > 2) {
          error = {
            [name + 'Error']: true
          };
        }
      });

      // Month

      if (!month.test(num_array[0]) || parseInt(num_array) > 12) {
        error = {
          [name + 'Error']: true
        };
      }

      //Year

      if (!year.test(num_array[1]) || parseInt(num_array[1]) > 31) {
        error = {
          [name + 'Error']: true
        };
      }

      value = value.slice(0, 5);
    }

    // Back Detail

    if (name === 'backDigit') {
      const num_array = [...value];
      num_array.forEach(num => {
        if (isNaN(num) || num_array.length > 3) {
          error = {
            [name + 'Error']: true
          };
        }
      });
      value = value.slice(0, 4);
    }

    setUser({ ...user, [name]: value, error });
  };

  //handle onchange event
  const onChange = e => {
    const { name, value } = e.target;
    input(name, value);
  };

  // Handle Update

  useEffect(
    () => {
      setUpdate(user);
    },
    // eslint-disable-next-line
    [user]
  );

  // Handle Card Flip
  const setRotate = e => {
    if (e.target.name === 'backDigit') {
      flipCard();
    } else {
      reverseFlip();
    }
  };

  // Set Style

  const setLabelColor = name => {
    if (name) {
      return { color: 'rgb(253, 30, 30)' };
    } else if (name.length < 1) {
      setUser({ ...user, error: '' });
    }
  };

  const setBorderColor = name => {
    if (name) {
      return { borderBottom: '2px solid rgb(253, 30, 30)' };
    } else if (name.length < 1) {
      setUser({ ...user, error: '' });
    }
  };

  const margin = () => ({
    margin: preview ? '0 auto' : '7rem auto 0'
  });

  return (
    <form className='container form-group' onSubmit={onSubmit} style={margin()}>
      <p className='form-detail'>
        <strong>Front of Card Detail</strong>
      </p>
      <div className='form-control'>
        <input
          style={user.error.holderNameError && setBorderColor(user.holderName)}
          type='text'
          name='holderName'
          className='name box input-field'
          required
          value={user.name}
          onFocus={setRotate}
          onChange={onChange}
        />
        <label
          style={user.error.holderNameError && setLabelColor(user.holderName)}
          htmlFor='name'
        >
          {user.error.holderNameError
            ? 'Please enter a valid name(Surname Othername, Max: 24 character)'
            : 'Name of Card Holder(Max: 24 characters)'}
        </label>
      </div>
      <div className='form-control'>
        <input
          style={user.error.cardNumberError && setBorderColor(user.cardNumber)}
          type='number'
          name='cardNumber'
          className='number box input-field'
          required
          value={user.cardNumber}
          onFocus={setRotate}
          onChange={onChange}
        />
        <label
          style={user.error.cardNumberError && setLabelColor(user.cardNumber)}
          htmlFor='cardNumber'
        >
          {user.error.cardNumberError
            ? 'Please enter a valid number(Max: 16 character)'
            : 'Card Number(Max: 16 characters)'}
        </label>
      </div>
      <div className='form-control'>
        <input
          style={user.error.expireDateError && setBorderColor(user.expireDate)}
          type='text'
          name='expireDate'
          className='date box input-field'
          required
          value={user.expireDate}
          onFocus={setRotate}
          onChange={onChange}
        />
        <label
          style={user.error.expireDateError && setLabelColor(user.expireDate)}
          htmlFor='expireDate'
        >
          {user.error.expireDateError
            ? 'Please enter a valid expire date(format mm/yy)'
            : 'Expire Date(mm/yy)'}
        </label>
      </div>
      <p className='form-detail'>
        <strong>Back of Card Detail</strong>
      </p>
      <div className='form-control'>
        <input
          style={user.error.backDigitError && setBorderColor(user.backDigit)}
          type='number'
          max='3'
          name='backDigit'
          className='three-digit-number input-field box'
          required
          value={user.backDigit}
          onChange={onChange}
          onFocus={setRotate}
        />
        <label
          style={user.error.backDigitError && setLabelColor(user.backDigit)}
          htmlFor='threeDegitNumber'
        >
          Three Digit Number
        </label>
      </div>
    </form>
  );
};

export default Form;
