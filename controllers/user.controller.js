const { response } = require('express');

const usuariosGet = (req, res = response) => {
  const { q, nombre = 'No name', apikey, page = 1, limit = 5 } = req.query;
  res.json({
    msg: 'get  - controlador ',
    q,
    nombre,
    apikey,
    page,
    limit,
  });
};

const usuariosPut = (req, res = response) => {
  const id = req.params.id;
  res.json({
    msg: 'put  - controlador',
    id,
  });
};
const usuariosPost = (req, res = response) => {
  const { nombre, edad } = req.body;

  res.json({
    msg: 'post  - controlador',
    nombre,
    edad,
  });
};

const usuariosDelete = (req, res = response) => {
  res.json({
    msg: 'delete  - controlador',
  });
};

module.exports = {
  usuariosGet,
  usuariosPut,
  usuariosPost,
  usuariosDelete,
};
