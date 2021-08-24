const { Cineplex } = require("../../models");
const getListCineplex = async (req, res) => {
  try {
    const listCinePlex = await Cineplex.findAll({
      attributes: { exclude: ["createdAt", "updatedAt"] },
    });
    res.status(200).send(listCinePlex);
  } catch (err) {
    res.status(500).send(err);
  }
};
module.exports = {
  getListCineplex,
};
