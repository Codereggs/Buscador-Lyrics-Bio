import axios from 'axios'


    export const getData = async (url) => {
        try {
            const res = await axios.get(url);
            console.log(res.data);
            return res.data;
          } catch (error) {
            console.error("Error nro: "+error.response.status, error.response.statusText || "Ocurrió un problema en la solicitud.");
            return error;
          }
                
    }