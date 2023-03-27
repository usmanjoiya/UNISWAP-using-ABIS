import React from 'react'
import Styles from '../styles';
import { ethereumLogo } from '../assets';
import styles from '../styles';

const Loader = ({title}) => {
  return (
    <div className={styles.loader}>
      <img src={ethereumLogo}
      alt="Ethereum Logo"
      className={styles.loaderImg} />
      <p className={styles.loaderText}>{title}</p>
    </div>
  )
}

export default Loader