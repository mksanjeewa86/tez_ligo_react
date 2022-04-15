import config from '../utils/config';

export const incrementData = ({ Tezos }) => {
  return async (dispatch, getState) => {
    try {
      dispatch({ type: "LOADING" });
      const contract = await Tezos.wallet.at(config.contractAddress);

      const op = await contract.methods.increment(1).send();
      await op.confirmation();
      const newStorage = await contract.storage();
      dispatch({ type: "SET_VALUE", payload: newStorage.toNumber() });
      dispatch({ type: "NOT_LOADING" });
    } catch (e) {
      console.log(e);
    }
  }
}

export const decrementData = ({ Tezos }) => {
  return async (dispatch, getState) => {
    try {
      dispatch({ type: "LOADING" });
      const contract = await Tezos.wallet.at(config.contractAddress);

      const op = await contract.methods.decrement(1).send();
      await op.confirmation();
      const newStorage = await contract.storage();
      dispatch({ type: "SET_VALUE", payload: newStorage.toNumber() });
      dispatch({ type: "NOT_LOADING" });
    } catch (e) {
      console.log(e);
    }
  }
}

export const resetData = ({ Tezos }) => {
  return async (dispatch, getState) => {
    try {
      dispatch({ type: "LOADING" });
      const contract = await Tezos.wallet.at(config.contractAddress);

      const op = await contract.methods.reset().send();
      await op.confirmation();
      const newStorage = await contract.storage();
      dispatch({ type: "SET_VALUE", payload: newStorage.toNumber() });
      dispatch({ type: "NOT_LOADING" });
    } catch (e) {
      console.log(e);
    }
  }
}