import React from 'react'
import {addNews} from "../modules/addnews";

export class Addnews extends React.Component {
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
        this.props.addNews();
        console.log('this.props.state-- ', this.props.state);
        //setState({label: this.props.state})
    }

    render () {
        return (
            <div>
                <div></div>
                <teaxtarea></teaxtarea>
                <button onClick={this.press}>Add news</button>
            </div>
        )
    }
}

export default Addnews
