/** I am doing this coding with a lot of difficulty, please don't post it yourself¯\_(ツ)_/¯ **/
module.exports.config = {
  name: "🤠", 
  version: "1.0.0", 
  permission: 0,
  credits: "Nayan",
  description: "Random love video",
  prefix: false,
  category: "Media", 
  usages: "", 
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
   var hi = "•┄┅════❁🌺❁════┅┄•\n\nআসসালামু আলাইকুম-!!🖤💫\n\n লাল ফুলে মিষ্টি হাসি 🌻\nআল্লাহ তোমায় ভালোবাসি~» 💜\n\nমিষ্টি মুখে পাখির গান 🌻\nকোরআন আমার সংবিধান 💙 ❤️\n\nসবুজ শ্যামল স্বপ্নে ঘেরা \n ইসলাম ধর্ম সবার সেরা 🥀🌻\n\n🌸🦋--_-Alhamdulillah -_--🍁🌸\n\n•┄┅════❁🌺❁════┅┄•";
  var know = hi[Math.floor(Math.random() * hi.length)];
  var link = [
"https://i.imgur.com/CX0FBIZ.mp4",
"https://i.imgur.com/CX0FBIZ.mp4",
"https://i.imgur.com/CX0FBIZ.mp4",
"https://i.imgur.com/CX0FBIZ.mp4",
"https://i.imgur.com/CX0FBIZ.mp4",
"https://i.imgur.com/CX0FBIZ.mp4",
"https://i.imgur.com/CX0FBIZ.mp4",
"https://i.imgur.com/CX0FBIZ.mp4",
"https://i.imgur.com/CX0FBIZ.mp4",
"https://i.imgur.com/CX0FBIZ.mp4",

];
     var callback = () => api.sendMessage({body:` ${know} `,attachment: fs.createReadStream(__dirname + "/cache/15.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/15.mp4"));    
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/15.mp4")).on("close",() => callback());
   };
 
