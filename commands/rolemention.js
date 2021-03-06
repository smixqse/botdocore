exports.aliases = ["rolemention", "mentionrole", "rm", "mention"];
exports.description =
  "Ativa e desativa menções de um cargo rapidamente. (APENAS STAFFERS)";
exports.example = "Gatuno dos Games";
exports.run = (bot, message, args) => {
  if (!message.member.hasPermission("KICK_MEMBERS")) return;
  if (!args || args.length < 1)
    message.channel.send(
      bot.utils.mention(message.author.id) + "Digite o nome de algum cargo."
    );
  if (!args || args.length < 1) return;
  let cancel = args[0] == "cancel";
  if (cancel && global.rolemention.roleID === false)
    message.channel.send(
      bot.utils.mention(message.author.id) + "Não há cargos pendentes."
    );
  if (cancel && global.rolemention.roleID === false) return;
  if (cancel)
    message.guild.roles
      .resolve(global.rolemention.roleID)
      .setMentionable(false, "Pedido por um staffer.");
  if (cancel)
    message.channel.send(
      bot.utils.mention(message.author.id) +
        "O cargo deixou de ser mencionável."
    );
  if (cancel) global.rolemention = { roleID: false, author: false };
  if (cancel) return;
  let role = message.guild.roles.find(
    (role) =>
      role.name.replace("+", "").toLowerCase() == args.join(" ").toLowerCase()
  );
  if (!role)
    message.channel.send(
      bot.utils.mention(message.author.id) +
        "Esse cargo não existe. Escreva o nome do cargo corretamente. (não diferencia letras maiúsculas de minúsculas)"
    );
  if (!role) return;
  role.setMentionable(
    true,
    "Feito por um staffer usando o bot do server para mencionar o cargo em algum lugar."
  );
  message.channel.send(
    bot.utils.mention(message.author.id) +
      "O cargo agora é mencionável. Ele deixará de ser mencionável quando você enviar sua próxima mensagem mencionando esse cargo ou quando alguém digitar `g.rolemention cancel`." +
      (global.rolemention.roleID !== false
        ? " Por favor note que um outro cargo já teve as menções ativadas por este comando e deve ter essa função desativada manualmente agora."
        : "")
  );
  global.rolemention = { roleID: role.id, author: message.author.id };
};
