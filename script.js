let count = 1
document.getElementById('r1').checked = true

setInterval(function () {
  nextImage()
}, 2000)

function nextImage() {
  count++
  if (count > 4) {
    count = 1
  }

  document.getElementById('r' + count).checked = true
}

document.getElementById("btn-menu-mobile");