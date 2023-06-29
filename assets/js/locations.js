const logo = document.getElementById('celmez-item-logo-a')
const tweet = document.getElementById('tweet')
const insta = document.getElementById('insta')
const youtube = document.getElementById('youtube')
const linkedin = document.getElementById('linkedin')
const github = document.getElementById('github')

logo.addEventListener('click', () => { window.location.href = 'http://127.0.0.1:5500' })

tweet.addEventListener('click', () => { window.open( 'https://www.twitter.com/yusufcelmez', '_blank' ) })
insta.addEventListener('click', () => { window.open( 'https://www.instagram.com/yusufcelmez/', '_blank' ) })
youtube.addEventListener('click', () => { window.open( 'https://www.youtube.com/@yusufcelmez/', '_blank' ) })
linkedin.addEventListener('click', () => { window.open( 'https://www.linkedin.com/in/celmez/', '_blank' ) })
github.addEventListener('click', () => { window.open( 'https://www.github.com/celmez/', '_blank' ) })