const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

// 🔗 MongoDB connection (DB VM)
mongoose.connect('mongodb://192.168.204.5:27017/microservice', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const ItemSchema = new mongoose.Schema({
  name: String
});

const Item = mongoose.model('Item', ItemSchema);

// ➕ Create an item
app.post('/items', async (req, res) => {
  const item = new Item({ name: req.body.name });
  await item.save();
  res.json(item);
});

// 📄 Get all items
app.get('/items', async (req, res) => {
  const items = await Item.find();
  res.json(items);
});

// 🚀 Start server
app.listen(3000, () => {
  console.log('API running on port 3000');
});
