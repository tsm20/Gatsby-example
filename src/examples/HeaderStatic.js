import React from "react"
import { StaticQuery, graphql } from "gatsby"

const ComponentName = () => (
  <StaticQuery
    query={graphql`
      {
        site {
          info: siteMetadata {
            author
            data
            description
            title
            person {
              name
              age
            }
          }
        }
      }
    `}
    render={(data) => <h4>{data.site.info.description}</h4>}
  ></StaticQuery>
)

export default ComponentName
