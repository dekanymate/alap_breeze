import React, { useState } from 'react';
import ingatlanokApi from 'api/ingatlanok-api';


function AddIngatlanForm({ onAddIngatlan }) {
  const [kategoria, setKategoria] = useState('');
  const [leiras, setLeiras] = useState('');
  const [kepURL, setKepURL] = useState('');
  const [ar, setAr] = useState('');
  const [tehermentes, setTehermentes] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const ingatlan = {
        kategoria,
        leiras,
        kepURL,
        ar: parseInt(ar),
        tehermentes,
        hirdetesDatuma: new Date(),
      };
      const response = await ingatlanokApi.ujIngatlan(ingatlan);
      onAddIngatlan(response.data);
      setKategoria('');
      setLeiras('');
      setKepURL('');
      setAr('');
      setTehermentes(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="add-ingatlan-form-container">
      <h2 className="add-ingatlan-form-title">Ingatlan hozzáadása</h2>
      <form className="add-ingatlan-form" onSubmit={handleSubmit}>
        <label className="add-ingatlan-form-label" htmlFor="kategoria">
          Kategória:
          <input
            className="add-ingatlan-form-input"
            type="text"
            id="kategoria"
            name="kategoria"
            value={kategoria}
            onChange={(event) => setKategoria(event.target.value)}
          />
        </label>
        <label className="add-ingatlan-form-label" htmlFor="leiras">
          Leírás:
          <textarea
            className="add-ingatlan-form-input"
            id="leiras"
            name="leiras"
            value={leiras}
            onChange={(event) => setLeiras(event.target.value)}
          />
        </label>
        <label className="add-ingatlan-form-label" htmlFor="kepURL">
          Kép URL:
          <input
            className="add-ingatlan-form-input"
            type="text"
            id="kepURL"
            name="kepURL"
            value={kepURL}
            onChange={(event) => setKepURL(event.target.value)}
          />
        </label>
        <label className="add-ingatlan-form-label" htmlFor="ar">
          Ár (Ft):
          <input
            className="add-ingatlan-form-input"
            type="number"
            id="ar"
            name="ar"
            value={ar}
            onChange={(event) => setAr(event.target.value)}
          />
        </label>
        <div className="add-ingatlan-form-checkbox-container">
          <input
            className="add-ingatlan-form-checkbox"
            type="checkbox"
            id="tehermentes"
            name="tehermentes"
            checked={tehermentes}
            onChange={(event) => setTehermentes(event.target.checked)}
          />
          <label className="add-ingatlan-form-label" htmlFor="tehermentes">
            Tehermentes
          </label>
        </div>
        <button className="add-ingatlan-form-button" type="submit">
          Hozzáad
          </button>
        </form>
        </div>
    );
    }

    export default AddIngatlanForm;