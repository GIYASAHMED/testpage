// de- structure of Object

const course = {
    course:"js with chai aur code",
    coursefees:999,
    courseDuration:"12months",
    Instructore:"Hitesh"
}

const {coursefees:fees}=course

console.log(fees)