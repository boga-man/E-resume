window.addEventListener('scroll', function () {
  let nav = document.querySelector('nav');
  let windowPosition = window.scrollY > 0 && window.innerWidth > 600;
  nav.classList.toggle('scrolling-nav', windowPosition);
})

var cnt=0;
let body = document.querySelector('body');
let nav = document.querySelector('nav');
let navButt = document.getElementById('nav-button');

window.addEventListener('resize', function(){
  if(nav.style.display==='none' && window.innerWidth>600){
    nav.style.display='block'
  }
  if(nav.style.display==='block' && window.innerWidth<600){
    nav.style.display='none'
  }
})


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
const eduDesc = ["Bachelors degree in Computer Science & Engineering. Current CGPA is 9.05", "Completed 11th & 12th standards in MPC Stream and secured 97.6% of marks in state board exams", "Completed 10th standard with a GPA 10"]
const eduCount = almamater.length
// for projects
const projNames = ["Bukket","Classroom Management Database design", "BuddiesChat", "Task Mananger API", "Weather App", "DCGAN", "SUMMER"]
const projLinks = ["","", "https://buddieschat.herokuapp.com/", "", "https://manoj-weatherapp.herokuapp.com/", "", ""]
const projTime = ["May 2021 to Present","April 2021", "March 2021", "March 2021", "March 2021", "July 2020", "August 2019 to Present"]
const projDesc = ["It is a resource management web app that facilitates clustering, organising and sharing of resources(links of resources),all at one place.\n\nTech & Tools used - NodeJS, MongoDB Atlas, Docker, Ngnix, GoogleAuth2.0", "It is a normalised database that can be utilised by apps like Google Classroom to keep track of attendance, assignment submissions, and test scores of students. Classrooms can be created by teachers and students can join them.", "Basic web app for creating chat rooms made using Node.JS and Sockets. Done as part of NodeJS course.", "It is a REST API made using NodeJS that works as a basic task management app. Done as part of NodeJS course", "It is a webapp that uses a weather api gives weather details at any place entered. Done as part of a NodeJS course", "Made a DCGAN using tensorflow on fashion MNIST dataset", "Worked on providing User Experience and lead the team for creating Android and iOS apps"]
const projCount = projNames.length
// for skills
const skillNames = ["C++","Java","JavaScript","Python","HTML & CSS","DSA","OOP","DBMS", "UI/UX Design"]
const percent = ["85","70","70","60","85","85","75","80","70"]
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
