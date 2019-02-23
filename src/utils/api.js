const handleError = (error) => {
    console.warn(error)
}
  
export async function getCharacters(...ids) {
    const encodedURI = window.encodeURI(`https://rickandmortyapi.com/api/character/${ids}`);
  
    const response = await fetch(encodedURI)
      .catch((handleError));
  
    const repos = await response.json();
    
    return repos;
}

export async function getCharacter(id) {
    const encodedURI = window.encodeURI(`https://rickandmortyapi.com/api/character/${id}`);
  
    const response = await fetch(encodedURI)
      .catch((handleError));
  
    const repos = await response.json();
    
    return repos;
}


export async function getCategoryPage(category, page) {
    const encodedURI = window.encodeURI(`https://rickandmortyapi.com/api/${category}${page}`);
  
    const response = await fetch(encodedURI)
      .catch((handleError));
  
    const repos = await response.json();
    return repos;
}