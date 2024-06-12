import React from 'react'
// import './spinner.css'
const Spinner = () => {
    return (
        <div>
             <button class="btn btn-warning custom " type="button" disabled>
                <span class="spinner-border spinner-border-sm" aria-hidden="true"></span>
                <span role="status">Loading...</span>
             </button>
        </div>
    )
}

export default Spinner