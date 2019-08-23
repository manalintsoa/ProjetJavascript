const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];
//Est-ce que tous les livres ont été au moins empruntés une fois ?
function titre()
{
  console.log("Tous les livre ont été aumoins empruntés une fois, ces sont:");
      for(index in books)
      {
        if(books[index]['rented']>=1)
        {
          console.log(books[index]['title']);
        }
      }
}
titre();

/*    Quel est livre le plus emprunté ?    */

let maxRented = 0;

let bookMaxRented;

for(let i=0; i<books.length; i++)
{
  if (maxRented <= books[i]['rented'])
  {
      maxRented = books[i]['rented'];
      bookMaxRented = books[i];
  }
}
console.log("Le livre le plus emprunté est : "+bookMaxRented.title)

/*    Quel est le livre le moins emprunté ?    */

let minRented = bookMaxRented.rented;
let bookMinRented = 0;

for(let i=0; i<books.length; i++)
{
  if (minRented >= books[i]['rented'])
  {
      minRented = books[i]['rented'];
      bookMinRented = books[i];

  }

}
console.log("Le livre le moins emprunté est : " + bookMinRented.title);

/*    Trouve le livre avec l'ID: 873495 ;    */
for(let i=0; i<books.length; i++)
{

  if (books[i].id === 873495)
  {
      console.log("Le livre avec l'ID: 873495 est : " + books[i].title);
      break;
  }

}

/*Supprime le livre avec l'ID: 133712 */

function deleteById()
{

      let del = books.findIndex(k => k.id === 133712);
      books.splice(del,1);
      console.log("Le livre avec cet ID 133712 a été supprimé");
      console.log(books);
}
deleteById();

/* Trie les livres par ordre alphabétique (sans celui avec l'ID 133712 car il est supprimé).*/
function orderByAlpha()
{
      console.log(books.sort((a, b) => (a['title'] || "").toString().localeCompare((b['title'] || "").toString())));
}
orderByAlpha();

