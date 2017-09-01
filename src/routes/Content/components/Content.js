import React from 'react'
import {myFunction} from "../modules/content";

export class Content extends React.Component {
    constructor (props) {
        super(props)
        //this.myFunction = this.myFunction.bind(this);
         this.state = {
             }

        this.press = this.press.bind(this)
    }
    componentDidMount () {
        //this.props.getUser()
    }
    handleChangeEmail (event) {
        //this.setState({ email: event.target.value })
    }
    handleChangePassword (event) {
        //this.setState({ password: event.target.value })
    }
    handleSubmitForm (event) {
        event.preventDefault()
        // let formData = Object.assign({}, this.state)
    }

    press () {
        this.props.myFunction();
        console.log('this.props.state-- ', this.props.state);
        //setState({label: this.props.state})
    }

    render () {
        return (
            <div>
                <h2>Result: {this.props.state}</h2>
                <button onClick={this.press}>Multiply x2</button>
            </div>
        )
    }
}

export default Content
