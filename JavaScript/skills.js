if (history.scrollRestoration) {
    history.scrollRestoration = "manual";
  } else {
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    };
  }
  
  const arrOfCourse = [
    ["icons/office.png", "microsoft office (word, excel, powerpoint)", "90%"],
    ["icons/html.png", "html 5", "98%"],
    ["icons/css-3.png", "css", "95%"],
    ["icons/bootstrap.png", "bootstrap", "75%"],
    ["icons/java.png", "java dsa", "70%"],
    ["icons/java-script.png", "javascript", "60%"],
    ["icons/react.png", "react js", "05%"],
    ["icons/node.png", "node js", "00%"],
    ["icons/express.png", "express js", "00%"],
    ["icons/mongo.png", "mongo db", "00%"],
    ["icons/sql-server.png", "sql", "60%"],
    ["icons/communication.png", "communication", "80%"],
    ["icons/creativity.png", "creativity", "99%"],
  ];
  
  const n = arrOfCourse.length;
  const SkillsContainer = document.getElementById("container-skills"); //targeting "container-skills" div
  
  for (let i = 0; i < n; i++) {
    let course = document.createElement("div"); //div.container-skills => div.course
    let courseNameAndLogo = document.createElement("div"); // div.course => div.courseNameAndLogo
    let imgTag = document.createElement("img"); // div.course => div.courseNameAndLogo => img
    let span = document.createElement("span"); // div.course => div.courseNameAndLogo => span
    let progressBar = document.createElement("div"); // div.course => div.progressBar
    let bar = document.createElement("div"); // div.course => div.progressBar => div.bar
    let progress = document.createElement("div"); // div.course => div.progressBar => div.bar => div.progress
    let percent = document.createElement("h3"); // div.course => div.progressBar => h3

    // access of data from array
    let img = arrOfCourse[i][0];
    let courseName = arrOfCourse[i][1];
    let percentage = arrOfCourse[i][2];
  

    SkillsContainer.appendChild(course); // div
    course.classList.add("course"); // div.course
    course.appendChild(courseNameAndLogo); // div.course => div.courseNameAndLogo
    courseNameAndLogo.classList.add("courseNameAndLogo");
    courseNameAndLogo.appendChild(imgTag); // div.course => div.courseNameAndLogo => img
    courseNameAndLogo.appendChild(span); // div.course => div.courseNameAndLogo => span
    course.appendChild(progressBar); // div.course => div
    progressBar.classList.add("progress-bar"); // div.course => div.progressBar
    progressBar.appendChild(bar); // div.course => div.progressBar => div
    bar.classList.add("bar"); // div.course => div.progressBar => div.bar
    bar.appendChild(progress); // div.course => div.progressBar => div.bar => div
    progress.classList.add("progress");   // div.course => div.progressBar => div.bar => div.progress
    progress.style.width = percentage;  // div.course => div.progressBar => div.bar => div.progress => width added
    progressBar.appendChild(percent);   
    percent.classList.add("color-primary");
  
    imgTag.setAttribute("src", img);
    span.innerText = courseName;
    percent.innerText = percentage;
  }
  