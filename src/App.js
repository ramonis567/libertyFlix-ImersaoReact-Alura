import React, { useEffect, useState } from 'react';
//import dadosIniciais from './data/dados_iniciais.json';
import Menu from './components/Menu';
import Carousel from './components/Carousel';
import BannerMain from './components/BannerMain';
import Footer from './components/Footer';
import Swal from 'sweetalert2';
import "./App.css";

function App() {
  const [dadosIniciais, setDadosIniciais] = useState([]);

  useEffect(() => {
    const URL_TOP = "https://libertyflix.herokuapp.com/categorias?_embed=videos";

    fetch(URL_TOP).then(async (serverReturn) => {
      if(serverReturn.ok){
        const data = await serverReturn.json();
        setDadosIniciais(data);
      }else {
        Swal.fire({
          title: "Erro!",
          text: 'Servidor fora do ar, tente novamente mais tarde!',
          icon: 'error',
          timer: 4000
        });
      }
    });
  }, [])

  return (
    <div style={{ background: "#090909" }}>

      {dadosIniciais.length === 0 && (
        <div class="psoload">
          <div class="straight"></div>
          <div class="curve"></div>
          <div class="center"></div>
          <div class="inner"></div>
        </div>
      )}

      {dadosIniciais.length >= 1 && (
        <>
          <Menu />

          {console.log(dadosIniciais[0].videos[0].title)}
          <BannerMain 
            videoTitle={dadosIniciais[0].videos[0].title}
            url={dadosIniciais[0].videos[0].url}
            videoDescription={"Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem"}
          />

          <Carousel 
            ignoreFirstVideo
            category={dadosIniciais[0]}
          />

          <Carousel 
            category={dadosIniciais[1]}
          />

          <Carousel 
            category={dadosIniciais[2]}
          />

          <div className="space"></div>
          
          <Footer/>
        </>
      )}
      
    </div>
  );
}

export default App;
