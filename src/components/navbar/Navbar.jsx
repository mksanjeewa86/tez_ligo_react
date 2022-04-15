import '../../index.css';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { connectWallet, disconnectWallet } from '../../actions/walletActions';
import {
  incrementData,
  decrementData,
  resetData,
} from '../../actions/contractActions';

export const Navbar = ({ Tezos, wallet, setTezos }) => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => {
    return state.walletConfig.user;
  });

  const handleConnectWallet = async () => {
    dispatch(connectWallet({ Tezos, wallet }));
  };

  const handleDisconnectWallet = async () => {
    dispatch(disconnectWallet({ wallet, setTezos }));
  };
  const increment = async () => {
    dispatch(incrementData({ Tezos }));
  };
  const decrement = async () => {
    dispatch(decrementData({ Tezos }));
  };
  const reset = async () => {
    dispatch(resetData({ Tezos }));
  };

  return (
    <nav className="bg-gray-800 h-14 flex items-center px-10 justify-between">
      <div className="flex items-start">
        {/* <a
          href="https://docs.auroradao.org/"
          className="font-bold text-white pr-6"
        >
          aurora
        </a> */}
        <a
          href="/"
          className="cursor-pointer text-gray-300 px-4 py-2 text-sm font-semibold rounded-sm hover:bg-gray-700 hover:text-gray-200"
        >
          Home
        </a>
        {/* <a
          href="/projects"
          className="cursor-pointer text-gray-300 px-4 py-2 text-sm font-semibold rounded-sm hover:bg-gray-700 hover:text-gray-200"
        >
          Projects
        </a> */}
        {/* <a
          href="/about"
          className="cursor-pointer text-gray-300 px-4 py-2 text-sm font-semibold rounded-sm hover:bg-gray-700 hover:text-gray-200"
        >
          About
        </a> */}
      </div>
      <button
        onClick={increment}
        className="bg-blue-500 w-60 px-6 py-2 rounded-lg text-xs font-semibold text-white cursor-pointer hover:bg-blue-600"
      >
        increment
      </button>
      <button
        onClick={decrement}
        className="bg-green-500 w-60 px-6 py-2 rounded-lg text-xs font-semibold text-white cursor-pointer hover:bg-green-600"
      >
        decrement
      </button>
      <button
        onClick={reset}
        className="bg-pink-500 w-60 px-6 py-2 rounded-lg text-xs font-semibold text-white cursor-pointer hover:bg-pink-600"
      >
        reset
      </button>
      <div className="flex justify-end">
        <button
          onClick={
            selector.userAddress === ''
              ? handleConnectWallet
              : handleDisconnectWallet
          }
          className="bg-red-500 px-6 py-2 rounded-sm text-xs font-semibold text-white cursor-pointer hover:bg-red-600"
        >
          💳{' '}
          {selector.userAddress !== ''
            ? selector.userAddress.slice(0, 4) +
              '...' +
              selector.userAddress.slice(
                selector.userAddress.length - 4,
                selector.userAddress.length,
              )
            : 'Connect'}
        </button>
      </div>
    </nav>
  );
};
