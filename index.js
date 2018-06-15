fetch('https://design.propcom.co.uk/buildtest/accordion-data.json')
    .then(res => res.json())
    .then(data => {

        const blocks = data.blocks;
        const headingWrappers = document.querySelectorAll(".block > .headingWrapper");
        const contentWrappers = document.querySelectorAll(".block > .contentWrapper");
        const headings = document.querySelectorAll(".block > .headingWrapper > h1");
        const contents = document.querySelectorAll(".block > .contentWrapper > p");

        blocks.forEach((block, i) => {

            const heading = document.createTextNode(block.heading);
            const content = document.createTextNode(block.content);

            headings[i].appendChild(heading);
            contents[i].appendChild(content);

            headingWrappers[i].onclick = function(){
                contentWrappers[i].classList.toggle("visible")
                headingWrappers[i].classList.toggle("open")
            }
        });
    })
    .catch(err => console.log(err))