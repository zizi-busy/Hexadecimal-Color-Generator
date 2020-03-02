const flexContainer = document.querySelector(".flex-container"); //container for color sections
const header = document.querySelector(".header");
const stopBtn = document.querySelector(".stoper");
const genBtn = document.querySelector(".generator");
const inputt = document.querySelector(".inputArea")
inputt.setAttribute('required', '')   


//FUNCTION with loop  which GENERATES RANDOM COLOR CODE ****************************************


const generateHexaColor = () => {
    let string = "0123456789abcdef";
    let hexaColor = "#";

    for (let i = 0; i < 6; i++) {
        let index = Math.floor(Math.random() * string.length);
        hexaColor += string[index];
    }
    return hexaColor;
};//hexa end

console.log(generateHexaColor());

//FUNCTION TO which makes GENERATE-BUTTON stop adding more divs or god knows what  
genBtn.addEventListener('click', () => {
    generatorTime()
})

function generatorTime() {
    if (flexContainer.textContent != '') {
        flexContainer.textContent = ''
        generatorFun()          

    } else {
        if (inputt.value < 1 || inputt.value== null) {
            alert ('Enter number bigger than zero') //alert if number is smaller than zero 
        }
        generatorFun()
    }
}

// FUNCTION FOR GENERATE-BUTTON ********************

function generatorFun() {

    // LOOP WHICH GENERATES COLOR BOX DIV  and COPY BUTTON

    for (let i = 0; i < inputt.value; i++) {
        //Create div with h1 and copy button and attach to parent flex-container

        const colorCode = document.createElement("h1");
        const colorBoxDiv = document.createElement("div");
        const copyBtn = document.createElement("button");

        //Add class and text to copy button 
       
        copyBtn.className = "copyButton";
        copyBtn.textContent = "copy";
        colorCode.className = 'code';

       // colorCode.textContent = i;
        colorBoxDiv.style.border = "1px solid white";

        // SET INTERVAL / TIMER FOR GENERATING COLOR every 1 sec****************************************************

        const inter = setInterval(function timerFunc() {
            let bgColor = generateHexaColor();
            colorCode.textContent = bgColor;
            if (i % 2 == 0) {
                colorBoxDiv.style.background = bgColor;
            } else {
                colorBoxDiv.style.background = bgColor;
            }
        }, 1000);

        // APPEND  CREATED ELEMENTS TO PARENT ELEMENT****************************************************

        colorBoxDiv.appendChild(colorCode);
        flexContainer.append(colorBoxDiv);
        colorBoxDiv.appendChild(copyBtn);

        // Function to STOP THE TIMER************************************************************
        function stopTimer() {

            clearInterval(inter);

            console.log("stopped randomization");
        }
        // CLEAR INPUT FIELD AFTER PRESSING the STOP BUTTON

        function clearFields() {
            document.querySelector(".inputArea").value = ""

        }

        stopBtn.addEventListener("click", clearFields)
        stopBtn.addEventListener("click", stopTimer);

        //FUNCTION TO COPY ThE HEXACODE using COPY BUTTON ********************************************************

        function copyFunction() {
            let textArea = document.createElement("textarea");
            textArea.value = colorCode.textContent; //colorCode is the  element which's content to be copied
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand("Copy");
            textArea.remove();
            console.log("code is copied to clipboard")
        }
        copyBtn.addEventListener("click", copyFunction);


    } //inter end
} // generFun end