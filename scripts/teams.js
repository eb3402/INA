let teams = [
  {
    teamName: "Sand Sculptors",
    projectName: "Project AAA",
    youtubeURL: "",
    youtubeID: "",
    videoFileURL: "https://drive.google.com/drive/folders/16Y__XGXRO9rtqaDr4bCIXZPRON5SEb4q?usp=sharing",
    summary: "Learners often struggle self-regulate their learning processes in online environments. We aim to provide a tool to improve self-regulated learning for learners struggling with e-Learning environments.",
    members: ["Ningcong Tong","Yichen Yao","Jiaen Zhang","Kristin Wang","You Lyu"]
  },{
    teamName: "roARgh",
    projectName: "Project BBB",
    youtubeURL: "https://youtu.be/XElmuKWoW4I",
    youtubeID: "XElmuKWoW4I",
    videoFileURL: "",
    summary: "COVID has forced us all to realize the importance of our relationships. We reconnect families over distance through the telling of personal stories, providing an interactive story-time experience to rebuild those bonds and create a sort of keepsake of those fleeting memories.",
    members: ["David Zikovitz","Ying-Chen Lin","Mulan Fu","Marina Lemee"]
  },{
    teamName: "Double X",
    projectName: "Project CCC",
    youtubeURL: "https://youtu.be/UwibA-SRPZM",
    youtubeID: "UwibA-SRPZM",
    videoFileURL: "",
    summary: "A key aspect of our product is that it connects real life experiences from the students with school science. Our survey directed at Brazilian teachers and students showed great interset in connecting formal knowledge to phenomena observed in everyday life.",
    members: ["HyunSoo Suh","Kelley Cameron","Fernanda Albuquerque de Araujo"]
  },{
    teamName: "Musitation",
    projectName: "Project DDD",
    youTubeURL: "https://youtu.be/8Cn80C9XAzI",
    youtubeID: "8Cn80C9XAzI",
    videoFileURL: "https://drive.google.com/file/d/1axBldv7aL86dS1_eYehfnZLk1vW0GRP0/view?usp=sharing",
    summary: "The goal of Musitation is to support meaningful social interaction through music and to inspire people to creatively express themselves through collaborative VR music experiences.",
    members: ["Fei Wang","Daniel Ahn","Anh-Thu Phan","Calley Nelson","Jason Reid"]
  },{
    teamName: "C PlaN",
    projectName: "Project EEE",
    youTubeURL: "https://youtu.be/k8UE2y-FZsk",
    youtubeID: "k8UE2y-FZsk",
    videoFileURL: "",
    summary: "The lack of student-to-student and student-to-teacher interactions during online language teaching is a problem. Our goal is to help language teachers prepare different class activities in a virtual learning environment.",
    members: ["Hengzhi Huang","Rong Sang","Danning Fu","Weiwei Ma","Yuxuan Huang"]
  },{
    teamName: "Grassroots",
    projectName: "Project FFF",
    youTubeURL: "https://youtu.be/W1hMVQH2x28",
    youtubeID: "W1hMVQH2x28",
    videoFileURL: "",
    summary: "Grassroots is an app that promotes sustained engagement and intergenerational cooperation in organization-based activism. Grassroots builds an intergenerational community and validates the advocacy efforts of both young and old.",
    members: ["Dennis Morgan","Echo Zhang","Uttarika Shetty","Nancye Blair Black","Hongjin Du"]
  },{
    teamName: "It's Okay",
    projectName: "Project GGG",
    youTubeURL: "",
    youtubeID: "",
    videoFileURL: "https://drive.google.com/file/d/1aPVOk6j7gBLKxBjclPJI78dKo9HhZJWU/view?usp=sharing",
    summary: "",
    members: ["Lingyi Zhuo","Zhuoda Wu","Bora Shin"]
  },{
    teamName: "WETech",
    projectName: "Project HHH",
    youTubeURL: "",
    videoFileURL: "",
    summary: "",
    members: ["Jiajin Han","Rundong Jiang","Samantha Sowah","Alex Wang","Crystal Yang"]
  }
];

for(let i = teams.length - 1; i > 0; i--){
  const j = Math.floor(Math.random() * i)
  const temp = teams[i]
  teams[i] = teams[j]
  teams[j] = temp
}

let alt = false;
let teamsHTML = "";

teams.forEach(function(team) {
  if (team.youtubeID) {
    teamsHTML += makeTeamHTML(team, alt);
    // alt = !alt;
  }
});

document.querySelector("#project-rows").innerHTML = teamsHTML;
/*
<div>
  <p style="margin-top:1em;color:white;">To vote <strong>${data.projectName}</strong> for the <em>People's Choice Award</em> click below:</p>
  <a href="./participate.html" class="btn" style="border-width:2px;background-color:#F5F5F5;color:#333333;">
    <span>VOTE: People's Choice</span>
  </a>
</div>
*/
function makeTeamHTML(data, alt=false) {
  let HTML = "";
  if (!alt) {
    HTML = `<div class="row" style="margin-bottom:5em;">
      <div class="col-sm-6 col-xs-12" style="background-color:#1b3d6e;padding:1em;">
        <div class="embed-responsive embed-responsive-16by9">
          <iframe src="https://www.youtube.com/embed/${data.youtubeID}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>

      <div class="col-sm-6 col-xs-12" style="padding:1em;">
        <h2 style="margin-top:0;font-family:'Roboto', sans-serif;font-size:2.25em;font-weight:500;">${data.projectName}</h2>
        <h3 style="margin-top:.75em;">Team: ${data.teamName}</h3>
        <p style="margin-top:1em;"><em>${data.members.join(", ")}</em></p>
        <p>${data.summary}</p>
      </div>
    </div>`
  } else {
    HTML = `<div class="row" style="margin-bottom:5em;">
      <div class="col-sm-6 col-xs-12 col-xs-push-12" style="padding:1em;">
        <h2 style="margin-top:0;">Team ${data.teamName}</h2>
        <p>${data.summary}</p>
        <p>Click below to vote this project for the <strong>People's Choice Award</strong>:</p>
        <br>
        <a href="./participate.html" class="btn">
          <span>VOTE: People's Choice</span>
        </a>
      </div>
      <div class="col-sm-6 col-xs-12" style="background-color:#1b3d6e;padding:1em;">
        <div class="embed-responsive embed-responsive-16by9">
          <iframe src="https://www.youtube.com/embed/${data.youtubeID}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <p style="margin-top:1em;color:white;">${data.members.join(", ")}</p>
      </div>
    </div>`
  }
  return HTML;
}
