const loadData = async () => {
    const url = `https://openapi.programming-hero.com/api/ai/tools`
    const res = await fetch(url);
    const data = await res.json();
    displayData(data.data.tools);
}
const displayData = datas => {
    const dataContainer = document.getElementById('data-container');
    const seeMore = document.getElementById('seeMore');
    if(datas.length > 6){
        datas = datas.slice(0, 6);
        seeMore.classList.remove('d-none')
    }
    else{
        seeMore.classList.add('d-none');
    }
    datas.forEach(data => {
        const dataDiv = document.createElement('div');
        dataDiv.classList.add('col');
        dataDiv.innerHTML = `
        <div class="card p-3 h-100">
        <img src="${data.image}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">Features</h5>
            <ol>
                <li>${data}</li>
                <li>${data}</li>
                <li>${data}</li>
            </ol>
        <hr>
        <h5>${data.name}</h5>
        <div class="row justify-content-between">
            <div class="col-4">
            <p><i class="fa-solid fa-calendar-days"></i> ${data.published_in}</p>
            </div>
            <div class="col-2">
            <button><i class="fa-sharp fa-solid fa-arrow-right"></i></button>
            </div>
        </div>
        </div>
    </div>
        `;
        dataContainer.appendChild(dataDiv);
        togleSpinner(false);
    });
};
const togleSpinner = isLoading => {
    const lodarSection = document.getElementById('loader');
    if (isLoading) {
        lodarSection.classList.remove('d-none')
    }
    else{
        lodarSection.classList.add('d-none');
    }
}
togleSpinner(true);
loadData();