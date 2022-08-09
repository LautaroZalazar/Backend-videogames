import { Router } from "express";
import delAll from "../Controllers/Videogames/DELETE/deleteAll.js";
import delById from "../Controllers/Videogames/DELETE/deleteID.js";
import getAll from "../Controllers/Videogames/GET/getall.js";
import getVGById from "../Controllers/Videogames/GET/getVGById.js";
import PostVG from "../Controllers/Videogames/POST/postVG.js";
import PostVGAPI from "../Controllers/Videogames/POST/postVGAPI.js";
import updateVG from "../Controllers/Videogames/PUT/update.js";
const router = Router();

router.get("/", getAll);

router.get("/:id", getVGById);

router.post("/", PostVG);

router.post("/VGAPI", PostVGAPI);

router.put("/:id", updateVG);

router.delete("/", delAll);

router.delete("/:id", delById);

export default router;
