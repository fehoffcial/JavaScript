let hora = new Date;
console.log(hora)
// alert(`DIA ${hora.getDate()} MES ${hora.getMonth()} ANO ${hora.getFullYear()}`)
alert(hora.toLocaleDateString("pt-br"))