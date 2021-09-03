document.addEventListener('keydown', function (event) {
  if (event.keyCode === 13) {
    play();
  }
})
document.addEventListener('mousemove', play)
document.addEventListener('mouseup', play)
document.addEventListener('mousedown', play)
document.addEventListener('click', play)
function play() {document.getElementById('audio').play();}