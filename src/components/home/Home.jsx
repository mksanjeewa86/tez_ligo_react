import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContractData } from '../../actions/walletActions';

export const Home = ({ Tezos }) => {
  const dispatch = useDispatch();
  const stors = useSelector((state) => {
    return state.contractStorage;
  });
  const loading = useSelector((state) => {
    return state.loader.loading;
  });
  useEffect(() => {
    dispatch(fetchContractData({ Tezos }));
  }, [Tezos, dispatch]);
  return <>{!loading && <div>{stors}</div>}</>;
};
