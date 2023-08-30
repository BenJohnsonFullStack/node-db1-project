const Accounts = require("./accounts-model");

exports.checkAccountPayload = (req, res, next) => {
  // DO YOUR MAGIC
  // Note: you can either write "manual" validation logic
  // or use the Yup library (not currently installed)
  const { name, budget } = req.body;
  if (!name || !budget) {
    next({ status: 400, message: "name and budget are required" });
  } else if (name.trim().length < 3 || name.trim().length > 100) {
    next({
      status: 400,
      message: "name of account must be between 3 and 100",
    });
  } else if (!Number(budget)) {
    next({ status: 400, message: "budget of account must be a number" });
  } else if (budget < 0 || budget > 1000000) {
    next({
      status: 400,
      message: "budget of account is too large or too small",
    });
  } else {
    next();
  }
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
    } else {
      req.account = account;
      next();
    }
  } catch (err) {
    next(err);
  }

  next();
};
