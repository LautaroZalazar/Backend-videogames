import Videogames from "../../../models/videogames.js";

const getAll = async (req, res) => {
  const {name} = req.query
  try {
    if(name){
      console.log(name);
    let vg = await Videogames.find({"name": new RegExp( ".*" + name + ".*")})
      .populate({ path: "genres", select: "name" })
      .populate({ path: "platforms", select: "name" })
      .populate({ path: "reviews", select: "review rating" })
      if(vg){
        console.log(vg);
        res.send(vg)
      } else{
        res.send("Videogame is not found")
      }
    } else{
      let vg = await Videogames.find({})
        .populate({ path: "genres", select: "name" })
        .populate({ path: "platforms", select: "name" })
        .populate({ path: "reviews", select: "review rating" })
      res.send(vg)
    }
  } catch (error) {
    res.send(error);
  }
};

export default getAll;
