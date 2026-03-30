// Passamos 'props' entre os parênteses
export default function ProductCard(props) {
  return (
    <div className="bg-gray-800 p-4 rounded-xl shadow-lg">
      {/* Usamos {props.nome_da_prop} para exibir o texto */}
      <div className="h-40 w-full bg-gray-700 rounded-lg mb-4 flex items-center justify-center text-gray-500">
        Foto de {props.titulo}
      </div>
      
      <h3 className="text-white font-bold text-lg">{props.titulo}</h3>
      <p className="text-gray-400 text-sm mt-2">{props.descricao}</p>
      
      <div className="mt-4 flex justify-between items-center">
        <span className="text-indigo-400 font-bold text-xl">R$ {props.preco}</span>
        <button className="bg-indigo-600 text-white px-3 py-1 rounded-md text-sm">
          Comprar
        </button>
      </div>
    </div>
  );
}