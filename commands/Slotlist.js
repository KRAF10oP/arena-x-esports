module.exports = [{
name: "setupslotlist",
aliases: ['slotlist', 'setup-slotlist'],    code: '$title[1;🛠 Slotlist Manager (1/26)] $description[1;Which is the default Slotlist Channel?]                         $footer[1;Reply with "cancel" to stop the process.]                            $color[1;00FF99] $awaitMessages[$channelId;$authorId;1m;everything;slotlistchannel;{newEmbed: {description:You Failed To Select A Channel In Time. Try Again!} {color:FF0000}}]      $suppressErrors[An error occured while executing this command please report this issue on our support server.]      $onlyPerms[admin;{newEmbed:{description:You Need Admin Perms To Execute This Command.} {color:RED}}] '
}]