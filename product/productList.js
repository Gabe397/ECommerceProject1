(function () {

    var mockDB = [
        {_id: 'card1', paintingName: "Starry Nights", artist: "Van Gogh", price: 1000, url: "images/starrynights.jpg"},
        {_id: 'card2', paintingName: "Creation Of Adam", artist: "Michaelangelo", price: 1500, url: "images/adam.jpg"},
        {_id: 'card3', paintingName: "Number 1", artist: "Pollock", price: 4800, url: "images/number1.jpg"},
        {_id: 'card4', paintingName: "Cafe Terrace", artist: "Van Gogh", price: 2000, url: "images/cafe.jpg"},
        {_id: 'card5', paintingName: "Last Judgement", artist: "Michaelangelo", price: 900, url: "images/thelastjudgement.jpg"},
        {_id: 'card6', paintingName: "Mural", artist: "Pollock", price: 3200, url: "images/mural.jpg"},
        {_id: 'card7', paintingName: "Room", artist: "Van Gogh", price: 7500, url: "images/bedroom.jpg"},
        {_id: 'card8', paintingName: "Swan", artist: "Michaelangelo", price: 4500, url: "images/swan.jpg"},
        {_id: 'card9', paintingName: "Autumn", artist: "Pollock", price: 5000, url: "images/number30.jpg"},

    ];

    function renderList(results) {
        var content = document.querySelector('#cardContainer');

        // clear out inner HTML to get rid of any older results
        content.innerHTML = '';
        // Map each database record to a string containing the HTML for it's row
        var card = results.map(function (result, index) {
            return '<div class="card" id =' + result._id + '>' +
                '<div class="description">' + result.paintingName + ':  $' + result.price +
                '</div>';
        });
        // Set the contents of the table body to the new set of rendered HTML rows
        card.forEach(function (row) {
            content.innerHTML += row; // += adds to HTML instead of overwriting it entirely.
        });

    }

    renderList(mockDB);

    function orderBy(sortValue) {
        if(sortValue === "lowest"){
            var sortedResults = (sortValue === 'lowest') ?
                mockDB.sort(function (a, b) {
                    var nameA = a.price;
                    var nameB = b.price;

                    if (nameA < nameB) {
                        return -1;
                    }
                    if (nameA > nameB) {
                        return 1;
                    }
                }) :
                mockDB.sort(function (a, b) {

                    return a[sortValue] - b[sortValue];
                });
            renderList(sortedResults);
        }

        else if(sortValue === 'highest'){
            var sortedResults = (sortValue === 'highest') ?
                mockDB.sort(function (a, b) {
                    var nameA = a.price;
                    var nameB = b.price;

                    if (nameA < nameB) {
                        return 1;
                    }
                    if (nameA > nameB) {
                        return -1;
                    }
                }) :
                mockDB.sort(function (a, b) {

                    return a[sortValue] - b[sortValue];
                });
            renderList(sortedResults);
        }

    }

    document.querySelector('#price').addEventListener('change', function(event){

        orderBy(event.target.value);
    });


    function toggleArtist(showArtist) {

        var filteredResults = mockDB.filter(function (result) {
            if(showArtist === result.artist)
                return result.artist;
        });
        renderList(filteredResults);
    }

    document.querySelector('#artist').addEventListener('change', function(event){
        var value = event.target.value;
        toggleArtist(value);
    });





})();


