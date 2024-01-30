let name = ["Rahul", "Archita", "Jaya","Julius", "Raj", "Jackson" , "Jack","Rinki","khushi", "Bitu","Jay", "Maya", "Jill"];

for( let i=0; i<name.length; i++)
{
  let firstLetter = name[i].charAt(0);
  if(firstLetter=="J"){
    console.log(`GoodBye ${name[i]}`);
  }
  else{
    console.log(`hello ${name[i]}`)
  }
  
  
}  