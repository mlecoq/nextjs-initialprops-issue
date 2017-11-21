import React from 'react';
import Link from 'next/link';

const Index = () => (
  <div>
    Small index ... but great link here :{' '}
    <Link href={'/details?name=testname'} prefetch>
      <a>the great link</a>
    </Link>
  </div>
);

export default Index;
