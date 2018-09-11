function myFunction() {
    var input, filter, ul, li, h3, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    mybuttons = document.getElementById("myButtons");
    mybuttons.style.display = "";

    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("h3")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }

    if (filter.length > 0){
      mybuttons.style.display = "none";
      ul.style.display = "";
    } else{
      mybuttons.style.display = "";
      ul.style.display = "none";
    }
}

function myFilter() {
    var input, filter, ul, li, h3, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");

    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("h3")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

function myFilterOld() {
  var input, filter, table, tr, td, i, mybuttons;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");
  
  //alert(filter);
  
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[1];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
}

function mySearch() {
  var input, filter, table, tr, td, i, mybuttons;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");
  mybuttons = document.getElementById("myButtons");
  mybuttons.style.display = "";
  
  //alert("home");
  
  for (i = 0; i < tr.length; i++) {
  td = tr[i].getElementsByTagName("td")[1];
  if (td) {
    if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
    tr[i].style.display = "";
    } else {
    tr[i].style.display = "none";
    }
  }       
  }
  
  if (filter.length > 0){
  mybuttons.style.display = "none";
  table.style.display = "";
  } else{
  mybuttons.style.display = "";
  table.style.display = "none";
  }
}

function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, '\\$&');
  var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
      results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

function getCars() {
  return carslist;
}

function getBrands() {
  var brandlist = [];
  for (var i = 0, l = carslist.length; i < l; i++) {
      var unique = true;
      for (var j = 0, k = brandlist.length; j < k; j++) {
          if (carslist[i].carManufacturer === brandlist[j].carManufacturer) {
              unique = false;
          }
      }
      if (unique) {
          brandlist.push(carslist[i]);
      }
  }
  return brandlist;
}