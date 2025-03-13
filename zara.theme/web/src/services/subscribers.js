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


async function fetchSubscriber(id) {
    try {
      const response = await axios({
          method: "get",
          url:`${BASE_URL}/subscribers/${id}`,
          headers: {
            "Authorization" : `Bearer ${token}`,
            "Access-Control-Allow-Origin": "*",
            "Content-Type":"application/json"         
          },
          baseURL: config.baseURL,
      });
      //console.log(response.data);
      let result = response.data;
      if (result.resultCode == 1) {
        return result;
      } else if (result.resultCode == 0) {
        return null;
      }
  } catch (error) {
   // console.log(error);
  }
}

async function fetchSubscribers(id) {
    try {
      const response = await axios({
          method: "get",
          url:`${BASE_URL}/subscribers`,
          headers: {
            "Authorization" : `Bearer ${token}`,
            "Access-Control-Allow-Origin": "*",
            "Content-Type":"application/json"         
          },
          baseURL: config.baseURL,
      });
     // console.log(response.data);
      let result = response.data;
      if (result.resultCode == 1) {
        return result;
      } else if (result.resultCode == 0) {
        return null;
      }
  } catch (error) {
   // console.log(error);
  }
}


async function addSubscriber(data) {
  try {
    const response = await axios({
        method: "post",
        url:`${BASE_URL}/subscribers/create`,
        data:data,
        headers: {
        //  "Authorization" : `Bearer ${token}`,
          "Access-Control-Allow-Origin": "*",
         // "Content-Type":"application/json"         
        },
        baseURL: config.baseURL,
    });
   // console.log(response.data);
    let result = response.data;
    if (result.resultCode == 1) {
      return result;
    } else if (result.resultCode == 0) {
      return null;
    }
} catch (error) {
 //console.log(error);
}
}

export default {
  addSubscriber,
  fetchSubscribers,
  fetchSubscriber,
  

};