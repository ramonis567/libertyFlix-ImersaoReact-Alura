import React, { useEffect, useState } from 'react';
//import dadosIniciais from './data/dados_iniciais.json';
import Menu from './components/Menu';
import Carousel from './components/Carousel';
import BannerMain from './components/BannerMain';
import Footer from './components/Footer';
import Swal from 'sweetalert2';

function App() {
  const [dadosIniciais, setDadosIniciais] = useState([]);

  useEffect(() => {
    const URL_TOP = "https://libertyflix.herokuapp.com/categorias?_embed=videos";

    fetch(URL_TOP).then(async (serverReturn) => {
      if(serverReturn.ok){
        const data = await serverReturn.json();
        setDadosIniciais(data);
      }else {
        console.log("Erro server");
        // Swal.fire({
        //   title: "Erro!",
        //   text: 'Servidor fora do ar, tente novamente mais tarde!',
        //   icon: 'error',
        //   timer: 4000
        // });
      }
    });
  }, [])

  return (
    <div style={{ background: "#141414" }}>
      <Menu />

      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={"O que é Front-end? Trabalhando na área os termos HTML, CSS e JavaScript fazem parte da rotina das desenvolvedoras e desenvolvedores. Mas o que eles fazem, afinal? Descubra com a Vanessa!"}
      />

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />

      <Carousel
        category={dadosIniciais.categorias[1]}
      />

      <Carousel
        category={dadosIniciais.categorias[2]}
      />          

      <Footer />
      
    </div>
  );
}

export default App;
