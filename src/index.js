// Valor gerado aleatoriamente com numero limite sendo 9999
let randomNumber = Number(Math.floor(Math.random() * 10000))

function checkPin() {
    let checkNumber = document.getElementById('checkNumber').value
    if (isNaN(checkNumber)== false) {
        //validação se é número
    if (((((checkNumber).toString()).length) == 4) & (((checkNumber).toString()).indexOf(' ') < 0)){
        //Validação se possui 4 dígitos
        if ((((checkNumber).toString()).indexOf('.') < 0) & (((checkNumber).toString()).indexOf('b') < 0) &(((checkNumber).toString()).indexOf('x') < 0) & (((checkNumber).toString()).indexOf('+') < 0) & (((checkNumber).toString()).indexOf('o') < 0) & (((checkNumber).toString()).indexOf('e') < 0) & (((checkNumber).toString()).indexOf('E') < 0) & (((checkNumber).toString()).indexOf('X') < 0) & (((checkNumber).toString()).indexOf('B') < 0) & (((checkNumber).toString()).indexOf('O') < 0)){
            //Validação se possui ".", "b", "x" , "o" , "e" ou "+"  digitado
            //uma vez que dependendo de onde colocados pode ser validado como número
                if ((checkNumber >= 0)){
                    //Validação se é número positivo
                    if (checkNumber == randomNumber){
                        // Caso acertar
                        document.getElementById('statsPin').innerHTML = "Parabéns! O numero " + randomNumber + " é o PIN!"
                        document.getElementById('lockPin').innerHTML = "lock_open"
                        document.getElementById('checkNumber').setAttribute('Readonly','Readonly')
                    } else {
                        if (checkNumber > randomNumber){
                            // INICIO de caso o o valor colocado pelo usuário estiver maior que o PIN
                            if ((checkNumber - randomNumber) > 500){
                                document.getElementById('statsPin').innerHTML = "O número " + checkNumber + " é muito maior que o PIN!"
                                document.getElementById('checkNumber').value = ""
                            }
                            else {
                                document.getElementById('statsPin').innerHTML = "O número " + checkNumber + " é maior que o PIN!"
                                document.getElementById('checkNumber').value = ""
                            }
                            // FIM de caso o o valor colocado pelo usuário estiver MAIOR que o PIN
                        }
                        else {
                            // INICIO de caso o o valor colocado pelo usuário estiver MENOR que o PIN
                            if ((randomNumber - checkNumber) > 500){
                                document.getElementById('statsPin').innerHTML = "O número " + checkNumber + " é muito menor que o PIN!"
                                document.getElementById('checkNumber').value = ""
                            }
                            else {
                                document.getElementById('statsPin').innerHTML = "O número " + checkNumber + " é menor que o PIN!"
                                document.getElementById('checkNumber').value = ""
                            }
                            // FIM de caso o o valor colocado pelo usuário estiver MENOR que o PIN
                        }
                    }
                }
                // INICIO dos casos de erro em VALIDAÇÃO
                else {
                    document.getElementById('statsPin').innerHTML = "O número do PIN tem que ser positivo!"
                }
            }
            else{
                document.getElementById('statsPin').innerHTML = "O PIN é composto somente por números!"
            }
        }
        else {
            document.getElementById('statsPin').innerHTML = "O número do PIN precisa ter 4 dígitos!"
        }
    }
    else{
        document.getElementById('statsPin').innerHTML = "O PIN é composto somente por números!"
    }
    // FIM dos casos de erro em VALIDAÇÃO
}

// Função para resetar PIN
function resetPIN() {
    window.location.reload()
}