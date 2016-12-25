$.fn.trunc = function (number) {
    var str = $(this).text(); //get full txt from div
    var newStr = str.slice(0,number); // cut string

    $(this).hide(); // hide our div to show cutting txt
    $(this).after(' <p class="added"></p>'); // create <p>
    $('.added').text(newStr); // add cutting string into <p>
    $('.added').append('<span class="ellipsis" style="font-weight: 600">...</span>'); //create span with ellipsis

$('.ellipsis').click(function() { // function which show div
       $(this).parent().hide();
       $('.truncat').css('display', 'block');
    }
);
}