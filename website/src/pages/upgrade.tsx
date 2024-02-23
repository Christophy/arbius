import { useState, useEffect } from 'react';
import { ethers } from 'ethers'

import Link from 'next/link';
import Image from 'next/image';
import Layout from '@/components/Layout';
import TokenBalance from '@/components/TokenBalance';
import IncreaseAllowanceButton from '@/components/IncreaseAllowanceButton';
import Config from '@/config.json';

export default function UpgradePage() {
  const [tokenBalance, setTokenBalance] = useState(ethers.BigNumber.from(0));
  const [needsAllowance, setNeedsAllowance] = useState(false);


  return (
    <Layout title="Upgrade" enableEth={true} full>
      <TokenBalance
        show={false}
        update={setTokenBalance}
        token={Config.baseTokenAddress as `0x${string}`}
      />
      <TokenBalance
        show={false}
        update={setTokenBalance}
        token={Config.baseTokenAddress as `0x${string}`}
      />

      <main>


        <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
          <Image
            src="/upgrade-hero.jpg"
            alt=""
            className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
            fill
          />
          <div
            className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
            aria-hidden="true"
          >
            <div
              className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
            />
          </div>
          <div
            className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
            aria-hidden="true"
          >
            <div
              className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
            />
          </div>
          <div className="mx-auto max-w-7xl px-6 lg:px-8 nightwind-prevent-block">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                Upgrade AIUS
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                Arbius tokens have been upgraded. Deposit your v1 tokens and you will receive new AIUS in exchange, 1:1. You will also become eligible for an upcoming airdrop.
              </p>
            </div>
            <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">

                <div className="relative mt-2 rounded-md shadow-sm">
                  <input
                    type="text"
                    value={tokenBalance.toString()}
                    autoComplete="off"
                    readOnly={true}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-0 sm:max-w-xs sm:text-sm sm:leading-6 bg-white dark:bg-[#26242d]"
                  />
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                    <span className="text-gray-500 sm:text-sm" id="price-currency">
                      AIUS V1
                    </span>
                  </div>
                </div>



                <IncreaseAllowanceButton
                  updateNeedsAllowance={setNeedsAllowance}
                  token={Config.baseTokenAddress as `0x${string}`}
                  to={Config.engineAddress as `0x${string}`}
                  />
                {! needsAllowance && (
                  <button className="outline py-1 px-4 bg-black bg-opacity-50 hover:bg-opacity-60 transition">
                    Upgrade <span aria-hidden="true">→</span>
                  </button>
                )}
              </div>
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 my-2 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
                <div className="relative mt-2 rounded-md shadow-sm">
                  <input
                    type="text"
                    value={tokenBalance.toString()}
                    autoComplete="off"
                    readOnly={true}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-0 sm:max-w-xs sm:text-sm sm:leading-6 bg-white dark:bg-[#26242d]"
                  />
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                    <span className="text-gray-500 sm:text-sm" id="price-currency">
                      AIUS V2
                    </span>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  )
}
