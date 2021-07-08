import React from "react";
import { Link } from 'gatsby';
import Layout from '../components/layout'
const IndexPage = () => {
  return (
    <Layout>
      <h1>Gatsby Presentation</h1>
      <h2>Frameworks Used : React , Gatsby , Graphql </h2>
      <p>Want to Know about Gatsby ? <Link to="/about">Know more</Link> </p>
      <p>Official Gatsby Docs  :<Link to="https://www.gatsbyjs.com/docs/" target="_blank">Know more</Link> </p>
      <p>Reach us at :<Link to="/contact">Contact</Link> </p>
    </Layout>
  )
  // return (
  //   <div>
  //     <Header />
  //     <h1>Gatsby Presentation</h1>
  //     <h2>Frameworks Used : React , Gatsby , Graphql </h2>
  //     <p>Want to Know about Gatsby ? <Link to="/about">Know more</Link> </p>
  //     <p>Official Gatsby Docs  :<Link to="https://www.gatsbyjs.com/docs/" target="_blank">Know more</Link> </p>
  //     <p>Reach us at :<Link to="/contact">Contact</Link> </p>
  //     <Footer />
  //   </div>
  // )
}
//look from 1:01:30 of video

export default IndexPage;
