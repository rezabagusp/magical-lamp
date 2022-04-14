import React from 'react';

import AppLayout from '../components/appLayout';
import SEO from '../components/seo';
import HomeScreen from '../screens';

const Home = () => (
  <>
    <SEO title="Home" />
    <AppLayout>
      <HomeScreen />
    </AppLayout>
  </>
);

export default Home;
