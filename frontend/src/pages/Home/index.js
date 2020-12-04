import React, { useState } from 'react';

import Header from '../../components/Header';
import TableContactItem from '../../components/TableContactItem';
import Warn from '../../components/Warn';

import './styles.css';

function Home() {
  return(
    <>
      <Header />
      <div className="container">
        <h1>Abaixo estão todos os seus contatos</h1>
        <Warn message="Você precisa fazer login para editar esta página." />
        <table>
          <tr className="table-head">
            <th className="label">Nome</th>
            <th className="label">Sobrenome</th>
            <th className="label">E-mail</th>
            <th className="label">Número</th>
            <th className="label"> </th>
            <th className="label"> </th>
          </tr>
          <TableContactItem
            name="Lohana"
            surname="Torres"
            email="heyloh@email.com"
            phone_number={21999999999}
          />
        </table>
      </div>
    </>
  );
}

export default Home;
