'use client'
import ClaimGiftForm from './components/ClaimGiftForm.jsx';
import PixelPageView from './components/facebookPixels/PixelPageView.jsx';
import CardsFree from './components/CardsFree.jsx';

const Funnel = () => (<>
  <PixelPageView />
  {/* <ClaimGiftForm /> */}
  <div className='flex justify-center items-center min-h-screen'>
    <CardsFree/>
  </div>
</>)
export default Funnel