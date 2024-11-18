import React from 'react'
import Marquee from 'react-fast-marquee'

const BreakingNews = () => {
    return (
        <div className="flex pt-5 pb-10">
            <button className="btn btn-secondary">Breaking News</button>
            <Marquee pauseOnHover={true} speed={20}>
                I can be a React component, multiple React components, or just some text.
            </Marquee>
        </div>
    )
}

export default BreakingNews