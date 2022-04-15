import image from '../../assets/images/image.jpeg';

export const ProjectDetails = () => {
  return (
    <div className="w-full mb-2">
      <a
        href="/#"
        class="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <img
          class="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
          src={image}
          alt=""
        />
        <div class="flex flex-col justify-between p-4 leading-normal">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Aurora is a decentralized donation platform
          </h5>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            When your project gets a donation, the donor can get an Aurora card
            as a receipt of the donation. That is automatically operated by
            aurora protocol. An Aurora card of different colors will be issued
            with a random chance.
          </p>
          <div class="flex flex-col items-center pb-10">
            <div class="flex mt-4 space-x-3 lg:mt-6">
              <a
                alt=""
                href="/#"
                class="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Read more
              </a>
              <a
                alt=""
                href="/#"
                class="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-gray-900 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"
              >
                Message
              </a>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};
