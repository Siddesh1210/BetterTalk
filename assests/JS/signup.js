function signup()
{
    // console.log("Hello")
    let name=document.getElementById("name").value;
    let email=document.getElementById("email").value;
    let pswd=document.getElementById("pswd").value;
    let cpswd=document.getElementById("cpswd").value;
    let user={
        name:name,
        email:email,
        password:pswd,
    }
    let tempUser;
    let users=[];
    if(pswd==cpswd && name!="" && email!="" && pswd!="")
    {
        fetch('https://masterclass-january-default-rtdb.firebaseio.com/user.json').then(response=>response.json()).then(
        data=>
        {
            // console.log(data);
            for(let x in data)
            {
                tempUser={
                    ...data[x]
                }
                users.push(tempUser)
            }
            // console.log(users);
            // console.log(users[0].email);
            let test=users.filter((x)=>
            {
                return x.email==email;
            })

            if(test.length==1)
            {
                alert('Email already exist! Kindly Login!');
            }
            else
            {
                fetch('https://masterclass-january-default-rtdb.firebaseio.com/user.json',
                {
                    method:'post',
                    body:JSON.stringify(user)
                }).then(()=>
                {
                    alert('Successfully Registered');
                    window.open('index.html');
                    document.getElementById('name').value="";
                    document.getElementById('email').value="";
                    document.getElementById('pswd').value="";
                    document.getElementById('cpswd').value="";
                })
            }
        })
    }
    else if(pswd!=cpswd)
    {
        alert("Please enter same password")
    }
    else{
        alert("Please fill in all field")
    }

}