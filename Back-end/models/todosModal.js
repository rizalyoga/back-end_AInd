import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const Todos = db.define(
  "todos",
  {
    todo: {
      type: DataTypes.STRING,
    },
    status_todo: {
      type: DataTypes.BOOLEAN,
    },
  },
  {
    freezeTableName: true,
  }
);

export default Todos;
