import Videogames from "../../../models/videogames.js";

const updateVG = async (req, res) => {
  let { _id } = req.params;
  const {
    name,
    released,
    date,
    image,
    rating,
    stores,
    genres,
    platforms,
    reviews,
  } = req.body;

  try {
    let updatevg = await Videogames.findByIdAndUpdate(
      { _id: _id },
      {
        name,
        released,
        date,
        image,
        rating,
        stores,
        genres,
        platforms,
        reviews,
      }
    );
    if (updatevg) {
      res.status(200).send(`Videogames with the ID: ${_id} was update`);
    } else {
      res.status(404).send(`the videogame could not be updated`);
    }
  } catch (error) {
    res.status(404).send(error);
  }
};

export default updateVG;
