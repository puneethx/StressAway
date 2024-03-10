import React from 'react'
import "./Journal.scss"

const Journal = () => {
    return (
        <div className='journal'>
            <div className="injournal">
                <div className="title">
                    <input type="text" />
                </div>
                <div className="content">
                    <textarea></textarea>
                </div>
                <div className='post'>
                    <button>Post it</button>
                </div>
            </div>
        </div>
    )
}

export default Journal