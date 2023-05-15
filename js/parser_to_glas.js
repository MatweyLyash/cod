let table = (arr_tag, arr) => {
    let i = 0;
    for (const elem_arr of arr_tag) {
      arr[i++] = elem_arr.textContent;
    }
    return arr;
  }
  let img_glas_arr = [], name_arr = [], rub_arr = [], cop_arr = [], info1_arr = [], info2_arr = [], info3_arr = [], info4_arr = [], way_arr = [];
  let parser = (xmlString => {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmlString, 'text/xml');
    const img_glas = xmlDoc.getElementsByTagName('img_glas');
    const name = xmlDoc.getElementsByTagName('name');
    const rub = xmlDoc.getElementsByTagName('rub');
    const cop = xmlDoc.getElementsByTagName('cop');
    const info1 = xmlDoc.getElementsByTagName('info1');
    const info2 = xmlDoc.getElementsByTagName('info2');
    const info3 = xmlDoc.getElementsByTagName('info3');
    const info4 = xmlDoc.getElementsByTagName('info4');
    const way = xmlDoc.getElementsByTagName('way');
  
    img_glas_arr = table(img_glas, img_glas_arr);
    name_arr = table(name, name_arr);
    rub_arr = table(rub, rub_arr);
    cop_arr = table(cop, cop_arr);
    info1_arr = table(info1, info1_arr);
    info2_arr = table(info2, info2_arr);
    info3_arr = table(info3, info3_arr);
    info4_arr = table(info4, info4_arr);
    way_arr = table(way, way_arr);
  
    for (let i = 0; i < img_glas_arr.length; i++) {
      document.querySelector('.stuff').insertAdjacentHTML(
        "beforeend",
        `<div class="first">
                <div class="space"></div>
                <div class"img-container">
                <a href="${way_arr[i]}"><img src="${img_glas_arr[i]}" alt=""></a>
                </div>
                <div class="card">
                    <p class="name">${name_arr[i]}</p>
                    <span class="line"></span>
                    <p class="cost"> ${rub_arr[i]}<span class="little">руб.</span> ${cop_arr[i]}<span class="little">коп.</span></p>
                    <ul class"more">
                        <li class="info">${info1_arr[i]}</li>
                        <li class="info">${info2_arr[i]}</li>
                        <li class="info">${info3_arr[i]}</li>
                       
                    </ul>
                </div>
                <div class="space"></div>
            </div>`
  
      );
    }
  })
  
  async function parseXML() {
  
    let a = await fetch('xml/glass.xml');
    let xmlString = await a.text();
    parser(xmlString);
  
  
  }
  
  parseXML();
  
  
