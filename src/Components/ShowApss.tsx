import image from '../../assets/Captura de tela 2024-05-24 174604.png'

const ShowApss = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-10">
        <h1 className=" text-xl font-bold">O Próximo Grande App </h1>
        
            <div className="flex  ml-3 mt-6 items-start p-6">
                <div>
                    <img src={image} alt="logo" />
                </div>
                
                <div>
                    <h1 className=" text-lg font-semibold">Nome do app</h1>
                    <p>descricao do app bla bla bla</p>
                    <div className="flex space-x-2">
                        <p>Ia</p>
                        <p>API</p> 
                    </div>
                </div> 
            </div>
            <div className="flex  ml-3 mt-6 items-start p-6">
                <div>
                    <img src={image} alt="logo" />
                </div>
                
                <div>
                    <h1 className=" text-lg font-semibold">Nome do app</h1>
                    <p>descricao do app bla bla bla</p>
                    <div className="flex space-x-2">
                        <p>Ia</p>
                        <p>API</p> 
                    </div>
                </div> 
            </div>
            <div className="flex  ml-3 mt-6 items-start p-6">
                <div>
                    <img src={image} alt="logo" />
                </div>
                
                <div>
                    <h1 className=" text-lg font-semibold">Nome do app</h1>
                    <p>descricao do app bla bla bla</p>
                    <div className="flex space-x-2">
                        <p>Ia</p>
                        <p>API</p> 
                    </div>
                </div> 
            </div>
        
    </div>
  )
}

export default ShowApss