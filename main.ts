import inquirer from "inquirer"

let todos : string [] = [];
let loop : boolean = true;
while(loop)
{
let answers:{
    Todolist:string,
    Addmore:Boolean
} = await inquirer.prompt ([                        
    {
    type:`input`,
    name:"Todolist",
    message:"What do you want in todo list"
},
{
    type:`confirm`,
    name:"Addmore",
    message:" Please Add item in todo list",
    default: false 
},
])
const   {Todolist,Addmore} = answers;
//console.log(answers)
if (Todolist){
todos.push(Todolist)
}else {
    console.log("kindly add valid input ")
}
};
if(todos.length > 0){
    console.log("Your Todo List:")
todos .forEach(Todolist  => {
    console.log(Todolist )
    
    })
}else {
    console.log("No Todos Found ")
}


          