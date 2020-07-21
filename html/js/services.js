let nodePage = 1;
var registeredNodes = [];
let nodeSpecs = {
    countries: 0,
    cru: 0,
    sru: 0,
    hru: 0
};
let storage = 0;

let countries = document.querySelector('.countries')
let cru = document.querySelector('.cru')
let capacity = document.querySelector('.capacity')

getRegisteredNodes = (size) => {
    let page = nodePage;
    if (!page) return

    const getNodes = (page) => {
        return $.ajax({
            url: "https://explorer.grid.tf/explorer/nodes",
            type: "get",
            data: {
                size,
                page
            },
        })
    }

    getNodes(page).then((response, textStatus, xhr) => {
        setRegisteredNodes(response);
        const pages = parseInt(xhr.getResponseHeader('pages'))
        const promises = []
        for (var index = nodePage; index <= pages; index++) {
            promises.push(getNodes(index))
        }
        Promise.all(promises)
            .then(res => {
                res.map(response => {
                    setRegisteredNodes(response);
                })
            })
            .finally(() => {
                setTotalSpecs(registeredNodes)
                initMap(registeredNodes)
            })
    })
};

setRegisteredNodes = (response) => {
    registeredNodes = registeredNodes.concat(response)
    nodePage += 1
}


setTotalSpecs = (value) => {
    if (value.length === 0) {
        return
    }

    let a = []
    let location = value.map(node => {
        if (!a.includes(node.location.country)) {
            a.push(node.location.country)
        }
        return node.location.country.length
    })

    let con = value.map(node => {
        return node.location
    })

    nodeSpecs.countries = a.length;
    countries.innerHTML = `Active nodes in ${nodeSpecs.countries} countries`;

    let core = value.map(node => {
        nodeSpecs.cru += node.total_resources.cru
        return nodeSpecs.cru
    })

    cru.innerHTML = nodeSpecs.cru.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    let sru = value.map(node => {
        nodeSpecs.sru += node.total_resources.sru
        return nodeSpecs.sru
    })


    let hru = value.map(node => {
        nodeSpecs.hru += node.total_resources.hru
        return nodeSpecs.hru
    })

    storage = nodeSpecs.sru + nodeSpecs.hru;

    capacity.innerHTML = storage.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


getRegisteredNodes(500)