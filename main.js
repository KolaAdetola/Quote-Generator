let btn = document.querySelector('#newquote');
let quote = document.querySelector('#quote');
let persons = document.querySelector('#person');

const quotes = [
        {
            quote:`it does not matter how slowly you go as long as you don't stop`,
            person:`conficius`
        },
        {
            quote:`the journey of a thousand miles begins with a single step`,
            person:`lao Tzu`
        },
        {
            quote:`sometimes not getting what you want may be a mighty stroke of luck`,
            person:`Dalai lama`
        },
        {
            quote:`a word is enough for the wise. but it is never enough for the foolish`,
            person:`austin ikpe king`
        },
        {
            quote:`Be yourself; everyone else is already taken.`,
            person:`Oscar Wilde`
        },
        {
            quote:`I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.`,
            person:`Marilyn Monroe`
        },
        {
            quote:`Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.`,
            person:`Albert Einstein`
        },
        {
            quote: "In our society, letting others find out that you're a nice person is a very risky move. It's extremely likely that someone would take advantage of that.",
            person: "Hitagi Senjougahara"
        },
        {
            quote: "To know sorrow is not terrifying. What is terrifying is to know you can't go back to happiness you could have.",
            person: "Matsumoto Rangiku"
        },
        {
            quote: "When you have to deal with a beast, you have to treat him as a beast.",
            person: "Sebastian Michaelis"
        },
        {
            quote: "If you don’t share someone’s pain, you can never understand them.",
            person: "Nagato"
        },
        {
            quote: "People's lives don't end when they die. It ends when they lose faith.",
            person: "Itachi Uchiha"
        },
        {
            quote: "If you don’t take risks, you can’t create a future!",
            person: "Monkey D. Luffy"
        },
        {
            quote: "Power comes in response to a need, not a desire. You have to create that need.",
            person: "Goku"
        },
        {
            quote: `It's not the face that makes someone a monster; it's the choices they make with their lives.`,
            person: "Naruto Uzumaki"
        },
        {
            quote: `Many of life’s failures are people who did not realize how close they were to success when they gave up.`,
            person:`Thomas A. Edison`,
        },
        {
            quote: `You only live once, but if you do it right, once is enough.`,
            person:`Mae West`,
        },
        {
            quote: `Get busy living or get busy dying.`,
            person:` Stephen King`,
        },
        {
            quote: `Money and success don’t change people; they merely amplify what is already there.`,
            person:`Will Smith`,
        },
        {
            quote: `Not how long, but how well you have lived is the main thing.`,
            person:`Seneca`,
        },
        {
            quote: "The only limit to our realization of tomorrow is our doubts of today.",
            person: "Franklin D. Roosevelt"
        },
        {
            quote: "In the end, we will remember not the words of our enemies, but the silence of our friends.",
            person: "Martin Luther King Jr."
        },
        {
            quote: "Life is what happens when you're busy making other plans.",
            person: "John Lennon"
        },
        {
            quote: "The purpose of our lives is to be happy.",
            person: "Dalai Lama"
        },
        {
            quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
            person: "Winston Churchill"
        },
        {
            quote: "It is our choices that show what we truly are, far more than our abilities.",
            person: "J.K. Rowling"
        },
        {
            quote: "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.",
            person: "Buddha"
        },
        {
            quote: "The best way to predict the future is to invent it.",
            person: "Alan Kay"
        },
        {
            quote: "You must be the change you wish to see in the world.",
            person: "Mahatma Gandhi"
        },
        {
            quote: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
            person: "Ralph Waldo Emerson"
        },
        {
            quote: "I have not failed. I've just found 10,000 ways that won't work.",
            person: "Thomas Edison"
        },
        {
            quote: "The only way to do great work is to love what you do.",
            person: "Steve Jobs"
        },
        {
            quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
            person: "Nelson Mandela"
        },
        {
            quote: "The only thing we have to fear is fear itself.",
            person: "Franklin D. Roosevelt"
        },
        {
            quote: "Imagination is more important than knowledge.",
            person: "Albert Einstein"
        },
        {
            quote: "The only way to do great work is to love what you do.",
            person: "Steve Jobs"
        },
        {
            quote: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
            person: "Ralph Waldo Emerson"
        },
        {
            quote: "In the end, we will remember not the words of our enemies, but the silence of our friends.",
            person: "Martin Luther King Jr."
        },
        {
            quote: "The only thing we have to fear is fear itself.",
            person: "Franklin D. Roosevelt"
        },
        {
            quote: "The unexamined life is not worth living.",
            person: "Socrates"
        },
        {
            quote: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
            person: "Ralph Waldo Emerson"
        },
        {
            quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
            person: "Winston Churchill"
        },
        {
            quote: "That which does not kill us makes us stronger.",
            person: "Friedrich Nietzsche"
        },
        {
            quote: "Life is what happens when you're busy making other plans.",
            person: "John Lennon"
        },
        {
            quote: "Good artists copy, great artists steal.",
            person: "Pablo Picasso"
        },
        {
            quote: "The journey of a thousand miles begins with one step.",
            person: "Lao Tzu"
        },
        {
            quote: "The unexamined life is not worth living.",
            person: "Socrates"
        },
        {
            quote: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
            person: "Ralph Waldo Emerson"
        },
        {
            quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
            person: "Winston Churchill"
        },
        {
            quote: "That which does not kill us makes us stronger.",
            person: "Friedrich Nietzsche"
        },
        {
            quote: "Life is what happens when you're busy making other plans.",
            person: "John Lennon"
        },
        {
            quote: "Good artists copy, great artists steal.",
            person: "Pablo Picasso",
        },
        {
            quote: "The journey of a thousand miles begins with one step.",
            person: "Lao Tzu",
        },
        {
            quote: "Dream big and dare to fail.",
            person: "Norman Vaughan",
        },
        {
            quote: "Life is really simple, but we insist on making it complicated.",
            person: "Confucius",
        },
        {
            quote: "The only limit to our realization of tomorrow will be our doubts of today.",
            person: "Franklin D. Roosevelt" ,
        },
        {
            quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
            person: "Nelson Mandela",
        },
        {
            quote: "The way to get started is to quit talking and begin doing.",
            person: "Walt Disney",
        },
        {
            quote: "Don't watch the clock; do what it does. Keep going.",
            person: "Sam Levenson",
        },
        {
            quote: "It does not matter how slowly you go as long as you do not stop.",
            person: "Confucius",
        },
        {
            quote: "The only thing necessary for the triumph of evil is for good men to do nothing.",
            person: "Edmund Burke",
        },
        {
            quote: "The only way to do great work is to love what you do.",
            person: "Steve Jobs",
        },
        {
            quote: "The greatest wealth is to live content with little.",
            person: "Plato",
        },
        {
            quote: "The best way to predict the future is to invent it.",
            person: "Alan Kay",
        },
        {
            quote: "The only source of knowledge is experience.",
            person: "Albert Einstein",
        },
        {
            quote: "You miss 100% of the shots you don't take.",
            person: "Wayne Gretzky",
        },
        {
            quote: "Whether you think you can or you think you can't, you're right.",
            person: "Henry Ford",
        },
        {
            quote: "Act as if what you do makes a difference. It does.",
            person: "William James",
        },
        {
            quote: "The only true wisdom is in knowing you know nothing.",
            person: "Socrates",
        },
        {
            quote: "The best revenge is massive success.",
            person: "Frank Sinatra",
        },
        {
            quote: "The only limit to our realization of tomorrow is our doubts of today.",
            person: "Franklin D. Roosevelt",
        },
        {
            quote: "It always seems impossible until it's done.",
            person: "Nelson Mandela",
        },
        {
            quote: "What you get by achieving your goals is not as important as what you become by achieving your goals.",
            person: "Zig Ziglar",
        },
        {
            quote: "The best way to predict the future is to invent it.",
            person: "Alan Kay",
        },
        {
            quote:"Life can only be understood backwards; but it must be lived forwards.",
            person:"Søren Kierkegaard",
        },
        {
            quote: "If you spend too much time thinking about a thing, you’ll never get it done.",
            person: "Bruce Lee",
        },
        {
            quote:"Life is like a box of chocolates. You never know what you’re going to get.",
            person:" Forrest Gump",
        },
        {
            quote: "The quality of your life is directly related to how much uncertainty you can comfortably handle.",
            person: "Tony Robbins",
        },
        {
            quote:"A happy life consists in the tranquility of mind.",
            person:"Marcus Tullius Cicero",
        },
        {
            quote: "Almost nothing material is needed for a happy life, for he who has understood existence.",
            person: "Marcus Aurelius",
        },
        {
            quote:"The realization that life is absurd cannot be an end, but only a beginning.",
            person:"Albert Camus",
        },
        {
            quote: "Not how long, but how well you have lived is the main thing.",
            person: "seneca",
        },
        {
            quote:"Three things in life – your health, your mission, and the people you love.That’s it",
            person:"Naval Ravikant",
        },
        {
            quote: "Be happy for this moment. This moment is your life.",
            person: "Omar Khayyam",
        },
        {
            quote:"Difficult and meaningful will always bring more satisfaction than easy and meaningless.",
            person:"Maxime Lagacé",
        },
        {
            quote: "Everything has beauty, but not everyone sees it.",
            person: "confucius",
        },
        {
            quote:"The best preparation for tomorrow is doing your best today.",
            person:"H. Jackson Brown Jr.",
        },
        {
            quote:"A person who never made a mistake never tried anything new.",
            person:"Albert Einstein",
        },
        {
            quote:"Don't dwell in the past, do not dream of the future, concentrate the mind on the present moment.",
            person:"Buddha",
        },
        {
            quote:"Dost thou love life? Then do not squander time, for that is the stuff life is made of. ",
            person:"Benjamin Franklin",
        },
        {
            quote: "It’s a terrible thing, I think, in life, to wait until you’re ready.",
            person: "Hugh Laurie",
        },
        {
            quote:"Man is made by his belief. As he believes so he is.",
            person:"Bhagavad Gita",
        },
        {
            quote: "Life is a mountain. Your goal is to find your path, not to reach the top.",
            person: "Maxime Lagacé",
        },
        {
            quote:"It’s the possibility of having a dream come true that makes life interesting.",
            person:"Paulo Coelho (The Alchemist)",
        },
        {
            quote: "In the end, it’s not the years in your life that count. It’s the life in your years.",
            person: "Abraham Lincoln",
        },
        {
            quote: "Don’t search for the meaning of life. Simply be present for the people you love.",
            person: "Maxime Lagacé",
        },
        {
            quote: "You’ve gotta dance like there’s nobody watching",
            person: "William W. Purkey",
        },
        {
            quote: "You cannot be afraid to disappoint people. You have to live the life you want to live.",
            person: " David Goggins",
        },
        {
            quote: "Life is nothing but a mirror of your consistent thoughts.",
            person: "Tony Robbins",
        },
        {
            quote: "The soul becomes dyed with the color of its thoughts.",
            person: "Marcus Aurelius",
        },
        {
            quote: "Craziness is good. Crazy people are happy, free, they have no hindrance.",
            person: "Seungsahn",
        },
        {
            quote: "I tell you, in this world being a little crazy helps to keep you sane.",
            person: "Zsa Zsa Gabor",
        },
        {
            quote: "If you don’t share someone’s pain, you can never understand them.",
            person: "Nagato",
        },
        {
            quote: "Life gets better when you stop caring about everything.",
            person: "Maxime Lagacé"
        },
        {
            quote: "The mind is everything. What you think you become.",
            person: "Buddha"
        },
        {
            quote: "The trick in life is learning how to deal with it.",
            person: "Helen Mirren"
        },
        {
            quote: "Life isn’t about finding yourself. Life is about creating yourself.",
            person: "George Bernard Shaw"
        },
        {
            quote: "Life is either a daring adventure or nothing at all.",
            person: "Helen Keller"
        },      
        {
            quote: "Tis better to have loved and lost than never to have loved at all.",
            person: "Augustine of Hippo"
        },
        {
            quote: "If you want to live a happy life, tie it to a goal, not to people or things.",
            person: "Albert Einstein"
        },
        {
            quote: "The cost for the good life is giving up comfort.",
            person: "Maxime Lagacé"
        },
        {
            quote: "Life is only meaningful when we are striving for a goal.",
            person: "Aristotle"
        },
        {
            quote: "Go confidently in the direction of your dreams! Live the life you’ve imagined.",
            person: "Henry David Thoreau"
        },
        {
            quote: "Keep looking up… that’s the secret of life.",
            person: "Snoopy"
        },
        {
            quote: "You must be the change you wish to see in the world.",
            person: "Mahatma Gandhi"
        },
        {
            quote: "You only live once, but if you do it right, once is enough.",
            person: "Mae West"
        },
        {
            quote: "The first step to life is to try. The second is to learn. The third is to share.",
            person: "Maxime Lagacé"
        },
        {
            quote: "Your time is limited, so don’t waste it living someone else’s life. Don’t be trapped by dogma, which is living with the results of other people’s thinking. Don’t let the noise of others’ opinions drown out your own inner voice And most important, have the courage to follow your heart and intuition.",
            person: "Steve Jobs"
        },
        {
            quote: "Life is about moments; don’t wait for them, create them.",
            person: "Tony Robbins"
        },
        {
            quote: "Good friends, good books, and a sleepy conscience: this is the ideal life.",
            person: "Mark Twain"
        },
        {
            quote: "The wise simplify. Only the insecure complicate needlessly.",
            person: "Greg McKeown"
        },
        {
            quote: "Going back to a simpler life is not a step backward.",
            person: "Yvon Chouinard"
        },
        {
            quote: "Our life is frittered away by detail. Simplify, simplify.",
            person: "Henry David Thoreau"
        },
        {
            quote: "Life is really simple, but we insist on making it complicated.",
            person: "Confucius"
        },
        {
            quote: "No person has the right to rain on your dreams.",
            person: "Martin Luther King Jr"
        },
        {
            quote: "The biggest adventure you can ever take is to live the life of your dreams.",
            person: "Oprah Winfrey"
        },
        {
            quote: "Success isn’t about how your life looks to others. It’s about how it feels to you.",
            person: "Michelle Obama"
        },
        {
            quote: "Nothing great in life comes with complete assurance of success.",
            person: "Michael Easter"
        },
        {
            quote: "Life is a succession of lessons which must be lived to be understood.",
            person: "Ralph Waldo Emerson"
        },
        {
            quote: "If life is a video game, the graphics are great, but the plot is confusing and the tutorial is way too long.",
            person: "Elon Musk"
        },
        {
            quote: "A life worth living might be measured in many ways, but the one way that stands above all others is living a life of no regrets.",
            person: "Gary Keller"
        },
        {
            quote: "No one can compete with you on being you. Most of life is a search for who and what needs you the most.",
            person: "Naval Ravikant"
        },
        {
            quote: "Your clarity determines how successfully you walk this life.",
            person: "Sadhguru"
        },
        {
            quote: "The purpose of life is to believe, to hope, and to strive.",
            person: "Indira Gandhi"
        },  
        {
            quote: "Your life becomes meaningful in precise proportion to the depths of the responsibility you are willing to shoulder.",
            person: "Jordan Peterson"
        },
        {
            quote: "Cut yourself off from the past and the future and live in the present, and your life becomes a song and a dance.",
            person: "Osho"
        },
        {
            quote: "Hurrying and delaying are alike ways of trying to resist the present.",
            person: "Alan Watts"
        },
        {
            quote: "The chief danger in life is that you may take too many precautions.",
            person: "Alfred Adler"
        },
        {
            quote: "Life is sweeter when you have an attitude of gratitude.",
            person: "Dolly Parton"
        },
        {
            quote: "Practice gratitude and count your blessings. There is always something to be thankful for.",
            person: "Sai Baba"
        },
        {
            quote: "I alone cannot change the world, but I can cast a stone across the water to create many ripples.",
            person: "Mother Teresa"
        },
        {
            quote: "Challenges, failures, defeats and ultimately, progress, are what make your life worthwhile.",
            person: "Maxime Lagacé"
        },
    ]

    btn.addEventListener('click', () => {
    let random = Math.floor(Math.random() * quotes.length);
    
    quote.textContent = quotes[random].quote;
    persons.textContent = quotes[random].person;
})
console.log(quotes.length);