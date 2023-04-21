// Add your code here
const submit = document.getElementById('Submit');
const reset = document.getElementById('Reset');

submit.addEventListener('click', ()=>{

    const userName = document.getElementById('InputName').value
    const email = document.getElementById('InputEmail').value
    const registration = document.getElementById('Registration').value
    const progCheck = document.getElementById('ProgrammingLang').checked
    const opCheck = document.getElementById('OperatingSystems').checked
    const fullCheck = document.getElementById('FullStack').checked
    const anything = document.getElementById('Anything').value
    console.log(userName)
    console.log(email)
    console.log(registration)

    if(progCheck === true){
        console.log("Programming Languages")
    }
    if(opCheck === true){
        console.log("Operating Systems")
    }
    if(fullCheck === true){
        console.log("Full Stack")
    }

    if(anything){
        console.log(anything)
    }
    

})

reset.addEventListener('click', ()=>{
    document.getElementById("InputName").value = ""
    document.getElementById('InputEmail').value = ""
    document.getElementById('Registration').value = "Choose an Option"
    document.getElementById('ProgrammingLang').checked = false
    document.getElementById('OperatingSystems').checked = false
    document.getElementById('FullStack').checked = false
    document.getElementById('Anything').value = ""
})