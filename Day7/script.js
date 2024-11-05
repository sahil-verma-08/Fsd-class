async function fetchadata() {
    try{
        let response=await fetch("https://api.github.com/users?per_page=10")
        let data =await response.json();
        data.forEach(Element=>{
            // console.log(
            //     `Node Id : ${Element.node_id} and html URL :${Element.html_url}`
            // );
            let h1=document.createElement('h1');
            h1.textContent=Element.node_id;
            let a=document.createElement('a');
            a.textContent=Element.node_id;
            a.setAttribute("href",Element.html_url);
            let top=document.getElementById('top');
            top.appendChild(h1);
            top.appendChild(a);
        });
                // console.log(data);

    }catch(error){
        console.log(error);

    }
    
    
}
// fetchadata()