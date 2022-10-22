allCustomers = []

if(localStorage.customerDetails){
    allCustomers = JSON.parse(localStorage.getItem('customerDetails'))
}

function signup(){
    var myDate = new Date()
    var accounts = "20" + Math.round(Math.random()*100000000)
    var customer1 = {
            firstname: input1.value,
            lastname: input2.value,
            email: input3.value,
            password: input4.value,
            accountNumber: accounts,
            registrationDate: myDate
        }

        if((firstname = input1.value) && (lastname = input2.value) && (email = input3.value) && (password = input4.value)){
        allCustomers.push(customer1)
        input1.value = ""
        input2.value = ""
        input3.value = ""
        input4.value = ""
        input5.value = ""
        input6.value = ""
        console.log(allCustomers)
        window.location.href= "signin.html"
        // mySubmit()
       
        }
        else{
            alert("Fill up spaces")
        }
        localStorage.setItem("customerDetails", JSON.stringify(allCustomers))
    }

    function login(){
        var myUseremail = userEmail.value
        var userPassword = passWord.value
        var allCustomers = JSON.parse(localStorage.getItem('customerDetails'))
        var found = false
        for (let index = 0; index < allStudents.length; index++) {
            if(allStudents[index].email==myUseremail && allStudents[index]. password==userPassword){
                // signeduser=allStudents[index]
                // localStorage.setItem("studentDetails", JSON.stringify(allStudents))
                found = true
            } 
        }
        if(found){
            window.location.href = "dashboard.html"
        }
        else{
            alert("INVALID")
        }
    }