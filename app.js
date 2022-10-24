allCustomers = []

if(localStorage.customerDetails){
    allCustomers = JSON.parse(localStorage.getItem('customerDetails'))
}
let regexForFName = /^([A-Z][\w]+)$/
let regexForLName = /^([A-Z][\w]+)$/
let regexForMail = /^([\w]+)([@])([\w]+)([.])([\w]+)$/
// let regexforPhone =/^([\d]{11})$/
let regexForPass =/^([\w]{8,10})$/


function signup(){
    var myDate = new Date()
    var accountBalances = `${0}`
    var accounts = "20" + Math.round(Math.random()*100000000)
    var customer1 = {
            firstname: input1.value,
            lastname: input2.value,
            email: input3.value,
            password: input4.value,
            accountNumber: accounts,
            registrationDate: myDate,
            gender: legend10.value,
            accountType: legend11.value,
            accountBalance: accountBalances
        }
        // let regexForAccount = /[\d]{4}/
        // const checkAccountNumbers = () => {
            // if(!regexForAccount.test(input1.value)){
                // console.log("Correct")
                // disp.innerHTML = `
                
                    // inp1.className = `"form-control is invalid"`
                
                // alert("I dey")
            // }
            
        // }
    //  if((firstname = input1.value) && (lastname = input2.value) && (email = input3.value) && (password = input4.value) && (gender = legend10.value) && (accountType = legend11.value)){
    //     allCustomers.push(customer1)
    //     input1.value = ""
    //     input2.value = ""
    //     input3.value = ""
    //     input4.value = ""
    //     input5.value = ""
    //     input6.value = ""
    //     console.log(allCustomers)
    //     window.location.href= "signin.html"
    //     }
    if(input1.value == "" || input2.value == "" || input3.value == "" || input4.value == ""){
        mywarning.innerHTML = `<small class="text-danger">Fill out the empty spaces to continue</small>`
    }
        else if(!regexForMail.test(input3.value)){
            mywarning.innerHTML = `<small class="text-danger"> Invalid Email Address</small>`
            input3.className = "form-control is invalid"
        }
        else if(!regexForPass.test(input4.value)){
            mywarning.innerHTML = `<small class="text-danger"> Invalid Password</small>`
            input4.className = "form-control is invalid"
        }
        else if(!regexForFName.test(input1.value)){
            mywarning.innerHTML = `<small class="text-danger"> First name must begin with capital letter </small>`
            input1.className = "form-control is invalid"
        }
        else if(!regexForLName.test(input2.value)){
            mywarning.innerHTML = `<small class="text-danger"> Last name must begin with capital letter </small>`
            input2.className = "form-control is invalid"
        }
        else{
            // alert("Fill up spaces")
            allCustomers.push(customer1)
                input1.value = ""
                input2.value = ""
                input3.value = ""
                input4.value = ""
                input5.value = ""
                input6.value = ""
                console.log(allCustomers)
                window.location.href= "signin.html"
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
        myWelcome1.innerHTML = `Welcome back, ${allCustomers[userIndexx].firstname} ${allCustomers[userIndexx].lastname}`
        myWelcome2.innerHTML = `Account Balance: # ${allCustomers[userIndexx].accountBalance}`
        myWelcome3.innerHTML = `Account Number: ${allCustomers[userIndexx].accountNumber}`
        
    }

    const transfer = () => {
        
            window.location.href = "transfer.html"
        
    }

    const deposit = () => {
        // allCustomers = JSON.parse(localStorage.getItem('customerDetails'))
        // userIndexx = JSON.parse(localStorage.getItem('userIndexx'))
        // var found = false
        // for (let index = 0; index < allCustomers.length; index++) {
        //     found = true
        //     userIndexx = index
        //     localStorage.setItem("userIndexx", userIndexx)
        //     break
        // }
        // if(found){
            window.location.href = "deposit.html"
        // }
         
    }
    const retur = () =>{
        let allCustomers = JSON.parse(localStorage.getItem('customerDetails'))
        var userIndexx = localStorage.getItem('userIndexx')

        let confirmMyAmounts = document.getElementById("inpt").value
        // var found = false
        // for (let index = 0; index < allCustomers.length; index++) {
        //     found = true
        //     userIndexx = index
        //     localStorage.setItem("userIndexx", userIndexx)
        //     break
        // }
        // if(found){
        //     window.location.href = "dashboard.html"
        // }
        // allCustomers[userIndexx].accountBalance = Number (allCustomers[userIndexx].accountBalance) + Number (inpt.value)
        // console.log(allCustomers)
        // localStorage.setItem("customerDetails", JSON.stringify(allCustomers))
        // localStorage.setItem("userIndexx", userIndexx)
        if(userIndexx){
            allCustomers = JSON.parse(localStorage.getItem('customerDetails'))
            for (let index = 0; index < allCustomers.length; index++) {
                if(index == userIndexx){
                    console.log(allCustomers)
                    allCustomers[index].accountBalance = Number(allCustomers[index].accountBalance) + Number(confirmMyAmounts)
                    localStorage.setItem("customerDetails", JSON.stringify(allCustomers))
                    window.location.href = "dashboard.html"
                }
                
            }
        }
    }
    const back = () =>{
        var found = false
        for (let index = 0; index < allCustomers.length; index++) {
            found = true
            userIndexx = index
            localStorage.setItem("userIndexx", userIndexx)
            break
        }
        if(found){
            window.location.href = "signin.html"
        }
    }