'use strict'

let request = require('request');
let { google } = require('googleapis');
let drive = google.drive('v2');
let GAPI_KEY = require('../config/keys');
//let GAPI_KEY = require process.env.key

exports.handler = (event, context, callback) => {


  let getGdriveData = () => {

    return new Promise(resolve => {
      drive.files.list({
        key : GAPI_KEY.googleApi,
        q   : "'1Y5_OnGaNa4MaT-TjntT0S1dBPYto6_GK' in parents",
      }, function (err, res) {

        if (err) {
          console.log('err ', err)
          return(err)
        } else {
          console.log('in else ')
          //console.log('res.data.items ', res.data.items)
          let filteredResults = res.data.items.map( (el) => {
              return {
                        "title": el.title,
                        "description": el.description,
                        "id": el.id,
                        "embedLink": el.embedLink,
                        "thumbnailLink": el.thumbnailLink,
                        "createdDate": el.createdDate,
                        "modifiedDate": el.modifiedDate,
                     }
          });
          console.log('filteredResults ', filteredResults)
          resolve(filteredResults);
        }
      //end function body
      });
    //end promise
    })
  //end fcn
  }


  async function compileResults () {
    let dataGD = await getGdriveData();
    let response = {
      "statusCode": 200,
      "headers": {
        "my_header": "my_value"
      },
      "body": JSON.stringify(dataGD),
      "isBase64Encoded": false
    }
    console.log('response is ', response);
    //console.log('dataGD is ', dataGD)
    //return context.succeed({ "dataGD" : dataGD })
    //callback(null, response)
    return context.succeed(resonse);
  }


  compileResults()
  //console.log('value is ', value)

}

console.log(exports.handler())
