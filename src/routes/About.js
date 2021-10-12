import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';

function About(props) {
  console.log(props);
  return (
    <div className='2xl:container mt-4 sm:mt-8 px-4 sm:px-8'>
      <h1 className='text-4xl uppercase font-bold'>About</h1>
      <p className={`text-lg text-center mt-8 md:mt-16`}>
        Made for{' '}
        <a
          className={`underline hover:no-underline hover:text-${props.theme}-700`}
          href='https://www.theodinproject.com'
          target='_blank'
          rel='noreferrer'>
          The Odin Project
        </a>{' '}
        by berserkwal.
      </p>
      <div className='flex flex-col md:flex-row justify-center align-bottom text-center gap-x-16 gap-y-8 mt-8'>
        <a
          href='https://www.github.com/berserkwal/react-shopping-site'
          rel='noreferrer'
          target='_blank'
          className={`flex flex-col justify-between align-middle items-center gap-2 underline hover:no-underline hover:text-${props.theme}-700 transition duration-300`}>
          <FontAwesomeIcon icon={faCode} size='7x' />
          <h3>Source Code</h3>
        </a>
        <a
          href='https://berserkwal.github.io/'
          rel='noreferrer'
          target='_blank'
          className={`flex flex-col justify-between align-middle items-center gap-2 underline hover:no-underline hover:text-${props.theme}-700 transition duration-300`}>
          <FontAwesomeIcon icon={faGlobe} size='8x' />
          <h3>Website</h3>
        </a>
      </div>
    </div>
  );
}

export default About;
