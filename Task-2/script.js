let tableFromJson = () => {
    //the json data.
    const data = [];   //json data comes inside these brackets BUT BECAUSE THE DATA PROVIDED IN FORM ISN'T CORRECT, I'M NOT ADDING IT HERE.

    let col = [];
    for (let i = 0; i < data.length; i++) {
        for (let key in data[i]) {
            if (col.indexOf(key) === -1) {
                col.push(key);
            }
        }
    }

    const table = document.createElement("table");
    let tr = table.insertRow(-1); 
    for (let i = 0; i < col.length; i++) {
        let th = document.createElement("th");      
        th.innerHTML = col[i];
        tr.appendChild(th);
    }
     
    for (let i = 0; i < data.length; i++) {

        tr = table.insertRow(-1);   
        for (let j = 0; j < col.length; j++) {
            let tabCell = tr.insertCell(-1);
            tabCell.innerHTML = data[i][col[j]];
        }
    }
    const divShowData = document.getElementById('showData');
    divShowData.innerHTML = "";
    divShowData.appendChild(table);
}   
