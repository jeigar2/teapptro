import React, { useState } from 'react';

const SelectPlay = () => {
  const [selectedPlay, setSelectedPlay] = useState('');

  const handleSelect = (e) => {
    setSelectedPlay(e.target.value);
  };

  return (
    <div>
      <select value={selectedPlay} onChange={handleSelect}>
        <option value="">Selecciona una obra</option>
        {/* Opciones de obras */}
      </select>
    </div>
  );
};

export default SelectPlay;