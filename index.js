const mensagens = [
    "Mensagem 1", "Mensagem 4", "Mensagem 3", "Mensagem 8", "Mensagem 5",
    "Mensagem 6", "Mensagem 7", "Mensagem 2", "Mensagem 9", "Mensagem 10"
];

 function scheduleLog(messages) {
    

    return messages.sort((a, b) => (
        a.split(' ').pop() - b.split(' ').pop()
    ))
}


module.exports= scheduleLog
