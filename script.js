document.addEventListener("DOMContentLoaded", function() {

    lightPaths = document.getElementById("house").getElementsByTagName("path");
    lightPolygons = document.getElementById("house").getElementsByTagName("polygon");
    setInterval(function() {
        for (i = 1; i < lightPaths.length; i++) {
            lightPaths[i].style.fill = "url(#SVGID_21_)";
        }
        for (i = 0; i < lightPolygons.length; i++) {
            lightPolygons[i].style.fill = "url(#SVGID_21_)";
        }
        for (let j = 0; j < 5; j++) {
            setTimeout(function() {
            for (i = 1; i < lightPaths.length; i++) {
                lightPaths[i].style.fill = "#333";
            }
            for (i = 0; i < lightPolygons.length; i++) {
                lightPolygons[i].style.fill = "#333";
            }
            }, 100 + j * 200);

            setTimeout(function() {
            for (i = 1; i < lightPaths.length; i++) {
                lightPaths[i].style.fill = "url(#SVGID_21_)";
            }
            for (i = 0; i < lightPolygons.length; i++) {
                lightPolygons[i].style.fill = "url(#SVGID_21_)";
            }
            }, 200 + j * 200);
        }
    
    }
    , 5000);
    setTimeout(function() {
        document.getElementsByClassName("eyes")[0].style.fill = "yellow"
        document.getElementsByClassName("eyes")[1].style.fill = "yellow"
    }
    , 5000);
});
document.getElementById("accessibilityForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const disableJumpscare = document.getElementById("disableJumpscare").checked;
    const disableMusic = document.getElementById("disableMusic").checked;
    const readableFont = document.getElementById("readableFont").checked;
    const fontSize = document.getElementById("fontSize").value;
    
    displaySettings(readableFont, fontSize);
  
    jumpscare();
  });

  function playMusic() {
    const audio = document.getElementById('backgroundMusic');
    audio.play();
} 

function pauseMusic(){
  const audio = document.getElementById('backgroundMusic');
  audio.pause();
}

  
  document.getElementById('disableJumpscare').addEventListener('change', function() {
    if (this.checked) {
      console.log("Jumpscare disabled");
    } else {
      console.log("Jumpscare enabled");
    }
  })

    document.getElementById('disableMusic').addEventListener('change', function() {
    if (this.checked) {
      playMusic()
    } else {
      pauseMusic()
    }
    })

    document.getElementById('readableFont').addEventListener('change', function() {
    if (this.checked) {
        fontsize = document.getElementById("fontSize").value;
      displaySettings(true, fontsize);
    } else {
        fontsize = document.getElementById("fontSize").value;
      displaySettings(false, fontsize);
    }
    }
    )

    document.getElementById('fontSize').addEventListener('change', function() {
        fontsize = document.getElementById("fontSize").value;
        readableFont = document.getElementById("readableFont").checked;
        displaySettings(readableFont, fontsize);
    })
  
  function displaySettings(readableFont, fontSize) {
    console.log("Readable Font:", readableFont);
    if (readableFont) {
      document.body.style.fontFamily = 'Arial, sans-serif';
    } else {
      document.body.style.fontFamily = 'Creepster, cursive';
    }
    labels = document.getElementsByTagName("label")
    for (i = 0; i < labels.length; i++) {
      labels[i].style.fontSize = fontSize + "px";
    }

  }
  
  function jumpscare() {
    const jumpscareElement = document.createElement("div");
    jumpscareElement.innerHTML = "<img src='jumpscare.png' alt='Jumpscare Image' style='position:fixed; top:0; left:0; width:100vw; height:100vh; z-index:1000;'>";
    document.body.appendChild(jumpscareElement);
    
    const screamAudio = new Audio('scream.mp3');
    screamAudio.play();
    
    setTimeout(() => {
      document.body.removeChild(jumpscareElement);
      window.location.href = "https://hack.club/boba-manor";
    }, 2000);
  }
  