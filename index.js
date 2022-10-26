
function checkClass() {
    const player1 = document.querySelector('.arena__player1')
    player1.classList.remove('winner');
    player1.classList.remove('loser');
    const player2 = document.querySelector('.arena__player2')
    player2.classList.remove('winner');
    player2.classList.remove('loser');
}

function getPlayerOneHero() {
    const randomNumber1 = Math.floor(Math.random() * 800);
axios
    .get(
        "https://gateway.marvel.com/v1/public/characters?ts=1&apikey=c7b3f34713d78e50bd8bca0db90c532d&hash=dfbbee146bbe10dd1942bae7d8f8fd40&limit=1&offset=" +
        randomNumber1
    )
    .then((response) => {
        checkClass();
        console.log(randomNumber1);
        console.log(response);
        const heroArray = response.data.data.results;
        const player1ImageDiv = document.querySelector(".hero-img1");
        player1ImageDiv.innerText = '';
    for (let i = 0; i < heroArray.length; i++) {
        //Create Image
        const heroImage = document.createElement("img");
        heroImage.src = heroArray[i].thumbnail.path + "." + heroArray[i].thumbnail.extension;
        const player1ImageDiv = document.querySelector(".hero-img1");
        player1ImageDiv.appendChild(heroImage);

        //Getting Name
        const heroNameTag = document.querySelector(".hero-name1");
        const heroName = heroArray[i].name;
        heroNameTag.innerText = heroName;
        console.log(heroName);
        //Getting Backstory
        const heroBackStoryTag = document.querySelector('.hero-backstory1')
        function checkBackStory() {
            const heroBackStory = heroArray[i].description
            if (heroBackStory=== "") {
                return "No Backstory available."
            } else {
                return heroBackStory
            }
        }
        heroBackStoryTag.innerText = checkBackStory()
        // Getting Experience
        const heroExperienceTag = document.querySelector('.hero-experience1')
        function checkExperience() {
            const heroExperience = heroArray[i].stories.available
            if (heroExperience === 0 || heroExperience === '') {
                return 1
            } else {
                return heroExperience
            }
        }
        heroExperienceTag.innerText = checkExperience()
    }}
    )};
const player1Button = document.querySelector('.arena__choose-button1');
player1Button.addEventListener('click', (event) => {
    console.log("button clicked")
    event.preventDefault()
    getPlayerOneHero()
    checkClass()
})


function getPlayerTwoHero() {
    const randomNumber2 = Math.floor(Math.random() * 800);
    axios
        .get(
            "https://gateway.marvel.com/v1/public/characters?ts=1&apikey=c7b3f34713d78e50bd8bca0db90c532d&hash=dfbbee146bbe10dd1942bae7d8f8fd40&limit=1&offset=" +
            randomNumber2
        )
        .then((response) => {
            checkClass();
            console.log(randomNumber2);
            console.log(response);
            const heroArray = response.data.data.results;
            const player2ImageDiv = document.querySelector(".hero-img2");
            player2ImageDiv.innerText = '';
        for (let i = 0; i < heroArray.length; i++) {
            //Create Image
            const heroImage = document.createElement("img");
            heroImage.src = heroArray[i].thumbnail.path + "." + heroArray[i].thumbnail.extension;
            player2ImageDiv.appendChild(heroImage);
            //Getting Name
            const heroNameTag = document.querySelector(".hero-name2");
            const heroName = heroArray[i].name;
            heroNameTag.innerText = heroName;
            console.log(heroName);
            //Getting Backstory
            const heroBackStoryTag = document.querySelector('.hero-backstory2')
            function checkBackStory() {
                const heroBackStory = heroArray[i].description
                if (heroBackStory=== "") {
                    return "No Backstory Available"
                } else {
                    return heroBackStory
                }
            }
            heroBackStoryTag.innerText = checkBackStory()
            // Getting Experience
    
            const heroExperienceTag = document.querySelector('.hero-experience2')
            
            function checkExperience() {
                const heroExperience = heroArray[i].stories.available
                if (heroExperience === 0 || heroExperience === '') {
                    return 1
                } else {
                    return heroExperience
                }
            }
            heroExperienceTag.innerText = checkExperience()
        }}
        )};
    
        const player2Button = document.querySelector('.arena__choose-button2');
        player2Button.addEventListener('click', (event) => {
            const player1Div = document.querySelector('.arena__player1')
            player1Div.classList.remove 
            const player2Div = document.querySelector('.arena__player2')
            console.log("button clicked")
            event.preventDefault()
            getPlayerTwoHero()
            function checkClass() {
                const player1 = document.querySelector('.arena__player1')
                player1.classList.remove('winner');
                player1.classList.remove('loser');
                const player2 = document.querySelector('.arena__player2')
                player2.classList.remove('winner');
                player2.classList.remove('loser');
            }
            checkClass()
        })
        
        function checkExperienceValues() {
            const value1 = document.querySelector('.hero-experience1')
            const value2 = document.querySelector('.hero-experience2')
            const player1Div = document.querySelector('.arena__player1')
            const player2Div = document.querySelector('.arena__player2')
            const result = document.querySelector('.result')
            console.log(value1)
            console.log(value2)
/*
            const winnerClass = document.querySelector('.winner')
            if (winnerClass) {
                document.classList.remove('winner')
            }

            const loserClass = document.querySelector('.loser')
            if (loserClass) {
                document.classList.remove('loser')
            }
*/            
            if (value1.innerText > value2.innerText) {
                const value1 = document.querySelector('.hero-experience1')
                player1Div.classList.add("winner")
                player2Div.classList.add("loser")
                result.innerText = "Player 1 Wins!!"
            } else if (value2.innerText > value1.innerText) {
                player1Div.classList.add("loser")
                player2Div.classList.add("winner")
                result.innerText = "Player 2 Wins!!"
            }
            else {
                result.innerText = "You`re mortal enemies. The battle is endless"
            }
        }

        const fightButton = document.querySelector(".arena__fight-button")
        fightButton.addEventListener('click', (event) => {
            console.log('fight clicked')
            checkExperienceValues()
        })