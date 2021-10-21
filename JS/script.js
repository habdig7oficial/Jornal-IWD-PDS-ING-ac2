document.addEventListener("DOMContentLoaded", function(event) {

  let main = document.querySelector("main")

function criar (dc1, dc2, dc3, srci, alt, titulo,txt,ref, ){



  let div1= document.createElement("div");

  let div2= document.createElement("a");

  let div3= document.createElement("div");


  let h3 = document.createElement("h3");
  let img = document.createElement("img");



  let p = document.createElement("p");


  div1.className = dc1;

  div2.className = dc2;

  div3.className = dc3;

  img.src = srci;

  img.alt = alt;


  h3.innerHTML = titulo;

  p.innerHTML = txt;


  div2.href =  ref



  div1.appendChild(div2)

  div2.appendChild(img)

  div2.appendChild(div3)

  div3.appendChild(h3)

  div3.appendChild(p)


  console.log(div1)

  return div1;

}

let div_basica= document.createElement("div");

div_basica.className = "coluna"

main.appendChild(div_basica)


let div_first_line= document.createElement("div");

div_first_line.className = "linha"

div_basica.appendChild(div_first_line)


let div_second_line= document.createElement("div");

div_second_line.className = "linha"

div_basica.appendChild(div_second_line)




let retorno;

retorno = criar("all","linha","coluna","https://picsum.photos/350/150","random image","Loremdedesdd Ipsum","Donec ut interdum elit. Vivamus dictum porttitor lacus, eget commodo leo. Nullam semper magna sit amet libero scelerisque placerat. Donec nec feugiat ligula. Vivamus volutpat, metus non fringilla porta, turpis mauris gravida libero, vel volutpat nunc diam vitae est. Nulla sodales orci eget ipsum gravida malesuada. Pellentesque consequat elementum lacus, elementum pellentesque neque tristique in. Donec non tristique metus. Ut sed nulla molestie, suscipit augue imperdiet, dapibus massa. Donec tempor suscipit dolor, eu sodales nisi scelerisque rhoncus. Morbi rhoncus, lacus sed tristique molestie, massa nisi vehicula ipsum, id laoreet sapien turpis quis odio. ","./artigo")

div_first_line.appendChild(retorno)

retorno = criar("all","linha","coluna","https://picsum.photos/350/150","random image","Lorem Ipsudfsdafwefsadadwefm","Donec ut interdum elit. Vivamus dictum porttitor lacus, eget commodo leo. Nullam semper magna sit amet libero scelerisque placerat. Donec nec feugiat ligula. Vivamus volutpat, metus non fringilla porta, turpis mauris gravida libero, vel volutpat nunc diam vitae est. Nulla sodales orci eget ipsum gravida malesuada. Pellentesque consequat elementum lacus, elementum pellentesque neque tristique in. Donec non tristique metus. Ut sed nulla molestie, suscipit augue imperdiet, dapibus massa. Donec tempor suscipit dolor, eu sodales nisi scelerisque rhoncus. Morbi rhoncus, lacus sed tristique molestie, massa nisi vehicula ipsum, id laoreet sapien turpis quis odio. ","./artigo")

div_first_line.appendChild(retorno)

retorno = criar("linha","all","coluna","https://picsum.photos/685/400","random image","Lorem Ipum","Donec ut interdum elit. Vivamus dictum porttitor lacus, eget commodo leo. Nullam semper magna sit amet libero scelerisque placerat. Donec nec feugiat ligula. Vivamus volutpat, metus non fringilla porta, turpis mauris gravida libero, vel volutpat nunc diam vitae est. Nulla sodales orci eget ipsum gravida malesuada. Pellentesque consequat elementum lacus, elementum pellentesque neque tristique in. Donec non tristique metus. Ut sed nulla molestie, suscipit augue imperdiet, dapibus massa. Donec tempor suscipit dolor, eu sodales nisi scelerisque rhoncus. Morbi rhoncus, lacus sed tristique molestie, massa nisi vehicula ipsum, id laoreet sapien turpis quis odio. ","./artigo")

div_second_line.appendChild(retorno)



let div_first_column= document.createElement("div");

div_first_column.className = "coluna"

div_second_line.appendChild(div_first_column)


retorno = criar("all","linha","coluna","https://picsum.photos/300/150","random image","Lorem Ipum","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat, elit eget tristique tempus, nisl purus ultricies orci, ut venenatis dolor augue id arcu. Phasellus eleifend hendrerit eros porta auctor. Proin eget felis luctus, tincidunt tellus ut, vehicula nisi. In eget sagittis neque. Nunc eget quam auctor, sollicitudin erat a, volutpat dui. Nullam sodales orci vitae tempus dictum. Vivamus massa purus, auctor at dignissim et, venenatis sed ex. Cras eleifend a lacus vitae sagittis. ","./artigo")

div_first_column.appendChild(retorno)

retorno = criar("all","linha","coluna","https://picsum.photos/350/150","random image","Loremdedesdd Ipsum","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat, elit eget tristique tempus, nisl purus ultricies orci, ut venenatis dolor augue id arcu. Phasellus eleifend hendrerit eros porta auctor. Proin eget felis luctus, tincidunt tellus ut, vehicula nisi. In eget sagittis neque. Nunc eget quam auctor, sollicitudin erat a, volutpat dui. Nullam sodales orci vitae tempus dictum. Vivamus massa purus, auctor at dignissim et, venenatis sed ex. Cras eleifend a lacus vitae sagittis. ","./artigo")

div_first_column.appendChild(retorno)

retorno = criar("all","linha","coluna","https://picsum.photos/300/150","random image","Lorem Ipum","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat, elit eget tristique tempus, nisl purus ultricies orci, ut venenatis dolor augue id arcu. Phasellus eleifend hendrerit eros porta auctor. Proin eget felis luctus, tincidunt tellus ut, vehicula nisi. In eget sagittis neque. Nunc eget quam auctor, sollicitudin erat a, volutpat dui. Nullam sodales orci vitae tempus dictum. Vivamus massa purus, auctor at dignissim et, venenatis sed ex. Cras eleifend a lacus vitae sagittis. ","./artigo")

div_second_line.appendChild(retorno)



  });



