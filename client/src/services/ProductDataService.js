import http from '../http.common';
class ProductDataService {
    getAll(){
        return http.get('/product')
    }

    add(data){
        return http.post('/product/add', data)
    }
}

export default new ProductDataService();