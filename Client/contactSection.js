function toggleMenu() {
    const navbar = document.getElementById("navbar");
    const menuIcon = document.querySelector(".menu-icon");
  
    navbar.classList.toggle("active");
   
    menuIcon.innerHTML = navbar.classList.contains("active") ? '<span class="icon" style="color: white; font-size: 24px; ">&#10005;</span>' : '<span style="color: white;font-size:24px;">&#9776;</span>';

  }
  
  const solutionList = () => {
    const list = document.getElementById("solution-container");
    const solutionButton = document.querySelector(".solution");
  
    if (list.style.display === "none") {
      list.style.display = "block";
      solutionButton.classList.add("open");
      document.querySelector(".menu-icon").classList.add("invisble");
    } else {
      list.style.display = "none";
      solutionButton.classList.remove("open");
      document.querySelector(".menu-icon").classList.remove("invisble");
    }
  };




