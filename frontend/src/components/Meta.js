import React from 'react';
import { Helmet } from 'react-helmet';

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content='{description}' />
      <meta name='keywords' content='{keywords}' />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: 'Welcome To Sri Lankan Unique Rides',
  description: 'Quality products for the best prices',
  keywords: 'Clothing, Accessories',
};

export default Meta;
