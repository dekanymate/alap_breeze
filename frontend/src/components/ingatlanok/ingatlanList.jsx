import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ingatlanokApi from 'api/ingatlanok-api';

function IngatlanList() {
  const [ingatlanList, setIngatlanList] = useState([]);

  useEffect(() => {
    async function fetchIngatlanList() {
      try {
        const response = await ingatlanokApi.allIngatlanok();
        setIngatlanList(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchIngatlanList();
  }, []);

  async function handleDelete(id) {
    try {
      await ingatlanokApi.deleteIngatlan(id);
      setIngatlanList(ingatlanList.filter((ingatlan) => ingatlan.id !== id));
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <h1>Ingatlanok</h1>
      <ul>
        {ingatlanList.map((ingatlan) => (
          <li key={ingatlan.id}>
            <h2>{ingatlan.kategoria}</h2>
            <p>{ingatlan.leiras}</p>
            <img src={ingatlan.kepURL} alt={ingatlan.kategoria} />
            <p>{ingatlan.ar} Ft</p>
            <p>{ingatlan.tehermentes ? 'Tehermentes' : 'Nem tehermentes'}</p>
            <p>Hirdetés dátuma: {new Date(ingatlan.hirdetesDatuma).toLocaleDateString()}</p>
            <button onClick={() => handleDelete(ingatlan.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default IngatlanList;
