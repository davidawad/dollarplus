

let DEFAULT_USERNAME = 'CONSTANT DEFAULT USER';
let PROTOCOL = 'https://'
let PORT = '8080'
let HOSTNAME = 'localhost'
export const BACKEND_URL = PROTOCOL + HOSTNAME + ':' + PORT;
export const DEBT_ROUTE = BACKEND_URL + '/debts';


// from restfulapi.net
// URIs should not be used to indicate that a CRUD function is performed. URIs should be used to uniquely identify resources and not any action upon them. HTTP request methods should be used to indicate which CRUD function is performed.

// HTTP GET http://api.example.com/device-management/managed-devices  //Get all devices
// HTTP POST http://api.example.com/device-management/managed-devices  //Create new Device

// HTTP GET http://api.example.com/device-management/managed-devices/{id}  //Get device for given Id
// HTTP PUT http://api.example.com/device-management/managed-devices/{id}  //Update device for given Id
// HTTP DELETE http://api.example.com/device-management/managed-devices/{id}  //Delete device for given Id


