import React from "react";

class ProfileClass extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            count: 0,
            count2: 2,
            profileURL: 'https://avatars.githubusercontent.com/u/47713047?v=4'
        }
        console.log('constructor')
    }


    componentDidMount() {
        console.log("did mount")
        this.timer = setInterval(() => {
            console.log('interval here')
        }, 1000)
    }

    componentDidUpdate() {
        console.log("update")
    }

    componentWillUnmount() {
        console.log('unmounting')
        clearInterval(this.timer);
    }


    render() {
        console.log('render')
        return (
            <>
                <img src={this.state.profileURL} alt='shreyas profile photo' />
                <h2>{this.props.name}</h2>
                <p>{this.state.count}</p>
                <p>{this.state.count2}</p>
                <button onClick={() => this.setState({
                    count: 2,
                    count2: 0
                })} >flip count</button>
            </>
        )
    }
}

export default ProfileClass;