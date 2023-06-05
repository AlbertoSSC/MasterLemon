console.log("************** DELIVERABLE 03 *********************");
//Clone merge

const user1 = { name: "Maria", surname: "Ibañez", country: "SPA" };
const user2 = { name: "Luisa", age: 31, married: true };

//Clone
function clone(source) {
    const newObj = {
        ...source
    }
    console.log(newObj)
}
clone(user1);


//Merge
function merge(source, target) {
    const mixing = {
        ...target,
        ...source
    }
    console.log(mixing);
};
merge(user1, user2);