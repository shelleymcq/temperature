import { Shadows_Into_Light } from 'next/font/google'

const shadows = Shadows_Into_Light({ 
  subsets: ['latin'],
  weight: ['400'],
})

const Temperature = () => {
  const fetchTemps = async () => {
    try {
      const res = await fetch(
        'https://icanhazdadjoke.com/',
          {
            method: 'GET',
            headers: {
              Accept: "application/json"
            },
          }
      );
      const data = await res.json();
      console.log(data);
    } catch (err) {
        console.error(err);
    }
  }

  return (
    <div className='bg-blue-300 flex flex-col items-center pt-20 min-h-screen'>
      <div className={shadows.className}>
        <h2 className='text-2xl font-bold text-cyan-600'>Temperature by Year</h2>
      </div>
      <div>
        <p>inputs will go here</p>
        <button onClick={fetchTemps}>Submit</button>
      </div>
    </div>
  )
}

export default Temperature