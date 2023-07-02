function allBooks()
{
    // console.log("All")
    document.querySelectorAll('.all').forEach((x)=>
   {
    x.style.display='block';
   })

    document.querySelectorAll('.temp').forEach((x)=>
   {
    x.classList.remove('btn-title');
   })
   
   document.getElementById("first").classList.add('btn-title');
}

function motivational()
{
    // console.log("Motivate")
    document.querySelectorAll('.all').forEach((x)=>
   {
    x.style.display='none';
   })

   document.querySelectorAll('.inspire').forEach((x)=>
   {
    x.style.display='block';
   })

    document.querySelectorAll('.temp').forEach((x)=>
   {
    x.classList.remove('btn-title');
   })
   
   document.getElementById("second").classList.add('btn-title');
}

function spiritual()
{
    // console.log("Spiritual")
    document.querySelectorAll('.all').forEach((x)=>
   {
    x.style.display='none';
   })

   document.querySelectorAll('.spiritual').forEach((x)=>
   {
    x.style.display='block';
   })

    document.querySelectorAll('.temp').forEach((x)=>
   {
    x.classList.remove('btn-title');
   })
   
   document.getElementById("four").classList.add('btn-title');

}

function adventurous()
{
    // console.log("Adventure");
    document.querySelectorAll('.all').forEach((x)=>
   {
    x.style.display='none';
   })

   document.querySelectorAll('.adventure').forEach((x)=>
   {
    x.style.display='block';
   })

    document.querySelectorAll('.temp').forEach((x)=>
   {
    x.classList.remove('btn-title');
   })
   
   document.getElementById("third").classList.add('btn-title');
}

function humor()
{
    // console.log("Humor");
    document.querySelectorAll('.all').forEach((x)=>
   {
    x.style.display='none';
   })

   document.querySelectorAll('.humor').forEach((x)=>
   {
    x.style.display='block';
   })

    document.querySelectorAll('.temp').forEach((x)=>
   {
    x.classList.remove('btn-title');
   })
   
   document.getElementById("five").classList.add('btn-title');
}