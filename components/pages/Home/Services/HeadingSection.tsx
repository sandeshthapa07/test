import CommonButton from '@/components/common/CommonButton';

const HeadingSection = () => {
  return (
    <div className='flex flex-col items-center gap-10  xmd:hidden lg:gap-[3.25rem] 2xl:flex 2xl:max-w-[40%] 2xl:items-start'>
      <h2 className='text-center text-[2rem] font-black lg:text-5xl 2xl:text-start'>
        Tailored Services for Modern Solutions
      </h2>
      <span className='order-last lg:order-2'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          xmlnsXlink='http://www.w3.org/1999/xlink'
          width='100%'
          height='100%'
          viewBox='0 0 467 358'
          fill='none'
        >
          <path
            d='M59.7407 125.834L37.011 233.202C26.0729 284.87 65.4919 333.497 118.315 333.497H340.448C367.752 333.497 393.314 320.087 408.83 297.625L451.775 235.453C474.7 202.266 470.475 157.412 441.759 129.086L336.066 24.8331C311.954 1.04994 275.818 -5.72333 244.728 7.71268L98.4605 59.6258C73.7253 70.3153 65.3207 99.4756 59.7407 125.834Z'
            fill='#FF7500'
          />
          <path
            d='M45.8358 109.942L22.853 134.57C-14.1763 174.25 -3.8403 238.191 43.8056 264.189L196.927 347.737C218.517 359.517 244.216 361.131 267.11 352.144L287.956 343.961C331.104 327.023 352.051 278.066 334.505 235.168L301.231 153.819C290.237 126.938 266.002 107.747 237.313 103.203L119.602 84.5597C92.3224 80.239 64.6781 89.7512 45.8358 109.942Z'
            fill='#3D2D72'
          />
          <path
            d='M43.4836 133.632L21.2636 238.865C10.3563 290.521 49.7714 339.117 102.576 339.117H319.829C347.168 339.117 372.759 325.673 388.268 303.162L432.745 238.606C454.325 207.284 451.879 165.311 426.806 136.707L334.025 30.8604C310.041 3.49885 271.042 -5.07983 237.786 9.69065L91.0575 74.8607C66.6868 85.685 48.9919 107.545 43.4836 133.632Z'
            fill='url(#paint0_radial_5407_52037)'
          />
          <path
            d='M43.4836 133.632L21.2636 238.865C10.3563 290.521 49.7714 339.117 102.576 339.117H319.829C347.168 339.117 372.759 325.673 388.268 303.162L432.745 238.606C454.325 207.284 451.879 165.311 426.806 136.707L334.025 30.8604C310.041 3.49885 271.042 -5.07983 237.786 9.69065L91.0575 74.8607C66.6868 85.685 48.9919 107.545 43.4836 133.632Z'
            fill='url(#pattern0_5407_52037)'
          />
          <defs>
            <pattern id='pattern0_5407_52037' patternContentUnits='objectBoundingBox' width='1' height='1'>
              <use
                xlinkHref='#image0_5407_52037'
                transform='matrix(0.000330688 0 0 0.000420665 -0.0040044 -0.225805)'
              />
            </pattern>
            <radialGradient
              id='paint0_radial_5407_52037'
              cx='0'
              cy='0'
              r='1'
              gradientUnits='userSpaceOnUse'
              gradientTransform='translate(233.426 170.824) rotate(90) scale(168.293 213.986)'
            >
              <stop stopColor='white' />
              <stop offset='0.93' stopColor='#E8E8FF' />
            </radialGradient>
            <image
              id='image0_5407_52037'
              width='3024'
              height='4032'
              xlinkHref='https://images.unsplash.com/photo-1642345584279-9810f0b1359c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            />
          </defs>
        </svg>
      </span>
      <CommonButton href='#' className='order-2'>
        Explore Services
      </CommonButton>
    </div>
  );
};

export default HeadingSection;

export const MediumScreenHeadingSection = () => {
  return (
    <div className='hidden flex-row items-center gap-10 xmd:flex 2xl:hidden'>
      <div className='flex flex-col gap-[3.25rem]'>
        <h2 className=' text-start text-[2rem] font-black xmd:text-[2.5rem] lg:text-5xl'>
          Tailored Services for Modern Solutions
        </h2>
        <CommonButton href='#' className='order-2'>
          Explore Services
        </CommonButton>
      </div>
      <span className=''>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          xmlnsXlink='http://www.w3.org/1999/xlink'
          width='100%'
          height='100%'
          viewBox='0 0 467 358'
          fill='none'
        >
          <path
            d='M59.7407 125.834L37.011 233.202C26.0729 284.87 65.4919 333.497 118.315 333.497H340.448C367.752 333.497 393.314 320.087 408.83 297.625L451.775 235.453C474.7 202.266 470.475 157.412 441.759 129.086L336.066 24.8331C311.954 1.04994 275.818 -5.72333 244.728 7.71268L98.4605 59.6258C73.7253 70.3153 65.3207 99.4756 59.7407 125.834Z'
            fill='#FF7500'
          />
          <path
            d='M45.8358 109.942L22.853 134.57C-14.1763 174.25 -3.8403 238.191 43.8056 264.189L196.927 347.737C218.517 359.517 244.216 361.131 267.11 352.144L287.956 343.961C331.104 327.023 352.051 278.066 334.505 235.168L301.231 153.819C290.237 126.938 266.002 107.747 237.313 103.203L119.602 84.5597C92.3224 80.239 64.6781 89.7512 45.8358 109.942Z'
            fill='#3D2D72'
          />
          <path
            d='M43.4836 133.632L21.2636 238.865C10.3563 290.521 49.7714 339.117 102.576 339.117H319.829C347.168 339.117 372.759 325.673 388.268 303.162L432.745 238.606C454.325 207.284 451.879 165.311 426.806 136.707L334.025 30.8604C310.041 3.49885 271.042 -5.07983 237.786 9.69065L91.0575 74.8607C66.6868 85.685 48.9919 107.545 43.4836 133.632Z'
            fill='url(#paint0_radial_5407_52037)'
          />
          <path
            d='M43.4836 133.632L21.2636 238.865C10.3563 290.521 49.7714 339.117 102.576 339.117H319.829C347.168 339.117 372.759 325.673 388.268 303.162L432.745 238.606C454.325 207.284 451.879 165.311 426.806 136.707L334.025 30.8604C310.041 3.49885 271.042 -5.07983 237.786 9.69065L91.0575 74.8607C66.6868 85.685 48.9919 107.545 43.4836 133.632Z'
            fill='url(#pattern0_5407_52037)'
          />
          <defs>
            <pattern id='pattern0_5407_52037' patternContentUnits='objectBoundingBox' width='1' height='1'>
              <use
                xlinkHref='#image0_5407_52037'
                transform='matrix(0.000330688 0 0 0.000420665 -0.0040044 -0.225805)'
              />
            </pattern>
            <radialGradient
              id='paint0_radial_5407_52037'
              cx='0'
              cy='0'
              r='1'
              gradientUnits='userSpaceOnUse'
              gradientTransform='translate(233.426 170.824) rotate(90) scale(168.293 213.986)'
            >
              <stop stopColor='white' />
              <stop offset='0.93' stopColor='#E8E8FF' />
            </radialGradient>
            <image
              id='image0_5407_52037'
              width='3024'
              height='4032'
              xlinkHref='https://images.unsplash.com/photo-1642345584279-9810f0b1359c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            />
          </defs>
        </svg>
      </span>
    </div>
  );
};
