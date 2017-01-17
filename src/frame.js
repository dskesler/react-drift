import React from 'react';
//import styleable from 'react-styleable'

//import css from './frame.css'
import styles from './frame-styles';

export default function Frame({children}) {
  return <div style={styles.root}>{children}</div>
}

