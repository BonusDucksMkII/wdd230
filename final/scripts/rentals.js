const url = "./data/data.json"
const rentalDiv = document.querySelector(".rentals");
// const

async function getData(url){
    let response = await fetch(url);
    try{
        if (response.ok){
            let data = await response.json();
            console.log(data);
            displayData(data);
        } else {
            throw Error(await response.text());
        }
    } 
    catch (error) {
        console.log("No data found");
    }  
}

function displayData(jsonData){
    if (document.title == "Scoots - Rentals"){
        jsonData.options.forEach(entry => {
            const newDiv = document.createElement("div");
            newDiv.classList.add("rental-card");
            const name = document.createElement("h3");
            const capacity = document.createElement("h4");
            const desc = document.createElement("p");
            const image = document.createElement("img");
            image.setAttribute("alt", `Img of ${entry.name}`)
            const reservation = document.createElement("h4");
            const walkIn = document.createElement("h4");
            const reservePrice = document.createElement("p");
            const walkInPrice = document.createElement("p");
    
            name.innerText = entry.name;
            capacity.innerText = "Capacity: " + entry.capacity;
            desc.innerText = entry.description;
            image.innerText = entry.image;
    
            reservation.innerText = "Reservation";
            reservePrice.innerText += "Half Day (3 hrs): $" + entry.reservationPrice.reservation[0];
            reservePrice.innerText += "\nFull Day: $" + entry.reservationPrice.reservation[1];
    
            walkIn.innerText = "Walk-In";
            walkInPrice.innerText += "Half Day (3 hrs): $" + entry.reservationPrice.walkIn[0];
            walkInPrice.innerText += "\nFull Day: $" + entry.reservationPrice.walkIn[1];
    
            rentalDiv.appendChild(newDiv);
            newDiv.appendChild(name);
            newDiv.appendChild(capacity);
            newDiv.appendChild(desc);
            newDiv.appendChild(image);
            newDiv.appendChild(reservation);
            newDiv.appendChild(reservePrice);
            newDiv.appendChild(walkIn);
            newDiv.appendChild(walkInPrice);
        });
    } else {
        jsonData.options.forEach(entry =>{

        });
    }
}

getData(url);