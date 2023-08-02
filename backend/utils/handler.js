const success = (code,body)=>{
    return {
        status : "success",
        statusCode : code,
        message : body
    }
}
const error = (code,body)=>{
    return {
        status : "error",
        statusCode : code,
        message : body
    }
}
module.exports = {
    success , error
}