let table = (arr_tag, arr) => {
    let i = 0;
    for (const elem_arr of arr_tag) {
        arr[i++] = elem_arr.textContent;
    }
    return arr;
  }
  let img_ear_arr = [], name_arr = [], rub_arr = [],cop_arr = [],info1_arr = [],info2_arr = [],info3_arr = [],info4_arr = [],way_arr=[];
  let parser = (xmlString => {
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(xmlString, 'text/xml');
      const img_ear = xmlDoc.getElementsByTagName('img_ear');
      const name = xmlDoc.getElementsByTagName('name');
      const rub = xmlDoc.getElementsByTagName('rub');
      const cop = xmlDoc.getElementsByTagName('cop');
      const info1 = xmlDoc.getElementsByTagName('info1');
      const info2 = xmlDoc.getElementsByTagName('info2');
      const info3 = xmlDoc.getElementsByTagName('info3');
      const info4 = xmlDoc.getElementsByTagName('info4');
      const way = xmlDoc.getElementsByTagName('way');
  
      
      img_ear_arr = table(img_ear, img_ear_arr);
      name_arr = table(name, name_arr);
      rub_arr = table(rub, rub_arr);
      cop_arr = table(cop, cop_arr);
      info1_arr = table(info1, info1_arr);
      info2_arr = table(info2, info2_arr);
      info3_arr = table(info3, info3_arr);
      info4_arr = table(info4, info4_arr);
      way_arr=table(way,way_arr);

  
      for (let i = 0; i < img_ear_arr.length; i++) {
       
        document.querySelector('.ears').insertAdjacentHTML("beforeend",
  
              `<div class="first">
              <div class="space"></div>
              <a href="${way_arr[i]}"><img src="${img_ear_arr[i]}" alt=""></a>
              <div class="card">
                  <p>${name_arr[i]}</p>
                  <span class="line"></span>
                  <p>${rub_arr[i]} руб. ${cop_arr[i]} коп.</p>
                  <ul>
                      <li>${info1_arr[i]}</li>
                      <li>${info2_arr[i]}</li>
                      <li>${info3_arr[i]}</li>
                      <li>${info4_arr[i]}</li>
                  </ul>
              </div>
              <div class="space"></div>
          </div>`
  
        );
      }
    })
  
    async function parseXML() {
      
      let a = await fetch('/xml/ear.xml');
      let xmlString = await a.text();
      parser(xmlString);
  
      
    }
  
    parseXML();


// In products list
// for (const product in products) {
//     const url = `/product?id=${product.id}` 
// }

// On product page
// https://developer.mozilla.org/en-US/docs/Web/API/URL
// https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams
// url = new URL(window.location.toString()).searchParams.get("id")
