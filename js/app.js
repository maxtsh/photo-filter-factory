// ****************************** //

// App name : Photo Filter Factory
// App Version: v1.1.0
// App Author: Mohammad Tsh
// Email: tatshahdoost@gmail.com
// Github: https://github.com/mohammadtsh
// What Needs To Be Done: Each Expense Percentage

// ****************************** //



// Buttons
const downloadBtn = document.querySelector('#download'),
      upload = document.querySelector('#file'),
      reset = document.querySelector('#reset');

// Get Image 
// const image = document.querySelector('#image');
let image = new Image();
let fileName = '';
const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');

// Upload Image Event Listener
upload.addEventListener('change', uploadFile);

// Filters & Effects Event Listener
document.querySelector('body').addEventListener('click', filter);
document.querySelector('body').addEventListener('click', effect);
reset.addEventListener('click', clearAll);
downloadBtn.addEventListener('click', downLoadImage);




//  ****** Filters & Effects Functions ****** //

function filter(e){

    if(e.target.classList.contains('filter-btn')){
        switch(e.target.id){
            // Blur Filter
            case 'blur-add':
                Caman('#canvas', image, function(){
                    this.stackBlur(2).render();
                });
            break;
            case 'blur-reduce':
                Caman('#canvas', image, function(){
                    this.stackBlur(-2).render();
                });
            break;
            
            // Brightness Filter
            case 'brightness-add':
                Caman('#canvas', image, function(){
                    this.brightness(5).render();
                });
            break;
            case 'brightness-reduce':
                Caman('#canvas', image, function(){
                    this.brightness(-5).render();
                });
            break;

            // Contrast Filter
            case 'contrast-add':
            Caman('#canvas', image, function(){
                this.contrast(5).render();
            });
            break;
            case 'contrast-reduce':
            Caman('#canvas', image, function(){
                this.contrast(-5).render();
            });
            break;

            // Saturation Filter
            case 'saturation-add':
            Caman('#canvas', image, function(){
                this.saturation(5).render();
            });
            break;
            case 'saturation-reduce':
            Caman('#canvas', image, function(){
                this.saturation(-5).render();
            });
            break;

            // Exposure Filter
            case 'expo-add':
            Caman('#canvas', image, function(){
                this.exposure(10).render();
            });
            break;
            case 'expo-reduce':
            Caman('#canvas', image, function(){
                this.exposure(-10).render();
            });
            break;

            // Gamma Filter
            case 'gamma-add':
            Caman('#canvas', image, function(){
                this.gamma(1.1).render();
            });
            break;
            case 'gamma-reduce':
            Caman('#canvas', image, function(){
                this.gamma(0.9).render();
            });
            break;

            // Invert Filter
            case 'invert-add':
            Caman('#canvas', image, function(){
                this.invert().render();
            });
            break;
            case 'invert-reduce':
            Caman('#canvas', image, function(){
                this.invert().render();
            });
            break;

            // Sepia Filter
            case 'sepia-add':
            Caman('#canvas', image, function(){
                this.sepia(10).render();
            });
            break;
            case 'sepia-reduce':
            Caman('#canvas', image, function(){
                this.sepia(-10).render();
            });
            break;

            // Hue Filter
            case 'hue-add':
            Caman('#canvas', image, function(){
                this.hue(10).render();
            });
            break;
            case 'hue-reduce':
            Caman('#canvas', image, function(){
                this.hue(-10).render();
            });
            break;

            // Vibrance Filter
            case 'vibrance-add':
            Caman('#canvas', image, function(){
                this.vibrance(20).render();
            });
            break;
            case 'vibrance-reduce':
            Caman('#canvas', image, function(){
                this.vibrance(-20).render();
            });
            break;

            // Noise Filter
            case 'noise-add':
            Caman('#canvas', image, function(){
                this.noise(10).render();
            });
            break;
            // case 'noise-reduce':
            // Caman('#canvas', image, function(){
            //     this.noise(-10).render();
            // });
            break;

            // GreyScale Filter
            case 'grayscale-add':
            Caman('#canvas', image, function(){
                this.greyscale().render();
            });
            break;
            // case 'grayscale-reduce':
            // Caman('#canvas', image, function(){
            //     this.greyscale().render();
            // });
            break;


            // default: console.log('Click Any Effect Or Filter');
        }
    }
}
function effect(e){
    if(e.target.classList.contains('effect')){
        switch(e.target.id){
            // Vintage Effect
            case 'vintage':
            Caman('#canvas', image, function(){
                this.vintage().render();
            });
            break;
            // Lomo Effect
            case 'lomo':
            Caman('#canvas', image, function(){
                this.lomo().render();
            });
            break;
            // Clarity Effect
            case 'clarity':
            Caman('#canvas', image, function(){
                this.clarity().render();
            });
            break;
            // Sin City Effect
            case 'sincity':
            Caman('#canvas', image, function(){
                this.sinCity().render();
            });
            break;
            // Love Effect
            case 'love':
            Caman('#canvas', image, function(){
                this.love().render();
            });
            break;
            // Cross Process Effect
            case 'crossprocess':
            Caman('#canvas', image, function(){
                this.crossProcess().render();
            });
            break;
            // Pinhole Process Effect
            case 'pinhole':
            Caman('#canvas', image, function(){
                this.pinhole().render();
            });
            break;
            // Nostalgia Process Effect
            case 'nostalgia':
            Caman('#canvas', image, function(){
                this.nostalgia().render();
            });
            break;
            // Her Majesty Effect
            case 'hermajesty':
            Caman('#canvas', image, function(){
                this.herMajesty().render();
            });
            break;
            // Hazy Days Effect
            case 'hazydays':
            Caman('#canvas', image, function(){
                this.hazyDays().render();
            });
            break;
            // Concentrate Effect
            case 'concentrate':
            Caman('#canvas', image, function(){
                this.concentrate().render();
            });
            break;
            // Hemingway Effect
            case 'hemingway':
            Caman('#canvas', image, function(){
                this.hemingway().render();
            });
            break;
            // Grungy Effect
            case 'grungy':
            Caman('#canvas', image, function(){
                this.grungy().render();
            });
            break;
            // Sunrise Effect
            case 'sunrise':
            Caman('#canvas', image, function(){
                this.sunrise().render();
            });
            break;
            // Old Boot Effect
            case 'oldboot':
            Caman('#canvas', image, function(){
                this.oldBoot().render();
            });
            break;
        }
    }
}

