const doc = {
    regButton: document.querySelector('#regButton'),
    nNameInput: document.querySelector('#nickname'),
    lNameInput: document.querySelector('#lName'),
    fNameInput: document.querySelector('#fName'),
    addressInput: document.querySelector('#address'),
    emailInput: document.querySelector('#email'),
    email2Input: document.querySelector('#email2'),
    passInput: document.querySelector('#pass'),
    pass2Input: document.querySelector('#pass2')    
}

const state = {
    host:  'http://localhost:8000',
    endpoint: 'datas',
    nNameInput: ' ',
    lNameInput: ' ',
    fNameInput: ' ',
    addressInput: ' ',
    emailInput: ' ',
    email2Input: ' ',
    passInput: ' ',
    pass2Input:  ' '  
}



doc.regButton.addEventListener('click', () => {
    setUser()
    addUser()
    console.log('Mentés...')
})

function setUser(){
    state.nName = doc.nNameInput.value
    state.lName = doc.lNameInput.value
    state.fName = doc.fNameInput.value
    state.address = doc.addressInput.value
    state.email = doc.emailInput.value
    state.email2 = doc.email2Input.value
    state.pass = doc.passInput.value
    state.pass2 = doc.pass2Input.value
}


function addUser() {
    let url = state.host + '/' + state.endpoint
    if(state.email == state.email2 && state.pass==state.pass2 && checkEmail(state.email))
    {
        fetch(url, {
            method: 'post',
            headers: {
                "Content-Type": "application/json"
        },
        body: JSON.stringify({
            nickname : state.nName,
            lastname : state.lName,
            firstName : state.fName,
            address :state.address,
            email : state.email,
            password : state.pass
        })
        })
        clearBoxes() 
    }else if(state.email != state.email2)
    {
        alert("Nem azonosak az e-mail címek!");
    }else if(state.pass != state.pass2)
    {
        alert("Nem azonosak a jelszavak!");
    }else if(!(checkEmail(state.email)))
    {
        alert("Helytelen e-mail cím!");
    }
}

function checkName(name){
    if(name.match(/^[a-zA-Z]+$/)){
        console.log("jó")
        return true
    }else{
        console.log("Nem jó")
        return false
    }
}

function checkEmail(email){
    if(email.match(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+$/)){
        console.log("jó")
        return true
    }else{
        console.log("Nem jó")
        return false
    }
}



function clearBoxes(){
    doc.nNameInput.value = ''
    doc.lNameInput.value = ''
    doc.fNameInput.value = ''
    doc.addressInput.value = ''
    doc.emailInput.value = ''
    doc.email2Input.value = ''
    doc.passInput.value = ''
    doc.pass2Input.value  = ''
}