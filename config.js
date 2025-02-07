/*░██████╗░░█████╗░██╗░░░░░██████╗░███████╗███╗░░██╗
██╔════╝░██╔══██╗██║░░░░░██╔══██╗██╔════╝████╗░██║
██║░░██╗░██║░░██║██║░░░░░██║░░██║█████╗░░██╔██╗██║
██║░░╚██╗██║░░██║██║░░░░░██║░░██║██╔══╝░░██║╚████║
╚██████╔╝╚█████╔╝███████╗██████╔╝███████╗██║░╚███║
░╚═════╝░░╚════╝░╚══════╝╚═════╝░╚══════╝╚═╝░░╚══╝

░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗
██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║
██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║
╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║
░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║
░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝

███╗░░░███╗██████╗░
████╗░████║██╔══██╗
██╔████╔██║██║░░██║
██║╚██╔╝██║██║░░██║
██║░╚═╝░██║██████╔╝
╚═╝░░░░░╚═╝╚═════╝░*/









const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });


function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
  //  සෙසන් අයිඩී එක දාන්න👇👇👇 (උඩු කොමා දෙක ඇතුලේ)
  SESSION_ID: process.env.SESSION_ID || "Golden-Queen-MD-k8RDHZyD#AD_FI9Zp_bofi3JPPOpRut0vi1cfydgXHPpl7Aj8MTMftrc", 

//  Mongodp URl එක දාන්න 👇👇👇 (උඩු කොමා දෙක ඇතුලේ )
  MONGODB: process.env.MONGODB || "mongodb+srv://shehan:Shehan2004@cluster0.a0e8f.mongodb.net/",


MAX_SIZE: 500,
DELETEMSGSENDTO : process.env.DELETEMSGSENDTO === undefined ? '' : process.env.DELETEMSGSENDTO
};
