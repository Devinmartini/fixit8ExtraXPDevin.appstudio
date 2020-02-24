let rows= parseInt(prompt("How many rows do you want? (Put between 1 and 10)"))
let columns= parseInt(prompt("How many rows do you want? (Put between 1 and 10)"))

for (i=1; i<= rows; i++){
  document.write('*')
    for (j=2; j<= columns; j++){
      document.write('*')
}
document.write("<br>")
}
