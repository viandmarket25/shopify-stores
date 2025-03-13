import axios from 'axios';
import config from './config.js'
const BASE_URL = config.domain;
/**
 * 
 * @param {*} cookieName 
 * @returns 
 */
let getCookie = (cookieName) => {
  const name = cookieName + "=";
  const cDecoded = decodeURIComponent(document.cookie); //to be careful
  const cArr = cDecoded.split("; ");
  let result;
  cArr.forEach((val) => {
    if (val.indexOf(name) === 0) result = val.substring(name.length);
  });
  return result;
};
  
let token
if (typeof getCookie(config.cookie) === 'undefined') {
  //console.log('The variable is undefined.');
} else {
  token=JSON.parse(getCookie(config.cookie)).token
}
//console.log(token)

async function fetchProduct(id) {
  try {
    const response = await axios({
        method: "get",
        url:`${BASE_URL}/products/web/${id}`,
        headers: {
         // "Authorization" : `Bearer ${token}`,
          "Access-Control-Allow-Origin": "*",
          "Content-Type":"application/json"         
        },
        baseURL: config.baseURL,
    });
    return response.data;
} catch (error) {
 // console.log(error);
}
}


async function fetchProducts() {
  try {
    const response = await axios({
        method: "get",
        url:`${BASE_URL}/products/web`,
        headers: {
         // "Authorization" : `Bearer ${token}`,
          "Access-Control-Allow-Origin": "*",
          "Content-Type":"application/json"         
        },
        baseURL: config.baseURL,
    });

    return response.data;

} catch (error) {
  //console.log(error);
}
}

export default {
  fetchProducts,
  fetchProduct
};