function allBooks_video()
{
    // console.log("All")
    document.querySelectorAll('.all').forEach((x)=>
   {
    // x.style.display='block';
    x.classList.remove('d-none');

   })

    document.querySelectorAll('.temp').forEach((x)=>
   {
    x.classList.remove('btn-title');
   })
   
   document.getElementById("first1").classList.add('btn-title');
}

function podcast_video()
{
    // console.log("Motivate")
    document.querySelectorAll('.all').forEach((x)=>
   {
    x.classList.add('d-none');
   })

   document.querySelectorAll('.podcast').forEach((x)=>
   {
    // x.style.display='block';
    x.classList.remove('d-none');
   })

    document.querySelectorAll('.temp').forEach((x)=>
   {
    x.classList.remove('btn-title');
   })
   
   document.getElementById("four4").classList.add('btn-title');
}

function spiritual_video()
{
    // console.log("Spiritual")
    document.querySelectorAll('.all').forEach((x)=>
   {
    // x.style.display='none';
    x.classList.add('d-none');

   })

   document.querySelectorAll('.spiritual').forEach((x)=>
   {
    // x.style.display='block';
    x.classList.remove('d-none');

   })

    document.querySelectorAll('.temp').forEach((x)=>
   {
    x.classList.remove('btn-title');
   })
   
   document.getElementById("second2").classList.add('btn-title');

}

function adventurous_video()
{
    // console.log("Adventure");
    document.querySelectorAll('.all').forEach((x)=>
   {
    // x.style.display='none';
    x.classList.add('d-none');
   })

   document.querySelectorAll('.adventure').forEach((x)=>
   {
    // x.style.display='block';
    x.classList.remove('d-none');

   })

    document.querySelectorAll('.temp').forEach((x)=>
   {
    x.classList.remove('btn-title');
   })
   
   document.getElementById("third3").classList.add('btn-title');
}

function humor_video()
{
    // console.log("Humor");
    document.querySelectorAll('.all').forEach((x)=>
   {
    // x.style.display='none';
    x.classList.add('d-none');
   })

   document.querySelectorAll('.humor').forEach((x)=>
   {
    // x.style.display='block';
    x.classList.remove('d-none');

   })

    document.querySelectorAll('.temp').forEach((x)=>
   {
    x.classList.remove('btn-title');
   })
   
   document.getElementById("five5").classList.add('btn-title');
}