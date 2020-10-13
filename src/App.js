import React from 'react';

import Header from './components/Header'
import Layout from './components/Layout';
import Footer from './components/Footer'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Header></Header>
        <Layout></Layout>
        <Footer></Footer>
      </div>
    );
  }
}