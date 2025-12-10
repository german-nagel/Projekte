//Email wird mit "***" Maskiert. Anfangs- und End-Buchstabe bleiben

let eMail = "gnagel1@wbs.de";
let eMailPre = eMail.slice(0, eMail.indexOf("@"));
let eMailVersch = "";

eMailVersch += eMail.charAt(0);
for (let i = 1; i < eMailPre.length -1; i++) {
    eMailVersch += "*";
};

eMailVersch += eMailPre.charAt(eMailPre.length-1);

console.log("Verschlüsselte E-Mail: " + eMailVersch + eMail.slice(eMail.indexOf("@")));
// Console: Verschlüsselte E-Mail: g*****1@wbs.de