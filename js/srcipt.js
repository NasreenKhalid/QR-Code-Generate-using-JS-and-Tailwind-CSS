const form = document.getElementById('generate-form');
const qr = document.getElementById('qrcode');

const onGenerateSubmit = (e) => {
    e.preventDefault();

    const url = document.getElementById('url').value;
    const size = document.getElementById('size').value;

    console.log(url, size)

    if (url === ''){
        alert('Please enter a URL')
    } else {
showSpinner();

setTimeout(()=> {
hideSpinner();
clearUI()
generateQRCode(url,size);

setTimeout(()=>{
    // clearUI()
    const saveUrl = qr.querySelector('img').src
    createSaveBtn(saveUrl)

},50)


},1000)



    }
    
}

const clearUI = () =>{
    qr.innerHTML = '';
    const saveLink = document.getElementById('save-link')
if (saveLink) saveLink.remove();
}


    const generateQRCode = (url, size) => {
        const qrcode = new QRCode('qrcode', {
          text: url,
          width: size,
          height: size,
        });
      };



const hideSpinner = () => {
    document.getElementById('spinner').style.display = 'none';
}


const showSpinner = () => {
    document.getElementById('spinner').style.display = 'block';
}

const createSaveBtn = (saveUrl) => {
   
    const link = document.createElement('a')
    link.id = 'save-link';
    link.classList = 'bg-red-500 hover:bg-red-700 text-white font-bold py-2 rounded w-1/3 m-auto';
    link.href = saveUrl;
    link.download = 'qrcode'
    link.innerHTML = 'Save Image'
    document.getElementById('generated').appendChild(link)
}

hideSpinner();

form.addEventListener('submit', onGenerateSubmit);