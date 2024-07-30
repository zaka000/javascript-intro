const { exec } = require('child_process');
const path = require('path');

// Caminho para o script que contém a função scheduleLog
const  scheduleLog  = require('./index');
const { log } = require('console');

const mensagens = [
    "Mensagem 1", "Mensagem 4", "Mensagem 3", "Mensagem 8", "Mensagem 5",
    "Mensagem 6", "Mensagem 7", "Mensagem 2", "Mensagem 9", "Mensagem 10"
];

// Mensagens esperadas
const expectedOrder = [
    "Mensagem 1", "Mensagem 2", "Mensagem 3", "Mensagem 4", "Mensagem 5",
    "Mensagem 6", "Mensagem 7", "Mensagem 8", "Mensagem 9", "Mensagem 10"
];

describe('Verifica a ordem dos logs', () => {
    let logs = scheduleLog(mensagens);

    
    test('deve retornar a lista na ordem ordem crescente', () =>{
        expect(logs).toEqual(expectedOrder)
    })

});
