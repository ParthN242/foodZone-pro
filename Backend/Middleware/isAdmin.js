const isAdmin = async (req, res, next) => {
  const user = req.user;

  if (user.role !== "admin")
    return res
      .status(403)
      .json({ success: false, error: "Unauthorized Access" });

  next();
};

module.exports = isAdmin;
