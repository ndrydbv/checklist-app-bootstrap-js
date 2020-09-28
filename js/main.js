// $(document).ready(function () {
//   getItems();
//   getNames();

//   $("#dropbtn").click(function () {
//     $("#myDropdown").toggle();
//   });
// });

// function getNames() {
//   var url = "names.lst";
//   $.get(url, function (data) {
//     var names = data.split("\n");
//     for (var i = 0; i < names.length; i++) {
//       var name = names[i];
//       if (name != "") {
//         $("#myDropdown").append(
//           `<a class="dropiterm" href="" onclick="itemSelect(this)">${name}</a>`
//         );
//       }
//     }
//   });
// }

// function getItems() {
//   var url = "items.lst";
//   $.get(url, function (data) {
//     var items = data.split("\n");
//     for (var i = 0; i < items.length; i++) {
//       var id = randomString();
//       var item = items[i];
//       var box = `
//                   <div class="[ form-group ]">
//                   <input type="checkbox" name="${item}" id="${id}" autocomplete="off" />
//                   <div class="[ btn-group ]">
//                   <label for="${id}" class="[ btn btn-primary ]">
//                   <span class="[ glyphicon glyphicon-ok ]"></span>
//                   <span> </span>
//                   </label>
//                   <label for="${id}" class="[ btn btn-default active ]">
//                   ${item}
//                   </label>
//                   </div>
//                   </div>`;
//       if (item == "") {
//         $("#checks").append("<hr>");
//       } else {
//         $("#checks").append(box);
//       }
//     }
//   });
// }

// function randomString(length) {
//   if (typeof length === "undefined") {
//     length = 10;
//   }
//   var text = "";
//   var possible =
//     "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890";

//   for (var i = 0; i < length; i++)
//     text += possible.charAt(Math.floor(Math.random() * possible.length));

//   return text;
// }

// function itemSelect(e) {
//   $("#myDropdown").toggle();
//   $("#item").val(e.innerHTML);
// }

// function filterFunction() {
//   var input, filter, ul, li, a, i;
//   input = document.getElementById("myInput");
//   filter = input.value.toUpperCase();
//   div = document.getElementById("myDropdown");
//   a = document.getElementsByTagName("a");
//   for (i = 0; i < a.length; i++) {
//     txtValue = a[i].textContent || a[i].innerText;
//     if (txtValue.toUpperCase().indexOf(filter) > -1) {
//       a[i].style.display = "";
//     } else {
//       a[i].style.display = "none";
//     }
//   }
// }



$(document).ready(function(){
  getItems();
  getNames();

  $("#dropbtn").click(function(){
    $("#myDropdown").toggle();
  });
});

function getNames(){
  var url = "names.lst";
  $.get( url, function( data ) {
    var names =  data.split("\n");

    for(var i = 0;i<names.length;i++){
      var name = names[i];
      if(name != ""){
        $("#myDropdown").append(`<a class="dropitem" href="#" onclick="itemSelect(this)">${name}</a>`);
      }
    }
  });
}


function getItems(){
  var url = "items.lst";
  $.get( url, function( data ) {
    var items = data.split("\n");
    for(var i = 0;i<items.length;i++){
      var id = randomString();
      var item = items[i];
      var box = `<div class="[ form-group ]">
      <input type="checkbox" name="${item}" id="${id}" autocomplete="off" />
      <div class="[ btn-group ]">
      <label for="${id}" class="[ btn btn-primary ]">
      <span class="[ glyphicon glyphicon-ok ]"></span>
      <span> </span>
      </label>
      <label for="${id}" class="[ btn btn-default active ]">
      ${item}
      </label>
      </div>
      </div>`

      if( item == ""){
        $("#checks").append('<hr>');
      }else{
        $("#checks").append(box);
      }

    }

  });

}

function randomString(length) {
  if ( typeof length === 'undefined'){length = 10};
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < length; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}


function itemSelect(e){
  $("#myDropdown").toggle();
  $("#item").val(e.innerHTML);
}

function filterFunction() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  div = document.getElementById("myDropdown");
  a = div.getElementsByTagName("a");
  for (i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }
}
