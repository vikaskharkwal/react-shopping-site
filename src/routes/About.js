import { ReactComponent as WebIcon } from '../assets/web.svg';
import { ReactComponent as CodeIcon } from '../assets/code.svg';

function About({ theme }) {
  document.title = `KICKZ - About`;

  return (
    <div className='mt-4 sm:mt-8 ml-auto mr-auto relative z-0 2xl:container px-4 sm:px-8'>
      <h1 className='text-4xl uppercase font-bold'>About</h1>
      <p className={`text-lg text-center mt-8 md:mt-16`}>
        Made for{' '}
        <a
          className={`hover:underline no-underline text-blue-700`}
          href='https://www.theodinproject.com'
          target='_blank'
          rel='noreferrer'>
          The Odin Project
        </a>{' '}
        by Vikas Kharkwal.
      </p>
      <div className='flex flex-col md:flex-row justify-center items-center text-center gap-x-16 gap-y-8 mt-8'>
        <a
          href='https://www.github.com/vikaskharkwal/react-shopping-site'
          rel='noreferrer'
          target='_blank'
          className={`flex flex-col w-max justify-between items-center gap-2 hover:no-underline underline hover:text-blue-700 transition duration-300`}>
          <CodeIcon className={`fill-current h-32 w-auto`} />
          <h3>Source Code</h3>
        </a>
        <a
          href='/'
          rel='noreferrer'
          target='_blank'
          className={`flex flex-col w-max justify-between align-middle items-center gap-2 underline hover:no-underline hover:text-blue-700 transition duration-300`}>
          <WebIcon className={`fill-current h-32 w-auto`} />
          <h3>My Website</h3>
        </a>
      </div>
      <p className={`text-lg text-center mt-8 md:mt-16`}>
        Made using{' '}
        <a
          href='https://rapidapi.com/tg4-solutions-tg4-solutions-default/api/v1-sneakers/'
          className={`hover:underline no-underline text-blue-700`}
          target='_blank'
          rel='noreferrer'>
          V1 Sneakers API
        </a>{' '}
        by{' '}
        <a
          className={`hover:underline no-underline text-blue-700`}
          href='https://tg4.solutions/'
          target='_blank'
          rel='noreferrer'>
          TG4 Solutions
        </a>
      </p>
    </div>
  );
}

export default About;
