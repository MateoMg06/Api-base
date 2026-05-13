import { Router } from "express";
import { GetData, SaveData } from "../utils/utils.js";

const router = Router();

router.get("/", (req, res) => {
  const id = req.query.id;
  const data = GetData();
  if (id) {
    const finded = data.findIndex((user) => {
      return user.id == id;
    });
    return res.json(data[finded]);
  }
  res.json(data);
});

router.post("/", (req, res) => {
  const data = GetData();
  const last = data.at(-1);
  let lastId = Number(last.id);
  const newData = {
    id: lastId + 1,
    ...req.body,
  };
  data.push(newData);
  SaveData(data);
  res.status(201).json({
    message: "se creo",
  });
});

router.patch("/:id", (req, res) => {
  const data = GetData();
  const item = req.params.id;
  const finded = data.findIndex((user) => {
    return user.id == item;
  });
  data[finded] = {
    ...data[finded],
    ...req.body,
  };
  SaveData(data);
  res.status(200).json({
    message: "se creo",
  });
});
export default router;
