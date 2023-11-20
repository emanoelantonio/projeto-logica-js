let companies = [
  { company: 'Apple', year:  1975 },
  { company: 'Microsoft', year:  1976 },
  { company: 'Amazon', year:  1995 },
  { company: 'OpenAI', year:  2015 },
  { company: 'Google', year:  1998 },
]

// const listAll = (companies) => {
//   for (let i = 0; i < companies.length; i++) {
//    console.log(`${i +1}. Empresa: ${companies[i].company}, Ano de Fundação: ${companies[i].year}`);
//   }
// }
// console.log('Lista das Empresas')
// listAll(companies)
// const addItem = (companies) => {
//   for (let i = 0; i < companies.length; i++) {
//     const element = companies[i];
    
//   }
// }

// const updateItem = (companies) => {
  
// }

const removeItem = (companies) => {
  let empresa = "OpenAI";
  let novaListaDeEmpresas = [...companies]

  for(let i = 0; i < novaListaDeEmpresas.length; i++){
    if(novaListaDeEmpresas[i]["company"] == empresa){
       novaListaDeEmpresas.splice(i, 1);
    }
  }
  return novaListaDeEmpresas
}
console.log('Lista das Empresas', removeItem(companies))


// const searchItemById = (id) => {
  
// }