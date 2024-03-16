import { getThemeConfig } from '@/themes';
import { GiFoodTruck } from 'react-icons/gi';
import { BsBook } from 'react-icons/bs';
import { HiUserGroup } from 'react-icons/hi';
import { Fragment } from 'react';
import React from 'react';
import Link from 'next/link';
import nl2br from 'nl2br';
import { postToURL } from '@/components/payfast/payfast';
const theme = getThemeConfig();
import { connect } from 'react-redux';
const icons = {
  'food-truck': GiFoodTruck,
  book: BsBook,
  'user-group': HiUserGroup,
};
const imageBlock = (config) => (
  <div
    className={`bg-[url('/images/${theme.themeName}/${config.image}')] bg-cover h-full `}
  />
);
const multiTextBlock = (config) => (
  <div className='h-full px-8 py-8 text-center md:text-left'>
    {config.content.map((item) => (
      <React.Fragment key={item.title}>
        <h2 className={theme?.section?.header?.class}>{item.title}</h2>
        <p
          className=' text-base/loose text-2xl md:text-2xl lg:text-2xl dark:text-gray-900 mb-4'
          dangerouslySetInnerHTML={{ __html: nl2br(item.text) }}
        />
      </React.Fragment>
    ))}
    {config.cta && (
      <Link
        type='button'
        href={config.cta.link}
        className={theme?.nav?.ctaClass}
      >
        {config.cta.title}
      </Link>
    )}
  </div>
);

const articleElementBuilders = {
  'image-block': imageBlock,
  'multi-text-blocks': multiTextBlock,
};

const articleBuilder = ({ config }) => {
  console.log('config', config);
  const { elements } = config;
  console.log('elements', elements);
  return (
    <div className='container'>
      <div className={`grid md:grid-cols-${elements?.length} grid-cols-1`}>
        {elements?.map((e) => {
          return articleElementBuilders[e.type](e);
        })}
      </div>
    </div>
  );
};

