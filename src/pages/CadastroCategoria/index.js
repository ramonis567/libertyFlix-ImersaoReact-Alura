import React, { useState } from 'react';
import PageDefault from '../PageDefault';
import { Link } from 'react-router-dom';

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
      alert("PREENCHA TODOS OS CAMPOS!");
    }else{
      setCategorias([values, ...categorias]);
      setValues(initialValues);    
    }
  }

  return (
    <PageDefault>
      
      <h1>Cadastro de Categoria: <em>{values.name}</em></h1>

      <form style={{ background: values.color, color: "white"}} onSubmit={handleSubmit}>
        <div>
          <label>Nome da Categoria: 
            <input type="text" value={values.name} name="name" onChange={handleChange}/>
          </label>
        </div>
        <div>
          <label>Descrição: 
            <textarea type="text" value={values.description} name="description" onChange={handleChange}/>
          </label>
        </div>
        <div>
          <label>Cor: 
            <input type="color" value={values.color} name="color" onChange={handleChange}/>
          </label>
        </div>
        <button>
          CADASTRAR
        </button>
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
