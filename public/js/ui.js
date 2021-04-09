window.addEventListener('scroll', function () {
  let nav = document.querySelector('nav');
  let windowPosition = window.scrollY > 0 && window.innerWidth > 600;
  nav.classList.toggle('scrolling-nav', windowPosition);
})

var cnt=0;
let body = document.querySelector('body');
let nav = document.querySelector('nav');
let navButt = document.getElementById('nav-button');
navButt.addEventListener("click", ()=>{
  cnt++;
  
  if(cnt%2){
    nav.style.display='block'
    body.style.overflow='hidden'
  }
  else{
    nav.style.display = 'none';
    body.style.overflow='auto'
  }
})

let navList = document.getElementById('nav-list');
navList.addEventListener("click", ()=>{
  cnt++;
  let windowPosition = window.innerWidth < 600;
  if(windowPosition){
    nav.style.display='none';
    body.style.overflow='auto';
  }
})

// data to load in templates
// for experience
const positions = ["Executive Member", "UI/UX Designer and Web Developer"]
const companies = ["Big Data & Analytics Club, NIT-Warangal",  "ORTED, NITW Chapter"]
const expTime = ["Dec 2020 - Present", "Aug 2019 - Oct 2020"]
const expDesc = ["Organised an event for club introduction in a team of four ", "Designed User Experience for a smart phone app"]
const expCount = positions.length;
// for education
const almamater = ["National Institute of Technology, Warangal", "Narayana Junior college, Hyderabad", "Sri Sai Vijetha High School, Tadipatri"]
const eduTime = ["2019-Present", "2017-2019", "2012-2017"]
const eduDesc = ["Bachelors degree in Computer Science & Engineering. Current CGPA is 9.05", "Completed 11th & 12th standards in MPC Stream and secured 97% of marks in state board exams", "Completed 10th standard with a GPA 10"]
const eduCount = almamater.length
// for projects
const projNames = ["SUMMER", "BuddiesChat", "DCGAN", "Weather App"]
const projLinks = ["", "https://buddieschat.herokuapp.com/", "", "https://manoj-weatherapp.herokuapp.com/"]
const projTime = ["August 2019 to Present", "March 2021", "July 2021", "January 2021"]
const projDesc = ["Worked on providing User Experience and lead the team for creating Android and iOS apps", "Basic web app for creating chat rooms made using Node.JS and Sockets. It is done as part of NodeJS course.", "Made a DCGAN using tensorflow on fashion MNIST dataset", "It is a webapp that uses a weather api gives weather details at any place entered"]
const projCount = projNames.length
// for skills
const skillNames = ["C++","Java","JavaScript","Python","HTML & CSS", "UI/UX Design","DBMS","OOP","DSA"]
const percent = ["85","70","70","65","85","80","80","75","85"]
const skillCount = skillNames.length


//templates loading
const expTemplate = document.querySelector('#exp-template').innerHTML
const eduTemplate = document.querySelector('#edu-template').innerHTML
const projTemplate = document.querySelector('#proj-template').innerHTML
const skillTemplate = document.querySelector('#skill-template').innerHTML

//elements
const $expContainer = document.querySelector('#experience .cards')
const $eduContainer = document.querySelector('#education .cards')
const $projContainer = document.querySelector('#projects .cards')
const $skillContainer = document.querySelector('#skills .skills')

//rendering templates
const renderExp = (positions, companies, expTime, expDesc)=>{
  let html="";
  for(let i=0; i<expCount; i++){
    string = Mustache.render(expTemplate,{
      cardPosition: positions[i],
      cardComp: companies[i],
      cardTime: expTime[i],
      cardDesc: expDesc[i]
    })
    html+=string;
    // $expContainer.insertAdjacentHTML('beforeend', html)
  }
  $expContainer.innerHTML=html;
  // $expContainer.insertAdjacentHTML('beforeend', html)
}

const renderEdu = (almamater, eduTime, eduDesc)=>{
  let html="";
  for(let i=0; i<eduCount; i++){
    string = Mustache.render(eduTemplate,{
      cardAlma: almamater[i],
      cardTime: eduTime[i],
      cardDesc: eduDesc[i]
    })
    html+=string;
    // $expContainer.insertAdjacentHTML('beforeend', html)
  }
  $eduContainer.innerHTML=html;
  // $expContainer.insertAdjacentHTML('beforeend', html)
}


const renderProj = (projNames, projTime, projDesc)=>{
  let html="";
  for(let i=0; i<projCount; i++){
    string = Mustache.render(projTemplate,{
      projLink: projLinks[i],
      cardHead: projNames[i],
      cardTime: projTime[i],
      cardDesc: projDesc[i]
    })
    html+=string;
    // $expContainer.insertAdjacentHTML('beforeend', html)
  }
  $projContainer.innerHTML=html;
  // $expContainer.insertAdjacentHTML('beforeend', html)
}

const renderSkills = (skillNames, percent)=>{
  let html="";
  for(let i=0; i<skillCount; i++){
    string = Mustache.render(skillTemplate,{
      skill: skillNames[i],
      perc: percent[i]+"%"
    })
    html+=string;
    // $expContainer.insertAdjacentHTML('beforeend', html)
  }
  $skillContainer.innerHTML=html;
  // $expContainer.insertAdjacentHTML('beforeend', html)
}

// rendering the templates
renderExp(positions, companies, expTime, expDesc)
renderEdu(almamater, eduTime, eduDesc)
renderProj(projNames, projTime, projDesc)
renderSkills(skillNames, percent)
