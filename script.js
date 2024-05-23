
       
   function checkBloodStock() {
    document.getElementById('bloodStockSection').scrollIntoView({ behavior: 'smooth' });
}

function openDonationForm() {
    document.getElementById('donationForm').style.display = 'block';
}

function closeDonationForm() {
    document.getElementById('donationForm').style.display = 'none';
}

function openRegistrationForm() {
    document.getElementById('registrationForm').style.display = 'block';
}

function closeRegistrationForm() {
    document.getElementById('registrationForm').style.display = 'none';
}

window.addEventListener('scroll', function() {
    var secSection = document.getElementById('sec');
    var secPosition = secSection.getBoundingClientRect().bottom;
    var screenPosition = window.innerHeight;

    if (secPosition <= screenPosition) {
        console.log("Hide buttons");
        buttonContainer.style.display = 'none';
    } else {
        console.log("Show buttons");
        buttonContainer.style.display = 'flex';
    }
});
function fetchDonors() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "getDonors.php", true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var donors = JSON.parse(xhr.responseText);
            displayDonors(donors);
        }
    };
    xhr.send();
}

function displayDonors(donors) {
    var donorsContainer = document.getElementById("donorsContainer");
    donorsContainer.innerHTML = ""; 
    donors.forEach(function(donor) {
        //ID`, `Name`, `Blood-Group`, `Contact`, `Number-of-Donations`
        var donorInfo = document.createElement("p");
        donorInfo.textContent = "ID :" +donor.ID +"Name: " + donor.Name + ", Blood Group: " + donor["Blood-Group"] + ", Contact: " + donor.Contact + ", Number of Donations: " + donor["Number-of-Donations"];
        donorsContainer.appendChild(donorInfo);
    });
}