import mongoose from 'mongoose';




const Connection = async (username , password) => {
    const URL = `mongodb+srv://${username}:${password}@cluster0.rurl5lb.mongodb.net/PROJECT0?retryWrites=true&w=majority`;
    try {

        await mongoose.connect(URL, { useNewUrlParser: true });
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting with database' , error);
    }
}

export default Connection;