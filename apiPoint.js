
var loginEndPoin = function () {
    
    
    ///loginEndPoin.prototype.name = 'Nihal Ahmed';
    loginEndPoin.prototype.init  = function (app){ 
        
    app.get('/api/regisration', function (req, res) {
        
        res.end('');

    });

    app.post('/api/action', function (req, res) {

        console.log(req.body);
  
       // req.write('data\n')
       // console.log(' i am post there...  plz find. \n\n\n\n');
       res.end('Post methods');
      
          });


    app.get('/api/regis', function (req, res) {
        /// console.log(req.boby);
        res.end('Get Methods');

    });
      }

}


module.exports =   new  loginEndPoin();
var myfunction = function myfunction(timeOut, callback) {
    console.log('welcome to nihal technology');
    return setTimeout(function () {
        console.log('hi nihal');
        callback('Nihal Ahmed')
    }, timeOut);
}


console.log(myfunction(9000, function (name) { console.log(name) }))




var flag =true;


function   myfuction(params) {
    
       if(flag){
    
    setTimeout(function(params){
        
        console.log(' i am first one');
          if(flag){
              
              setTimeout(function() {
                  console.log(' i am second');
                  
                  if(flag){
                      
                      setTimeout(function() {
                          
                          console.log(' I am thrid one')
                          
                      }, 1000);
                      
                  }
                  
              }, 1000);
          }
        
        
    },1000)
   
       }
}


var func3  =function (){
    
    if(flag){
        
        
         setTimeout(function(){
        
        console.log(' i am first one');},1000);
        
    }
    
    
}


var func2  = function (func3){
    
    if(flag){
        
        
         setTimeout(function(){
          
          func3()
        console.log(' i am 2 2');},1000);
        
    }
    
    
}


var func1  = function (func2,func3){
     
    if(flag){
        
         setTimeout(function(){
             
             console.log(' i am first one');
             func2(func3)
             
         },1000)
        
     
        
    }
    
    
}
