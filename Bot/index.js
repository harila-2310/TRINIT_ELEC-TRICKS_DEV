
import { Telegraf } from "telegraf";

const helpMsg =`
/Start -- To start the bot
/fortune -- to receive some fortunes 
/help  -- Command Reference
/Philanthropist -- to receive the Philanthropist details
/NGO -- TO receive the NGO details.
/Exit -- To exit from the conversation .

`


import Axios from "axios"; 
import axios from "axios";

import fs from 'fs'

const bot = new Telegraf('5631190247:AAHLXjn1igfli9wgwSoJIRN58oHrR8-aXfY');


bot.start((ctx)=>{
    ctx.reply("Hello I am a Echo Bot from team Elec-tricks ")
    ctx.reply(helpMsg);
})

bot.help((ctx)=>{
    ctx.reply(helpMsg);
})

bot.command("echo", (ctx)=>{

    let inp = ctx.message.text;
    // console.log(ctx.message)
    let inpArray = inp.split(" ")

    let Msg = "";

    if(inpArray.length == 1){
        Msg ="You said just Echo. "
    }
    else{
        inpArray.shift()
        Msg = inpArray.join(" ")
    }
    ctx.reply(Msg)

    console.log(inpArray)
})


//fortune 

bot.command('fortune', (ctx)=>{
    Axios.get('http://yerkee.com/api/fortune')
    .then(res =>{
        
        ctx.reply(res.data.fortune)
    }).catch(e => {
        console.log(e)
    })
})


bot.command('Philanthropist', (ctx)=>{
    let rawdata = fs.readFileSync("./philanthropist.json","utf-8")
    let data = JSON.parse(rawdata)

    let message = "List of Philanthropists \n"

    data.forEach(item => {
        message += `${item} \n`
    })
    ctx.reply(message)
})


bot.command('NGO', (ctx)=>{
    let rawdata = fs.readFileSync("./ngos.json","utf-8")
    let data = JSON.parse(rawdata)

    let message = "List of Ngo's \n"

    data.forEach(item => {
        message += `${item} \n`
    })
    ctx.reply(message)
})

bot.command('Exit',(ctx)=>{
    ctx.reply("Thank you for your patience . Have a Great Day!!!")
})


// bot.command("Philanthropist", (ctx)=>{
//     let inp = ctx.message.text.split(" ")

//     if(inp.length != 2){
//         ctx.reply("Must give a name as a second argument ")
//         return;
//     }
//     let breedInp = inp[1]

//     let rawdata = fs.readFileSync("./dogsname.json","utf-8")
//     let data = JSON.parse(rawdata)

//     if(data.includes(breedInp)){
//         axios.get(`https://dog.ceo/api/breed/${breedInp}/images/random`)
//         .then(res =>{
//             console.log(res.data)
//             ctx.replyWithPhoto(res.data.message)
//         }).catch(e=>{
//             console.log(e)
//         })
// } else{
//     let suggestion = data.filter(item=>{
//         return item.startsWith(breedInp)
//     })
//     let message = `Did you mean: \n`;
//     suggestion.forEach(item => {
//         message += `-${item} \n`;
//     })
//     if(suggestion.length == 0){
//         ctx.reply("Unable to find the breed")
//     }else{
//         ctx.reply(message)
//     }
// }
// })

// logger 
function logger(ctx){
    console.log(ctx.from.username + "said: "+ ctx.message.text)
}


bot.launch()


