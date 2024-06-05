import { Model, DataTypes, CreationOptional, InferAttributes, InferCreationAttributes } from "sequelize";
import db from '../utils/db'

interface TaskModel extends Model<InferAttributes<TaskModel>, InferCreationAttributes<TaskModel>> {
    // Some fields are optional when calling UserModel.create() or UserModel.build()
    id: CreationOptional<string>;
    name: string;
    description: string;
    amount: number;
    purchased: boolean;
  }

export const Task = db.define<TaskModel>("task", {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    amount: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    purchased: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
})