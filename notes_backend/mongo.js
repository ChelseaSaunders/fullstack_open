const mongoose = require('mongoose');

if (process.argv.length < 3) {
  console.log('Please provide the password as an argument: node mongo.js <password>');
  process.exit(1);
}

const password = process.argv[2];

const url = `mongodb+srv://chels1440:${password}@cluster0.eihyvn3.mongodb.net/noteApp?retryWrites=true&w=majority`;

const noteSchema = new mongoose.Schema({
  content: {
    type: String,
    minLength: 5,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  important: Boolean,
});

const Note = mongoose.model('Note', noteSchema);

mongoose
  .connect(url)
  .then((result) => {
    console.log('connected');

    Note
      .find({})
      .then(result => {
        result.forEach(note => {
          console.log(note);
        });
        mongoose.connection.close();
      });
  })
  .catch((err) => console.log(`LOGGING ERROR: ${err}`));