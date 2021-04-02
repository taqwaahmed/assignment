
// // const fs=require('fs')
// // fs.writeFileSync('note.txt','taqwa')
// // fs.appendFile('note.txt','ahmed')
// // // console.log( fs.readFileSync('note.txt').toString())
// // const x=require('./data')
// // console.log(x.name)
// // console.log(x.nanme1)
// ////////npm validator
// // var validator = require('validator');

// const { require } = require("yargs")

 const yargs = require("yargs");

// // console.log(validator.isEmail('1111node'));
// // const chalk = require('chalk');
 
// // // console.log(chalk.blue('Hello world!'));
// // console.log(chalk.red('Hello world!'));


const note=require('./editNotes')
yargs.command({
    command:'list',
    describe:'list notes',
    handler:()=>{
        note.listnote()
    
}})
yargs.command({
    command:'read',
    describe:'read notes',
    builder:{
        title:{
            describe:'this is title',
            demondOption:true,
            type:'string'
        },
        body:{
            describe:'this is body',
            // demondOption:true,
            type:'string'
        }},
        handler:(argv)=>{
    
            note.readnote(argv.title,argv.body)
        
            }
        })


yargs.command({
    command:'add',
    describe:'add option',
    builder:{
        title:{
            describe:'this is title off add',
            demandOption:'true',
            type:'string'
        },
        body:{
            describe:'this is body off add',
            demandOption:'true',
            type:'string' 
        }
    },
    handler:(argv)=>{
    
    note.Addnotes(argv.title,argv.body)

    }
})
 yargs.command({
    command:'delete',
    describe:'delete ',
    builder:{
    title:{
        describe:'this is title off delete',
        demandOption:'true',
        type:'string'
    },
    body:{
        describe:'this is body off add',
        type:'string' 
    }
   },
    handler:(argv)=>{
      note.remove(argv.title)
    }
})
yargs.parse();
/////////////////////////////////////////////////////////////////////////
// const person={
//     name:'taqwa',
//     age:'25'
// }
// const fs=require('fs');
// const { require } = require('yargs');
// console.log(person)
// const personjson=JSON.stringify(person)
// console.log(personjson)
// fs.writeFileSync('notes.json',personjson)
// const data=fs.readFileSync('notes.json').toString();
// console.log(data)
// const personobject=JSON.parse(personjson)
// console.log(personobject)
// personobject.name='ahmed'
// console.log(personobject)
// const json2=JSON.stringify(personobject)
// console.log(json2)
// fs.writeFileSync('notes.json',json2)

