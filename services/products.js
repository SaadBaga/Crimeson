import axios from 'axios';

export const getAllProducts = async() => {
    try {
        const productResponse = await axios.get('https://dummyjson.com/products');
        if(productResponse.status === 200){
            return productResponse?.data;
        }else{
            return {};   
        }
    }catch(error){
        return error.response;
    }
}