
const express = require('express');
const authRouter = express.Router();

function arouter(nav){
    var authors = [
        {
            author:'Joseph Barbera',
            img: "jos.jpg",
            genre:'Cartoon',
            Book1:'Tom and Jerry',
            Book2:'The Flintstones'
            
        },
        {
            author:'J.K. Rowling',
            img: "jk.jpg",
            genre:'Fantasy',
            Book1:'Harry Potter',
            Book2:'Fantastic Beasts and where to find them'
        }
    ]
    
    authRouter.get('/',function(req,res){
        res.render("authors",
        {
            nav,
            title:'Library',
            authors      
        });
    })

    authRouter.get('/:i1',function(req,res){
        const i1 = req.params.i1
        res.render("author",{
            nav,
            title:'Library',
            author : authors[i1]

        });
    })


     return authRouter;


}


module.exports = arouter;