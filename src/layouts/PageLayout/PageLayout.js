import React from 'react'
import { IndexLink, Link } from 'react-router'
import PropTypes from 'prop-types'
import './PageLayout.scss'

// export const PageLayout = ({ children }) => (
//   <div className='container text-center'>
//     <h1>React Redux Starter Kit</h1>
//     <IndexLink to='/' activeClassName='page-layout__nav-item--active'>Home</IndexLink>
//     {' · '}
//     <Link to='/counter' activeClassName='page-layout__nav-item--active'>Counter</Link>
//       {' · '}
//       <Link to='/content' activeClassName='page-layout__nav-item--active'>Content</Link>
//       {' · '}
//       <Link to='/somekey' activeClassName='page-layout__nav-item--active'> Add News </Link>
//       {' · '}
//       <Link to='/auth' activeClassName='page-layout__nav-item--active'> Sign up </Link>
//     <div className='page-layout__viewport'>
//       {children}
//     </div>
//   </div>
// )
// PageLayout.propTypes = {
//   children: PropTypes.node,
// }
export class PageLayout extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            islog: ''
        }
    }

    componentDidMount () {

    }
    static isUserAuthenticated() {
        return localStorage.getItem('token') !== null;
    }
    componentWillMount () {
        if(PageLayout.isUserAuthenticated() !== true)
        {
            this.setState({islog: 'SignUp/LogIn'})
        }
        else {this.setState({islog: 'Profile'})}
    }
    handleChangeEmail (event) {
        //this.setState({ email: event.target.value })
    }
    handleChangePassword (event) {
        //this.setState({ password: event.target.value })
    }

    handleChange(type,event) {
        //this.setState({[type]: event.target.value})
    }

    render () {
        return(
            <div className='container text-center'>
                     <h1>React Redux Starter Kit</h1>
                       <Link to='/content' activeClassName='page-layout__nav-item--active'>Content</Link>
                       {' · '}
                       <Link to='/somekey' activeClassName='page-layout__nav-item--active'> Add News </Link>
                       {' · '}
                        <Link to='/auth' activeClassName='page-layout__nav-item--active'> {this.state.islog} </Link>
                       {/*{ !PageLayout.isUserAuthenticated() && <Link to='/auth' activeClassName='page-layout__nav-item--active'> Sign up </Link> }*/}
                       {/*{  PageLayout.isUserAuthenticated() && <Link to='/auth' activeClassName='page-layout__nav-item--active'> Profile </Link> }*/}
                     <div className='page-layout__viewport'>
                         {this.props.children}
                     </div>
                   </div>
        )
    }
}

export default PageLayout
