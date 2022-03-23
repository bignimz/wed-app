'use strict';

$(document).ready(function(){

    // When the Jewel button is clicked
    $('.jewel-btn').click(function(){
        $('.overlay').toggle();
        $('.cart-modal').slideDown();
    })

    // When overlay is clicked
    $('.overlay').click(function(){
        $('.overlay').toggle('hide');
        $('.cart-modal').toggle('hide');
    })

    // When Gowns modal is clicked
    $('.gowns-btn').click(function(){
        $('.overlay2').toggle();
        $('.gowns-modal').slideDown();
    })

    // When overlay2 is clicked
    $('.overlay2').click(function(){
        $('.overlay2').toggle('hide');
        $('.gowns-modal').toggle('hide');
    })
    
    // FOOTWEAR MODAL
    // When Footwear modal is clicked
    $('.footwear-btn').click(function(){
        $('.overlay3').toggle();
        $('.footwear-modal').slideDown();
    })

    // When overlay2 is clicked
    $('.overlay3').click(function(){
        $('.overlay3').toggle('hide');
        $('.footwear-modal').toggle('hide');
    })


    // When the close modal button is clicked
    $('.close-btn').click(function(){
        $('.overlay').toggle('hide');
        $('.cart-modal').toggle('hide');
    })

     // When the gown close modal button is clicked
     $('.close-gowns').click(function(){
        $('.overlay2').toggle('hide');
        $('.gowns-modal').toggle('hide');
    })

    // When the footwear close modal button is clicked
    $('.close-footwear').click(function(){
        $('.overlay3').toggle('hide');
        $('.footwear-modal').toggle('hide');
    })

    // When the Total Order Button is clicked
    $('.total-order-btn').click(function(){
      $('.overlay').toggle('hide');
      $('.cart-modal').toggle('hide');
    })

    $('.gowns-order-btn').click(function(){
      $('.overlay2').toggle('hide');
      $('.gowns-modal').toggle('hide');
    })

    $('.fw-order-btn').click(function(){
      $('.overlay3').toggle('hide');
      $('.footwear-modal').toggle('hide');
    })

    // When a user clicks on the amount button
    $('.modal-item-btn').click(function(){
        $(this).css('backgroundColor', '#4e854e');
        $(this).text("Added");
        console.log(this);
    })

    
})