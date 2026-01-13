import mongoose from 'mongoose';
export const connectDB = async ()=>{
    try{
        await mongoose.connect(
            "mongodb+srv://taolama33:NhOmSo6@cluster0.ojm9o3x.mongodb.net/?appName=Cluster0"
        );
        console.log("link tới db thành công");
    }catch(error){
        console.error("lỗi khi kết nối csdl",error);
        process.exit(1);
    }
    
}