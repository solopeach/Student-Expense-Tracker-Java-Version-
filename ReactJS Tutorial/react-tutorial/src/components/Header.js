import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'
import reactDom from 'react-dom'
// Button file in same folder as Header.js

// now Header knows what props.title is... bc its passed in...

// reusing components illustrated by buttons and diff props
// set params to 'props': retrieves props from App.js in <Header />
const Header = (props) => {

    const onClicker = () => {
     console.log("Click");
    }

    const onClicks = () => {
        console.log("Clicked! :D");
    }


    return (
        <header>
            <h1>{props.title}</h1>
            <h2>{props.name} {props.house}</h2>
            <Button pooClick = {onClicker} color = 'green' text = 'Hello' />
            <Button pooClick = {onClicks} text = 'Add' />
        </header>
    )
}

// or pass in ({title}) and call {title}
//const Header = ({ title }) => {
//    return (
//        <header>
//            <h1>{title}</h1>
//       </header>
//    )
//}

Header.defaultProps = {
    name: 'Roni',
    title: 'Task Tracker',
}

// restricting the type of the props
// .isRequired (title is required?)
Header.propTypes = {
    title: PropTypes.string.isRequired,
    house: PropTypes.number,
}

// CSS in JS: <h1 style = {headingStyle}>
// const headingStyle = {
 //    color: 'red', 
 //    backgroundColor: 'black'
// }

export default Header

