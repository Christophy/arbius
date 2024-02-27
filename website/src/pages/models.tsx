import Link from 'next/link';
import Image from 'next/image';
import Layout from '@/components/Layout';
import ModelCard from '@/components/ModelCard';
import Config from '@/config.json';

const stats = [
  { name: 'Registered models', value: '1' },
  { name: 'Daily active users', value: '1+' },
  { name: 'Generations', value: '300+' },
]

const models = [
  {
    name: 'Kandinsky 2',
    role: 'Image Generation',
    description: 'text2img model trained on LAION HighRes and fine-tuned on internal datasets',
    imageUrl: '/models/kandinsky2.jpg',
    cid: Config.models.kandinsky2.params.cid,
    contracts: Config.models.kandinsky2.contracts,
  },
  {
    name: 'Stable Video Diffusion',
    role: 'Image to Video Generation',
    description: 'Takes in a still image as a conditioning frame, and generates a video from it',
    imageUrl: '/models/stable_video_diffusion.jpg',
    cid: Config.models.stable_video_diffusion.params.cid,
    contracts: Config.models.stable_video_diffusion.contracts,
  },
  /*
  {
    name: 'Anything V3',
    role: 'Image Generation',
    description: 'high-quality, highly detailed anime style stable-diffusion',
    imageUrl: '/models/anythingv3.jpg',
    cid: Config.models.anythingv3.params.cid,
    contracts: Config.models.anythingv3.contracts,
  },
  {
    name: 'Zeroscope V2 XL',
    role: 'Video Generation',
    description: 'Multi-stage text-to-video generation',
    imageUrl: '/models/zeroscope.jpg',
    cid: Config.models.zeroscopev2xl.params.cid,
    contracts: Config.models.zeroscopev2xl.contracts,
  },
  */
]

export default function ModelsPage() {
  return (
    <Layout title="Models" full>
      <main>

        <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
          <Image
            src="/models-hero.jpg"
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
                DeFi for AI
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                Model creators, you are now first class citizens. Set your own fees (or none) for invocations of your models and allow people to invest in them as tokenized assets.
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                Generations using your model will be performed by a decentralized worldwide network of solvers competing to serve them the fastest.
              </p>
            </div>
            <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
                <Link href="https://docs.arbius.ai/register-model">
                  <button className="outline p-2 px-4">
                    Register Model <span aria-hidden="true">→</span>
                  </button>
                </Link>
              </div>
              {/*
              <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
                {stats.map((stat) => (
                  <div key={stat.name} className="flex flex-col-reverse">
                    <dt className="text-base leading-7 text-gray-300">{stat.name}</dt>
                    <dd className="text-2xl font-bold leading-9 tracking-tight text-white">{stat.value}</dd>
                  </div>
                ))}
              </dl>
              */}
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-7xl p-4 mt-10">
          <ul
            role="list"
            className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20 md:grid-cols-2 lg:grid-cols-4 lg:mx-0 lg:max-w-none lg:gap-x-8 xl:col-span-2"
          >

            { models.map((model) => (
              <ModelCard
                key={model.name}
                {...model}
                contracts={model.contracts}
              />
            )) }

          </ul>
        </div>
      </main>
    </Layout>
  )
}
