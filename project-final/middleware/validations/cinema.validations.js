const checkNameCinema = (Module) => async (req, res, next) => {
  const { nameCinema } = req.query;
  try {
    const detail = await Module.findOne({
      where: {
        nameCinema,
      },
    });
    if (detail) {
      next();
    } else {
      res.status(404).send("Vui Lòng Nhập Đúng nameCinema");
    }
  } catch (err) {
    res.status(500).send(err);
  }
};
const checkNameCineplex = (Module) => async (req, res, next) => {
  const { nameCineplex } = req.query;
  try {
    const detail = await Module.findOne({
      where: {
        nameCineplex,
      },
    });
    if (detail) {
      next();
    } else {
      res.status(404).send("Vui Lòng Nhập Đúng nameCineplex");
    }
  } catch (err) {
    res.status(500).send(err);
  }
};
module.exports = {
  checkNameCinema,
  checkNameCineplex,
};
