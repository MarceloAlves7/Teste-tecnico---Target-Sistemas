//c) 0, 1, 4, 9, 16, 25, 36, _49___
 //    1  3  5  7   9   11  13

let c = [0]

for (let r = 1; r <= 13; r=r+2){
    
    let ultimo = c.length - 1
  c.push(c[ultimo] + r)
    

  
} 

console.log(c)