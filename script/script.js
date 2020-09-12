const jbtQuestions = {
    foodRelated: [
        "Is a hotdog a sandwich?",
        "What classifies a salad? Is a potato salad a salad? What about pasta salad? What about a bowl of rice?",
        "Rank these in order from best to worst: Watermelon, cantaloupe, honeydew",
        "What is the worst potato chip flavour?",
        "Worst donut flavour?",
        "Do you pour the milk or cereal in first?",
        "Does pineapple belong on pizza?",
        "What’s the most bizarre thing that you’ve ever eaten?",
        "If you could build an ultimate meal, what would the components be? (ex. Fries from Five Guys, your family's homemade burgers, ice cream from Bang Bang)",
        "Would you rather never eat your favorite food for the rest of your life, or only be able to eat your favorite food?"
    ],
    personalPreferences: [
        "What did you do when you were younger that would make you cringe now?",
        "If you turned into a pigeon, how would you convince your family that it was you?",
        "Would you rather your parents or your partner/best friend be able to read your thoughts?",
        "If you had 1 minute to talk to your pet, and they could understand you, what would you say?",
        "What is your earliest memory?",
        "What's the best physical item you've found for free?",
        "Would you rather have to wear wet socks or itchy clothing for the rest of your life?",
        "What is a 'fad' that you wish would come back?",
        "If you could teleport to anywhere in the world for a week, where would you go?",
        "What is the most uesless thing you have ever purchased...and why do you still have it?"
    ]
};

// console.log(jbtQuestions)

$(document).ready(function(){ //Doc Ready

    // Function that will return a random item from one of the cateogyr arrays
    function randomQuestion(category) {
        const randomIndex = Math.floor(Math.random() * category.length);
        // console.log(randomIndex);
        const questionToDisplay = category[randomIndex] // When you return, it's printing it on the page
        // console.log(questionToDisplay)
        return questionToDisplay;
    }

    // FIRST EVENT LISTENER TO GENERATE ORIGINAL Q FROM LANDING PAGE
    $('form').on('submit', function(e) {
        e.preventDefault();
        // console.log('hello');
        // Variable that stores the category the user selected:
        const userSelection = $('select option:selected').val();
        // console.log(userSelection)

        // category will return us the array that corresponds with the category 
        const categorySelected = jbtQuestions[userSelection]
        console.log(categorySelected)

        const finalQuestion = randomQuestion(categorySelected);
        // console.log(categorySelected[9])

        // DISPLAY IT
        $('.displayedQuestion').text(`${finalQuestion}`);
    })

    // SECOND EVENT LISTENER - SCROLL TO IT
    $('form').on('submit', function(e) {
        e.preventDefault();
        // console.log('SCROLL');
        
        const target = $('.resultsContainer');
        // Animation courtesy of CodexWorld
        $('html,body').animate({
            scrollTop: target.offset().top
        }, 1000);
     });

    // THIRD EVENT LISTENER FOR PICK ANOTHER QUESTION BUTTON
     $('.newQ').on('click', function() {
        // console.log('New Question')

        // $('.displayedQuestion').text(`${finalQuestion}`);
    })

    // FOURTH EVENT LISTENER FOR PICK ANOTHER CATEGORY/START OVER & GO TO TOP
    $('.newCat').on('click', function(){
        console.log('New cat')

        const target = $('.landing');
        // Animation courtesy of CodexWorld
        $('html,body').animate({
            scrollTop: target.offset().top
        }, 1000);
    })
});