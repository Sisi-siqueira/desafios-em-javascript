
<!-- 1º descubra o mmc da pessoa e diga se ela é magra,saudavel,sobrepeso ou obesa -->
<!-- 2º faça um algoritimo para ler a :descriçao do produto ,a quantidade ,e o preço .Calcule e escreva o total (total = quantidade * preco) o desconto e o total a pagar (total a pagar = total - desconto ) sabendo 
que se a quantidade <=5 o desconto sera de 0.02%
se a quantidade <=10 o desconto sera de 0.03%
se a quantidade <30 o desconto sera de 0.05% -->
<!--3º crie um algoritimo que leia a base menor a base maior e  altura de um trapezio e calcule sua base  -->

                                                         
                                                         
                                                         
                                                         
                                                         
                                                         
                                                         
                                                         
                                                         
                                                         
                                                         
                                                         
                                                         
                                                         
                                                         
                                                         
                                                         
                                                         
                                                         
                                                         
                                                         
                                                   //primeiro desafio concluido
    <script>
        let peso = Number(prompt("digite seu peso: "));

        let altura = Number(prompt("digite sua altura: "));

        let mmc = peso / altura ** 2



         if (mmc < 185) {
            console.log('magro')
        } else if (mmc < 25) {

               console.log('soudavel')
         } else if (mmc < 30) {
                console.log('sobrepeso')

            } else {
               console.log('obeso')
            }

            document.write("vc tem a altura de  ", +altura, "e o peso de   ", +peso, "seu mmc é   ", +mmc )
    </script>
                                                //segundo desafio concluido
     <script>
    let produto = prompt('qual produto vc deseja? ')
        let quantidade = prompt('quantidade de produtos? ')
        let preco = prompt('qual o preço desse produto? ')
        let precototal = quantidade * preco

        if (quantidade <= 5) {
            var desconto = precototal * 0.02
        } else if (quantidade <= 10) {
            var desconto = precototal * 0.03
        } else {
            var desconto = precototal * 0.05
        }
       
        console.log('voce tem o desconto de', +desconto)
        let tatalapagar = precototal - desconto
        console.log('o total a pagar é ', +tatalapagar)
    </script>
                                                       //terceiro desafio concluido
    
     <script>
    let bmenor=Number(prompt('digite o valor da primeira base :'))
    let bmaior=Number(prompt('digite o valor da segunda base  :'))
    let a=Number(prompt('digite  o valor da altura   :'))
    let area = (((bmenor+bmaior)/2)*a)
    console.log('a area do trapezio é :' ,+ area)
    
    </script>
        
        
        
        
        duvidas? chamem no direct do instagram @comit_dev.
