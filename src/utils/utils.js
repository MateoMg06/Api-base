import fs from "fs";
export { GetData, SaveData };
const routesDB = "./src/db.json";

function GetData() {
  return JSON.parse(fs.readFileSync(routesDB));
}

function SaveData(data) {
  fs.writeFileSync(routesDB, JSON.stringify(data, null, 4));
}




  