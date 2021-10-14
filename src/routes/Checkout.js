import { ReactComponent as LogoIcon } from '../assets/logo.svg';

function Checkout({ theme }) {
  return (
    <div className='mt-4 sm:mt-8 ml-auto mr-auto relative z-0 2xl:container px-4 sm:px-8'>
      <div
        className={`flex flex-col items-center justify-center mt-16 gap-4 text-center`}>
        <h2 className={`font-bold text-2xl uppercase`}>
          Thanks for shopping with us
        </h2>
        <p className={`text-lg`}>Your order will be shipped shortly.</p>
        <div className={`text-gray-200`}>
          <div style={{ transform: 'scaleX(-1)' }}>
            <LogoIcon className={`fill-current w-full h-auto`} />
          </div>
          <p className={`font-semibold text-2xl uppercase`}>
            We hope you enjoy your new Kickz
          </p>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
