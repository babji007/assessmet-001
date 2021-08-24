import axios from 'axios';

const PRODUCT_API_BASE_URL = "https://fakestoreapi.com/Products/";

class ProductService {

    // getEmployees(){
    //     return axios.get(EMPLOYEE_API_BASE_URL);
    // }

    // addEmployee(employee){
    //     return axios.post(EMPLOYEE_API_BASE_URL, employee);
    // }

    getProductById(ProductId){
        return axios.get(PRODUCT_API_BASE_URL + '/' + ProductId);
    }

    // updateEmployee(employeeId,employee){
    //     return axios.put(EMPLOYEE_API_BASE_URL + '/' + employeeId, employee);
    // }

    deleteProduct(ProductId){
        return axios.delete(PRODUCT_API_BASE_URL + '/' + ProductId);
    }
}

export default new ProductService;