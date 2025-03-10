import mongoose, {model, Schema} from "mongoose";


mongoose.connect("mongodb://Biplab:1234@cluster0-shard-00-00.reix0.mongodb.net:27017,cluster0-shard-00-01.reix0.mongodb.net:27017,cluster0-shard-00-02.reix0.mongodb.net:27017/?ssl=true&replicaSet=atlas-5hgdbi-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0")

const UserSchema = new Schema({
  username: {type: String, unique: true},
  password: String
})

export const UserModel = model("User", UserSchema);

const ContentSchema = new Schema({
  title:String,
  link: String,
  tags: [{type: mongoose.Types.ObjectId, ref: 'Tag'}],
  userId: {type: mongoose.Types.ObjectId, ref: 'User', requied: true}
})

export const ContentModel = model("Content", ContentSchema)