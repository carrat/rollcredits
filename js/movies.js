function successCB(data) {
    //   console.log("Success callback: " + data);
};

function errorCB(data) {
    //   console.log("Error callback: " + data);
};

$(document).ready(function() {
    theMovieDb.genres.getList('',
        function(json) {
            var results = $.parseJSON(json);
            //console.log(results.genres);
            $.each(results.genres, function(index, genre) {
                var option = $('#default-genre-option').clone();
                option.attr("id", " ");
                option.val(this.id);
                option.html(this.name);
                $('#genre-options').append(option);
            })

        },
        errorCB);
    //code to get genre options from db. 

    for (i = new Date().getFullYear(); i > 1900; i--) {
        $('#years').append($('<option />').val(i).html(i));
    }

    //code to populate years

    $('#search').click(function() {
        var review = ($('#review').val());
        var year = ($('#year').val());
        var title = ($('#title').val());
        //console.log(title);
        //create variables with search parameters
        // theMovieDb.discover.getMovies({language: "eng",review: review, title: title }, successCB, errorCB);
        //code to discover movies
        theMovieDb.discover.getMovies({ language: "eng", review: review },
            function(json) {
                var movieResults = $.parseJSON(json);
                // console.log(movieResults.original_title);
                $.each(movieResults, function(index, movieResult) {

                    console.log(movieResult);

                    if ($.isEmptyObject(movieResult) == false) {

                        $.each(movieResult, function(index, movie) {

                            console.log(this.title, this.id, this.poster_path, this.release_date, this.vote_average);
                        });
                    }
                })

            },
            errorCB);

    });

});
