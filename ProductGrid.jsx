import ProductCard from "./ProductCard";

export default function ProductGrid() {
  return (
    <section className="p-8 bg-gray-900 min-h-screen">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        
       
        <ProductCard 
          titulo="Curso de React" 
          preco="150" 
          descricao="Aprenda do zero ao avançado."
        />

        <ProductCard 
          titulo="Curso de Tailwind" 
          preco="80" 
          descricao="Estilize seus sites voando."
        />

        <ProductCard 
          titulo="Mentoria VIP" 
          preco="300" 
          descricao="Tire dúvidas direto com o prof."
        />
        <ProductCard titulo="Webcam Full HD" preco="200,00" descricao="Câmera para streaming." />
        <ProductCard titulo="Cadeira Gamer" preco="900,00" descricao="Ergonômica e confortável." />
        <ProductCard titulo="SSD 1TB" preco="450,00" descricao="Velocidade máxima de leitura." />
        <ProductCard titulo="Memória RAM 16GB" preco="380,00" descricao="Performance para multitarefa." />
        <ProductCard titulo="Placa de Vídeo" preco="2.500,00" descricao="Roda tudo no ultra." />
        <ProductCard titulo="Fonte 600W" preco="300,00" descricao="Selo 80 Plus Bronze." />
        <ProductCard titulo="Gabinete ATX" preco="400,00" descricao="Lateral em vidro temperado." />
        <ProductCard titulo="Cooler Master" preco="120,00" descricao="Mantenha o processador frio." />
        <ProductCard titulo="Microfone Condensador" preco="550,00" descricao="Áudio profissional para vídeos." />
        <ProductCard titulo="Controle Xbox" preco="400,00" descricao="Melhor ergonomia para PC." />
        <ProductCard titulo="Suporte Articulado" preco="180,00" descricao="Organize seu setup." />

      </div>
    </section>
  );
}