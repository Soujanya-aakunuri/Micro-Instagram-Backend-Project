import { DataTypes, Model } from 'sequelize';
import sequelize from './index';
import User from './user';

class Post extends Model {}

Post.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
    },
    userId: {
      type: DataTypes.INTEGER,
      references: { model: User, key: 'id' },
    },
  },
  { sequelize, modelName: 'Post', tableName: 'posts', timestamps: false }
);

User.hasMany(Post, { foreignKey: 'userId' });
Post.belongsTo(User, { foreignKey: 'userId' });

export default Post;
