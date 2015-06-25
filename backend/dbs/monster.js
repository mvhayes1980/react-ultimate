import {range, reduce} from "ramda";
import makeModel from "shared/makers/monster";

// FAKE DB =========================================================================================
export function makeDB() {
  return reduce(db => {
    let model = makeModel();
    db[model.id] = model;
    return db;
  }, {}, range(0, 50));
}

export default makeDB();