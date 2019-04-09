export default class TicketService {

    _baseUrl = 'https://ticketserviceapp.herokuapp.com';
    dataUpcomingEvents = [
        {
            "artist": "Eurovision",
            "availabilityStatus": "0",
            "eventId": 1011,
            "eventName": "Eurovision 2019",
            "eventStart": 1556218800000,
            "images": [
                'https://assets.change.org/photos/7/li/pf/FulIPFvfmwvEwDN-400x400-noPad.jpg?1527089072'
            ]
        },
        {
            "artist": "Lady Gaga",
            "availabilityStatus": "0",
            "eventId": 1001,
            "eventName": "Lady Gaga Tour",
            "eventStart": 1569006000000,
            "images": [
                'http://periscope-app.ru/netcat_files/393/606/lady_gaga.jpg'
            ]
        },
        {
            "artist": "Linkin Park",
            "availabilityStatus": "1",
            "eventId": 1005,
            "eventName": "Linkin Park Tour",
            "eventStart": 1571504400000,
            "images": [
                'https://cdn2.gigantic.com/static/images/campaign/400x400/linkin_park-4932113380.jpg'
            ]
        }
    ];
    dataEvents = [
        {
            "eventId": 1001,
            "eventName": "World Tour 2019",
            "artist": "Lady Gaga",
            "eventStart": 1569006000000,
            "hall": 1,
            "eventType": 1,
            "description": "Since her breakthrough with ' The Fame ' , the legendary Lady Gaga hs made it to the top of the charts and into the hearts of millions of fans in no time . Also through her extravagant clothing style and ingenious shows the talented bird of paradise pop music draws attention again and is today the first and most successful musician in the world with four number 1 albums in a row Absolutely live experience ! Aenean ac neque et dolor eleifend mattis.",
            "images": [
                'http://periscope-app.ru/netcat_files/393/606/lady_gaga.jpg'
            ],
            "ticketsAvaliable": 0,
            "minPrice": 250.00,
            "maxPrice": 450.00
        },
        {
            "eventId": 1002,
            "eventName": "The Prodigy tour 2019",
            "artist": "The Prodigy",
            "eventStart": 1557268800000,
            "hall": 1,
            "eventType": 1,
            "description": "Since her breakthrough with ' The Fame ' , the legendary Lady Gaga hs made it to the top of the charts and into the hearts of millions of fans in no time . Also through her extravagant clothing style and ingenious shows the talented bird of paradise pop music draws attention again and is today the first and most successful musician in the world with four number 1 albums in a row Absolutely live experience ! Aenean ac neque et dolor eleifend mattis.",
            "images": [
                'https://relrus.ru/uploads/posts/2018-12/prodigy-ekranizirovali-boi-bez-pravil-video_1.jpg'
            ],
            "ticketsAvaliable": 100,
            "minPrice": 100.00,
            "maxPrice": 200.00
        },
        {
            "eventId": 1003,
            "eventName": "Maroon 5 tour 2019",
            "artist": "Maroon 5",
            "eventStart": 1565452800,
            "hall": 1,
            "eventType": 1,
            "description": "Since her breakthrough with ' The Fame ' , the legendary Lady Gaga hs made it to the top of the charts and into the hearts of millions of fans in no time . Also through her extravagant clothing style and ingenious shows the talented bird of paradise pop music draws attention again and is today the first and most successful musician in the world with four number 1 albums in a row Absolutely live experience ! Aenean ac neque et dolor eleifend mattis.",
            "images": [
                "https://rostext.ru/lastfm/i/n0/5e0cf684fcfc026d9b0799910fd5e36c"
            ],
            "ticketsAvaliable": 20,
            "minPrice": 150.00,
            "maxPrice": 200.00
        },
        {
            "eventId": 1004,
            "eventName": "Coldplay tour 2019",
            "artist": "Coldplay",
            "eventStart": 1565452800000,
            "hall": 2,
            "eventType": 1,
            "description": "Since her breakthrough with ' The Fame ' , the legendary Lady Gaga hs made it to the top of the charts and into the hearts of millions of fans in no time . Also through her extravagant clothing style and ingenious shows the talented bird of paradise pop music draws attention again and is today the first and most successful musician in the world with four number 1 albums in a row Absolutely live experience ! Aenean ac neque et dolor eleifend mattis.",
            "images": [
                "https://consequenceofsound.files.wordpress.com/2015/02/coldplay.jpg?quality=80&w=400&h=400&crop=1"
            ],
            "ticketsAvaliable": 200,
            "minPrice": 250.00,
            "maxPrice": 300.00
        },
        {
            "eventId": 1005,
            "eventName": "Linkin Park tour 2019",
            "artist": "Linkin Park",
            "eventStart": 1571504400000,
            "hall": 2,
            "eventType": 1,
            "description": "Since her breakthrough with ' The Fame ' , the legendary Lady Gaga hs made it to the top of the charts and into the hearts of millions of fans in no time . Also through her extravagant clothing style and ingenious shows the talented bird of paradise pop music draws attention again and is today the first and most successful musician in the world with four number 1 albums in a row Absolutely live experience ! Aenean ac neque et dolor eleifend mattis.",
            "images": [
                "https://cdn2.gigantic.com/static/images/campaign/400x400/linkin_park-4932113380.jpg"
            ],
            "ticketsAvaliable": 120,
            "minPrice": 100.00,
            "maxPrice": 150.00
        },
        {
            "eventId": 1006,
            "eventName": "One republic tour 2019",
            "artist": "One republic",
            "eventStart": 1557086400000,
            "hall": 2,
            "eventType": 1,
            "description": "Since her breakthrough with ' The Fame ' , the legendary Lady Gaga hs made it to the top of the charts and into the hearts of millions of fans in no time . Also through her extravagant clothing style and ingenious shows the talented bird of paradise pop music draws attention again and is today the first and most successful musician in the world with four number 1 albums in a row Absolutely live experience ! Aenean ac neque et dolor eleifend mattis.",
            "images": [
                "https://www.lahiguera.net/musicalia/artistas/onerepublic/fotos/4644/onerepublic.jpg"
            ],
            "ticketsAvaliable": 120,
            "minPrice": 150.00,
            "maxPrice": 120.00
        },
        {
            "eventId": 1007,
            "eventName": "Rihanna tour 2019",
            "artist": "Rihanna",
            "eventStart": 1567695600000,
            "hall": 2,
            "eventType": 1,
            "description": "Since her breakthrough with ' The Fame ' , the legendary Lady Gaga hs made it to the top of the charts and into the hearts of millions of fans in no time . Also through her extravagant clothing style and ingenious shows the talented bird of paradise pop music draws attention again and is today the first and most successful musician in the world with four number 1 albums in a row Absolutely live experience ! Aenean ac neque et dolor eleifend mattis.",
            "images": [
                "https://cps-static.rovicorp.com/3/JPG_400/MI0004/070/MI0004070791.jpg?partner=allrovi.com"
            ],
            "ticketsAvaliable": 50,
            "minPrice": 180.00,
            "maxPrice": 220.00
        },
        {
            "eventId": 1008,
            "eventName": "Jay-Z tour 2019",
            "artist": "Jay-Z",
            "eventStart": 1563570000000,
            "hall": 2,
            "eventType": 1,
            "description": "Since her breakthrough with ' The Fame ' , the legendary Lady Gaga hs made it to the top of the charts and into the hearts of millions of fans in no time . Also through her extravagant clothing style and ingenious shows the talented bird of paradise pop music draws attention again and is today the first and most successful musician in the world with four number 1 albums in a row Absolutely live experience ! Aenean ac neque et dolor eleifend mattis.",
            "images": [
                "http://quietus_production.s3.amazonaws.com/images/articles/1806/jay-z_news_1244463558_crop_400x400.jpg"
            ],
            "ticketsAvaliable": 150,
            "minPrice": 280.00,
            "maxPrice": 320.00
        },
        {
            "eventId": 1009,
            "eventName": "Adele tour 2019",
            "artist": "Adele",
            "eventStart": 1575586800000,
            "hall": 2,
            "eventType": 1,
            "description": "Since her breakthrough with ' The Fame ' , the legendary Lady Gaga hs made it to the top of the charts and into the hearts of millions of fans in no time . Also through her extravagant clothing style and ingenious shows the talented bird of paradise pop music draws attention again and is today the first and most successful musician in the world with four number 1 albums in a row Absolutely live experience ! Aenean ac neque et dolor eleifend mattis.",
            "images": [
                "https://www.alux.com/wp-content/uploads/2017/03/Adele-Net-Worth.jpeg"
            ],
            "ticketsAvaliable": 150,
            "minPrice": 280.00,
            "maxPrice": 320.00
        },
        {
            "eventId": 1010,
            "eventName": "Mike Shinoda tour 2019",
            "artist": "Mike Shinoda",
            "eventStart": 1569092400000,
            "hall": 1,
            "eventType": 1,
            "description": "Since her breakthrough with ' The Fame ' , the legendary Lady Gaga hs made it to the top of the charts and into the hearts of millions of fans in no time . Also through her extravagant clothing style and ingenious shows the talented bird of paradise pop music draws attention again and is today the first and most successful musician in the world with four number 1 albums in a row Absolutely live experience ! Aenean ac neque et dolor eleifend mattis.",
            "images": [
                "https://thescenestar.typepad.com/.a/6a00d8341c7a7453ef022ad39cc518200d-400wi"
            ],
            "ticketsAvaliable": 100,
            "minPrice": 80.00,
            "maxPrice": 450.00
        },
        {
            "eventId": 1011,
            "eventName": "Eurovision 2019",
            "artist": "Eurovision",
            "eventStart": 1556218800000,
            "hall": 1,
            "eventType": 1,
            "description": "Since her breakthrough with ' The Fame ' , the legendary Lady Gaga hs made it to the top of the charts and into the hearts of millions of fans in no time . Also through her extravagant clothing style and ingenious shows the talented bird of paradise pop music draws attention again and is today the first and most successful musician in the world with four number 1 albums in a row Absolutely live experience ! Aenean ac neque et dolor eleifend mattis.",
            "images": [
                "https://assets.change.org/photos/7/li/pf/FulIPFvfmwvEwDN-400x400-noPad.jpg?1527089072"
            ],
            "ticketsAvaliable": 0,
            "minPrice": 90.00,
            "maxPrice": 250.00
        },
        {
            "eventId": "1012",
            "eventName": "Eminem tour 2019",
            "artist": "Eminem",
            "eventStart": 1570896000000,
            "hall": 2,
            "eventType": 1,
            "description": "Since her breakthrough with ' The Fame ' , the legendary Lady Gaga hs made it to the top of the charts and into the hearts of millions of fans in no time . Also through her extravagant clothing style and ingenious shows the talented bird of paradise pop music draws attention again and is today the first and most successful musician in the world with four number 1 albums in a row Absolutely live experience ! Aenean ac neque et dolor eleifend mattis.",
            "images": [
                "https://vinyloteka.ru/sites/default/files/styles/400x400/public/tax_artist_photo/580304553b9c408bb4a27f35daf115f5.png"
            ],
            "ticketsAvaliable": 120,
            "minPrice": 190.00,
            "maxPrice": 250.00
        }
    ];
    dataStructure = {
        "lockedSeats": [
            {
                "row": 8,
                "seats": ["9L", "2L", "3R"]
            }, {
                "row": 1,
                "seats": ["4R", "5L", "6R", "4L"]
            }, {
                "row": 6,
                "seats": ["8L", "5L", "6R"]
            }
        ],
        "priceRanges": [
            {
                "color": "#faedac",
                "price": 280,
                "rows": [
                    1, 2, 3
                ]
            },
            {
                "color": "#fbdada",
                "price": 150,
                "rows": [
                    4, 5, 6
                ]
            },
            {
                "color": "#d8f0c3",
                "price": 120,
                "rows": [
                    7, 8, 9
                ]
            },
            {
                "color": "#ffd9b0",
                "price": 90,
                "rows": [
                    10, 11, 12, 13, 14, 15
                ]
            }
        ]
    };
    getUpcomingEventsDammy = () => {
        return new Promise((resolve, reject) => {
            setTimeout((error) => {
                let rnd = Math.random();
                if (rnd > 0.99) {
                    reject(error);
                } else {
                    resolve(this.dataUpcomingEvents);
                }
            }, 1000);
        });
    };
    getEventsDammy = () => {
        return new Promise((resolve, reject) => {
            setTimeout((error) => {
                let rnd = Math.random();
                if (rnd > 0.99) {
                    reject(error);
                } else {
                    resolve(this.dataEvents);
                }
            }, 1000);
        });
    };
    getEventByIdDammy = (id) => {
        return new Promise((resolve, reject) => {
            setTimeout((error) => {
                let rnd = Math.random();
                if (rnd > 0.99) {
                    reject(error);
                } else {
                    resolve(
                        this.dataEvents.find((item) => {
                            return +id === +item.eventId;
                        })
                    );
                }
            }, 1000);
        });
    };
    getStructureDammy = (id) => {
        return new Promise((resolve, reject) => {
            setTimeout((error) => {
                let rnd = Math.random();
                if (rnd > 0.99) {
                    reject(error);
                } else {
                    resolve(this.dataStructure);
                }
            }, 1000);
        });
    };

    registration = async (gender, firstName, lastName, email, password, phoneNumber) => {

        let response = await fetch(`${this._baseUrl}/user`, {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                "gender": gender,
                "firstName": firstName,
                "lastName": lastName,
                "email": email,
                "password": password,
                "phoneNumber": phoneNumber
            })
        });

        if (!response.ok) {

            let json = await response.json();
            let errorMsg = '';
            console.log(json);
            for (let prop in json.body) {
                console.log(json.body[prop][0]);
                errorMsg += `${json.body[prop][0]}. 
`;
            }

            throw new Error(`${json.message}: ${errorMsg}`);
        }
    };
    login = async (email, password) => {
        let response = await fetch(`${this._baseUrl}/login`, {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                "email": email,
                "password": password
            })
        });

        if (!response.ok) {
            let json = await response.json();
            throw new Error(`ERROR! ${json.message}`);
        }

        let json = await response.json();

        return json.token;
    };
    getUpcomingEvents = async (authorization = '') => {
        let response = await fetch(`${this._baseUrl}/events/2/3`, {
            method: "GET",
            headers: {
                "Content-type": "application/json",
                "Authorization": authorization
            }
        });

        if (!response.ok) {
            throw new Error('Getting upcoming events isn`t ok');
        }

        return await response.json();
    };
    getEvents = async (from = 1541384000000, to = 1579073600000, page = 0, size = 2, authorization = '') => {
        from -= 35940000;
        if (to - from < 86280000) {
            to = from + 86280000;
        } else {
            to += 86280000;
        }
        let response = await fetch(`${this._baseUrl}/events/bydate/${page}/${size}`, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                "Authorization": authorization
            },
            body: JSON.stringify({
                "dateFrom": from,
                "dateTo": to
            })
        });
        if (!response.ok) {
            let json = await response.json();
            throw new Error
            (`Getting events isn\`t ok. ${json.message}. ${json.body.eventType[0]}`);
        }

        let json = await response.json();
        return json;
    };
    getEventById = async (id, authorization = '') => {
        let response = await fetch(`${this._baseUrl}/event/${id}`, {
            method: "GET",
            headers: {
                "Content-type": "application/json",
                "Authorization": authorization
            }
        });
        if (!response.ok) {
            let json = await response.json();
            throw new Error
            (`Getting event isn\`t ok. ${json.message}.`);
        }

        return await response.json();
    };
    getHallStructureByEventId = async (id, authorization = '') => {
        let response = await fetch(`${this._baseUrl}/event/${id}/false`, {
            method: "GET",
            headers: {
                "Content-type": "application/json"
            }
        });

        if (!response.ok) {
            let json = await response.json();
            throw new Error
            (`Get hall structure by event ID isn\`t ok. ${json.message}.`);
        }

        return await response.json();
    };

    _mappingForBook = (arr) => {
        return arr.map((item) => {
            return {
                "row": `${item.row}`,
                "seats": [item.seat]
            }
        });
    };

    temporaryBook = async (arr, id) => {
        let response = await fetch(`${this._baseUrl}/event/book`, {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                "eventId": id,
                "lockedSeats": this._mappingForBook(arr)
            })
        });
        return response;
    };

    passRecovery = async (email) => {
        let response = await fetch(`${this._baseUrl}/user/password`, {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                "email": email,
            })
        });

        if (!response.ok) {

            let json = await response.json();
            let errorMsg = '';
            for (let prop in json.body) {
                console.log(json.body[prop][0]);
                errorMsg += `${json.body[prop][0]}. 
`;
            }

            throw new Error(`${json.message} ${errorMsg}`);
        }
    };

    emailConfirm = async (hash) => {

        let response = await fetch(`${this._baseUrl}/user/${hash}`, {
            method: "GET",
            headers: {
                "Content-type": "application/json"
            }
        });
        if (!response.ok) {
            throw new Error('Something wrong with confirmation');
        }

    }
}
