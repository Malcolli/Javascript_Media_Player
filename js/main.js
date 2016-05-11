/**
 * Created by Malcolli on 4/23/15.
 */

/**
 * Created by Malcolli on 5/4/15.
 */

//application-level variables

function MusicApp(){
    this.music;
    this.genreLinkTemplate, this.musicLinkTemplate, this.musicInfoTemplate;

    this.contentDiv, this.musicInfoDiv, this.browserDiv, this.genreDiv;
}

//the application itself
var musicApp = new MusicApp();

//to play a sound
//document.getElementByID
//$("#myAudio")

$(document).ready(function(){

var myAudio = document.getElementById('myAudio');
var isPlaying = false;
var progress = $("#progress");
var scrubber = $("#scrubber");
var snackButton = $("#snack");
    var evilButton = $("#evil");
    var loveButton = $("#love");
    var hopeButton = $("#hope");
    var fiveButton = $("#five");
    var worstButton = $("#worst");
    var aveButton = $("#ave");
    var starButton = $("#star");
    var pantsButton = $("#pants");
    var partyButton = $("#party");
    var oneButton = $("#one");
    var coasterButton = $("#coaster");
    var goodButton = $("#good");
    var worldButton = $("#world");
    var badButton = $("#bad");
    var pleaseButton = $("#please");
    var machineButton = $("#machine");
    var lightButton = $("#light");
    var voyagerButton = $("#voyager");
    var quoButton = $("#quo");
    var strongerButton = $("#stronger");
    var nightButton = $("#night");
    var highButton = $("#high");
    var heroButton = $("#hero");
    var shortButton = $("#short");
    var usButton = $("#us");
    var digitalButton = $("#digital");
    var dynamicButton = $("#dynamic");
    var dancerButton = $("#dancer");
    var nameButton = $("#name");
    var explosiveButton = $("#explosive");


var nowPlaying = $("#nowPlaying");

//make it so the media player will play through ALL these entries
var playList = [ 'src/to/audio', 'src/to/audio'];

setInterval (showProgress, 10);

function showProgress(){
    if(isPlaying){
        //console.log( myAudio.currentTime );
        //console.log( myAudio.duration );


        //number between 0 and 1
        var currentProgress = myAudio.currentTime / myAudio.duration;
        progress.html(myAudio.currentTime.toFixed(2) +"/"+ myAudio.duration.toFixed(2) + "s");
        //set the current progress of the scrubber
        //the val method is a jquery method to get/set the value of an input
        scrubber.val( currentProgress * 100);
    }
}

scrubber.change(function(){
    var percentage = scrubber.val() / 100;
    myAudio.currentTime = percentage * myAudio.duration; //this isn't working
    myAudio.play();
    isPlaying = true;
})

//ended event
myAudio.addEventListener('ended', function(event) {
    isPlaying = false;
    //Sound is over.
})

//hook up play button
$("#playButton").click( function(){
    isPlaying = true;
    myAudio.play();
})

$("#pauseButton").click(function(){
    isPlaying = false;
    myAudio.pause();
})

    snackButton.click(function(){
        //change the sound to be played.
        //first: set the src of the sound
        myAudio.src = "sound/test.mp3";

        //second: actually load the sound
        myAudio.load();

        nowPlaying.html ("Now Playing:- Sound of the Snake -");
    })
    evilButton.click(function(){
        //change the sound to be played.
        //first: set the src of the sound
        myAudio.src = "sound/evil.mp3";

        //second: actually load the sound
        myAudio.load();

        nowPlaying.html ("Now Playing:- Evil Flight -");
    })
    loveButton.click(function(){
        //change the sound to be played.
        //first: set the src of the sound
        myAudio.src = "sound/love.mp3";

        //second: actually load the sound
        myAudio.load();

        nowPlaying.html ("Now Playing:- Varagant of Love -");
    })
    hopeButton.click(function(){
        //change the sound to be played.
        //first: set the src of the sound
        myAudio.src = "sound/hope.mp3";

        //second: actually load the sound
        myAudio.load();

        nowPlaying.html ("Now Playing:- You're my Hope -");
    })
    fiveButton.click(function(){
        //change the sound to be played.
        //first: set the src of the sound
        myAudio.src = "sound/five.mp3";

        //second: actually load the sound
        myAudio.load();

        nowPlaying.html ("Now Playing:- 3005 -");
    })
    worstButton.click(function(){
        //change the sound to be played.
        //first: set the src of the sound
        myAudio.src = "sound/worst.mp3";

        //second: actually load the sound
        myAudio.load();

        nowPlaying.html ("Now Playing:- The Worst Guys -");
    })
    aveButton.click(function(){
        //change the sound to be played.
        //first: set the src of the sound
        myAudio.src = "sound/ave.mp3";

        //second: actually load the sound
        myAudio.load();

        nowPlaying.html ("Now Playing:- Telegraph Ave -");
    })
    starButton.click(function(){
        //change the sound to be played.
        //first: set the src of the sound
        myAudio.src = "sound/star.mp3";

        //second: actually load the sound
        myAudio.load();

        nowPlaying.html ("Now Playing:- WorldStar -");
    })
    pantsButton.click(function(){
        //change the sound to be played.
        //first: set the src of the sound
        myAudio.src = "sound/pants.mp3";

        //second: actually load the sound
        myAudio.load();

        nowPlaying.html ("Now Playing:- SweatPants -");
    })
    partyButton.click(function(){
        //change the sound to be played.
        //first: set the src of the sound
        myAudio.src = "sound/party.mp3";

        //second: actually load the sound
        myAudio.load();

        nowPlaying.html ("Now Playing:- The Party -");
    })
    oneButton.click(function(){
        //change the sound to be played.
        //first: set the src of the sound
        myAudio.src = "sound/one.mp3";

        //second: actually load the sound
        myAudio.load();

        nowPlaying.html ("Now Playing:- One More Time -");
    })
    coasterButton.click(function(){
        //change the sound to be played.
        //first: set the src of the sound
        myAudio.src = "sound/coaster.mp3";

        //second: actually load the sound
        myAudio.load();

        nowPlaying.html ("Now Playing:- RollerCoaster -");
    })
    goodButton.click(function(){
        //change the sound to be played.
        //first: set the src of the sound
        myAudio.src = "sound/good.mp3";

        //second: actually load the sound
        myAudio.load();

        nowPlaying.html ("Now Playing:- I feel Good -");
    })


    worldButton.click(function(){
        //change the sound to be played.
        //first: set the src of the sound
        myAudio.src = "sound/world.mp3";

        //second: actually load the sound
        myAudio.load();

        nowPlaying.html ("Now Playing:- This is a Mans World -");
    })
    badButton.click(function(){
        //change the sound to be played.
        //first: set the src of the sound
        myAudio.src = "sound/bad.mp3";

        //second: actually load the sound
        myAudio.load();

        nowPlaying.html ("Now Playing:- Superbad -");
    })
    pleaseButton.click(function(){
        //change the sound to be played.
        //first: set the src of the sound
        myAudio.src = "sound/please.mp3";

        //second: actually load the sound
        myAudio.load();

        nowPlaying.html ("Now Playing:- Please Please Please -");
    })
    machineButton.click(function(){
        //change the sound to be played.
        //first: set the src of the sound
        myAudio.src = "sound/machine.mp3";

        //second: actually load the sound
        myAudio.load();

        nowPlaying.html ("Now Playing:- Love Machine -");
    })
    lightButton.click(function(){
        //change the sound to be played.
        //first: set the src of the sound
        myAudio.src = "sound/light.mp3";

        //second: actually load the sound
        myAudio.load();

        nowPlaying.html ("Now Playing:- Flash Light -");
    })
    voyagerButton.click(function(){
        //change the sound to be played.
        //first: set the src of the sound
        myAudio.src = "sound/voyager.mp3";

        //second: actually load the sound
        myAudio.load();

        nowPlaying.html ("Now Playing:- The Voyager -");
    })
    quoButton.click(function(){
        //change the sound to be played.
        //first: set the src of the sound
        myAudio.src = "sound/quo.mp3";

        //second: actually load the sound
        myAudio.load();

        nowPlaying.html ("Now Playing:- Quo -");
    })
    nightButton.click(function(){
        //change the sound to be played.
        //first: set the src of the sound
        myAudio.src = "sound/night.mp3";

        //second: actually load the sound
        myAudio.load();

        nowPlaying.html ("Now Playing:- Night Vision -");
    })
    strongerButton.click(function(){
        //change the sound to be played.
        //first: set the src of the sound
        myAudio.src = "sound/stronger.mp3";

        //second: actually load the sound
        myAudio.load();

        nowPlaying.html ("Now Playing:- Harder Better Faster Stronger -");
    })
    highButton.click(function(){
        //change the sound to be played.
        //first: set the src of the sound
        myAudio.src = "sound/high.mp3";

        //second: actually load the sound
        myAudio.load();

        nowPlaying.html ("Now Playing:- High Life -");
    })
    heroButton.click(function(){
        //change the sound to be played.
        //first: set the src of the sound
        myAudio.src = "sound/hero.mp3";

        //second: actually load the sound
        myAudio.load();

        nowPlaying.html ("Now Playing:- Superheros -");
    })
    shortButton.click(function(){
        //change the sound to be played.
        //first: set the src of the sound
        myAudio.src = "sound/short.mp3";

        //second: actually load the sound
        myAudio.load();

        nowPlaying.html ("Now Playing:- Short Circuit -");
    })
    usButton.click(function(){
        //change the sound to be played.
        //first: set the src of the sound
        myAudio.src = "sound/us.mp3";

        //second: actually load the sound
        myAudio.load();

        nowPlaying.html ("Now Playing:- Something About us -");
    })
    digitalButton.click(function(){
        //change the sound to be played.
        //first: set the src of the sound
        myAudio.src = "sound/digital.mp3";

        //second: actually load the sound
        myAudio.load();

        nowPlaying.html ("Now Playing:- Digital Love -");
    })
    dynamicButton.click(function(){
        //change the sound to be played.
        //first: set the src of the sound
        myAudio.src = "sound/dynamic.mp3";

        //second: actually load the sound
        myAudio.load();

        nowPlaying.html ("Now Playing:- Aerodynamic -");
    })
    usButton.click(function(){
        //change the sound to be played.
        //first: set the src of the sound
        myAudio.src = "sound/us.mp3";

        //second: actually load the sound
        myAudio.load();

        nowPlaying.html ("Now Playing:- Us -");
    })
    dancerButton.click(function(){
        //change the sound to be played.
        //first: set the src of the sound
        myAudio.src = "sound/dancer.mp3";

        //second: actually load the sound
        myAudio.load();

        nowPlaying.html ("Now Playing:- He's the Greatest Dancer -");
    })
    nameButton.click(function(){
        //change the sound to be played.
        //first: set the src of the sound
        myAudio.src = "sound/name.mp3";

        //second: actually load the sound
        myAudio.load();

        nowPlaying.html ("Now Playing:- His Name Is -");
    })
    explosiveButton.click(function(){
        //change the sound to be played.
        //first: set the src of the sound
        myAudio.src = "sound/explosive.mp3";

        //second: actually load the sound
        myAudio.load();

        nowPlaying.html ("Now Playing:- XXplosive -");
    })



    //setup stuff
    //get reference

    musicApp.contentDiv = $("#content");
    musicApp.musicInfoDiv = $("#info");
    musicApp.browseDiv = $("#browse");
    musicApp.genreDiv = $("#genres");



    //load in the data needed for this application
    //2 things - 1 components, 2. data
    $.when(
        //do these things, then call the
        // 'done' function
        $.getJSON('data/music.json'),
        $.ajax('components/components.html')
    ).done ( function(data, templateData) {
        //data is ready to go
        // is sitting in "data" and "templateData"




        //first step - compile templates
        //get the html from the loaded templates, wrap in jquery
        var templateHTML = $(templateData[0]);

        //actually compile templates
        //.find ==$("#genreLinks");
        musicApp.genreLinkTemplate = Handlebars.compile( templateHTML.find("#genreLinks") .html()  )
        musicApp.musicLinkTemplate = Handlebars.compile( templateHTML.find("#musicHomeLinks") .html() )
        musicApp.musicInfoTemplate = Handlebars.compile( templateHTML.find("#musicInfo") .html()    )

        //store data
        musicApp.data = data[0].music;

        //add in the starting states using our templates
        musicApp.genreDiv.html (musicApp.genreLinkTemplate( data[0].genres ));
        musicApp.browseDiv.html (musicApp.musicLinkTemplate( data[0].music ));
    })
//when a user clicked on a book link, find the ID of that book and show the content
//DETAIL VIEW
    $("#content").on("click", ".musicLink", function() {
        //first get the id of the book clicked
        var musicId = $(this).data('id');


        //next using underscore, find the book specified
        var musicInfo = _.findWhere(musicApp.data, { id: musicId });



        //use the book info object, show the detail view of the book
        musicApp.musicInfoDiv.html( musicApp.musicInfoTemplate(musicInfo) );
    })


    //genre search
    $(".container").on("click", ".genreLink", function() {
        //get the name of the genre to find
        var genreToFind = $(this).data('genre');




        //do the search. Again - there could be multiple boks with this genre
        //so use a where
        var results = _.where(musicApp.data, { genre: genreToFind });

        //show only the selected books
        musicApp.browseDiv.html ( musicApp.musicLinkTemplate(results) );

    })


    //search song
    $("#btnSearch").click(function (){
        var searchTerm = $("#txtSearch").val();

        var results = _.filter(musicApp.data, function(item){
            return item.song.toUpperCase().indexOf(searchTerm.toUpperCase()) != -1
        })

        //show only the selected books
        musicApp.browseDiv.html ( musicApp.musicLinkTemplate(results) );

    })
    /*
     $.getJSON('data/music.json', function() {
     $.get('components/components.html', function () {
     })
     })
     */
});


