
//1 - crie uma função que exiba uma mensagem no console

function cachorro  () {

    console.log("olá humano ")

}

cachorro()

console.log("-------------------------------------------------")


const cachorro2 = () => console.log( "bão , Humano")

cachorro2()

console.log("-------------------------------------------------")

//2 - crie uma função que receba o seu nome como (parâmetro) e exiba no console

const soma = function(a , b)  {
       console.log(  a + b)
}
 soma(2,3)

 console.log("-------------------------------------------------")

 // ou 

 const soma2 = (a , b) => (a + b)  
 console.log(soma2(2,3));

console.log("-------------------------------------------------")


//3 - crie uma função que receba nome, idade, e um estilo musical preferido (parâmetros) e exiba no console

 const eu = function  (nome , idade , estiloMusical) {
                return{
                            nome,
                            idade,
                            estiloMusical
                }
}

console.log(eu ('Natan' , 20 , "MPB ,POP,ROCKY e indie"))


console.log("-------------------------------------------------")


function newEU (nome , idade, estiloMusical ){

    console.log(`meu nome é ${nome} , tenho ${idade} anos é meu tipos de músicas são${estiloMusical}  `)


}

newEU("Natan" , "20 anos" , " MPB , POP , indie e Rocky")

console.log("-------------------------------------------------")



//4 - crie uma função que receba um filme, uma música (parâmetros) e exiba no console


function   myFavoriteMovies (filme , musica){

       console.log(` meu filme favorito é ${filme} é minha música favorita é ${musica} `) 
}

    myFavoriteMovies( "o lobo de wall street" , "505 arctic monkeys")

    console.log("-------------------------------------------------")


function madruguinha (filme , musica){

            return {
                        filme,
                        musica

            }
}

    console.log(madruguinha("o lobo de wall street" ,  "505 arctic monkeys"))

    console.log("-------------------------------------------------")


    function madruguinha2 (filme , musica){

        return {
                    filme:'o lobo de wall street' ,
                    musica: '505 arctic monkeys' ,
                  

        }
    }

console.log( madruguinha2())

console.log("-------------------------------------------------")
//5 - crie uma função que retorne o triplo do número recebido no parâmetro da função

        function triplo (numero) {

            return  numero * 3
        }

  console.log(triplo(3))  


  // ou 

        const num = (  a) => a * 3 

    console.log( num(3))

    
    console.log("-------------------------------------------------")


//6 - crie uma função que  verifique se uma  variável é true ou false


function  maiorDeIdade ( idade){
    if( idade >= 18   ){
        console.log("pode entrar na festa é aproveita")
    }
    else if  (idade  <= 18 )
        console.log("não pode entrar na festa , espera ano que vem caso for completar 18")
    }


    maiorDeIdade(19)













