/**
 * Created by emerson on 04/01/2017.
 */
$(function(){

    var showResult = function( word, isPalindrome ){
        var result = "<strong class='s'> " + word + " IS A PALINDROME. <span class='glyphicon glyphicon-ok pull-right' aria-hidden='true'></span></strong>";
        if( ! isPalindrome ){
            result = "<strong class='f'> " + word + " <span class='un'>IS NOT</span> A PALINDROME. <span class='glyphicon glyphicon-remove pull-right' aria-hidden='true'></span></>";
        }

        $("#result").html("").append( result )
    };

    $("#word").keyup(function(){
        var aString =  $(this).val();
        var data = {
            "word" : aString
        };
        $.ajax({
            url     : "/api/check",
            data    : data,
            type    : "POST",
            statusCode : {
                400 : function() {
                    showResult(data.word.toUpperCase(), false)
                },
                200 : function(){
                    showResult(data.word.toUpperCase(), true)
                }
            }
        });
    });
});