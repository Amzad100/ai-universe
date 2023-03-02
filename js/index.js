const loadData = async() => {
    const url = `https://openapi.programming-hero.com/api/ai/tools`
    const res = await fetch(url);
    const data = await res.json();
    displayData(data.data.tools);
}
const displayData = datas =>{
    const dataContainer = document.getElementById('data-container');
    datas.forEach(data => {
        const dataDiv = document.createElement('div');
        dataDiv.classList.add('col');
        dataDiv.innerHTML = `
        <div class="card p-4 h-100">
        <img src="${data.image}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">Features</h5>
            <ol>
                <li>${data}</li>
                <li>${data}</li>
                <li>${data}</li>
            </ol>
        <hr>
        <div class="">
            <div>
            <h5>${data.name}</h5>
            <p>${data.published_in}</p>
            </div>
            <div>
            </div>
        </div>
        </div>
    </div>
        `;
        dataContainer.appendChild(dataDiv);
    });
};

loadData();