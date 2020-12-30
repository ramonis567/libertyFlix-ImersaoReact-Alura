import React, { useState, useEffect } from 'react';
import PageDefault from '../PageDefault';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import Swal from 'sweetalert2';
import './CadastroVideo.css';

export default function CadastroVideo() {
  const initialValues = {
    categoria: '',
    title: '',
    url: '',
  }
  const [values, setValues] = useState(initialValues);
  const [categorias, setCategorias] = useState([]);


  function setValue(key, value){
    setValues({
      ...values,
      [key]: value,
    });
  }
  
  function handleChange(event){
    setValue(event.target.getAttribute("name"), event.target.value);
  }

  function handleSubmit(event){
    event.preventDefault();
    if(values.categoria === "" || values.title === "" || values.url === ""){
      Swal.fire({
        title: "Você deixou um ou mais campos vazios!",
        icon: 'error',
        confirmButtonText: 'Retornar ao cadastro'
      });
    }else{
      createVideo({
        title: values.title,
        url: values.url,
        categoriaId: parseInt(values.categoria),
      });
      Swal.fire({
        icon: 'success',
        title: `Vídeo salvo!`,
        timer: 10*1000,
        html:"<a href='../../'>Retornar a Home</a>",
        confirmButtonText: "Cadastrar mais um vídeo",
      })
      setValues(initialValues);
    }
  }

  useEffect(() => {
    const URL_CAT = "https://libertyflix.herokuapp.com/categorias";

    fetch(URL_CAT).then(async (serverReturn) => {
      const data = await serverReturn.json();
      setCategorias([
        ...data,   
      ]);
    });
  }, []);

  function createVideo(data){
    const URL_VID = "https://libertyflix.herokuapp.com/videos";

    return fetch(`${URL_VID}?_embed=videos`, {
      method: "POST",
      headers: {
        "Content-type":"application/json",
      },
      body: JSON.stringify(data),
    }).then(async (respostaDoServidor) => {
      if (respostaDoServidor.ok) {
        const resposta = await respostaDoServidor.json();
        return resposta;
      } else {
        Swal.fire({ //Não sei se está funcionando, desenvolver teste
          icon: 'question',
          title: `Tivemos um problema para enviar seus dados, aguarde ou tente novamente!`,
          timer: 15*1000,
          html:"<a href='../../'>Retornar a Home</a>",
          confirmButtonColor: "red",
          confirmButtonText: "Continuar na página de cadastro de vídeos",
        })
      }
    })
  }

  return (
    <PageDefault>
      <h1>Cadastro de Vídeo: </h1>

      <form
        style={{ background: "black", color: "white", display:"block" }} 
        onSubmit={handleSubmit}
      >

        <div className="InputDiv">
          <select
            placeholder="Selecione a Categoria"
            className="InputField InputTextArea" 
            value={values.categoria} 
            name="categoria"               
            onChange={handleChange}
          >
            {
              categorias.length === 0 && (
                <option>
                  Carregando...
                </option>
              )
            }

            {
              categorias.length > 0 && ( //Bug na primeira opção - Corrigir futuramente
                categorias.map((categoria) => {
                  return <option value={categoria.id}>{categoria.name}</option>
                })
              )
            }
          </select>
        </div>
        <div className="InputDiv">
          <input
            placeholder="Título"
            className="InputField" 
            type="text" 
            value={values.title} 
            name="title" 
            onChange={handleChange}
          />
        </div>

        <div className="InputDiv">
          <input
            placeholder="URL do Vídeo"
            className="InputField InputTextArea" 
            type="text" 
            value={values.url} 
            name="url"               
            onChange={handleChange}
          />
        </div>

        <Button style={{ padding: "5px" }}>
          SALVAR VÍDEO
        </Button>
        
      </form>

        
      <div>
        <Link to="/" style={{marginRight: "2%"}}>
          Ir para a homepage
        </Link>
        <Link to="/cadastro/categoria">
          Nova categoria
        </Link>
      </div>
    </PageDefault>
  )
}
