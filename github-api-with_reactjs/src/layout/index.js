import React, { Children } from 'react'

function Layout({Children}) {
    return (
        <section>
            <header>Header</header>
            {Children}
        </section>
    )
}

export default Layout
