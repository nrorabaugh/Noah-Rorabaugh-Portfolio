const name = document.getElementsByTagName("h1")[0]
const me = document.getElementById("me")
let about = 'about'
let skills = 'skills'
let projects = 'projects'
let contact = 'contact'

const pageText = {
    about: "Hi, I'm Noah. I'm a student at General Assembly Atlanta studying software engineering. Since a young age, I have lived on the south side of Atlanta and I am proud to call the southern capitol home. I enjoy the process of creation as well as the fine art of perfecting systems. I love to have fun, but I love to work, too.",
    contact: "Hope to hear from you soon!<br/><br/>LinkedIn: <a href = 'https://www.linkedin.com/in/noah-rorabaugh'>https://www.linkedin.com/in/noah-rorabaugh/</a><br/><br/>Email: noah.rorabaugh@gmail.com<br/><br/>Phone: (404) 606-6433"
}
let component = 'about'

let opening = () => {
    name.style.animationName = 'fade'
    setTimeout(() => {document.getElementsByClassName('sky')[0].removeChild(name)}, 600)
    setTimeout(() => {
        me.style.animationName = 'moveImg'
        setTimeout(() => {
            me.style.transform = 'translateX(43vw) translateY(-38vh)'
            me.style.width= '9vw'
            me.style.border= '9px solid rgb(83, 83, 255)'
            me.style.borderRadius= '25px'
        }, 600)
    }, 500
    )
    setTimeout(() => {
        console.log(document.getElementsByClassName('sunRad')[0])
        document.getElementsByClassName('sunRad')[0].style.animationName='cycle'
    }, 500)
}

let menu1 = document.getElementsByClassName('option one')[0]
let menu2 = document.getElementsByClassName('option two')[0]
let menu3 = document.getElementsByClassName('option three')[0]
let menu4 = document.getElementsByClassName('option four')[0]
let menuStatus = 'closed'

let menuOpen = () => {
    menu4.style.animationName = 'menu4'
    setTimeout(() => {menu4.style.transform = 'rotate(18deg)'}, 200)
    setTimeout(() => {
        menu3.style.animationName = 'menu3'
        setTimeout(() => {menu3.style.transform = 'rotate(6deg)'}, 200)
    }, 50)
    setTimeout(() => {
        menu2.style.animationName = 'menu2'
        setTimeout(() => {menu2.style.transform = 'rotate(-6deg)'}, 200)
    }, 100)
    setTimeout(() => {
        menu1.style.animationName = 'menu1'
        setTimeout(() => {menu1.style.transform = 'rotate(-18deg)'}, 200)
        menuStatus = 'open'
    }, 150)
}

let menuClose = () => {
    menu4.style.animationName = 'collapse'
    setTimeout(() => {menu4.style.transform = 'rotate(-180deg)'}, 200)
    setTimeout(() => {
        menu3.style.animationName = 'collapse'
        setTimeout(() => {menu3.style.transform = 'rotate(-180deg)'}, 200)
    }, 50)
    setTimeout(() => {
        menu2.style.animationName = 'collapse'
        setTimeout(() => {menu2.style.transform = 'rotate(-180deg)'}, 200)
    }, 100)
    setTimeout(() => {
        menu1.style.animationName = 'collapse'
        setTimeout(() => {menu1.style.transform = 'rotate(-180deg)'}, 200)
        menuStatus = 'closed'
    }, 150)
}

let menuToggle = async() => {
    if(menuStatus==='closed') {
        menuOpen()
    }
    if(menuStatus==='open') {
        menuClose()
    }
}

let pop = (which) => {
    let body = document.createElement('div')
    body.setAttribute('class', 'body')
    let text = document.createElement('span')
    text.setAttribute('class', 'text')
    body.appendChild(text)
    text.innerHTML = pageText[which]
    let sky = document.getElementsByClassName('sky')[0]
    sky.appendChild(body)
}

