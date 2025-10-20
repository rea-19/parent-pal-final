document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {

    // create small pop up
    const tutorialPopup = document.createElement("div");
    tutorialPopup.id = "tutorial-popup";
    tutorialPopup.innerHTML = `
      <div id="tutorial-content">
        <div id="tutorial-title">Getting Started: How to Claim Your Points</div>
        <div id="tutorial-thumb">
          <img src="/src/tutorial-thumb.jpg" >
          <div id="play-button">&#9658;</div>
        </div>
      </div>
    `;
    document.body.appendChild(tutorialPopup);

    // Fade in popup
    requestAnimationFrame(() => {
      tutorialPopup.style.opacity = "1";
    });

    // create modal element
    const tutorialModal = document.createElement("div");
    tutorialModal.id = "tutorial-modal";
    tutorialModal.innerHTML = `
      <div id="modal-content">
        <video id="tutorial-video" controls>
          <source src="/src/tutorial.mp4" type="video/mp4">
          Your browser does not support the video tag.
        </video>
        <div id="modal-text">Want to view more guide? <span id="visit-resources">Visit our resource page</span></div>
        <div id="modal-close">&#10006;</div>
      </div>
    `;
    document.body.appendChild(tutorialModal);

    // pop up click handler
    tutorialPopup.addEventListener("click", () => {
      tutorialModal.style.display = "flex";
      document.body.style.overflow = "hidden"; // prevent background scroll
      const video = document.getElementById("tutorial-video");
      video.currentTime = 0;
      video.play();
    });

    //close modal
    document.getElementById("modal-close").addEventListener("click", () => {
      tutorialModal.style.display = "none";
      document.body.style.overflow = "";
      const video = document.getElementById("tutorial-video");
      video.pause();
    });

    //visit resource page
    document.getElementById("visit-resources").addEventListener("click", () => {
      window.location.href = "/html/resources_guide.html";
    });

    // autohide popup after 10 sec
    setTimeout(() => {
      tutorialPopup.style.opacity = "0";
      setTimeout(() => tutorialPopup.remove(), 500);
    }, 10000);

  }, 5000); // show popup after 5 seconds
});
