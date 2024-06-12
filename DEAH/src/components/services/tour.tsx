import axiosInstance from "../config/axiosanf";

export const getAllTours = async()=>{
    try {
        const {data} = await axiosInstance.get('tour');
        return data;
    } catch (error) {
        console.log(error);
    }
}
export const getTourById = async(id:any)=>{
    try {
        const {data} = await axiosInstance.get(`tour/${id}`);
        return data;
    } catch (error) {
        console.log(error);
    }
}

