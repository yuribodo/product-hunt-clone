
import Navbar from './Components/Navbar'
import ReviwedProducts from './Components/ReviwedProducts'
import ShowApss from './Components/ShowApss'
import TrendingTopics from './Components/TrendingTopics'

function App() {

  return (
    <>
      <div>
        <div>
          <Navbar/>
        </div>
        <div>
          <TrendingTopics/>
        </div>
        <div className='flex'>
          <ShowApss/>
          <ReviwedProducts/>
        </div>
      </div>
    </>
  )
}

export default App
