import db from "../database/db.js";
import { DataTypes } from "sequelize";

const noteModel = db.define("Note", {
    title: { type: DataTypes.STRING },
    content: { type: DataTypes.STRING },
    createdAt: {
        field: 'createdAt',
        type: DataTypes.DATE,
    },
    createdBy: { type: DataTypes.STRING }
}, {
    timestamps: false,
    freezeTableName: true,
    tableName: "note"
});

export default noteModel;