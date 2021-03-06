exports.run = (client, message, args) => {
  const ConfigService = require('../config.js');
  if (args[1] == null) {
    return message.channel.send(`${ConfigService.config.prefix}reload [commandName]`, {
      code: 'acsiidoc'
    });
  }
  // the path is relative to the *current folder*, so just ./filename.js

  if (args) {
    delete require.cache[require.resolve(`./${args[0]}.js`)];
    message.reply(`The command ${args[0]} has been reloaded`);
  }
};

exports.description = 'Reloads a command.';
