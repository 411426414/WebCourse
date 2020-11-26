let banner = document.querySelector('.banner')
let images = document.querySelectorAll('.image')

// 获取窗口宽度
let window_width = document.documentElement.clientWidth;
// 通过宽度获取到每变化1px的模糊度需要位移的距离
let step = window_width / 2 / 5;

let data_images = [
    // x: 位移
    // b: 模糊度
    {
        x: 0,
        b: 4
    },
    {
        x: 0,
        b: 0
    },
    {
        x: 0,
        b: 1
    },
    {
        x: 0,
        b: 4
    },
    {
        x: 0,
        b: 5
    },
    {
        x: 0,
        b: 6
    }
]

let init = () => {
    // images[0].children[0].style = "transform: translate(0px); filter: blur(4px);";
    // images[1].children[0].style = "transform: translate(0px); filter: blur(0px);";
    // images[2].children[0].style = "transform: translate(0px); filter: blur(1px);";
    // images[3].children[0].style = "transform: translate(0px); filter: blur(4px);";
    // images[4].children[0].style = "transform: translate(0px); filter: blur(5px);";
    // images[5].children[0].style = "transform: translate(0px); filter: blur(6px);";
    for (const key in images) {
        if (images.hasOwnProperty(key)) {
            const element = images[key];
            const element_data = data_images[key]
            element.children[0].style = 'transition: .2s linear; transform: translate(' + element_data.x + 'px); filter: blur(' + element_data.b + 'px);';
        }
    }
}

banner.addEventListener('mouseover', (e) => {
    x = e.clientX
        // console.log(x);
})
banner.addEventListener('mousemove', (e) => {
    x_new = e.clientX
        // console.log(newx);
    x_offset = x - x_new;
    // console.log(x_offset);
    for (const key in images) {
        if (images.hasOwnProperty(key)) {
            let level = (6 - parseInt(key)) * 10
            const element = images[key];
            const element_data = data_images[key]
            let b_new = Math.abs(element_data.b + (x_offset / step))
            let l_new = -(x_offset / level);
            element.children[0].style = 'transform: translate(' + l_new + 'px); filter: blur(' + b_new + 'px);';
        }
    }
})
banner.addEventListener('mouseout', (e) => {
    init();
})
blink_index = 0;
timeout = 4000
let blink = () => {
    if (blink_index == 4) {
        blink_index = 1;
        timeout = 4000
    } else {
        blink_index += 1;
        timeout = 30
    }
    images[1].children[0].src = 'images/girl' + blink_index + '.png'
    setTimeout(() => {
        blink();
    }, timeout);
}
window.onload = () => {
    init();
    blink();
}