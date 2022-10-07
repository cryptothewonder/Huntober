//Submissions
let sub = "The Pawshank Redemption,Caturday Night Live,Only Meworders in the Building,I Love Mewcy, Mewsummer Meowders,The Golden Purrs, Purrlandia ,Meowpardy, Meowstery Science Theater: Purrthousand, Amewican Idol,Dog City,Doctor Mew , The Meowing Fed,Mew Peter,The Vicar of Dogley, Kittens,Meownton Abbey,Pets and the Kitty,Dogis and Bonehead,Pawlty Meowers ,The Meowpet Show,Barkos,The Catbert Purrport,The Pawffice,The Dogford Files, Battlestar Catlactica,Catlumbo,SpongeDog Squarepants,NYPD Mew ,Fluffy the Meowpire Purrer,The Inbemewners,Meowder She Wrote,Paw & Order,30 Dog, Pawvatar: The Last Meowbender,The Pawnight Show,Arrested Dogvelopment,Furiends,Mewie,Curb Your Dogthusiasm,Teenage Mewtant Ninja Turtles,Phineas and Purrb,Paw Trek, Paw Trek: The Next Mewination, Twin Mewks, *C*A*T*S*,DogTales, Game of Bones, House of the Meowgon,The Purrlight Zone,Breaking Bone,The Meowre,The Dogpranos,The Rings of Meower, The KIT Crowd,Strangepaw Things ,Catman: The Animeowted Series,Meowter Call Saul,Mewgerton ,Obark,Mewphoria,La Casa de Pawpel,Rick & Meowty,Amewican Purror Story, Mewcifer,PawndaVision,Dogxter,The Meowndalorian, Dog Lasso,Bark,Meowdern Pawmily , Meowtlander,Bone Mirror,Barks and Recreation,How to Get Away with Meowder,Boneland ,Meowther Ted,Mewtopia,Mewey,The Mewkie Meowse Doghouse,Mewster Rogers' Neighborhood"

let subArr = sub.split(',')
// console.log(subArr);
let newSubArr=[]

for (let i = 0; i < subArr.length; i++){
    if(subArr[i] === subArr[i].trim()){
        newSubArr.push(subArr[i])
    }
}

// console.log(subArr)
console.log(newSubArr)

let noDogSubArr = newSubArr.filter(x => !x.toLowerCase().includes('dog'))
console.log(noDogSubArr)

let noBarkSubArr = noDogSubArr.filter(x => !x.toLowerCase().includes('bark'))

let finalSubArr = noBarkSubArr.filter(x => !x.toLowerCase().includes('bone'))

console.log(finalSubArr)


let newNewSub = finalSubArr.filter(x => x.length%5 !==0)
console.log(newNewSub)

console.log(newNewSub.map(x=> x.length))

// let noS = newNewSub.filter(x => !x.includes('S'))

// console.log(noS)

console.log(newNewSub.map(x => (x.charCodeAt(0)+x.charCodeAt(x.length-1))))

newNewSub=newNewSub.filter(x => (x.charCodeAt(0)+x.charCodeAt(x.length-1)) %2===1)

newNewSub = newNewSub.filter(x => !x.charAt(Math.floor(x.length/2)+1).includes('e'))
console.log(newNewSub)

let noCaps = newNewSub.map(x => x.replace(/[A-Z]/g, ''))
console.log(noCaps)

console.log(noCaps.map(x => x.length))


//3, 5, 8, 9, 11

let almostThere = "The Pawnight Show,Teenage Mewtant Ninja Turtles,Meowter Call Saul,Rick & Meowty,Mewster Rogers' Neighborhood"
almostThere = almostThere.split(',')


let noS = almostThere.filter(x => !x.includes('S'))

console.log(noS)


//Rules
// No empty spaces at the start or end of the submission (my friend can't stand when people don't follow directions) <-- done

// Cannot contain 'dog', 'bark', or 'bone' in any combination of upper or lower case (canine trolling can't be stopped) <-- done

// Total length of pun cannot be a multiple of 5 (this includes spaces and punctuation) <--done

// The sum of the charCodes of the 1st and last characters must be odd (my friend's a bit of a character, but she's great once you get to know her) <-- done

// Character directly after the middle of the string may not be 'e' (For example the character to check in even-length string center is t, for odd an example would be weird -> 'r')  <-- done

// Must have an even number of lowercase letters (do not count punctuation or spaces as letters) <--done

// Must have at least 2 capital letters (honestly, I'm a little worried these requirements are too strict) <--done

// Must not contain a capital 'S' (definitely too strict. What does S even have to do with cat puns?) <--done