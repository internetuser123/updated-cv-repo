const url = "./resume.json"

async function getJSON() {
    let response = await fetch(url);
        if(response.ok) {
        let data = await response.json();

        console.log(data.about.name);
        const educationList = document.querySelector(".education-list")
        const employmentList = document.querySelector(".e-aside")
        const myList = document.createElement("li")

        let educations = data.education
        educations.forEach(function (education){
            educationList.innerHTML += `<li>${education.heading} <br> ${education.description}</li>`
        })
        let employments = data.employment
        employments.forEach(function (employment){
            employmentList.innerHTML += `<li>${employment.heading} <br> ${employment.description} </li>`
    })}
        else {
        console.log("HTTP-Error: " + response.status);
    }
}

getJSON()