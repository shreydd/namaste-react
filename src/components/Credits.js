import React from "react";

class Credits extends React.Component {

    constructor(props) {
        super(props)
    }


    render () {
        return (
            <>
                <div>
                    credits: namaste react, {this.props.resApiFrom} public api, github api for profiles, formik
                </div>
            </>
        )
    }
}

export default Credits;