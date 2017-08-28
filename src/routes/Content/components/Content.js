import React from 'react'
// import PropTypes from 'prop-types'
//
// export const Counter = ({ counter, increment, doubleAsync , qqz }) => {
//     console.log('this--', this)
//     return(
//       <div style={{ margin: '0 auto' }} >
//     <h2>Counter: {counter}</h2>
//       qqz
//     <button className='btn btn-primary' onClick={increment}>
//       Increment
//     </button>
//
//     {' '}
//     <button className='btn btn-secondary' onClick={doubleAsync}>
//       Double (Async)
//     </button>
//   </div>
// )}
//
// Counter.propTypes = {
//   counter: PropTypes.number.isRequired,
//   increment: PropTypes.func.isRequired,
//   doubleAsync: PropTypes.func.isRequired,
// }
//
// export default Counter

export class Content extends React.Component {
    constructor (props) {
        super(props)
        // this.state = {
        //     name: '',
        //     surname: '',
        //     email: ''
        // }
        // this.handleChangeEmail = this.handleChangeEmail.bind(this)
        // this.handleChangePassword = this.handleChangePassword.bind(this)
        // this.handleSubmitForm = this.handleSubmitForm.bind(this)
        // this.qqz = false
    }
    componentDidMount () {
        // this.props.getUser()
    }
    handleChangeEmail (event) {
        // this.setState({ email: event.target.value })
    }
    handleChangePassword (event) {
        // this.setState({ password: event.target.value })
    }
    handleSubmitForm (event) {
        // event.preventDefault()
        // let formData = Object.assign({}, this.state)
    }

    render() {
        // this.state.name = this.props.name
        // this.state.surname = this.props.surname
        // this.state.email = this.props.email
        console.log('this-- ', this);


        return (
            <div style={{margin: '0 auto'}}>
                <h2> x5 {this.payload}</h2>
                <button className='btn btn-secondary' onClick={this.props.increment}></button>
                <button className='btn btn-secondary' onClick={this.props.multiply}></button>
                <button className='btn btn-secondary' onClick={this.props.myFunction}> ok `</button>
            </div>
        )
    }
}

export default Content