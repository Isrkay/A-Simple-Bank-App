allCustomers = []

if(localStorage.customerDetails){
    allCustomers = JSON.parse(localStorage.getItem('customerDetails'))
}

function signup(){
    var myDate = new Date()
    var matrics = "SQI"+"20" + Math.round(Math.random()*10000)
    var student1 = {
            firstname: input1.value,
            lastname: input2.value,
            email: input3.value,
            password: input4.value,
            matricNumber: matrics,
            registrationDate: myDate
        }

        if((firstname = input1.value) && (lastname = input2.value) && (email = input3.value) && (password = input4.value)){
        allStudents.push(student1)
        input1.value = ""
        input2.value = ""
        input3.value = ""
        input4.value = ""
        input5.value = ""
        input6.value = ""
        console.log(allStudents)
        window.location.href= "signin.html"
        // mySubmit()
       
        }
        else{
            alert("Fill up spaces")
        }
        localStorage.setItem("studentDetails", JSON.stringify(allStudents))
    }