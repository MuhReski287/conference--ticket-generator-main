const inputImg = document.getElementById('inputImage');
const preview = document.getElementById('preview');
const previewImage = document.getElementById('previewImage');
const dropArea = document.getElementById('dropArea');
 
inputImg.addEventListener('change', upload);

function upload(){
    const maxFile = 500 * 1024;
    
    // validation maximum file
    if(inputImg.files[0].size > maxFile){
        const alert = document.getElementById('note');
        alert.innerHTML = " <i class='fas fa-exclamation-circle'></i>  File too big. Please upload a photo under 500KB.";
        alert.style.color = 'red';
        inputImg.value = "";
        preview.style.display = 'none';
        return;
    }

    // view image
    if (inputImg.files && inputImg.files[0]){
        const file = inputImg.files[0];
        const reader = new FileReader();

        reader.addEventListener('load', function(){
            previewImage.src = reader.result;
            preview.style.display = 'block';
        }); 
        reader.readAsDataURL(file);
                
    }
}

dropArea.addEventListener('dragover', function(event){
    event.preventDefault();
} );

dropArea.addEventListener('drop', function(event){
    event.preventDefault();
    inputImg.files = event.dataTransfer.files;
    upload();
} );



// remove image review
function removeImg(){
    const inputImage = document.getElementById('inputImage');
    const previewImage = document.getElementById('previewImage');
    inputImage.value = "";
    previewImage.src = "";
    
}


// change image review
function changeImg(){
    const inputImage = document.getElementById('inputImage');
    const previewImage = document.getElementById('previewImage');
    inputImage.value = "";
    previewImage.src = "";

    inputImage.click();
}

// Email validation
document.getElementById('inputEmail').addEventListener('blur', function(){
    const noteEmail = document.getElementById('noteEmail');
    let inputEmail = document.getElementById('inputEmail').value;
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(regex.test(inputEmail)){
        noteEmail.style.display = 'none'; 
        document.getElementById('inputEmail').style.borderColor = 'hsl(252, 6%, 83%)';  

    }else{
        noteEmail.style.display = 'inline';   
        document.getElementById('inputEmail').style.borderColor = 'hsl(7, 86%, 67%)'; 
    }
});


// button generate ticket
document.getElementById('buttonGenerate').addEventListener('click', function(){
    const inputImage = document.getElementById('inputImage').files[0];
    const inputName = document.getElementById('inputName').value;
    const inputEmail = document.getElementById('inputEmail').value;
    const inputGitHub = document.getElementById('inputGithubUsername').value;

    const formInput = document.getElementById('formData');
    const ticket = document.getElementById('generateTickets');

    if (inputName == '' || inputEmail == '' || inputGitHub == '' || inputImage == ''){
        alert('Fill in all forms');
    }else{
        formInput.style.display = 'none';
        ticket.style.display = 'block';

        document.getElementById('fullName').innerText = inputName;
        document.getElementById('name').innerText = inputName;
        document.getElementById('email').innerText = inputEmail;
        document.getElementById('gitHub').innerText = inputGitHub;
        const image = document.getElementById('image');

        const reader = new FileReader();

        reader.addEventListener('load', function(){
            image.src = reader.result;
        });

        reader.readAsDataURL(inputImage);

        
    }
    
});


