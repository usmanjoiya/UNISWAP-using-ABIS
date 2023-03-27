import React from "react"
import { useEthers } from '@usedapp/core';
import styles from './styles';
import  { uniswapLogo } from './assets';
import {Exchange, Loader, WalletButton} from './components';
import {usePools} from './hooks';

const App = () => {
  const { account } = useEthers();
  const [loading , pools] = usePools();

  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <header className={styles.header}>
          <img src={uniswapLogo} alt="uniswaplogo"
          className="w-16 h-16 object-contain"
          />
          <WalletButton />
        </header>
        <div className={styles.exchangeContainer}>
           <h1 className={styles.headTitle}>
             UniSwap 2.0
           </h1>
           <p className={styles.subTitle}>Exchanage Tokens In Seconds</p>

           <div className={styles.exchangeBoxWrapper}>
            <div className={styles.exchangeBox}>
               <div  className="pink_gradient"/>
               <div  className="blue_gradient"/>
               <div className={styles.exchange}>
                 { account ? (
                loading ? (
                <Loader title="Loading Pools, Please Wait"/>
                )  :  <Exchange pools= { pools }/>
                 
                ): <Loader title="Please Connect Your Wallet" />}
               </div>
            </div>
           </div>
        </div>
      </div>
    </div>
  )
}

export default App;