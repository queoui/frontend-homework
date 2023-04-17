// // Add your code here
// const elem = document.querySelector('input');


// handleKeyDown = function inputForStringSearch(){
//     let search = document.getElementById("search").value.trim();
//     if(search !== ""){
//         console.log(search)
//         let warAndPeace = document.getElementById("textBlock").innerHTML;
//         let regex = new RegExp(search, 'g')
//         let newText = warAndPeace.replace(regex, `<mark>${search}</mark>`)
//         document.getElementById("textBlock").innerHTML = newText;
//     }
// }

// elem.addEventListener('keydown', handleKeyDown);

const $box = document.getElementById('textBlock');

const $search = document.getElementById('search');
const originalText =  document.getElementById('textBlock').innerText

$search.addEventListener('input', (event) => {
        const searchText = event.target.value;
    if(searchText === ""){
        $box.innerHTML = originalText;
    }
     
    else{
        const regex = new RegExp(searchText, 'gi');

        let text = $box.innerHTML;

        text = text.replace(/(<mark class="highlight">|<\/mark>)/gim, '');

        const newText = text.replace(regex, '<mark class="highlight">$&</mark>');

        $box.innerHTML = newText;
    }
    

});