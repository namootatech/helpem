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

export const FeatureSection = ({ features }) => (
  <div className='bg-gray-100 py-12'>
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
      <div className='lg:text-center'>
        <h2 className='text-base text-indigo-600 font-semibold tracking-wide uppercase'>
          Features
        </h2>
        <p className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl'>
          How Helpem Works
        </p>
        <p className='mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto'>
          Discover the key features that make Helpem the perfect platform for
          affiliate marketing and donation collection.
        </p>
      </div>

      <div className='mt-10'>
        <dl className='space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10'>
          {features.map((feature) => (
            <div key={feature.name} className='relative'>
              <dt>
                <div className='absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white'>
                  {feature.icon}
                </div>
                <p className='ml-16 text-lg leading-6 font-medium text-gray-900'>
                  {feature.name}
                </p>
              </dt>
              <dd className='mt-2 ml-16 text-base text-gray-500'>
                {feature.description}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  </div>
);

export const TestimonialSection = ({ testimonials }) => (
  <div className='bg-white py-16 lg:py-24'>
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
      <div className='lg:text-center'>
        <h2 className='text-base text-indigo-600 font-semibold tracking-wide uppercase'>
          Testimonials
        </h2>
        <p className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl'>
          What Our Users Say
        </p>
      </div>
      <div className='mt-10'>
        <div className='space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10'>
          {testimonials.map((testimonial, index) => (
            <div key={index} className='bg-gray-100 rounded-lg p-6 shadow-md'>
              <p className='text-gray-600 italic mb-4'>"{testimonial.quote}"</p>
              <div className='flex items-center'>
                <img
                  className='h-12 w-12 rounded-full mr-4'
                  src={testimonial.avatar}
                  alt={testimonial.name}
                />
                <div>
                  <p className='text-gray-900 font-semibold'>
                    {testimonial.name}
                  </p>
                  <p className='text-gray-600'>{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export const PricingSection = ({ plans }) => (
  <div className='bg-gray-100 py-12'>
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
      <div className='lg:text-center'>
        <h2 className='text-base text-indigo-600 font-semibold tracking-wide uppercase'>
          Pricing
        </h2>
        <p className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl'>
          Choose the Right Plan for You
        </p>
      </div>
      <div className='mt-10 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8'>
        {plans.map((plan) => (
          <div
            key={plan.name}
            className='relative p-8 bg-white border border-gray-200 rounded-2xl shadow-sm flex flex-col'
          >
            <div className='flex-1'>
              <h3 className='text-xl font-semibold text-gray-900'>
                {plan.name}
              </h3>
              {plan.mostPopular && (
                <p className='absolute top-0 py-1.5 px-4 bg-indigo-500 text-white rounded-full transform -translate-y-1/2'>
                  Most popular
                </p>
              )}
              <p className='mt-4 flex items-baseline text-gray-900'>
                <span className='text-5xl font-extrabold tracking-tight'>
                  ${plan.price}
                </span>
                <span className='ml-1 text-xl font-semibold'>/month</span>
              </p>
              <p className='mt-6 text-gray-500'>{plan.description}</p>
              <ul className='mt-6 space-y-6'>
                {plan.features.map((feature) => (
                  <li key={feature} className='flex'>
                    <span className='text-indigo-500 mr-3'>✓</span>
                    <span className='text-gray-500'>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <a
              href='#'
              className={`mt-8 block w-full py-3 px-6 border border-transparent rounded-md text-center font-medium ${
                plan.mostPopular
                  ? 'bg-indigo-500 text-white hover:bg-indigo-600'
                  : 'bg-indigo-50 text-indigo-700 hover:bg-indigo-100'
              }`}
            >
              Get started
            </a>
          </div>
        ))}
      </div>
    </div>
  </div>
);

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
    <h1 className='max-w-lg text-3xl font-semibold leading-normal text-gray-900 dark:text-gray-900 mb-2'>
      {config?.title}
    </h1>
    <div
      className='text-left text-2xl dark:text-gray-400 mt-2 mb-12'
      dangerouslySetInnerHTML={{ __html: nl2br(config?.text) }}
    />
  </div>
);

const centerWidthTextBlock = ({ config }) => (
  <div key={`section-${config.title} `} className='max-w-2xl mx-auto p-4'>
    <h1 className='text-3xl font-semibold leading-normal text-gray-900 dark:text-gray-900 mb-2'>
      {config?.title}
    </h1>
    <div
      className='text-left text-2xl dark:text-gray-400 mt-2 mb-12'
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
