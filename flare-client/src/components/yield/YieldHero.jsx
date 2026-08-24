
import yieldImg from '../../assets/yield-hero.webp'
import flare from '../../assets/Flare.svg'
import xrpIcon from '../../assets/xrp-icon.webp'
import { Button } from '../common/Button';

export function YieldHero() {
  return (
    <div
      className="w-full h-screen bg-cover bg-center  flex flex-col items-center justify-between gap-2 px-4 pt-25 pb-16"
      style={{ backgroundImage: `url(${yieldImg})` }}
    >
        <div className='flex items-center p-4 rounded-4xl bg-[#642833]'>
            <div className='px-4 border-r border-primary flex items-center gap-2'>
                <img src={flare} alt="" />
                <p className='text-2xl text-primary'>Flare</p>
            </div>
            <div className='px-4 border-r border-primary'>
                <img src={xrpIcon} alt="" className='w-10'/>
            </div>
            <p className='text-2xl text-primary ml-4'>XRPFI</p>
        </div>

       <div className='flex flex-col gap-8 items-center'>
         <div className='flex items-center p-4 rounded-4xl bg-[#642833]'>
            <div className='px-4  flex items-center gap-2'>
                <img src={flare} alt="" className='w-15' />
               
            </div>
            <div className='border-r border-primary pr-4'>
                <p className='text-primary text-center'>XRP on Flare</p>
                <p className='text-primary text-center text-3xl font-semibold'>148.9M</p>
                <p className='text-primary text-center'>$220.46M</p>
            </div>
            <div className='pl-4'>
                <p className='text-primary text-center'>DeFi TVL</p>
                <p className='text-primary text-center text-4xl font-semibold'>119.8M</p>
                <p className='text-primary text-center'>$117.40M</p>
            </div>
            <div className='px-4'>
                <img src={xrpIcon} alt="" className='w-15'/>
            </div>
        </div>

        <Button text="Connect to Earn Yield" to='/claim' className='text-2xl' />
       </div>
    </div>
  );
}
