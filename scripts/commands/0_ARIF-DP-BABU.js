module.exports.config = {
  name: "boss",
  version: "1.0.1",
  permssion: 0,
  prefix: true,
  credits: "ARIF-BABU",
  description: "",
  category: "Picture",
  cooldowns: 5,
  dependencies: {
        "axios": "",
        "fs-extra": ""
    }
}

module.exports.run = async({api,event,args,Users,Threads,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
    var link = [
"https://i.imgur.com/A1Qift2.jpg","https://i.imgur.com/8WUF7HJ.jpg","https://i.imgur.com/mLJw7tc.jpg","https://i.imgur.com/a1NPl9F.jpg","https://i.imgur.com/nBYDoNT.jpg","https://i.imgur.com/coGeSau.jpg","https://i.imgur.com/2JjkK0l.jpg","https://i.imgur.com/7qIldX1.jpg","https://i.imgur.com/YpDPpq5.jpg","https://i.imgur.com/c1aaVpd.jpg","https://i.imgur.com/U4eQKKS.jpg","https://i.imgur.com/R9W8CgK.jpg","https://i.imgur.com/xXGtR1H.jpg","https://i.imgur.com/4l2CyaF.jpg","https://i.imgur.com/GZyFV0o.jpg",
     ];
     var callback = () => api.sendMessage({body:`╭•┄┅════❁🌺❁════┅┄•╮\n•—»✨【𝐀𝐑𝐈𝐅 𝐁𝐀𝐁𝐔】✨«—•\n╰•┄┅════❁🌺❁════┅┄•╯\n\nदेख लो मेरे बॉस आरिफ बाबू को सबसे अलग मासूम चेहरा भोली सी सूरत आखों में प्यार दिल में खुमार ♥️🙂`,attachment: fs.createReadStream(__dirname + "/cache/1.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.jpg"));  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/1.jpg")).on("close",() => callback());
   }
