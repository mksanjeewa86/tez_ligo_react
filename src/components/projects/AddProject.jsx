// import {
//   incrementData,
//   decrementData,
//   resetData,
// } from '../../actions/contractActions';
import { useSelector } from 'react-redux';
import { useState } from 'react';

export function AddProject({ Tezos }) {
  const [file, setFile] = useState(undefined);
  const selector = useSelector((state) => {
    return state.walletConfig.user;
  });
  // const dispatch = useDispatch();
  // const clickIncrement = (event) => {
  //   event.preventDefault();
  //   dispatch(incrementData({ Tezos }));
  // };
  // const clickDecrement = (event) => {
  //   event.preventDefault();
  //   dispatch(decrementData({ Tezos }));
  // };
  // const clickReset = (event) => {
  //   event.preventDefault();
  //   dispatch(resetData({ Tezos }));
  // };
  const changeFile = (event) => {
    setFile(URL.createObjectURL(event.target.files[0]));
  };
  return (
    <div className="bg-red-50 rounded-lg w-full p-8 lg:w-1/2">
      <h2 className="text-2xl font-semibold text-gray-700 text-center">
        Aurora
      </h2>
      <p className="text-xl text-gray-600 text-center">Create new project</p>
      <div class="mt-5 relative h-16 rounded-lg border-dashed border-2 border-blue-700 bg-gray-100 flex justify-center items-center">
        <div class="absolute">
          <div class="flex flex-col items-center">
            {' '}
            <span class="block text-blue-400 font-normal">
              {!file ? 'upload your NFT image' : 'change NFT image'}
            </span>{' '}
          </div>
        </div>{' '}
        <input
          type="file"
          accept="image/*"
          onChange={changeFile}
          className="h-full w-full opacity-0 cursor-pointer"
        />
      </div>
      {file && (
        <div className="mt-3 w-full flex justify-center">
          <img className="w-96 h-96" src={file} alt={file} />
        </div>
      )}
      <div className="mt-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Project title
        </label>
        <input
          className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded-lg shadow appearance-none focus:outline-none focus:shadow-outline"
          type="text"
        />
        <p class="text-xs italic float-right mr-2">max 30 characters</p>
      </div>
      <div className="mt-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Project description
        </label>
        <textarea
          rows="3"
          className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded-lg shadow appearance-none focus:outline-none focus:shadow-outline"
        ></textarea>
        <p class="text-xs italic float-right mr-2">max 800 characters</p>
      </div>
      <div className="mt-4 mb-4 md:flex md:justify-between">
        <div className="mb-4 md:mr-2 md:mb-0 w-1/3">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            for="datetime"
          >
            End date/time
          </label>
          <input
            className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded-lg shadow appearance-none focus:outline-none focus:shadow-outline"
            id="datetime"
            type="datetime-local"
          />
        </div>
        <div className="mb-4 md:mr-2 md:mb-0 w-1/3">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            for="donations_limit"
          >
            Donations limit
          </label>
          <input
            className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded-lg shadow appearance-none focus:outline-none focus:shadow-outline"
            id="donations_limit"
            type="number"
          />
        </div>
      </div>
      <button className="w-full bg-green-500 px-3 py-2 text-sm leading-tight text-white border rounded-lg shadow appearance-none focus:outline-none focus:shadow-outline">
        Preview aurora card
      </button>
      <button
        disabled={selector.userAddress === '' ? 'disabled' : ''}
        onClick={() => window.alert('ok')}
        className={`${
          selector.userAddress === ''
            ? 'bg-gray-500 cursor-default'
            : 'bg-blue-500'
        } w-full mt-3 px-3 py-2 text-sm leading-tight text-white border rounded-lg shadow appearance-none focus:outline-none focus:shadow-outline disabled:bg-red-50`}
      >
        Publish project
      </button>
      {selector.userAddress === '' && (
        <p class="text-xs italic float-right mr-2 text-red-500">
          connect to the wallet before publish
        </p>
      )}
    </div>
    // <div>
    //   {selector.userAddress !== '' && (
    //     <form>
    //       <button
    //         onClick={clickIncrement}
    //         className="bg-green-500 px-6 py-2 rounded-sm text-xs font-semibold uppercase text-white cursor-pointer"
    //       >
    //         increment
    //       </button>
    //       <button
    //         onClick={clickDecrement}
    //         className="bg-blue-500 px-6 py-2 ml-3 rounded-sm text-xs font-semibold uppercase text-white cursor-pointer"
    //       >
    //         decrement
    //       </button>
    //       <button
    //         onClick={clickReset}
    //         className="bg-red-500 px-6 py-2 ml-3 rounded-sm text-xs font-semibold uppercase text-white cursor-pointer"
    //       >
    //         reset
    //       </button>
    //     </form>
    //   )}
    // </div>
  );
}
