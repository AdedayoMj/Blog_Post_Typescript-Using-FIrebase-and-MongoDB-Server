const config = {
    mongo:{
        options:{
            useUnifiedTopology:true,
            useNewUrlParser:true,
            socketTimeoutMS:30000,
            keepAlive:true,
            poolSize:50,
            autoIndex:false,
        },
        url:"mongodb+srv://dbBlogUser:dbBlogUser@quizdb.xspow.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
    },
    server: {
        host: 'localhost',
        port:1987
    }
}

export default config;