import React from 'react'
import PropTypes from 'prop-types'
import { IndexPageTemplate } from '../../templates/index-page'

const IndexPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()
  console.log(data.image.publicURL);
  console.log(data.section3.heading.image.publicURL);
  console.log(data.section5.image.publicURL);

  if (data) {
    return (
      <IndexPageTemplate
        image={{
          publicURL: ""
        }}
        metaDescription={data.meta_description}
        metaTitle={data.meta_title} 
        section1={{
          heading: data.section1.heading,
          description: data.section1.description,
          image: {
            publicURL: ""
          } 
        }}
        section2={data.section2}
        section3={{
          blurbs: data.section3.blurbs,
          heading: {
            description: data.section3.heading.description,
            heading: data.section3.heading.heading,
            subheading: data.section3.heading.subheading,
            image: {
              publicURL: ""
            }
          }
        }}
        section4={data.section4 || {}}
        section5={{
          heading: data.section5.heading,
          subheading: data.section5.subheading,
          image: {
            publicURL: ""
          }
        }}
        path={data.path}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

IndexPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default IndexPagePreview
