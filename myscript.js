$(document).ready(function({
bank_holidays = {
        "England": {
            "2016": [
                {
                    "date": "2016-01-01",
                    "name": "New Year's Day"
                },
                {
                    "date": "2016-03-25",
                    "name": "Good Friday"
                },
                {
                    "date": "2016-03-27",
                    "name": "Easter"
                },
                {
                    "date": "2016-03-28",
                    "name": "Easter Monday"
                },
                {
                    "date": "2016-05-02",
                    "name": "Early May Bank Holiday"
                },
                {
                    "date": "2016-05-30",
                    "name": "Spring Bank Holiday"
                },
                {
                    "date": "2016-08-29",
                    "name": "Summer Bank Holiday"
                },
                {
                    "date": "2016-12-25",
                    "name": "Christmas Day"
                },
                {
                    "date": "2016-12-26",
                    "name": "Boxing Day"
                },
                {
                    "date": "2016-12-27",
                    "name": "Christmas Day Holiday"
                }
            ],
            "2017": [
                {
                    "date": "2017-01-01",
                    "name": "New Year's Day"
                },
                {
                    "date": "2017-01-02",
                    "name": "New Year's Day Holiday"
                },
                {
                    "date": "2017-04-14",
                    "name": "Good Friday"
                },
                {
                    "date": "2017-04-16",
                    "name": "Easter"
                },
                {
                    "date": "2017-04-17",
                    "name": "Easter Monday"
                },
                {
                    "date": "2017-05-01",
                    "name": "Early May Bank Holiday"
                },
                {
                    "date": "2017-05-29",
                    "name": "Spring Bank Holiday"
                },
                {
                    "date": "2017-08-28",
                    "name": "Summer Bank Holiday"
                },
                {
                    "date": "2017-12-25",
                    "name": "Christmas Day"
                },
                {
                    "date": "2017-12-26",
                    "name": "Boxing Day"
                }
            ],
            "2018": [
                {
                    "date": "2018-01-01",
                    "name": "New Year's Day"
                },
                {
                    "date": "2018-03-30",
                    "name": "Good Friday"
                },
                {
                    "date": "2018-04-01",
                    "name": "Easter"
                },
                {
                    "date": "2018-04-02",
                    "name": "Easter Monday"
                },
                {
                    "date": "2018-05-07",
                    "name": "Early May Bank Holiday"
                },
                {
                    "date": "2018-05-28",
                    "name": "Spring Bank Holiday"
                },
                {
                    "date": "2018-08-27",
                    "name": "Summer Bank Holiday"
                },
                {
                    "date": "2018-12-25",
                    "name": "Christmas Day"
                },
                {
                    "date": "2018-12-26",
                    "name": "Boxing Day"
                }
            ],
            "2019": [
                {
                    "date": "2019-01-01",
                    "name": "New Year's Day"
                },
                {
                    "date": "2019-04-19",
                    "name": "Good Friday"
                },
                {
                    "date": "2019-04-21",
                    "name": "Easter"
                },
                {
                    "date": "2019-04-22",
                    "name": "Easter Monday"
                },
                {
                    "date": "2019-05-06",
                    "name": "Early May Bank Holiday"
                },
                {
                    "date": "2019-05-27",
                    "name": "Spring Bank Holiday"
                },
                {
                    "date": "2019-08-26",
                    "name": "Summer Bank Holiday"
                },
                {
                    "date": "2019-12-25",
                    "name": "Christmas Day"
                },
                {
                    "date": "2019-12-26",
                    "name": "Boxing Day"
                }
            ],
            "2020": [
                {
                    "date": "2020-01-01",
                    "name": "New Year's Day"
                },
                {
                    "date": "2020-04-10",
                    "name": "Good Friday"
                },
                {
                    "date": "2020-04-12",
                    "name": "Easter"
                },
                {
                    "date": "2020-04-13",
                    "name": "Easter Monday"
                },
                {
                    "date": "2020-05-04",
                    "name": "Early May Bank Holiday"
                },
                {
                    "date": "2020-05-25",
                    "name": "Spring Bank Holiday"
                },
                {
                    "date": "2020-08-31",
                    "name": "Summer Bank Holiday"
                },
                {
                    "date": "2020-12-25",
                    "name": "Christmas Day"
                },
                {
                    "date": "2020-12-26",
                    "name": "Boxing Day"
                },
                {
                    "date": "2020-12-28",
                    "name": "Boxing Day Bank Holiday"
                }
            ],
            "2021": [
                {
                    "date": "2021-01-01",
                    "name": "New Year's Day"
                },
                {
                    "date": "2021-04-02",
                    "name": "Good Friday"
                },
                {
                    "date": "2021-04-04",
                    "name": "Easter"
                },
                {
                    "date": "2021-04-05",
                    "name": "Easter Monday"
                },
                {
                    "date": "2021-05-03",
                    "name": "Early May Bank Holiday"
                },
                {
                    "date": "2021-05-31",
                    "name": "Spring Bank Holiday"
                },
                {
                    "date": "2021-08-30",
                    "name": "Summer Bank Holiday"
                },
                {
                    "date": "2021-12-25",
                    "name": "Christmas Day"
                },
                {
                    "date": "2021-12-26",
                    "name": "Boxing Day"
                },
                {
                    "date": "2021-12-27",
                    "name": "Christmas Day Holiday"
                },
                {
                    "date": "2021-12-28",
                    "name": "Boxing Day Bank Holiday"
                }
            ]
        },
        "Northern Ireland": {
            "2016": [
                {
                    "date": "2016-01-01",
                    "name": "New Year's Day"
                },
                {
                    "date": "2016-03-17",
                    "name": "St. Patrick's Day"
                },
                {
                    "date": "2016-03-25",
                    "name": "Good Friday"
                },
                {
                    "date": "2016-03-27",
                    "name": "Easter"
                },
                {
                    "date": "2016-03-28",
                    "name": "Easter Monday"
                },
                {
                    "date": "2016-05-02",
                    "name": "Early May Bank Holiday"
                },
                {
                    "date": "2016-05-30",
                    "name": "Spring Bank Holiday"
                },
                {
                    "date": "2016-07-12",
                    "name": "The Twelfth"
                },
                {
                    "date": "2016-08-29",
                    "name": "Summer Bank Holiday"
                },
                {
                    "date": "2016-12-25",
                    "name": "Christmas Day"
                },
                {
                    "date": "2016-12-26",
                    "name": "Boxing Day"
                },
                {
                    "date": "2016-12-27",
                    "name": "Christmas Day Holiday"
                }
            ],
            "2017": [
                {
                    "date": "2017-01-01",
                    "name": "New Year's Day"
                },
                {
                    "date": "2017-01-02",
                    "name": "New Year's Day Holiday"
                },
                {
                    "date": "2017-03-17",
                    "name": "St. Patrick's Day"
                },
                {
                    "date": "2017-04-14",
                    "name": "Good Friday"
                },
                {
                    "date": "2017-04-16",
                    "name": "Easter"
                },
                {
                    "date": "2017-04-17",
                    "name": "Easter Monday"
                },
                {
                    "date": "2017-05-01",
                    "name": "Early May Bank Holiday"
                },
                {
                    "date": "2017-05-29",
                    "name": "Spring Bank Holiday"
                },
                {
                    "date": "2017-07-12",
                    "name": "The Twelfth"
                },
                {
                    "date": "2017-08-28",
                    "name": "Summer Bank Holiday"
                },
                {
                    "date": "2017-12-25",
                    "name": "Christmas Day"
                },
                {
                    "date": "2017-12-26",
                    "name": "Boxing Day"
                }
            ],
            "2018": [
                {
                    "date": "2018-01-01",
                    "name": "New Year's Day"
                },
                {
                    "date": "2018-03-17",
                    "name": "St. Patrick's Day"
                },
                {
                    "date": "2018-03-19",
                    "name": "St Patrick's Day Holiday"
                },
                {
                    "date": "2018-03-30",
                    "name": "Good Friday"
                },
                {
                    "date": "2018-04-01",
                    "name": "Easter"
                },
                {
                    "date": "2018-04-02",
                    "name": "Easter Monday"
                },
                {
                    "date": "2018-05-07",
                    "name": "Early May Bank Holiday"
                },
                {
                    "date": "2018-05-28",
                    "name": "Spring Bank Holiday"
                },
                {
                    "date": "2018-07-12",
                    "name": "The Twelfth"
                },
                {
                    "date": "2018-08-27",
                    "name": "Summer Bank Holiday"
                },
                {
                    "date": "2018-12-25",
                    "name": "Christmas Day"
                },
                {
                    "date": "2018-12-26",
                    "name": "Boxing Day"
                }
            ],
            "2019": [
                {
                    "date": "2019-01-01",
                    "name": "New Year's Day"
                },
                {
                    "date": "2019-03-17",
                    "name": "St. Patrick's Day"
                },
                {
                    "date": "2019-03-18",
                    "name": "St Patrick's Day Holiday"
                },
                {
                    "date": "2019-04-19",
                    "name": "Good Friday"
                },
                {
                    "date": "2019-04-21",
                    "name": "Easter"
                },
                {
                    "date": "2019-04-22",
                    "name": "Easter Monday"
                },
                {
                    "date": "2019-05-06",
                    "name": "Early May Bank Holiday"
                },
                {
                    "date": "2019-05-27",
                    "name": "Spring Bank Holiday"
                },
                {
                    "date": "2019-07-12",
                    "name": "The Twelfth"
                },
                {
                    "date": "2019-08-26",
                    "name": "Summer Bank Holiday"
                },
                {
                    "date": "2019-12-25",
                    "name": "Christmas Day"
                },
                {
                    "date": "2019-12-26",
                    "name": "Boxing Day"
                }
            ],
            "2020": [
                {
                    "date": "2020-01-01",
                    "name": "New Year's Day"
                },
                {
                    "date": "2020-03-17",
                    "name": "St. Patrick's Day"
                },
                {
                    "date": "2020-04-10",
                    "name": "Good Friday"
                },
                {
                    "date": "2020-04-12",
                    "name": "Easter"
                },
                {
                    "date": "2020-04-13",
                    "name": "Easter Monday"
                },
                {
                    "date": "2020-05-04",
                    "name": "Early May Bank Holiday"
                },
                {
                    "date": "2020-05-25",
                    "name": "Spring Bank Holiday"
                },
                {
                    "date": "2020-07-12",
                    "name": "The Twelfth"
                },
                {
                    "date": "2020-07-13",
                    "name": "The Twelfth Holiday"
                },
                {
                    "date": "2020-08-31",
                    "name": "Summer Bank Holiday"
                },
                {
                    "date": "2020-12-25",
                    "name": "Christmas Day"
                },
                {
                    "date": "2020-12-26",
                    "name": "Boxing Day"
                },
                {
                    "date": "2020-12-28",
                    "name": "Boxing Day Bank Holiday"
                }
            ],
            "2021": [
                {
                    "date": "2021-01-01",
                    "name": "New Year's Day"
                },
                {
                    "date": "2021-03-17",
                    "name": "St. Patrick's Day"
                },
                {
                    "date": "2021-04-02",
                    "name": "Good Friday"
                },
                {
                    "date": "2021-04-04",
                    "name": "Easter"
                },
                {
                    "date": "2021-04-05",
                    "name": "Easter Monday"
                },
                {
                    "date": "2021-05-03",
                    "name": "Early May Bank Holiday"
                },
                {
                    "date": "2021-05-31",
                    "name": "Spring Bank Holiday"
                },
                {
                    "date": "2021-07-12",
                    "name": "The Twelfth"
                },
                {
                    "date": "2021-08-30",
                    "name": "Summer Bank Holiday"
                },
                {
                    "date": "2021-12-25",
                    "name": "Christmas Day"
                },
                {
                    "date": "2021-12-26",
                    "name": "Boxing Day"
                },
                {
                    "date": "2021-12-27",
                    "name": "Christmas Day Holiday"
                },
                {
                    "date": "2021-12-28",
                    "name": "Boxing Day Bank Holiday"
                }
            ]
        },
        "Scotland": {
            "2016": [
                {
                    "date": "2016-01-01",
                    "name": "New Year's Day"
                },
                {
                    "date": "2016-01-04",
                    "name": "New Year Holiday"
                },
                {
                    "date": "2016-03-25",
                    "name": "Good Friday"
                },
                {
                    "date": "2016-03-27",
                    "name": "Easter"
                },
                {
                    "date": "2016-03-28",
                    "name": "Easter Monday"
                },
                {
                    "date": "2016-05-02",
                    "name": "Early May Bank Holiday"
                },
                {
                    "date": "2016-05-30",
                    "name": "Spring Bank Holiday"
                },
                {
                    "date": "2016-08-01",
                    "name": "Summer Holiday"
                },
                {
                    "date": "2016-11-30",
                    "name": "St. Andrew's Day"
                },
                {
                    "date": "2016-12-25",
                    "name": "Christmas Day"
                },
                {
                    "date": "2016-12-26",
                    "name": "Christmas Day Holiday"
                },
                {
                    "date": "2016-12-27",
                    "name": "Boxing Day Holiday"
                }
            ],
            "2017": [
                {
                    "date": "2017-01-01",
                    "name": "New Year's Day"
                },
                {
                    "date": "2017-01-02",
                    "name": "New Year's Day Holiday"
                },
                {
                    "date": "2017-01-03",
                    "name": "New Year Holiday"
                },
                {
                    "date": "2017-04-14",
                    "name": "Good Friday"
                },
                {
                    "date": "2017-04-16",
                    "name": "Easter"
                },
                {
                    "date": "2017-04-17",
                    "name": "Easter Monday"
                },
                {
                    "date": "2017-05-01",
                    "name": "Early May Bank Holiday"
                },
                {
                    "date": "2017-05-29",
                    "name": "Spring Bank Holiday"
                },
                {
                    "date": "2017-08-07",
                    "name": "Summer Holiday"
                },
                {
                    "date": "2017-11-30",
                    "name": "St. Andrew's Day"
                },
                {
                    "date": "2017-12-25",
                    "name": "Christmas Day"
                },
                {
                    "date": "2017-12-26",
                    "name": "Boxing Day"
                }
            ],
            "2018": [
                {
                    "date": "2018-01-01",
                    "name": "New Year's Day"
                },
                {
                    "date": "2018-01-02",
                    "name": "New Year Holiday"
                },
                {
                    "date": "2018-03-30",
                    "name": "Good Friday"
                },
                {
                    "date": "2018-04-01",
                    "name": "Easter"
                },
                {
                    "date": "2018-04-02",
                    "name": "Easter Monday"
                },
                {
                    "date": "2018-05-07",
                    "name": "Early May Bank Holiday"
                },
                {
                    "date": "2018-05-28",
                    "name": "Spring Bank Holiday"
                },
                {
                    "date": "2018-08-06",
                    "name": "Summer Holiday"
                },
                {
                    "date": "2018-11-30",
                    "name": "St. Andrew's Day"
                },
                {
                    "date": "2018-12-25",
                    "name": "Christmas Day"
                },
                {
                    "date": "2018-12-26",
                    "name": "Boxing Day"
                }
            ],
            "2019": [
                {
                    "date": "2019-01-01",
                    "name": "New Year's Day"
                },
                {
                    "date": "2019-01-02",
                    "name": "New Year Holiday"
                },
                {
                    "date": "2019-04-19",
                    "name": "Good Friday"
                },
                {
                    "date": "2019-04-21",
                    "name": "Easter"
                },
                {
                    "date": "2019-04-22",
                    "name": "Easter Monday"
                },
                {
                    "date": "2019-05-06",
                    "name": "Early May Bank Holiday"
                },
                {
                    "date": "2019-05-27",
                    "name": "Spring Bank Holiday"
                },
                {
                    "date": "2019-08-05",
                    "name": "Summer Holiday"
                },
                {
                    "date": "2019-11-30",
                    "name": "St. Andrew's Day"
                },
                {
                    "date": "2019-12-02",
                    "name": "St Andrew's Day Holiday"
                },
                {
                    "date": "2019-12-25",
                    "name": "Christmas Day"
                },
                {
                    "date": "2019-12-26",
                    "name": "Boxing Day"
                }
            ],
            "2020": [
                {
                    "date": "2020-01-01",
                    "name": "New Year's Day"
                },
                {
                    "date": "2020-01-02",
                    "name": "New Year Holiday"
                },
                {
                    "date": "2020-04-10",
                    "name": "Good Friday"
                },
                {
                    "date": "2020-04-12",
                    "name": "Easter"
                },
                {
                    "date": "2020-04-13",
                    "name": "Easter Monday"
                },
                {
                    "date": "2020-05-04",
                    "name": "Early May Bank Holiday"
                },
                {
                    "date": "2020-05-25",
                    "name": "Spring Bank Holiday"
                },
                {
                    "date": "2020-08-03",
                    "name": "Summer Holiday"
                },
                {
                    "date": "2020-11-30",
                    "name": "St. Andrew's Day"
                },
                {
                    "date": "2020-12-25",
                    "name": "Christmas Day"
                },
                {
                    "date": "2020-12-26",
                    "name": "Boxing Day"
                },
                {
                    "date": "2020-12-28",
                    "name": "Boxing Day Holiday"
                }
            ],
            "2021": [
                {
                    "date": "2021-01-01",
                    "name": "New Year's Day"
                },
                {
                    "date": "2021-01-04",
                    "name": "New Year Holiday"
                },
                {
                    "date": "2021-04-02",
                    "name": "Good Friday"
                },
                {
                    "date": "2021-04-04",
                    "name": "Easter"
                },
                {
                    "date": "2021-04-05",
                    "name": "Easter Monday"
                },
                {
                    "date": "2021-05-03",
                    "name": "Early May Bank Holiday"
                },
                {
                    "date": "2021-05-31",
                    "name": "Spring Bank Holiday"
                },
                {
                    "date": "2021-08-02",
                    "name": "Summer Holiday"
                },
                {
                    "date": "2021-11-30",
                    "name": "St. Andrew's Day"
                },
                {
                    "date": "2021-12-25",
                    "name": "Christmas Day"
                },
                {
                    "date": "2021-12-26",
                    "name": "Boxing Day"
                },
                {
                    "date": "2021-12-27",
                    "name": "Christmas Day Holiday"
                },
                {
                    "date": "2021-12-28",
                    "name": "Boxing Day Holiday"
                }
            ]
        },
        "Wales": {
            "2016": [
                {
                    "date": "2016-01-01",
                    "name": "New Year's Day"
                },
                {
                    "date": "2016-03-25",
                    "name": "Good Friday"
                },
                {
                    "date": "2016-03-27",
                    "name": "Easter"
                },
                {
                    "date": "2016-03-28",
                    "name": "Easter Monday"
                },
                {
                    "date": "2016-05-02",
                    "name": "Early May Bank Holiday"
                },
                {
                    "date": "2016-05-30",
                    "name": "Spring Bank Holiday"
                },
                {
                    "date": "2016-08-29",
                    "name": "Summer Bank Holiday"
                },
                {
                    "date": "2016-12-25",
                    "name": "Christmas Day"
                },
                {
                    "date": "2016-12-26",
                    "name": "Boxing Day"
                },
                {
                    "date": "2016-12-27",
                    "name": "Christmas Day Holiday"
                }
            ],
            "2017": [{
                "date": "2017-01-01",
                "name": "New Year's Day"
            },
                {
                    "date": "2017-01-02",
                    "name": "New Year's Day Holiday"
                },
                {
                    "date": "2017-04-14",
                    "name": "Good Friday"
                },
                {
                    "date": "2017-04-16",
                    "name": "Easter"
                },
                {
                    "date": "2017-04-17",
                    "name": "Easter Monday"
                },
                {
                    "date": "2017-05-01",
                    "name": "Early May Bank Holiday"
                },
                {
                    "date": "2017-05-29",
                    "name": "Spring Bank Holiday"
                },
                {
                    "date": "2017-08-28",
                    "name": "Summer Bank Holiday"
                },
                {
                    "date": "2017-12-25",
                    "name": "Christmas Day"
                },
                {
                    "date": "2017-12-26",
                    "name": "Boxing Day"
                }],
            "2018": [
                {
                    "date": "2018-01-01",
                    "name": "New Year's Day"
                },
                {
                    "date": "2018-03-30",
                    "name": "Good Friday"
                },
                {
                    "date": "2018-04-01",
                    "name": "Easter"
                },
                {
                    "date": "2018-04-02",
                    "name": "Easter Monday"
                },
                {
                    "date": "2018-05-07",
                    "name": "Early May Bank Holiday"
                },
                {
                    "date": "2018-05-28",
                    "name": "Spring Bank Holiday"
                },
                {
                    "date": "2018-08-27",
                    "name": "Summer Bank Holiday"
                },
                {
                    "date": "2018-12-25",
                    "name": "Christmas Day"
                },
                {
                    "date": "2018-12-26",
                    "name": "Boxing Day"
                }],
            "2019": [
                {
                    "date": "2019-01-01",
                    "name": "New Year's Day"
                },
                {
                    "date": "2019-04-19",
                    "name": "Good Friday"
                },
                {
                    "date": "2019-04-21",
                    "name": "Easter"
                },
                {
                    "date": "2019-04-22",
                    "name": "Easter Monday"
                },
                {
                    "date": "2019-05-06",
                    "name": "Early May Bank Holiday"
                },
                {
                    "date": "2019-05-27",
                    "name": "Spring Bank Holiday"
                },
                {
                    "date": "2019-08-26",
                    "name": "Summer Bank Holiday"
                },
                {
                    "date": "2019-12-25",
                    "name": "Christmas Day"
                },
                {
                    "date": "2019-12-26",
                    "name": "Boxing Day"
                }],
            "2020": [
                {
                    "date": "2020-01-01",
                    "name": "New Year's Day"
                },
                {
                    "date": "2020-04-10",
                    "name": "Good Friday"
                },
                {
                    "date": "2020-04-12",
                    "name": "Easter"
                },
                {
                    "date": "2020-04-13",
                    "name": "Easter Monday"
                },
                {
                    "date": "2020-05-04",
                    "name": "Early May Bank Holiday"
                },
                {
                    "date": "2020-05-25",
                    "name": "Spring Bank Holiday"
                },
                {
                    "date": "2020-08-31",
                    "name": "Summer Bank Holiday"
                },
                {
                    "date": "2020-12-25",
                    "name": "Christmas Day"
                },
                {
                    "date": "2020-12-26",
                    "name": "Boxing Day"
                },
                {
                    "date": "2020-12-28",
                    "name": "Boxing Day Bank Holiday"
                }],
            "2021": [
                {
                    "date": "2021-01-01",
                    "name": "New Year's Day"
                },
                {
                    "date": "2021-04-02",
                    "name": "Good Friday"
                },
                {
                    "date": "2021-04-04",
                    "name": "Easter"
                },
                {
                    "date": "2021-04-05",
                    "name": "Easter Monday"
                },
                {
                    "date": "2021-05-03",
                    "name": "Early May Bank Holiday"
                },
                {
                    "date": "2021-05-31",
                    "name": "Spring Bank Holiday"
                },
                {
                    "date": "2021-08-30",
                    "name": "Summer Bank Holiday"
                },
                {
                    "date": "2021-12-25",
                    "name": "Christmas Day"
                },
                {
                    "date": "2021-12-26",
                    "name": "Boxing Day"
                },
                {
                    "date": "2021-12-27",
                    "name": "Christmas Day Holiday"
                },
                {
                    "date": "2021-12-28",
                    "name": "Boxing Day Bank Holiday"
                }]
        }
    }
    

    
    $.each(bank_holidays, function(i, country) {
        $.each(country, function(i, year){
            $.each(year, function(i, day){
                $('<h3>' + day['name'] + '<h3>' +
                    '<div>' +
                        day['date']
                    '</div>').appendTo('#accordion');
            })
        })
    });
    
    
    

    
}));