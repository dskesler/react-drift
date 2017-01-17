import React from 'react'
import styleable from 'react-styleable'
import styles from './nav-styles'

//import css from './nav.css'

const { func, bool } = React.PropTypes

function getPrevClassName(props) {
  return props.hasPrevious ? styles.prev : styles.prevHidden
}

function getNextClassName(props) {
  return props.hasNext ? styles.next : styles.nextHidden
}

function Nav(props) {
  return (
    <div style={styles.root}>
      <button style={getPrevClassName(props)} onClick={props.onPrevious}>&#10094;</button>
      <button style={getNextClassName(props)} onClick={props.onNext}>&#10095;</button>
    </div>
  )
}

Nav.propTypes = {
  onPrevious: func.isRequired,
  onNext: func.isRequired,
  hasPrevious: bool,
  hasNext: bool
}

export default Nav
