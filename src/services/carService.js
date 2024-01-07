import axios from "axios"

export default class CarSercive{
    getCars(){
        return axios.get("http://localhost:8081/api/cars")
    }

    getByModelNameContain(modelName){
        return axios.get("http://localhost:8081/api/cars/getByModelNameContain?modelName="+modelName)
    }
}