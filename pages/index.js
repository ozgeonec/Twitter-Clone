import React from 'react'

import Layout from '../components/layout/layout'
import Tweet from '../components/tweet'

function HomePage() {
  return (
    <Layout>
      <Tweet
        name="ozge"
        slug="ozgeonec"
        datetime={new Date('2020-08-22')}
        text={`sschasascjaskpasxpasoxslasox
      
dcscccccccccccccccssssssssss`}
      />
      <Tweet
        name="ozge"
        slug="ozgeonec"
        datetime={new Date('2020-10-22')}
        text={`sfhdgasffffffffffffffffffffffffffc
            
            bfbsvs
            bfb`}
      />
    </Layout>
  )
}

export default HomePage
