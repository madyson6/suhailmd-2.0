const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349117324838";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";

jogXCIzUEZTS1FFV1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTExNzMyNDgzODo5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI0NzA2MDI1ODY3MjY4MDo5QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0ppL2ovOEJFUGJOdzdrR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiY000SVRmbmNtTHZBb1ZUQVMvSG5lZjFBOGFSdFM1aklHOWdMdUQzUnhnTT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJQNWRsVDV1VVM5Wk1RNnFUZFpRWEJtVkZPeWVPUmgvWmxTa2ZoRldkUHUwQkYrTElDRUxmb1VzNUpYam1QZkJqS0taMTVUemZkMVJBTTJ2QXUwdXRBUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCIrbWpKR25XbmtQUUZ6VlFvSkNzMlRPd1ZJWVJ2MXNHQ2lmS2I5b1V2ZklrQmRMb0I3azVyR0llOEs4aU1CQ1hNTVZCM2JZa2d1WGtwVXhnQjNtYUxEQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MTE3MzI0ODM4OjlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzEyNTgxMDYsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFOWGhcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU5YaC5qc29uIjogIntcImtleURhdGFcIjpcInlLcjFMd2t0U1drWTZmdkhYT1FXRDNzVmtrb2xidzh2NGIyRkFHdzNLZGc9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NTM1MDI3NjA4LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzEyNTgxMDk4ODNcIn0iCn0
global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_23_17_11_10_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMjIsXG4gICAgICAgIDE2LFxuICAgICAgICAyMjgsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjI5LFxuICAgICAgICA4NyxcbiAgICAgICAgMjA1LFxuICAgICAgICA2OSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDEwMixcbiAgICAgICAgNTksXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE3MyxcbiAgICAgICAgOCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjExLFxuICAgICAgICAxNTYsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjUyLFxuICAgICAgICA4LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNjYsXG4gICAgICAgIDY4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg3LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNjcsXG4gICAgICAgIDcsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMTYsXG4gICAgICAgIDY5LFxuICAgICAgICAzOSxcbiAgICAgICAgMjUsXG4gICAgICAgIDEwNSxcbiAgICAgICAgODAsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjA3LFxuICAgICAgICAxOTksXG4gICAgICAgIDg0LFxuICAgICAgICAxNDcsXG4gICAgICAgIDM1LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTM3LFxuICAgICAgICA1OCxcbiAgICAgICAgMTMzLFxuICAgICAgICA3OCxcbiAgICAgICAgMTE1LFxuICAgICAgICA3LFxuICAgICAgICAyMzYsXG4gICAgICAgIDUxLFxuICAgICAgICAxMSxcbiAgICAgICAgMTUsXG4gICAgICAgIDEyMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgOTQsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNjAsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNDcsXG4gICAgICAgIDQyLFxuICAgICAgICAyMDIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTUwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTc1LFxuICAgICAgICAyNDgsXG4gICAgICAgIDEyOSxcbiAgICAgICAgOTksXG4gICAgICAgIDcxLFxuICAgICAgICAxMTgsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNjUsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMzcsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNjlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjU1LFxuICAgICAgICAyNDksXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMDMsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMTEsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNDEsXG4gICAgICAgIDEyMixcbiAgICAgICAgODAsXG4gICAgICAgIDY4LFxuICAgICAgICAxMDAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNzUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMzgsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNDksXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNTcsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjE5LFxuICAgICAgICA1NixcbiAgICAgICAgMjA0LFxuICAgICAgICA1OCxcbiAgICAgICAgMTk1LFxuICAgICAgICA5NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAyMDgsXG4gICAgICAgIDI0NixcbiAgICAgICAgODIsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTQ1LFxuICAgICAgICA5OCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxOTQsXG4gICAgICAgIDEyLFxuICAgICAgICA3LFxuICAgICAgICAxMDksXG4gICAgICAgIDY3LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTQsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMDAsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjUxLFxuICAgICAgICAyNTQsXG4gICAgICAgIDcsXG4gICAgICAgIDUxLFxuICAgICAgICA2NyxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMixcbiAgICAgICAgODEsXG4gICAgICAgIDc2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDk0LFxuICAgICAgICAxMDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjMsXG4gICAgICAgIDQsXG4gICAgICAgIDY0LFxuICAgICAgICAzNSxcbiAgICAgICAgMjksXG4gICAgICAgIDE4NixcbiAgICAgICAgMjMyLFxuICAgICAgICAyNyxcbiAgICAgICAgNTgsXG4gICAgICAgIDExMixcbiAgICAgICAgMjUxLFxuICAgICAgICAxNjMsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMzcsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjQwLFxuICAgICAgICAxLFxuICAgICAgICAxNDQsXG4gICAgICAgIDQ5LFxuICAgICAgICAyLFxuICAgICAgICA1MixcbiAgICAgICAgMjM1LFxuICAgICAgICA4NCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNTgsXG4gICAgICAgIDUwLFxuICAgICAgICAzMCxcbiAgICAgICAgMjM1LFxuICAgICAgICA0MCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNDMsXG4gICAgICAgIDMxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxMTZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNyxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgODNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzQsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMDQsXG4gICAgICAgIDM4LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMzEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTQsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNDIsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMDUsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTY0LFxuICAgICAgICAxMzQsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxOTcsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDgxLFxuICAgICAgICA4NixcbiAgICAgICAgMTQsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjAsXG4gICAgICAgIDM5LFxuICAgICAgICA1MCxcbiAgICAgICAgMjI2LFxuICAgICAgICA1MyxcbiAgICAgICAgMTEsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNjksXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNDAsXG4gICAgICAgIDE1LFxuICAgICAgICAwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjQ3LFxuICAgICAgICA2NyxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMDMsXG4gICAgICAgIDksXG4gICAgICAgIDgwLFxuICAgICAgICAyMzksXG4gICAgICAgIDgxLFxuICAgICAgICAxMTIsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTE4LFxuICAgICAgICAyNTEsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMzQsXG4gICAgICAgIDEzLFxuICAgICAgICAxMTQsXG4gICAgICAgIDEzMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNzIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiN2dFbUNxSms4eVZpZ01tdG1yVHQ5OFBtek5yaGhOODRxbTV2cXIwQjhBYz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ5MTE3MzI0ODM4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI0MDFCREE2NDREQzRDRTZCMUMxRENGRjQ0MDlBQ0E0OVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzEyODA2NzZcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMyLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMyLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiaXNSR3pQZ05UeC0wN2VTN1NmMGNDd1wiLFxuICBcInBob25lSWRcIjogXCI2N2I3ZGYzZS0xMDAwLTRmZTEtYmM0YS1mMDdkYzUyMmVlZGVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNSxcbiAgICAgIDQzLFxuICAgICAgMTk1LFxuICAgICAgOTcsXG4gICAgICA1OCxcbiAgICAgIDk1LFxuICAgICAgMjAyLFxuICAgICAgMTcsXG4gICAgICAyMDcsXG4gICAgICAxMTksXG4gICAgICAxNTcsXG4gICAgICAxODksXG4gICAgICA3NSxcbiAgICAgIDE2NyxcbiAgICAgIDIzMSxcbiAgICAgIDIxOSxcbiAgICAgIDk2LFxuICAgICAgNixcbiAgICAgIDI1MCxcbiAgICAgIDk4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDk2LFxuICAgICAgMTgyLFxuICAgICAgNjAsXG4gICAgICA1NixcbiAgICAgIDcsXG4gICAgICAxNTMsXG4gICAgICAxODgsXG4gICAgICA1MixcbiAgICAgIDIzNCxcbiAgICAgIDIyMSxcbiAgICAgIDg0LFxuICAgICAgMTAsXG4gICAgICAyNDksXG4gICAgICA3MixcbiAgICAgIDIxNixcbiAgICAgIDgxLFxuICAgICAgMTU2LFxuICAgICAgNjYsXG4gICAgICAxMDYsXG4gICAgICA0OVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI5RzY1TkdNS1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTExNzMyNDgzODoxMkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiNDcwNjAyNTg2NzI2ODA6MTJAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSnUvai84QkVKcit4TGtHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJjTTRJVGZuY21MdkFvVlRBUy9IbmVmMUE4YVJ0UzVqSUc5Z0x1RDNSeGdNPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImJPWUlIeGxvRmhoQVdyUmtlYmN2dXFyYUhUNjUyUW1ZSFhVVCszTUdrNmhyV1JCVkNUQVpVdmdqM3BMYVB0bDhvem9LcDl5ZFU2eldzbml6alBlK0NRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkNqaHJVZ054ZDhSQjQxaXdOL2UrRkYrQ1BMMkNBTi84RnFjR2JZYzN1R0RsOEZYdzU1T1FESCs0NER6S3F5VkF5VXlsdGU1ZWRYYTBoSk00clFFb2dRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkxMTczMjQ4Mzg6MTJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzEyODA2NzAsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFOWGtcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU5Yay5qc29uIjogIntcImtleURhdGFcIjpcIkZLL1hPS0JzQWZWUDRLcHR3RGFkRW5mYSs1cGpRUDVFUytoSmN6MkJ5K3c9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NTM1MDI3NjExLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzEyNjI1MTAzNDZcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
