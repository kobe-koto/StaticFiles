Element.prototype.remove = Element.prototype.remove || function () {
    this.style.display = none;
    return;
}

addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
        
        let links = document.querySelectorAll("a.directory-link");
        if (links.length === 0) {
            return;
        }

        let Dirs = [], Files = [];
        
        for (
            let i=0, tDir=0, tFile=0; 
            i<links.length; 
            i++
        ) {
            let name = links[i].querySelector("span.directory-name").innerText;
        
            if(name.endsWith("/"))  {
                    Dirs[tDir] = name;
                    tDir++;
            } else {
                    Files[tFile] = name;
                    tFile++;
            }
        }
        
        Dirs.sort();
        Files.sort();
        
        let DirElements = [];
        for ( let i = 0; i < Dirs.length; i++ ) {
            for (
                let t = 0;
                t < links.length;
                t++
            ) {
                if (links[t].querySelector("span.directory-name").innerText === Dirs[i]) {
                    DirElements[i] = links[t].cloneNode(true);
                }
            }
        }
        
        let FileElements = [];
        for ( let i = 0; i < Files.length; i++ ) {
            for (
                let t = 0;
                t < links.length;
                t++
            ) {
                if (links[t].querySelector("span.directory-name").innerText === Files[i]) {
                    FileElements[i] = links[t].cloneNode(true);
                }
            }
        }
        
        
        for ( let i=0; i < links.length; i++ ) {
            links[i].remove()
        }
        
        let LinkCcontainer = document.querySelector(".directory section.file-info");
        for ( let i=0; i < Dirs.length; i++ ) {
            LinkCcontainer.append(DirElements[i])
        }
        for ( let i=0; i < Files.length; i++ ) {
            LinkCcontainer.append(FileElements[i])
        }        
    }, 0)
})