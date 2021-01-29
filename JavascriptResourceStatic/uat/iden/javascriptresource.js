if (!window.console) {
    console = {
        log: function() {},
        info: function() {},
        debug: function() {},
        warn: function() {},
        error: function() {}
    };
}
var multiCityPageName = "/jetstar indonesia/website/home/multicity";
var ChooseCategoryText = "Choose Category";
var SiteName = "id_en_website";
var virtualFolder = "/id/en/";
var json_flightOrigin = "/id/en/services/compactsearchservice?token=289&action=LoadOrigins";
var json_flightDestination = "/id/en/services/compactsearchservice?token=289&action=LoadDestinations&origin=";
var json_holidayOrigin = "/id/en/services/holidayservice?token=289&action=LoadOrigins";
var json_holidayDestination = "/id/en/services/holidayservice?token=289&action=LoadDestinations&origin=";
var json_holiday = "/id/en/services/holidayservice?token=289";
var json_hotel = "/id/en/services/hotelservice?token=289&action=LoadHotelData";
var json_hostel = "/id/en/services/hotelservice?token=289&action=LoadHostelData";
var json_tweet = "/id/en/services/othercontrolsservice?token=289&action=GetTwitterFeed";
var json_localisation = "/id/en/services/othercontrolsservice?token=289&action=GetLocalisationUrl";
var json_travelalerts = "/id/en/services/travelalertsservice?token=289";
var json_holidayCompactSearch = "/id/en/services/holidayservice?token=289&action=LoadValidDates&origin=";
var json_customerPortal = "/id/en/services/customerenquiryservice?token=289";
var json_specialOffers = "/id/en/services/specialoffersservice?token=289";
var json_mobileSiteContent = "/id/en/services/mobilesitecontentservices?token=289";
var json_clubJestarOffersCarousel = "";
var dreamlinerRegisterURL = "&action=register";
var dreamlinerNewsContent = "&action=getannouncements";
var dreamlinerGalleryContent = "&action=getgallery";
var dreamlinerTwitterContent = "&action=gettwitterfeed";
var data_datetime = "http://jq-prod-dsslb.jetstar.com/InspirationMapServices/JSON/GetCTData";
var server_timestamp = "";
countdown_labels = ['YRS', 'MNTHS', 'WKS', 'DAYS', 'HRS', 'MINS', 'SECS']
var data_ajax_timeout = "7500";
var json_carriers_data = "/_global/main/inc/carriers_data.js?token=289";
var json_Days = "/id/en/services/othercontrolsservice?token=289&action=GetMonthDays&MonthYear=";
var enable_geolocation_specialOffers = false;
var dp_err_default = "The date you have entered <strong class='date'>date</strong> is invalid.";
var dp_err_past = "Date you have entered <strong class='date'>date</strong> is in the past.";
var dp_err_future = "Date you have entered <strong class='date'>date</strong> is too far in the future.";
var dp_err_beforestart = "Date you have entered <strong class='date'>date</strong> is prior to the earliest available date.";
var dp_err_format = "Date entered <strong class='date'>date</strong> is not in the correct format.  Must be <strong>dd/mm/yyyy</strong>.";
var dp_err_flightRange = "Flights on this route have only been scheduled between <strong class='date'>{date1}</strong> to <strong class='date'>{date2}</strong> at this point. Please select a date between this or choose a different route.";
var datepicker_holidaysReturnAddition = "5";
var date_format = "dd/mm/yy";
Date.format = date_format;
var date_format_regx = /[0-9]{1,2}\/[0-9]{1,2}\/[0-9]{4}/;
var currencyFormatRule = "\\B(?=(?:\\d{3})+(?!\\d))";
var currencyFormatSeparator = ",";
var today = new Date();
today.setFullYear(today.getFullYear() + 1);
var datepicker_endDate = today;
var booking_engine_viewstate = "/wEPDwUBMGQYAQUeX19Db250cm9sc1JlcXVpcmVQb3N0QmFja0tleV9fFgEFJ01lbWJlckxvZ2luU2VhcmNoVmlldyRtZW1iZXJfUmVtZW1iZXJtZaXQj/rtlZ1hPS0zPQj+skvkM9qtml4xeXxQQ8y8k6xx";
var booking_engine_culture = "en-TT";
var booking_engine_language = "EN";
var site_culture = "en-TT";
var flight_status_yesterday = "Yesterday";
var flight_status_today = "Today";
var flight_status_tomorrow = "Tomorrow";
var flight_status_please_select = "Please Select";
var web_checkin_culture = "en-TT";
var message_loading = "Loading...";
var message_searching = "Searching...";
var message_validationFlights = "Please select your <strong>origin, destination</strong> and <strong>travel dates</strong> to search for flights";
var message_HoldidayPackagesErrorWarning = "";
var message_validationFlightsHotels = "Please select your <strong>location</strong> and <strong>check in/out dates</strong> to search";
var message_invalidOrigin = "Please select a valid <strong>Origin</strong> first";
var message_noFlightResults = "No locations matched your search.<br />Please try again or alternatively view <a href='http://www.jetstar.com/id/en/planning-and-booking/where-we-go/route-map'>Jetstar\'s route map</a>";
var message_myJetstarErrorMessage = "Please ensure the following fields are filled in: ";
var message_selectOrigin = "Please select your Point of Origin";
var message_selectDestination = "Please select your Destination";
var message_selectHotel = "";
var message_selectHostel = "";
var ShowHotelResultsOnly = "";
var message_selectDepartDate = "Select your departure date";
var message_selectReturnDate = "Select your <span>return</span> date";
var message_selectCheckinDate = "Select your departure date";
var message_selectCheckoutDate = "Select your <span>return</span> date";
var message_datePickerClose = "Close";
var message_departOn = "Depart on1:";
var label_origin = "Origin";
var label_destination = "Destination";
var label_close = "Close";
var message_advanceBooking = "Flights may be booked approximately 9 months in advance";
var offer_additional_routes = "False";
var additional_routes_text = "";
var additional_routes_link = "";
var recent_search_header_label = "Your recent searches:";
var recent_search_single_label = "";
var recent_search_return_label = "";
var recent_search_multi_label = "";
var MobileBookingUrl = "https://m.jetstar.com/#booking/select-departure-flight";
var MobileCookieName = "isMobile";
var special_route_stopover = "/jetstar indonesia/website/home/popups/special route stopover?token=289";
var max_passenger_allowed = "/jetstar indonesia/website/home/popups/total allowed passengers?token=289";
var message_selectDepartDate_hotels = "Select your departure date";
var message_selectReturnDate_hotels = "Select your <span>return</span> date";
var max_flightspecials = "6";
var json_flightspecials_data = "";
var binError_imgSrc = "";
var message_noFlightSpecials = "<p>There are currently no special offers available from this airport.</p> <p>Please check again soon or try another airport</p>";
var message_errorFlightSpecials = "<p>Please check our <a href='http://www.jetstar.com/au/en/special-offers'>special offers page</a></p>";
var binEmpty_MainHeadingMsg = "";
var binEmpty_SubTextMsg = "";
var binErr_MainHeadingMsg = "";
var binErr_SubTextMsg = "";
var data_flightspecials_default = "DPS";
var exclude_tax = true;
var data_flightspecials_page = "";
var data_leadin_fares_url = "/id/en/popups/compact-search-pop-up";
var data_flightspecials_pricesuffix = "";
var data_flightspecials_pricecurrency = "RP";
var message_flightspecials_LinkSpecialsText = "Find flights";
var message_flightspecials_LinkLeadInText = "Book Now";
var message_flightspecials_leadInText = "Subject to Availability";
var data_bargainBin_HotFareText = "";
var data_bargainBin_SaleFareText = "";
var data_bargainBin_BusinessSaleText = "";
var json_hotelSpecial_url = "http://hotels.jetstar.com/search/list";
var json_hotelSpecial_api = "http://hotels.jetstar.com/api/v1/search.json";
var json_hotelSpecial_params = "?adults=2&daysToCheckIn=14&numberOfNights=1&sortBy=price&sortDir=asc&location=";
var data_hotelSpecial_priceStr = "";
var data_hotelSpecial_data = [{
    "searchStr": "DPS",
    "displayName": "Bali",
    "imageUrl": ""
}, {
    "searchStr": "CGK",
    "displayName": "Jakarta",
    "imageUrl": ""
}, {
    "searchStr": "KNO",
    "displayName": "Medan",
    "imageUrl": ""
}, {
    "searchStr": "SUB",
    "displayName": "Surabaya",
    "imageUrl": ""
}];
var data_hotelSpecialAgoda = [{
    "searchStr": "Bali"
}, {
    "searchStr": "Jakarta"
}, {
    "searchStr": "Medan"
}, {
    "searchStr": "Surabaya"
}];
var json_agoda_api = "http://deals.agoda.com/api/JSON/";
var agoda_param_apikey = "468cfbef-ae58-4931-8b61-7c59311320db";
var agoda_param_siteid = "1686333";
var agoda_param_LengthOfStay = "1";
var agoda_param_MinStarRating = "3";
var agoda_param_MaxStarRating = "5";
var agoda_param_Currency = "IDR";
var agoda_param_Language = "en-GB";
var agoda_param_MinDailyRate = "100000";
var agoda_param_MaxDailyRate = "200000";
var agoda_param_MinDiscountPercentage = "15";
var agoda_param_MinReviewScore = "5";
var agoda_discount_txt = "{percentVal}% OFF";
var agoda_rating_txt = "";
var agoda_priceString = "Per night from <span class='price'>RP<span class='value'></span></span>";
var pe_switchedOn = false;
var pe_book_UID = "39b5379c652b";
var pe_booknow_UID = "39b5379c652b";
var pe_book_QID = "b59e5954ba6c";
var pe_booknow_QID = "9df496572198";
var pe_waitingPage = "";
var pe_FilteredPages = ['.packages', '.destinations'];
var messageGV_firstName = "";
var messageGV_lastName = "";
var messageGV_email = "";
var messageGV_RecipientMessage = "";
var messageGV_cardName = "";
var messageGV_MonthRequired = "";
var messageGV_expiryDate = "";
var messageGV_cvv = "";
var messageGV_cardUnaccepted = "";
var messageGV_cardRequired = "";
var messageGV_cardValid = "";
var json_valid_dates = "/id/en/services/compactsearchservice?token=289&action=LoadValidDates";
var json_currencylist = "/id/en/services/compactsearchservice?token=289&action=LoadCurrencyList";
var message_saleDirectionBoth = "Flight is available in both directions";
var message_saleDirectionOne = "Flight is only available in the direction shown";
var findFlightsHeading = "Find Flights";
var importantInfoHeading = "Important Information";
var closeText = "Close";
var flight_academy_videos = "";
var flight_academy_xmlfile = "";
var booking_engine_currency = "";
var data_countryArray = ['Indonesia', 'Australia', 'Cambodia', 'China (including Hong Kong SAR, Macau SAR and Taiwan)', 'Cook Islands', 'Fiji', 'France', 'Hong Kong', 'Italy', 'Japan', 'Macau', 'Malaysia', 'Myanmar', 'New Zealand', 'Philippines', 'Singapore', 'South Korea', 'Sri Lanka', 'Taiwan', 'Thailand', 'United Arab Emirates', 'United Kingdom', 'USA', 'Vietnam'];
var data_locations = [
    [0, 'Bali (Denpasar)', 'DPS'],
    [0, 'Jakarta', 'CGK'],
    [0, 'Medan - Kualanamu ', 'KNO'],
    [0, 'Palembang', 'PLM'],
    [0, 'Pekanbaru', 'PKU'],
    [0, 'Surabaya', 'SUB'],
    [1, 'Adelaide', 'ADL'],
    [1, 'Airlie Beach', 'WSY'],
    [1, 'Albany', 'PER|ALH'],
    [1, 'Ayers Rock (Uluru)', 'AYQ|AYQ'],
    [1, 'Ballina Byron', 'BNK|BBY'],
    [1, 'Barossa Valley', 'ADL|BAZ'],
    [1, 'Brampton Island', 'MKY|BMP'],
    [1, 'Brisbane', 'BNE'],
    [1, 'Busselton', 'PER|BSZ'],
    [1, 'Busselton Margaret River', 'BQB'],
    [1, 'Cairns', 'CNS'],
    [1, 'Canberra', 'CBR'],
    [1, 'Canberra (Jolimont Bus Station)', 'JLM'],
    [1, 'Cradle Mountain', 'HBA|CMO'],
    [1, 'Darwin', 'DRW'],
    [1, 'Daydream Island', 'DDI|DDI'],
    [1, 'Daylesford', ''],
    [1, 'Falls Creek', 'MEL|FLC'],
    [1, 'Gold Coast', 'OOL'],
    [1, 'Hamilton Island', 'HTI|HTI'],
    [1, 'Hayman Island', 'HIS'],
    [1, 'Hervey Bay', 'HVB'],
    [1, 'Hobart', 'HBA'],
    [1, 'Hunter Valley', 'NTL|HTV'],
    [1, 'Kakadu', 'DRW|KAP'],
    [1, 'Kingscliff', 'OOL|KFF'],
    [1, 'Launceston', 'LST'],
    [1, 'Long Island', 'HAP|HAP'],
    [1, 'Lorne', 'AVV|LOR'],
    [1, 'Mackay', 'MKY'],
    [1, 'Margaret River', 'PER|MGV'],
    [1, 'Melbourne (all airports)', 'VIZ|MEL'],
    [1, 'Melbourne (Avalon)', 'AVV|GEX'],
    [1, 'Melbourne (Tullamarine)', 'MEL'],
    [1, 'Mornington Peninsula', 'MEL|MQR'],
    [1, 'Newcastle – Port Stephens', 'NTL'],
    [1, 'Noosa', 'MCY|NSA'],
    [1, 'Palm Cove', 'CNS|PCQ'],
    [1, 'Perth', 'PER'],
    [1, 'Port Douglas', 'CNS|PTI'],
    [1, 'Port Stephens', 'NTL|PTE'],
    [1, 'Rockhampton', 'ROK'],
    [1, 'Sunshine Coast', 'MCY'],
    [1, 'Sydney', 'SYD'],
    [1, 'Torquay', 'AVV|TOR'],
    [1, 'Townsville', 'TSV'],
    [1, 'Warrnambool', 'AVV|WMB'],
    [1, 'Whitsunday Coast', 'PPP'],
    [1, 'Yarra Valley', 'MEL|ZYV'],
    [1, 'Yepoon', 'ROK|YVP'],
    [2, 'Phnom Penh', 'PNH'],
    [2, 'Siem Reap', 'REP'],
    [3, 'Beijing', 'PEK'],
    [3, 'Changsha', 'CSX'],
    [3, 'Guangzhou', 'CAN|CAN'],
    [3, 'Guilin', 'KWL'],
    [3, 'Guiyang', 'KWE'],
    [3, 'Haikou', 'HAK'],
    [3, 'Hangzhou', 'HGH'],
    [3, 'Hefei', 'HFE'],
    [3, 'Hong Kong', 'HKG'],
    [3, 'Kaohsiung', 'KHH'],
    [3, 'Macau', 'MFM'],
    [3, 'Nanning', 'NNG'],
    [3, 'Ningbo', 'NGB'],
    [3, 'Sanya', 'SYX'],
    [3, 'Shanghai (Pudong)', 'PVG'],
    [3, 'Shantou / Jieyang', 'SWA'],
    [3, 'Taipei', 'TPE'],
    [3, 'Wuhan', 'WUH'],
    [3, 'Xuzhou', 'XUZ'],
    [3, 'Zhengzhou', 'CGO'],
    [4, 'Rarotonga', 'RAR'],
    [5, 'Nadi', 'NAN'],
    [9, 'Fukuoka', 'FUK'],
    [9, 'Kagoshima', 'KOJ'],
    [9, 'Kochi', 'KCZ'],
    [9, 'Kumamoto', 'KMJ'],
    [9, 'Matsuyama', 'MYJ'],
    [9, 'Miyako (Shimojishima)', 'SHI'],
    [9, 'Miyazaki', 'KMI'],
    [9, 'Nagasaki', 'NGS'],
    [9, 'Nagoya (Chubu)', 'NGO'],
    [9, 'Oita', 'OIT'],
    [9, 'Okinawa (Naha)', 'OKA'],
    [9, 'Osaka', 'KIX|OSA'],
    [9, 'Sapporo (New Chitose)', 'CTS'],
    [9, 'Shonai', 'SYO'],
    [9, 'Takamatsu', 'TAK'],
    [9, 'Tokyo (Narita)', 'NRT|TYO'],
    [11, 'Kuala Lumpur', 'KUL'],
    [11, 'Penang', 'PEN'],
    [12, 'Yangon', 'RGN'],
    [13, 'Auckland', 'AKL'],
    [13, 'Christchurch', 'CHC'],
    [13, 'Dunedin', 'DUD'],
    [13, 'Napier', 'NPE'],
    [13, 'Nelson', 'NSN'],
    [13, 'New Plymouth', 'NPL'],
    [13, 'Palmerston North', 'PMR'],
    [13, 'Queenstown', 'ZQN'],
    [13, 'Wellington', 'WLG'],
    [14, 'Clark', 'CRK'],
    [14, 'Manila', 'MNL'],
    [15, 'Singapore', 'SIN'],
    [16, 'Seoul (Incheon)', 'ICN'],
    [17, 'Colombo', 'CMB'],
    [19, 'Bangkok', 'BKK|XBK'],
    [19, 'Chiang Mai', 'CNX'],
    [19, 'Hat Yai', 'HDY'],
    [19, 'Phuket', 'HKT'],
    [22, 'Honolulu', 'HNL'],
    [23, 'Buon Ma Thuot', 'BMV'],
    [23, 'Can Tho', 'VCA'],
    [23, 'Chu Lai', 'VCL'],
    [23, 'Da Lat', 'DLI'],
    [23, 'Da Nang', 'DAD'],
    [23, 'Dong Hoi', 'VDH'],
    [23, 'Hai Phong', 'HPH'],
    [23, 'Hanoi', 'HAN'],
    [23, 'Ho Chi Minh City', 'SGN'],
    [23, 'Hue', 'HUI'],
    [23, 'Nha Trang', 'CXR'],
    [23, 'Phu Quoc', 'PQC'],
    [23, 'Pleiku', 'PXU'],
    [23, 'Quy Nhon', 'UIH'],
    [23, 'Thanh Hoa', 'THD'],
    [23, 'Tuy Hoa', 'TBB'],
    [23, 'Vinh', 'VII']
];
var data_flightOrigins = [0, 1, 2, 5, 6, 9, 10, 13, 15, 16, 17, 20, 24, 25, 27, 28, 32, 35, 37, 38, 39, 41, 44, 48, 49, 51, 53, 56, 57, 60, 62, 63, 65, 66, 68, 71, 72, 73, 74, 75, 76, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 105, 106, 107, 108, 109, 110, 111, 112, 113, 116, 117, 122, 126];
var data_flightDestinations = {
    'DPS': [{
        id: 6,
        code: 'ADL',
        curr: []
    }, {
        id: 99,
        code: 'AKL',
        curr: []
    }, {
        id: 38,
        code: 'AVV|GEX',
        curr: []
    }, {
        id: 113,
        code: 'BKK|XBK',
        curr: []
    }, {
        id: 13,
        code: 'BNE',
        curr: []
    }, {
        id: 10,
        code: 'BNK|BBY',
        curr: []
    }, {
        id: 17,
        code: 'CBR',
        curr: []
    }, {
        id: 100,
        code: 'CHC',
        curr: []
    }, {
        id: 112,
        code: 'CMB',
        curr: [{
            'caption': 'US Dollar',
            'value': 'USD'
        }]
    }, {
        id: 16,
        code: 'CNS',
        curr: []
    }, {
        id: 108,
        code: 'CRK',
        curr: []
    }, {
        id: 122,
        code: 'DAD',
        curr: []
    }, {
        id: 20,
        code: 'DRW',
        curr: []
    }, {
        id: 80,
        code: 'FUK',
        curr: []
    }, {
        id: 63,
        code: 'HAK',
        curr: []
    }, {
        id: 28,
        code: 'HBA',
        curr: []
    }, {
        id: 116,
        code: 'HKT',
        curr: []
    }, {
        id: 117,
        code: 'HNL',
        curr: []
    }, {
        id: 91,
        code: 'KIX|OSA',
        curr: []
    }, {
        id: 2,
        code: 'KNO',
        curr: []
    }, {
        id: 96,
        code: 'KUL',
        curr: []
    }, {
        id: 32,
        code: 'LST',
        curr: []
    }, {
        id: 48,
        code: 'MCY',
        curr: []
    }, {
        id: 39,
        code: 'MEL',
        curr: []
    }, {
        id: 109,
        code: 'MNL',
        curr: []
    }, {
        id: 95,
        code: 'NRT|TYO',
        curr: []
    }, {
        id: 41,
        code: 'NTL',
        curr: []
    }, {
        id: 24,
        code: 'OOL',
        curr: []
    }, {
        id: 97,
        code: 'PEN',
        curr: []
    }, {
        id: 44,
        code: 'PER',
        curr: []
    }, {
        id: 56,
        code: 'PNH',
        curr: []
    }, {
        id: 53,
        code: 'PPP',
        curr: []
    }, {
        id: 98,
        code: 'RGN',
        curr: []
    }, {
        id: 126,
        code: 'SGN',
        curr: []
    }, {
        id: 110,
        code: 'SIN',
        curr: []
    }, {
        id: 73,
        code: 'SWA',
        curr: []
    }, {
        id: 49,
        code: 'SYD',
        curr: []
    }, {
        id: 74,
        code: 'TPE',
        curr: []
    }, {
        id: 51,
        code: 'TSV',
        curr: []
    }, {
        id: 37,
        code: 'VIZ|MEL',
        curr: []
    }, {
        id: 107,
        code: 'WLG',
        curr: []
    }, {
        id: 106,
        code: 'ZQN',
        curr: []
    }],
    'CGK': [{
        id: 6,
        code: 'ADL',
        curr: []
    }, {
        id: 99,
        code: 'AKL',
        curr: []
    }, {
        id: 113,
        code: 'BKK|XBK',
        curr: []
    }, {
        id: 112,
        code: 'CMB',
        curr: []
    }, {
        id: 108,
        code: 'CRK',
        curr: []
    }, {
        id: 20,
        code: 'DRW',
        curr: []
    }, {
        id: 80,
        code: 'FUK',
        curr: []
    }, {
        id: 63,
        code: 'HAK',
        curr: []
    }, {
        id: 125,
        code: 'HAN',
        curr: []
    }, {
        id: 28,
        code: 'HBA',
        curr: []
    }, {
        id: 66,
        code: 'HKG',
        curr: []
    }, {
        id: 116,
        code: 'HKT',
        curr: []
    }, {
        id: 91,
        code: 'KIX|OSA',
        curr: []
    }, {
        id: 96,
        code: 'KUL',
        curr: []
    }, {
        id: 32,
        code: 'LST',
        curr: []
    }, {
        id: 39,
        code: 'MEL',
        curr: []
    }, {
        id: 109,
        code: 'MNL',
        curr: []
    }, {
        id: 90,
        code: 'OKA',
        curr: []
    }, {
        id: 24,
        code: 'OOL',
        curr: []
    }, {
        id: 97,
        code: 'PEN',
        curr: []
    }, {
        id: 44,
        code: 'PER',
        curr: []
    }, {
        id: 56,
        code: 'PNH',
        curr: []
    }, {
        id: 57,
        code: 'REP',
        curr: []
    }, {
        id: 98,
        code: 'RGN',
        curr: []
    }, {
        id: 126,
        code: 'SGN',
        curr: []
    }, {
        id: 110,
        code: 'SIN',
        curr: []
    }, {
        id: 73,
        code: 'SWA',
        curr: []
    }, {
        id: 49,
        code: 'SYD',
        curr: []
    }, {
        id: 71,
        code: 'SYX',
        curr: []
    }, {
        id: 74,
        code: 'TPE',
        curr: []
    }, {
        id: 107,
        code: 'WLG',
        curr: []
    }],
    'KNO': [{
        id: 99,
        code: 'AKL',
        curr: []
    }, {
        id: 113,
        code: 'BKK|XBK',
        curr: []
    }, {
        id: 112,
        code: 'CMB',
        curr: [{
            'caption': 'US Dollar',
            'value': 'USD'
        }]
    }, {
        id: 108,
        code: 'CRK',
        curr: []
    }, {
        id: 122,
        code: 'DAD',
        curr: []
    }, {
        id: 0,
        code: 'DPS',
        curr: []
    }, {
        id: 20,
        code: 'DRW',
        curr: []
    }, {
        id: 80,
        code: 'FUK',
        curr: []
    }, {
        id: 63,
        code: 'HAK',
        curr: []
    }, {
        id: 116,
        code: 'HKT',
        curr: []
    }, {
        id: 91,
        code: 'KIX|OSA',
        curr: []
    }, {
        id: 96,
        code: 'KUL',
        curr: []
    }, {
        id: 39,
        code: 'MEL',
        curr: []
    }, {
        id: 109,
        code: 'MNL',
        curr: []
    }, {
        id: 90,
        code: 'OKA',
        curr: []
    }, {
        id: 97,
        code: 'PEN',
        curr: []
    }, {
        id: 44,
        code: 'PER',
        curr: []
    }, {
        id: 57,
        code: 'REP',
        curr: []
    }, {
        id: 126,
        code: 'SGN',
        curr: []
    }, {
        id: 110,
        code: 'SIN',
        curr: []
    }, {
        id: 71,
        code: 'SYX',
        curr: []
    }, {
        id: 74,
        code: 'TPE',
        curr: []
    }],
    'SUB': [{
        id: 6,
        code: 'ADL',
        curr: []
    }, {
        id: 99,
        code: 'AKL',
        curr: []
    }, {
        id: 113,
        code: 'BKK|XBK',
        curr: []
    }, {
        id: 112,
        code: 'CMB',
        curr: [{
            'caption': 'US Dollar',
            'value': 'USD'
        }]
    }, {
        id: 108,
        code: 'CRK',
        curr: []
    }, {
        id: 122,
        code: 'DAD',
        curr: []
    }, {
        id: 20,
        code: 'DRW',
        curr: []
    }, {
        id: 80,
        code: 'FUK',
        curr: []
    }, {
        id: 116,
        code: 'HKT',
        curr: []
    }, {
        id: 91,
        code: 'KIX|OSA',
        curr: []
    }, {
        id: 96,
        code: 'KUL',
        curr: []
    }, {
        id: 39,
        code: 'MEL',
        curr: []
    }, {
        id: 109,
        code: 'MNL',
        curr: []
    }, {
        id: 90,
        code: 'OKA',
        curr: []
    }, {
        id: 97,
        code: 'PEN',
        curr: []
    }, {
        id: 44,
        code: 'PER',
        curr: []
    }, {
        id: 56,
        code: 'PNH',
        curr: []
    }, {
        id: 98,
        code: 'RGN',
        curr: []
    }, {
        id: 126,
        code: 'SGN',
        curr: []
    }, {
        id: 110,
        code: 'SIN',
        curr: []
    }, {
        id: 74,
        code: 'TPE',
        curr: []
    }],
    'ADL': [{
        id: 99,
        code: 'AKL',
        curr: []
    }, {
        id: 38,
        code: 'AVV|GEX',
        curr: []
    }, {
        id: 9,
        code: 'AYQ|AYQ',
        curr: []
    }, {
        id: 113,
        code: 'BKK|XBK',
        curr: []
    }, {
        id: 13,
        code: 'BNE',
        curr: []
    }, {
        id: 10,
        code: 'BNK|BBY',
        curr: []
    }, {
        id: 1,
        code: 'CGK',
        curr: []
    }, {
        id: 100,
        code: 'CHC',
        curr: []
    }, {
        id: 16,
        code: 'CNS',
        curr: []
    }, {
        id: 92,
        code: 'CTS',
        curr: []
    }, {
        id: 0,
        code: 'DPS',
        curr: []
    }, {
        id: 20,
        code: 'DRW',
        curr: []
    }, {
        id: 101,
        code: 'DUD',
        curr: []
    }, {
        id: 80,
        code: 'FUK',
        curr: []
    }, {
        id: 28,
        code: 'HBA',
        curr: []
    }, {
        id: 66,
        code: 'HKG',
        curr: []
    }, {
        id: 116,
        code: 'HKT',
        curr: []
    }, {
        id: 117,
        code: 'HNL',
        curr: []
    }, {
        id: 25,
        code: 'HTI|HTI',
        curr: []
    }, {
        id: 91,
        code: 'KIX|OSA',
        curr: []
    }, {
        id: 81,
        code: 'KOJ',
        curr: []
    }, {
        id: 96,
        code: 'KUL',
        curr: []
    }, {
        id: 48,
        code: 'MCY',
        curr: []
    }, {
        id: 39,
        code: 'MEL',
        curr: []
    }, {
        id: 109,
        code: 'MNL',
        curr: []
    }, {
        id: 84,
        code: 'MYJ',
        curr: []
    }, {
        id: 95,
        code: 'NRT|TYO',
        curr: []
    }, {
        id: 41,
        code: 'NTL',
        curr: []
    }, {
        id: 89,
        code: 'OIT',
        curr: []
    }, {
        id: 90,
        code: 'OKA',
        curr: []
    }, {
        id: 24,
        code: 'OOL',
        curr: []
    }, {
        id: 97,
        code: 'PEN',
        curr: []
    }, {
        id: 44,
        code: 'PER',
        curr: []
    }, {
        id: 56,
        code: 'PNH',
        curr: []
    }, {
        id: 110,
        code: 'SIN',
        curr: []
    }, {
        id: 5,
        code: 'SUB',
        curr: []
    }, {
        id: 49,
        code: 'SYD',
        curr: []
    }, {
        id: 94,
        code: 'TAK',
        curr: []
    }, {
        id: 51,
        code: 'TSV',
        curr: []
    }, {
        id: 37,
        code: 'VIZ|MEL',
        curr: []
    }, {
        id: 107,
        code: 'WLG',
        curr: []
    }, {
        id: 106,
        code: 'ZQN',
        curr: []
    }],
    'AYQ|AYQ': [{
        id: 6,
        code: 'ADL',
        curr: []
    }, {
        id: 99,
        code: 'AKL',
        curr: []
    }, {
        id: 38,
        code: 'AVV|GEX',
        curr: []
    }, {
        id: 13,
        code: 'BNE',
        curr: []
    }, {
        id: 100,
        code: 'CHC',
        curr: []
    }, {
        id: 16,
        code: 'CNS',
        curr: []
    }, {
        id: 92,
        code: 'CTS',
        curr: []
    }, {
        id: 20,
        code: 'DRW',
        curr: []
    }, {
        id: 91,
        code: 'KIX|OSA',
        curr: []
    }, {
        id: 39,
        code: 'MEL',
        curr: []
    }, {
        id: 95,
        code: 'NRT|TYO',
        curr: []
    }, {
        id: 41,
        code: 'NTL',
        curr: []
    }, {
        id: 24,
        code: 'OOL',
        curr: []
    }, {
        id: 44,
        code: 'PER',
        curr: []
    }, {
        id: 49,
        code: 'SYD',
        curr: []
    }, {
        id: 37,
        code: 'VIZ|MEL',
        curr: []
    }],
    'BNK|BBY': [{
        id: 6,
        code: 'ADL',
        curr: []
    }, {
        id: 99,
        code: 'AKL',
        curr: []
    }, {
        id: 38,
        code: 'AVV|GEX',
        curr: []
    }, {
        id: 100,
        code: 'CHC',
        curr: []
    }, {
        id: 16,
        code: 'CNS',
        curr: []
    }, {
        id: 0,
        code: 'DPS',
        curr: []
    }, {
        id: 28,
        code: 'HBA',
        curr: []
    }, {
        id: 116,
        code: 'HKT',
        curr: []
    }, {
        id: 91,
        code: 'KIX|OSA',
        curr: []
    }, {
        id: 32,
        code: 'LST',
        curr: []
    }, {
        id: 39,
        code: 'MEL',
        curr: []
    }, {
        id: 95,
        code: 'NRT|TYO',
        curr: []
    }, {
        id: 49,
        code: 'SYD',
        curr: []
    }, {
        id: 107,
        code: 'WLG',
        curr: []
    }],
    'BNE': [{
        id: 6,
        code: 'ADL',
        curr: []
    }, {
        id: 99,
        code: 'AKL',
        curr: []
    }, {
        id: 38,
        code: 'AVV|GEX',
        curr: []
    }, {
        id: 9,
        code: 'AYQ|AYQ',
        curr: []
    }, {
        id: 113,
        code: 'BKK|XBK',
        curr: []
    }, {
        id: 100,
        code: 'CHC',
        curr: []
    }, {
        id: 16,
        code: 'CNS',
        curr: []
    }, {
        id: 92,
        code: 'CTS',
        curr: []
    }, {
        id: 0,
        code: 'DPS',
        curr: []
    }, {
        id: 20,
        code: 'DRW',
        curr: []
    }, {
        id: 80,
        code: 'FUK',
        curr: []
    }, {
        id: 28,
        code: 'HBA',
        curr: []
    }, {
        id: 116,
        code: 'HKT',
        curr: []
    }, {
        id: 117,
        code: 'HNL',
        curr: []
    }, {
        id: 25,
        code: 'HTI|HTI',
        curr: []
    }, {
        id: 91,
        code: 'KIX|OSA',
        curr: []
    }, {
        id: 81,
        code: 'KOJ',
        curr: []
    }, {
        id: 32,
        code: 'LST',
        curr: []
    }, {
        id: 39,
        code: 'MEL',
        curr: []
    }, {
        id: 35,
        code: 'MKY',
        curr: []
    }, {
        id: 109,
        code: 'MNL',
        curr: []
    }, {
        id: 84,
        code: 'MYJ',
        curr: []
    }, {
        id: 95,
        code: 'NRT|TYO',
        curr: []
    }, {
        id: 41,
        code: 'NTL',
        curr: []
    }, {
        id: 89,
        code: 'OIT',
        curr: []
    }, {
        id: 44,
        code: 'PER',
        curr: []
    }, {
        id: 53,
        code: 'PPP',
        curr: []
    }, {
        id: 126,
        code: 'SGN',
        curr: []
    }, {
        id: 110,
        code: 'SIN',
        curr: []
    }, {
        id: 49,
        code: 'SYD',
        curr: []
    }, {
        id: 94,
        code: 'TAK',
        curr: []
    }, {
        id: 51,
        code: 'TSV',
        curr: []
    }, {
        id: 37,
        code: 'VIZ|MEL',
        curr: []
    }, {
        id: 107,
        code: 'WLG',
        curr: []
    }, {
        id: 7,
        code: 'WSY',
        curr: []
    }, {
        id: 106,
        code: 'ZQN',
        curr: []
    }],
    'BQB': [{
        id: 39,
        code: 'MEL',
        curr: []
    }, {
        id: 37,
        code: 'VIZ|MEL',
        curr: []
    }],
    'CNS': [{
        id: 6,
        code: 'ADL',
        curr: []
    }, {
        id: 99,
        code: 'AKL',
        curr: []
    }, {
        id: 38,
        code: 'AVV|GEX',
        curr: []
    }, {
        id: 9,
        code: 'AYQ|AYQ',
        curr: []
    }, {
        id: 13,
        code: 'BNE',
        curr: []
    }, {
        id: 10,
        code: 'BNK|BBY',
        curr: []
    }, {
        id: 100,
        code: 'CHC',
        curr: []
    }, {
        id: 92,
        code: 'CTS',
        curr: []
    }, {
        id: 0,
        code: 'DPS',
        curr: []
    }, {
        id: 20,
        code: 'DRW',
        curr: []
    }, {
        id: 80,
        code: 'FUK',
        curr: []
    }, {
        id: 28,
        code: 'HBA',
        curr: []
    }, {
        id: 66,
        code: 'HKG',
        curr: []
    }, {
        id: 116,
        code: 'HKT',
        curr: []
    }, {
        id: 117,
        code: 'HNL',
        curr: []
    }, {
        id: 82,
        code: 'KCZ',
        curr: []
    }, {
        id: 91,
        code: 'KIX|OSA',
        curr: []
    }, {
        id: 86,
        code: 'KMI',
        curr: []
    }, {
        id: 83,
        code: 'KMJ',
        curr: []
    }, {
        id: 81,
        code: 'KOJ',
        curr: []
    }, {
        id: 96,
        code: 'KUL',
        curr: []
    }, {
        id: 39,
        code: 'MEL',
        curr: []
    }, {
        id: 35,
        code: 'MKY',
        curr: []
    }, {
        id: 84,
        code: 'MYJ',
        curr: []
    }, {
        id: 87,
        code: 'NGS',
        curr: []
    }, {
        id: 95,
        code: 'NRT|TYO',
        curr: []
    }, {
        id: 41,
        code: 'NTL',
        curr: []
    }, {
        id: 89,
        code: 'OIT',
        curr: []
    }, {
        id: 90,
        code: 'OKA',
        curr: []
    }, {
        id: 24,
        code: 'OOL',
        curr: []
    }, {
        id: 97,
        code: 'PEN',
        curr: []
    }, {
        id: 44,
        code: 'PER',
        curr: []
    }, {
        id: 72,
        code: 'PVG',
        curr: []
    }, {
        id: 85,
        code: 'SHI',
        curr: []
    }, {
        id: 110,
        code: 'SIN',
        curr: []
    }, {
        id: 49,
        code: 'SYD',
        curr: []
    }, {
        id: 93,
        code: 'SYO',
        curr: []
    }, {
        id: 94,
        code: 'TAK',
        curr: []
    }, {
        id: 74,
        code: 'TPE',
        curr: []
    }, {
        id: 37,
        code: 'VIZ|MEL',
        curr: []
    }, {
        id: 107,
        code: 'WLG',
        curr: []
    }, {
        id: 75,
        code: 'WUH',
        curr: []
    }, {
        id: 106,
        code: 'ZQN',
        curr: []
    }],
    'CBR': [{
        id: 0,
        code: 'DPS',
        curr: []
    }, {
        id: 116,
        code: 'HKT',
        curr: []
    }],
    'DRW': [{
        id: 6,
        code: 'ADL',
        curr: []
    }, {
        id: 99,
        code: 'AKL',
        curr: []
    }, {
        id: 38,
        code: 'AVV|GEX',
        curr: []
    }, {
        id: 9,
        code: 'AYQ|AYQ',
        curr: []
    }, {
        id: 113,
        code: 'BKK|XBK',
        curr: []
    }, {
        id: 13,
        code: 'BNE',
        curr: []
    }, {
        id: 1,
        code: 'CGK',
        curr: []
    }, {
        id: 100,
        code: 'CHC',
        curr: []
    }, {
        id: 112,
        code: 'CMB',
        curr: [{
            'caption': 'US Dollar',
            'value': 'USD'
        }]
    }, {
        id: 16,
        code: 'CNS',
        curr: []
    }, {
        id: 108,
        code: 'CRK',
        curr: []
    }, {
        id: 92,
        code: 'CTS',
        curr: []
    }, {
        id: 0,
        code: 'DPS',
        curr: []
    }, {
        id: 80,
        code: 'FUK',
        curr: []
    }, {
        id: 63,
        code: 'HAK',
        curr: []
    }, {
        id: 28,
        code: 'HBA',
        curr: []
    }, {
        id: 116,
        code: 'HKT',
        curr: []
    }, {
        id: 117,
        code: 'HNL',
        curr: []
    }, {
        id: 91,
        code: 'KIX|OSA',
        curr: []
    }, {
        id: 2,
        code: 'KNO',
        curr: []
    }, {
        id: 81,
        code: 'KOJ',
        curr: []
    }, {
        id: 96,
        code: 'KUL',
        curr: []
    }, {
        id: 32,
        code: 'LST',
        curr: []
    }, {
        id: 39,
        code: 'MEL',
        curr: []
    }, {
        id: 35,
        code: 'MKY',
        curr: []
    }, {
        id: 109,
        code: 'MNL',
        curr: []
    }, {
        id: 84,
        code: 'MYJ',
        curr: []
    }, {
        id: 79,
        code: 'NAN',
        curr: []
    }, {
        id: 95,
        code: 'NRT|TYO',
        curr: []
    }, {
        id: 41,
        code: 'NTL',
        curr: []
    }, {
        id: 89,
        code: 'OIT',
        curr: []
    }, {
        id: 90,
        code: 'OKA',
        curr: []
    }, {
        id: 24,
        code: 'OOL',
        curr: []
    }, {
        id: 97,
        code: 'PEN',
        curr: []
    }, {
        id: 44,
        code: 'PER',
        curr: []
    }, {
        id: 56,
        code: 'PNH',
        curr: []
    }, {
        id: 53,
        code: 'PPP',
        curr: []
    }, {
        id: 57,
        code: 'REP',
        curr: []
    }, {
        id: 98,
        code: 'RGN',
        curr: []
    }, {
        id: 126,
        code: 'SGN',
        curr: []
    }, {
        id: 110,
        code: 'SIN',
        curr: []
    }, {
        id: 5,
        code: 'SUB',
        curr: []
    }, {
        id: 73,
        code: 'SWA',
        curr: []
    }, {
        id: 49,
        code: 'SYD',
        curr: []
    }, {
        id: 71,
        code: 'SYX',
        curr: []
    }, {
        id: 74,
        code: 'TPE',
        curr: []
    }, {
        id: 106,
        code: 'ZQN',
        curr: []
    }],
    'OOL': [{
        id: 6,
        code: 'ADL',
        curr: []
    }, {
        id: 99,
        code: 'AKL',
        curr: []
    }, {
        id: 38,
        code: 'AVV|GEX',
        curr: []
    }, {
        id: 9,
        code: 'AYQ|AYQ',
        curr: []
    }, {
        id: 113,
        code: 'BKK|XBK',
        curr: []
    }, {
        id: 1,
        code: 'CGK',
        curr: []
    }, {
        id: 100,
        code: 'CHC',
        curr: []
    }, {
        id: 16,
        code: 'CNS',
        curr: []
    }, {
        id: 92,
        code: 'CTS',
        curr: []
    }, {
        id: 0,
        code: 'DPS',
        curr: []
    }, {
        id: 20,
        code: 'DRW',
        curr: []
    }, {
        id: 80,
        code: 'FUK',
        curr: []
    }, {
        id: 28,
        code: 'HBA',
        curr: []
    }, {
        id: 66,
        code: 'HKG',
        curr: []
    }, {
        id: 116,
        code: 'HKT',
        curr: []
    }, {
        id: 117,
        code: 'HNL',
        curr: []
    }, {
        id: 82,
        code: 'KCZ',
        curr: []
    }, {
        id: 91,
        code: 'KIX|OSA',
        curr: []
    }, {
        id: 83,
        code: 'KMJ',
        curr: []
    }, {
        id: 81,
        code: 'KOJ',
        curr: []
    }, {
        id: 96,
        code: 'KUL',
        curr: []
    }, {
        id: 32,
        code: 'LST',
        curr: []
    }, {
        id: 39,
        code: 'MEL',
        curr: []
    }, {
        id: 109,
        code: 'MNL',
        curr: []
    }, {
        id: 84,
        code: 'MYJ',
        curr: []
    }, {
        id: 79,
        code: 'NAN',
        curr: []
    }, {
        id: 87,
        code: 'NGS',
        curr: []
    }, {
        id: 102,
        code: 'NPE',
        curr: []
    }, {
        id: 104,
        code: 'NPL',
        curr: []
    }, {
        id: 95,
        code: 'NRT|TYO',
        curr: []
    }, {
        id: 103,
        code: 'NSN',
        curr: []
    }, {
        id: 41,
        code: 'NTL',
        curr: []
    }, {
        id: 89,
        code: 'OIT',
        curr: []
    }, {
        id: 90,
        code: 'OKA',
        curr: []
    }, {
        id: 97,
        code: 'PEN',
        curr: []
    }, {
        id: 44,
        code: 'PER',
        curr: []
    }, {
        id: 105,
        code: 'PMR',
        curr: []
    }, {
        id: 56,
        code: 'PNH',
        curr: []
    }, {
        id: 72,
        code: 'PVG',
        curr: []
    }, {
        id: 85,
        code: 'SHI',
        curr: []
    }, {
        id: 110,
        code: 'SIN',
        curr: []
    }, {
        id: 49,
        code: 'SYD',
        curr: []
    }, {
        id: 93,
        code: 'SYO',
        curr: []
    }, {
        id: 94,
        code: 'TAK',
        curr: []
    }, {
        id: 74,
        code: 'TPE',
        curr: []
    }, {
        id: 107,
        code: 'WLG',
        curr: []
    }, {
        id: 106,
        code: 'ZQN',
        curr: []
    }],
    'HTI|HTI': [{
        id: 6,
        code: 'ADL',
        curr: []
    }, {
        id: 38,
        code: 'AVV|GEX',
        curr: []
    }, {
        id: 13,
        code: 'BNE',
        curr: []
    }, {
        id: 100,
        code: 'CHC',
        curr: []
    }, {
        id: 92,
        code: 'CTS',
        curr: []
    }, {
        id: 80,
        code: 'FUK',
        curr: []
    }, {
        id: 91,
        code: 'KIX|OSA',
        curr: []
    }, {
        id: 81,
        code: 'KOJ',
        curr: []
    }, {
        id: 39,
        code: 'MEL',
        curr: []
    }, {
        id: 84,
        code: 'MYJ',
        curr: []
    }, {
        id: 95,
        code: 'NRT|TYO',
        curr: []
    }, {
        id: 89,
        code: 'OIT',
        curr: []
    }, {
        id: 90,
        code: 'OKA',
        curr: []
    }, {
        id: 44,
        code: 'PER',
        curr: []
    }, {
        id: 49,
        code: 'SYD',
        curr: []
    }, {
        id: 94,
        code: 'TAK',
        curr: []
    }],
    'HBA': [{
        id: 6,
        code: 'ADL',
        curr: []
    }, {
        id: 99,
        code: 'AKL',
        curr: []
    }, {
        id: 38,
        code: 'AVV|GEX',
        curr: []
    }, {
        id: 113,
        code: 'BKK|XBK',
        curr: []
    }, {
        id: 13,
        code: 'BNE',
        curr: []
    }, {
        id: 10,
        code: 'BNK|BBY',
        curr: []
    }, {
        id: 1,
        code: 'CGK',
        curr: []
    }, {
        id: 100,
        code: 'CHC',
        curr: []
    }, {
        id: 16,
        code: 'CNS',
        curr: []
    }, {
        id: 92,
        code: 'CTS',
        curr: []
    }, {
        id: 0,
        code: 'DPS',
        curr: []
    }, {
        id: 20,
        code: 'DRW',
        curr: []
    }, {
        id: 80,
        code: 'FUK',
        curr: []
    }, {
        id: 116,
        code: 'HKT',
        curr: []
    }, {
        id: 117,
        code: 'HNL',
        curr: []
    }, {
        id: 91,
        code: 'KIX|OSA',
        curr: []
    }, {
        id: 81,
        code: 'KOJ',
        curr: []
    }, {
        id: 96,
        code: 'KUL',
        curr: []
    }, {
        id: 48,
        code: 'MCY',
        curr: []
    }, {
        id: 39,
        code: 'MEL',
        curr: []
    }, {
        id: 35,
        code: 'MKY',
        curr: []
    }, {
        id: 109,
        code: 'MNL',
        curr: []
    }, {
        id: 84,
        code: 'MYJ',
        curr: []
    }, {
        id: 95,
        code: 'NRT|TYO',
        curr: []
    }, {
        id: 41,
        code: 'NTL',
        curr: []
    }, {
        id: 89,
        code: 'OIT',
        curr: []
    }, {
        id: 90,
        code: 'OKA',
        curr: []
    }, {
        id: 24,
        code: 'OOL',
        curr: []
    }, {
        id: 44,
        code: 'PER',
        curr: []
    }, {
        id: 56,
        code: 'PNH',
        curr: []
    }, {
        id: 110,
        code: 'SIN',
        curr: []
    }, {
        id: 49,
        code: 'SYD',
        curr: []
    }, {
        id: 94,
        code: 'TAK',
        curr: []
    }, {
        id: 51,
        code: 'TSV',
        curr: []
    }, {
        id: 107,
        code: 'WLG',
        curr: []
    }, {
        id: 106,
        code: 'ZQN',
        curr: []
    }],
    'LST': [{
        id: 99,
        code: 'AKL',
        curr: []
    }, {
        id: 113,
        code: 'BKK|XBK',
        curr: []
    }, {
        id: 13,
        code: 'BNE',
        curr: []
    }, {
        id: 10,
        code: 'BNK|BBY',
        curr: []
    }, {
        id: 1,
        code: 'CGK',
        curr: []
    }, {
        id: 100,
        code: 'CHC',
        curr: []
    }, {
        id: 16,
        code: 'CNS',
        curr: [{
            'caption': 'AU Dollar',
            'value': 'AUD'
        }]
    }, {
        id: 92,
        code: 'CTS',
        curr: []
    }, {
        id: 0,
        code: 'DPS',
        curr: []
    }, {
        id: 20,
        code: 'DRW',
        curr: []
    }, {
        id: 80,
        code: 'FUK',
        curr: []
    }, {
        id: 66,
        code: 'HKG',
        curr: []
    }, {
        id: 116,
        code: 'HKT',
        curr: []
    }, {
        id: 117,
        code: 'HNL',
        curr: []
    }, {
        id: 91,
        code: 'KIX|OSA',
        curr: []
    }, {
        id: 81,
        code: 'KOJ',
        curr: []
    }, {
        id: 96,
        code: 'KUL',
        curr: []
    }, {
        id: 48,
        code: 'MCY',
        curr: []
    }, {
        id: 39,
        code: 'MEL',
        curr: []
    }, {
        id: 84,
        code: 'MYJ',
        curr: []
    }, {
        id: 95,
        code: 'NRT|TYO',
        curr: []
    }, {
        id: 41,
        code: 'NTL',
        curr: []
    }, {
        id: 89,
        code: 'OIT',
        curr: []
    }, {
        id: 90,
        code: 'OKA',
        curr: []
    }, {
        id: 24,
        code: 'OOL',
        curr: []
    }, {
        id: 97,
        code: 'PEN',
        curr: []
    }, {
        id: 44,
        code: 'PER',
        curr: []
    }, {
        id: 49,
        code: 'SYD',
        curr: []
    }, {
        id: 94,
        code: 'TAK',
        curr: []
    }, {
        id: 107,
        code: 'WLG',
        curr: []
    }, {
        id: 106,
        code: 'ZQN',
        curr: []
    }],
    'MKY': [{
        id: 99,
        code: 'AKL',
        curr: []
    }, {
        id: 38,
        code: 'AVV|GEX',
        curr: []
    }, {
        id: 13,
        code: 'BNE',
        curr: []
    }, {
        id: 100,
        code: 'CHC',
        curr: []
    }, {
        id: 16,
        code: 'CNS',
        curr: []
    }, {
        id: 20,
        code: 'DRW',
        curr: []
    }, {
        id: 28,
        code: 'HBA',
        curr: []
    }, {
        id: 39,
        code: 'MEL',
        curr: []
    }, {
        id: 41,
        code: 'NTL',
        curr: []
    }, {
        id: 44,
        code: 'PER',
        curr: []
    }, {
        id: 49,
        code: 'SYD',
        curr: []
    }],
    'VIZ|MEL': [{
        id: 15,
        code: 'BQB',
        curr: []
    }],
    'AVV|GEX': [{
        id: 6,
        code: 'ADL',
        curr: []
    }, {
        id: 99,
        code: 'AKL',
        curr: []
    }, {
        id: 9,
        code: 'AYQ|AYQ',
        curr: []
    }, {
        id: 13,
        code: 'BNE',
        curr: []
    }, {
        id: 10,
        code: 'BNK|BBY',
        curr: []
    }, {
        id: 100,
        code: 'CHC',
        curr: []
    }, {
        id: 16,
        code: 'CNS',
        curr: []
    }, {
        id: 0,
        code: 'DPS',
        curr: []
    }, {
        id: 20,
        code: 'DRW',
        curr: []
    }, {
        id: 28,
        code: 'HBA',
        curr: []
    }, {
        id: 116,
        code: 'HKT',
        curr: []
    }, {
        id: 117,
        code: 'HNL',
        curr: []
    }, {
        id: 25,
        code: 'HTI|HTI',
        curr: []
    }, {
        id: 48,
        code: 'MCY',
        curr: []
    }, {
        id: 35,
        code: 'MKY',
        curr: []
    }, {
        id: 41,
        code: 'NTL',
        curr: []
    }, {
        id: 24,
        code: 'OOL',
        curr: []
    }, {
        id: 44,
        code: 'PER',
        curr: []
    }, {
        id: 49,
        code: 'SYD',
        curr: []
    }, {
        id: 51,
        code: 'TSV',
        curr: []
    }, {
        id: 106,
        code: 'ZQN',
        curr: []
    }],
    'MEL': [{
        id: 6,
        code: 'ADL',
        curr: []
    }, {
        id: 99,
        code: 'AKL',
        curr: []
    }, {
        id: 9,
        code: 'AYQ|AYQ',
        curr: []
    }, {
        id: 113,
        code: 'BKK|XBK',
        curr: []
    }, {
        id: 118,
        code: 'BMV',
        curr: []
    }, {
        id: 13,
        code: 'BNE',
        curr: []
    }, {
        id: 10,
        code: 'BNK|BBY',
        curr: []
    }, {
        id: 15,
        code: 'BQB',
        curr: []
    }, {
        id: 1,
        code: 'CGK',
        curr: []
    }, {
        id: 100,
        code: 'CHC',
        curr: []
    }, {
        id: 16,
        code: 'CNS',
        curr: []
    }, {
        id: 108,
        code: 'CRK',
        curr: []
    }, {
        id: 92,
        code: 'CTS',
        curr: []
    }, {
        id: 128,
        code: 'CXR',
        curr: []
    }, {
        id: 0,
        code: 'DPS',
        curr: []
    }, {
        id: 20,
        code: 'DRW',
        curr: []
    }, {
        id: 101,
        code: 'DUD',
        curr: []
    }, {
        id: 80,
        code: 'FUK',
        curr: []
    }, {
        id: 63,
        code: 'HAK',
        curr: []
    }, {
        id: 28,
        code: 'HBA',
        curr: []
    }, {
        id: 66,
        code: 'HKG',
        curr: []
    }, {
        id: 116,
        code: 'HKT',
        curr: []
    }, {
        id: 117,
        code: 'HNL',
        curr: []
    }, {
        id: 124,
        code: 'HPH',
        curr: []
    }, {
        id: 25,
        code: 'HTI|HTI',
        curr: []
    }, {
        id: 127,
        code: 'HUI',
        curr: []
    }, {
        id: 91,
        code: 'KIX|OSA',
        curr: []
    }, {
        id: 2,
        code: 'KNO',
        curr: []
    }, {
        id: 81,
        code: 'KOJ',
        curr: []
    }, {
        id: 96,
        code: 'KUL',
        curr: []
    }, {
        id: 32,
        code: 'LST',
        curr: []
    }, {
        id: 48,
        code: 'MCY',
        curr: []
    }, {
        id: 35,
        code: 'MKY',
        curr: []
    }, {
        id: 109,
        code: 'MNL',
        curr: []
    }, {
        id: 84,
        code: 'MYJ',
        curr: []
    }, {
        id: 79,
        code: 'NAN',
        curr: []
    }, {
        id: 102,
        code: 'NPE',
        curr: []
    }, {
        id: 104,
        code: 'NPL',
        curr: []
    }, {
        id: 95,
        code: 'NRT|TYO',
        curr: []
    }, {
        id: 103,
        code: 'NSN',
        curr: []
    }, {
        id: 41,
        code: 'NTL',
        curr: []
    }, {
        id: 89,
        code: 'OIT',
        curr: []
    }, {
        id: 90,
        code: 'OKA',
        curr: []
    }, {
        id: 24,
        code: 'OOL',
        curr: []
    }, {
        id: 97,
        code: 'PEN',
        curr: []
    }, {
        id: 44,
        code: 'PER',
        curr: []
    }, {
        id: 105,
        code: 'PMR',
        curr: []
    }, {
        id: 56,
        code: 'PNH',
        curr: []
    }, {
        id: 53,
        code: 'PPP',
        curr: []
    }, {
        id: 78,
        code: 'RAR',
        curr: []
    }, {
        id: 98,
        code: 'RGN',
        curr: []
    }, {
        id: 126,
        code: 'SGN',
        curr: []
    }, {
        id: 110,
        code: 'SIN',
        curr: []
    }, {
        id: 5,
        code: 'SUB',
        curr: []
    }, {
        id: 49,
        code: 'SYD',
        curr: []
    }, {
        id: 71,
        code: 'SYX',
        curr: []
    }, {
        id: 94,
        code: 'TAK',
        curr: []
    }, {
        id: 51,
        code: 'TSV',
        curr: []
    }, {
        id: 107,
        code: 'WLG',
        curr: []
    }, {
        id: 75,
        code: 'WUH',
        curr: []
    }, {
        id: 106,
        code: 'ZQN',
        curr: []
    }],
    'NTL': [{
        id: 6,
        code: 'ADL',
        curr: []
    }, {
        id: 99,
        code: 'AKL',
        curr: []
    }, {
        id: 38,
        code: 'AVV|GEX',
        curr: []
    }, {
        id: 9,
        code: 'AYQ|AYQ',
        curr: []
    }, {
        id: 13,
        code: 'BNE',
        curr: []
    }, {
        id: 100,
        code: 'CHC',
        curr: []
    }, {
        id: 16,
        code: 'CNS',
        curr: []
    }, {
        id: 92,
        code: 'CTS',
        curr: []
    }, {
        id: 0,
        code: 'DPS',
        curr: []
    }, {
        id: 20,
        code: 'DRW',
        curr: []
    }, {
        id: 80,
        code: 'FUK',
        curr: []
    }, {
        id: 28,
        code: 'HBA',
        curr: []
    }, {
        id: 116,
        code: 'HKT',
        curr: []
    }, {
        id: 117,
        code: 'HNL',
        curr: []
    }, {
        id: 91,
        code: 'KIX|OSA',
        curr: []
    }, {
        id: 81,
        code: 'KOJ',
        curr: []
    }, {
        id: 32,
        code: 'LST',
        curr: []
    }, {
        id: 39,
        code: 'MEL',
        curr: []
    }, {
        id: 35,
        code: 'MKY',
        curr: []
    }, {
        id: 84,
        code: 'MYJ',
        curr: []
    }, {
        id: 95,
        code: 'NRT|TYO',
        curr: []
    }, {
        id: 89,
        code: 'OIT',
        curr: []
    }, {
        id: 90,
        code: 'OKA',
        curr: []
    }, {
        id: 24,
        code: 'OOL',
        curr: []
    }, {
        id: 44,
        code: 'PER',
        curr: []
    }, {
        id: 53,
        code: 'PPP',
        curr: []
    }, {
        id: 110,
        code: 'SIN',
        curr: []
    }, {
        id: 94,
        code: 'TAK',
        curr: []
    }, {
        id: 107,
        code: 'WLG',
        curr: []
    }, {
        id: 106,
        code: 'ZQN',
        curr: []
    }],
    'PER': [{
        id: 6,
        code: 'ADL',
        curr: []
    }, {
        id: 99,
        code: 'AKL',
        curr: []
    }, {
        id: 38,
        code: 'AVV|GEX',
        curr: []
    }, {
        id: 9,
        code: 'AYQ|AYQ',
        curr: []
    }, {
        id: 113,
        code: 'BKK|XBK',
        curr: []
    }, {
        id: 13,
        code: 'BNE',
        curr: []
    }, {
        id: 1,
        code: 'CGK',
        curr: []
    }, {
        id: 100,
        code: 'CHC',
        curr: []
    }, {
        id: 112,
        code: 'CMB',
        curr: [{
            'caption': 'US Dollar',
            'value': 'USD'
        }]
    }, {
        id: 16,
        code: 'CNS',
        curr: []
    }, {
        id: 92,
        code: 'CTS',
        curr: []
    }, {
        id: 0,
        code: 'DPS',
        curr: []
    }, {
        id: 20,
        code: 'DRW',
        curr: []
    }, {
        id: 80,
        code: 'FUK',
        curr: []
    }, {
        id: 63,
        code: 'HAK',
        curr: []
    }, {
        id: 28,
        code: 'HBA',
        curr: []
    }, {
        id: 66,
        code: 'HKG',
        curr: []
    }, {
        id: 116,
        code: 'HKT',
        curr: []
    }, {
        id: 117,
        code: 'HNL',
        curr: []
    }, {
        id: 25,
        code: 'HTI|HTI',
        curr: []
    }, {
        id: 91,
        code: 'KIX|OSA',
        curr: []
    }, {
        id: 2,
        code: 'KNO',
        curr: []
    }, {
        id: 81,
        code: 'KOJ',
        curr: []
    }, {
        id: 96,
        code: 'KUL',
        curr: []
    }, {
        id: 32,
        code: 'LST',
        curr: []
    }, {
        id: 48,
        code: 'MCY',
        curr: []
    }, {
        id: 39,
        code: 'MEL',
        curr: []
    }, {
        id: 35,
        code: 'MKY',
        curr: []
    }, {
        id: 109,
        code: 'MNL',
        curr: []
    }, {
        id: 84,
        code: 'MYJ',
        curr: []
    }, {
        id: 95,
        code: 'NRT|TYO',
        curr: []
    }, {
        id: 41,
        code: 'NTL',
        curr: []
    }, {
        id: 89,
        code: 'OIT',
        curr: []
    }, {
        id: 90,
        code: 'OKA',
        curr: []
    }, {
        id: 24,
        code: 'OOL',
        curr: []
    }, {
        id: 97,
        code: 'PEN',
        curr: []
    }, {
        id: 56,
        code: 'PNH',
        curr: []
    }, {
        id: 53,
        code: 'PPP',
        curr: []
    }, {
        id: 57,
        code: 'REP',
        curr: []
    }, {
        id: 98,
        code: 'RGN',
        curr: []
    }, {
        id: 110,
        code: 'SIN',
        curr: []
    }, {
        id: 5,
        code: 'SUB',
        curr: []
    }, {
        id: 73,
        code: 'SWA',
        curr: []
    }, {
        id: 49,
        code: 'SYD',
        curr: []
    }, {
        id: 71,
        code: 'SYX',
        curr: []
    }, {
        id: 94,
        code: 'TAK',
        curr: []
    }, {
        id: 74,
        code: 'TPE',
        curr: []
    }, {
        id: 107,
        code: 'WLG',
        curr: []
    }, {
        id: 106,
        code: 'ZQN',
        curr: []
    }],
    'MCY': [{
        id: 6,
        code: 'ADL',
        curr: []
    }, {
        id: 99,
        code: 'AKL',
        curr: []
    }, {
        id: 38,
        code: 'AVV|GEX',
        curr: []
    }, {
        id: 100,
        code: 'CHC',
        curr: []
    }, {
        id: 92,
        code: 'CTS',
        curr: []
    }, {
        id: 0,
        code: 'DPS',
        curr: []
    }, {
        id: 80,
        code: 'FUK',
        curr: []
    }, {
        id: 28,
        code: 'HBA',
        curr: []
    }, {
        id: 116,
        code: 'HKT',
        curr: []
    }, {
        id: 91,
        code: 'KIX|OSA',
        curr: []
    }, {
        id: 32,
        code: 'LST',
        curr: []
    }, {
        id: 39,
        code: 'MEL',
        curr: []
    }, {
        id: 95,
        code: 'NRT|TYO',
        curr: []
    }, {
        id: 44,
        code: 'PER',
        curr: []
    }, {
        id: 49,
        code: 'SYD',
        curr: []
    }, {
        id: 107,
        code: 'WLG',
        curr: []
    }],
    'SYD': [{
        id: 6,
        code: 'ADL',
        curr: []
    }, {
        id: 99,
        code: 'AKL',
        curr: []
    }, {
        id: 38,
        code: 'AVV|GEX',
        curr: []
    }, {
        id: 9,
        code: 'AYQ|AYQ',
        curr: []
    }, {
        id: 113,
        code: 'BKK|XBK',
        curr: []
    }, {
        id: 13,
        code: 'BNE',
        curr: []
    }, {
        id: 10,
        code: 'BNK|BBY',
        curr: []
    }, {
        id: 1,
        code: 'CGK',
        curr: []
    }, {
        id: 100,
        code: 'CHC',
        curr: []
    }, {
        id: 16,
        code: 'CNS',
        curr: []
    }, {
        id: 92,
        code: 'CTS',
        curr: []
    }, {
        id: 128,
        code: 'CXR',
        curr: []
    }, {
        id: 121,
        code: 'DLI',
        curr: []
    }, {
        id: 0,
        code: 'DPS',
        curr: []
    }, {
        id: 20,
        code: 'DRW',
        curr: []
    }, {
        id: 80,
        code: 'FUK',
        curr: []
    }, {
        id: 125,
        code: 'HAN',
        curr: []
    }, {
        id: 28,
        code: 'HBA',
        curr: []
    }, {
        id: 66,
        code: 'HKG',
        curr: []
    }, {
        id: 116,
        code: 'HKT',
        curr: []
    }, {
        id: 117,
        code: 'HNL',
        curr: []
    }, {
        id: 124,
        code: 'HPH',
        curr: []
    }, {
        id: 25,
        code: 'HTI|HTI',
        curr: []
    }, {
        id: 127,
        code: 'HUI',
        curr: []
    },

{
    id: 27,
    code: 'HVB',
    curr: []
  },

     {
        id: 91,
        code: 'KIX|OSA',
        curr: []
    }, {
        id: 81,
        code: 'KOJ',
        curr: []
    }, {
        id: 96,
        code: 'KUL',
        curr: []
    }, {
        id: 32,
        code: 'LST',
        curr: []
    }, {
        id: 48,
        code: 'MCY',
        curr: []
    }, {
        id: 39,
        code: 'MEL',
        curr: []
    }, {
        id: 35,
        code: 'MKY',
        curr: []
    }, {
        id: 109,
        code: 'MNL',
        curr: []
    }, {
        id: 84,
        code: 'MYJ',
        curr: []
    }, {
        id: 79,
        code: 'NAN',
        curr: []
    }, {
        id: 102,
        code: 'NPE',
        curr: []
    }, {
        id: 104,
        code: 'NPL',
        curr: []
    }, {
        id: 95,
        code: 'NRT|TYO',
        curr: []
    }, {
        id: 89,
        code: 'OIT',
        curr: []
    }, {
        id: 90,
        code: 'OKA',
        curr: []
    }, {
        id: 24,
        code: 'OOL',
        curr: []
    }, {
        id: 44,
        code: 'PER',
        curr: []
    }, {
        id: 105,
        code: 'PMR',
        curr: []
    }, {
        id: 56,
        code: 'PNH',
        curr: []
    }, {
        id: 53,
        code: 'PPP',
        curr: []
    }, {
        id: 129,
        code: 'PQC',
        curr: []
    }, {
        id: 78,
        code: 'RAR',
        curr: []
    }, {
        id: 126,
        code: 'SGN',
        curr: []
    }, {
        id: 110,
        code: 'SIN',
        curr: []
    }, {
        id: 94,
        code: 'TAK',
        curr: []
    }, {
        id: 133,
        code: 'TBB',
        curr: []
    }, {
        id: 132,
        code: 'THD',
        curr: []
    }, {
        id: 51,
        code: 'TSV',
        curr: []
    }, {
        id: 131,
        code: 'UIH',
        curr: []
    }, {
        id: 120,
        code: 'VCL',
        curr: []
    }, {
        id: 134,
        code: 'VII',
        curr: []
    }, {
        id: 107,
        code: 'WLG',
        curr: []
    }, {
        id: 75,
        code: 'WUH',
        curr: []
    }, {
        id: 106,
        code: 'ZQN',
        curr: []
    }],
    'TSV': [{
        id: 6,
        code: 'ADL',
        curr: []
    }, {
        id: 99,
        code: 'AKL',
        curr: []
    }, {
        id: 38,
        code: 'AVV|GEX',
        curr: []
    }, {
        id: 13,
        code: 'BNE',
        curr: []
    }, {
        id: 100,
        code: 'CHC',
        curr: []
    }, {
        id: 28,
        code: 'HBA',
        curr: []
    }, {
        id: 117,
        code: 'HNL',
        curr: []
    }, {
        id: 91,
        code: 'KIX|OSA',
        curr: []
    }, {
        id: 39,
        code: 'MEL',
        curr: []
    }, {
        id: 95,
        code: 'NRT|TYO',
        curr: []
    }, {
        id: 49,
        code: 'SYD',
        curr: []
    }, {
        id: 106,
        code: 'ZQN',
        curr: []
    }],
    'PPP': [{
        id: 6,
        code: 'ADL',
        curr: []
    }, {
        id: 13,
        code: 'BNE',
        curr: []
    }, {
        id: 100,
        code: 'CHC',
        curr: []
    }, {
        id: 0,
        code: 'DPS',
        curr: []
    }, {
        id: 20,
        code: 'DRW',
        curr: []
    }, {
        id: 39,
        code: 'MEL',
        curr: []
    }, {
        id: 41,
        code: 'NTL',
        curr: []
    }, {
        id: 44,
        code: 'PER',
        curr: []
    }, {
        id: 49,
        code: 'SYD',
        curr: []
    }],
    'PNH': [{
        id: 6,
        code: 'ADL',
        curr: []
    }, {
        id: 99,
        code: 'AKL',
        curr: []
    }, {
        id: 1,
        code: 'CGK',
        curr: []
    }, {
        id: 112,
        code: 'CMB',
        curr: [{
            'caption': 'US Dollar',
            'value': 'USD'
        }]
    }, {
        id: 108,
        code: 'CRK',
        curr: []
    }, {
        id: 0,
        code: 'DPS',
        curr: []
    }, {
        id: 20,
        code: 'DRW',
        curr: []
    }, {
        id: 28,
        code: 'HBA',
        curr: []
    }, {
        id: 116,
        code: 'HKT',
        curr: []
    }, {
        id: 96,
        code: 'KUL',
        curr: []
    }, {
        id: 39,
        code: 'MEL',
        curr: []
    }, {
        id: 109,
        code: 'MNL',
        curr: []
    }, {
        id: 24,
        code: 'OOL',
        curr: []
    }, {
        id: 97,
        code: 'PEN',
        curr: []
    }, {
        id: 44,
        code: 'PER',
        curr: []
    }, {
        id: 126,
        code: 'SGN',
        curr: []
    }, {
        id: 110,
        code: 'SIN',
        curr: []
    }, {
        id: 5,
        code: 'SUB',
        curr: []
    }, {
        id: 49,
        code: 'SYD',
        curr: []
    }, {
        id: 74,
        code: 'TPE',
        curr: []
    }],
    'REP': [{
        id: 1,
        code: 'CGK',
        curr: []
    }, {
        id: 112,
        code: 'CMB',
        curr: [{
            'caption': 'US Dollar',
            'value': 'USD'
        }]
    }, {
        id: 20,
        code: 'DRW',
        curr: []
    }, {
        id: 116,
        code: 'HKT',
        curr: []
    }, {
        id: 96,
        code: 'KUL',
        curr: []
    }, {
        id: 109,
        code: 'MNL',
        curr: []
    }, {
        id: 44,
        code: 'PER',
        curr: []
    }, {
        id: 126,
        code: 'SGN',
        curr: []
    }, {
        id: 110,
        code: 'SIN',
        curr: []
    }],
    'CAN|CAN': [{
        id: 113,
        code: 'BKK|XBK',
        curr: []
    }, {
        id: 110,
        code: 'SIN',
        curr: []
    }],
    'KWE': [{
        id: 112,
        code: 'CMB',
        curr: [{
            'caption': 'US Dollar',
            'value': 'USD'
        }]
    }, {
        id: 110,
        code: 'SIN',
        curr: []
    }],
    'HAK': [{
        id: 99,
        code: 'AKL',
        curr: []
    }, {
        id: 113,
        code: 'BKK|XBK',
        curr: []
    }, {
        id: 1,
        code: 'CGK',
        curr: []
    }, {
        id: 112,
        code: 'CMB',
        curr: [{
            'caption': 'US Dollar',
            'value': 'USD'
        }]
    }, {
        id: 108,
        code: 'CRK',
        curr: []
    }, {
        id: 122,
        code: 'DAD',
        curr: []
    }, {
        id: 0,
        code: 'DPS',
        curr: []
    }, {
        id: 20,
        code: 'DRW',
        curr: []
    }, {
        id: 116,
        code: 'HKT',
        curr: []
    }, {
        id: 2,
        code: 'KNO',
        curr: []
    }, {
        id: 96,
        code: 'KUL',
        curr: []
    }, {
        id: 39,
        code: 'MEL',
        curr: []
    }, {
        id: 97,
        code: 'PEN',
        curr: []
    }, {
        id: 44,
        code: 'PER',
        curr: []
    }, {
        id: 98,
        code: 'RGN',
        curr: []
    }, {
        id: 126,
        code: 'SGN',
        curr: []
    }, {
        id: 110,
        code: 'SIN',
        curr: []
    }],
    'HFE': [{
        id: 113,
        code: 'BKK|XBK',
        curr: []
    }, {
        id: 1,
        code: 'CGK',
        curr: []
    }, {
        id: 112,
        code: 'CMB',
        curr: [{
            'caption': 'US Dollar',
            'value': 'USD'
        }]
    }, {
        id: 0,
        code: 'DPS',
        curr: []
    }, {
        id: 116,
        code: 'HKT',
        curr: []
    }, {
        id: 110,
        code: 'SIN',
        curr: []
    }],
    'HKG': [{
        id: 6,
        code: 'ADL',
        curr: [{
            'caption': 'HK Dollar',
            'value': 'HKD'
        }]
    }, {
        id: 16,
        code: 'CNS',
        curr: [{
            'caption': 'HK Dollar',
            'value': 'HKD'
        }]
    }, {
        id: 92,
        code: 'CTS',
        curr: [{
            'caption': 'HK Dollar',
            'value': 'HKD'
        }]
    }, {
        id: 80,
        code: 'FUK',
        curr: [{
            'caption': 'HK Dollar',
            'value': 'HKD'
        }]
    }, {
        id: 124,
        code: 'HPH',
        curr: [{
            'caption': 'HK Dollar',
            'value': 'HKD'
        }]
    }, {
        id: 127,
        code: 'HUI',
        curr: [{
            'caption': 'HK Dollar',
            'value': 'HKD'
        }]
    }, {
        id: 82,
        code: 'KCZ',
        curr: [{
            'caption': 'HK Dollar',
            'value': 'HKD'
        }]
    }, {
        id: 91,
        code: 'KIX|OSA',
        curr: [{
            'caption': 'HK Dollar',
            'value': 'HKD'
        }]
    }, {
        id: 86,
        code: 'KMI',
        curr: [{
            'caption': 'HK Dollar',
            'value': 'HKD'
        }]
    }, {
        id: 83,
        code: 'KMJ',
        curr: [{
            'caption': 'HK Dollar',
            'value': 'HKD'
        }]
    }, {
        id: 81,
        code: 'KOJ',
        curr: [{
            'caption': 'HK Dollar',
            'value': 'HKD'
        }]
    }, {
        id: 32,
        code: 'LST',
        curr: [{
            'caption': 'HK Dollar',
            'value': 'HKD'
        }]
    }, {
        id: 39,
        code: 'MEL',
        curr: [{
            'caption': 'HK Dollar',
            'value': 'HKD'
        }]
    }, {
        id: 84,
        code: 'MYJ',
        curr: [{
            'caption': 'HK Dollar',
            'value': 'HKD'
        }]
    }, {
        id: 87,
        code: 'NGS',
        curr: [{
            'caption': 'HK Dollar',
            'value': 'HKD'
        }]
    }, {
        id: 95,
        code: 'NRT|TYO',
        curr: [{
            'caption': 'HK Dollar',
            'value': 'HKD'
        }]
    }, {
        id: 89,
        code: 'OIT',
        curr: [{
            'caption': 'HK Dollar',
            'value': 'HKD'
        }]
    }, {
        id: 90,
        code: 'OKA',
        curr: [{
            'caption': 'HK Dollar',
            'value': 'HKD'
        }]
    }, {
        id: 24,
        code: 'OOL',
        curr: [{
            'caption': 'HK Dollar',
            'value': 'HKD'
        }]
    }, {
        id: 44,
        code: 'PER',
        curr: [{
            'caption': 'HK Dollar',
            'value': 'HKD'
        }]
    }, {
        id: 85,
        code: 'SHI',
        curr: []
    }, {
        id: 49,
        code: 'SYD',
        curr: [{
            'caption': 'HK Dollar',
            'value': 'HKD'
        }]
    }, {
        id: 93,
        code: 'SYO',
        curr: []
    }, {
        id: 94,
        code: 'TAK',
        curr: [{
            'caption': 'HK Dollar',
            'value': 'HKD'
        }]
    }],
    'MFM': [{
        id: 124,
        code: 'HPH',
        curr: []
    }],
    'SYX': [{
        id: 113,
        code: 'BKK|XBK',
        curr: []
    }, {
        id: 1,
        code: 'CGK',
        curr: []
    }, {
        id: 20,
        code: 'DRW',
        curr: []
    }, {
        id: 2,
        code: 'KNO',
        curr: []
    }, {
        id: 96,
        code: 'KUL',
        curr: []
    }, {
        id: 39,
        code: 'MEL',
        curr: []
    }, {
        id: 44,
        code: 'PER',
        curr: []
    }, {
        id: 98,
        code: 'RGN',
        curr: []
    }],
    'PVG': [{
        id: 16,
        code: 'CNS',
        curr: []
    }, {
        id: 92,
        code: 'CTS',
        curr: []
    }, {
        id: 80,
        code: 'FUK',
        curr: []
    }, {
        id: 82,
        code: 'KCZ',
        curr: []
    }, {
        id: 91,
        code: 'KIX|OSA',
        curr: []
    }, {
        id: 86,
        code: 'KMI',
        curr: []
    }, {
        id: 83,
        code: 'KMJ',
        curr: []
    }, {
        id: 81,
        code: 'KOJ',
        curr: []
    }, {
        id: 84,
        code: 'MYJ',
        curr: []
    }, {
        id: 87,
        code: 'NGS',
        curr: []
    }, {
        id: 95,
        code: 'NRT|TYO',
        curr: []
    }, {
        id: 89,
        code: 'OIT',
        curr: []
    }, {
        id: 90,
        code: 'OKA',
        curr: []
    }, {
        id: 24,
        code: 'OOL',
        curr: []
    }, {
        id: 85,
        code: 'SHI',
        curr: []
    }, {
        id: 93,
        code: 'SYO',
        curr: []
    }, {
        id: 94,
        code: 'TAK',
        curr: []
    }],
    'SWA': [{
        id: 1,
        code: 'CGK',
        curr: []
    }, {
        id: 112,
        code: 'CMB',
        curr: [{
            'caption': 'US Dollar',
            'value': 'USD'
        }]
    }, {
        id: 122,
        code: 'DAD',
        curr: []
    }, {
        id: 0,
        code: 'DPS',
        curr: []
    }, {
        id: 20,
        code: 'DRW',
        curr: []
    }, {
        id: 116,
        code: 'HKT',
        curr: []
    }, {
        id: 96,
        code: 'KUL',
        curr: []
    }, {
        id: 109,
        code: 'MNL',
        curr: []
    }, {
        id: 44,
        code: 'PER',
        curr: []
    }, {
        id: 126,
        code: 'SGN',
        curr: []
    }, {
        id: 110,
        code: 'SIN',
        curr: []
    }, {
        id: 74,
        code: 'TPE',
        curr: []
    }],
    'TPE': [{
        id: 99,
        code: 'AKL',
        curr: [{
            'caption': 'TW Dollar',
            'value': 'TWD'
        }]
    }, {
        id: 113,
        code: 'BKK|XBK',
        curr: [{
            'caption': 'TW Dollar',
            'value': 'TWD'
        }]
    }, {
        id: 1,
        code: 'CGK',
        curr: [{
            'caption': 'TW Dollar',
            'value': 'TWD'
        }]
    }, {
        id: 112,
        code: 'CMB',
        curr: [{
            'caption': 'US Dollar',
            'value': 'USD'
        }]
    }, {
        id: 16,
        code: 'CNS',
        curr: [{
            'caption': 'TW Dollar',
            'value': 'TWD'
        }]
    }, {
        id: 92,
        code: 'CTS',
        curr: [{
            'caption': 'TW Dollar',
            'value': 'TWD'
        }]
    }, {
        id: 122,
        code: 'DAD',
        curr: [{
            'caption': 'TW Dollar',
            'value': 'TWD'
        }]
    }, {
        id: 0,
        code: 'DPS',
        curr: [{
            'caption': 'TW Dollar',
            'value': 'TWD'
        }]
    }, {
        id: 20,
        code: 'DRW',
        curr: [{
            'caption': 'TW Dollar',
            'value': 'TWD'
        }]
    }, {
        id: 80,
        code: 'FUK',
        curr: [{
            'caption': 'TW Dollar',
            'value': 'TWD'
        }]
    }, {
        id: 125,
        code: 'HAN',
        curr: [{
            'caption': 'TW Dollar',
            'value': 'TWD'
        }]
    }, {
        id: 116,
        code: 'HKT',
        curr: [{
            'caption': 'TW Dollar',
            'value': 'TWD'
        }]
    }, {
        id: 82,
        code: 'KCZ',
        curr: [{
            'caption': 'TW Dollar',
            'value': 'TWD'
        }]
    }, {
        id: 91,
        code: 'KIX|OSA',
        curr: [{
            'caption': 'TW Dollar',
            'value': 'TWD'
        }]
    }, {
        id: 86,
        code: 'KMI',
        curr: [{
            'caption': 'TW Dollar',
            'value': 'TWD'
        }]
    }, {
        id: 83,
        code: 'KMJ',
        curr: [{
            'caption': 'TW Dollar',
            'value': 'TWD'
        }]
    }, {
        id: 2,
        code: 'KNO',
        curr: [{
            'caption': 'TW Dollar',
            'value': 'TWD'
        }]
    }, {
        id: 81,
        code: 'KOJ',
        curr: [{
            'caption': 'TW Dollar',
            'value': 'TWD'
        }]
    }, {
        id: 96,
        code: 'KUL',
        curr: [{
            'caption': 'TW Dollar',
            'value': 'TWD'
        }]
    }, {
        id: 39,
        code: 'MEL',
        curr: [{
            'caption': 'TW Dollar',
            'value': 'TWD'
        }]
    }, {
        id: 109,
        code: 'MNL',
        curr: [{
            'caption': 'TW Dollar',
            'value': 'TWD'
        }]
    }, {
        id: 84,
        code: 'MYJ',
        curr: [{
            'caption': 'TW Dollar',
            'value': 'TWD'
        }]
    }, {
        id: 88,
        code: 'NGO',
        curr: [{
            'caption': 'TW Dollar',
            'value': 'TWD'
        }]
    }, {
        id: 87,
        code: 'NGS',
        curr: [{
            'caption': 'TW Dollar',
            'value': 'TWD'
        }]
    }, {
        id: 95,
        code: 'NRT|TYO',
        curr: [{
            'caption': 'TW Dollar',
            'value': 'TWD'
        }]
    }, {
        id: 89,
        code: 'OIT',
        curr: [{
            'caption': 'TW Dollar',
            'value': 'TWD'
        }]
    }, {
        id: 90,
        code: 'OKA',
        curr: [{
            'caption': 'TW Dollar',
            'value': 'TWD'
        }]
    }, {
        id: 24,
        code: 'OOL',
        curr: [{
            'caption': 'TW Dollar',
            'value': 'TWD'
        }]
    }, {
        id: 97,
        code: 'PEN',
        curr: [{
            'caption': 'TW Dollar',
            'value': 'TWD'
        }]
    }, {
        id: 44,
        code: 'PER',
        curr: [{
            'caption': 'TW Dollar',
            'value': 'TWD'
        }]
    }, {
        id: 56,
        code: 'PNH',
        curr: [{
            'caption': 'TW Dollar',
            'value': 'TWD'
        }]
    }, {
        id: 98,
        code: 'RGN',
        curr: [{
            'caption': 'TW Dollar',
            'value': 'TWD'
        }]
    }, {
        id: 85,
        code: 'SHI',
        curr: []
    }, {
        id: 85,
        code: 'SHI',
        curr: []
    }, {
        id: 110,
        code: 'SIN',
        curr: [{
            'caption': 'TW Dollar',
            'value': 'TWD'
        }]
    }, {
        id: 5,
        code: 'SUB',
        curr: [{
            'caption': 'TW Dollar',
            'value': 'TWD'
        }]
    }, {
        id: 73,
        code: 'SWA',
        curr: [{
            'caption': 'TW Dollar',
            'value': 'TWD'
        }]
    }, {
        id: 93,
        code: 'SYO',
        curr: []
    }, {
        id: 94,
        code: 'TAK',
        curr: [{
            'caption': 'TW Dollar',
            'value': 'TWD'
        }]
    }, {
        id: 37,
        code: 'VIZ|MEL',
        curr: [{
            'caption': 'TW Dollar',
            'value': 'TWD'
        }]
    }],
    'WUH': [{
        id: 16,
        code: 'CNS',
        curr: []
    }, {
        id: 39,
        code: 'MEL',
        curr: []
    }, {
        id: 49,
        code: 'SYD',
        curr: []
    }],
    'XUZ': [{
        id: 122,
        code: 'DAD',
        curr: []
    }, {
        id: 126,
        code: 'SGN',
        curr: []
    }],
    'RAR': [{
        id: 99,
        code: 'AKL',
        curr: []
    }, {
        id: 100,
        code: 'CHC',
        curr: []
    }, {
        id: 39,
        code: 'MEL',
        curr: []
    }, {
        id: 102,
        code: 'NPE',
        curr: []
    }, {
        id: 104,
        code: 'NPL',
        curr: []
    }, {
        id: 103,
        code: 'NSN',
        curr: []
    }, {
        id: 105,
        code: 'PMR',
        curr: []
    }, {
        id: 49,
        code: 'SYD',
        curr: []
    }, {
        id: 107,
        code: 'WLG',
        curr: []
    }, {
        id: 106,
        code: 'ZQN',
        curr: []
    }],
    'NAN': [{
        id: 100,
        code: 'CHC',
        curr: []
    }, {
        id: 20,
        code: 'DRW',
        curr: []
    }, {
        id: 39,
        code: 'MEL',
        curr: []
    }, {
        id: 24,
        code: 'OOL',
        curr: []
    }, {
        id: 49,
        code: 'SYD',
        curr: []
    }],
    'FUK': [{
        id: 6,
        code: 'ADL',
        curr: []
    }, {
        id: 99,
        code: 'AKL',
        curr: []
    }, {
        id: 13,
        code: 'BNE',
        curr: []
    }, {
        id: 1,
        code: 'CGK',
        curr: []
    }, {
        id: 16,
        code: 'CNS',
        curr: []
    }, {
        id: 92,
        code: 'CTS',
        curr: []
    }, {
        id: 0,
        code: 'DPS',
        curr: []
    }, {
        id: 20,
        code: 'DRW',
        curr: []
    }, {
        id: 28,
        code: 'HBA',
        curr: []
    }, {
        id: 66,
        code: 'HKG',
        curr: []
    }, {
        id: 116,
        code: 'HKT',
        curr: []
    }, {
        id: 25,
        code: 'HTI|HTI',
        curr: []
    }, {
        id: 82,
        code: 'KCZ',
        curr: []
    }, {
        id: 91,
        code: 'KIX|OSA',
        curr: []
    }, {
        id: 2,
        code: 'KNO',
        curr: []
    }, {
        id: 96,
        code: 'KUL',
        curr: []
    }, {
        id: 32,
        code: 'LST',
        curr: []
    }, {
        id: 48,
        code: 'MCY',
        curr: []
    }, {
        id: 39,
        code: 'MEL',
        curr: []
    }, {
        id: 109,
        code: 'MNL',
        curr: []
    }, {
        id: 88,
        code: 'NGO',
        curr: []
    }, {
        id: 95,
        code: 'NRT|TYO',
        curr: []
    }, {
        id: 41,
        code: 'NTL',
        curr: []
    }, {
        id: 90,
        code: 'OKA',
        curr: []
    }, {
        id: 24,
        code: 'OOL',
        curr: []
    }, {
        id: 97,
        code: 'PEN',
        curr: []
    }, {
        id: 44,
        code: 'PER',
        curr: []
    }, {
        id: 72,
        code: 'PVG',
        curr: []
    }, {
        id: 85,
        code: 'SHI',
        curr: []
    }, {
        id: 110,
        code: 'SIN',
        curr: []
    }, {
        id: 5,
        code: 'SUB',
        curr: []
    }, {
        id: 49,
        code: 'SYD',
        curr: []
    }, {
        id: 93,
        code: 'SYO',
        curr: []
    }, {
        id: 74,
        code: 'TPE',
        curr: []
    }],
    'KOJ': [{
        id: 6,
        code: 'ADL',
        curr: []
    }, {
        id: 99,
        code: 'AKL',
        curr: []
    }, {
        id: 13,
        code: 'BNE',
        curr: []
    }, {
        id: 16,
        code: 'CNS',
        curr: []
    }, {
        id: 92,
        code: 'CTS',
        curr: []
    }, {
        id: 20,
        code: 'DRW',
        curr: []
    }, {
        id: 28,
        code: 'HBA',
        curr: []
    }, {
        id: 25,
        code: 'HTI|HTI',
        curr: []
    }, {
        id: 82,
        code: 'KCZ',
        curr: []
    }, {
        id: 83,
        code: 'KMJ',
        curr: []
    }, {
        id: 32,
        code: 'LST',
        curr: []
    }, {
        id: 39,
        code: 'MEL',
        curr: []
    }, {
        id: 88,
        code: 'NGO',
        curr: []
    }, {
        id: 95,
        code: 'NRT|TYO',
        curr: []
    }, {
        id: 41,
        code: 'NTL',
        curr: []
    }, {
        id: 90,
        code: 'OKA',
        curr: []
    }, {
        id: 24,
        code: 'OOL',
        curr: []
    }, {
        id: 44,
        code: 'PER',
        curr: []
    }, {
        id: 72,
        code: 'PVG',
        curr: []
    }, {
        id: 85,
        code: 'SHI',
        curr: []
    }, {
        id: 49,
        code: 'SYD',
        curr: []
    }, {
        id: 93,
        code: 'SYO',
        curr: []
    }, {
        id: 74,
        code: 'TPE',
        curr: []
    }],
    'KCZ': [{
        id: 16,
        code: 'CNS',
        curr: []
    }, {
        id: 108,
        code: 'CRK',
        curr: []
    }, {
        id: 92,
        code: 'CTS',
        curr: []
    }, {
        id: 80,
        code: 'FUK',
        curr: []
    }, {
        id: 66,
        code: 'HKG',
        curr: []
    }, {
        id: 91,
        code: 'KIX|OSA',
        curr: []
    }, {
        id: 86,
        code: 'KMI',
        curr: []
    }, {
        id: 83,
        code: 'KMJ',
        curr: []
    }, {
        id: 81,
        code: 'KOJ',
        curr: []
    }, {
        id: 109,
        code: 'MNL',
        curr: []
    }, {
        id: 87,
        code: 'NGS',
        curr: []
    }, {
        id: 95,
        code: 'NRT|TYO',
        curr: []
    }, {
        id: 89,
        code: 'OIT',
        curr: []
    }, {
        id: 90,
        code: 'OKA',
        curr: []
    }, {
        id: 24,
        code: 'OOL',
        curr: []
    }, {
        id: 72,
        code: 'PVG',
        curr: []
    }, {
        id: 85,
        code: 'SHI',
        curr: []
    }, {
        id: 93,
        code: 'SYO',
        curr: []
    }, {
        id: 74,
        code: 'TPE',
        curr: []
    }],
    'KMJ': [{
        id: 16,
        code: 'CNS',
        curr: []
    }, {
        id: 108,
        code: 'CRK',
        curr: []
    }, {
        id: 92,
        code: 'CTS',
        curr: []
    }, {
        id: 66,
        code: 'HKG',
        curr: []
    }, {
        id: 82,
        code: 'KCZ',
        curr: []
    }, {
        id: 91,
        code: 'KIX|OSA',
        curr: []
    }, {
        id: 81,
        code: 'KOJ',
        curr: []
    }, {
        id: 109,
        code: 'MNL',
        curr: []
    }, {
        id: 95,
        code: 'NRT|TYO',
        curr: []
    }, {
        id: 90,
        code: 'OKA',
        curr: []
    }, {
        id: 24,
        code: 'OOL',
        curr: []
    }, {
        id: 72,
        code: 'PVG',
        curr: []
    }, {
        id: 85,
        code: 'SHI',
        curr: []
    }, {
        id: 110,
        code: 'SIN',
        curr: []
    }, {
        id: 93,
        code: 'SYO',
        curr: []
    }, {
        id: 74,
        code: 'TPE',
        curr: []
    }],
    'MYJ': [{
        id: 6,
        code: 'ADL',
        curr: []
    }, {
        id: 99,
        code: 'AKL',
        curr: []
    }, {
        id: 13,
        code: 'BNE',
        curr: []
    }, {
        id: 16,
        code: 'CNS',
        curr: []
    }, {
        id: 92,
        code: 'CTS',
        curr: []
    }, {
        id: 20,
        code: 'DRW',
        curr: []
    }, {
        id: 28,
        code: 'HBA',
        curr: []
    }, {
        id: 25,
        code: 'HTI|HTI',
        curr: []
    }, {
        id: 32,
        code: 'LST',
        curr: []
    }, {
        id: 39,
        code: 'MEL',
        curr: []
    }, {
        id: 109,
        code: 'MNL',
        curr: []
    }, {
        id: 87,
        code: 'NGS',
        curr: []
    }, {
        id: 95,
        code: 'NRT|TYO',
        curr: []
    }, {
        id: 41,
        code: 'NTL',
        curr: []
    }, {
        id: 90,
        code: 'OKA',
        curr: []
    }, {
        id: 24,
        code: 'OOL',
        curr: []
    }, {
        id: 44,
        code: 'PER',
        curr: []
    }, {
        id: 72,
        code: 'PVG',
        curr: []
    }, {
        id: 85,
        code: 'SHI',
        curr: []
    }, {
        id: 49,
        code: 'SYD',
        curr: []
    }, {
        id: 93,
        code: 'SYO',
        curr: []
    }, {
        id: 74,
        code: 'TPE',
        curr: []
    }],
    'SHI': [{
        id: 16,
        code: 'CNS',
        curr: []
    }, {
        id: 92,
        code: 'CTS',
        curr: []
    }, {
        id: 80,
        code: 'FUK',
        curr: []
    }, {
        id: 66,
        code: 'HKG',
        curr: []
    }, {
        id: 82,
        code: 'KCZ',
        curr: []
    }, {
        id: 91,
        code: 'KIX|OSA',
        curr: []
    }, {
        id: 86,
        code: 'KMI',
        curr: []
    }, {
        id: 83,
        code: 'KMJ',
        curr: []
    }, {
        id: 81,
        code: 'KOJ',
        curr: []
    }, {
        id: 109,
        code: 'MNL',
        curr: []
    }, {
        id: 84,
        code: 'MYJ',
        curr: []
    }, {
        id: 87,
        code: 'NGS',
        curr: []
    }, {
        id: 95,
        code: 'NRT|TYO',
        curr: []
    }, {
        id: 89,
        code: 'OIT',
        curr: []
    }, {
        id: 24,
        code: 'OOL',
        curr: []
    }, {
        id: 72,
        code: 'PVG',
        curr: []
    }, {
        id: 94,
        code: 'TAK',
        curr: []
    }, {
        id: 74,
        code: 'TPE',
        curr: []
    }],
    'KMI': [{
        id: 16,
        code: 'CNS',
        curr: []
    }, {
        id: 92,
        code: 'CTS',
        curr: []
    }, {
        id: 82,
        code: 'KCZ',
        curr: []
    }, {
        id: 91,
        code: 'KIX|OSA',
        curr: []
    }, {
        id: 109,
        code: 'MNL',
        curr: []
    }, {
        id: 84,
        code: 'MYJ',
        curr: []
    }, {
        id: 95,
        code: 'NRT|TYO',
        curr: []
    }, {
        id: 90,
        code: 'OKA',
        curr: []
    }, {
        id: 24,
        code: 'OOL',
        curr: []
    }, {
        id: 72,
        code: 'PVG',
        curr: []
    }, {
        id: 85,
        code: 'SHI',
        curr: []
    }, {
        id: 110,
        code: 'SIN',
        curr: []
    }, {
        id: 93,
        code: 'SYO',
        curr: []
    }, {
        id: 94,
        code: 'TAK',
        curr: []
    }, {
        id: 74,
        code: 'TPE',
        curr: []
    }],
    'NGS': [{
        id: 16,
        code: 'CNS',
        curr: []
    }, {
        id: 92,
        code: 'CTS',
        curr: []
    }, {
        id: 66,
        code: 'HKG',
        curr: []
    }, {
        id: 82,
        code: 'KCZ',
        curr: []
    }, {
        id: 91,
        code: 'KIX|OSA',
        curr: []
    }, {
        id: 109,
        code: 'MNL',
        curr: []
    }, {
        id: 84,
        code: 'MYJ',
        curr: []
    }, {
        id: 95,
        code: 'NRT|TYO',
        curr: []
    }, {
        id: 90,
        code: 'OKA',
        curr: []
    }, {
        id: 24,
        code: 'OOL',
        curr: []
    }, {
        id: 72,
        code: 'PVG',
        curr: []
    }, {
        id: 85,
        code: 'SHI',
        curr: []
    }, {
        id: 93,
        code: 'SYO',
        curr: []
    }, {
        id: 94,
        code: 'TAK',
        curr: []
    }, {
        id: 74,
        code: 'TPE',
        curr: []
    }],
    'NGO': [{
        id: 92,
        code: 'CTS',
        curr: []
    }, {
        id: 80,
        code: 'FUK',
        curr: []
    }, {
        id: 81,
        code: 'KOJ',
        curr: []
    }, {
        id: 109,
        code: 'MNL',
        curr: []
    }, {
        id: 90,
        code: 'OKA',
        curr: []
    }, {
        id: 74,
        code: 'TPE',
        curr: []
    }],
    'OIT': [{
        id: 6,
        code: 'ADL',
        curr: []
    }, {
        id: 99,
        code: 'AKL',
        curr: []
    }, {
        id: 13,
        code: 'BNE',
        curr: []
    }, {
        id: 16,
        code: 'CNS',
        curr: []
    }, {
        id: 92,
        code: 'CTS',
        curr: []
    }, {
        id: 20,
        code: 'DRW',
        curr: []
    }, {
        id: 28,
        code: 'HBA',
        curr: []
    }, {
        id: 66,
        code: 'HKG',
        curr: []
    }, {
        id: 25,
        code: 'HTI|HTI',
        curr: []
    }, {
        id: 82,
        code: 'KCZ',
        curr: []
    }, {
        id: 32,
        code: 'LST',
        curr: []
    }, {
        id: 39,
        code: 'MEL',
        curr: []
    }, {
        id: 95,
        code: 'NRT|TYO',
        curr: []
    }, {
        id: 41,
        code: 'NTL',
        curr: []
    }, {
        id: 90,
        code: 'OKA',
        curr: []
    }, {
        id: 24,
        code: 'OOL',
        curr: []
    }, {
        id: 44,
        code: 'PER',
        curr: []
    }, {
        id: 72,
        code: 'PVG',
        curr: []
    }, {
        id: 85,
        code: 'SHI',
        curr: []
    }, {
        id: 49,
        code: 'SYD',
        curr: []
    }, {
        id: 93,
        code: 'SYO',
        curr: []
    }, {
        id: 74,
        code: 'TPE',
        curr: []
    }],
    'OKA': [{
        id: 6,
        code: 'ADL',
        curr: []
    }, {
        id: 99,
        code: 'AKL',
        curr: []
    }, {
        id: 113,
        code: 'BKK|XBK',
        curr: []
    }, {
        id: 13,
        code: 'BNE',
        curr: []
    }, {
        id: 1,
        code: 'CGK',
        curr: []
    }, {
        id: 112,
        code: 'CMB',
        curr: [{
            'caption': 'US Dollar',
            'value': 'USD'
        }]
    }, {
        id: 16,
        code: 'CNS',
        curr: []
    }, {
        id: 92,
        code: 'CTS',
        curr: []
    }, {
        id: 122,
        code: 'DAD',
        curr: []
    }, {
        id: 20,
        code: 'DRW',
        curr: []
    }, {
        id: 80,
        code: 'FUK',
        curr: []
    }, {
        id: 28,
        code: 'HBA',
        curr: []
    }, {
        id: 66,
        code: 'HKG',
        curr: []
    }, {
        id: 116,
        code: 'HKT',
        curr: []
    }, {
        id: 25,
        code: 'HTI|HTI',
        curr: []
    }, {
        id: 82,
        code: 'KCZ',
        curr: []
    }, {
        id: 91,
        code: 'KIX|OSA',
        curr: []
    }, {
        id: 86,
        code: 'KMI',
        curr: []
    }, {
        id: 83,
        code: 'KMJ',
        curr: []
    }, {
        id: 2,
        code: 'KNO',
        curr: []
    }, {
        id: 81,
        code: 'KOJ',
        curr: []
    }, {
        id: 96,
        code: 'KUL',
        curr: []
    }, {
        id: 32,
        code: 'LST',
        curr: []
    }, {
        id: 39,
        code: 'MEL',
        curr: []
    }, {
        id: 109,
        code: 'MNL',
        curr: []
    }, {
        id: 84,
        code: 'MYJ',
        curr: []
    }, {
        id: 88,
        code: 'NGO',
        curr: []
    }, {
        id: 87,
        code: 'NGS',
        curr: []
    }, {
        id: 95,
        code: 'NRT|TYO',
        curr: []
    }, {
        id: 41,
        code: 'NTL',
        curr: []
    }, {
        id: 89,
        code: 'OIT',
        curr: []
    }, {
        id: 24,
        code: 'OOL',
        curr: []
    }, {
        id: 97,
        code: 'PEN',
        curr: []
    }, {
        id: 44,
        code: 'PER',
        curr: []
    }, {
        id: 56,
        code: 'PNH',
        curr: []
    }, {
        id: 72,
        code: 'PVG',
        curr: []
    }, {
        id: 98,
        code: 'RGN',
        curr: []
    }, {
        id: 126,
        code: 'SGN',
        curr: []
    }, {
        id: 110,
        code: 'SIN',
        curr: []
    }, {
        id: 5,
        code: 'SUB',
        curr: []
    }, {
        id: 49,
        code: 'SYD',
        curr: []
    }, {
        id: 93,
        code: 'SYO',
        curr: []
    }, {
        id: 94,
        code: 'TAK',
        curr: []
    }, {
        id: 74,
        code: 'TPE',
        curr: []
    }],
    'KIX|OSA': [{
        id: 6,
        code: 'ADL',
        curr: []
    }, {
        id: 99,
        code: 'AKL',
        curr: []
    }, {
        id: 9,
        code: 'AYQ|AYQ',
        curr: []
    }, {
        id: 113,
        code: 'BKK|XBK',
        curr: []
    }, {
        id: 118,
        code: 'BMV',
        curr: []
    }, {
        id: 13,
        code: 'BNE',
        curr: []
    }, {
        id: 10,
        code: 'BNK|BBY',
        curr: []
    }, {
        id: 1,
        code: 'CGK',
        curr: []
    }, {
        id: 100,
        code: 'CHC',
        curr: []
    }, {
        id: 112,
        code: 'CMB',
        curr: [{
            'caption': 'US Dollar',
            'value': 'USD'
        }]
    }, {
        id: 16,
        code: 'CNS',
        curr: []
    }, {
        id: 108,
        code: 'CRK',
        curr: []
    }, {
        id: 92,
        code: 'CTS',
        curr: []
    }, {
        id: 122,
        code: 'DAD',
        curr: []
    }, {
        id: 0,
        code: 'DPS',
        curr: []
    }, {
        id: 20,
        code: 'DRW',
        curr: []
    }, {
        id: 80,
        code: 'FUK',
        curr: []
    }, {
        id: 28,
        code: 'HBA',
        curr: []
    }, {
        id: 66,
        code: 'HKG',
        curr: []
    }, {
        id: 116,
        code: 'HKT',
        curr: []
    }, {
        id: 25,
        code: 'HTI|HTI',
        curr: []
    }, {
        id: 82,
        code: 'KCZ',
        curr: []
    }, {
        id: 86,
        code: 'KMI',
        curr: []
    }, {
        id: 83,
        code: 'KMJ',
        curr: []
    }, {
        id: 2,
        code: 'KNO',
        curr: []
    }, {
        id: 96,
        code: 'KUL',
        curr: []
    }, {
        id: 32,
        code: 'LST',
        curr: []
    }, {
        id: 48,
        code: 'MCY',
        curr: []
    }, {
        id: 39,
        code: 'MEL',
        curr: []
    }, {
        id: 109,
        code: 'MNL',
        curr: []
    }, {
        id: 87,
        code: 'NGS',
        curr: []
    }, {
        id: 95,
        code: 'NRT|TYO',
        curr: []
    }, {
        id: 41,
        code: 'NTL',
        curr: []
    }, {
        id: 90,
        code: 'OKA',
        curr: []
    }, {
        id: 24,
        code: 'OOL',
        curr: []
    }, {
        id: 97,
        code: 'PEN',
        curr: []
    }, {
        id: 44,
        code: 'PER',
        curr: []
    }, {
        id: 72,
        code: 'PVG',
        curr: []
    }, {
        id: 126,
        code: 'SGN',
        curr: []
    }, {
        id: 85,
        code: 'SHI',
        curr: []
    }, {
        id: 110,
        code: 'SIN',
        curr: []
    }, {
        id: 5,
        code: 'SUB',
        curr: []
    }, {
        id: 49,
        code: 'SYD',
        curr: []
    }, {
        id: 93,
        code: 'SYO',
        curr: []
    }, {
        id: 74,
        code: 'TPE',
        curr: []
    }, {
        id: 51,
        code: 'TSV',
        curr: []
    }],
    'CTS': [{
        id: 6,
        code: 'ADL',
        curr: []
    }, {
        id: 99,
        code: 'AKL',
        curr: []
    }, {
        id: 9,
        code: 'AYQ|AYQ',
        curr: []
    }, {
        id: 13,
        code: 'BNE',
        curr: []
    }, {
        id: 16,
        code: 'CNS',
        curr: []
    }, {
        id: 20,
        code: 'DRW',
        curr: []
    }, {
        id: 80,
        code: 'FUK',
        curr: []
    }, {
        id: 28,
        code: 'HBA',
        curr: []
    }, {
        id: 66,
        code: 'HKG',
        curr: []
    }, {
        id: 25,
        code: 'HTI|HTI',
        curr: []
    }, {
        id: 82,
        code: 'KCZ',
        curr: []
    }, {
        id: 91,
        code: 'KIX|OSA',
        curr: []
    }, {
        id: 83,
        code: 'KMJ',
        curr: []
    }, {
        id: 81,
        code: 'KOJ',
        curr: []
    }, {
        id: 32,
        code: 'LST',
        curr: []
    }, {
        id: 48,
        code: 'MCY',
        curr: []
    }, {
        id: 39,
        code: 'MEL',
        curr: []
    }, {
        id: 109,
        code: 'MNL',
        curr: []
    }, {
        id: 84,
        code: 'MYJ',
        curr: []
    }, {
        id: 88,
        code: 'NGO',
        curr: []
    }, {
        id: 87,
        code: 'NGS',
        curr: []
    }, {
        id: 95,
        code: 'NRT|TYO',
        curr: []
    }, {
        id: 41,
        code: 'NTL',
        curr: []
    }, {
        id: 89,
        code: 'OIT',
        curr: []
    }, {
        id: 90,
        code: 'OKA',
        curr: []
    }, {
        id: 24,
        code: 'OOL',
        curr: []
    }, {
        id: 44,
        code: 'PER',
        curr: []
    }, {
        id: 72,
        code: 'PVG',
        curr: []
    }, {
        id: 85,
        code: 'SHI',
        curr: []
    }, {
        id: 110,
        code: 'SIN',
        curr: []
    }, {
        id: 49,
        code: 'SYD',
        curr: []
    }, {
        id: 93,
        code: 'SYO',
        curr: []
    }, {
        id: 94,
        code: 'TAK',
        curr: []
    }, {
        id: 74,
        code: 'TPE',
        curr: []
    }, {
        id: 37,
        code: 'VIZ|MEL',
        curr: []
    }],
    'SYO': [{
        id: 16,
        code: 'CNS',
        curr: []
    }, {
        id: 92,
        code: 'CTS',
        curr: []
    }, {
        id: 80,
        code: 'FUK',
        curr: []
    }, {
        id: 66,
        code: 'HKG',
        curr: []
    }, {
        id: 82,
        code: 'KCZ',
        curr: []
    }, {
        id: 91,
        code: 'KIX|OSA',
        curr: []
    }, {
        id: 86,
        code: 'KMI',
        curr: []
    }, {
        id: 83,
        code: 'KMJ',
        curr: []
    }, {
        id: 81,
        code: 'KOJ',
        curr: []
    }, {
        id: 109,
        code: 'MNL',
        curr: []
    }, {
        id: 84,
        code: 'MYJ',
        curr: []
    }, {
        id: 87,
        code: 'NGS',
        curr: []
    }, {
        id: 95,
        code: 'NRT|TYO',
        curr: []
    }, {
        id: 89,
        code: 'OIT',
        curr: []
    }, {
        id: 90,
        code: 'OKA',
        curr: []
    }, {
        id: 24,
        code: 'OOL',
        curr: []
    }, {
        id: 72,
        code: 'PVG',
        curr: []
    }, {
        id: 94,
        code: 'TAK',
        curr: []
    }, {
        id: 74,
        code: 'TPE',
        curr: []
    }],
    'TAK': [{
        id: 6,
        code: 'ADL',
        curr: []
    }, {
        id: 99,
        code: 'AKL',
        curr: []
    }, {
        id: 13,
        code: 'BNE',
        curr: []
    }, {
        id: 16,
        code: 'CNS',
        curr: []
    }, {
        id: 92,
        code: 'CTS',
        curr: []
    }, {
        id: 28,
        code: 'HBA',
        curr: []
    }, {
        id: 25,
        code: 'HTI|HTI',
        curr: []
    }, {
        id: 86,
        code: 'KMI',
        curr: []
    }, {
        id: 32,
        code: 'LST',
        curr: []
    }, {
        id: 39,
        code: 'MEL',
        curr: []
    }, {
        id: 109,
        code: 'MNL',
        curr: []
    }, {
        id: 87,
        code: 'NGS',
        curr: []
    }, {
        id: 95,
        code: 'NRT|TYO',
        curr: []
    }, {
        id: 41,
        code: 'NTL',
        curr: []
    }, {
        id: 90,
        code: 'OKA',
        curr: []
    }, {
        id: 24,
        code: 'OOL',
        curr: []
    }, {
        id: 44,
        code: 'PER',
        curr: []
    }, {
        id: 72,
        code: 'PVG',
        curr: []
    }, {
        id: 85,
        code: 'SHI',
        curr: []
    }, {
        id: 49,
        code: 'SYD',
        curr: []
    }, {
        id: 93,
        code: 'SYO',
        curr: []
    }, {
        id: 74,
        code: 'TPE',
        curr: []
    }],
    'NRT|TYO': [{
        id: 6,
        code: 'ADL',
        curr: []
    }, {
        id: 99,
        code: 'AKL',
        curr: []
    }, {
        id: 9,
        code: 'AYQ|AYQ',
        curr: []
    }, {
        id: 113,
        code: 'BKK|XBK',
        curr: []
    }, {
        id: 13,
        code: 'BNE',
        curr: []
    }, {
        id: 10,
        code: 'BNK|BBY',
        curr: []
    }, {
        id: 100,
        code: 'CHC',
        curr: []
    }, {
        id: 16,
        code: 'CNS',
        curr: []
    }, {
        id: 92,
        code: 'CTS',
        curr: []
    }, {
        id: 0,
        code: 'DPS',
        curr: []
    }, {
        id: 20,
        code: 'DRW',
        curr: []
    }, {
        id: 80,
        code: 'FUK',
        curr: []
    }, {
        id: 28,
        code: 'HBA',
        curr: []
    }, {
        id: 66,
        code: 'HKG',
        curr: []
    }, {
        id: 25,
        code: 'HTI|HTI',
        curr: []
    }, {
        id: 82,
        code: 'KCZ',
        curr: []
    }, {
        id: 91,
        code: 'KIX|OSA',
        curr: []
    }, {
        id: 86,
        code: 'KMI',
        curr: []
    }, {
        id: 83,
        code: 'KMJ',
        curr: []
    }, {
        id: 81,
        code: 'KOJ',
        curr: []
    }, {
        id: 32,
        code: 'LST',
        curr: []
    }, {
        id: 48,
        code: 'MCY',
        curr: []
    }, {
        id: 39,
        code: 'MEL',
        curr: []
    }, {
        id: 109,
        code: 'MNL',
        curr: []
    }, {
        id: 84,
        code: 'MYJ',
        curr: []
    }, {
        id: 87,
        code: 'NGS',
        curr: []
    }, {
        id: 41,
        code: 'NTL',
        curr: []
    }, {
        id: 89,
        code: 'OIT',
        curr: []
    }, {
        id: 90,
        code: 'OKA',
        curr: []
    }, {
        id: 24,
        code: 'OOL',
        curr: []
    }, {
        id: 44,
        code: 'PER',
        curr: []
    }, {
        id: 72,
        code: 'PVG',
        curr: []
    }, {
        id: 85,
        code: 'SHI',
        curr: []
    }, {
        id: 110,
        code: 'SIN',
        curr: []
    }, {
        id: 49,
        code: 'SYD',
        curr: []
    }, {
        id: 93,
        code: 'SYO',
        curr: []
    }, {
        id: 94,
        code: 'TAK',
        curr: []
    }, {
        id: 74,
        code: 'TPE',
        curr: []
    }, {
        id: 51,
        code: 'TSV',
        curr: []
    }, {
        id: 107,
        code: 'WLG',
        curr: []
    }, {
        id: 106,
        code: 'ZQN',
        curr: []
    }],
    'KUL': [{
        id: 6,
        code: 'ADL',
        curr: []
    }, {
        id: 99,
        code: 'AKL',
        curr: []
    }, {
        id: 113,
        code: 'BKK|XBK',
        curr: []
    }, {
        id: 1,
        code: 'CGK',
        curr: []
    }, {
        id: 112,
        code: 'CMB',
        curr: [{
            'caption': 'US Dollar',
            'value': 'USD'
        }]
    }, {
        id: 16,
        code: 'CNS',
        curr: []
    }, {
        id: 122,
        code: 'DAD',
        curr: []
    }, {
        id: 0,
        code: 'DPS',
        curr: []
    }, {
        id: 20,
        code: 'DRW',
        curr: []
    }, {
        id: 80,
        code: 'FUK',
        curr: []
    }, {
        id: 63,
        code: 'HAK',
        curr: []
    }, {
        id: 28,
        code: 'HBA',
        curr: []
    }, {
        id: 116,
        code: 'HKT',
        curr: []
    }, {
        id: 91,
        code: 'KIX|OSA',
        curr: []
    }, {
        id: 2,
        code: 'KNO',
        curr: []
    }, {
        id: 32,
        code: 'LST',
        curr: []
    }, {
        id: 39,
        code: 'MEL',
        curr: []
    }, {
        id: 109,
        code: 'MNL',
        curr: []
    }, {
        id: 90,
        code: 'OKA',
        curr: []
    }, {
        id: 24,
        code: 'OOL',
        curr: []
    }, {
        id: 44,
        code: 'PER',
        curr: []
    }, {
        id: 56,
        code: 'PNH',
        curr: []
    }, {
        id: 57,
        code: 'REP',
        curr: []
    }, {
        id: 98,
        code: 'RGN',
        curr: []
    }, {
        id: 126,
        code: 'SGN',
        curr: []
    }, {
        id: 110,
        code: 'SIN',
        curr: []
    }, {
        id: 5,
        code: 'SUB',
        curr: []
    }, {
        id: 73,
        code: 'SWA',
        curr: []
    }, {
        id: 49,
        code: 'SYD',
        curr: []
    }, {
        id: 71,
        code: 'SYX',
        curr: []
    }, {
        id: 74,
        code: 'TPE',
        curr: []
    }],
    'PEN': [{
        id: 6,
        code: 'ADL',
        curr: []
    }, {
        id: 113,
        code: 'BKK|XBK',
        curr: []
    }, {
        id: 1,
        code: 'CGK',
        curr: []
    }, {
        id: 112,
        code: 'CMB',
        curr: [{
            'caption': 'US Dollar',
            'value': 'USD'
        }]
    }, {
        id: 16,
        code: 'CNS',
        curr: []
    }, {
        id: 108,
        code: 'CRK',
        curr: []
    }, {
        id: 122,
        code: 'DAD',
        curr: []
    }, {
        id: 0,
        code: 'DPS',
        curr: []
    }, {
        id: 20,
        code: 'DRW',
        curr: []
    }, {
        id: 80,
        code: 'FUK',
        curr: []
    }, {
        id: 63,
        code: 'HAK',
        curr: []
    }, {
        id: 116,
        code: 'HKT',
        curr: []
    }, {
        id: 91,
        code: 'KIX|OSA',
        curr: []
    }, {
        id: 2,
        code: 'KNO',
        curr: []
    }, {
        id: 32,
        code: 'LST',
        curr: []
    }, {
        id: 39,
        code: 'MEL',
        curr: []
    }, {
        id: 109,
        code: 'MNL',
        curr: []
    }, {
        id: 90,
        code: 'OKA',
        curr: []
    }, {
        id: 24,
        code: 'OOL',
        curr: []
    }, {
        id: 44,
        code: 'PER',
        curr: []
    }, {
        id: 56,
        code: 'PNH',
        curr: []
    }, {
        id: 98,
        code: 'RGN',
        curr: []
    }, {
        id: 126,
        code: 'SGN',
        curr: []
    }, {
        id: 110,
        code: 'SIN',
        curr: []
    }, {
        id: 5,
        code: 'SUB',
        curr: []
    }, {
        id: 74,
        code: 'TPE',
        curr: []
    }],
    'RGN': [{
        id: 113,
        code: 'BKK|XBK',
        curr: []
    }, {
        id: 1,
        code: 'CGK',
        curr: []
    }, {
        id: 112,
        code: 'CMB',
        curr: [{
            'caption': 'US Dollar',
            'value': 'USD'
        }]
    }, {
        id: 108,
        code: 'CRK',
        curr: []
    }, {
        id: 122,
        code: 'DAD',
        curr: []
    }, {
        id: 0,
        code: 'DPS',
        curr: []
    }, {
        id: 20,
        code: 'DRW',
        curr: []
    }, {
        id: 63,
        code: 'HAK',
        curr: []
    }, {
        id: 116,
        code: 'HKT',
        curr: []
    }, {
        id: 96,
        code: 'KUL',
        curr: []
    }, {
        id: 39,
        code: 'MEL',
        curr: []
    }, {
        id: 109,
        code: 'MNL',
        curr: []
    }, {
        id: 97,
        code: 'PEN',
        curr: []
    }, {
        id: 44,
        code: 'PER',
        curr: []
    }, {
        id: 126,
        code: 'SGN',
        curr: []
    }, {
        id: 110,
        code: 'SIN',
        curr: []
    }, {
        id: 5,
        code: 'SUB',
        curr: []
    }, {
        id: 71,
        code: 'SYX',
        curr: []
    }, {
        id: 74,
        code: 'TPE',
        curr: []
    }],
    'AKL': [{
        id: 6,
        code: 'ADL',
        curr: []
    }, {
        id: 38,
        code: 'AVV|GEX',
        curr: []
    }, {
        id: 9,
        code: 'AYQ|AYQ',
        curr: []
    }, {
        id: 113,
        code: 'BKK|XBK',
        curr: []
    }, {
        id: 13,
        code: 'BNE',
        curr: []
    }, {
        id: 10,
        code: 'BNK|BBY',
        curr: []
    }, {
        id: 1,
        code: 'CGK',
        curr: []
    }, {
        id: 100,
        code: 'CHC',
        curr: []
    }, {
        id: 16,
        code: 'CNS',
        curr: []
    }, {
        id: 92,
        code: 'CTS',
        curr: []
    }, {
        id: 0,
        code: 'DPS',
        curr: []
    }, {
        id: 20,
        code: 'DRW',
        curr: []
    }, {
        id: 101,
        code: 'DUD',
        curr: []
    }, {
        id: 80,
        code: 'FUK',
        curr: []
    }, {
        id: 63,
        code: 'HAK',
        curr: []
    }, {
        id: 28,
        code: 'HBA',
        curr: []
    }, {
        id: 116,
        code: 'HKT',
        curr: []
    }, {
        id: 117,
        code: 'HNL',
        curr: []
    }, {
        id: 91,
        code: 'KIX|OSA',
        curr: []
    }, {
        id: 2,
        code: 'KNO',
        curr: []
    }, {
        id: 81,
        code: 'KOJ',
        curr: []
    }, {
        id: 96,
        code: 'KUL',
        curr: []
    }, {
        id: 32,
        code: 'LST',
        curr: []
    }, {
        id: 48,
        code: 'MCY',
        curr: []
    }, {
        id: 39,
        code: 'MEL',
        curr: []
    }, {
        id: 35,
        code: 'MKY',
        curr: []
    }, {
        id: 109,
        code: 'MNL',
        curr: []
    }, {
        id: 84,
        code: 'MYJ',
        curr: []
    }, {
        id: 95,
        code: 'NRT|TYO',
        curr: []
    }, {
        id: 41,
        code: 'NTL',
        curr: []
    }, {
        id: 89,
        code: 'OIT',
        curr: []
    }, {
        id: 90,
        code: 'OKA',
        curr: []
    }, {
        id: 24,
        code: 'OOL',
        curr: []
    }, {
        id: 44,
        code: 'PER',
        curr: []
    }, {
        id: 56,
        code: 'PNH',
        curr: []
    }, {
        id: 78,
        code: 'RAR',
        curr: []
    }, {
        id: 110,
        code: 'SIN',
        curr: []
    }, {
        id: 5,
        code: 'SUB',
        curr: []
    }, {
        id: 49,
        code: 'SYD',
        curr: []
    }, {
        id: 94,
        code: 'TAK',
        curr: []
    }, {
        id: 74,
        code: 'TPE',
        curr: []
    }, {
        id: 51,
        code: 'TSV',
        curr: []
    }, {
        id: 107,
        code: 'WLG',
        curr: []
    }, {
        id: 106,
        code: 'ZQN',
        curr: []
    }],
    'CHC': [{
        id: 6,
        code: 'ADL',
        curr: []
    }, {
        id: 99,
        code: 'AKL',
        curr: []
    }, {
        id: 38,
        code: 'AVV|GEX',
        curr: []
    }, {
        id: 9,
        code: 'AYQ|AYQ',
        curr: []
    }, {
        id: 113,
        code: 'BKK|XBK',
        curr: []
    }, {
        id: 13,
        code: 'BNE',
        curr: []
    }, {
        id: 10,
        code: 'BNK|BBY',
        curr: []
    }, {
        id: 16,
        code: 'CNS',
        curr: []
    }, {
        id: 0,
        code: 'DPS',
        curr: []
    }, {
        id: 20,
        code: 'DRW',
        curr: []
    }, {
        id: 101,
        code: 'DUD',
        curr: []
    }, {
        id: 28,
        code: 'HBA',
        curr: []
    }, {
        id: 116,
        code: 'HKT',
        curr: []
    }, {
        id: 117,
        code: 'HNL',
        curr: []
    }, {
        id: 25,
        code: 'HTI|HTI',
        curr: []
    }, {
        id: 91,
        code: 'KIX|OSA',
        curr: []
    }, {
        id: 32,
        code: 'LST',
        curr: []
    }, {
        id: 48,
        code: 'MCY',
        curr: []
    }, {
        id: 39,
        code: 'MEL',
        curr: []
    }, {
        id: 35,
        code: 'MKY',
        curr: []
    }, {
        id: 79,
        code: 'NAN',
        curr: []
    }, {
        id: 102,
        code: 'NPE',
        curr: []
    }, {
        id: 95,
        code: 'NRT|TYO',
        curr: []
    }, {
        id: 41,
        code: 'NTL',
        curr: []
    }, {
        id: 24,
        code: 'OOL',
        curr: []
    }, {
        id: 44,
        code: 'PER',
        curr: []
    }, {
        id: 105,
        code: 'PMR',
        curr: []
    }, {
        id: 53,
        code: 'PPP',
        curr: []
    }, {
        id: 78,
        code: 'RAR',
        curr: []
    }, {
        id: 110,
        code: 'SIN',
        curr: []
    }, {
        id: 49,
        code: 'SYD',
        curr: []
    }, {
        id: 51,
        code: 'TSV',
        curr: []
    }, {
        id: 107,
        code: 'WLG',
        curr: []
    }, {
        id: 106,
        code: 'ZQN',
        curr: []
    }],
    'DUD': [{
        id: 6,
        code: 'ADL',
        curr: []
    }, {
        id: 99,
        code: 'AKL',
        curr: []
    }, {
        id: 100,
        code: 'CHC',
        curr: []
    }, {
        id: 39,
        code: 'MEL',
        curr: []
    }, {
        id: 103,
        code: 'NSN',
        curr: []
    }, {
        id: 107,
        code: 'WLG',
        curr: []
    }],
    'PMR': [{
        id: 49,
        code: 'SYD',
        curr: []
    }],
    'ZQN': [{
        id: 6,
        code: 'ADL',
        curr: []
    }, {
        id: 99,
        code: 'AKL',
        curr: []
    }, {
        id: 38,
        code: 'AVV|GEX',
        curr: []
    }, {
        id: 13,
        code: 'BNE',
        curr: []
    }, {
        id: 100,
        code: 'CHC',
        curr: []
    }, {
        id: 16,
        code: 'CNS',
        curr: []
    }, {
        id: 0,
        code: 'DPS',
        curr: []
    }, {
        id: 20,
        code: 'DRW',
        curr: []
    }, {
        id: 28,
        code: 'HBA',
        curr: []
    }, {
        id: 32,
        code: 'LST',
        curr: []
    }, {
        id: 39,
        code: 'MEL',
        curr: []
    }, {
        id: 102,
        code: 'NPE',
        curr: []
    }, {
        id: 104,
        code: 'NPL',
        curr: []
    }, {
        id: 95,
        code: 'NRT|TYO',
        curr: []
    }, {
        id: 41,
        code: 'NTL',
        curr: []
    }, {
        id: 24,
        code: 'OOL',
        curr: []
    }, {
        id: 44,
        code: 'PER',
        curr: []
    }, {
        id: 78,
        code: 'RAR',
        curr: []
    }, {
        id: 126,
        code: 'SGN',
        curr: []
    }, {
        id: 49,
        code: 'SYD',
        curr: []
    }, {
        id: 51,
        code: 'TSV',
        curr: []
    }, {
        id: 107,
        code: 'WLG',
        curr: []
    }],
    'WLG': [{
        id: 6,
        code: 'ADL',
        curr: []
    }, {
        id: 99,
        code: 'AKL',
        curr: []
    }, {
        id: 113,
        code: 'BKK|XBK',
        curr: []
    }, {
        id: 13,
        code: 'BNE',
        curr: []
    }, {
        id: 10,
        code: 'BNK|BBY',
        curr: []
    }, {
        id: 1,
        code: 'CGK',
        curr: []
    }, {
        id: 100,
        code: 'CHC',
        curr: []
    }, {
        id: 16,
        code: 'CNS',
        curr: []
    }, {
        id: 0,
        code: 'DPS',
        curr: []
    }, {
        id: 101,
        code: 'DUD',
        curr: []
    }, {
        id: 28,
        code: 'HBA',
        curr: []
    }, {
        id: 116,
        code: 'HKT',
        curr: []
    }, {
        id: 117,
        code: 'HNL',
        curr: []
    }, {
        id: 32,
        code: 'LST',
        curr: []
    }, {
        id: 48,
        code: 'MCY',
        curr: []
    }, {
        id: 39,
        code: 'MEL',
        curr: []
    }, {
        id: 95,
        code: 'NRT|TYO',
        curr: []
    }, {
        id: 41,
        code: 'NTL',
        curr: []
    }, {
        id: 24,
        code: 'OOL',
        curr: []
    }, {
        id: 44,
        code: 'PER',
        curr: []
    }, {
        id: 78,
        code: 'RAR',
        curr: []
    }, {
        id: 110,
        code: 'SIN',
        curr: []
    }, {
        id: 49,
        code: 'SYD',
        curr: []
    }, {
        id: 106,
        code: 'ZQN',
        curr: []
    }],
    'CRK': [{
        id: 113,
        code: 'BKK|XBK',
        curr: []
    }, {
        id: 1,
        code: 'CGK',
        curr: []
    }, {
        id: 112,
        code: 'CMB',
        curr: []
    }, {
        id: 0,
        code: 'DPS',
        curr: []
    }, {
        id: 20,
        code: 'DRW',
        curr: []
    }, {
        id: 63,
        code: 'HAK',
        curr: []
    }, {
        id: 116,
        code: 'HKT',
        curr: []
    }, {
        id: 82,
        code: 'KCZ',
        curr: []
    }, {
        id: 91,
        code: 'KIX|OSA',
        curr: []
    }, {
        id: 83,
        code: 'KMJ',
        curr: []
    }, {
        id: 2,
        code: 'KNO',
        curr: []
    }, {
        id: 96,
        code: 'KUL',
        curr: []
    }, {
        id: 39,
        code: 'MEL',
        curr: []
    }, {
        id: 97,
        code: 'PEN',
        curr: []
    }, {
        id: 44,
        code: 'PER',
        curr: []
    }, {
        id: 56,
        code: 'PNH',
        curr: []
    }, {
        id: 98,
        code: 'RGN',
        curr: []
    }, {
        id: 126,
        code: 'SGN',
        curr: []
    }, {
        id: 110,
        code: 'SIN',
        curr: []
    }, {
        id: 5,
        code: 'SUB',
        curr: []
    }],
    'MNL': [{
        id: 6,
        code: 'ADL',
        curr: []
    }, {
        id: 99,
        code: 'AKL',
        curr: [{
            'caption': 'PH Peso',
            'value': 'PHP'
        }, {
            'caption': 'US Dollar',
            'value': 'USD'
        }]
    }, {
        id: 113,
        code: 'BKK|XBK',
        curr: [{
            'caption': 'PH Peso',
            'value': 'PHP'
        }, {
            'caption': 'US Dollar',
            'value': 'USD'
        }]
    }, {
        id: 13,
        code: 'BNE',
        curr: [{
            'caption': 'PH Peso',
            'value': 'PHP'
        }, {
            'caption': 'US Dollar',
            'value': 'USD'
        }]
    }, {
        id: 1,
        code: 'CGK',
        curr: [{
            'caption': 'PH Peso',
            'value': 'PHP'
        }, {
            'caption': 'US Dollar',
            'value': 'USD'
        }]
    }, {
        id: 112,
        code: 'CMB',
        curr: [{
            'caption': 'US Dollar',
            'value': 'USD'
        }]
    }, {
        id: 16,
        code: 'CNS',
        curr: [{
            'caption': 'PH Peso',
            'value': 'PHP'
        }, {
            'caption': 'US Dollar',
            'value': 'USD'
        }]
    }, {
        id: 92,
        code: 'CTS',
        curr: [{
            'caption': 'PH Peso',
            'value': 'PHP'
        }, {
            'caption': 'US Dollar',
            'value': 'USD'
        }]
    }, {
        id: 122,
        code: 'DAD',
        curr: []
    }, {
        id: 0,
        code: 'DPS',
        curr: [{
            'caption': 'PH Peso',
            'value': 'PHP'
        }, {
            'caption': 'US Dollar',
            'value': 'USD'
        }]
    }, {
        id: 20,
        code: 'DRW',
        curr: []
    }, {
        id: 80,
        code: 'FUK',
        curr: [{
            'caption': 'PH Peso',
            'value': 'PHP'
        }, {
            'caption': 'US Dollar',
            'value': 'USD'
        }]
    }, {
        id: 28,
        code: 'HBA',
        curr: [{
            'caption': 'PH Peso',
            'value': 'PHP'
        }, {
            'caption': 'US Dollar',
            'value': 'USD'
        }]
    }, {
        id: 116,
        code: 'HKT',
        curr: [{
            'caption': 'PH Peso',
            'value': 'PHP'
        }, {
            'caption': 'US Dollar',
            'value': 'USD'
        }]
    }, {
        id: 82,
        code: 'KCZ',
        curr: []
    }, {
        id: 91,
        code: 'KIX|OSA',
        curr: [{
            'caption': 'PH Peso',
            'value': 'PHP'
        }, {
            'caption': 'US Dollar',
            'value': 'USD'
        }]
    }, {
        id: 86,
        code: 'KMI',
        curr: []
    }, {
        id: 83,
        code: 'KMJ',
        curr: []
    }, {
        id: 2,
        code: 'KNO',
        curr: [{
            'caption': 'PH Peso',
            'value': 'PHP'
        }, {
            'caption': 'US Dollar',
            'value': 'USD'
        }]
    }, {
        id: 96,
        code: 'KUL',
        curr: [{
            'caption': 'PH Peso',
            'value': 'PHP'
        }, {
            'caption': 'US Dollar',
            'value': 'USD'
        }]
    }, {
        id: 39,
        code: 'MEL',
        curr: [{
            'caption': 'PH Peso',
            'value': 'PHP'
        }, {
            'caption': 'US Dollar',
            'value': 'USD'
        }]
    }, {
        id: 84,
        code: 'MYJ',
        curr: []
    }, {
        id: 70,
        code: 'NGB',
        curr: [{
            'caption': 'PH Peso',
            'value': 'PHP'
        }, {
            'caption': 'US Dollar',
            'value': 'USD'
        }]
    }, {
        id: 88,
        code: 'NGO',
        curr: []
    }, {
        id: 87,
        code: 'NGS',
        curr: []
    }, {
        id: 95,
        code: 'NRT|TYO',
        curr: [{
            'caption': 'PH Peso',
            'value': 'PHP'
        }, {
            'caption': 'US Dollar',
            'value': 'USD'
        }]
    }, {
        id: 90,
        code: 'OKA',
        curr: [{
            'caption': 'PH Peso',
            'value': 'PHP'
        }, {
            'caption': 'US Dollar',
            'value': 'USD'
        }]
    }, {
        id: 24,
        code: 'OOL',
        curr: [{
            'caption': 'PH Peso',
            'value': 'PHP'
        }, {
            'caption': 'US Dollar',
            'value': 'USD'
        }]
    }, {
        id: 97,
        code: 'PEN',
        curr: []
    }, {
        id: 44,
        code: 'PER',
        curr: [{
            'caption': 'PH Peso',
            'value': 'PHP'
        }, {
            'caption': 'US Dollar',
            'value': 'USD'
        }]
    }, {
        id: 56,
        code: 'PNH',
        curr: []
    }, {
        id: 57,
        code: 'REP',
        curr: []
    }, {
        id: 98,
        code: 'RGN',
        curr: []
    }, {
        id: 126,
        code: 'SGN',
        curr: [{
            'caption': 'PH Peso',
            'value': 'PHP'
        }, {
            'caption': 'US Dollar',
            'value': 'USD'
        }]
    }, {
        id: 85,
        code: 'SHI',
        curr: []
    }, {
        id: 110,
        code: 'SIN',
        curr: [{
            'caption': 'PH Peso',
            'value': 'PHP'
        }, {
            'caption': 'US Dollar',
            'value': 'USD'
        }]
    }, {
        id: 5,
        code: 'SUB',
        curr: [{
            'caption': 'PH Peso',
            'value': 'PHP'
        }, {
            'caption': 'US Dollar',
            'value': 'USD'
        }]
    }, {
        id: 73,
        code: 'SWA',
        curr: []
    }, {
        id: 49,
        code: 'SYD',
        curr: [{
            'caption': 'PH Peso',
            'value': 'PHP'
        }, {
            'caption': 'US Dollar',
            'value': 'USD'
        }]
    }, {
        id: 93,
        code: 'SYO',
        curr: []
    }, {
        id: 94,
        code: 'TAK',
        curr: []
    }, {
        id: 74,
        code: 'TPE',
        curr: [{
            'caption': 'PH Peso',
            'value': 'PHP'
        }, {
            'caption': 'US Dollar',
            'value': 'USD'
        }]
    }],
    'SIN': [{
        id: 6,
        code: 'ADL',
        curr: []
    }, {
        id: 99,
        code: 'AKL',
        curr: []
    }, {
        id: 113,
        code: 'BKK|XBK',
        curr: [{
            'caption': 'AU Dollar',
            'value': 'AUD'
        }, {
            'caption': 'SG Dollar',
            'value': 'SGD'
        }]
    }, {
        id: 13,
        code: 'BNE',
        curr: []
    }, {
        id: 1,
        code: 'CGK',
        curr: []
    }, {
        id: 100,
        code: 'CHC',
        curr: []
    }, {
        id: 112,
        code: 'CMB',
        curr: [{
            'caption': 'US Dollar',
            'value': 'USD'
        }]
    }, {
        id: 16,
        code: 'CNS',
        curr: []
    }, {
        id: 108,
        code: 'CRK',
        curr: []
    }, {
        id: 92,
        code: 'CTS',
        curr: []
    }, {
        id: 128,
        code: 'CXR',
        curr: []
    }, {
        id: 122,
        code: 'DAD',
        curr: [{
            'caption': 'AU Dollar',
            'value': 'AUD'
        }, {
            'caption': 'SG Dollar',
            'value': 'SGD'
        }]
    }, {
        id: 121,
        code: 'DLI',
        curr: []
    }, {
        id: 0,
        code: 'DPS',
        curr: []
    }, {
        id: 20,
        code: 'DRW',
        curr: []
    }, {
        id: 80,
        code: 'FUK',
        curr: []
    }, {
        id: 63,
        code: 'HAK',
        curr: [{
            'caption': 'AU Dollar',
            'value': 'AUD'
        }, {
            'caption': 'SG Dollar',
            'value': 'SGD'
        }]
    }, {
        id: 125,
        code: 'HAN',
        curr: [{
            'caption': 'AU Dollar',
            'value': 'AUD'
        }, {
            'caption': 'SG Dollar',
            'value': 'SGD'
        }]
    }, {
        id: 28,
        code: 'HBA',
        curr: []
    }, {
        id: 65,
        code: 'HFE',
        curr: []
    }, {
        id: 116,
        code: 'HKT',
        curr: [{
            'caption': 'AU Dollar',
            'value': 'AUD'
        }, {
            'caption': 'SG Dollar',
            'value': 'SGD'
        }]
    }, {
        id: 117,
        code: 'HNL',
        curr: []
    }, {
        id: 124,
        code: 'HPH',
        curr: []
    }, {
        id: 127,
        code: 'HUI',
        curr: []
    }, {
        id: 91,
        code: 'KIX|OSA',
        curr: []
    }, {
        id: 86,
        code: 'KMI',
        curr: []
    }, {
        id: 83,
        code: 'KMJ',
        curr: []
    }, {
        id: 2,
        code: 'KNO',
        curr: []
    }, {
        id: 96,
        code: 'KUL',
        curr: [{
            'caption': 'AU Dollar',
            'value': 'AUD'
        }, {
            'caption': 'SG Dollar',
            'value': 'SGD'
        }]
    }, {
        id: 62,
        code: 'KWE',
        curr: []
    }, {
        id: 39,
        code: 'MEL',
        curr: []
    }, {
        id: 109,
        code: 'MNL',
        curr: [{
            'caption': 'AU Dollar',
            'value': 'AUD'
        }, {
            'caption': 'SG Dollar',
            'value': 'SGD'
        }]
    }, {
        id: 88,
        code: 'NGO',
        curr: []
    }, {
        id: 95,
        code: 'NRT|TYO',
        curr: []
    }, {
        id: 41,
        code: 'NTL',
        curr: []
    }, {
        id: 90,
        code: 'OKA',
        curr: [{
            'caption': 'AU Dollar',
            'value': 'AUD'
        }, {
            'caption': 'SG Dollar',
            'value': 'SGD'
        }]
    }, {
        id: 24,
        code: 'OOL',
        curr: []
    }, {
        id: 97,
        code: 'PEN',
        curr: [{
            'caption': 'AU Dollar',
            'value': 'AUD'
        }, {
            'caption': 'SG Dollar',
            'value': 'SGD'
        }]
    }, {
        id: 44,
        code: 'PER',
        curr: [{
            'caption': 'AU Dollar',
            'value': 'AUD'
        }, {
            'caption': 'SG Dollar',
            'value': 'SGD'
        }]
    }, {
        id: 56,
        code: 'PNH',
        curr: [{
            'caption': 'AU Dollar',
            'value': 'AUD'
        }, {
            'caption': 'SG Dollar',
            'value': 'SGD'
        }]
    }, {
        id: 129,
        code: 'PQC',
        curr: []
    }, {
        id: 130,
        code: 'PXU',
        curr: []
    }, {
        id: 57,
        code: 'REP',
        curr: [{
            'caption': 'AU Dollar',
            'value': 'AUD'
        }, {
            'caption': 'SG Dollar',
            'value': 'SGD'
        }]
    }, {
        id: 98,
        code: 'RGN',
        curr: [{
            'caption': 'AU Dollar',
            'value': 'AUD'
        }, {
            'caption': 'SG Dollar',
            'value': 'SGD'
        }]
    }, {
        id: 126,
        code: 'SGN',
        curr: [{
            'caption': 'AU Dollar',
            'value': 'AUD'
        }, {
            'caption': 'SG Dollar',
            'value': 'SGD'
        }]
    }, {
        id: 5,
        code: 'SUB',
        curr: [{
            'caption': 'AU Dollar',
            'value': 'AUD'
        }, {
            'caption': 'SG Dollar',
            'value': 'SGD'
        }]
    }, {
        id: 73,
        code: 'SWA',
        curr: [{
            'caption': 'AU Dollar',
            'value': 'AUD'
        }, {
            'caption': 'SG Dollar',
            'value': 'SGD'
        }]
    }, {
        id: 49,
        code: 'SYD',
        curr: []
    }, {
        id: 74,
        code: 'TPE',
        curr: [{
            'caption': 'AU Dollar',
            'value': 'AUD'
        }, {
            'caption': 'SG Dollar',
            'value': 'SGD'
        }]
    }, {
        id: 120,
        code: 'VCL',
        curr: []
    }, {
        id: 134,
        code: 'VII',
        curr: []
    }, {
        id: 107,
        code: 'WLG',
        curr: [{
            'caption': 'AU Dollar',
            'value': 'AUD'
        }, {
            'caption': 'SG Dollar',
            'value': 'SGD'
        }]
    }],

 'HVB': [{   
    id: 49,
    code: 'SYD',
    curr: []
  }],


    'ICN': [{
        id: 38,
        code: 'AVV|GEX',
        curr: []
    }, {
        id: 39,
        code: 'MEL',
        curr: []
    }, {
        id: 24,
        code: 'OOL',
        curr: []
    }, {
        id: 44,
        code: 'PER',
        curr: []
    }, {
        id: 49,
        code: 'SYD',
        curr: []
    }],
    'CMB': [{
        id: 113,
        code: 'BKK|XBK',
        curr: [{
            'caption': 'US Dollar',
            'value': 'USD'
        }]
    }, {
        id: 1,
        code: 'CGK',
        curr: [{
            'caption': 'US Dollar',
            'value': 'USD'
        }]
    }, {
        id: 108,
        code: 'CRK',
        curr: [{
            'caption': 'US Dollar',
            'value': 'USD'
        }]
    }, {
        id: 122,
        code: 'DAD',
        curr: [{
            'caption': 'US Dollar',
            'value': 'USD'
        }]
    }, {
        id: 0,
        code: 'DPS',
        curr: [{
            'caption': 'US Dollar',
            'value': 'USD'
        }]
    }, {
        id: 20,
        code: 'DRW',
        curr: [{
            'caption': 'US Dollar',
            'value': 'USD'
        }]
    }, {
        id: 63,
        code: 'HAK',
        curr: [{
            'caption': 'US Dollar',
            'value': 'USD'
        }]
    }, {
        id: 65,
        code: 'HFE',
        curr: [{
            'caption': 'US Dollar',
            'value': 'USD'
        }]
    }, {
        id: 116,
        code: 'HKT',
        curr: [{
            'caption': 'US Dollar',
            'value': 'USD'
        }]
    }, {
        id: 91,
        code: 'KIX|OSA',
        curr: [{
            'caption': 'US Dollar',
            'value': 'USD'
        }]
    }, {
        id: 2,
        code: 'KNO',
        curr: [{
            'caption': 'US Dollar',
            'value': 'USD'
        }]
    }, {
        id: 96,
        code: 'KUL',
        curr: [{
            'caption': 'US Dollar',
            'value': 'USD'
        }]
    }, {
        id: 62,
        code: 'KWE',
        curr: [{
            'caption': 'US Dollar',
            'value': 'USD'
        }]
    }, {
        id: 109,
        code: 'MNL',
        curr: [{
            'caption': 'US Dollar',
            'value': 'USD'
        }]
    }, {
        id: 90,
        code: 'OKA',
        curr: [{
            'caption': 'US Dollar',
            'value': 'USD'
        }]
    }, {
        id: 97,
        code: 'PEN',
        curr: [{
            'caption': 'US Dollar',
            'value': 'USD'
        }]
    }, {
        id: 44,
        code: 'PER',
        curr: [{
            'caption': 'US Dollar',
            'value': 'USD'
        }]
    }, {
        id: 56,
        code: 'PNH',
        curr: [{
            'caption': 'US Dollar',
            'value': 'USD'
        }]
    }, {
        id: 57,
        code: 'REP',
        curr: [{
            'caption': 'US Dollar',
            'value': 'USD'
        }]
    }, {
        id: 98,
        code: 'RGN',
        curr: [{
            'caption': 'US Dollar',
            'value': 'USD'
        }]
    }, {
        id: 126,
        code: 'SGN',
        curr: [{
            'caption': 'US Dollar',
            'value': 'USD'
        }]
    }, {
        id: 110,
        code: 'SIN',
        curr: [{
            'caption': 'US Dollar',
            'value': 'USD'
        }]
    }, {
        id: 5,
        code: 'SUB',
        curr: [{
            'caption': 'US Dollar',
            'value': 'USD'
        }]
    }, {
        id: 73,
        code: 'SWA',
        curr: [{
            'caption': 'US Dollar',
            'value': 'USD'
        }]
    }, {
        id: 74,
        code: 'TPE',
        curr: [{
            'caption': 'US Dollar',
            'value': 'USD'
        }]
    }],
    'BKK|XBK': [{
        id: 6,
        code: 'ADL',
        curr: []
    }, {
        id: 99,
        code: 'AKL',
        curr: []
    }, {
        id: 13,
        code: 'BNE',
        curr: []
    }, {
        id: 1,
        code: 'CGK',
        curr: []
    }, {
        id: 100,
        code: 'CHC',
        curr: []
    }, {
        id: 112,
        code: 'CMB',
        curr: [{
            'caption': 'US Dollar',
            'value': 'USD'
        }]
    }, {
        id: 108,
        code: 'CRK',
        curr: []
    }, {
        id: 122,
        code: 'DAD',
        curr: []
    }, {
        id: 0,
        code: 'DPS',
        curr: []
    }, {
        id: 20,
        code: 'DRW',
        curr: []
    }, {
        id: 63,
        code: 'HAK',
        curr: []
    }, {
        id: 28,
        code: 'HBA',
        curr: []
    }, {
        id: 65,
        code: 'HFE',
        curr: []
    }, {
        id: 91,
        code: 'KIX|OSA',
        curr: []
    }, {
        id: 2,
        code: 'KNO',
        curr: []
    }, {
        id: 96,
        code: 'KUL',
        curr: []
    }, {
        id: 32,
        code: 'LST',
        curr: []
    }, {
        id: 39,
        code: 'MEL',
        curr: []
    }, {
        id: 109,
        code: 'MNL',
        curr: []
    }, {
        id: 95,
        code: 'NRT|TYO',
        curr: []
    }, {
        id: 90,
        code: 'OKA',
        curr: []
    }, {
        id: 24,
        code: 'OOL',
        curr: []
    }, {
        id: 97,
        code: 'PEN',
        curr: []
    }, {
        id: 44,
        code: 'PER',
        curr: []
    }, {
        id: 98,
        code: 'RGN',
        curr: []
    }, {
        id: 126,
        code: 'SGN',
        curr: [{
            'caption': 'Vietnam Dong',
            'value': 'VND'
        }, {
            'caption': 'US Dollar',
            'value': 'USD'
        }]
    }, {
        id: 110,
        code: 'SIN',
        curr: []
    }, {
        id: 5,
        code: 'SUB',
        curr: []
    }, {
        id: 49,
        code: 'SYD',
        curr: []
    }, {
        id: 71,
        code: 'SYX',
        curr: []
    }, {
        id: 74,
        code: 'TPE',
        curr: []
    }, {
        id: 107,
        code: 'WLG',
        curr: []
    }],
    'HKT': [{
        id: 6,
        code: 'ADL',
        curr: []
    }, {
        id: 99,
        code: 'AKL',
        curr: []
    }, {
        id: 38,
        code: 'AVV|GEX',
        curr: []
    }, {
        id: 13,
        code: 'BNE',
        curr: []
    }, {
        id: 10,
        code: 'BNK|BBY',
        curr: []
    }, {
        id: 17,
        code: 'CBR',
        curr: []
    }, {
        id: 1,
        code: 'CGK',
        curr: []
    }, {
        id: 100,
        code: 'CHC',
        curr: []
    }, {
        id: 112,
        code: 'CMB',
        curr: [{
            'caption': 'US Dollar',
            'value': 'USD'
        }]
    }, {
        id: 16,
        code: 'CNS',
        curr: []
    }, {
        id: 108,
        code: 'CRK',
        curr: []
    }, {
        id: 122,
        code: 'DAD',
        curr: []
    }, {
        id: 0,
        code: 'DPS',
        curr: []
    }, {
        id: 20,
        code: 'DRW',
        curr: []
    }, {
        id: 80,
        code: 'FUK',
        curr: []
    }, {
        id: 63,
        code: 'HAK',
        curr: []
    }, {
        id: 28,
        code: 'HBA',
        curr: []
    }, {
        id: 65,
        code: 'HFE',
        curr: []
    }, {
        id: 91,
        code: 'KIX|OSA',
        curr: []
    }, {
        id: 2,
        code: 'KNO',
        curr: []
    }, {
        id: 96,
        code: 'KUL',
        curr: []
    }, {
        id: 32,
        code: 'LST',
        curr: []
    }, {
        id: 48,
        code: 'MCY',
        curr: []
    }, {
        id: 39,
        code: 'MEL',
        curr: []
    }, {
        id: 109,
        code: 'MNL',
        curr: []
    }, {
        id: 41,
        code: 'NTL',
        curr: []
    }, {
        id: 90,
        code: 'OKA',
        curr: []
    }, {
        id: 24,
        code: 'OOL',
        curr: []
    }, {
        id: 97,
        code: 'PEN',
        curr: []
    }, {
        id: 44,
        code: 'PER',
        curr: []
    }, {
        id: 56,
        code: 'PNH',
        curr: []
    }, {
        id: 57,
        code: 'REP',
        curr: []
    }, {
        id: 98,
        code: 'RGN',
        curr: []
    }, {
        id: 126,
        code: 'SGN',
        curr: []
    }, {
        id: 110,
        code: 'SIN',
        curr: []
    }, {
        id: 5,
        code: 'SUB',
        curr: []
    }, {
        id: 73,
        code: 'SWA',
        curr: []
    }, {
        id: 49,
        code: 'SYD',
        curr: []
    }, {
        id: 74,
        code: 'TPE',
        curr: []
    }, {
        id: 37,
        code: 'VIZ|MEL',
        curr: []
    }, {
        id: 107,
        code: 'WLG',
        curr: []
    }],
    'HNL': [{
        id: 6,
        code: 'ADL',
        curr: []
    }, {
        id: 99,
        code: 'AKL',
        curr: []
    }, {
        id: 38,
        code: 'AVV|GEX',
        curr: []
    }, {
        id: 13,
        code: 'BNE',
        curr: []
    }, {
        id: 100,
        code: 'CHC',
        curr: []
    }, {
        id: 16,
        code: 'CNS',
        curr: []
    }, {
        id: 0,
        code: 'DPS',
        curr: []
    }, {
        id: 20,
        code: 'DRW',
        curr: []
    }, {
        id: 28,
        code: 'HBA',
        curr: []
    }, {
        id: 32,
        code: 'LST',
        curr: []
    }, {
        id: 39,
        code: 'MEL',
        curr: []
    }, {
        id: 41,
        code: 'NTL',
        curr: []
    }, {
        id: 24,
        code: 'OOL',
        curr: []
    }, {
        id: 44,
        code: 'PER',
        curr: []
    }, {
        id: 110,
        code: 'SIN',
        curr: []
    }, {
        id: 49,
        code: 'SYD',
        curr: []
    }, {
        id: 51,
        code: 'TSV',
        curr: []
    }, {
        id: 37,
        code: 'VIZ|MEL',
        curr: []
    }, {
        id: 107,
        code: 'WLG',
        curr: []
    }],
    'DAD': [{
        id: 113,
        code: 'BKK|XBK',
        curr: []
    }, {
        id: 1,
        code: 'CGK',
        curr: []
    }, {
        id: 112,
        code: 'CMB',
        curr: []
    }, {
        id: 20,
        code: 'DRW',
        curr: []
    }, {
        id: 63,
        code: 'HAK',
        curr: []
    }, {
        id: 116,
        code: 'HKT',
        curr: []
    }, {
        id: 91,
        code: 'KIX|OSA',
        curr: []
    }, {
        id: 2,
        code: 'KNO',
        curr: []
    }, {
        id: 96,
        code: 'KUL',
        curr: []
    }, {
        id: 109,
        code: 'MNL',
        curr: []
    }, {
        id: 1,
        code: 'CGK',
        curr: []
    }, {
        id: 98,
        code: 'RGN',
        curr: []
    }, {
        id: 126,
        code: 'SGN',
        curr: [{
            'caption': 'Vietnam Dong',
            'value': 'VND'
        }, {
            'caption': 'US Dollar',
            'value': 'USD'
        }]
    }, {
        id: 110,
        code: 'SIN',
        curr: []
    }, {
        id: 5,
        code: 'SUB',
        curr: []
    }, {
        id: 49,
        code: 'SYD',
        curr: []
    }, {
        id: 74,
        code: 'TPE',
        curr: []
    }, {
        id: 76,
        code: 'XUZ',
        curr: []
    }],
    'SGN': [{
        id: 113,
        code: 'BKK|XBK',
        curr: [{
            'caption': 'Vietnam Dong',
            'value': 'VND'
        }, {
            'caption': 'US Dollar',
            'value': 'USD'
        }]
    }, {
        id: 1,
        code: 'CGK',
        curr: []
    }, {
        id: 112,
        code: 'CMB',
        curr: [{
            'caption': 'US Dollar',
            'value': 'USD'
        }]
    }, {
        id: 108,
        code: 'CRK',
        curr: []
    }, {
        id: 122,
        code: 'DAD',
        curr: [{
            'caption': 'Vietnam Dong',
            'value': 'VND'
        }, {
            'caption': 'US Dollar',
            'value': 'USD'
        }]
    }, {
        id: 0,
        code: 'DPS',
        curr: []
    }, {
        id: 20,
        code: 'DRW',
        curr: []
    }, {
        id: 63,
        code: 'HAK',
        curr: []
    }, {
        id: 116,
        code: 'HKT',
        curr: []
    }, {
        id: 91,
        code: 'KIX|OSA',
        curr: []
    }, {
        id: 2,
        code: 'KNO',
        curr: []
    }, {
        id: 96,
        code: 'KUL',
        curr: []
    }, {
        id: 39,
        code: 'MEL',
        curr: []
    }, {
        id: 109,
        code: 'MNL',
        curr: []
    }, {
        id: 90,
        code: 'OKA',
        curr: []
    }, {
        id: 97,
        code: 'PEN',
        curr: []
    }, {
        id: 56,
        code: 'PNH',
        curr: []
    }, {
        id: 57,
        code: 'REP',
        curr: []
    }, {
        id: 98,
        code: 'RGN',
        curr: []
    }, {
        id: 110,
        code: 'SIN',
        curr: []
    }, {
        id: 5,
        code: 'SUB',
        curr: []
    }, {
        id: 49,
        code: 'SYD',
        curr: []
    }, {
        id: 74,
        code: 'TPE',
        curr: []
    }, {
        id: 76,
        code: 'XUZ',
        curr: []
    }]
};
var data_holidayOrigins = []
var data_holidayDestinations = {};
var data_hotelSearchProviders = [{
    'name': 'Agoda',
    'showRoomType': false,
    'url': 'http:\/\/ajaxsearch.partners.agoda.com\/partners\/partnersearch.aspx'
}, {
    'name': 'Expedia',
    'showRoomType': false,
    'url': 'http:\/\/www.travelnow.com\/templates\/{0}\/hotels\/list'
}, {
    'name': 'Hostelworld',
    'showRoomType': false,
    'url': 'http:\/\/reservations.bookhostels.com\/jetstar.com\/index.php'
}, {
    'name': 'Jetstar Hotels',
    'showRoomType': false,
    'url': 'http:\/\/hotels.jetstar.com\/search?location={0}&checkIn={1}&checkOut={2}&adults={3}&children={4}&childAges={5}&rooms={6}&backLink={7}'
}, {
    'name': 'Octopus',
    'showRoomType': true,
    'url': 'http:\/\/www.octopustravel.com\/hk\/HotelLink'
}, {
    'name': 'Ready Rooms',
    'showRoomType': false,
    'url': 'http:\/\/hotels.qantas.com.au\/readyrooms\/citySearch.jspa'
}];
var data_hotelArray = [
    [0, 'Denpasar (Bali)', '', false, 'Ready Rooms'],
    [0, 'Jakarta', 'AJKT', true, 'Octopus'],
    [0, 'Medan', 'CMES', true, 'Octopus'],
    [0, 'Surabaya', 'CSUB', true, 'Octopus'],
    [1, 'Adelaide', 'ADL', false, 'Ready Rooms'],
    [1, 'Ayers Rock', 'AYQ', false, 'Ready Rooms'],
    [1, 'Ballina Byron', 'BBY', false, 'Ready Rooms'],
    [1, 'Barossa Valley', 'BAZ', false, 'Ready Rooms'],
    [1, 'Brampton Island', 'BMP', false, 'Ready Rooms'],
    [1, 'Brisbane', 'BNE', false, 'Ready Rooms'],
    [1, 'Cairns', 'CNS', false, 'Ready Rooms'],
    [1, 'Darwin', 'DRW', false, 'Ready Rooms'],
    [1, 'Daydream Island', 'DDI', false, 'Ready Rooms'],
    [1, 'Dunk Island', 'DKI', false, 'Ready Rooms'],
    [1, 'Gold Coast', 'COOL', true, 'Octopus'],
    [1, 'Hamilton Island', 'HTI', false, 'Ready Rooms'],
    [1, 'Hayman Island', 'HIS', false, 'Ready Rooms'],
    [1, 'Hobart', 'HBA', false, 'Ready Rooms'],
    [1, 'Hunter Valley', 'HTV', false, 'Ready Rooms'],
    [1, 'Launceston', 'LST', false, 'Ready Rooms'],
    [1, 'Long Island', 'HAP', false, 'Ready Rooms'],
    [1, 'Mackay', 'MKY', false, 'Ready Rooms'],
    [1, 'Melbourne', 'MEL', false, 'Ready Rooms'],
    [1, 'Newcastle', 'NTL', false, 'Ready Rooms'],
    [1, 'Noosa', 'NSA', false, 'Ready Rooms'],
    [1, 'Palm Cove', 'PCQ', false, 'Ready Rooms'],
    [1, 'Perth', 'PER', false, 'Ready Rooms'],
    [1, 'Port Douglas', 'PTI', false, 'Ready Rooms'],
    [1, 'Rockhampton', 'ROK', false, 'Ready Rooms'],
    [1, 'Sunshine Coast', 'A29', false, 'Ready Rooms'],
    [1, 'Sydney', 'SYD', false, 'Ready Rooms'],
    [1, 'Townsville', 'TSV', false, 'Ready Rooms'],
    [1, 'Whitsunday Coast', 'WSY', false, 'Ready Rooms'],
    [2, 'Phnom Penh', 'CPNH', true, 'Octopus'],
    [2, 'Siem Reap', 'CSIEM', true, 'Octopus'],
    [5, 'Fiji', 'AFIJI', true, 'Octopus'],
    [7, 'Hong Kong', 'CHKG', true, 'Octopus'],
    [9, 'Osaka', 'AOSA', true, 'Octopus'],
    [9, 'Tokyo', 'ATYO', true, 'Octopus'],
    [10, 'Macau', 'CMFM', true, 'Octopus'],
    [11, 'Kota Kinabalu', 'CBKI', true, 'Octopus'],
    [11, 'Kuala Lumpur', 'CKUL', true, 'Octopus'],
    [11, 'Kuching', 'CKCH', true, 'Octopus'],
    [11, 'Penang', 'CPEN', true, 'Octopus'],
    [12, 'Yangon', 'CRGN', true, 'Octopus'],
    [13, 'Auckland', 'CAKL', true, 'Octopus'],
    [13, 'Christchurch', 'CHC', false, 'Ready Rooms'],
    [13, 'Queenstown', 'ZQN', false, 'Ready Rooms'],
    [13, 'Rotorua', 'ROT', false, 'Ready Rooms'],
    [13, 'Wellington', 'WLG', false, 'Ready Rooms'],
    [14, 'Manila', 'CMNL', true, 'Octopus'],
    [15, 'Singapore', 'ASIN', true, 'Octopus'],
    [18, '', 'CTPE', true, 'Octopus'],
    [19, 'Bangkok', '', false, 'Ready Rooms'],
    [19, 'Phuket', 'AHKT', true, 'Octopus'],
    [22, 'Honolulu', 'CHNL', true, 'Octopus'],
    [23, 'Can Tho', 'CVCA', true, 'Octopus'],
    [23, 'Danang', 'CDANN', true, 'Octopus'],
    [23, 'Ha Noi', 'CHAN', true, 'Octopus'],
    [23, 'Ho Chi Minh City', 'CSGN', true, 'Octopus'],
    [23, 'Hue', 'SHUEZ', true, 'Octopus'],
    [23, 'Nha Trang', 'CNHAT', true, 'Octopus'],
    [23, 'Vinh', 'CVII', true, 'Octopus']
];
var data_hostelArray = [
    [0, 'Bali - Jimbaran Bay', 'CJimbaran Bay;Indonesia', false, 'Hostelworld'],
    [0, 'Bali - Kuta Beach', 'CKuta Beach;Indonesia', false, 'Hostelworld'],
    [0, 'Bali - Nusa Dua', 'CNusa Dua;Indonesia', false, 'Hostelworld'],
    [0, 'Bali - Sanur', 'CSanur;Indonesia', false, 'Hostelworld'],
    [0, 'Bali - Ubud', 'CUbud;Indonesia', false, 'Hostelworld'],
    [0, 'Bali', 'CBali;Indonesia', false, 'Hostelworld'],
    [0, 'Jakarta', 'CJakarta;Indonesia', false, 'Hostelworld'],
    [0, 'Surabaya', 'CSurabaya;Indonesia', false, 'Hostelworld'],
    [1, 'Adelaide', 'CAdelaide;Australia', false, 'Hostelworld'],
    [1, 'Airlie Beach', 'CAirlie Beach;Australia', false, 'Hostelworld'],
    [1, 'Alice Springs', 'CAlice Springs;Australia', false, 'Hostelworld'],
    [1, 'Brisbane', 'CBrisbane;Australia', false, 'Hostelworld'],
    [1, 'Byron Bay', 'CByron Bay;Australia', false, 'Hostelworld'],
    [1, 'Cairns', 'CCairns;Australia', false, 'Hostelworld'],
    [1, 'Darwin', 'CDarwin;Australia', false, 'Hostelworld'],
    [1, 'Gold Coast', 'CGold Coast;Australia', false, 'Hostelworld'],
    [1, 'Hervey Bay', 'CHervey Bay;Australia', false, 'Hostelworld'],
    [1, 'Hobart', 'CHobart;Australia', false, 'Hostelworld'],
    [1, 'Hunter Valley', 'CHunter Valley;Australia', false, 'Hostelworld'],
    [1, 'Launceston', 'CLaunceston;Australia', false, 'Hostelworld'],
    [1, 'Mackay', 'CMackay;Australia', false, 'Hostelworld'],
    [1, 'Melbourne', 'CMelbourne;Australia', false, 'Hostelworld'],
    [1, 'Mooloolaba', 'CMooloolaba;Australia', false, 'Hostelworld'],
    [1, 'Newcastle', 'CNewcastle;Australia', false, 'Hostelworld'],
    [1, 'Noosa', 'CNoosa;Australia', false, 'Hostelworld'],
    [1, 'Perth', 'CPerth;Australia', false, 'Hostelworld'],
    [1, 'Rockhampton', 'CRockhampton;Australia', false, 'Hostelworld'],
    [1, 'Surfers Paradise', 'CSurfers Paradise;Australia', false, 'Hostelworld'],
    [1, 'Sydney', 'CSydney;Australia', false, 'Hostelworld'],
    [1, 'Townsville', 'CTownsville;Australia', false, 'Hostelworld'],
    [2, 'Phnom Penh', 'CPhnom Penh;Cambodia', false, 'Hostelworld'],
    [2, 'Siem Reap', 'CSiem Reap;Cambodia', false, 'Hostelworld'],
    [5, 'Fiji - Beachcomber Island', 'CBeachcomber Island;Fiji', false, 'Hostelworld'],
    [5, 'Fiji - Coral Coast', 'CCoral Coast;Fiji', false, 'Hostelworld'],
    [5, 'Fiji - Mana Beach', 'CMana Beach;Fiji', false, 'Hostelworld'],
    [5, 'Fiji - Nadi', 'CNadi;Fiji', false, 'Hostelworld'],
    [7, 'Hong Kong', 'CHong Kong;Hong Kong', false, 'Hostelworld'],
    [9, 'Osaka', 'COsaka;Japan', false, 'Hostelworld'],
    [9, 'Tokyo', 'CTokyo;Japan', false, 'Hostelworld'],
    [10, 'Macau', 'CMacau;Macau', false, 'Hostelworld'],
    [11, 'Kota Kinabalu', 'CKota Kinabalu;Malaysia', false, 'Hostelworld'],
    [11, 'Kuala Lumpur', 'CKuala Lumpur;Malaysia', false, 'Hostelworld'],
    [11, 'Kuching', 'CKuching;Malaysia', false, 'Hostelworld'],
    [11, 'Penang', 'CPenang;Malaysia', false, 'Hostelworld'],
    [13, 'Auckland', 'CAuckland;New Zealand', false, 'Hostelworld'],
    [13, 'Christchurch', 'CChristchurch;NewZealand', false, 'Hostelworld'],
    [13, 'Queenstown', 'CQueenstown;New Zealand', false, 'Hostelworld'],
    [13, 'Rotorua', 'CRotorua;New Zealand', false, 'Hostelworld'],
    [13, 'Wellington', 'CWellington;New Zealand', false, 'Hostelworld'],
    [14, 'Manila', 'CManila;Philippines', false, 'Hostelworld'],
    [15, 'Singapore', 'CSingapore;Singapore', false, 'Hostelworld'],
    [18, 'Taipei', 'CTaipei;Taiwan', false, 'Hostelworld'],
    [19, 'Bangkok', 'CBangkok;Thailand', false, 'Hostelworld'],
    [19, 'Phuket', 'CPhuket;Thailand', false, 'Hostelworld'],
    [22, 'Honolulu', 'CHonolulu;USA', false, 'Hostelworld'],
    [23, 'Danang', 'CDanang;Vietnam', false, 'Hostelworld'],
    [23, 'Ho Chi Minh City', 'CHo Chi Minh City;Vietnam', false, 'Hostelworld'],
    [23, 'Hoi An', 'CHoi An;Vietnam', false, 'Hostelworld'],
    [23, 'Hue', 'CHue;Vietnam', false, 'Hostelworld'],
    [23, 'Nha Trang', 'CNha Trang;Vietnam', false, 'Hostelworld']
];
/* ERROR: Origin Folder CGK ({6AFA391A-7BE2-4D8D-A307-BF69D849959B}) has already been added for country Indonesia */
/* WARNING: Airport DDI ({369C2E76-BF6D-408C-BBF8-948816B86C26}) not used for any origins in Origin Folder DDI ({242F52E2-11F6-40CF-817F-9185BEB37900}) */
/* WARNING: Airport HAP ({A58A9EC9-131C-4B1A-BFCF-5D2B9AEEF399}) not used for any origins in Origin Folder HAP ({851FD9D7-91D2-4C28-BA50-2CA2701E8E48}) */
/* WARNING: Country France not found in allLocations array. */
/* WARNING: Country Hong Kong not found in allLocations array. */
/* WARNING: Country Italy not found in allLocations array. */
/* WARNING: Country Macau not found in allLocations array. */
/* WARNING: Country Taiwan not found in allLocations array. */
/* WARNING: Country United Arab Emirates not found in allLocations array. */
/* WARNING: Country United Kingdom not found in allLocations array. */
/* WARNING: Airport VCA ({507C4FF8-EAE9-47A7-B392-52101D0D1EEC}) not used for any origins in Origin Folder VCA ({4491CF63-089F-4B2A-BE4F-549C08543A7E}) */
/* ERROR: Flight Schedule DAD-SWA ({FEDFB18C-AF5B-4D94-95CF-6DFBDEAF0B1A}) has invalid field 'Destination' */
/* ERROR: Flight Schedule SGN-SWA ({3711AE8F-3544-4260-906E-7E7691AC0EAF}) has invalid field 'Destination' */