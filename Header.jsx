export default function Header(){
    return (
        <>
       <header className="w-full bg-slate-900 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        
       
        <div className="text-white font-bold text-2xl tracking-tight">
          Paga<span className="text-blue-500">+</span>
        </div>

      
        <nav>
          <ul className="flex gap-x-8 text-slate-300 font-medium">
            <li>
              <a href="#home" className="hover:text-white transition-colors duration-200">
                Início
              </a>
            </li>
            <li>
              <a href="#sobre" className="hover:text-white transition-colors duration-200">
                Sobre
              </a>
            </li>
            <li>
              <a href="#contato" className="hover:text-white transition-colors duration-200">
                Contato
              </a>
            </li>
          </ul>
        </nav>

      </div>
    </header>
        </>
    )
}