import React, { useState } from 'react';
import axios from 'axios';

function Form() {
  const [titulo, setTitulo] = useState('');
  const [imgSRC, setImgSRC] = useState('');
  const [descripcion, setDescripcion] = useState('');

  const agregarPost = async () => {
    // Crear un objeto con los datos del post
    const post = {
      titulo,
      img: imgSRC,
      descripcion,
      likes: 0
    };

    console.log('Datos del post:', post); // Verificar los datos antes de enviar la solicitud POST

    try {
      // Enviar la solicitud POST al backend para agregar el post
      await axios.post('http://localhost:3000/posts', post);

      // Reiniciar los campos del formulario
      setTitulo('');
      setImgSRC('');
      setDescripcion('');
    } catch (error) {
      console.error('Error al agregar el post:', error);
    }
  };

  return (
    <div className="form">
      <div className="mb-2">
        <h6>Agregar post</h6>
        <label>Título</label>
        <input
          value={titulo}
          onChange={(event) => setTitulo(event.target.value)}
          className="form-control"
        />
      </div>
      <div className="mb-2">
        <label>URL de la imagen</label>
        <input
          value={imgSRC}
          onChange={(event) => setImgSRC(event.target.value)}
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label>Descripción</label> <br />
        <textarea
          value={descripcion}
          onChange={(event) => setDescripcion(event.target.value)}
          className="form-control"
        ></textarea>
      </div>
      <div className="d-flex">
        <button onClick={agregarPost} className="btn btn-light m-auto">
          Agregar
        </button>
      </div>
    </div>
  );
}

export default Form;
