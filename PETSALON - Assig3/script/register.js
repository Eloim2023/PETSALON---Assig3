//object literal
let petSalon ={
    name : "The Lovely Pet",
    address:{
        city:"Mexicali",
        street:"Lazaro Cardenas Blvd.",
        zip:"21100"
        },
    hours:{
        open:"9:00 am",
        close:"4:00 pm"
        },
    pets:[]
}

let petID=0;
//object constructor 
//------parameters
function Pet(n,a,g,s,t,b,o,p){
    //attr or properties
    this.name=n;
    this.age=a;
    this.gender=g;
    this.service=s;
    this.type=t;
    this.breed=b;
    this.owner=o;
    this.phone=p;
    this.id=petID++;
}

let inputName=document.getElementById("txtName");
let inputAge=document.getElementById("txtAge");
let inputGender=document.getElementById("txtGender");
let inputService=document.getElementById("txtService");
let inputType=document.getElementById("txtType");
let inputBreed=document.getElementById("txtBreed");
let inputOwner=document.getElementById("txtOwner");
let inputPhone=document.getElementById("txtPhone");

function isValid(aPet){
    let valid = true;
    if (aPet.name===""){
        valid = false;
        inputName.classList.add("input-alert-error");
    }
    if (aPet.sevices===""){
        valid = false;
    }
    return valid
}

//register function
function register(){
    //console.log("register");
    //let inputName = document.getElementById("txtName");
    let newPet = new Pet(inputName.value,inputAge.value,inputGender.value,inputService.value,inputType.value,inputBreed.value,inputOwner.value,inputPhone.value);
    if (isValid(newPet)===true){
    petSalon.pets.push(newPet);
    console.log(petSalon.pets);
    updateInfo();
    /*
    displayPetCards();
    */
   displayTable();
    clearForm();
    //document.getElementById("txtName").value
    }
}
function updateInfo(){
    document.getElementById("numberOfPets").innerHTML=petSalon.pets.length;
}
function deletePet(theId){
    console.log("Deleting the pet", theId);
    let petIndex;
    //travel to the array
    for(let i=0;i<petSalon.pets.length;i++){
        //find the pet's id
        let pet=petSalon.pets[i];

        //remove it from the array
        if(pet.id == theId){
            petIndex = i;
        }
    }
    petSalon.pets.splice(petIndex,1);

    document.getElementById(theId).remove();
    updateInfo();
}


function clearForm(){
    inputName.value="";
    inputAge.value="";
    inputGender.value="";
    inputService.value="";
    inputType.value="";
    inputBreed.value="";
    inputOwner.value="";
    inputPhone.value="";
}
function init(){
    console.log("init");
    let pet1 = new Pet("Scooby",60,"Male","Grooming","Dog","bull dog","Peter","(760) 1247896");
    let pet2 = new Pet("Scrappy",50,"Male","Vaccines","Dog","bull dog","Peter","(760) 1247896");
    petSalon.pets.push(pet1,pet2);//push the pets into the array
    /*
    displayPetCards();
    */
    displayTable();
    updateInfo();
}

window.onload=init;


