import Web3 from 'web3';
import { useState, useEffect } from 'react';
import  { useConfig} from '@usedapp/core';

import { ROUTER_ADDRESS } from '../config';
import { getFactoryInfo, getRouterInfo } from '../utils';

import { Web3Provider } from '@ethersproject/providers';

export const loadPools = async (provideUrl) => {

    const provider = new Web3.providers.HttpProvider(provideUrl);
    const web3 = new Web3(provider);

    const routerInfo = await getRouterInfo (ROUTER_ADDRESS, web3);
    const factoryInfo = await getFactoryInfo(routerInfo.factory, web3);

    return factoryInfo.pairsInfo;

}
export const usePools = () => {

    const { readonlyChainId, readOnlyUrls} = useConfig();
    const [loading, setLoading] = useState(true);
    const [pools, setPools] = useState({});

    useEffect(() => {
       
        loadPools(readOnlyUrls[readonlyChainId])
        .then((pools)=>{
          setPools(pools);
          setLoading(false);
        })
         
    }, [readOnlyUrls, readonlyChainId]);

  return [loading, pools];

}