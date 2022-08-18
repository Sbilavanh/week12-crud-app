class House {
    constructor(name) {
        this.name = name;
        this.rooms = [];
    }
}

class Room {
    constructor(name, area) {
        this.name = name;
        this.area = area;
    }
}

class HouseServicve {
    static url = 'https://ancient-taiga-31359.herokuapp.com/api/houses';

    static getAllHouses() {
        return $.get(this.url);
    }

    static getHouse(house) {
        return $.get(this.url + `/${id}`);
    }

    static createHouse(house) {
        return $.post(this.url, house);
    }

    static updateHouse(house) {
        return $.ajax({
            url: this.url + `/${house._id}`,
            dataType: 'json',
            data: JSON.stringify(house),
            contentType: 'application/json'
            type: 'PUT'
        });
    }
}
