let storage = 0;
let countries = document.querySelector('.countries')
let cru = document.querySelector('.cru')
let capacity = document.querySelector('.capacity')

$.ajax({
    url: "https://explorer.threefold.io/api/nodes",
    type: 'GET',
    success: function(res) {
        initMap(res)
    }
});

$.ajax({
    url: "https://explorer.threefold.io/api/stats",
    type: 'GET',
    success: function(res) {
        if (countries !== null) {
            countries.innerHTML = res.countries;
        }
        if (cru !== null) {
            cru.innerHTML = res.cru.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
        if (capacity !== null) {
            storage = res.sru + res.hru;
            capacity.innerHTML = storage.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
    }
});