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

function myFilter() {
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

function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, '\\$&');
  var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
      results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

//INIT full JSON
var carslist = [
{ "carModel": "100", "carManufacturer": "Audi", "carYear": "1988 a 1991", "brandLogo": "audi", "carImage": "sheet_350" },
{ "carModel": "100 / A6 / S6", "carManufacturer": "Audi", "carYear": "1991 a 1997", "brandLogo": "audi", "carImage": "sheet_352" },
{ "carModel": "100 Avant", "carManufacturer": "Audi", "carYear": "1988 a 1991", "brandLogo": "audi", "carImage": "sheet_351" },
{ "carModel": "80 / S2", "carManufacturer": "Audi", "carYear": "1990 a 1995", "brandLogo": "audi", "carImage": "sheet_346" },
{ "carModel": "80 / S2 / RS2 Avant", "carManufacturer": "Audi", "carYear": "1992 a 1995", "brandLogo": "audi", "carImage": "sheet_347" },
{ "carModel": "80 / S2 Coupé", "carManufacturer": "Audi", "carYear": "1988 a 1996", "brandLogo": "audi", "carImage": "sheet_348" },
{ "carModel": "80 Cabriolet", "carManufacturer": "Audi", "carYear": "1991 a 2000", "brandLogo": "audi", "carImage": "sheet_349" },
{ "carModel": "Série 1 E87", "carManufacturer": "BMW", "carYear": "2004 a 2011", "brandLogo": "bmw", "carImage": "sheet_414" },
{ "carModel": "Série 3 E46", "carManufacturer": "BMW", "carYear": "1999 a 2006", "brandLogo": "bmw", "carImage": "sheet_409" },
{ "carModel": "Série 6 E64", "carManufacturer": "BMW", "carYear": "2004 a 2010", "brandLogo": "bmw", "carImage": "sheet_410" },
{ "carModel": "Z3 Roadster E36/7", "carManufacturer": "BMW", "carYear": "1995 a 2002", "brandLogo": "bmw", "carImage": "sheet_411" },
{ "carModel": "Z4 Roadster E85", "carManufacturer": "BMW", "carYear": "2002 a 2008", "brandLogo": "bmw", "carImage": "sheet_412" },
{ "carModel": "Z8 Roadster E52", "carManufacturer": "BMW", "carYear": "2000 a 2003", "brandLogo": "bmw", "carImage": "sheet_413" },
{ "carModel": "Agile", "carManufacturer": "Chevrolet", "carYear": "A partir de 2010", "brandLogo": "chevrolet", "carImage": "sheet_127" },
{ "carModel": "Camaro", "carManufacturer": "Chevrolet", "carYear": "A partir de 2011", "brandLogo": "chevrolet", "carImage": "sheet_136" },
{ "carModel": "Captiva", "carManufacturer": "Chevrolet", "carYear": "A partir de 2008", "brandLogo": "chevrolet", "carImage": "sheet_137" },
{ "carModel": "Celta", "carManufacturer": "Chevrolet", "carYear": "A partir de 2014", "brandLogo": "chevrolet", "carImage": "sheet_125" },
{ "carModel": "Classic", "carManufacturer": "Chevrolet", "carYear": "A partir de 2013", "brandLogo": "chevrolet", "carImage": "sheet_126" },
{ "carModel": "Cobalt", "carManufacturer": "Chevrolet", "carYear": "A partir de 2012", "brandLogo": "chevrolet", "carImage": "sheet_130" },
{ "carModel": "Cruze Sedan", "carManufacturer": "Chevrolet", "carYear": "A partir de 2012", "brandLogo": "chevrolet", "carImage": "sheet_135" },
{ "carModel": "Cruze Sport 6", "carManufacturer": "Chevrolet", "carYear": "A partir de 2012", "brandLogo": "chevrolet", "carImage": "sheet_134" },
{ "carModel": "Montana", "carManufacturer": "Chevrolet", "carYear": "A partir de 2011", "brandLogo": "chevrolet", "carImage": "sheet_139" },
{ "carModel": "Nova S10 Cabine Dupla", "carManufacturer": "Chevrolet", "carYear": "A partir de 2012", "brandLogo": "chevrolet", "carImage": "sheet_141" },
{ "carModel": "Nova S10 Cabine Simples", "carManufacturer": "Chevrolet", "carYear": "A partir de 2012", "brandLogo": "chevrolet", "carImage": "sheet_140" },
{ "carModel": "Novo Prisma", "carManufacturer": "Chevrolet", "carYear": "A partir de 2013", "brandLogo": "chevrolet", "carImage": "sheet_129" },
{ "carModel": "Onix", "carManufacturer": "Chevrolet", "carYear": "A partir de 2013", "brandLogo": "chevrolet", "carImage": "sheet_128" },
{ "carModel": "Sonic Hatchback", "carManufacturer": "Chevrolet", "carYear": "A partir de 2012", "brandLogo": "chevrolet", "carImage": "sheet_131" },
{ "carModel": "Sonic Sedan", "carManufacturer": "Chevrolet", "carYear": "A partir de 2012", "brandLogo": "chevrolet", "carImage": "sheet_132" },
{ "carModel": "Spin", "carManufacturer": "Chevrolet", "carYear": "A partir de 2013", "brandLogo": "chevrolet", "carImage": "sheet_133" },
{ "carModel": "Trailblazer", "carManufacturer": "Chevrolet", "carYear": "A partir de 2013", "brandLogo": "chevrolet", "carImage": "sheet_138" },
{ "carModel": "300C", "carManufacturer": "Chrysler", "carYear": "A partir de 2014", "brandLogo": "chrysler", "carImage": "sheet_286" },
{ "carModel": "Town & Country", "carManufacturer": "Chrysler", "carYear": "A partir de 2014", "brandLogo": "chrysler", "carImage": "sheet_287" },
{ "carModel": "C3", "carManufacturer": "Citroen", "carYear": "A partir de 2014", "brandLogo": "citroen", "carImage": "sheet_175" },
{ "carModel": "C3 Picasso / Aircross", "carManufacturer": "Citroen", "carYear": "A partir de 2014", "brandLogo": "citroen", "carImage": "sheet_176" },
{ "carModel": "C4", "carManufacturer": "Citroen", "carYear": "A partir de 2014", "brandLogo": "citroen", "carImage": "sheet_177" },
{ "carModel": "C4 Picasso", "carManufacturer": "Citroen", "carYear": "A partir de 2014", "brandLogo": "citroen", "carImage": "sheet_178" },
{ "carModel": "C5 Sedan / Tourer", "carManufacturer": "Citroen", "carYear": "A partir de 2014", "brandLogo": "citroen", "carImage": "sheet_179" },
{ "carModel": "Durango", "carManufacturer": "Dodge", "carYear": "A partir de 2014", "brandLogo": "dodge", "carImage": "sheet_288" },
{ "carModel": "Journey", "carManufacturer": "Dodge", "carYear": "A partir de 2014", "brandLogo": "dodge", "carImage": "sheet_289" },
{ "carModel": "Bravo", "carManufacturer": "Fiat", "carYear": "A partir de 2014", "brandLogo": "fiat", "carImage": "sheet_142" },
{ "carModel": "Doblo", "carManufacturer": "Fiat", "carYear": "A partir de 2014", "brandLogo": "fiat", "carImage": "sheet_144" },
{ "carModel": "Doblo Cargo", "carManufacturer": "Fiat", "carYear": "A partir de 2014", "brandLogo": "fiat", "carImage": "sheet_143" },
{ "carModel": "Ducato Cargo", "carManufacturer": "Fiat", "carYear": "A partir de 2014", "brandLogo": "fiat", "carImage": "sheet_145" },
{ "carModel": "Ducato Passageiro", "carManufacturer": "Fiat", "carYear": "A partir de 2014", "brandLogo": "fiat", "carImage": "sheet_146" },
{ "carModel": "Fiat 500", "carManufacturer": "Fiat", "carYear": "A partir de 2014", "brandLogo": "fiat", "carImage": "sheet_147" },
{ "carModel": "Fiorino", "carManufacturer": "Fiat", "carYear": "A partir de 2014", "brandLogo": "fiat", "carImage": "sheet_148" },
{ "carModel": "Freemont", "carManufacturer": "Fiat", "carYear": "A partir de 2014", "brandLogo": "fiat", "carImage": "sheet_149" },
{ "carModel": "Grand Siena", "carManufacturer": "Fiat", "carYear": "A partir de 2014", "brandLogo": "fiat", "carImage": "sheet_150" },
{ "carModel": "Grand Siena Tetrafuel GNV", "carManufacturer": "Fiat", "carYear": "A partir de 2014", "brandLogo": "fiat", "carImage": "sheet_151" },
{ "carModel": "Idea", "carManufacturer": "Fiat", "carYear": "A partir de 2014", "brandLogo": "fiat", "carImage": "sheet_152" },
{ "carModel": "Linea", "carManufacturer": "Fiat", "carYear": "A partir de 2014", "brandLogo": "fiat", "carImage": "sheet_153" },
{ "carModel": "Novo Palio", "carManufacturer": "Fiat", "carYear": "A partir de 2014", "brandLogo": "fiat", "carImage": "sheet_155" },
{ "carModel": "Novo Uno", "carManufacturer": "Fiat", "carYear": "A partir de 2014", "brandLogo": "fiat", "carImage": "sheet_156" },
{ "carModel": "Palio", "carManufacturer": "Fiat", "carYear": "A partir de 2014", "brandLogo": "fiat", "carImage": "sheet_158" },
{ "carModel": "Palio Weekend", "carManufacturer": "Fiat", "carYear": "A partir de 2014", "brandLogo": "fiat", "carImage": "sheet_157" },
{ "carModel": "Punto", "carManufacturer": "Fiat", "carYear": "A partir de 2014", "brandLogo": "fiat", "carImage": "sheet_159" },
{ "carModel": "Siena", "carManufacturer": "Fiat", "carYear": "A partir de 2014", "brandLogo": "fiat", "carImage": "sheet_161" },
{ "carModel": "Siena Tetrafuel GNV", "carManufacturer": "Fiat", "carYear": "A partir de 2014", "brandLogo": "fiat", "carImage": "sheet_160" },
{ "carModel": "Stilo", "carManufacturer": "Fiat", "carYear": "A partir de 2014", "brandLogo": "fiat", "carImage": "sheet_162" },
{ "carModel": "Strada Cabine Dupla", "carManufacturer": "Fiat", "carYear": "A partir de 2014", "brandLogo": "fiat", "carImage": "sheet_163" },
{ "carModel": "Strada Cabine Estendida", "carManufacturer": "Fiat", "carYear": "A partir de 2014", "brandLogo": "fiat", "carImage": "sheet_164" },
{ "carModel": "Strada Cabine Simples", "carManufacturer": "Fiat", "carYear": "A partir de 2014", "brandLogo": "fiat", "carImage": "sheet_165" },
{ "carModel": "Uno Mille", "carManufacturer": "Fiat", "carYear": "A partir de 2014", "brandLogo": "fiat", "carImage": "sheet_154" },
{ "carModel": "Courier", "carManufacturer": "Ford", "carYear": "1997 a 2013", "brandLogo": "ford", "carImage": "sheet_74" },
{ "carModel": "EcoSport", "carManufacturer": "Ford", "carYear": "2009 a 2012", "brandLogo": "ford", "carImage": "sheet_75" },
{ "carModel": "Edge", "carManufacturer": "Ford", "carYear": "2009 a 2010", "brandLogo": "ford", "carImage": "sheet_76" },
{ "carModel": "Edge", "carManufacturer": "Ford", "carYear": "A partir de 2010", "brandLogo": "ford", "carImage": "sheet_77" },
{ "carModel": "Fiesta RoCam Hatch", "carManufacturer": "Ford", "carYear": "A partir de 2010", "brandLogo": "ford", "carImage": "sheet_78" },
{ "carModel": "Fiesta RoCam Sedan", "carManufacturer": "Ford", "carYear": "A partir de 2010", "brandLogo": "ford", "carImage": "sheet_79" },
{ "carModel": "Focus Hatch", "carManufacturer": "Ford", "carYear": "2000 a 2009", "brandLogo": "ford", "carImage": "sheet_80" },
{ "carModel": "Focus Hatch", "carManufacturer": "Ford", "carYear": "2008 a 2013", "brandLogo": "ford", "carImage": "sheet_81" },
{ "carModel": "Focus Sedan", "carManufacturer": "Ford", "carYear": "2000 a 2009", "brandLogo": "ford", "carImage": "sheet_82" },
{ "carModel": "Focus Sedan", "carManufacturer": "Ford", "carYear": "2008 a 2013", "brandLogo": "ford", "carImage": "sheet_83" },
{ "carModel": "Fusion", "carManufacturer": "Ford", "carYear": "2006 a 2012", "brandLogo": "ford", "carImage": "sheet_84" },
{ "carModel": "Fusion", "carManufacturer": "Ford", "carYear": "A partir de 2012", "brandLogo": "ford", "carImage": "sheet_85" },
{ "carModel": "Fusion Flex", "carManufacturer": "Ford", "carYear": "A partir de 2012", "brandLogo": "ford", "carImage": "sheet_86" },
{ "carModel": "Fusion Hybrid", "carManufacturer": "Ford", "carYear": "2006 a 2012", "brandLogo": "ford", "carImage": "sheet_87" },
{ "carModel": "Fusion Hybrid", "carManufacturer": "Ford", "carYear": "A partir de 2013", "brandLogo": "ford", "carImage": "sheet_88" },
{ "carModel": "Ka", "carManufacturer": "Ford", "carYear": "1997 a 2007", "brandLogo": "ford", "carImage": "sheet_89" },
{ "carModel": "Ka+", "carManufacturer": "Ford", "carYear": "A partir de 2014", "brandLogo": "ford", "carImage": "sheet_90" },
{ "carModel": "New Fiesta Hatch", "carManufacturer": "Ford", "carYear": "2011 a 2013", "brandLogo": "ford", "carImage": "sheet_92" },
{ "carModel": "New Fiesta Hatch", "carManufacturer": "Ford", "carYear": "A partir de 2013", "brandLogo": "ford", "carImage": "sheet_93" },
{ "carModel": "New Fiesta Sedan", "carManufacturer": "Ford", "carYear": "2010 a 2013", "brandLogo": "ford", "carImage": "sheet_94" },
{ "carModel": "New Fiesta Sedan", "carManufacturer": "Ford", "carYear": "A partir de 2013", "brandLogo": "ford", "carImage": "sheet_95" },
{ "carModel": "Novo EcoSport", "carManufacturer": "Ford", "carYear": "A partir de 2012", "brandLogo": "ford", "carImage": "sheet_96" },
{ "carModel": "Novo Focus Hatch", "carManufacturer": "Ford", "carYear": "A partir de 2013", "brandLogo": "ford", "carImage": "sheet_97" },
{ "carModel": "Novo Focus Sedan", "carManufacturer": "Ford", "carYear": "A partir de 2013", "brandLogo": "ford", "carImage": "sheet_98" },
{ "carModel": "Novo Ka", "carManufacturer": "Ford", "carYear": "2008 a 2013", "brandLogo": "ford", "carImage": "sheet_99" },
{ "carModel": "Novo Ka", "carManufacturer": "Ford", "carYear": "A partir de 2014", "brandLogo": "ford", "carImage": "sheet_100" },
{ "carModel": "Ranger Cabine Dupla", "carManufacturer": "Ford", "carYear": "2009 a 2012", "brandLogo": "ford", "carImage": "sheet_101" },
{ "carModel": "Ranger Cabine Dupla", "carManufacturer": "Ford", "carYear": "A partir de 2012", "brandLogo": "ford", "carImage": "sheet_102" },
{ "carModel": "Ranger Cabine Simples", "carManufacturer": "Ford", "carYear": "2009 a 2012", "brandLogo": "ford", "carImage": "sheet_103" },
{ "carModel": "Ranger Cabine Simples", "carManufacturer": "Ford", "carYear": "A partir de 2012", "brandLogo": "ford", "carImage": "sheet_104" },
{ "carModel": "Ranger Flex Cabine Dupla", "carManufacturer": "Ford", "carYear": "A partir de 2012", "brandLogo": "ford", "carImage": "sheet_105" },
{ "carModel": "Ranger Flex Cabine Simples", "carManufacturer": "Ford", "carYear": "A partir de 2012", "brandLogo": "ford", "carImage": "sheet_106" },
{ "carModel": "Ranger Sport Cabine Simples", "carManufacturer": "Ford", "carYear": "2009 a 2012", "brandLogo": "ford", "carImage": "sheet_107" },
{ "carModel": "Transit", "carManufacturer": "Ford", "carYear": "A partir de 2009", "brandLogo": "ford", "carImage": "sheet_108" },
{ "carModel": "Accord", "carManufacturer": "Honda", "carYear": "2003-2007", "brandLogo": "honda", "carImage": "sheet_111" },
{ "carModel": "Accord", "carManufacturer": "Honda", "carYear": "A partir de 2008", "brandLogo": "honda", "carImage": "sheet_112" },
{ "carModel": "City", "carManufacturer": "Honda", "carYear": "A partir de 2009", "brandLogo": "honda", "carImage": "sheet_113" },
{ "carModel": "Civic", "carManufacturer": "Honda", "carYear": "2006 a 2011", "brandLogo": "honda", "carImage": "sheet_114" },
{ "carModel": "Civic", "carManufacturer": "Honda", "carYear": "A partir de 2012", "brandLogo": "honda", "carImage": "sheet_116" },
{ "carModel": "Civic Si", "carManufacturer": "Honda", "carYear": "2006 a 2011", "brandLogo": "honda", "carImage": "sheet_115" },
{ "carModel": "CR-V", "carManufacturer": "Honda", "carYear": "A partir de 2007", "brandLogo": "honda", "carImage": "sheet_117" },
{ "carModel": "Fit", "carManufacturer": "Honda", "carYear": "2003 a 2008", "brandLogo": "honda", "carImage": "sheet_118" },
{ "carModel": "Fit", "carManufacturer": "Honda", "carYear": "A partir de 2009", "brandLogo": "honda", "carImage": "sheet_119" },
{ "carModel": "S-Type", "carManufacturer": "Jaguar", "carYear": "1999 a 2007", "brandLogo": "jaguar", "carImage": "sheet_62" },
{ "carModel": "XF", "carManufacturer": "Jaguar", "carYear": "A partir de 2007", "brandLogo": "jaguar", "carImage": "sheet_65" },
{ "carModel": "XJ", "carManufacturer": "Jaguar", "carYear": "2000 a 2010", "brandLogo": "jaguar", "carImage": "sheet_66" },
{ "carModel": "XJ", "carManufacturer": "Jaguar", "carYear": "A partir de 2010", "brandLogo": "jaguar", "carImage": "sheet_67" },
{ "carModel": "XK Cabriolet", "carManufacturer": "Jaguar", "carYear": "1996 a 2006", "brandLogo": "jaguar", "carImage": "sheet_68" },
{ "carModel": "XK Cabriolet", "carManufacturer": "Jaguar", "carYear": "A partir de 2006", "brandLogo": "jaguar", "carImage": "sheet_69" },
{ "carModel": "XK Coupé", "carManufacturer": "Jaguar", "carYear": "1996 a 2006", "brandLogo": "jaguar", "carImage": "sheet_70" },
{ "carModel": "XK Coupé", "carManufacturer": "Jaguar", "carYear": "A partir de 2006", "brandLogo": "jaguar", "carImage": "sheet_71" },
{ "carModel": "X-Type Estate", "carManufacturer": "Jaguar", "carYear": "2004 a 2009", "brandLogo": "jaguar", "carImage": "sheet_63" },
{ "carModel": "X-Type Saloon", "carManufacturer": "Jaguar", "carYear": "2001 a 2009", "brandLogo": "jaguar", "carImage": "sheet_64" },
{ "carModel": "Cherokee", "carManufacturer": "Jeep", "carYear": "A partir de 2014", "brandLogo": "jeep", "carImage": "sheet_290" },
{ "carModel": "Compass", "carManufacturer": "Jeep", "carYear": "A partir de 2014", "brandLogo": "jeep", "carImage": "sheet_291" },
{ "carModel": "Grand Cherokee", "carManufacturer": "Jeep", "carYear": "A partir de 2014", "brandLogo": "jeep", "carImage": "sheet_292" },
{ "carModel": "Wrangler", "carManufacturer": "Jeep", "carYear": "A partir de 2014", "brandLogo": "jeep", "carImage": "sheet_293" },
{ "carModel": "Wrangler Unlimited", "carManufacturer": "Jeep", "carYear": "A partir de 2014", "brandLogo": "jeep", "carImage": "sheet_294" },
{ "carModel": "Bongo", "carManufacturer": "Kia", "carYear": "A partir de 2014", "brandLogo": "kia", "carImage": "sheet_295" },
{ "carModel": "Cadenza", "carManufacturer": "Kia", "carYear": "A partir de 2014", "brandLogo": "kia", "carImage": "sheet_296" },
{ "carModel": "Carens", "carManufacturer": "Kia", "carYear": "A partir de 2014", "brandLogo": "kia", "carImage": "sheet_297" },
{ "carModel": "Carnival GQ", "carManufacturer": "Kia", "carYear": "A partir de 2014", "brandLogo": "kia", "carImage": "sheet_299" },
{ "carModel": "Carnival VQ", "carManufacturer": "Kia", "carYear": "A partir de 2014", "brandLogo": "kia", "carImage": "sheet_300" },
{ "carModel": "Cerato Koup", "carManufacturer": "Kia", "carYear": "A partir de 2014", "brandLogo": "kia", "carImage": "sheet_301" },
{ "carModel": "Cerato LD", "carManufacturer": "Kia", "carYear": "A partir de 2014", "brandLogo": "kia", "carImage": "sheet_303" },
{ "carModel": "Cerato TD", "carManufacturer": "Kia", "carYear": "A partir de 2014", "brandLogo": "kia", "carImage": "sheet_304" },
{ "carModel": "Picanto SA", "carManufacturer": "Kia", "carYear": "A partir de 2014", "brandLogo": "kia", "carImage": "sheet_305" },
{ "carModel": "Picanto TA", "carManufacturer": "Kia", "carYear": "A partir de 2014", "brandLogo": "kia", "carImage": "sheet_306" },
{ "carModel": "Sorento BL", "carManufacturer": "Kia", "carYear": "A partir de 2014", "brandLogo": "kia", "carImage": "sheet_307" },
{ "carModel": "Sorento XM", "carManufacturer": "Kia", "carYear": "A partir de 2014", "brandLogo": "kia", "carImage": "sheet_308" },
{ "carModel": "Soul AM", "carManufacturer": "Kia", "carYear": "A partir de 2014", "brandLogo": "kia", "carImage": "sheet_309" },
{ "carModel": "Sportage SL", "carManufacturer": "Kia", "carYear": "A partir de 2014", "brandLogo": "kia", "carImage": "sheet_310" },
{ "carModel": "Discovery", "carManufacturer": "Land Rover", "carYear": "1998 a 2004", "brandLogo": "land rover", "carImage": "sheet_332" },
{ "carModel": "Discovery", "carManufacturer": "Land Rover", "carYear": "A partir de 2004", "brandLogo": "land rover", "carImage": "sheet_333" },
{ "carModel": "freelander 2 Portas", "carManufacturer": "Land Rover", "carYear": "1998 a 2007", "brandLogo": "land rover", "carImage": "sheet_338" },
{ "carModel": "freelander 4 Portas", "carManufacturer": "Land Rover", "carYear": "A partir de 2007", "brandLogo": "land rover", "carImage": "sheet_340" },
{ "carModel": "Freelander 4 Portas", "carManufacturer": "Land Rover", "carYear": "1998 a 2007", "brandLogo": "land rover", "carImage": "sheet_339" },
{ "carModel": "Range Rover", "carManufacturer": "Land Rover", "carYear": "1994 a 2002", "brandLogo": "land rover", "carImage": "sheet_341" },
{ "carModel": "Range Rover", "carManufacturer": "Land Rover", "carYear": "2002 a 2006", "brandLogo": "land rover", "carImage": "sheet_342" },
{ "carModel": "Range Rover", "carManufacturer": "Land Rover", "carYear": "2006 a 2009", "brandLogo": "land rover", "carImage": "sheet_343" },
{ "carModel": "Range Rover", "carManufacturer": "Land Rover", "carYear": "A partir de 2009", "brandLogo": "land rover", "carImage": "sheet_344" },
{ "carModel": "Range Rover Evoque 2 Portas", "carManufacturer": "Land Rover", "carYear": "A partir de 2011", "brandLogo": "land rover", "carImage": "sheet_336" },
{ "carModel": "Range Rover Evoque 4 Portas", "carManufacturer": "Land Rover", "carYear": "A partir de 2011", "brandLogo": "land rover", "carImage": "sheet_335" },
{ "carModel": "Range Rover Sport", "carManufacturer": "Land Rover", "carYear": "A partir de 2005", "brandLogo": "land rover", "carImage": "sheet_345" },
{ "carModel": "Cabriolet Classe CLK, tipo 208", "carManufacturer": "Mercedes-Benz", "carYear": "1997 a 2002", "brandLogo": "mercedes-benz", "carImage": "sheet_188" },
{ "carModel": "Cabriolet Classe CLK, tipo 209", "carManufacturer": "Mercedes-Benz", "carYear": "2003 a 2009", "brandLogo": "mercedes-benz", "carImage": "sheet_189" },
{ "carModel": "Cabriolet Classe E, tipo 124", "carManufacturer": "Mercedes-Benz", "carYear": "1987 a 1997", "brandLogo": "mercedes-benz", "carImage": "sheet_190" },
{ "carModel": "Cabriolet Classe E, tipo 207", "carManufacturer": "Mercedes-Benz", "carYear": "2010 a 2012", "brandLogo": "mercedes-benz", "carImage": "sheet_191" },
{ "carModel": "Cabriolet Classe E, tipo 207 modelo do ano 2014", "carManufacturer": "Mercedes-Benz", "carYear": "A partir de 2013", "brandLogo": "mercedes-benz", "carImage": "sheet_192" },
{ "carModel": "Coupé Classe A, tipo 169", "carManufacturer": "Mercedes-Benz", "carYear": "2004 a 2012", "brandLogo": "mercedes-benz", "carImage": "sheet_193" },
{ "carModel": "Coupé Classe C, tipo 204", "carManufacturer": "Mercedes-Benz", "carYear": "A partir de 2011", "brandLogo": "mercedes-benz", "carImage": "sheet_194" },
{ "carModel": "Coupé Classe CL, tipo 215", "carManufacturer": "Mercedes-Benz", "carYear": "1999 a 2006", "brandLogo": "mercedes-benz", "carImage": "sheet_195" },
{ "carModel": "Coupé Classe CLA, tipo 117", "carManufacturer": "Mercedes-Benz", "carYear": "A partir de 2013", "brandLogo": "mercedes-benz", "carImage": "sheet_196" },
{ "carModel": "Coupé Classe CLC, tipo 203", "carManufacturer": "Mercedes-Benz", "carYear": "A partir de 2008", "brandLogo": "mercedes-benz", "carImage": "sheet_197" },
{ "carModel": "Coupé Classe CLK, tipo 208", "carManufacturer": "Mercedes-Benz", "carYear": "1997 a 2002", "brandLogo": "mercedes-benz", "carImage": "sheet_198" },
{ "carModel": "Coupé Classe CLK, tipo 209", "carManufacturer": "Mercedes-Benz", "carYear": "2002 a 2009", "brandLogo": "mercedes-benz", "carImage": "sheet_199" },
{ "carModel": "Coupé Classe CLS, tipo 218", "carManufacturer": "Mercedes-Benz", "carYear": "A partir de 2010", "brandLogo": "mercedes-benz", "carImage": "sheet_200" },
{ "carModel": "Coupé Classe CLS, tipo 219", "carManufacturer": "Mercedes-Benz", "carYear": "2004 a 2009", "brandLogo": "mercedes-benz", "carImage": "sheet_201" },
{ "carModel": "Coupé Classe E, tipo 123", "carManufacturer": "Mercedes-Benz", "carYear": "1977 a 1985", "brandLogo": "mercedes-benz", "carImage": "sheet_202" },
{ "carModel": "Coupé Classe E, tipo 124", "carManufacturer": "Mercedes-Benz", "carYear": "1987 a 1997", "brandLogo": "mercedes-benz", "carImage": "sheet_204" },
{ "carModel": "Coupé Classe E, tipo 207", "carManufacturer": "Mercedes-Benz", "carYear": "2009 a 2012", "brandLogo": "mercedes-benz", "carImage": "sheet_205" },
{ "carModel": "Coupé Classe E, tipo 207 modelo do ano 2014", "carManufacturer": "Mercedes-Benz", "carYear": "A partir de 2013", "brandLogo": "mercedes-benz", "carImage": "sheet_206" },
{ "carModel": "Coupé Classe S, tipo 126", "carManufacturer": "Mercedes-Benz", "carYear": "1981 a 1991", "brandLogo": "mercedes-benz", "carImage": "sheet_207" },
{ "carModel": "Coupé Classe S, tipo 140", "carManufacturer": "Mercedes-Benz", "carYear": "1992 a 1998", "brandLogo": "mercedes-benz", "carImage": "sheet_211" },
{ "carModel": "Coupé Classe SLC, tipo 107", "carManufacturer": "Mercedes-Benz", "carYear": "1971 a 1989", "brandLogo": "mercedes-benz", "carImage": "sheet_212" },
{ "carModel": "Modelo T Classe C, tipo 202", "carManufacturer": "Mercedes-Benz", "carYear": "1996 a 2001", "brandLogo": "mercedes-benz", "carImage": "sheet_213" },
{ "carModel": "Modelo T Classe C, tipo 203", "carManufacturer": "Mercedes-Benz", "carYear": "2001 a 2007", "brandLogo": "mercedes-benz", "carImage": "sheet_214" },
{ "carModel": "Modelo T Classe C, tipo 204", "carManufacturer": "Mercedes-Benz", "carYear": "A partir de 2007", "brandLogo": "mercedes-benz", "carImage": "sheet_215" },
{ "carModel": "Modelo T Classe E, tipo 123", "carManufacturer": "Mercedes-Benz", "carYear": "1977 a 1986", "brandLogo": "mercedes-benz", "carImage": "sheet_216" },
{ "carModel": "Modelo T Classe E, tipo 124", "carManufacturer": "Mercedes-Benz", "carYear": "1984 a 1996", "brandLogo": "mercedes-benz", "carImage": "sheet_217" },
{ "carModel": "Modelo T Classe E, tipo 210", "carManufacturer": "Mercedes-Benz", "carYear": "1996 a 2003", "brandLogo": "mercedes-benz", "carImage": "sheet_218" },
{ "carModel": "Modelo T Classe E, tipo 211", "carManufacturer": "Mercedes-Benz", "carYear": "2003 a 2009", "brandLogo": "mercedes-benz", "carImage": "sheet_219" },
{ "carModel": "Modelo T Classe E, tipo 212", "carManufacturer": "Mercedes-Benz", "carYear": "2009 a 2012", "brandLogo": "mercedes-benz", "carImage": "sheet_220" },
{ "carModel": "Modelo T Classe E, tipo 212 modelo do ano 2014", "carManufacturer": "Mercedes-Benz", "carYear": "A partir de 2013", "brandLogo": "mercedes-benz", "carImage": "sheet_222" },
{ "carModel": "Roadster Classe SL, tipo 107", "carManufacturer": "Mercedes-Benz", "carYear": "1971 a 1989", "brandLogo": "mercedes-benz", "carImage": "sheet_223" },
{ "carModel": "Roadster Classe SL, tipo 129", "carManufacturer": "Mercedes-Benz", "carYear": "1989 a 2001", "brandLogo": "mercedes-benz", "carImage": "sheet_224" },
{ "carModel": "Roadster Classe SL, tipo 230", "carManufacturer": "Mercedes-Benz", "carYear": "2001 a 2011", "brandLogo": "mercedes-benz", "carImage": "sheet_225" },
{ "carModel": "Roadster Classe SL, tipo 231", "carManufacturer": "Mercedes-Benz", "carYear": "A partir de 2012", "brandLogo": "mercedes-benz", "carImage": "sheet_226" },
{ "carModel": "Roadster Classe SLK, tipo 170", "carManufacturer": "Mercedes-Benz", "carYear": "1996 a 2004", "brandLogo": "mercedes-benz", "carImage": "sheet_227" },
{ "carModel": "Roadster Classe SLK, tipo 171", "carManufacturer": "Mercedes-Benz", "carYear": "2004 a 2011", "brandLogo": "mercedes-benz", "carImage": "sheet_228" },
{ "carModel": "Roadster Classe SLK, tipo 172", "carManufacturer": "Mercedes-Benz", "carYear": "A partir de 2011", "brandLogo": "mercedes-benz", "carImage": "sheet_229" },
{ "carModel": "Roadster SLS AMG, tipo 197", "carManufacturer": "Mercedes-Benz", "carYear": "A partir de 2011", "brandLogo": "mercedes-benz", "carImage": "sheet_230" },
{ "carModel": "Sedan 190, tipo 201", "carManufacturer": "Mercedes-Benz", "carYear": "1982 a 1993", "brandLogo": "mercedes-benz", "carImage": "sheet_231" },
{ "carModel": "Sedan Classe A, tipo 168", "carManufacturer": "Mercedes-Benz", "carYear": "1997 a 2004", "brandLogo": "mercedes-benz", "carImage": "sheet_232" },
{ "carModel": "Sedan Classe A, tipo 169", "carManufacturer": "Mercedes-Benz", "carYear": "2004 a 2012", "brandLogo": "mercedes-benz", "carImage": "sheet_233" },
{ "carModel": "Sedan Classe A, tipo 176", "carManufacturer": "Mercedes-Benz", "carYear": "A partir de 2013", "brandLogo": "mercedes-benz", "carImage": "sheet_234" },
{ "carModel": "Sedan Classe C, tipo 202", "carManufacturer": "Mercedes-Benz", "carYear": "1993 a 2001", "brandLogo": "mercedes-benz", "carImage": "sheet_235" },
{ "carModel": "Sedan Classe C, tipo 203", "carManufacturer": "Mercedes-Benz", "carYear": "2000 a 2007", "brandLogo": "mercedes-benz", "carImage": "sheet_236" },
{ "carModel": "Sedan Classe C, tipo 204", "carManufacturer": "Mercedes-Benz", "carYear": "A partir de 2007", "brandLogo": "mercedes-benz", "carImage": "sheet_237" },
{ "carModel": "Sedan Classe E, tipo 123", "carManufacturer": "Mercedes-Benz", "carYear": "1975 a 1986", "brandLogo": "mercedes-benz", "carImage": "sheet_238" },
{ "carModel": "Sedan Classe E, tipo 124", "carManufacturer": "Mercedes-Benz", "carYear": "1984 a 1995", "brandLogo": "mercedes-benz", "carImage": "sheet_239" },
{ "carModel": "Sedan Classe E, tipo 210", "carManufacturer": "Mercedes-Benz", "carYear": "1995 a 2002", "brandLogo": "mercedes-benz", "carImage": "sheet_240" },
{ "carModel": "Sedan Classe E, tipo 211", "carManufacturer": "Mercedes-Benz", "carYear": "2002 a 2009", "brandLogo": "mercedes-benz", "carImage": "sheet_241" },
{ "carModel": "Sedan Classe E, tipo 212", "carManufacturer": "Mercedes-Benz", "carYear": "2009 a 2012", "brandLogo": "mercedes-benz", "carImage": "sheet_242" },
{ "carModel": "Sedan Classe S HYBRID, tipo 221", "carManufacturer": "Mercedes-Benz", "carYear": "2009 a 2013", "brandLogo": "mercedes-benz", "carImage": "sheet_243" },
{ "carModel": "Sedan Classe S HYBRID, tipo 222", "carManufacturer": "Mercedes-Benz", "carYear": "A partir de 2013", "brandLogo": "mercedes-benz", "carImage": "sheet_244" },
{ "carModel": "Sedan Classe S Pullman, tipo 140", "carManufacturer": "Mercedes-Benz", "carYear": "1996 a 2000", "brandLogo": "mercedes-benz", "carImage": "sheet_245" },
{ "carModel": "Sedan Classe S Pullman, tipo 220", "carManufacturer": "Mercedes-Benz", "carYear": "2000 a 2005", "brandLogo": "mercedes-benz", "carImage": "sheet_246" },
{ "carModel": "Sedan Classe S, tipo 116", "carManufacturer": "Mercedes-Benz", "carYear": "1972 a 1980", "brandLogo": "mercedes-benz", "carImage": "sheet_247" },
{ "carModel": "Sedan Classe S, tipo 126", "carManufacturer": "Mercedes-Benz", "carYear": "1979 a 1991", "brandLogo": "mercedes-benz", "carImage": "sheet_248" },
{ "carModel": "Sedan Classe S, tipo 220", "carManufacturer": "Mercedes-Benz", "carYear": "1998 a 2005", "brandLogo": "mercedes-benz", "carImage": "sheet_249" },
{ "carModel": "Sedan Classe S, tipo 221", "carManufacturer": "Mercedes-Benz", "carYear": "2005 a 2013", "brandLogo": "mercedes-benz", "carImage": "sheet_250" },
{ "carModel": "Sedan Classe S, tipo 222", "carManufacturer": "Mercedes-Benz", "carYear": "A partir de 2013", "brandLogo": "mercedes-benz", "carImage": "sheet_252" },
{ "carModel": "Shooting Brake Classe CLS, tipo 218", "carManufacturer": "Mercedes-Benz", "carYear": "A partir de 2012", "brandLogo": "mercedes-benz", "carImage": "sheet_253" },
{ "carModel": "SLR McLaren, tipo 199", "carManufacturer": "Mercedes-Benz", "carYear": "2004 a 2009", "brandLogo": "mercedes-benz", "carImage": "sheet_254" },
{ "carModel": "SLS AMG, tipo 197", "carManufacturer": "Mercedes-Benz", "carYear": "A partir de 2010", "brandLogo": "mercedes-benz", "carImage": "sheet_255" },
{ "carModel": "smart forfour, tipo 454", "carManufacturer": "Mercedes-Benz", "carYear": "2004 a 2006", "brandLogo": "mercedes-benz", "carImage": "sheet_256" },
{ "carModel": "smart fortwo cabrio electric drive, tipo 451", "carManufacturer": "Mercedes-Benz", "carYear": "2009 a 2012", "brandLogo": "mercedes-benz", "carImage": "sheet_257" },
{ "carModel": "smart fortwo cabrio electric drive, tipo 451", "carManufacturer": "Mercedes-Benz", "carYear": "A partir de 2012", "brandLogo": "mercedes-benz", "carImage": "sheet_258" },
{ "carModel": "smart fortwo cabrio, tipo 450", "carManufacturer": "Mercedes-Benz", "carYear": "1998 a 2007", "brandLogo": "mercedes-benz", "carImage": "sheet_259" },
{ "carModel": "smart fortwo cabrio, tipo 451", "carManufacturer": "Mercedes-Benz", "carYear": "A partir de 2007", "brandLogo": "mercedes-benz", "carImage": "sheet_260" },
{ "carModel": "smart fortwo coupé electric drive, tipo 451", "carManufacturer": "Mercedes-Benz", "carYear": "2009 a 2012", "brandLogo": "mercedes-benz", "carImage": "sheet_261" },
{ "carModel": "smart fortwo coupé electric drive, tipo 451", "carManufacturer": "Mercedes-Benz", "carYear": "A partir de 2012", "brandLogo": "mercedes-benz", "carImage": "sheet_263" },
{ "carModel": "smart fortwo coupé, tipo 450", "carManufacturer": "Mercedes-Benz", "carYear": "1998 a 2007", "brandLogo": "mercedes-benz", "carImage": "sheet_264" },
{ "carModel": "smart roadster coupé, tipo 452", "carManufacturer": "Mercedes-Benz", "carYear": "2003 a 2005", "brandLogo": "mercedes-benz", "carImage": "sheet_266" },
{ "carModel": "smart roadster, tipo 452", "carManufacturer": "Mercedes-Benz", "carYear": "2003 a 2005", "brandLogo": "mercedes-benz", "carImage": "sheet_267" },
{ "carModel": "Sportcoupé Classe C, tipo 203", "carManufacturer": "Mercedes-Benz", "carYear": "2000 a 2008", "brandLogo": "mercedes-benz", "carImage": "sheet_268" },
{ "carModel": "Tourer Classe B, tipo 246", "carManufacturer": "Mercedes-Benz", "carYear": "A partir de 2011", "brandLogo": "mercedes-benz", "carImage": "sheet_270" },
{ "carModel": "Tourer Classe R, tipo 251", "carManufacturer": "Mercedes-Benz", "carYear": "A partir de 2005", "brandLogo": "mercedes-benz", "carImage": "sheet_271" },
{ "carModel": "Vaneo, tipo 414", "carManufacturer": "Mercedes-Benz", "carYear": "2002 a 2005", "brandLogo": "mercedes-benz", "carImage": "sheet_272" },
{ "carModel": "Veículo ligeiro misto Citan, tipo 415", "carManufacturer": "Mercedes-Benz", "carYear": "A partir de 2012", "brandLogo": "mercedes-benz", "carImage": "sheet_273" },
{ "carModel": "Veículo todo terreno Classe G, tipo 463", "carManufacturer": "Mercedes-Benz", "carYear": "A partir de 1990", "brandLogo": "mercedes-benz", "carImage": "sheet_274" },
{ "carModel": "Veículo todo terreno Classe GL, tipo 164", "carManufacturer": "Mercedes-Benz", "carYear": "2006 a 2012", "brandLogo": "mercedes-benz", "carImage": "sheet_275" },
{ "carModel": "Veículo todo terreno Classe GL, tipo 166", "carManufacturer": "Mercedes-Benz", "carYear": "A partir de 2012", "brandLogo": "mercedes-benz", "carImage": "sheet_276" },
{ "carModel": "Veículo todo terreno Classe GLK, tipo 204", "carManufacturer": "Mercedes-Benz", "carYear": "A partir de 2008", "brandLogo": "mercedes-benz", "carImage": "sheet_277" },
{ "carModel": "Veículo todo terreno Classe M, tipo 163", "carManufacturer": "Mercedes-Benz", "carYear": "1997 a 2005", "brandLogo": "mercedes-benz", "carImage": "sheet_278" },
{ "carModel": "Veículo todo terreno Classe M, tipo 164", "carManufacturer": "Mercedes-Benz", "carYear": "2005 a 2011", "brandLogo": "mercedes-benz", "carImage": "sheet_279" },
{ "carModel": "Veículo todo terreno Classe M, tipo 166", "carManufacturer": "Mercedes-Benz", "carYear": "A partir de 2011", "brandLogo": "mercedes-benz", "carImage": "sheet_280" },
{ "carModel": "Viano FUN, tipo 639", "carManufacturer": "Mercedes-Benz", "carYear": "A partir de 2003", "brandLogo": "mercedes-benz", "carImage": "sheet_282" },
{ "carModel": "Viano/Vito, tipo 639", "carManufacturer": "Mercedes-Benz", "carYear": "A partir de 2003", "brandLogo": "mercedes-benz", "carImage": "sheet_284" },
{ "carModel": "Vito Classe V, tipo 638", "carManufacturer": "Mercedes-Benz", "carYear": "1996 a 2003", "brandLogo": "mercedes-benz", "carImage": "sheet_285" },
{ "carModel": "ASW AWD", "carManufacturer": "Mitsubishi", "carYear": "A partir de 2014", "brandLogo": "mitsubishi", "carImage": "sheet_322" },
{ "carModel": "ASX", "carManufacturer": "Mitsubishi", "carYear": "A partir de 2014", "brandLogo": "mitsubishi", "carImage": "sheet_321" },
{ "carModel": "i-Miev", "carManufacturer": "Mitsubishi", "carYear": "A partir de 2014", "brandLogo": "mitsubishi", "carImage": "sheet_323" },
{ "carModel": "L200 Triton", "carManufacturer": "Mitsubishi", "carYear": "A partir de 2014", "brandLogo": "mitsubishi", "carImage": "sheet_324" },
{ "carModel": "Lancer Evolution X", "carManufacturer": "Mitsubishi", "carYear": "A partir de 2014", "brandLogo": "mitsubishi", "carImage": "sheet_325" },
{ "carModel": "Lancer SportBack Ralliart", "carManufacturer": "Mitsubishi", "carYear": "A partir de 2014", "brandLogo": "mitsubishi", "carImage": "sheet_326" },
{ "carModel": "Outlander", "carManufacturer": "Mitsubishi", "carYear": "A partir de 2014", "brandLogo": "mitsubishi", "carImage": "sheet_327" },
{ "carModel": "Pajero Dakar", "carManufacturer": "Mitsubishi", "carYear": "A partir de 2014", "brandLogo": "mitsubishi", "carImage": "sheet_328" },
{ "carModel": "Pajero Full", "carManufacturer": "Mitsubishi", "carYear": "A partir de 2014", "brandLogo": "mitsubishi", "carImage": "sheet_329" },
{ "carModel": "Pajero Full 3D", "carManufacturer": "Mitsubishi", "carYear": "A partir de 2014", "brandLogo": "mitsubishi", "carImage": "sheet_330" },
{ "carModel": "Pajero TR4 Flex", "carManufacturer": "Mitsubishi", "carYear": "A partir de 2014", "brandLogo": "mitsubishi", "carImage": "sheet_331" },
{ "carModel": "smart fortwo coupé, tipo 451", "carManufacturer": "Mitsubishi", "carYear": "A partir de 2007", "brandLogo": "mitsubishi", "carImage": "sheet_265" },
{ "carModel": "Tourer Classe B, tipo 245", "carManufacturer": "Mitsubishi", "carYear": "2005 a 2011", "brandLogo": "mitsubishi", "carImage": "sheet_269" },
{ "carModel": "Frontier Cabine Dupla", "carManufacturer": "Nissan", "carYear": "A partir de 2014", "brandLogo": "nissan", "carImage": "sheet_180" },
{ "carModel": "Grand Livina", "carManufacturer": "Nissan", "carYear": "A partir de 2014", "brandLogo": "nissan", "carImage": "sheet_181" },
{ "carModel": "Livina", "carManufacturer": "Nissan", "carYear": "A partir de 2014", "brandLogo": "nissan", "carImage": "sheet_182" },
{ "carModel": "Livina X-Gear", "carManufacturer": "Nissan", "carYear": "A partir de 2014", "brandLogo": "nissan", "carImage": "sheet_183" },
{ "carModel": "March", "carManufacturer": "Nissan", "carYear": "A partir de 2014", "brandLogo": "nissan", "carImage": "sheet_184" },
{ "carModel": "Sentra", "carManufacturer": "Nissan", "carYear": "A partir de 2014", "brandLogo": "nissan", "carImage": "sheet_185" },
{ "carModel": "Tiida Hatch", "carManufacturer": "Nissan", "carYear": "A partir de 2014", "brandLogo": "nissan", "carImage": "sheet_186" },
{ "carModel": "Versa", "carManufacturer": "Nissan", "carYear": "A partir de 2014", "brandLogo": "nissan", "carImage": "sheet_187" },
{ "carModel": "207", "carManufacturer": "Peugeot", "carYear": "A partir de 2014", "brandLogo": "peugeot", "carImage": "sheet_169" },
{ "carModel": "207 SW", "carManufacturer": "Peugeot", "carYear": "A partir de 2014", "brandLogo": "peugeot", "carImage": "sheet_170" },
{ "carModel": "3008", "carManufacturer": "Peugeot", "carYear": "A partir de 2014", "brandLogo": "peugeot", "carImage": "sheet_171" },
{ "carModel": "Partner", "carManufacturer": "Peugeot", "carYear": "A partir de 2014", "brandLogo": "peugeot", "carImage": "sheet_172" },
{ "carModel": "RCZ", "carManufacturer": "Peugeot", "carYear": "A partir de 2014", "brandLogo": "peugeot", "carImage": "sheet_173" },
{ "carModel": "2500", "carManufacturer": "Ram", "carYear": "A partir de 2014", "brandLogo": "ram", "carImage": "sheet_281" },
{ "carModel": "Clio", "carManufacturer": "Renault", "carYear": "A partir de 2012", "brandLogo": "renault", "carImage": "sheet_314" },
{ "carModel": "Duster", "carManufacturer": "Renault", "carYear": "A partir de 2012", "brandLogo": "renault", "carImage": "sheet_315" },
{ "carModel": "Fluence", "carManufacturer": "Renault", "carYear": "A partir de 2012", "brandLogo": "renault", "carImage": "sheet_317" },
{ "carModel": "Kangoo Express", "carManufacturer": "Renault", "carYear": "A partir de 2012", "brandLogo": "renault", "carImage": "sheet_318" },
{ "carModel": "Logan", "carManufacturer": "Renault", "carYear": "A partir de 2013", "brandLogo": "renault", "carImage": "sheet_109" },
{ "carModel": "Logan", "carManufacturer": "Renault", "carYear": "A partir de 2012", "brandLogo": "renault", "carImage": "sheet_319" },
{ "carModel": "Sandero", "carManufacturer": "Renault", "carYear": "A partir de 2014", "brandLogo": "renault", "carImage": "sheet_110" },
{ "carModel": "Sandero", "carManufacturer": "Renault", "carYear": "A partir de 2012", "brandLogo": "renault", "carImage": "sheet_320" },
{ "carModel": "Actyon", "carManufacturer": "SsangYong", "carYear": "A partir de 2014", "brandLogo": "ssangyong", "carImage": "sheet_203" },
{ "carModel": "Actyon Sports", "carManufacturer": "SsangYong", "carYear": "A partir de 2014", "brandLogo": "ssangyong", "carImage": "sheet_208" },
{ "carModel": "Korando", "carManufacturer": "SsangYong", "carYear": "A partir de 2014", "brandLogo": "ssangyong", "carImage": "sheet_209" },
{ "carModel": "Rexton", "carManufacturer": "SsangYong", "carYear": "A partir de 2014", "brandLogo": "ssangyong", "carImage": "sheet_210" },
{ "carModel": "Grand Vitara", "carManufacturer": "Suzuki", "carYear": "A partir de 2014", "brandLogo": "suzuki", "carImage": "sheet_166" },
{ "carModel": "Jimny", "carManufacturer": "Suzuki", "carYear": "A partir de 2014", "brandLogo": "suzuki", "carImage": "sheet_167" },
{ "carModel": "SX4 AWD", "carManufacturer": "Suzuki", "carYear": "A partir de 2014", "brandLogo": "suzuki", "carImage": "sheet_168" },
{ "carModel": "Corolla", "carManufacturer": "Toyota", "carYear": "A partir de 2014", "brandLogo": "toyota", "carImage": "sheet_120" },
{ "carModel": "Etios Cross", "carManufacturer": "Toyota", "carYear": "A partir de 2014", "brandLogo": "toyota", "carImage": "sheet_121" },
{ "carModel": "Etios HB", "carManufacturer": "Toyota", "carYear": "A partir de 2014", "brandLogo": "toyota", "carImage": "sheet_122" },
{ "carModel": "Etios SD", "carManufacturer": "Toyota", "carYear": "A partir de 2014", "brandLogo": "toyota", "carImage": "sheet_123" },
{ "carModel": "Prius", "carManufacturer": "Toyota", "carYear": "A partir de 2014", "brandLogo": "toyota", "carImage": "sheet_221" },
{ "carModel": "RAV4", "carManufacturer": "Toyota", "carYear": "A partir de 2014", "brandLogo": "toyota", "carImage": "sheet_124" },
{ "carModel": "Amarok Cabine Dupla", "carManufacturer": "Volkswagen", "carYear": "A partir de 2011", "brandLogo": "volkswagen", "carImage": "sheet_6" },
{ "carModel": "Amarok Cabine Simples", "carManufacturer": "Volkswagen", "carYear": "A partir de 2011", "brandLogo": "volkswagen", "carImage": "sheet_7" },
{ "carModel": "CrossFox", "carManufacturer": "Volkswagen", "carYear": "A partir de 2011", "brandLogo": "volkswagen", "carImage": "sheet_8" },
{ "carModel": "Fox 2 Portas", "carManufacturer": "Volkswagen", "carYear": "A partir de 2011", "brandLogo": "volkswagen", "carImage": "sheet_9" },
{ "carModel": "Fox 4 Portas", "carManufacturer": "Volkswagen", "carYear": "A partir de 2011", "brandLogo": "volkswagen", "carImage": "sheet_10" },
{ "carModel": "Gol G4 2 Portas", "carManufacturer": "Volkswagen", "carYear": "A partir de 2011", "brandLogo": "volkswagen", "carImage": "sheet_11" },
{ "carModel": "Gol G4 4 Portas", "carManufacturer": "Volkswagen", "carYear": "A partir de 2011", "brandLogo": "volkswagen", "carImage": "sheet_12" },
{ "carModel": "Gol G5", "carManufacturer": "Volkswagen", "carYear": "A partir de 2011", "brandLogo": "volkswagen", "carImage": "sheet_13" },
{ "carModel": "Golf", "carManufacturer": "Volkswagen", "carYear": "A partir de 2011", "brandLogo": "volkswagen", "carImage": "sheet_14" },
{ "carModel": "Golf A7", "carManufacturer": "Volkswagen", "carYear": "A partir de 2013", "brandLogo": "volkswagen", "carImage": "sheet_15" },
{ "carModel": "Jetta", "carManufacturer": "Volkswagen", "carYear": "A partir de 2011", "brandLogo": "volkswagen", "carImage": "sheet_16" },
{ "carModel": "Jetta Variant", "carManufacturer": "Volkswagen", "carYear": "A partir de 2011", "brandLogo": "volkswagen", "carImage": "sheet_17" },
{ "carModel": "Kombi", "carManufacturer": "Volkswagen", "carYear": "A partir de 2011", "brandLogo": "volkswagen", "carImage": "sheet_18" },
{ "carModel": "Nova Saveiro Cabine Dupla", "carManufacturer": "Volkswagen", "carYear": "A partir de 2014", "brandLogo": "volkswagen", "carImage": "sheet_19" },
{ "carModel": "Nova Saveiro Cabine Estendida", "carManufacturer": "Volkswagen", "carYear": "A partir de 2013", "brandLogo": "volkswagen", "carImage": "sheet_20" },
{ "carModel": "Nova Saveiro Cabine Simples", "carManufacturer": "Volkswagen", "carYear": "A partir de 2013", "brandLogo": "volkswagen", "carImage": "sheet_21" },
{ "carModel": "Novo Fox", "carManufacturer": "Volkswagen", "carYear": "A partir de 2014", "brandLogo": "volkswagen", "carImage": "sheet_22" },
{ "carModel": "Novo Fusca", "carManufacturer": "Volkswagen", "carYear": "A partir de 2013", "brandLogo": "volkswagen", "carImage": "sheet_23" },
{ "carModel": "Novo Gol 2 Portas", "carManufacturer": "Volkswagen", "carYear": "A partir de 2012", "brandLogo": "volkswagen", "carImage": "sheet_24" },
{ "carModel": "Novo Gol 4 Portas", "carManufacturer": "Volkswagen", "carYear": "A partir de 2012", "brandLogo": "volkswagen", "carImage": "sheet_25" },
{ "carModel": "Novo Voyage", "carManufacturer": "Volkswagen", "carYear": "A partir de 2012", "brandLogo": "volkswagen", "carImage": "sheet_26" },
{ "carModel": "Parati", "carManufacturer": "Volkswagen", "carYear": "A partir de 2011", "brandLogo": "volkswagen", "carImage": "sheet_27" },
{ "carModel": "Passat", "carManufacturer": "Volkswagen", "carYear": "A partir de 2011", "brandLogo": "volkswagen", "carImage": "sheet_28" },
{ "carModel": "Passat CC", "carManufacturer": "Volkswagen", "carYear": "2011 a 2012", "brandLogo": "volkswagen", "carImage": "sheet_29" },
{ "carModel": "Passat Variant B7", "carManufacturer": "Volkswagen", "carYear": "A partir de 2011", "brandLogo": "volkswagen", "carImage": "sheet_30" },
{ "carModel": "Polo", "carManufacturer": "Volkswagen", "carYear": "A partir de 2011", "brandLogo": "volkswagen", "carImage": "sheet_31" },
{ "carModel": "Polo Sedan", "carManufacturer": "Volkswagen", "carYear": "A partir de 2011", "brandLogo": "volkswagen", "carImage": "sheet_32" },
{ "carModel": "Saveiro Cabine Estendida", "carManufacturer": "Volkswagen", "carYear": "A partir de 2011", "brandLogo": "volkswagen", "carImage": "sheet_33" },
{ "carModel": "Saveiro Cabine Simples", "carManufacturer": "Volkswagen", "carYear": "A partir de 2011", "brandLogo": "volkswagen", "carImage": "sheet_34" },
{ "carModel": "SpaceCross", "carManufacturer": "Volkswagen", "carYear": "A partir de 2011", "brandLogo": "volkswagen", "carImage": "sheet_35" },
{ "carModel": "SpaceFox", "carManufacturer": "Volkswagen", "carYear": "A partir de 2011", "brandLogo": "volkswagen", "carImage": "sheet_36" },
{ "carModel": "Tiguan", "carManufacturer": "Volkswagen", "carYear": "A partir de 2011", "brandLogo": "volkswagen", "carImage": "sheet_37" },
{ "carModel": "Touareg", "carManufacturer": "Volkswagen", "carYear": "A partir de 2011", "brandLogo": "volkswagen", "carImage": "sheet_38" },
{ "carModel": "Up 2 Portas", "carManufacturer": "Volkswagen", "carYear": "A partir de 2014", "brandLogo": "volkswagen", "carImage": "sheet_39" },
{ "carModel": "Up 4 Portas", "carManufacturer": "Volkswagen", "carYear": "A partir de 2014", "brandLogo": "volkswagen", "carImage": "sheet_40" },
{ "carModel": "Volkswagen CC", "carManufacturer": "Volkswagen", "carYear": "A partir de 2013", "brandLogo": "volkswagen", "carImage": "sheet_41" },
{ "carModel": "Voyage G5", "carManufacturer": "Volkswagen", "carYear": "A partir de 2011", "brandLogo": "volkswagen", "carImage": "sheet_42" },
{ "carModel": "C30", "carManufacturer": "Volvo", "carYear": "A partir de 2007", "brandLogo": "volvo", "carImage": "sheet_43" },
{ "carModel": "C70 Conversível", "carManufacturer": "Volvo", "carYear": "1998 a 2005", "brandLogo": "volvo", "carImage": "sheet_44" },
{ "carModel": "C70 Conversível", "carManufacturer": "Volvo", "carYear": "A partir de 2006", "brandLogo": "volvo", "carImage": "sheet_45" },
{ "carModel": "C70 Coupê", "carManufacturer": "Volvo", "carYear": "1998 a 2003", "brandLogo": "volvo", "carImage": "sheet_46" },
{ "carModel": "S40", "carManufacturer": "Volvo", "carYear": "1996 a 2004", "brandLogo": "volvo", "carImage": "sheet_47" },
{ "carModel": "S40", "carManufacturer": "Volvo", "carYear": "A partir de 2004", "brandLogo": "volvo", "carImage": "sheet_48" },
{ "carModel": "S60", "carManufacturer": "Volvo", "carYear": "2001 a 2008", "brandLogo": "volvo", "carImage": "sheet_49" },
{ "carModel": "S60", "carManufacturer": "Volvo", "carYear": "A partir de 2011", "brandLogo": "volvo", "carImage": "sheet_50" },
{ "carModel": "S80", "carManufacturer": "Volvo", "carYear": "1996 a 2006", "brandLogo": "volvo", "carImage": "sheet_51" },
{ "carModel": "S80", "carManufacturer": "Volvo", "carYear": "A partir de 2007", "brandLogo": "volvo", "carImage": "sheet_52" },
{ "carModel": "V40", "carManufacturer": "Volvo", "carYear": "1996 a 2004", "brandLogo": "volvo", "carImage": "sheet_53" },
{ "carModel": "V50", "carManufacturer": "Volvo", "carYear": "A partir de 2004", "brandLogo": "volvo", "carImage": "sheet_54" },
{ "carModel": "V60", "carManufacturer": "Volvo", "carYear": "A partir de 2012", "brandLogo": "volvo", "carImage": "sheet_55" },
{ "carModel": "V70", "carManufacturer": "Volvo", "carYear": "2000 a 2007", "brandLogo": "volvo", "carImage": "sheet_56" },
{ "carModel": "V70", "carManufacturer": "Volvo", "carYear": "A partir de 2007", "brandLogo": "volvo", "carImage": "sheet_57" },
{ "carModel": "XC60", "carManufacturer": "Volvo", "carYear": "A partir de 2009", "brandLogo": "volvo", "carImage": "sheet_58" },
{ "carModel": "XC70", "carManufacturer": "Volvo", "carYear": "2000 a 2007", "brandLogo": "volvo", "carImage": "sheet_59" },
{ "carModel": "XC70", "carManufacturer": "Volvo", "carYear": "A partir de 2008", "brandLogo": "volvo", "carImage": "sheet_60" },
{ "carModel": "XC90", "carManufacturer": "Volvo", "carYear": "A partir de 2003", "brandLogo": "volvo", "carImage": "sheet_61" }
];
//END full JSON

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