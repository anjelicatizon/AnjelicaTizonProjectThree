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

$(document).ready(function(){

    function randomQuestion(category) {
        const randomIndex = Math.floor(Math.random() * category.length);
        const questionToDisplay = category[randomIndex]
        return questionToDisplay;
    }

    //Copy function courtesty of Shaik Maqsood on CodePen
    function copyToClipboard(element) {
        const temp = $("<input>");
        $("body").append(temp);
        temp.val($(element).text()).select();
        document.execCommand("copy");
        temp.remove();
    }

    $('form').on('submit', function(e) {
        e.preventDefault();
        const userSelection = $('select option:selected').val();
        const categorySelected = jbtQuestions[userSelection]
        console.log(categorySelected)

        if (categorySelected == undefined) {
            alert('Select a category from the dropdown to generate a question 🧃')
        }

        const finalQuestion = randomQuestion(categorySelected);

        $('.displayedQuestion').text(`${finalQuestion}`);

        $('.results').fadeIn('slow');
    })

    $('form').on('submit', function(e) {
        e.preventDefault();
        // Animation courtesy of CodexWorld
        const target = $('.resultsContainer');
        $('html,body').animate({
            scrollTop: target.offset().top
        }, 1000);
     });

     $('.newQ').on('click', function() {
        const userSelectionTwo = $('select option:selected').val();
        const categorySelectedTwo = jbtQuestions[userSelectionTwo]
        console.log(categorySelectedTwo)
        const anotherQuestion = randomQuestion(categorySelectedTwo);

        $('.displayedQuestion').text(`${anotherQuestion}`);
    })

    $('.newCat').on('click', function(){
        const target = $('.landing');

        // Scroll/Animation courtesy of CodexWorld
        $('html,body').animate({
            scrollTop: target.offset().top
        }, 1000);
    })

   $('.copy').on('click', function() {
       console.log('COPY');
       copyToClipboard('.displayedQuestion')
   })
 
});