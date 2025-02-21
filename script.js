// const inputImage = document.getElementById('inputImage');
// if(inputImage.files.length > 0){
//     const imgValue = inputImage.value;
//     const previewImage = document.getElementById('previewImage');
//     const img = document.createElement('img');
//     img.setAttribute('src', 'imgValue');
//     previewImage.append(img);
// }

document.getElementById('inputImage').addEventListener('change', function(){
    const inputImg = document.getElementById('inputImage');
    const preview = document.getElementById('preview');
    const previewImage = document.getElementById('previewImage');

    const maxFile = 500 * 1024;

    if(inputImg.files[0].size > maxFile){
        const alert = document.getElementById('note');
        alert.innerHTML = " <i class='fas fa-exclamation-circle'></i>  File too big. Please upload a photo under 500KB.";
        alert.style.color = 'red';
        inputImg.value = "";
        preview.style.display = 'none';
        return;
    }

    if (inputImg.files && inputImg.files[0]){
        const file = inputImg.files[0];
        const reader = new FileReader();

        reader.addEventListener('load', function(){
            previewImage.src = reader.result;
            preview.style.display = 'block';
        }); 
        reader.readAsDataURL(file);
                
    }
});


function removeImg(){
    const inputImage = document.getElementById('inputImage');
    const previewImage = document.getElementById('previewImage');
    inputImage.value = "";
    previewImage.src = "";
    
}

function changeImg(){
    const inputImage = document.getElementById('inputImage');
    const previewImage = document.getElementById('previewImage');
    inputImage.value = "";
    previewImage.src = "";

    inputImage.click();
}





document.getElementById('inputEmail').addEventListener('mouseout', function(){
    const noteEmail = document.getElementById('noteEmail');

    if(document.getElementById('inputEmail').value ===''){
        noteEmail.style.display = 'inline';   
        document.getElementById('inputEmail').style.borderColor = 'hsl(7, 86%, 67%)';   

    }else{
        noteEmail.style.display = 'none'; 
        document.getElementById('inputEmail').style.borderColor = 'hsl(252, 6%, 83%)';  
    }
});


