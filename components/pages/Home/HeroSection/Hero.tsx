import { CommonAnimation } from '@/components/common/animation/CommonAnimation';
import CommonButton from '@/components/common/CommonButton';
import CommonParargraph from '@/components/common/CommonParargraph';
import CommonTitle from '@/components/common/CommonTitle';

const Hero = () => {
  return (
    <div className='hero-section-main flex flex-col items-center justify-between bg-lightShad2  px-6 py-10 max-xl:gap-4 xl:flex-row'>
      <div className='hero-section-description flex h-full flex-col items-center justify-center gap-2 xl:w-2/5 '>
        <CommonAnimation>
          <div className='flex flex-col gap-4 '>
            <CommonTitle title='Building Your Tech Solutions' />
            <CommonParargraph text="Transforming Ideas into Digital Reality. Let's Build Success Together" />
            <div className='flex flex-row items-center gap-4'>
              <CommonButton href='/contact us' />
              <CommonButton href='/contact us' text='Learn More' variant='secondary' className='w-fit' />
            </div>
          </div>
        </CommonAnimation>
      </div>
      <span>
        <svg
          width='100%'
          height='853'
          viewBox='0 0 1090 853'
          className='w-full'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <defs>
            <clipPath id='mainimage'>
              <path d='M441.624 476.946L623.589 592.625L626.589 595.618L856.589 499.514L894.089 419.014L904.233 304.25C910.221 236.504 866.654 174.254 800.953 156.679L697.762 129.077C660.595 119.135 620.914 127.617 591.06 151.886L430.309 282.562C366.744 334.234 372.493 432.998 441.624 476.946Z' />
            </clipPath>
          </defs>
          <defs>
            <mask id='mask1'>
              <rect x='698' y='452' width='290.757' height='240.436' rx='16' fill='white' />
            </mask>
            <mask id='mask2'>
              <rect x='142' y='576' width='359' height='232.455' rx='16' fill='white' />
            </mask>
            <mask id='mask3'>
              <rect
                x='95'
                y='76'
                width='205.918'
                height='209.509'
                rx='16'
                fill='white'
                style={{
                  maskImage: 'linear-gradient(to bottom, transparent, white 0%, white 70%, transparent)',
                }}
              />
            </mask>
            <mask id='mask4'>
              <rect x='640' y='32' width='79' height='76' rx='12' fill='white' />
            </mask>
          </defs>

          <path
            d='M349.097 1.99532C-9.88632 208.312 -20.6889 654.632 12.0518 853H1090V0L349.097 1.99532Z'
            fill='white'
          />
          <path d='M1090 853L7 853L856 499.828L856.047 499.899L1090 0V853Z' fill='#FF7500' />
          <image
            href={
              'https://plus.unsplash.com/premium_photo-1705267935916-294dfd89c4bb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            }
            x='0'
            y='0'
            width='100%'
            height='100%'
            preserveAspectRatio='xMidYMid meet'
            clipPath='url(#mainimage)'
          />
          <path
            d='M441.624 476.946L623.589 592.625L626.589 595.618L856.589 499.514L894.089 419.014L904.233 304.25C910.221 236.504 866.654 174.254 800.953 156.679L697.762 129.077C660.595 119.135 620.914 127.617 591.06 151.886L430.309 282.562C366.744 334.234 372.493 432.998 441.624 476.946Z'
            fill='none'
          />
          <g>
            <rect
              x='698'
              y='452'
              width='290.757'
              height='240.436'
              rx='16'
              fill='url(#paint0_linear_5821_170818)'
              style={{
                maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 20%, transparent)',
              }}
            />
            <image
              href='https://images.unsplash.com/photo-1727200451619-1c7b5b4dca49?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              x='698'
              y='452'
              width='290.757'
              height='240.436'
              preserveAspectRatio='xMidYMid slice'
              mask='url(#mask1)'
              opacity='0.7'
            />
          </g>

          <g>
            <rect x='142' y='576' width='359' height='232.455' rx='16' fill='url(#paint1_linear_5821_170818)' />
            <image
              href='https://images.unsplash.com/photo-1669399213378-2853e748f217?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              x='142'
              y='576'
              width='359'
              height='232.455'
              preserveAspectRatio='xMidYMid slice'
              mask='url(#mask2)'
              opacity='0.7'
            />
          </g>

          <g>
            <rect x='95' y='76' width='205.918' height='209.509' rx='16' fill='url(#paint2_linear_5821_170818)' />
            <image
              href='https://plus.unsplash.com/premium_photo-1674086973168-4fbfa03f32e9?q=80&w=200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              x='95'
              y='76'
              width='205.918'
              height='209.509'
              preserveAspectRatio='xMidYMid slice'
              mask='url(#mask3)'
              opacity='0.7'
              stroke='white'
              strokeWidth={0}
              style={{
                maskImage: 'linear-gradient(to bottom, transparent, white 0%, white 70%, transparent)',
              }}
            />
          </g>

          <g>
            <rect x='640' y='32' width='79' height='76' rx='12' fill='url(#paint3_linear_5821_170818)' />
            <image
              href='https://plus.unsplash.com/premium_photo-1682309543429-6aaa6d792dae?q=80&w=2112&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              x='640'
              y='32'
              width='79'
              height='76'
              preserveAspectRatio='xMidYMid slice'
              mask='url(#mask4)'
              opacity='0.7'
            />
          </g>

          <g>
            <rect x='742' y='56' width='279.982' height='45.2269' rx='8' fill='url(#paint4_linear_5821_170818)' />
            <text
              x='762'
              y='86'
              fill='#3C3C46'
              style={{ whiteSpace: 'pre', color: '#3C3C46' }}
              fontFamily='Lato'
              fontSize='16'
              fontWeight='bold'
            >
              200 Tech. solutions delivered
            </text>
          </g>
        </svg>
      </span>
    </div>
  );
};

export default Hero;
