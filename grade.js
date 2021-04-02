const fs=require('fs')
const add=(name,subject,grade)=>{
    const subjects=load()
    const temp=subjects.filter((sub)=>{
        return sub.name===name
    })
    if(temp.length===0){
        subjects.push({
            name,subject,grade
        })
        saved(subjects)
        console.log("added succue")
    }else{
        console.log('this name already exist')
    }
      
    }
    const list=()=>{
        const subjects=load()
        subjects.forEach(sub => {
            console.log(sub)
            
        });
    }
    const remove=(name)=>{
        const subjects=load()
        const newarr=subjects.filter((sub)=>{
            return sub.name !==name
        })
        saved(newarr)
        console.log('remove done')
    }
    const read=(name)=>{
        const subjects=load()
        const sub=subjects.find((sub)=>{
            return sub.name===name
        })
        if(sub){
            console.log('name is '+sub.name+' subject is '+sub.subject+'  grade is '+sub.grade)
        }else{
            console.log("this person not found")
        }
    }




const load=()=>{
    try{
        const data=fs.readFileSync('subjects.json').toString()
        return JSON.parse(data)
    }
    catch(e){
        return[]
    }
}
const saved=(subjects)=>{
    const saveData=JSON.stringify(subjects)
    fs.writeFileSync('subjects.json',saveData)
}
module.exports={add,list,remove,read}