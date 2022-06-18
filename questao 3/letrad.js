//d) 4, 16, 36, 64, __100__
//    12   20  28  36


 let d = [4]

 for (let r = 12; r <= 36; r=r+8){
     
     let ultimo = d.length - 1
   d.push(d[ultimo] + r)
     
 
   
 } 
 
 console.log(d)

 //O quinto termo é 100