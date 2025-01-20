import mongoose from "mongoose"

export const ConnectDB = async () => {
    await mongoose.connect('mongodb+srv://listyodwi062:ud1tF26H9gaLqdZB@cluster0.in6ot.mongodb.net/todo-app');
    console.log('DB Connected');
    
}