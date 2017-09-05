import React from 'react'
import {addNews} from "../modules/addnews";

// class Addnews extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             value: 'Please write an essay about your favorite DOM element.'
//         };
//
//         this.handleChange = this.handleChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }
//
//     handleChange(event) {
//         this.setState({value: event.target.value});
//     }
//
//     handleSubmit(event) {
//         alert('An essay was submitted: ' + this.state.value);
//         event.preventDefault();
//     }
//     render(){return(<teaxtarea rows="10" cols="45" name="text"  value={this.state.value}>akrjakjfrkaj</teaxtarea>)}
// }


export class Addnews extends React.Component {
    constructor (props) {
        super(props)
        //this.myFunction = this.myFunction.bind(this);
         this.state = {
            value: 'fjahwefajiwhfji'
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
                <button onClick={this.press}>Add news</button>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name:
                        <textarea value={this.state.value} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default Addnews
