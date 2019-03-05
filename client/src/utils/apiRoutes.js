import axios from "axios";

export default {
    getData: function(queryURL){
        const apiKey = 'uB1NbuOHrhIB1qI3ZsCyrOXB1EjPZe7EACkpqZoi';
        return axios.get(queryURL, 
            {headers: {'X-API-KEY': apiKey}
        });
    }
}
