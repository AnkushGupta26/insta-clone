import React from 'react'
import '../style/components/bio.css'
export default function Bio() {
    return (
        <div className='container'>
            <div className="row justify-content-center mt-4">
                <div className="col-md-3  d-flex justify-content-center mr-4">
                    <img src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200"
                        alt="Avatar"
                        class="rounded-circle"
                        width="130px"
                        height="130px" />
                </div>
                <div className="col-md-6">
                    <div className="row">
                        <h3 className="mr-4">techchats</h3>
                        <button type="button" class="btn btn-primary btn-sm">Follow</button>
                    </div>
                    <div className="row"></div>
                    <div className="row"></div>
                </div>
            </div>
        </div>
    )
}
