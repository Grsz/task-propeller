fetch('https://design.propcom.co.uk/buildtest/accordion-data.json')
    .then(res => res.json())
    .then(data => {

        const blocks = data.blocks;
        const main = document.querySelector("main");

        blocks.forEach((block, i) => {
            const section = document.createElement("SECTION");

            const headingWrapper = document.createElement("DIV");
            const contentWrapper = document.createElement("DIV");

            headingWrapper.classList.add("headingWrapper");
            contentWrapper.classList.add("contentWrapper");

            const heading = document.createElement("H1");
            const content = document.createElement("P");

            const headingText = document.createTextNode(block.heading);
            const contentText = document.createTextNode(block.content);

            const arrow = document.createElement("IMG");
            arrow.src = "img.png";
            arrow.alt = "arrow";


            heading.appendChild(headingText);
            content.appendChild(contentText);

            headingWrapper.appendChild(heading);
            headingWrapper.appendChild(arrow);
            contentWrapper.appendChild(content);

            section.appendChild(headingWrapper);
            section.appendChild(contentWrapper);

            main.appendChild(section)


            headingWrapper.onclick = function(){
                contentWrapper.classList.toggle("visible")
                headingWrapper.classList.toggle("open")
            }
        });
    })
    .catch(err => console.log(err))