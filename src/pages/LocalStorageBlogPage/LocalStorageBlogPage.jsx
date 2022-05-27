import React from 'react'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import LocalStorageBlog from '../../components/Articles/ArticlesInfo/LocalStorageBlog'

function LocalStorageBlogPage() {
  return (
    <div style={{backgroundColor:'#eeeeee'}}>
      <Header />
      <LocalStorageBlog />
      <Footer />
    </div>
  )
}

export default LocalStorageBlogPage