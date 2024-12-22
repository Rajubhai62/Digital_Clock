const cTime = () => {
     let time = new Date().toLocaleTimeString();
     document.getElementById("clock").innerText = time;
     
};
cTime();

 setInterval(() => {
     
     cTime();
}, 1000);
