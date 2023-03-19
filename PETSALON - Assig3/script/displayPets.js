
/*
function displayPetCards(){//
    const DIV = document.getElementById("pets");
    let card="";
for (let i=0;i<petSalon.pets.length;i++){
    let pet = petSalon.pets[i];
    card +=`
    <div class="pet">
    <h5>${pet.name}</h5>
    <p>Age:${pet.age}</p>
    <p>Service:${pet.service}</p>
    </div>
    `;
    console.log(card);
}
DIV.innerHTML = card;
}
*/

function displayTable(){

    const TABLE = document.getElementById("petTable");
    let tr="";
    for (let i=0;i<petSalon.pets.length;i++){
        let pet = petSalon.pets[i];
        tr+=`
            <tr id="${pet.id}"> 
                <td>${pet.name}</td>
                <td>${pet.age}</td>
                <td>${pet.gender}</td>
                <td>${pet.service}</td>
                <td>${pet.type}</td>
                <td>${pet.breed}</td>
                <td>${pet.owner}</td>
                <td>${pet.phone}</td>
                <td><button onclick="deletePet(${pet.id});">🗑️</button></td>
            </tr>
        `;
    }
    TABLE.innerHTML=tr;
//create the tr
}

//replace under the register the displayPetCards() by displayTable()