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
            person: "Pablo Picasso"
        },
        {
            quote: "The journey of a thousand miles begins with one step.",
            person: "Lao Tzu"
        },
        {
            quote: "Dream big and dare to fail.",
            person: "Norman Vaughan"
        },
        {
            quote: "Life is really simple, but we insist on making it complicated.",
            person: "Confucius"
        },
        // {
        //     quote: "You must be the change you wish to see in the world.",
        //     person: "Mahatma Gandhi"
        // },
        // {
        //     quote: "In three words I can sum up everything I've learned about life: it goes on.",
        //     person: "Robert Frost"
        // },
        // {
        //     quote: "The best way to predict the future is to invent it.",
        //     person: "Alan Kay"
        // },
        // {
        //     quote: "The mind is everything. What you think you become.",
        //     person: "Buddha"
        // },
        // {
        //     quote: "Strive not to be a success, but rather to be of value.",
        //     person: "Albert Einstein"
        // },
        // {
        //     quote: "I think, therefore I am.",
        //     person: "René Descartes"
        // },
        // {
        //     quote: "The best revenge is massive success.",
        //     person: "Frank Sinatra"
        // },
        // {
        //     quote: "The only limit to our realization of tomorrow is our doubts of today.",
        //     person: "Franklin D. Roosevelt"
        // },
        // {
        //     quote: "It always seems impossible until it's done.",
        //     person: "Nelson Mandela"
        // },
        // {
        //     quote: "The only true wisdom is in knowing you know nothing.",
        //     person: "Socrates"
        // },
        // {
        //     quote: "The greatest wealth is to live content with little.",
        //     person: "Plato"
        // },
        // {
        //     quote: "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.",
        //     person: "Buddha"
        // },
        // {
        //     quote: "Happiness is not something ready made. It comes from your own actions.",
        //     person: "Dalai Lama"
        // },
        // {
        //     quote: "The future belongs to those who believe in the beauty of their dreams.",
        //     person: "Eleanor Roosevelt"
        // },
        // {
        //     quote: "What you get by achieving your goals is not as important as what you become by achieving your goals.",
        //     person: "Zig Ziglar"
        // },
        // {
        //     quote: "The only source of knowledge is experience.",
        //     person: "Albert Einstein"
        // },
        // {
        //     quote: "You miss 100% of the shots you don't take.",
        //     person: "Wayne Gretzky"
        // },
        // {
        //     quote: "Whether you think you can or you think you can't, you're right.",
        //     person: "Henry Ford"
        // },
        // {
        //     quote: "Act as if what you do makes a difference. It does.",
        //     person: "William James"
        // },
        // {
        //     quote: "The only thing necessary for the triumph of evil is for good men to do nothing.",
        //     person: "Edmund Burke"
        // },
        // {
        //     quote: "We are what we repeatedly do. Excellence, then, is not an act, but a habit.",
        //     person: "Aristotle"
        // },
        // {
        //     quote: "You only live once, but if you do it right, once is enough.",
        //     person: "Mae West"
        // },
        // {
        //     quote: "The best preparation for tomorrow is doing your best today.",
        //     person: "H. Jackson Brown Jr."
        // },
        // {
        //     quote: "A person who never made a mistake never tried anything new.",
        //     person: "Albert Einstein"
        // },
        // {
        //     quote: "Don't watch the clock; do what it does. Keep going.",
        //     person: "Sam Levenson"
        // },
        // {
        //     quote: "Keep your face always toward the sunshine—and shadows will fall behind you.",
        //     person: "Walt Whitman"
        // },
        // {
        //     quote: "It does not matter how slowly you go as long as you do not stop.",
        //     person: "Confucius"
        // },
        // {
        //     quote: "The purpose of our lives is to be happy.",
        //     person: "Dalai Lama"
        // },
        // {
        //     quote: "If you can dream it, you can achieve it.",
        //     person: "Zig Ziglar"
        // },
        // {
        //     quote: "Believe you can and you're halfway there.",
        //     person: "Theodore Roosevelt"
        // },
        // {
        //     quote: "The only impossible journey is the one you never begin.",
        //     person: "Tony Robbins"
        // },
        // {
        //     quote: "Do what you can, with what you have, where you are.",
        //     person: "Theodore Roosevelt"
        // },
        // {
        //     quote: "The only way to do great work is to love what you do.",
        //     person: "Steve Jobs"
        // },
        // {
        //     quote: "I have not failed. I've just found 10,000 ways that won't work.",
        //     person: "Thomas A. Edison"
        // },
        // {
        //     quote: "You become what you believe.",
        //     person: "Oprah Winfrey"
        // },
        // {
        //     quote: "It does not matter how slowly you go as long as you don't stop.",
        //     person: "Confucius"
        // },
        // {
        //     quote: "If you don’t share someone’s pain, you can never understand them.",
        //     person: "Nagato"
        // },
        // {
        //     quote: "People's lives don't end when they die. It ends when they lose faith.",
        //     person: "Itachi Uchiha"
        // },
        // {
        //     quote: "If you don’t take risks, you can’t create a future!",
        //     person: "Monkey D. Luffy"
        // },
        // {
        //     quote: "Power comes in response to a need, not a desire. You have to create that need.",
        //     person: "Goku"
        // },
        // {
        //     quote: "It's not the face that makes someone a monster; it's the choices they make with their lives.",
        //     person: "Naruto Uzumaki"
        // },
        // {
        //     quote: "Many of life’s failures are people who did not realize how close they were to success when they gave up.",
        //     person: "Thomas A. Edison"
        // }
    ]

    btn.addEventListener('click', () => {
    let random = Math.floor(Math.random() * quotes.length);
    
    quote.textContent = quotes[random].quote;
    persons.textContent = quotes[random].person;
})
