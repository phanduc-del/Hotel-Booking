import mongoose from 'mongoose';
export const connectDB = async ()=>{
    try{
        await mongoose.connect(
            process.env.MONGOURI
        );
        console.log("link tới db thành công");
    }catch(error){
        console.error("lỗi khi kết nối csdl",error);
        process.exit(1);
    }
    
}   