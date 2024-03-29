import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs'
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai'
// import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import Typewriter from 'typewriter-effect'
import { Fade } from '@mui/material'
import ParticleBackground from './ParticleBackground'


import './style.css'
import DarkModebtn from './DarkModebtn'


// import pic from '.images/mee.jpeg

const inter = Inter({ subsets: ['latin'] })


export default function Home() {
  return (

    <div>
      <Head>
        <title>Suniti Portfolio </title>
        <meta name="description" content=""> </meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='w-full min-h-screen'>
        <section >
          < div className='fixed bg-white top-0 w-full flex z-50'>
            <div className='container mx-auto flex justify-end item-center px-4 py-4'>
            <div className='container mx-auto flex justify-center item-center'>
                  <div className='flex gap-4 scroll-1'>
                    <a href='#home' className='hover:text-lg hover:text-gray-400 cursor-pointer font-bold w-max text-center justify-center'>Home</a>
                    <a href='#qualifications' className='hover:text-lg hover:text-gray-400 cursor-pointer font-bold w-max text-center justify-center'>Qualifications</a>
                    <a href='#projects' className='hover:text-lg hover:text-gray-400 cursor-pointer font-bold w-max text-center justify-center'>Projects</a>
                    <a href='#skills' className='hover:text-lg hover:text-gray-400 cursor-pointer font-bold max-w-max text-center justify-center'>Skills</a>
                  </div>
                </div>
              <div className='flex gap-2'>
                <DarkModebtn />
              </div>
            </div>
          </div>
        </section>
        {/* nav bar ends */}
        <section id="home" className="max-h-screen h-full bg-fuchsia-200 px-10 py-16">
          <div className='text-center p-5 py-2'>

            <div className=''>
              <img className='h-60 w-64 rounded-full mx-auto transition-all duration-300 shadow-lg dark:shadow-gray-500' src="images/mee.jpeg" />
            </div>
            <h2 className='text-8xl py-2 text-purple-900 font-medium'>Suniti</h2>
            {/* <Typewriter
              onInit={(typewriter) => {
                typewriter.typeString('Hi!')
                // typewriter.typeString('I am a Student')
                  .callFunction(() => {
                    console.log('String typed out!');
                  })
                  .pauseFor(2500)
                  .deleteAll()
                  .callFunction(() => {
                    console.log('All strings were deleted');
                  })
                  .start();
              }}
            /> */}

            <h3 className=''> Web Developer</h3>

            <h1 className="flex justify-center font-extrabold text-2xl text-center">Hi <span className="animate-waving-hand h-10"> 👋🏻</span>, I am a freshee. Connect to know me.</h1>


          </div>
          <div className='text-5xl flex justify-center gap-16'>
           
          <a className='i-1' href='https://www.linkedin.com/in/suniti-16852b1b7/' target='_blank'>
                <AiFillLinkedin></AiFillLinkedin>
                </a>
                <a className='i-2' href='https://github.com/suni21' target='_blank'>
                <AiFillGithub></AiFillGithub></a>
          </div>
          {/* text-md py-2 leading-2 text-gray-800  max-w-xl */}
        </section>
        <section>
          <div className=' text-center sm:text-left mt-10 mb-5 before:block before:w-48 before:h-3 before:mb-3 before:rounded-md before:mx-auto sm:before:mx-0 before:dark:bg-violet-400'>
            <h3 className='text-4xl font-semibold ml-2 leading-8'> Websites</h3>
            {/* <div className='flex items-center'> */}
            <p className=' text-2xl text-justify px-40 py-5'>
              I am a creative freshee with a passion for design and a talent for bringing ideas to life. I believe that good design is not just about aesthetics but also about functionality and purpose.
              Take a look at my portfolio and see for yourself the impact of thoughtful and effective design. Excited to connect and explore new opportunities!
            </p>
            {/* </div> */}
          </div>
        </section>
        <section>
          {/* text-4xl mt-10 text-transparent bg-clip-text py-2 bg-gradient-to-r from-purple-900 to-purple-300 font-extrabold */}
        </section>
        <section id='qualifications' className='md:text-2xl'>
          <div className='text-center sm:text-left mt-20 -mb-28 before:block before:w-48 before:h-3 before:mb-3 before:rounded-md before:mx-auto sm:before:mx-0 before:dark:bg-violet-400'>
            <h3 className='text-4xl font-semibold ml-1'>Qualifications</h3>
          </div>
          {/* Straight line for the timeline */}
          <ol className="justify-center relative border-l-2 border-gray-200 dark:border-gray-300 ml-80 max-w-full py-10 ">
            <li className="mb-10 ml-10">
              {/* Circle on the staright line */}
              <div className="absolute w-10 h-10 bg-gray-200 rounded-full mt-1.5 -left-5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-black">B.Tech in Information Technology</h3>
              <time className="mb-1 text-lg font-normal leading-none text-gray-400 dark:text-gray-500">Present-September 2020</time>

              <h3 className="text-sm font-semibold text-gray-900 dark:text-black ">Kalinga Institute of Industrial Technology, Oisha</h3>
              <div className="shadow-lg p-6 rounded-xl my-2 dark:bg-gray-200 flex-1 w-96">
                <h4 className="text-sm box-border h-auto w-auto text-justify">
                  During my college years, I had the opportunity to expand my academic knowledge and personal growth through various experiences. I also pursued extracurricular activities such as joining clubs and events. These experiences allowed me to develop essential skills such as communication, leadership, and adaptability. I am grateful for the opportunity to have attended college and the skills and experiences gained have prepared me for successed in career.</h4>
                <p className="mb-4 text-base font-normal text-bl dark:text-gray-600">cgpa: 8.3</p>
              </div>
            </li>
            <li className="mb-20 ml-10">
              <div className="absolute w-10 h-10 bg-gray-200 rounded-full mt-1.5 -left-5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-black">Intermediate</h3>
              <time className="mb-1 text-lg font-normal leading-none text-gray-400 dark:text-gray-500">2018-2020</time>
              <h3 className="text-sm font-semibold text-gray-900 dark:text-black">Delhi Public School, Gaya</h3>
              <div className="shadow-lg p-6 rounded-xl my-2 dark:bg-gray-200 flex-1 w-96">
                <h4 className='text-sm box-border h-auto w-auto text-justify'>My school years were significant in shaping my academic and personal growth. I was exposed to a diverse range of subjects, programs, people, culture and events will made me how I am today.</h4>
                <p className="text-base font-normal text-gray-600">%: 75.2</p>
              </div>
            </li>
            <li className="ml-10">
              <div className="absolute w-10 h-10 bg-gray-200 rounded-full mt-1.5 -left-5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-black">HighSchool</h3>
              <time className="mb-1 text-lg font-normal leading-none text-gray-400 dark:text-gray-500">2018</time>
              <h3 className="text-sm font-semibold text-gray-900 dark:text-black">Nazareth Accademy, Gaya</h3>
              <div className="shadow-lg p-6 rounded-xl my-2 dark:bg-gray-200 flex-1 w-96">
                <h4 className='text-sm box-border h-auto w-auto text-justify'>Throughout my schooling life, I have encountered various obstacles, such as difficult coursework, social pressures, and extracurricular activities. However, they also have provided me opportunities to develop lasting friendships, pursue my interests, and discover my passions.</h4>
                <p className="text-base font-normal text-gray-600">
                  %: 81.3</p>
              </div>
            </li>
          </ol>
        </section>
        {/* <section id='qualifications' className='md:text-2xl'>
        <div className='text-center sm:text-left mt-auto -mb-28 before:block before:w-48 before:h-3 before:mb-3 before:rounded-md before:mx-auto sm:before:mx-0 before:dark:bg-violet-400'>
            <h3 className='text-4xl font-semibold ml-1'>Qualifications</h3>
          </div>
          <div className="h-screen max-w-full flex justify-center items-center mt-56">

            <div className="max-w-7xl mx-auto w-full grid grid-cols-9 px-2 py-2">

              <div className="col-span-4 pl-20 h-full w-full px-2">
                <div className="w-full h-full shadow-2xl my-2 dark:bg-gray-100 flex-1 rounded-2xl p-2 text-justify md:pl-4 hover:ring-1 hover:ring-violet-300">
                <time className="mb-1 text-lg font-normal leading-none text-gray-400 dark:text-gray-500">Present-September 2020</time>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-black">B.Tech in Information Technology</h3>
                  <h2 className="text-black text-lg font-semibold">Kalinga Institute of Industrial Technology, Odisha</h2>
                  <p className="text-black sm:text-sm text-xs">During my college years, I had the opportunity to expand my academic knowledge and personal growth through various experiences. I also pursued extracurricular activities such as joining clubs and events. These experiences allowed me to develop essential skills such as communication, leadership, and adaptability. I am grateful for the opportunity to have attended college and the skills and experiences gained have prepared me for successed in career.</p>
                  <p className="mb-4 text-base font-normal text-bl dark:text-gray-600">cgpa: 8.3 </p>
  
                </div>
              </div>
              <div className="relative col-span-1 w-full h-full flex justify-center items-center">
                <div className="h-full w-1 bg-gray-400"></div>
                <div className="absolute w-6 h-6 rounded-full bg-black z-10 text-white text-center"></div>
              </div>
              <div className="col-span-4 w-full h-full"></div>

              <div className="col-span-4 w-full h-full"></div>
              <div className="relative col-span-1 w-full h-full flex justify-center items-center">
                <div className="h-full w-1 bg-gray-400"></div>
                <div className="absolute w-6 h-6 rounded-full bg-black z-10 text-white text-center"></div>
              </div>
              <div className="col-span-4 pr-40 h-full w-full px-2">
                <div className="w-full h-full shadow-2xl my-2 dark:bg-gray-100 flex-1 rounded-2xl p-2 md:pl-4 text-justify hover:ring-1 hover:ring-violet-300">
                <time className="mb-1 text-lg font-normal leading-none text-gray-400 dark:text-gray-500">2019-2020</time>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-black">Intermediate</h3>
                  <h1 className="text-black text-xl font-medium ">Delhi Public School, Gaya</h1>
                  <p className="text-black sm:text-sm text-xs">My school years were significant in shaping my academic and personal growth. I was exposed to a diverse range of subjects, programs, people, culture and events will made me how I am today.</p>
                  <p className="text-base font-normal text-gray-600">%: 75.2</p>
                </div>
              </div>


              <div className="col-span-4 w-auto h-full pl-20 px-2">
                <div className="w-full h-full shadow-2xl my-2 dark:bg-gray-100 flex-1 rounded-2xl p-2 md:pl-4 text-justify hover:ring-1 hover:ring-violet-300">
                <time className="mb-1 text-lg font-normal leading-none text-gray-400 dark:text-gray-500">2017-2018</time>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-black">HighSchool</h3>
                  <h1 className="text-black text-lg font-medium">Nazareth Academy,Gaya</h1>
                  <p className="text-black sm:text-sm text-xs">Throughout my schooling life, I have encountered various obstacles, such as difficult coursework, social pressures, and extracurricular activities. However, they also have provided me opportunities to develop lasting friendships, pursue my interests, and discover my passions.</p>
                  <p className="text-base font-normal text-gray-600">%: 81.3</p>
                </div>
              </div>
              <div className="relative col-span-1 w-full h-full flex justify-center items-center">
                <div className="h-full w-1 bg-gray-400"></div>
                <div className="absolute w-6 h-6 rounded-full bg-black z-10 text-white text-center"></div>
              </div>
              <div className="col-span-4 w-full h-full"></div>
            </div>
          </div>
        </section> */}
        <section id='projects'>
          <div className='text-center sm:text-left mt-20 -mb-28 before:block before:w-48 before:h-3 before:mb-3 before:rounded-md before:mx-auto sm:before:mx-0 before:dark:bg-violet-400'>
            <h3 className='text-4xl font-semibold ml-1 mb-10 '>Projects</h3>
            <p className='px-40 py-4 text-justify text-2xl'>Projects serve as powerful evidence of a developer's skills, dedication, and hard work. They go beyond mere words and provide tangible examples that potential employers or clients can see and evaluate. Projects showcase a developer's capabilities in a way that is easily understandable and relatable. So here are a few examples of my work that I'd like to share with you</p>
          </div>


          <div className='grid gap-5 lg:grid-cols-4 w-auto h-auto mt-36 justify-items-center py-6 p-10'>
            {/* card 1 */}
            <div className="block rounded-xl w-60  group max-w-xs mx-auto p-2 bg-violet-950 ring-1 ring-slate-900/5 shadow-lg hover:bg-violet-300 hover:ring-violet-300 transition duration-100 hover:scale-110 text-white">
              <a href="#">

                <img
                  className="rounded-t-lg  w-28 ml-14 py-4"
                  src="images/bhagwadgita.png" />
              </a>
              <div className="p-2">

                <h5
                  className="mb-2 text-xl font-medium leading-tight">
                  Bhagavad Gita App
                </h5>
                <p className="mb-4 w-auto text-sm">
                  As our evolving world shifts more towards digital platforms comes awareness regarding just how significant it is to have access to an application.
                </p>

                <button type="button" className="bg-gray-400 hover:bg-gray-800 shadow-lg shadow-gray-400/50 rounded-xl w-16 text-white ">
                  Link
                </button>
              </div>
            </div>
            {/* Card2 */}
            <div className="block rounded-xl w-60 group max-w-xs mx-auto p-1 bg-violet-950 ring-1 ring-slate-900/5 shadow-lg text-white hover:bg-violet-300 hover:ring-violet-300 transition duration-100 hover:scale-110 ">
              <a href="#">
                <img
                  className="rounded-t-lg  w-28 py-4 ml-14" 
                  src="images/login.png" />
              </a>
              <div className="p-2">
                <h5
                  className="mb-2 text-xl font-medium leading-tight">
                  Portfolio Page
                </h5>
                <p className="mb-4 w-auto text-sm">
                  Used Reactjs(Next.js), tailwind.
                  For the purpose of ganing more knowledge to the frontend part by creating a portfolio page.
                </p>

                <button type="button" className="bg-gray-400 hover:bg-gray-800 shadow-lg shadow-gray-400/50 rounded-xl w-16 text-white ">
                  <link rel="stylesheet" href=""></link>
                  Link
                </button>
              </div>

            </div>
            {/* Card3 */}
            <div className="block rounded-xl w-60 group max-w-xs mx-auto p-2 bg-violet-950 ring-1 ring-slate-900/5 shadow-lg hover:bg-violet-300 text-white hover:ring-violet-300 transition duration-100 hover:scale-110  ">
              <a href="#">
                <img
                  className="rounded-t-lg  w-28 ml-14 py-4"
                  src="images/checklist.png" />
              </a>
              <div className="p-2">
                <h5
                  className="mb-2 text-xl font-medium leading-tight">
                  Check List
                </h5>
                <p className="mb-4 w-auto text-sm">
                Used React.js, css and material ui.
                An web applications helps to remember diffrent things that needs to be done or bought.
                </p>

                <button  type="button" className="bg-gray-400 hover:bg-gray-800 shadow-lg shadow-gray-400/50 rounded-xl w-16 text-white ">
                 <a href='https://to-do-list-suni21.netlify.app/'> Link</a>
                </button>
              </div>
            </div>
            {/* Card4 */}
            <div className="block rounded-xl w-60 group max-w-xs mx-auto p-2 bg-violet-950 ring-1 ring-slate-900/5 shadow-lg hover:bg-violet-300 hover:ring-violet-300 text-white transition duration-100 hover:scale-110  ">
              <a href="#">
                <img
                  className="rounded-t-lg  w-28 ml-14 py-4"
                  src="images/shopping.png" />
              </a>
              <div className="p-2">
                <h5
                  className="mb-2 text-xl font-medium leading-tight">
                  Shop web app
                </h5>
                <p className="mb-4 w-auto text-sm">
                Used React.js, css and material ui.                </p>

                <button type="button" className="bg-gray-400 hover:bg-gray-800 shadow-lg shadow-gray-400/50 rounded-xl w-16 text-white ">
                 <a href='https://suni21-makeupwebsite.netlify.app/ ' > Link</a>
                </button>
              </div>
            </div>
          </div>
        </section>
        <section id='skills'>
          <div className='text-center sm:text-left mt-28 -mb-28 before:block before:w-48 before:h-3 before:mb-3 before:rounded-md before:mx-auto sm:before:mx-0 before:dark:bg-violet-400'>
            <h3 className='text-4xl font-semibold ml-1 mb-10 '>Skills</h3>
            <div className='grid gap-7 lg:grid-cols-4 w-auto h-auto py-1 p-48'>
              <div className=' bg-violet-300 hover:bg-violet-200 shadow-lg shadow-gray-400/50 rounded-md text-white text-center w-auto h-10'>HTML</div>
              <div className=' bg-violet-300 hover:bg-violet-200 shadow-lg shadow-gray-400/50 rounded-md text-white text-center w-auto h-10'>CSS</div>
              <div className=' bg-violet-300 hover:bg-violet-200 shadow-lg shadow-gray-400/50 rounded-md text-white text-center w-auto h-10'>C</div>
              <div className=' bg-violet-300 hover:bg-violet-200 shadow-lg shadow-gray-400/50 rounded-md text-white text-center w-auto h-10'>C++</div>
              <div className=' bg-violet-300 hover:bg-violet-200 shadow-lg shadow-gray-400/50 rounded-md text-white text-center w-auto h-10'>Tailwind</div>
              <div className=' bg-violet-300 hover:bg-violet-200 shadow-lg shadow-gray-400/50 rounded-md text-white text-center w-auto h-10'>React.js</div>
              <div className=' bg-violet-300 hover:bg-violet-200 shadow-lg shadow-gray-400/50 rounded-md text-white text-center w-auto h-10'>SQL (Beginner)</div>
              <div className=' bg-violet-300 hover:bg-violet-200 shadow-lg shadow-gray-400/50 rounded-md text-white text-center w-auto h-10'>Php (Beginner)</div>
            </div>
          </div>
        </section>
        <section>
          <div className='text-center sm:text-left mt-48 before:block before:w-48 before:h-3 before:mb-3 before:rounded-md before:mx-auto'>
            {/* <h3 className='text-4xl font-semibold ml-1 mb-10 '>Certifications</h3> */}
            <footer className="bg-white border-t border-gray-300 dark:border-gray-700">
          <div className="container mx-auto py-4 px-5 flex justify-center">
            <span className="text-sm text-gray-600 dark:text-gray-400">Made by Suniti ❤️ </span>
          </div>
        </footer>
          </div>
        </section>
      </main>
    </div>

  );
}
