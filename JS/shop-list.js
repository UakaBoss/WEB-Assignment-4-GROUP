// Define Mobile objects
const mobile1 = {
    name: "Iphone 15",
    price: 799,
};

const mobile2 = {
    name: "Iphone 15 Pro",
    price: 999,
};

const mobile3 = {
    name: "Iphone 15 Pro Max",
    price: 1199,
};


// Event listeners
document.getElementById("mobile1").addEventListener("click", () => {
    alert(`You clicked on ${mobile1.name}. Price: $${mobile1.price}`);
});

document.getElementById("mobile2").addEventListener("click", () => {
    alert(`You clicked on ${mobile2.name}. Price: $${mobile2.price}`);
});

document.getElementById("mobile3").addEventListener("click", () => {
    alert(`You clicked on ${mobile3.name}. Price: $${mobile3.price}`);
});

// Interactive elements
const mobileElements = document.querySelectorAll(".mobile");
mobileElements.forEach((mobile) => {
    mobile.addEventListener("mouseover", () => {
        mobile.style.backgroundColor = "lightgray";
    });

    mobile.addEventListener("mouseout", () => {
        mobile.style.backgroundColor = "";
    });
});

// Create animations
function animateElement(element) {
    // Implement your animation here
}

animateElement(document.getElementById("mobile1"));
animateElement(document.getElementById("mobile2"));

//vote form object
const votes = {
    iphone15: 0,
    iphone15pro: 0,
    iphone15promax: 0,
};

//vote system
let voteSubmit = document.getElementById("vote-button");
voteSubmit.addEventListener("click", () => {
    event.preventDefault();
    let selectedPhone = document.querySelector('input[name="phone"]:checked').value;
    votes[selectedPhone]++;
    for(let phone in votes) {
        if(votes.hasOwnProperty(phone)) {
            let element = document.getElementById(phone + "Votes");
            if (element) {
                element.textContent = ` ${votes[phone]} votes`;
            }
        }
    }
})

// Event listener for form submission
// document.getElementById("voteForm").addEventListener("submit", (event) => {
//     event.preventDefault();
//     const selectedPhone = document.querySelector('input[name="phone"]:checked').value;
//     if (votes.hasOwnProperty(selectedPhone)) {
//         votes[selectedPhone]++;
//         alert(`You voted for ${selectedPhone}. Thank you for your vote!`);
//         displayVotes(); // Add this line to update the vote counts on submission
//     } else {
//         alert("Invalid selection.");
//     }
// });

//3D Animations
const mobiles = document.querySelectorAll('.mobile');

mobiles.forEach((mobile) => {
    mobile.addEventListener('click', () => {
        mobile.classList.add('jumping');

        // Reset the animation after a short delay
        setTimeout(() => {
            mobile.classList.remove('jumping');
        }, 500);
    });
});

tippy('#mobile1', {
    content: 'Iphone 15',
    placement: 'top', // Change this to 'bottom', 'left', or 'right' as needed
    arrow: true, // Show an arrow on the tooltip
});

tippy('#mobile2', {
    content: 'Iphone 15 Pro',
    placement: 'top', // Change this to 'bottom', 'left', or 'right' as needed
    arrow: true, // Show an arrow on the tooltip
});

tippy('#mobile3', {
    content: 'Iphone 15 Pro Max ',
    placement: 'top', // Change this to 'bottom', 'left', or 'right' as needed
    arrow: true, // Show an arrow on the tooltip
});