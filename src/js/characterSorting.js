export function characterSort(character){
    const sortedCharacters = [...character].sort((a, b) => b.health - a.health); 
    return sortedCharacters;
}

