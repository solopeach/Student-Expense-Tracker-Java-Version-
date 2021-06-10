import PropTypes from 'prop-types'

const Button = ({ color, text, pooClick}) => {
    
    // event listener, prints 'click' when button clicked
    //const onClickers = () => {
   //     console.log('click');
  //  }
    
  // we added a onClickers function in Header or if you want
  // buttons to do diff things, then do like onClick = {var}
  // and make a var function in Header.js, to match it

  // we are passing in the pooClick function defined in Header.js, which
  // runs when button onClick event happens (button is clicked)
    return <button 
    onClick={pooClick}
    style={{ backgroundColor: color}}
    className='btn'>{text}</button>
}

Button.defaultProps = {
    color: 'steelblue',
}

// restricting the type of the props
// .isRequired (title is required?)
Button.propTypes = {
    text: PropTypes.string.isRequired,
    pooClick: PropTypes.func,
}

export default Button