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


async function fetchVisitor(id) {
    try {
      const response = await axios({
          method: "get",
          url:`${BASE_URL}/visitors/${id}`,
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

async function fetchVisitors(id) {
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
    //(error);
  }
}

async function addVisitor(data) {
  try {
    const response = await axios({
        method: "post",
        url:`${BASE_URL}/visitors/create`,
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



async function getIpAddress(){
    try {
      return new Promise((resolve) => {
        fetch(`https://api64.ipify.org?format=json`).then(x => x.json())
        .then(({ip})=>{
            //console.log(ip)
            resolve(ip); 
        })
    
      }); 
    } catch (error) {
      //console.log(error);
    }
}

async function addVisitorByIp(websiteId, path ) {
  // Create the FormData object
  const formData = new FormData();
  // Get the IP address first
  let ip = await getIpAddress();
  // Append the IP address and other data to the form data
  formData.append('page', path);
  formData.append('ipAddress', ip);
  formData.append('websiteId', websiteId);
  // Now that we have the IP, we can proceed with the addVisitor call
  let response = await addVisitor(formData, 1);
 // console.log(response); // Log the response (optional)

}

export default {
    addVisitorByIp,
    getIpAddress,
    addVisitor,
    fetchVisitors,
    fetchVisitor,
};