// Clear All Function
function clearAll(e){
    Caman('#canvas', image, function(){
        this.revert();
    });
    e.preventDefault();
}

// DownLoad Function
function downLoadImage(){

    let fileExtension = fileName.slice(-4);

    // Fix To Jpeg & Jpg & Png Endng Length Problem
    if(fileExtension === 'jpeg'){
        fileExtension = '.jpeg';
    }

    // Initilize New FileName
    let newFileName;

    // Check Image Type
    if(fileExtension === '.jpg' || fileExtension === '.png' || fileExtension === '.jpeg'){
        // Changing The File Extension & Ending Name To Edited.JPG
        newFileName = fileName.substring(0, fileName.length - 4) + `-edited${fileExtension}`; // Dynamic File Extension Change
        // Call Download
        download(canvas, newFileName);
    }
}
function download(canvas, fileName){
    // Initilize Event
    let event;
    // Create Link
    const link = document.createElement('a');
    // Set Properties
    link.download = fileName;
    link.href = canvas.toDataURL('image/jpeg', 0.8);
    // New Mouse Event
    event = new MouseEvent('click');
    // Dispatch Event
    link.dispatchEvent(event);
}

// ************     Uploading Process     ************ //
function uploadFile(e){
    // Getting The File
    const file = document.querySelector('#file').files[0]; 
    // This Gives The First File in Files[] Array Which in this case is our Image

    // Initialize File Reader
    const reader = new FileReader();
    if(file){
        // Set File Name
        fileName = file.name;
        // Read Data As URL
        reader.readAsDataURL(file);
    }
    // Adding Image To Canvas
    reader.addEventListener('load', (e) => {
        // Create Image
        image = new Image();
        // Set Source (src)
        image.src = reader.result;
        // On Image Load Add To Canvas
        image.onload = () => {
            canvas.width = image.width;
            canvas.height = image.height;
            ctx.drawImage(image, 0, 0, image.width, image.height);
            canvas.removeAttribute('data-caman-id');
        }
    }, false);
    e.preventDefault();
}



