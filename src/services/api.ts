import axios from "axios";

const api = axios.create ({
 baseURL: "https://elegant-hypatia-540107.netlify.app/produto.php"
})

export default api;