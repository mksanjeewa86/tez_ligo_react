import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navbar, Home, About, Projects, AddProject } from './components/index';
import Loading from './components/loader/Loading';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContractData, _walletConfig } from './actions/walletActions';
import { TezosToolkit } from '@taquito/taquito';
import { BeaconWallet } from '@taquito/beacon-wallet';
import {
  NetworkType,
  BeaconEvent,
  defaultEventCallbacks,
  ColorMode,
} from '@airgap/beacon-sdk';

const App = () => {
  const dispatch = useDispatch();
  const [Tezos, setTezos] = useState(
    new TezosToolkit('https://hangzhounet.smartpy.io/'),
  );
  const [wallet, setWallet] = useState(null);
  const loading = useSelector((state) => {
    return state.loader.loading;
  });
  useEffect(() => {
    (async () => {
      const wallet_instance = new BeaconWallet({
        name: 'Template',
        preferredNetwork: NetworkType.HANGZHOUNET,
        colorMode: ColorMode.LIGHT,
        disableDefaultEvents: false,
        eventHandlers: {
          [BeaconEvent.PAIR_INIT]: {
            handler: defaultEventCallbacks.PAIR_INIT,
          },
          [BeaconEvent.PAIR_SUCCESS]: {
            handler: (data) => {
              return data.publicKey;
            },
          },
        },
      });
      Tezos.setWalletProvider(wallet_instance);
      const activeAccount = await wallet_instance.client.getActiveAccount();
      if (activeAccount) {
        const userAddress = await wallet_instance.getPKH();
        const balance = await Tezos.tz.getBalance(userAddress);
        dispatch(
          _walletConfig({
            userAddress: userAddress,
            balance: balance.toNumber(),
          }),
        );
      }
      setWallet(wallet_instance);
    })();
  }, [Tezos, dispatch]);

  useEffect(() => {
    dispatch(fetchContractData({ Tezos }));
  }, [Tezos, dispatch]);

  return (
    <div className="min-h-screen">
      <Navbar Tezos={Tezos} setTezos={setTezos} wallet={wallet} />
      <div className="container pt-10 mx-auto">
        <div className="flex justify-center">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home Tezos={Tezos} />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route
                path="/new_project"
                element={<AddProject Tezos={Tezos} />}
              />
            </Routes>
          </BrowserRouter>
          {loading && <Loading />}
        </div>
      </div>
    </div>
  );
};

export default App;
