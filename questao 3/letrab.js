//b) 2, 4, 8, 16, 32, 64, ____

 function progressãoGeométrica(termo){
    let termo1 = 2
    let q = 2
    let n = termo

    let pg = termo1 * q**(n - 1)

    return pg

 }

 console.log(progressãoGeométrica(7))


 // Sétimo termo = 128