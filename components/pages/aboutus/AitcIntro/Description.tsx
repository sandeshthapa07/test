import CommonParargraph from '@/components/common/CommonParargraph';

interface DescriptionProps {
  text: string;
  image: string;
}

const Description = ({ text, image }: DescriptionProps) => {
  return (
    <div className='description flex flex-col items-center gap-10 xmd:gap-16 lg:flex-row xl:gap-[4.5rem] '>
      <CommonParargraph text={text} className='text-center' />
      <span className='imagearea'>
        <svg
          width='477'
          height='369'
          viewBox='0 0 477 369'
          fill='none'
          className='w-full xsm:w-[477px]'
          xmlns='http://www.w3.org/2000/svg'
        >
          {/* <!-- Define a clipPath using the red path --> */}
          <defs>
            <clipPath id='imagearea'>
              <path d='M61.6385 63.9057L22.6442 280.754C20.9885 289.961 26.9744 298.81 36.1342 300.695L366.27 368.645C374.218 370.281 382.231 366.149 385.51 358.723L475.529 154.854C478.809 147.427 476.464 138.716 469.899 133.941L290.284 3.29664C286.174 0.30739 280.955 -0.715409 276.022 0.501528L74.4755 50.2175C67.8715 51.8465 62.8428 57.2087 61.6385 63.9057Z' />
            </clipPath>
          </defs>

          {/* <!-- Your other paths --> */}
          <path
            d='M117.284 25.8708L2.55155 245.983C-4.11809 258.778 2.86026 274.453 16.8292 278.053L313.244 354.444C322.662 356.871 332.57 352.943 337.769 344.721L470.184 135.314C478.219 122.607 471.717 105.746 457.234 101.73L143.136 14.6341C132.948 11.809 122.172 16.4927 117.284 25.8708Z'
            fill='#484BA0'
          />
          <path
            d='M226.931 10.3935L7.93381 192.046C-4.93769 202.722 -1.2748 223.36 14.484 228.951L383.678 359.935C397.002 364.663 411.19 355.487 412.351 341.392L433.633 82.9663C434.459 72.9405 428.242 63.6768 418.653 60.6455L247.175 6.43389C240.193 4.2266 232.568 5.71799 226.931 10.3935Z'
            fill='#FF7500'
          />

          {/* insert your image here */}
          <image
            href={image}
            width='100%'
            height='100%'
            clipPath='url(#imagearea)'
            preserveAspectRatio='xMidYMid slice'
          />

          <path
            d='M61.6385 63.9057L22.6442 280.754C20.9885 289.961 26.9744 298.81 36.1342 300.695L366.27 368.645C374.218 370.281 382.231 366.149 385.51 358.723L475.529 154.854C478.809 147.427 476.464 138.716 469.899 133.941L290.284 3.29664C286.174 0.30739 280.955 -0.715409 276.022 0.501528L74.4755 50.2175C67.8715 51.8465 62.8428 57.2087 61.6385 63.9057Z'
            fill='none'
          />
        </svg>
      </span>
    </div>
  );
};

export default Description;
