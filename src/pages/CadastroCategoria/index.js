import React, { useState, useEffect } from 'react';
import PageDefault from '../PageDefault';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import Swal from 'sweetalert2';
import './CadastroCategoria.css';

export default function CadastroCategoria() {
  const initialValues = {
    name: '',
    description: '',
    color: '#000000',
  }
  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(initialValues);

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
    if(values.name === "" || values.description === ""){
      Swal.fire({
        title: "Erro!",
        text: 'Preencha todos os campos!',
        icon: 'error',
        confirmButtonText: 'Tentar novamente'
      })
    }else{
      createCategoria({
        name: values.name,
        description: values.description,
        color: values.color,
      });
      setCategorias([values, ...categorias]);
      setValues(initialValues);
      Swal.fire({
        icon: 'success',
        title: 'Categoria salva!',
        showConfirmButton: false,
        timer: 1500
      })
    }
  }

  useEffect(() => {
    const URL_TOP = "https://libertyflix.herokuapp.com/categorias";

    fetch(URL_TOP).then(async (serverReturn) => {
      const data = await serverReturn.json();
      setCategorias([
        ...data,   
      ]);
    });
  }, []);

  function createCategoria(data){
    const URL_CAT = "https://libertyflix.herokuapp.com/categorias";

    return fetch(`${URL_CAT}?_embed=videos`, {
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
      
      <h1>Cadastro de Categoria: <em>{values.name}</em></h1>

      <form 
        style={{ background: "black", color: "white", display:"block" }} 
        onSubmit={handleSubmit}
      >

        <div className="InputDiv">
          <input
            placeholder="Nome da Categoria"
            className="InputField" 
            type="text" 
            value={values.name} 
            name="name" 
            onChange={handleChange}
          />
        </div>

        <div className="InputDiv">
          <input
            placeholder="Descrição"
            className="InputField InputTextArea" 
            type="text" 
            value={values.description} 
            name="description"               
            onChange={handleChange}
          />
        </div>

        <div className="InputDiv">
          <label style={{ fontSize: "26px"}}>Cor:
            <input
              placeholder="Cor:"
              className="InputField InputColor" 
              type="color" 
              value={values.color} 
              name="color" 
              onChange={handleChange} 
              placeholder="Cor:"
            />
          </label>
        </div>

        <Button style={{ padding: "5px" }}>
          CADASTRAR
        </Button>
      </form>

      {
        categorias.length === 0 && (
          <div>
            Carregando...
          </div>
        )
      }

      <ul>
        {categorias.map((categoria, index) => {
          return <li key={`${categoria}${index}`}>{categoria.name}</li>
        })}
      </ul>

      <div>
      <Link to="/" style={{marginRight: "2%"}}>
        Ir para a homepage
      </Link>
      <Link to="/cadastro/video">
        Novo vídeo
      </Link>
      </div>
    </PageDefault>
  )
}