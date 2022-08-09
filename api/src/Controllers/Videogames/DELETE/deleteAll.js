import Videogames from "../../../models/videogames.js";

const delAll = async (req, res) => {
  try {
    await Videogames.remove({});
    res.status(200).send("Data base deleted");
  } catch (error) {
    res.status(404).send(error);
  }
};

export default delAll;
