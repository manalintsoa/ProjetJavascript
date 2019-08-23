const entrepreneurs = [
                        { first: 'Steve', last: 'Jobs', year: 1955 },
                        { first: 'Oprah', last: 'Winfrey', year: 1954 },
                        { first: 'Bill', last: 'Gates', year: 1955 },
                        { first: 'Sheryl', last: 'Sandberg', year: 1969 },
                        { first: 'Mark', last: 'Zuckerberg', year: 1984 },
                        { first: 'Beyonce', last: 'Knowles', year: 1981 },
                        { first: 'Jeff', last: 'Bezos', year: 1964 },
                        { first: 'Diane', last: 'Hendricks', year: 1947 },
                        { first: 'Elon', last: 'Musk', year: 1971 },
                        { first: 'Marissa', last: 'Mayer', year: 1975 },
                        { first: 'Walt', last: 'Disney', year: 1901 },
                        { first: 'Larry', last: 'Page', year: 1973 },
                        { first: 'Jack', last: 'Dorsey', year: 1976 },
                        { first: 'Evan', last: 'Spiegel', year: 1990 },
                        { first: 'Brian', last: 'Chesky', year: 1981 },
                        { first: 'Travis', last: 'Kalanick', year: 1976 },
                        { first: 'Marc', last: 'Andreessen', year: 1971 },
                        { first: 'Peter', last: 'Thiel', year: 1967 }
];

function Filter()
{
    console.log("La liste des entrepreneurs nés en année 70");
    for ( let index in entrepreneurs)
    {
        if((entrepreneurs[index]['year']) >= 1970 && (entrepreneurs[index]['year']) < 1980)
        {
            console.log(entrepreneurs[index]['first']);
        }   

    }   
}
Filter();


function List()
{
    console.log("La liste des entrepreneurs");
    for ( let index in entrepreneurs)
    {
        let tab1 = (entrepreneurs[index]['first']);
        let tab2 = (entrepreneurs[index]['last']);
        console.log((tab1+ ' ' + tab2).split(','));
    }
}

List();


function Age()
{
    for(let index in entrepreneurs)
    {
        var age = 2019 - entrepreneurs[index]['year'];
        console.log(`L'âge de ${entrepreneurs[index]['first']} est ${age}`);
    }
}

Age();


function Tri(){
        console.log(entrepreneurs.sort((a, b) => (a['first'] || "").toString().localeCompare((b['first'] || "").toString())));
    
}
Tri();
