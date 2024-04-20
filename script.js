  const resolutionSelect = document.getElementById('resolutionSelect');
  const selectedImage = document.getElementById('selectedImage');
  const bgMusic = document.getElementById('bgMusic');
  const selectSound = document.getElementById('selectSound');
  const a1080pSound = document.getElementById('a1080pSound');

  resolutionSelect.addEventListener('change', function() {
    const selectedOption = resolutionSelect.value;
    if (selectedOption) {
      
      selectSound.play();
            
      if (selectedOption === '1080p') {
        selectedImage.src = 'images/1080p.gif';
        bgMusic.pause();
        a1080pSound.loop = true
        a1080pSound.play();
      } else {
        a1080pSound.loop = false
        bgMusic.play();
        selectedImage.src = 'images/' + selectedOption + '.jpg';
      }
    } else {
      bgMusic.pause();
      a1080pSound.loop = false  
      selectedImage.src = 'images/default.jpg';
    }
  });