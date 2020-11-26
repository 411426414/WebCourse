const images = document.querySelectorAll('header > div > img')

document.querySelector('header').addEventListener('mousemove', (e) => {
    let percentage = e.clientX / window.outerWidth
    let offset = 10 * percentage
    let blur = 20

    for (const [index, image] of images.entries()) {
        // offset *= 1.3 即越往后的图片,位移就会越多
        offset *= 1.3

        let blurValue = (Math.pow((index / images.length - percentage), 2) * blur)

        image.style.setProperty('--offset', `${offset}px`)
        image.style.setProperty('--blur', `${blurValue}px`)
    }
})