const db = require("../../data/db-config");

const getAll = () => {
  return db("accounts");
};

const getByName = (name) => {
  return db("accounts").where("name", name).first();
};

const getById = (id) => {
  return db("accounts").where("id", id).first();
};

const create = (account) => {
  return db("accounts").insert(account);
};

const updateById = (id, account) => {};

const deleteById = (id) => {};

module.exports = {
  getAll,
  getByName,
  getById,
  create,
  updateById,
  deleteById,
};
