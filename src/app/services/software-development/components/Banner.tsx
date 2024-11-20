import ServiceCommonBanner from '../../common/ServiceCommonBanner';

const Banner = () => {
  return (
    <div className='banner common-padding flex flex-col items-center justify-between gap-20 bg-lightShad2 py-20 lg:flex-row'>
      <ServiceCommonBanner
        title='Software Development'
        description='We have you covered from consulting to product development to testing to Deployment and maintenance.'
        chip='Software Development'
        primarybuttonLink='/contact-us'
        primarybuttonText='Contact Us'
        secondarybuttonLink='/services'
        secondarybuttonText='Services'
        isSecondaryButton
      />
      <span>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='417'
          height='514'
          viewBox='0 0 417 514'
          fill='none'
          className='size-full'
        >
          <path
            d='M88.2391 500.517L65.8412 385.134C65.1535 381.591 65.6837 377.92 67.3456 374.717L196.073 126.589C198.825 121.286 204.301 117.958 210.276 117.958H401C409.837 117.958 417 125.121 417 133.958V497.468C417 506.305 409.837 513.468 401 513.468H103.946C96.2849 513.468 89.699 508.038 88.2391 500.517Z'
            fill='#FF7500'
          />
          <path
            d='M0.238281 175.943V16.2881C0.238281 7.45153 7.40173 0.288086 16.2383 0.288086H130.636C139.473 0.288086 146.636 7.45154 146.636 16.2881V175.943C146.636 184.78 139.473 191.943 130.636 191.943H16.2383C7.40173 191.943 0.238281 184.78 0.238281 175.943Z'
            fill='#FF7500'
          />
          <path
            d='M28.6214 258.767L28.6209 88.4607C28.6208 53.1144 57.2745 24.4604 92.6208 24.4604H375.023C383.859 24.4604 391.023 31.6239 391.023 40.4604V425.628C391.023 460.974 362.369 489.628 327.023 489.628H209.6H44.2071C35.3585 489.628 28.1901 482.446 28.2072 473.597L28.6214 258.767Z'
            fill='url(#pattern0_7381_130327)'
          />
          <defs>
            <pattern id='pattern0_7381_130327' patternContentUnits='objectBoundingBox' width='1' height='1'>
              <use xlinkHref='#image0_7381_130327' transform='matrix(0.000925926 0 0 0.000722254 0 -0.239588)' />
            </pattern>
            <image
              id='image0_7381_130327'
              width='1080'
              height='2048'
              xlinkHref='https://images.unsplash.com/photo-1642257859842-c95f9fa8121d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            />
          </defs>
        </svg>
      </span>
    </div>
  );
};

export default Banner;
