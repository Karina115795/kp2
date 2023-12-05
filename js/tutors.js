function showTutors(arr_tutors) {
    let node = document.getElementById("tutor_cards")
    node.innerHTML = ``

    for (let key in arr_tutors) {
        node.innerHTML += `
        <li class="card d-flex flex-column m-3" style="width: 15rem;">
            <img src="../data/images/${arr_tutors[key].img}" class="card-img-top" alt="${arr_tutors[key].name}">
            <div class="card-body">
                <h5 class="card-title">${arr_tutors[key].name}</h5>
                <h6 class="card-subtitle text-secondary">Опыт: ${arr_tutors[key].experience}</h6>
                <p class="card-text">Преподает ${arr_tutors[key].lang}</p>
                <p class="card-text">Рейтинг: <span class="text-success">${arr_tutors[key].rating}</span></p>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="choose_tutor" value="${arr_tutors[key].id}">
                    <label class="form-check-label" for="choose_tutor">Выбрать преподавателя</label>
                </div>
            </div>
        </li>
        `
    }
}

let tutors = []

async function getTutors() {
    let responce = await fetch("../data/tutors.json")
    raw_data = await responce.text()
    tutors = JSON.parse(raw_data)

    showTutors(tutors)
}

getTutors()

let mapper = {
    1: "английский",
    2: "французский",
    3: "итальянский",
    4: "японский"
}

function filterTutors() {
    let selector = document.getElementById("lang_selector")
    let index = parseInt(selector.selectedIndex)
    console.log(index)
    if (index == 0) {
        showTutors(tutors)
    } else {
        let filtered = []
        for (let i in tutors) {
            if (tutors[i].lang == mapper[index]) {
                filtered.push(tutors[i])
            }
        }
        showTutors(filtered)
    }
}