let shift = (which) => {
    if(component === 'skills' || component === 'projects') {
        let wrap = document.getElementsByClassName('wrap')[0]
        let body = document.getElementsByClassName('body')[0]
        body.removeChild(wrap)
    }
    let text = document.getElementsByClassName('text')[0]
    if(which !== 'about' && which !== 'contact') {
        text.innerHTML = ''
    }
    text.style.animationName = 'fade'
    setTimeout(() => {
        text.style.color = 'rgba(0,0,0,0)'
        if(which === 'about' || which === 'contact') {
            text.innerHTML = pageText[which]
        }
        text.style.animationName = 'textMount'
        setTimeout(() => {
            text.style.color = 'black'
        }, 200)
    }, 200)
    component = which
    let logos = 
[
    'devicon-css3-plain-wordmark',
    'devicon-django-plain colored',
    'devicon-github-plain colored',
    'devicon-heroku-original-wordmark',
    'devicon-html5-plain-wordmark',
    'devicon-javascript-plain',
    'devicon-mongodb-plain-wordmark',
    'devicon-nodejs-plain-wordmark',
    'devicon-postgresql-plain-wordmark',
    'devicon-python-plain-wordmark',
    'devicon-react-original',
    'devicon-visualstudio-plain'
]
    if(component === 'skills') {
        let wrap = document.createElement('div')
        wrap.setAttribute('class', 'wrap')
        wrap.style.display = 'flex'
        wrap.style.flexDirection = 'row'
        wrap.style.flexWrap = 'wrap'
        wrap.style.maxWidth = '50vw'
        wrap.style.height = '50vh'
        for(let i=0; i<logos.length; i++){
            // let sun = document.getElementsByClassName('sun')[0]
            // let sky = document.getElementsByClassName('sky')[0]
            // let sunRect = sun.getBoundingClientRect()
            // let skyRect = sky.getBoundingClientRect()
            // document.insertStyleSheetRule(`@keyframes logo${i} {\ 0% {\ transform: translateX}}`)
            let img = document.createElement('i')
            img.setAttribute('class', logos[i])
            img.style.fontSize = '90px'
            img.style.margin = '30px'
            wrap.appendChild(img)
        }
        let body = document.getElementsByClassName('body')[0]
        body.appendChild(wrap)
    }
    let projects = [
        {
            title: 'Chat Room App',
            url: 'https://vent-chat.herokuapp.com/',
            image: './images/chat.png'
        },
        {
            title: 'Blackjack Game',
            url: 'https://competent-joliot-7620c9.netlify.com/',
            image: './images/blackjack.png'
        },
        {
            title: 'Clothing Store Clone',
            url: 'https://floating-bayou-99352.herokuapp.com/',
            image: './images/store.png'
        }
    ]
    if(component === 'projects') {
        let wrap = document.createElement('div')
        wrap.setAttribute('class', 'wrap')
        wrap.style.display = 'flex'
        wrap.style.flexDirection = 'row'
        wrap.style.flexWrap = 'wrap'
        wrap.style.maxWidth = '50vw'
        wrap.style.height = '50vh'
        for(let i = 0; i< projects.length; i++){
            let a = document.createElement('a')
            a.setAttribute('href', projects[i].url)
            a.style.margin = '30px'
            a.style.color = 'black'
            a.style.fontFamily = 'Helvetica'
            a.style.textDecoration = 'none'
            let img = document.createElement('img')
            img.setAttribute('src', projects[i].image)
            img.style.width = '200px'
            let title = document.createElement('h3')
            title.innerHTML = projects[i].title
            title.style.fontWeight = '100'
            a.appendChild(img)
            a.appendChild(title)
            wrap.appendChild(a)
        }
        let body = document.getElementsByClassName('body')[0]
        body.append(wrap)
    }
    menuClose()
}

let menu = document.getElementsByClassName('menu')[0]
menu.addEventListener('click', menuToggle)

setTimeout(() => {opening()}, 1000)

setTimeout(() => {pop('about')}, 2000)



