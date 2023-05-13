let inputElement = document.getElementById("searchInput");
let searchResultElement = document.querySelector(".searchResult");

inputElement.addEventListener("input", search);

function search(event) {
  let inputValue = event.target.value.trim(); // Удаляем пробелы в начале и конце значения
  if (inputValue === "") {
    hideSearchResult(); // Если значение пустое, скрываем результаты поиска
  } else {
    let results = searchInDictionary(inputValue);
    if (results === 0) {
      hideSearchResult();
    } else {
      updateSearchResult(results);
      showSearchResult();
    }
    

  }
}

function hideSearchResult() {
  searchResultElement.style.display = "none";
}

function showSearchResult() {
  searchResultElement.style.display = "block";
}

function updateSearchResult(results) {

  if (results.length === 0) {
    searchResultElement.innerHTML = "<p>Результаты поиска:</p><p>Ссылка не найдена!</p>";
  } else {
    searchResultElement.innerHTML = "<p>Результаты поиска:</p>";
    let resultList = document.createElement("ul");
    resultList.classList.add("resultList");
    for (let result of results) {
      let listItem = document.createElement("li");
      let linkElement = document.createElement("a");
      let spanElement= document.createElement("span");
      
      listItem.appendChild(linkElement);
      listItem.appendChild(spanElement);
      linkElement.href = result.link;
      linkElement.textContent = result.name;
      resultList.appendChild(listItem);
      
    }
    searchResultElement.appendChild(resultList); 
  }
}

function searchInDictionary(input) {
  let dictionary = {
    "Микрофон электретный Sennheiser E 865-S": { link: "SennheiserE865-S.html", name: "Микрофон электретный Sennheiser E 865-S" },
    "Микрофон кардиоидный Sennheiser MEG 14-40": { link: "micro_2.html", name: "Микрофон кардиоидный Sennheiser MEG 14-40" },
    "Микрофон динамический Sennheiser E 845-S": { link: "micro_3.html", name: "Микрофон динамический Sennheiser E 845-S" },
    "Микрофон кардиоидный Neumann TLM 102": { link: "micro_4.html", name: "Микрофон кардиоидный Neumann TLM 102" },
    "Наушники Yamaha HPH-MT7W": { link: "ears_1.html", name: "Наушники Yamaha HPH-MT7W" },
    "Наушники Beyerdynamic DT 770 Pro": { link: "ears_2.html", name: "Наушники Beyerdynamic DT 770 Pro" },
    "Наушники для DJ Sennheiser HD 25": { link: "ears_3.html", name: "Наушники для DJ Sennheiser HD 25" },
    "Мониторные Наушники AKG K 702": { link: "ears4_html", name: "Мониторные Наушники AKG K 702" },
    "ПОЛНОКАДРОВАЯ КАМЕРА SONY ALPHA A7 IV": { link: "cam_1.html", name: "ПОЛНОКАДРОВАЯ КАМЕРА SONY ALPHA A7 IV" },
    "ФОТОАППАРАТ PANASONIC LUMIX DC-S1H": { link: "cam_2.html", name: "ФОТОАППАРАТ PANASONIC LUMIX DC-S1H" },
    "ЭКШН-КАМЕРА GOPRO MAX 360": { link: "cam_3.html", name: "ЭКШН-КАМЕРА GOPRO MAX 360" },
    "ФОТОАППАРАТ SONY A6400 KIT 16-50MM": { link: "cam_4.html", name: "ФОТОАППАРАТ SONY A6400 KIT 16-50MM" },
    "Объектив Canon EF 1-35 f/1.4L II USM": { link: "glas_1.html", name: "Объектив Canon EF 1-35 f/1.4L II USM" },
    "ОБЪЕКТИВ TAMRON 28-200MM F/2.8-5.6 DI III RXD": { link: "glas_2.html", name: "ОБЪЕКТИВ TAMRON 28-200MM F/2.8-5.6 DI III RXD" },
    "ОБЪЕКТИВ TOKINA OPERA 50MM F1.4 FF AF": { link: "glas_3.html", name: "ОБЪЕКТИВ TOKINA OPERA 50MM F1.4 FF AF" },
    "ОБЪЕКТИВ LENSBABY 5.8MM F/3.5 CIRCULAR": { link: "glas_4.html", name: "ОБЪЕКТИВ LENSBABY 5.8MM F/3.5 CIRCULAR" },
    "Штатив Yunteng VCT-690RM": { link: "acces_1.html", name: "Штатив Yunteng VCT-690RM" },
    "Стойка микрофонная Bespeco MSRA10": { link: "acces_2.html", name: "Стойка микрофонная Bespeco MSRA10" },
    "Салфетка из микрофибры Fujimi": { link: "acces_3.html", name: "Салфетка из микрофибры Fujimi" },
    "СУМКА ПОЯСНАЯ FOTOKVANT BBN-01 BLUE": { link: "acces_4.html", name: "СУМКА ПОЯСНАЯ FOTOKVANT BBN-01 BLUE" },
  
  
  };

  let searchTerms = input.toLowerCase().split(" ");
  let results = [];

  for (let term of searchTerms) {
    for (let key in dictionary) {
      if (key.toLowerCase().includes(term)) {
        results.push(dictionary[key]);
      }
    }
  }

  return results.length > 0 ? results : 0;
}
