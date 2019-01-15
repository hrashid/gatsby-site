import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

const IndexPage = ({data}) => {
  console.log(data.allNodePage);
  return(
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <h1>Hiss people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  );
};

export const query = graphql`

  query {
  allNodePage(
    filter: {id:{eq: "7fcdba7f-1ca6-5338-90fd-ec215e8767ef"}}
  ) {
    edges {
      node {
        id
        title
        body {
          value
        }
      }
    }
  }
}
`;

export default IndexPage
