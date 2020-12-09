let teams = [
  {
    teamName: "Sand Sculptors",
    projectName: "Build Time!",
    documentURL: "Sand Sculptors - Build Time.pdf",
    youtubeURL: "https://youtu.be/GUTRugWcxR0",
    youtubeID: "GUTRugWcxR0",
    videoFileURL: "https://drive.google.com/drive/folders/16Y__XGXRO9rtqaDr4bCIXZPRON5SEb4q?usp=sharing",
    summary: "Learners often struggle self-regulate their learning processes in online environments. We aim to provide a tool to improve self-regulated learning for learners struggling with e-Learning environments.",
    members: ["Ningcong Tong","Yichen Yao","Jiaen Zhang","Kristin Wang","You Lyu"]
  },{
    teamName: "Roargh",
    projectName: "StorySky",
    documentURL: "roARgh - StorySky.pdf",
    youtubeURL: "https://youtu.be/XElmuKWoW4I",
    youtubeID: "XElmuKWoW4I",
    videoFileURL: "",
    summary: "COVID has ... forced us all to realize the importance of our relationships for our social, emotional, and cognitive development and well-being. Our goal is to use the technology we have to reconnect families over distance through the telling of personal stories, providing an interactive story-time experience to rebuild those bonds and create a sort of keepsake of those fleeting memories.",
    members: ["David Zikovitz","Ying-Chen Lin","Mulan Fu","Marina Lemee"]
  },{
    teamName: "Double X",
    projectName: "Science of Life",
    documentURL: "Double X - Science of Life.pdf",
    youtubeURL: "https://youtu.be/UwibA-SRPZM",
    youtubeID: "UwibA-SRPZM",
    videoFileURL: "",
    summary: "A key aspect of our product is that it connects real life experiences from the students with school science. Our survey directed at Brazilian teachers and students showed great interest in connecting formal knowledge to phenomena observed in everyday life.",
    members: ["HyunSoo Suh","Kelley Cameron","Fernanda Albuquerque de Araujo"]
  },{
    teamName: "Musitation",
    projectName: "Musitation",
    documentURL: "Musitation - Musitation.pdf",
    youTubeURL: "https://youtu.be/8Cn80C9XAzI",
    youtubeID: "8Cn80C9XAzI",
    videoFileURL: "https://drive.google.com/file/d/1axBldv7aL86dS1_eYehfnZLk1vW0GRP0/view?usp=sharing",
    summary: "After COVID, people who have an interest in music creation are afraid of continuing in-person social musical activities although they desire immersive music learning and meaningful interpersonal interactions. The goal of Musitation is to support meaningful social interaction through music and to inspire people to creatively express themselves through collaborative VR music experiences.",
    members: ["Fei Wang","Daniel Ahn","Anh-Thu Phan","Calley Nelson","Jason Reid"]
  },{
    teamName: "C Plan",
    projectName: "LinguaBuddy",
    documentURL: "C Plan - LinguaBuddy.pdf",
    youTubeURL: "https://youtu.be/k8UE2y-FZsk",
    youtubeID: "k8UE2y-FZsk",
    videoFileURL: "",
    summary: "The lack of student-to-student and student-to-teacher interactions during online language teaching is a problem. Our goal is to help language teachers prepare different class activities in a virtual learning environment; create a virtual activity space to engage students; and to help students alleviate learning anxiety during activities.",
    members: ["Hengzhi Huang","Rong Sang","Danning Fu","Weiwei Ma","Yuxuan Huang"]
  },{
    teamName: "Grassroots",
    projectName: "Grassroots",
    documentURL: "Grassroots - Grassroots.pdf",
    youTubeURL: "https://youtu.be/W1hMVQH2x28",
    youtubeID: "W1hMVQH2x28",
    videoFileURL: "",
    summary: "Activists' ageist perspectives toward other activities and activist activities keep organizations from maximizing their impact. Grassroots is an app that promotes sustained engagement and intergenerational cooperation in organization-based activism. Grassroots builds an intergenerational community and validates the advocacy efforts of both young and old.",
    members: ["Dennis Morgan","Echo Zhang","Uttarika Shetty","Nancye Blair Black","Hongjin Du"]
  },{
    teamName: "It's Okay",
    projectName: "Love Okay",
    documentURL: "It's Okay - Love Okay.pdf",
    youTubeURL: "https://youtu.be/H0OB47n3iVQ",
    youtubeID: "H0OB47n3iVQ",
    videoFileURL: "https://drive.google.com/file/d/1aPVOk6j7gBLKxBjclPJI78dKo9HhZJWU/view?usp=sharing",
    summary: "All intimate relationships involve some degrees of conflict. We've designed an interactive journal that helps users practice mindfulness, document and track their emotional patterns along with an AI-empowered chatbot system that provides relationship consultation.",
    members: ["Lingyi Zhuo","Zhuoda Wu","Bora Shin"]
  },{
    teamName: "WETech",
    projectName: "WETech",
    documentURL: "WETech - WETech.pdf",
    youTubeURL: "https://youtu.be/AJV8kUSjYKA",
    youtubeID: "AJV8kUSjYKA",
    videoFileURL: "",
    summary: "We situate learners in VR scenarios designed using Task-Based Language Teaching (TBLT) with a focus on pragmatics, so that learners practice with relevant tasks that they need to accomplish in real life in socially appropriate ways.",
    members: ["Jiajin Han","Rundong Jiang","Samantha Sowah","Alex Wang","Crystal Yang"]
  }
];

