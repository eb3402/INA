let winners = [
  {
    teamName: "Melionare",
    projectName: "Dollar Dollar",
    documentURL: "Melionare.pdf",
    youtubeURL: "https://youtu.be/pjuJPCd0pZk",
    youtubeID: "pjuJPCd0pZk",
    videoFileURL: "",
    summary: "In the Metaverse, where the virtual and the real world are converging, and hence the economies and finances of both worlds, our understanding of this financial convergence is still lacking. Through our design, we hope to bridge that gap through creating a safe environment in the Metaverse where learners get to practice and develop their financial literacy skills.",
    members: ["Keying Chen","Anqi Wang","Abu Abdelbagi","Xinyan (Helen) Song"],
    award: "INA 2022 Award"
  },{
    teamName: "Cerberus",
    projectName: "Soteria",
    documentURL: "Cerberus.pdf",
    youTubeURL: "https://youtu.be/WMKj9VgsUiA",
    youtubeID: "WMKj9VgsUiA",
    videoFileURL: "",
    summary: "Our design supports social connectedness in order to improve employee well-being. Both regulation of emotions and genuine self-disclosure have been shown to enhance one's well-being (Luo & Hancock, 2020; Restubog et al., 2020). In having a place to share and participate in shared pain points of remote work isolation and mental wellness, remote workers can partake in a larger community and have access to advice on mental wellness in the remote workspace.",
    members: ["Fei Wang","Daniel Ahn","Anh-Thu Phan","Calley Nelson","Jason Reid"],
    award: "People's Choice Award"
  }
];
let teams = [
  {
    teamName: "WAACK",
    projectName: "[De]Alienated",
    documentURL: "WAACK.pdf",
    youtubeURL: "https://youtu.be/6InioX3Z7Qg",
    youtubeID: "6InioX3Z7Qg",
    videoFileURL: "",
    summary: "[De]Alienated is a VR narrative-based game where the player acts as a human trying to navigate an unfamiliar planet to interact and form connections with aliens. Their goal is to find a way back home.",
    members: ["Chenyou Wu","Ashley Yoon","Wajahat Azfal","Kelly Huang","Akio Goya"]
  },{
    teamName: "Sensy5",
    projectName: "Sensy5",
    documentURL: "Sensy5.pdf",
    youtubeURL: "https://youtu.be/FPLMbWq7ynA",
    youtubeID: "FPLMbWq7ynA",
    videoFileURL: "",
    summary: "Leverage the orientation experience by creating an immersive VR simulation and an easy-to-use web application with step-by-step guidance to help students navigate the school and get familiar with the university system, policies, and layout.",
    members: ["Chenyou Wu","Ashley Yoon","Wajahat Azfal","Kelly Huang","Akio Goya"]
  },{
    teamName: "2Fun",
    projectName: "ConnectVerse",
    documentURL: "2Fun.pdf",
    youtubeURL: "https://youtu.be/cklPd1C8HJ0",
    youtubeID: "cklPd1C8HJ0",
    videoFileURL: "",
    summary: "It's important to build connections in both the virtual and physical world. ConnectVerse will start with the elements and processes of connection building, integrating various information and resources both online and offline, thus helping users to build better connections.",
    members: ["Yanqiu Li","Jingjing Bao"]
  },
  // {
  //   teamName: "VisualLanguage",
  //   projectName: "Grandma's Cooking Diary",
  //   documentURL: "VisualLanguage.pdf",
  //   youtubeURL: "https://youtu.be/",
  //   youtubeID: "",
  //   videoFileURL: "",
  //   summary: "It's important to build connections in both the virtual and physical world. ConnectVerse will start with the elements and processes of connection building, integrating various information and resources both online and offline, thus helping users to build better connections.",
  //   members: ["Yanqiu Li","Jingjing Bao"]
  // },
  {
    teamName: "FantasticFour",
    projectName: "Pivotal",
    documentURL: "FantasticFour.pdf",
    youtubeURL: "https://youtu.be/Mec2JDeluGE",
    youtubeID: "Mec2JDeluGE",
    videoFileURL: "",
    summary: "Many college students report feeling unsure about what they’re going to do in the future. We aim to create an immersive experience in crafting and engaging with your own story, however, the most immersive component of the platform will be exploring others' work.",
    members: ["Yanqiu Li","Jingjing Bao"]
  },{
    teamName: "Macy Research Lab",
    projectName: "Modsphere",
    documentURL: "https://docs.google.com/document/d/e/2PACX-1vQBC4xeiVPss7WIaR4dYJIF8eSdy4rIw4AxSdgOZFXBTElqspy1EurbnlcNG1iL7Dp4FJKWYrtSbdPb/pub",
    youtubeURL: "https://youtu.be/NE-kTQ_c56Y",
    youtubeID: "NE-kTQ_c56Y",
    videoFileURL: "",
    summary: "As artists, technologists, and educators, we want to reorient the Metaverse experience from how a world looks, to how a world operates; from the frontend to the backend of worldmaking;  from button clicking to rule-making. Modsphere is a worldmaking game.",
    members: ["Zhenzhen Qi","Andrew Corpuz","Minne Atairu"]
  },{
    teamName: "FutureVR.edu",
    projectName: "Wonderland",
    documentURL: "FutureVR.pdf",
    youtubeURL: "https://youtu.be/5lBBHHbIR94",
    youtubeID: "5lBBHHbIR94",
    videoFileURL: "",
    summary: "Physics Wonderland aims to use VR technology to improve students’ conceptual understanding of physics learning in a more interactive and immersive way. We incorporate game-based learning in our VR experimental design to enhance students’ learning motivation and cultivate their creative thinking skills in physics.",
    members: [""]
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
