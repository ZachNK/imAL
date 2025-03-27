const list = document.getElementById('LIST');
var t = 0;
var s = 0;

fetch('./data/JSON/papers.json')
    .then(res => res.json())
    .then(data => {
        t = Object.keys(data).length;
    });

fetch('./data/JSON/papers.json')
    .then(res => res.json())
    .then(data => {
        
        
        for(i=1; i<=t; i++){
            s=t-i;
            list.insertAdjacentHTML('beforeend', 
                `
                <tr>
                    <th>${s+1}</th>
                    <th style="text-align: left;"><a href="${data[s].paper}" target="_blank">${data[s].title}</a><br>
                        <details>
                        <summary>${data[s].algorithm}</summary>
                        <p style="text-align: left;">${data[s].summary}</p>
                        </details>
                    </th>
                    <th>
                        <p style="text-align: center; color: blue;"><a href="${data[s].link}" target="_blank">Link</a></p>
                    </th>
                </tr>`
                );
        }
    });