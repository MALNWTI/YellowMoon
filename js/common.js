//===================================
//======    Menu Desktop    ======
//===================================

// Function fade menu in scroll.
function menuFade() {
    var aboutPosition = $('#about_us').offset().top,
        windowPosition = $(window).scrollTop();
    if(windowPosition >= aboutPosition) {
        $('.moon-menu').fadeIn('fast');
    } else {
        $('.moon-menu').fadeOut('fast');
    }
}

// Cache selectors.
var lastId,
    topMenu = $('.menu-items'),
    topMenuHeight = topMenu.outerHeight();

    // All list items
    menuItems = topMenu.find("a.ancor"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function(){
    var item = $($(this).attr("href"));
    if (item.length) { return item; }
    });

// Bind click handler to menu items
// so we can get a fancy scroll animation
menuItems.click(function(e){
    e.preventDefault();
    var href = $(this).attr("href"),
    offsetTop = href === "#" ? 0 : $(href).offset().top;
    $('html, body').stop().animate({
        scrollTop: offsetTop
    }, 700);
    menuFade();
});

// Bind to scroll
$(window).on('scroll', function(){
menuFade();
// Get container scroll position
var fromTop = $(this).scrollTop()+topMenuHeight+120;

// Get id of current scroll item
var cur = scrollItems.map(function(){
    if ($(this).offset().top < fromTop)
    return this;
});
// Get the id of the current element
cur = cur[cur.length-1];
var id = cur && cur.length ? cur[0].id : "";

if (lastId !== id) {
    lastId = id;
    // Set/remove active class
    menuItems
        .parent().removeClass("active")
        .end().filter("[href='#"+id+"']").parent().addClass("active");
}
});


//===============================
//======       Anchor      ======
//===============================
$('body').on('click','.anchor-btn', function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
    top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 500);
    menuFade();

});

//===============================
//======    validate   ==========
//===============================
function validate(form_id,email,name,phone) {
   var val_adress = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
   var address = document.forms[form_id].elements[email].value;
   var val_telephone = /^0([0-9]{9})$/;
   var telephone = document.forms[form_id].elements[phone].value;
   var val_flname = /^([A-Za-zА-Яа-я]{1,10})$/;
   var flname = document.forms[form_id].elements[name].value;
//=========тут треба підправити валідацію імені
   if(val_flname.test(flname) == false) {
      alert('Введіть корректне ім"`"я');
      return false;
   }
   if(val_adress.test(address) == false) {
      alert('Введіть корректний e-mail');
      return false;
   }
   if(val_telephone.test(telephone) == false) {
      alert('Введіть корректний номер телефону');
      return false;
   }
}

//===============================
//==========   Flip   ===========
//===============================
$('.items-li').hover( function() {
 $(this).find('.obert').addClass('flip')
},
function() {
 $(this).find('.obert').removeClass('flip')
})
