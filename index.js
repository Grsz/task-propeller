fetch('https://design.propcom.co.uk/buildtest/accordion-data.json')
    .then(res => res.json())
    .then(data => {
        const blocks = data.blocks;
        const headings = document.querySelectorAll(".block > h1");
        const paragraphs = document.querySelectorAll(".block > p")
        blocks.forEach((block, i) => {
            const heading = document.createTextNode(block.heading);
            const paragraph = document.createTextNode(block.content);

            headings[i].appendChild(heading);
            paragraphs[i].appendChild(paragraph);

            headings[i].onclick = function(){
                paragraphs[i].classList.toggle("visible")
            }
        });
    })
    .catch(err => console.log(err))