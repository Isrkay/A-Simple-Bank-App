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
            registrationDate: myDate,
            gender: legend10.value,
            accountType: legend11.value
        }
        let regexForAccount = /[\w]+[@][\w]+[.][\w]+/
        const checkAccountNumbers = () => {
            if(!regexForAccount.test(inp1.value)){
                console.log("Correct")
                disp.innerHTML = `
                <snall class="text-danger">invalid account number</small>`
                    inp1.className = `"form-control is invalid"`
                
                // alert("I dey")
            }
            
        }
        if((firstname = input1.value) && (lastname = input2.value) && (email = input3.value) && (password = input4.value) && (gender = legend10.value) && (accountType = legend11.value)){
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
        for (let index = 0; index < allCustomers.length; index++) {
            if(allCustomers[index].email==myUseremail && allCustomers[index]. password==userPassword){
                // signeduser=allStudents[index]
                // localStorage.setItem("studentDetails", JSON.stringify(allStudents))
                found = true
                userIndexx = index
                localStorage.setItem("userIndexx", userIndexx)
                break
            } 
        }
        if(found){
            window.location.href = "dashboard.html"
        }
        else{
            alert("INVALID")
        }
    }
    const mySubmit = () =>{
        allCustomers = JSON.parse(localStorage.getItem('customerDetails'))
        userIndexx = JSON.parse(localStorage.getItem('userIndexx'))
        myWelcome.innerHTML = `Welcome back, ${allCustomers[userIndexx].firstname}`
        console.log(customer1)
    }