// RAMDOMIZE THE ARRAY
for(let i = teams.length - 1; i > 0; i--){
  const j = Math.floor(Math.random() * i)
  const temp = teams[i]
  teams[i] = teams[j]
  teams[j] = temp
}

// Function that CONSTRUCTS HTML TEMPLATE STRING
// Interpolate team data into the template
function makeTeamHTML(data) {
  let HTML = `<div class="row" style="margin-bottom:5em;">
    <div class="col-sm-6 col-xs-12" style="background-color:#1b3d6e;padding:1em;">
      <div class="embed-responsive embed-responsive-16by9">
        <iframe src="https://www.youtube.com/embed/${data.youtubeID}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      <p style="margin-top:1.5em;">
        <a style="color:white;" href="./assets/INA2020/documents/${data.documentURL}" download><i class="fa fa-fw fa-file-pdf-o"></i>&nbsp;Download &mdash; ${data.projectName} Research and Design Summary</a>
      </p>
    </div>
    <div class="col-sm-6 col-xs-12" style="padding:1em;">
      <h2 style="margin-top:0;font-family:'Roboto', sans-serif;font-size:2.25em;font-weight:500;">${data.projectName}</h2>
      <h3 style="margin-top:.75em;">Team: ${data.teamName}</h3>
      <p style="margin-top:1em;"><em>${data.members.join(", ")}</em></p>
      <p>${data.summary}</p>
    </div>
  </div>`;

  return HTML;
}


// CONSTRUCT THE HTML
let teamsHTML = "";

teams.forEach(function(team) {
  if (team.youtubeID) {
    teamsHTML += makeTeamHTML(team);
  }
});

// ADD it to the View State (page)
document.querySelector("#project-rows").innerHTML = teamsHTML;


// Code to show VOTING buttons only after Dec 18
// START_TIME = Tue Dec 18 2020 18:00:00 GMT-0500 (EST)
const START_TIME = 1608332400000;
let timeNow = Date.now();
if (timeNow > START_TIME) {
  enableLinks();
}

// Function to remove .vote-section-hidden class from
// voting buttons
function enableLinks() {
  let sectionEls = [...document.querySelectorAll(".vote-section-hidden")];
  sectionEls.forEach(el => {
    el.classList.remove('vote-section-hidden');
  });
}
