import stars from '../../assets/Captura de tela 2024-05-24 175658.png'
import logo from '../../assets/logorev.png'

const ReviwedProducts = () => {
  return (
    <div>
        <h1 className=" text-xl text-center font-bold p-10">Produtos Revisados por nós</h1>

        <div className='flex'>
          <div className="flex flex-col p-10">
            <h2 className=' font-semibold'>nome 1</h2>
            <p>descricao 1</p>
            <img className='w-[60%]' src={stars} alt="stars" />
          </div>
          <img  className="w-[30%]" src={logo} alt="logo" />
        </div>
        <div className='flex'>
          <div className="flex flex-col p-10">
            <h2 className=' font-semibold'>nome 1</h2>
            <p>descricao 1</p>
            <img className='w-[60%]' src={stars} alt="stars" />
          </div>
          <img  className="w-[30%]" src={logo} alt="logo" />
        </div>
        
        <h1 className=" text-center font-bold">Em breve</h1>
        <div className='flex'>
          <div className="flex flex-col p-10">
            <h2 className=' font-semibold'>nome 1</h2>
            <p>descricao 1</p>
            <img className='w-[60%]' src={stars} alt="stars" />
          </div>
          <img  className="w-[30%]" src={logo} alt="logo" />
        </div>
        
    </div>
  )
}

export default ReviwedProducts