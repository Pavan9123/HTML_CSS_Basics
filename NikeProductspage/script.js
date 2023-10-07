
const AllVideos = document.querySelectorAll('#video')

AllVideos.forEach(video => {
    video.addEventListener('mouseover',()=>{
        video.play()
    })
    video.addEventListener('mouseout',()=>{
        video.pause()
        video.currentTime = 0
    })
});

const allimages = document.querySelectorAll('#prd-img')

allimages.forEach(img => {
    img.addEventListener('mouseover',()=>{
        img.style.width = "220px"
    })
    img.addEventListener('mouseout',()=>{
        img.style.width = "200px"
    })
    
});

