/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >
        {/* <main>{children}</main> */}
        <div>
          <h1>Linguist turned software developer.</h1>

          <p style={{fontStyle:'italic'}}>After working as an interpreter and translator for 6 years, I was ready for a career change. After taking a Python course on EdX, I fell in love with programming. In March 2019 I joined a 4-month software engineering immersive at Fullstack Academy of Code, where I learned various technologies and frameworks. During this time, I deployed 2 team projects built on the NERD stack and a solo project that incorporated Twitter API, sentiment analysis, and D3.js.</p>

          <p>PROFICIENT: JavaScript, Express, Sequelize, React, Redux, React-Redux, Node.js, React-Native,
          PostgreSQL, Firebase NoSQL, Git</p>
          <p>KNOWLEDGEABLE: Jasmine, Mocha/Chai, CSS, HTML5</p>
          <p>SOME EXPERIENCE: Python, SQL, Ruby on Rails, Heroku, Travis CI/CD, D3.js </p>
        </div>
        {/* <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer> */}
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
