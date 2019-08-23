
let message = prompt("Entrer un message");
function bot(message)
{
    if(message.endsWith("?"))
    {
        console.log("Ouais Ouais...");
    }

    else if(message && message === message.toUpperCase())
    {
        console.log("Pwa, calme-toi..");
    }

    else if(message.includes("Fortnite"))
    {
        console.log("on s'fait une partie soum-soum ?");
    }

    else if(message == "")
    {
        console.log("t'es en PLS ?");
    }

    else
    {
        console.log("balek.");
    }

}

bot(message);

