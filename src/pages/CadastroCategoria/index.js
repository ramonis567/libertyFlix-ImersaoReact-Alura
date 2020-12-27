import React, { useState } from 'react';
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
      //alert("PREENCHA TODOS OS CAMPOS!");
    }else{
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