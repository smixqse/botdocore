exports.aliases = ["aliases", "do", "comando"]; // Coloque o nome do arquivo como primeiro alias aqui. Ex.: help.js => exports.aliases = ["help", "...", "..."];
exports.description = "Descrição do comando";
exports.example = "1"; // Coloque aqui uma demonstração dos argumentos que o usuário deve usar com o comando. Se o comando não requere argumentos, simplesmente apague essa linha.
exports.only = ["geral", "bots"] // Coloque aqui o nome dos canais em que o bot irá funcionar. Apenas mantenha essa linha se essas permissões servirem apenas para esse comando. Se quiser alterar globalmente, use o config.json.
exports.run = (bot, message, args) => {
    // Aqui vai o código a ser rodado no comando.
    // bot.config => o conteúdo em config.json
    // bot.commands => um Map nome_do_comando:exports_do_comando (inclui os aliases)
    //    Exemplo: bot.commands.get("ajuda").description; => "Comando de ajuda."
    // args => array dos comandos separados por espaços.
    // bot.utils => contém os métodos de utils.js. Ex.: bot.utils.mention("1234567890");
};