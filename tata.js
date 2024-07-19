function SEND(){
  var nom=document.getElementById("NOM").value;
  var prenom=document.getElementById("PRENOM").value;
  var numero=document.getElementById("NUMERO DE TELEPHONE").value;
  var mail=document.getElementById("E-mail").value;
  var passe=document.getElementById("MOT DE PASSE").value;
  var date=document.getElementById("Date de naissance").value;
  if(nom==nom.value & prenom==prenom.value & numero==numero.value & mail==mail.value & passe==passe.value & date==date.value){
    document.write("BIENVENUE Mr / Me SUR NOTRE PLATE-FORME de FORMATION EN INFORMATIQUE");
  }else alert("ereur"); 
}