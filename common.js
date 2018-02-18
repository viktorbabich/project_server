module.exports = {
  CORSMiddleware
};

function CORSMiddleware(app) {
    app.use(function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "http://localhost:1738");
        res.header("Access-Control-Allow-Methods", "DELETE GET HEAD POST PUT OPTIONS TRACE");
        res.header("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
        res.header("Access-Control-Allow-Credentials", "true");
        
        next();
    });

}











