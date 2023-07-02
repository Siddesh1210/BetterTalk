function login()
{
    // console.log("Hey")
    let tempEmail=document.getElementById("email").value;
    let temppassword=document.getElementById("password").value;
    // alert(email)
    // alert(pswd)
    let tempUser;
    let users=[];
    // console.log(tempEmail,temppassword);

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
                return x.email==tempEmail && x.password==temppassword
            })

            if(test.length==1)
            {
                alert('Login successfull');
                window.open('index.html');
            }
            // else{
            //     alert('Kindly signup')
            // }
           let test2 = users.filter((x)=>
            {
                return x.email==tempEmail
            })

            if(test2.length==1 && test.length!=1)
            {
                alert('Please enter correct password')
            }
            else if(test2.length!=1 && test.length!=1){
                    alert('No such email exist...Kindly signup')
                }
        }
    )

}