import React from 'react';

import './styles.css';

function TableContactItem({ name, surname, email, phone_number }) {
  function handleEditContact() {
    return;
  }

  function handleDeleteContact() {
    return;
  }
  return(
    <tr>
      <td>{name}</td>
      <td>{surname}</td>
      <td>{email}</td>
      <td>{phone_number}</td>
      <td><button className="edit" onClick={handleEditContact}>Editar</button></td>
      <td><button className="delete" onClick={handleDeleteContact}>Deletar</button></td>
    </tr>
  );
}

export default TableContactItem;
