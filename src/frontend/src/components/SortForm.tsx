import React, { useState } from 'react';
import { sort } from '../../../index';

const SortForm: React.FC = () => {
  const [width, setWidth] = useState<number | undefined>();
  const [height, setHeight] = useState<number | undefined>();
  const [length, setLength] = useState<number | undefined>();
  const [mass, setMass] = useState<number | undefined>();
  const [result, setResult] = useState<string | null>(null);

  const handleSort = () => {
    if (width && height && length && mass) {
      const classification = sort(width, height, length, mass);
      setResult(`This package is classified as ${classification}.`);
    } else {
      setResult('Please provide all dimensions and mass.');
    }
  };

  return (
    <div className="sort-form">
      <h2>Enter Package Details</h2>
      <div className="input-group">
        <label>Width (centimeters):</label>
        <input
          type="number"
          value={width ?? ''}
          onChange={(e) => setWidth(parseFloat(e.target.value))}
          placeholder="Enter width"
        />
      </div>
      <div className="input-group">
        <label>Height (centimeters):</label>
        <input
          type="number"
          value={height ?? ''}
          onChange={(e) => setHeight(parseFloat(e.target.value))}
          placeholder="Enter height"
        />
      </div>
      <div className="input-group">
        <label>Length (centimeters):</label>
        <input
          type="number"
          value={length ?? ''}
          onChange={(e) => setLength(parseFloat(e.target.value))}
          placeholder="Enter length"
        />
      </div>
      <div className="input-group">
        <label>Mass (kilograms):</label>
        <input
          type="number"
          value={mass ?? ''}
          onChange={(e) => setMass(parseFloat(e.target.value))}
          placeholder="Enter mass"
        />
      </div>
      <button onClick={handleSort} className="btn">
        Classify Package
      </button>
      {result && <div className="result">{result}</div>}
    </div>
  );
};

export default SortForm;
