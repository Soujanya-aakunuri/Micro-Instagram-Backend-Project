import { DataTypes, Model } from 'sequelize';
import sequelize from './index';

class User extends Model {}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(256),
      allowNull: false,
    },
    mobile: {
      type: DataTypes.BIGINT,
      unique: true,
      allowNull: false,
    },
    address: {
      type: DataTypes.TEXT,
    },
    postCount: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
  },
  { sequelize, modelName: 'User', tableName: 'users', timestamps: false }
);

export default User;
