

import React, { Component } from 'react'
// imported 3rd party libraries
import { Helmet } from 'react-helmet'

// Custom components and hooks
import useSiteMetadata from '../Hooks/useMetadata.js'

// styles
import "../../styles/main.scss"


const Layout = ({ children }) => {
    const { title, description } = useSiteMetadata()
    return (
        <div>
            <Helmet>
                <title>{title}</title>
                <meta name="description" content={description} />
            </Helmet>
            <div>
                {children}
            </div>
        </div>
    )
}

export default Layout
