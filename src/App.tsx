import Navbar from './Components/Navbar';
import ReviwedProducts from './Components/ReviwedProducts';
import ShowApss from './Components/ShowApss';
import TrendingTopics from './Components/TrendingTopics';

function App() {
  return (
    <>
      <div>
        <div>
          <Navbar />
        </div>
        <div>
          <TrendingTopics />
        </div>
        <div className='flex'>
          <div className='w-[70%]'>
            <ShowApss />
          </div>
          <div className='border-r border-gray-400'></div>
          <div className='w-[30%]'>
            <ReviwedProducts />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
