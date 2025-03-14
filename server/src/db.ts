import mongoose, {model, Schema} from "mongoose";

//DB link
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
  type: String,
  userId: {type: mongoose.Types.ObjectId, ref: 'User', requied: true}
})

const LinkSchema = new Schema({
  hash: String,
  userId: {type: mongoose.Types.ObjectId, ref: 'User', required: true, unique: true },
})

export const LinkModel = model("Links", LinkSchema);

export const ContentModel = model("Content", ContentSchema)