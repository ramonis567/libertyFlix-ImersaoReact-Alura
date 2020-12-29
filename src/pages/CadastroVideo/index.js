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
      setValues(initialValues);
      Swal.fire({
        icon: 'success',
        title: `Vídeo salvo em "${values.categoria}"!`,
        timer: 3000,
        html:"<a href='../../'>Retornar a Home</a>",
        confirmButtonText: "Cadastrar mais um vídeo",
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
              categorias.length >= 1 && (
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
