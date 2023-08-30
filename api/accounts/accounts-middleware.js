const Accounts = require("./accounts-model");

exports.checkAccountPayload = (req, res, next) => {
  // DO YOUR MAGIC
  // Note: you can either write "manual" validation logic
  // or use the Yup library (not currently installed)
  console.log("check payload middleware");
  next();
};

exports.checkAccountNameUnique = (req, res, next) => {
  // DO YOUR MAGIC
  console.log("check name middleware");
  next();
};

exports.checkAccountId = async (req, res, next) => {
  // DO YOUR MAGIC
  try {
    const { id } = req.params;
    const account = await Accounts.getById(id);
    if (!account) {
      next({ status: 404, message: "account not found" });
    }
  } catch (err) {
    next(err);
  }

  next();
};
