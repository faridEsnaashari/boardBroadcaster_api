let mongoose = require('mongoose');

const option = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true
};

const url = global.env.MONGOOSE.MONGOOSE_URL;
const databaseName = global.env.MONGOOSE.DATABASE_NAME;
mongoose.connect(`${ url }/${ databaseName }`, option)
    .then(() => {
        console.log("###############################");
        console.log(`mongoose connected successfully to database: ${ databaseName }`);
        console.log("connection options: ");
        console.log(option);
        console.log("###############################");
    })
    .catch(err => console.error(err))

module.exports = mongoose;
