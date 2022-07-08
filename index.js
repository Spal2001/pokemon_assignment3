let btn=document.querySelector('button');
btn.addEventListener('click',fn);
function fn()
{
    let text="Do You Want to see more Pokemons!!";
    if(confirm(text)==true){
        location.href="pokemon.html";
    }
}