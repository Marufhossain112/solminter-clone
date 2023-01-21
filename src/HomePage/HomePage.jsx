import React from "react";
import "./HomePage.css";

const HomePage = () => {
  return (
    <>
      <div className="flex flex-col w-full md:flex-row md:min-h-screen">
        {/* <div className="flex md:hidden">
          <div className="relative flex items-center justify-between w-full px-4 py-4 bg-white shadow-2xl md:px-8">
            <a
              className="ml-auto text-lg font-medium tracking-widest text-gray-900 uppercase rounded-lg dark-mode:text-white focus:outline-none focus:shadow-outline"
              href="#/"
            >
              <img
                className="w-28"
                src="https://solminter.com/static/media/logo.d6c0c14e.svg"
                alt="solminter logo"
              />
            </a>
            <button className="absolute flex items-center justify-center p-2 overflow-hidden rounded-full left-2">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 1024 1024"
                className="text-xl"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z"></path>
              </svg>
            </button>
          </div>
        </div> */}
        <div className="hidden md:block">
          <div className="fixed inset-0 flex flex-col flex-shrink-0 w-full h-full text-gray-700 bg-white md:left-0 md:inset-y-0 md:w-72 ">
            <div className="relative flex flex-row items-center justify-between flex-shrink-0 px-4 py-4 md:px-8">
              {/* <button className="absolute flex items-center justify-center p-2 overflow-hidden rounded-full md:hidden left-2">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 1024 1024"
                  className="text-xl"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path>
                </svg>
              </button> */}
              <a
                className="ml-auto text-lg font-medium tracking-widest text-gray-900 uppercase rounded-lg md:m-auto"
                href="#/"
              >
                <img
                  className="w-28"
                  src="https://solminter.com/static/media/logo.d6c0c14e.svg"
                  alt="solminter logo"
                />
              </a>
            </div>
            <div className="px-5 mt-3 text-center">
              <button
                className="w-full px-3 py-2 m-auto overflow-hidden text-sm font-bold tracking-wide text-white uppercase border-4 rounded-full wallet-bg "
                style={{ minHeight: "2.6rem" }}
              >
                Connect Wallet
              </button>
            </div>
            <nav className="flex-grow px-5 pb-4 md:block md:pb-0">
              <div className="pt-4 pb-4 border-gray-100 ">
                <a
                  target="_self"
                  className="group menu-section flex items-center px-5 py-3 "
                  href="#/token-management"
                >
                  <img
                    className="mr-3"
                    src="https://solminter.com/static/media/icon_manage.61fedfe2.svg"
                    alt="icon"
                  />
                  <span className="text-sm menu-text">Token management</span>
                </a>
                <a
                  target="_self"
                  className="group menu-section flex items-center px-5 py-3 "
                  href="#/apply-for-ido"
                >
                  <img
                    className="mr-3"
                    src="https://solminter.com/static/media/icon_apply_ido.06ebbe72.svg"
                    alt="icon"
                  />
                  <span className="text-sm menu-text">Apply for IDO</span>
                </a>
                <a
                  target="_self"
                  className="group menu-section flex items-center px-5 py-3 "
                  href="#/art"
                >
                  <img
                    className="mr-3"
                    src="https://solminter.com/static/media/icon_nft.d8e9f1af.svg"
                    alt="icon"
                  />
                  <span className="text-sm menu-text">NFT</span>
                </a>
                <a
                  target="_blank"
                  className="group menu-section flex items-center px-5 py-3 "
                  href="#/documentation"
                >
                  <img
                    className="mr-3"
                    src="https://solminter.com/static/media/documentation_1.7ec4e17e.svg"
                    alt="icon"
                  />
                  <span className="text-sm menu-text">Documentation</span>
                </a>
              </div>
            </nav>
            <div className="text-center">
              <p className="mb-3 text-tiny">Connect with us</p>
              <div className="flex justify-center mb-5">
                <img
                  className="p-3 mr-3 rounded-full cursor-pointer bg-labelbg"
                  src="https://solminter.com/static/media/twitter.3caba749.svg"
                  alt="twitter"
                />
                <img
                  className="p-3 rounded-full cursor-pointer bg-labelbg"
                  src="https://solminter.com/static/media/telegram.5328486d.svg"
                  alt="twitter"
                />
              </div>
              <div className="flex items-center justify-between p-3 border-t border-gray-100 text-tiny ">
                <img
                  className=""
                  src="https://solminter.com/static/media/builtOn.1297d358.svg"
                  alt="solana"
                />
                <p>© Solminter 2021</p>
              </div>
            </div>
          </div>
        </div>
        <main className="w-full px-4 py-6 md:px-8 md:ml-72 bg-imbg">
          <div className="flex flex-wrap items-center justify-center w-full h-full">
            Please connect your wallet.
          </div>
        </main>
      </div>
    </>
  );
};

export default HomePage;
