export interface Song {
    name: string,
    autor?: string
}

export type Genre = "rock" | "pop" | "hiphop" | "punk";

export const pop: Song[] = [
  { name: "Shape of You", autor: "Ed Sheeran" },
  { name: "Uptown Funk", autor: "Mark Ronson ft. Bruno Mars" },
  { name: "Sorry", autor: "Justin Bieber" },
  { name: "Sugar", autor: "Maroon 5" },
  { name: "All of Me", autor: "John Legend" },
  { name: "Happy", autor: "Pharrell Williams" },
  { name: "Roar", autor: "Katy Perry" },
];

export const rock: Song[] = [
  { name: "Stairway to Heaven", autor: "Led Zeppelin" },
  { name: "Bohemian Rhapsody", autor: "Queen" },
  { name: "Hotel California", autor: "Eagles" },
  { name: "Master of Puppets", autor: "Metallica" },
  { name: "Iron Man", autor: "Black Sabbath" },
  { name: "Welcome to the Jungle", autor: "Guns N' Roses" },
  { name: "Comfortably Numb", autor: "Pink Floyd" },
];

export const hiphop: Song[] = [
  { name: "N.Y. State of Mind", autor: "Nas" },
  { name: "Hypnotize", autor: "The Notorious B.I.G." },
  { name: "99 Problems", autor: "Jay-Z" },
  { name: "Rapper's Delight", autor: "The Sugarhill Gang" },
  { name: "California Love", autor: "2Pac" },
  { name: "The Real Slim Shady", autor: "Eminem" },
  { name: "Still" , autor: "Geto Boys"}
];

export const punk: Song[] = [
  { name: "God Save the Queen", autor: "Sex Pistols" },
  { name: "California Über Alles", autor: "Dead Kennedys" },
  { name: "American Jesus", autor: "Bad Religion" },
  { name: "All the Small Things", autor: "Blink-182" },
  { name: "Rock Lobster", autor: "B-52's" },
  { name: "Basket Case", autor: "Green Day" },
  { name: "Same In The End", autor: "Sublime" },
];
