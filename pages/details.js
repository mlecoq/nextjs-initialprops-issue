import React from 'react';
import Link from 'next/link';

const Details = ({ name }) => <div>Here is my .... name ! {name}</div>;

Details.getInitialProps = async ({ query: { name } }) => {
  return { name };
};

export default Details;
