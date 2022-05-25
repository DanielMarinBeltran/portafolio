import React from 'react';
import Header from '../../components/Header/Header';
import InConstruction from '../../components/InConstruction/InConstruction';
import Footer from '../../components/Footer/Footer';

function InConstructionPage() {
  return (
    <div style={{backgroundColor:'#eeeeee'}}>
      <Header/>
      <InConstruction/>
      <Footer/>
    </div>
  )
}

export default InConstructionPage