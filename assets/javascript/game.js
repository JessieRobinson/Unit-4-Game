var flower = {
    flower1: {
        name: "Flower1",
        value: 0
    },
    flower2: {
        name: "Flower2",
        value: 0
    },
    flower3: {
        name: "Flower3",
        value: 0
    },
    flower4: {
        name: "Flower4",
        value: 0
    },
};


var currentScore = 0;
var targetScore = 0;

var winCount =0;
var lossCount =0;

var getRandom = function(min,max) {
    return Math.floor(Math.random() * (max - min +1)) + min;
}

var startGame = function() {
var currentScore = 0;

targetScore = getRandom(19, 120);
flower.flower1.value = getRandom(1,12);
flower.flower2.value = getRandom(1,12);
flower.flower3.value = getRandom(1,12);
flower.flower4.value = getRandom(1,12);

$("#yourScore").html(currentScore);
$("#targetScore").html(targetScore);

}

$("#flower1").click(function()
{
    alert("test");
});

$("#flower2").click(function()
{
    alert("test");
});

$("#flower3").click(function()
{
    alert("test");
});

$("#flower4").click(function()
{
    alert("test");
}); 