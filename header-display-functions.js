// Function to display personalized name
$(document).ready(function () {
    if (localStorage.displayName) {
        // Display personalized message
        var subtitles = document.getElementsByClassName("header-subtitle");
        for (i = 0; i < subtitles.length; i++) {
            if (localStorage.gender === 'male') {
                subtitles[i].innerHTML = `What will you learn today, <text class="display-name">
                                            King ${localStorage.displayName}</text>?`;
            } else if (localStorage.gender === 'female') {
                subtitles[i].innerHTML = `What will you learn today, <text class="display-name">
                                            Queen ${localStorage.displayName}</text>?`;
            }
        }

        // Add a button to change username if desired
        var changeName = document.getElementsByClassName("header-subtitle-2");
        for (i = 0; i < changeName.length; i++) {
            changeName[i].innerHTML += '<a href="username.html" id="change-name-btn"' +
                'class="btn btn-sm btn-outline-secondary" role="button" style="margin:5px;">' +
                ' Change Display Name</a>';
        }

    } else {
        // Prompts user to create a unique name
        var subtitles = document.getElementsByClassName("header-subtitle-2");
        for (i = 0; i < subtitles.length; i++) {
            subtitles[i].innerHTML = `Fancy something unique?
                <br><a href="username.html" class="btn btn-primary" role="button" style="margin:10px;">
                Personalize Your Experience</a>`
        }
    }
});

// Function to delete display name
$(document).ready(function () {
    $("#change-name-btn").click(function () {
        localStorage.removeItem("displayName");
        localStorage.removeItem("gender");
    })
});

// Function to store info in Local Storage to display a unique name
$(document).ready(function () {
    if (typeof (Storage) !== "undefined") {
        $("#submit-btn").click(function () {
            localStorage.displayName = $("#display-name", "#change-name-form").val();
            localStorage.gender = $('input[name=gender]:checked', "#change-name-form").val();
        });
    } else {
        alert("Sorry! No Web Storage Support");
    }
});
