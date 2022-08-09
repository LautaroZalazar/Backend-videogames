import Videogames from "../../../models/videogames.js";

const delById = async (req, res) => {
  let { id } = req.params;

  try {
    let deletevg = await Videogames.findByIdAndDelete({ _id: id });

      if (deletevg) {
        res.status(200).send(`Videogames with the ID: ${id} was delete`);
      } else {
        res.status(404).send("The Videogames don't was deleted");
      }
  } catch (error) {
    res.status(404).send(error);
  }
};

export default delById
