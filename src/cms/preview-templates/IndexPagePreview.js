import React from 'react'
import PropTypes from 'prop-types'
import { IndexPageTemplate } from '../../templates/index-page'

const IndexPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS();
  console.log(data.section5);
  console.log(data.section5.image.publicURL);

  if (data) {
    return (
      <IndexPageTemplate
        title={data.title}
        seo={data.seo || {}}
        section1={data.section1 || {}}
        section2={data.section2 || { blurbs: []}}
        section3={data.section3 || { blurbs: []}}
        section4={data.section4 || {}}
        section5={data.section5 || {}}
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