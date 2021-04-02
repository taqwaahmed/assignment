

const yargs  = require("yargs");
const sub=require('./grade')
yargs.command({
    command:'add',
    describe:'add student',
    builder:{
        name:{
            describe:'this is name ',
            demand:true,
            type:'string'
            },
            subject:{
                describe:'this is subject ',
                 demand:true,
                type:'string'
            },
            grade:{
                describe:'this is grade ',
                demand:true,
                type:'number'
            }

    },
    handler:(argv)=>{
        sub.add(argv.name,argv.subject,argv.grade)
    }

})
yargs.command({
    command:'list',
    describe:'list student',
    builder:{
        name:{
            describe:'this is name ',
            demand:true,
            type:'string'
            }},
    handler:(argv)=>{
        sub.list(argv.name)
    }

})
yargs.command({
    command:'remove',
    describe:'remove student',
    builder:{
        name:{
            describe:'this is name ',
            demand:true,
            type:'string'
            }},
    handler:(argv)=>{
        sub.remove(argv.name)
    }

})
yargs.command({
    command:'read',
    describe:'read student',
    builder:{
        name:{
            describe:'this is name ',
            demand:true,
            type:'string'
            }  
        },
        
    handler:(argv)=>{
        sub.read(argv.name)
    }

})
 yargs.parse();   

