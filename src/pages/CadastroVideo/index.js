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
  //const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(initialValues);

  function setValue(key, value){
    setValues({
      ...values,
      [key]: value,
    });
  }
  
  function handleChange(event){
    setValue(event.target.getAttribute("title"), event.target.value);
  }

  function handleSubmit(event){
    event.preventDefault();
    if(values.categoria === "" || values.title === "" || values.url === ""){
      Swal.fire({
        title: "Erro!",
        text: 'Preencha todos os campos!',
        icon: 'error',
        confirmButtonText: 'Tentar novamente'
      })
      //alert("PREENCHA TODOS OS CAMPOS!");
    }else{
      //setCategorias([values, ...categorias]);
      setValues(initialValues);
      Swal.fire({
        icon: 'success',
        title: `Vídeo salvo em ${values.categoria}!`,
        showConfirmButton: false,
        timer: 3000
      })
    }
  }

  useEffect(() => {
    console.log("Mudanças");
    const URL_TOP = "";

    fetch(URL_TOP).then(async (serverReturn) => {
      const data = await serverReturn.json();
      console.log(data);
      //setCategorias([
      //  ...data,   
      //]);
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
          <input
            placeholder="Seleção de Categoria"
            className="InputField InputTextArea" 
            type="text" 
            value={values.description} 
            name="description"               
            onChange={handleChange}
          />
        </div>
        <div className="InputDiv">
          <input
            placeholder="Título"
            className="InputField" 
            type="text" 
            value={values.name} 
            name="name" 
            onChange={handleChange}
          />
        </div>

        <div className="InputDiv">
          <input
            placeholder="URL do Vídeo"
            className="InputField InputTextArea" 
            type="text" 
            value={values.description} 
            name="description"               
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
