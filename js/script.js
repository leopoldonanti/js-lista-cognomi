var lista = [ "Tadè", "Logallo", "Rozzi", "Nanti", "Ariton", "Pisanelli", "Gallus" "Paratore", "Acosta" ];

var id = prompt("Enter your ID");

lista.push(id)

lista.sort();

console.log(lista);

for(var i=0; i<lista.length; i++){
  console.log((i+1) + " " + lista[i]);
}

for(var z=0; lista[z] != id; z++){
}

console.log("il cognome inserito è " + id + " ed è in posizione " + (z+1));
