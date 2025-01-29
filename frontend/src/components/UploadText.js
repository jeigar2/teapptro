import React, { useState } from 'react';

const UploadText = () => {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para subir el texto
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Pega el texto de la obra aquí"
      />
      <button type="submit">Subir Texto</button>
    </form>
  );
};

export default UploadText;