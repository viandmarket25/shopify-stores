
import deploy from '../mode.json'
// ::::::::: mode [dev, production]
let mode = deploy.deploy
// ::::::::: mode [dev, production]

//let mode ='production'

let domain ='http://127.0.0.1:8001'
let baseUrl ='http://127.0.0.1'
let settingsCookie = 'dev-visitor-settings'

if(mode=='dev'){
    domain = 'http://127.0.0.1:8001'
    baseUrl = 'http://127.0.0.1'
    settingsCookie = 'dev-visitor-settings'

}else if(mode=='production'){
    domain = 'https://api.jinzhangroup.com'
    baseUrl = domain 
    settingsCookie = 'live-visitor-settings'

}



let initRegion =  async (cookie)=>{
    let localStoreData = JSON.stringify({
        region:'en',
        lng:'en'
    });
    // :::::::: if the cookie is not set, set it
    if(cookie.get(settingsCookie)!=='undefined' && cookie.get(settingsCookie)!==null ){
        return cookie.get(settingsCookie).region;
    }else{
        //alert(cookie.get(settingsCookie))    
        cookie.set(settingsCookie, localStoreData);
       // console.log( Object.keys(cookie.get(settingsCookie)) )
        //window.localStorage.setItem("siteAccessT", localStoreData ) 
       // console.log(localStoreData);
        return cookie.get(settingsCookie).region;

    }
   
}

let setRegion = async (region,cookie)=>{
    let countries=['Nigeria','China','Japan','Spain','France','Germany'];
    let localStoreData = JSON.stringify({
        region:region,
        lng:region
    });
    // :::::::: if the cookie is not set, set it
    if(cookie.get(settingsCookie)!=='undefined' && cookie.get(settingsCookie)!==null ){
        //alert('set')
        //alert(cookie.get(settingsCookie))
        cookie.set(settingsCookie, localStoreData);
        //console.log( Object.keys(cookie.get(settingsCookie)) )
        //window.localStorage.setItem("siteAccessT", localStoreData ) 
        //console.log(localStoreData);
    }else{

        //alert(cookie.get(settingsCookie))
        cookie.set(settingsCookie, localStoreData);
        //console.log( Object.keys(cookie.get(settingsCookie)) )
        //window.localStorage.setItem("siteAccessT", localStoreData ) 
        //console.log(localStoreData);
    }
}

let getRegion = async (cookie)=>{
    if(cookie.get(settingsCookie)!=='undefined' && cookie.get(settingsCookie)!==null ){
        //console.log(typeof cookie.get(settingsCookie) )

        //console.log(cookie.get(settingsCookie))
        //console.log(cookie.get(settingsCookie).region)
        return cookie.get(settingsCookie).region;
    }else{
        return 0;
    }
}




export default {
    domain:domain,
    baseUrl:baseUrl,
    settingsCookie,
    setRegion,
    getRegion,
    initRegion,
}