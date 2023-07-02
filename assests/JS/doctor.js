function searchDoctor()
{
    let searchCity=document.getElementById("search-city").value;
    // alert(searchCity);
    if(searchCity=="Mumbai")
    {
        document.getElementById("dr-list-text").innerHTML="Here are the list of few Psychiatrist Doctor in Mumbai";
        document.querySelectorAll('.drall').forEach((x)=>
        {
                x.classList.add('d-none');
        })
        document.querySelectorAll('.dr_Mumbai').forEach((x)=>
        {
            // x.style.display='block';
            x.classList.remove('d-none');
        })
    }
    else if(searchCity=="Pune")
    {
        document.getElementById("dr-list-text").innerHTML="Here are the list of few Psychiatrist Doctor in Pune";
        document.querySelectorAll('.drall').forEach((x)=>
        {
                x.classList.add('d-none');
        })
        document.querySelectorAll('.dr_Pune').forEach((x)=>
        {
            // x.style.display='block';
            x.classList.remove('d-none');
        })
    }
    else if(searchCity=="Delhi")
    {
        document.getElementById("dr-list-text").innerHTML="Here are the list of few Psychiatrist Doctor in Delhi";
        document.querySelectorAll('.drall').forEach((x)=>
        {
                x.classList.add('d-none');
        })
        document.querySelectorAll('.dr_Delhi').forEach((x)=>
        {
            // x.style.display='block';
            x.classList.remove('d-none');
        })
    }
    else if(searchCity=="Kolkata")
    {
        document.getElementById("dr-list-text").innerHTML="Here are the list of few Psychiatrist Doctor in Kolkata";
        document.querySelectorAll('.drall').forEach((x)=>
        {
                x.classList.add('d-none');
        })
        document.querySelectorAll('.dr_Kolkata').forEach((x)=>
        {
            // x.style.display='block';
            x.classList.remove('d-none');
        })
    }
    else if(searchCity=="Banglore")
    {
        document.getElementById("dr-list-text").innerHTML="Here are the list of few Psychiatrist Doctor in Banglore";
        document.querySelectorAll('.drall').forEach((x)=>
        {
                x.classList.add('d-none');
        })
        document.querySelectorAll('.dr_Banglore').forEach((x)=>
        {
            // x.style.display='block';
            x.classList.remove('d-none');
        })
    }
    else if(searchCity=="Ahmedabad")
    {
        document.getElementById("dr-list-text").innerHTML="Here are the list of few Psychiatrist Doctor in Ahmedabad";
        document.querySelectorAll('.drall').forEach((x)=>
        {
                x.classList.add('d-none');
        })
        document.querySelectorAll('.dr_Ahmedabad').forEach((x)=>
        {
            // x.style.display='block';
            x.classList.remove('d-none');
        })
    }
}