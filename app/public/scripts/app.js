// FUNCTION
function touchToneDial (question, value) {
    // Add answer to ans object
    key = 'a' + question;
    console.log(key);
    ans[key] = value;

    audioFile = "/audio/" + value + ".mp3"
    touchTone = new Audio(audioFile);
    touchTone.play();

    console.log(ans);
}

// VARIABLES
var answers = [];
var comaptibility = [];
var friendsAPI = "/api/friends";
var ans = {};
var touchTone = "";

// Close modal dialog box handling
$(".modalClose").on("click", function(event) {
    $('.modal').hide();
});

// Get values from selected answers in the survey and push to ans object
$(".btn-outline-secondary").on("click", function(event) {
    // Toggle which buttons are selected
    $(this).addClass('selectedPhoneBtn').siblings().removeClass('selectedPhoneBtn');
    // Get the question ID
    id = $(this).closest("div").prop("id");
    
    // Add the question's answer to the ans object, this will also replace any previous answers
    switch (id) {
        case 'q1':
            question = 1;
            value = parseInt($(this).val().trim());
            touchToneDial(question, value);
            break;
        case 'q2':
            question = 2;
            value = parseInt($(this).val().trim());
            touchToneDial(question, value);
            break;
        case 'q3':
            question = 3;
            value = parseInt($(this).val().trim());
            touchToneDial(question, value);
            break;
        case 'q4':
            question = 4;
            value = parseInt($(this).val().trim());
            touchToneDial(question, value);
            break;
        case 'q5':
            question = 5;
            value = parseInt($(this).val().trim());
            touchToneDial(question, value);
            break;
        case 'q6':
            question = 6;
            value = parseInt($(this).val().trim());
            touchToneDial(question, value);
            break;
        case 'q7':
            question = 7;
            value = parseInt($(this).val().trim());
            touchToneDial(question, value);
            break;
        case 'q8':
            question = 8;
            value = parseInt($(this).val().trim());
            touchToneDial(question, value);
            break;
        case 'q9':
            question = 9;
            value = parseInt($(this).val().trim());
            touchToneDial(question, value);
            break;
        case 'q10':
            question = 10;
            value = parseInt($(this).val().trim());
            touchToneDial(question, value);
            break;
    };
});

// When user clicks to submit the survey
$(".submit").on("click", function(event) {
    event.preventDefault();

    // AJAX request
    $.ajax({
        url: friendsAPI,
        method: "GET"
    })
    // After data comes back from the request
    .then(function (friendsResults) {
        // Get user data
        var userName = $("#name").val().trim();
        var pic = $("#picURL").val().trim();

        // Convert answers to array
        for (i in ans) {
            answers.push(ans[i]);
        }

        // Create new friend object
        newFriend = {"name": userName, "photo": pic, "scores": answers};

        // Post new friend data
        $.post("/api/friends", newFriend)
        .then(function(data) {
            console.log("Adding friends", data);
        });

        // Compare friend answers to users answers
        for (i in friendsResults) {
            friendName = friendsResults[i].name;
            friendAnswers = friendsResults[i].scores;
            friendPic = friendsResults[i].photo;
            differences = 0;
            for(x in friendAnswers) {
                differences += Math.abs(friendAnswers[x] - answers[x]);
            }
            friend = {name: friendName, pic: friendPic, totalDifferences: differences};
            comaptibility.push(friend);
        }

        // Find the friend with the least difference
        var lowest = Number.POSITIVE_INFINITY;
        for (y in comaptibility) {
            if (comaptibility[y].totalDifferences < lowest) {
                lowest = comaptibility[y].totalDifferences;
                bestFriend = comaptibility[y];
                console.log("Current Best Friend: " + bestFriend.name);
            }
        }
        
        // Tell me the best friend match
        console.log(comaptibility);
        console.log("Absolute Best Friend: " + bestFriend.name);

        percentMatch = (100 - ((bestFriend.totalDifferences / 40) * 100));

        friendInfo = `
        <h3>${bestFriend.name}</h3>
        <p class="lead"><i>They'll really like you!</i></p>
        <img src="${bestFriend.pic}">
        <h5>${percentMatch}% Match</h5>
        `

        $( ".modal-body" ).html(friendInfo);
        $('.modal').show();
    });
});