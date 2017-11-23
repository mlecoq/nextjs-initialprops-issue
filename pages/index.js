import React from 'react';
import Link from 'next/link';

const Index = () => (
  <div>
    <div>
      Small index ... but great link here :
      <Link href={'/details?name=testname'} prefetch>
        <a>the great link</a>
      </Link>
    </div>
    <div>
      Exemple with two parameters :
      <Link href={'/twoparams?name=testname&family_name=ploup'} prefetch>
        <a>2 params link</a>
      </Link>
    </div>
  </div>
);

export default Index;
