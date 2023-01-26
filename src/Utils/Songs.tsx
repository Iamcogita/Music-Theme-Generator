export interface Song {
    name: string,
    autor?: string,
    genre?: string,
}

export const pop: Song[] = [
  { name: "Shape of You", autor: "Ed Sheeran" , genre: "pop"},
  { name: "Uptown Funk", autor: "Mark Ronson ft. Bruno Mars" , genre: "pop" },
  { name: "Sorry", autor: "Justin Bieber", genre: "pop" },
  { name: "Sugar", autor: "Maroon 5", genre: "pop" },
  { name: "All of Me", autor: "John Legend", genre: "pop" },
  { name: "Happy", autor: "Pharrell Williams" , genre: "pop"},
  { name: "Roar", autor: "Katy Perry", genre: "pop" },
];

export const rock: Song[] = [
  { name: "Stairway to Heaven", autor: "Led Zeppelin", genre: "rock"},
  { name: "Bohemian Rhapsody", autor: "Queen", genre: "rock" },
  { name: "Hotel California", autor: "Eagles", genre: "rock"},
  { name: "Master of Puppets", autor: "Metallica" , genre: "rock"},
  { name: "Iron Man", autor: "Black Sabbath" , genre: "rock"},
  { name: "Welcome to the Jungle", autor: "Guns N' Roses", genre: "rock"},
  { name: "Comfortably Numb", autor: "Pink Floyd", genre: "rock" },
];

export const hiphop: Song[] = [
  { name: "N.Y. State of Mind", autor: "Nas" , genre: "hiphop"},
  { name: "Hypnotize", autor: "The Notorious B.I.G." , genre: "hiphop"},
  { name: "99 Problems", autor: "Jay-Z" , genre: "hiphop" },
  { name: "Rapper's Delight", autor: "The Sugarhill Gang" , genre: "hiphop" },
  { name: "California Love", autor: "2Pac" , genre: "hiphop"},
  { name: "The Real Slim Shady", autor: "Eminem", genre: "hiphop" },
  { name: "Still" , autor: "Geto Boys", genre: "hiphop"}
];

export const punk: Song[] = [
  { name: "God Save the Queen", autor: "Sex Pistols", genre: "punk"  },
  { name: "California Über Alles", autor: "Dead Kennedys" , genre: "punk" },
  { name: "American Jesus", autor: "Bad Religion", genre: "punk"   },
  { name: "All the Small Things", autor: "Blink-182" , genre: "punk"  },
  { name: "Rock Lobster", autor: "B-52's" , genre: "punk"  },
  { name: "Basket Case", autor: "Green Day" , genre: "punk"  },
  { name: "Same In The End", autor: "Sublime" , genre: "punk" },
];
