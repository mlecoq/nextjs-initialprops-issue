import React from 'react';
import Link from 'next/link';

const Details = ({ name, family_name }) => (
  <div>
    Here is my .... name ! {name} and my family name {family_name}
  </div>
);

Details.getInitialProps = ({ query: { name, family_name } }) => {
  return { name, family_name };
};

export default Details;