const spaBuilder = ({ config }) => {
  return (
    <div
      className={`h-full w-full px-10 py-10 px-10 text-center md:text-left ${config?.bg} ${config?.fg} text-center`}
    >
      <h2 className=' text-6xl mb-4 text-center mt-4 font-extrabold leading-none tracking-tight dark:text-gray-900'>
        {config?.title}
      </h2>
      <br />
      <div
        className={`grid md:grid-cols-${config?.elements?.length} grid-cols-1 flex flex-col justify-center items-center section-image `}
      >
        {config.elements.map((e) => {
          const Icon = icons[e.icon];
          return (
            <div
              key={e.title}
              className='py-4 flex flex-col justify-center items-center text-center'
            >
              <div className='flex flex-col justify-center items-center'>
                <Icon size='5em' />
                <h2 className='text-4xl py-4 font-bold'>{e.title}</h2>
              </div>

              <p className='text-2xl text-base/loose md:text-4xl'>{e.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
const heroBuilder = ({ config }) => {
  return (
    <div
      className={`container h-full bg-[url('/images/${theme?.themeName}/${config.image}')] home-page-header flex flex-col justify-center items-center`}
    >
      <div className='grid md:grid-cols-2 grid-cols-1 flex flex-col justify-center items-center'>
        <div className='h-full px-8 py-8 text-center md:text-left'>
          <h1 className='white-text text-red-700 text-4xl mb-4 font-extrabold leading-none tracking-tight text-gray-900 dark:text-gray-900'>
            {config?.header}
          </h1>
          {config?.subHeader && (
            <h2 className='white-text text-2xl mb-4 font-extrabold leading-none tracking-tight text-gray-900 dark:text-gray-900'>
              {config?.subHeader}
            </h2>
          )}
          <p className='white-text text-base/loose text-2xl md:text-2xl lg:text-2xl dark:text-gray-100 mb-6'>
            {config?.text}
          </p>
          <Link href={config.cta.link} className={theme?.heroButton?.class}>
            {config.cta.title}
          </Link>
        </div>
      </div>
    </div>
  );
};

const fullWidthTextBlock = ({ config }) => (
  <div key={`section-${config.title}`}>
    <h1 class='max-w-lg text-3xl font-semibold leading-normal text-gray-900 dark:text-gray-900 mb-2'>
      {config?.title}
    </h1>
    <div
      class='text-left text-2xl dark:text-gray-400 mt-2 mb-12'
      dangerouslySetInnerHTML={{ __html: nl2br(config?.text) }}
    />
  </div>
);

const centerWidthTextBlock = ({ config }) => (
  <div key={`section-${config.title} `} className='max-w-2xl mx-auto p-4'>
    <h1 class='text-3xl font-semibold leading-normal text-gray-900 dark:text-gray-900 mb-2'>
      {config?.title}
    </h1>
    <div
      class='text-left text-2xl dark:text-gray-400 mt-2 mb-12'
      dangerouslySetInnerHTML={{ __html: nl2br(config?.text) }}
    />
  </div>
);

const PayFastButton = ({ config, data, theme }) => {
  return (
    <button
      className={theme?.colors?.button?.primary?.class}
      onClick={() => postToURL(process.env.NEXT_PUBLIC_PAYFAST_URL, data)}
    >
      {config.title}
    </button>
  );
};

const CheckBox = ({ config, data, theme }) => {
  return (
    <div className='bg-white p-8 rounded-lg w-44 h-44 shadow-md max-w-md w-full flex items-center justify-center flex-col'>
      <svg
        className='text-green-500 w-20 h-20 mx-auto'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M5 13l4 4L19 7'
        />
      </svg>
    </div>
  );
};

const CheckBoxCenter = ({ config, data, theme }) => {
  return (
    <div className='w-full flex flex-col items-center justify-center'>
      <div className='bg-white p-8 rounded-full border border-green-500 shadow-md w-44 h-44 flex items-center justify-center flex-col'>
        <svg
          className='text-green-500 w-20 h-20 mx-auto'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M5 13l4 4L19 7'
          />
        </svg>
      </div>
    </div>
  );
};

const Cross = ({ config, data, theme }) => {
  return (
    <div className='bg-white p-8 w-44 h-44 rounded-lg shadow-md max-w-md w-full flex items-center justify-center flex-col'>
      <svg
        className='text-red-500 w-20 h-20 mx-auto'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M6 18L18 6M6 6l12 12'
        />
      </svg>
    </div>
  );
};

const CrossCenter = ({ config, data, theme }) => {
  return (
    <div className='w-full flex flex-col items-center justify-center'>
      <div className='bg-white p-8 rounded-full border border-red-500 shadow-md w-44 h-44 flex items-center justify-center flex-col'>
        <svg
          className='text-red-500 w-20 h-20 mx-auto '
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M6 18L18 6M6 6l12 12'
          />
        </svg>
      </div>
    </div>
  );
};

const LoginButton = ({ config, theme }) => {
  return (
    <Link href='/login' className={theme?.colors?.button?.primary?.class}>
      {config.title}
    </Link>
  );
};

const builders = {
  article: articleBuilder,
  'spa-block': spaBuilder,
  hero: heroBuilder,
  checkbox: CheckBox,
  'checkbox-center': CheckBoxCenter,
  cross: Cross,
  'cross-center': CrossCenter,
  'space-above': ({ config }) => <div className={`h-${config.size}`} />,
  'space-below': ({ config }) => <div className={`h-${config.size}`} />,
  'full-width-text-block': fullWidthTextBlock,
  'center-width-text-block': centerWidthTextBlock,
  'payfast-button': ({ config, data, theme }) => (
    <PayFastButton config={config} data={data} theme={theme} />
  ),
  'payfast-button-center-width': ({ config, data, theme }) => (
    <div className='max-w-2xl mx-auto p-4'>
      <PayFastButton config={config} data={data} theme={theme} />
    </div>
  ),
  'login-button': ({ config, theme }) => (
    <LoginButton config={config} theme={theme} />
  ),
  'login-button-center-width': ({ config, theme }) => (
    <div className='max-w-2xl mx-auto p-4'>
      <LoginButton config={config} theme={theme} />
    </div>
  ),
};

const Artifacts = ({ items, theme }) => {
  const Built = items.map((a) => {
    return builders[a.type]({ config: a, theme });
  });
  return Built;
};

const ArtifactsThatRequireData = ({ items, data, theme }) => {
  const Built = items.map((a, i) => {
    return builders[a.type]({ config: a, data, theme });
  });
  return Built;
};

const mapStateToProps = (state) => {
  return {
    theme: state.theme,
  };
};

export const ArtifactsWithData = connect(mapStateToProps)(
  ArtifactsThatRequireData
);
export default connect(mapStateToProps)(Artifacts);
