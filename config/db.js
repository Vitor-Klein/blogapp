if(process.env.NODE_ENV == "production"){
    module.exports = {mongoURI: "mongodb+srv://vitork:160204@blogappdb-b2ux8.mongodb.net/test?retryWrites=true&w=majority"}
}else{
    module.exports = {mongoURI: "mongodb://localhost/blogapp"}
}