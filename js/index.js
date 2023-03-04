// load all data start
const loadData = async () => {
    const url = `https://openapi.programming-hero.com/api/ai/tools`
    const res = await fetch(url);
    const data = await res.json();
    displayData(data.data.tools);
}
// load all data end

// display all data start
const displayData = datas => {
    const dataContainer = document.getElementById('data-container');
    const seeMore = document.getElementById('seeMore');
    if (datas.length > 6) {
        datas = datas.slice(0, 6);
        seeMore.classList.remove('d-none')
    }
    else {
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
                <li>${data.features[0]}</li>
                <li>${data.features[1]}</li>
                <li>${data.features[2]}</li>
            </ol>
        <hr>
        <h5>${data.name}</h5>
        <div class="row justify-content-between">
            <div class="col-4">
            <p><i class="fa-solid fa-calendar-days"></i> ${data.published_in}</p>
            </div>
            <div class="col-2">
            <button onclick="loadSingleData('${data.data}')" href="#" data-bs-toggle="modal" data-bs-target="#exampleModal"><i class="fa-sharp fa-solid fa-arrow-right"></i></button>
            </div>
        </div>
        </div>
    </div>
        `;
        dataContainer.appendChild(dataDiv);
        togleSpinner(false);
    });
};
// display all data end

// spinner start 
const togleSpinner = isLoading => {
    const lodarSection = document.getElementById('loader');
    if (isLoading) {
        lodarSection.classList.remove('d-none')
    }
    else {
        lodarSection.classList.add('d-none');
    }
}
// spinner end 

// see more button data start
document.getElementById('btn-see-More').addEventListener('click', function () {
    const loadData = async () => {
        const url = `https://openapi.programming-hero.com/api/ai/tools`
        const res = await fetch(url);
        const data = await res.json();
        displayData(data.data.tools);
    }
    const displayData = datas => {
        const dataContainer = document.getElementById('data-container');
        dataContainer.innerText = "";
        const seeMore = document.getElementById('seeMore');
        if (datas.length > 6) {
            seeMore.classList.add('d-none')
        }
        else {
            seeMore.classList.remove('d-none');
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
                <li>${data.features[0]}</li>
                <li>${data.features[1]}</li>
                <li>${data.features[2]}</li>
                </ol>
            <hr>
            <h5>${data.name}</h5>
            <div class="row justify-content-between">
                <div class="col-4">
                <p><i class="fa-solid fa-calendar-days"></i> ${data.published_in}</p>
                </div>
                <div class="col-2">
                <button onclick="loadSingleData('${data.data}') href="#"  data-bs-toggle="modal" data-bs-target="#exampleModal"><i class="fa-sharp fa-solid fa-arrow-right"></i></button>
                </div>
            </div>
            </div>
        </div>
            `;
            dataContainer.appendChild(dataDiv);
            togleSpinner(false);
        });
    };
    loadData();
})
// see more button data end

// modal data load start
const loadSingleData = async id => {
    const url = ` https://openapi.programming-hero.com/api/ai/tool/${id}`;
    const res = await fetch(url);
    const data = await res.json();
    console.log(data.data);
}
// modal data load start

// modal data display start
const displaySingleData = (data) => {

}
// modal data display end
togleSpinner(true);
loadData();