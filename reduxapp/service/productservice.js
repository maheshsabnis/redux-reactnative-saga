import axios from 'axios';

class ProductService {
    constructor(){
        this.url = 'https://productapiserv.azurewebsites.net';
    }

    async getData(){
        // alert('In Service');
        let response = await axios.get(`${this.url}/api/ProductsAPI`);
        // alert(`The Get response ${JSON.stringify(response.data)}`);
        return response;
    }

    async getDataById(id){
        let response = await axios.get(`${this.url}/api/ProductsAPI/${id}`);
        return response;
    }
    async postData(dept){
        let response = await axios.post(`${this.url}/api/ProductsAPI`,dept, {
            headers:{
                'Content-Type': 'application/json'
            }
        });
        return response;
    }
    async putData(dept){
        let response = await axios.put(`${this.url}/api/ProductsAPI/${dept.deptno}`,dept, {
            headers:{
                'Content-Type': 'application/json'
            }
        });
        return response;
    }

    async deleteData(id){
        let response = await axios.delete(`${this.url}/api/ProductsAPI/${id}`);
        return response;
    }
}

export default ProductService;