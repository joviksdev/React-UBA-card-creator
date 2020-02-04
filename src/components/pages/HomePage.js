import React, { Fragment } from 'react';
import Form from '../card/form/Form';
import Card from '../card/uba';
import Preview from '../Preview';
import SelectCard from '../SelectCard';
import ClosePreview from '../ClosePreview';
import setTitle from '../setTitle';

const HomePage = () => {
  // Set Page Title
  setTitle('Card Creator App');
  return (
    <Fragment>
      <ClosePreview />
      <SelectCard />
      <Card />
      <Form />
      <Preview />
    </Fragment>
  );
};

export default HomePage;
