const db = require("../../data/db-config");

const getAll = () => {
  return db("accounts");
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
  getById,
  create,
  updateById,
  deleteById,
};
