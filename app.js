// adding a new todo
$('input').keypress(function(e){
    if(e.which === 13){
    const todoText = $(this).val();
    // console.log(inputText)

    $('#list').append(`<li> <span><i class="fa-solid fa-trash-can"></i></span> ${todoText} </li>`);  // inputText ko <ul></ul> k andar append kr diya
    
    $(this).val("");  // input field ko blank kr diyyaa

    }

});


// mark as completed
$('#list').on('click' , "li", function(){
    $(this).toggleClass('completed');
})

// delete todo
$('ul').on('click' , 'span' , function(e){
    e.stopPropagation();  //to stop event bubbling
    $(this).parent().fadeOut(600 , function(){
        $(this),remmove();
    })
})



// toggle input
$('#plus').click(function(){
    $('input').fadeToggle(200);
})
