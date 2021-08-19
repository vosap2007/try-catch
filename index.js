// try{
//     console.log(`${a} > 5`)
// } catch (error) {
// console.log(error);
// }

// const validJSON = `{ "name": "Манго", "age": 3}`;
// const invalidJSON = `{ lsfkv ksdjnvlsk lskdfnv klsn}`;

// //console.log(JSON.parse(invalidJSON));

// try {
//     console.log(JSON.parse(invalidJSON));
// } catch (error) {
//     console.log(error.message);
// }

// console.log('error.message');

// function getFruits (name) {
//     const fruits = {
//         strawbery: 5,
//         kiwi: 10,
//         apple: 15,
//     };

//     return Promise.resolve(fruits[name]);
// };

// async function getSmuzi() {
//     const apple = await getFruits('apple');
//     console.log(apple);

//     const kiwi = await getFruits('kiwi');
//     console.log(kiwi);
// }

// getSmuzi();

// function getSmuzi() {
//  getFruits('apple').then(apple => console.log(apple))   
// };

// getSmuzi();

// const url = 'https://pokeapi.co/api/v2/pokemon/ditto';

// function fetchPokemon(url) {
//    return fetch(`${url}`).then(r => r.json())
// };

// async function pokemon(url) {
//   await fetchPokemon(url).then(r =>
//     console.log(r.id)
//     //console.log(r)
//     );
    
    
// }

// pokemon(url);

// function getFruits (name) {
//     const fruits = {
//         strawbery: 5,
//         kiwi: 10,
//         apple: 15,
//     };

//     return Promise.resolve(fruits[name]);
// };

// async function aMakeSmooze() {
//     const strawbery = getFruits('strawbery');
//     const kiwi = getFruits('kiwi'); 

//     const fruits = await Promise.all([strawbery, kiwi]);
//     console.log(fruits);
// };

// aMakeSmooze();

async function addBook(book) {
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(book),
    };

    const respons = await fetch('url', options)
    
    return await respons.json();
}

