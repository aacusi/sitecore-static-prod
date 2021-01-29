if (!window.console) {
    console = {
        log: function() {},
        info: function() {},
        debug: function() {},
        warn: function() {},
        error: function() {}
    };
}
var multiCityPageName = "/jetstar new zealand/website/home/multicity";
var ChooseCategoryText = "Choose category";
var SiteName = "nz_en_website";
var virtualFolder = "/nz/en/";
var json_flightOrigin = "/nz/en/services/compactsearchservice?token=289&action=LoadOrigins";
var json_flightDestination = "/nz/en/services/compactsearchservice?token=289&action=LoadDestinations&origin=";
var json_holidayOrigin = "/nz/en/services/holidayservice?token=289&action=LoadOrigins";
var json_holidayDestination = "/nz/en/services/holidayservice?token=289&action=LoadDestinations&origin=";
var json_holiday = "/nz/en/services/holidayservice?token=289";
var json_hotel = "/nz/en/services/hotelservice?token=289&action=LoadHotelData";
var json_hostel = "/nz/en/services/hotelservice?token=289&action=LoadHostelData";
var json_tweet = "/nz/en/services/othercontrolsservice?token=289&action=GetTwitterFeed";
var json_localisation = "/nz/en/services/othercontrolsservice?token=289&action=GetLocalisationUrl";
var json_travelalerts = "/nz/en/services/travelalertsservice?token=289";
var json_holidayCompactSearch = "/nz/en/services/holidayservice?token=289&action=LoadValidDates&origin=";
var json_customerPortal = "/nz/en/services/customerenquiryservice?token=289";
var json_specialOffers = "/nz/en/services/specialoffersservice?token=289";
var json_mobileSiteContent = "/nz/en/services/mobilesitecontentservices?token=289";
var json_clubJestarOffersCarousel = "/nz/en/services/clubmemberoffers?token=289";
var dreamlinerRegisterURL = "/nz/en/services/dreamlinerservices?token=289&action=register";
var dreamlinerNewsContent = "/nz/en/services/dreamlinerservices?token=289&action=getannouncements";
var dreamlinerGalleryContent = "/nz/en/services/dreamlinerservices?token=289&action=getgallery";
var dreamlinerTwitterContent = "/nz/en/services/dreamlinerservices?token=289&action=gettwitterfeed";
var data_datetime = "http://jq-prod-dsslb.jetstar.com/InspirationMapServices/JSON/GetCTData";
var server_timestamp = "";
countdown_labels = ['YRS', 'MNTHS', 'WKS', 'DAYS', 'HRS', 'MINS', 'SECS']
var data_ajax_timeout = "7500";
var json_carriers_data = "/_global/main/inc/carriers_data.js?token=289";
var json_Days = "/nz/en/services/othercontrolsservice?token=289&action=GetMonthDays&MonthYear=";
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
var currencyFormatRule = "";
var currencyFormatSeparator = "";
var today = new Date();
today.setFullYear(today.getFullYear() + 1);
var datepicker_endDate = today;
var message_validationPackageDates = "Please select your <strong>origin, destination</strong> before choosing your <strong>travel dates</strong>";
var booking_engine_viewstate = "/wEPDwUBMGQYAQUeX19Db250cm9sc1JlcXVpcmVQb3N0QmFja0tleV9fFgEFJ01lbWJlckxvZ2luU2VhcmNoVmlldyRtZW1iZXJfUmVtZW1iZXJtZaXQj/rtlZ1hPS0zPQj+skvkM9qtml4xeXxQQ8y8k6xx";
var booking_engine_culture = "en-NZ";
var booking_engine_language = "EN";
var site_culture = "en-NZ";
var agoda_cid = "1657581";
var agoda_header_link = "http://image.reply.agoda-rewards.com/lib/fef61c73706001/m/15/head-en2nz.html";
var agoda_footer_link = "http://image.reply.agoda-rewards.com/lib/fef61c73706001/m/7/jetstar_footer_custom.html";
var expedia_cid = "351990";
var expedia_locale = "en";
var expedia_currency = "NZD";
var expedia_currency_symbol = "";
var flight_status_yesterday = "Yesterday";
var flight_status_today = "Today";
var flight_status_tomorrow = "Tomorrow";
var flight_status_please_select = "Please Select";
var web_checkin_culture = "en-NZ";
var message_loading = "Loading...";
var message_searching = "Searching...";
var message_validationFlights = "Please select your <strong>origin, destination</strong> and <strong>travel dates</strong> to search for flights";
var message_HoldidayPackagesErrorWarning = "";
var message_validationFlightsHotels = "Please select your <strong>location</strong> and <strong>check in/out dates</strong> to search";
var message_invalidOrigin = "Please select a valid <strong>Origin</strong> first";
var message_noFlightResults = "No locations matched your search.<br />Please try again or alternatively view <a href='http://www.jetstar.com/nz/en/planning-and-booking/where-we-go/route-map'>Jetstar\'s route map</a>";
var message_myJetstarErrorMessage = "Please ensure the following fields are filled in: ";
var message_selectOrigin = "Please select your Point of Origin";
var message_selectDestination = "Please select your Destination";
var message_selectHotel = "";
var message_selectHostel = "";
var ShowHotelResultsOnly = "1";
var message_selectDepartDate = "Select your departure date";
var message_selectReturnDate = "Select your <span>return</span> date";
var message_selectCheckinDate = "Select your check in date";
var message_selectCheckoutDate = "Select your <span>check out</span> date";
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
var special_route_stopover = "/jetstar new zealand/website/home/popups/special route stopover?token=289";
var max_passenger_allowed = "/jetstar new zealand/website/home/popups/total allowed passengers?token=289";
var message_selectDepartDate_hotels = "Select your check in date";
var message_selectReturnDate_hotels = "Select your <span>check out</span> date";
var max_flightspecials = "6";
var json_flightspecials_data = "";
var binError_imgSrc = "";
var message_noFlightSpecials = "<p>There are currently no special offers available from this airport.</p> <p>Please check again soon or try another airport</p>";
var message_errorFlightSpecials = "<p>Please check our <a href='http://www.jetstar.com/nz/en/special-offers'>special offers page</a></p>";
var binEmpty_MainHeadingMsg = "";
var binEmpty_SubTextMsg = "";
var binErr_MainHeadingMsg = "";
var binErr_SubTextMsg = "";
var data_flightspecials_default = "AKL";
var exclude_tax = false;
var data_flightspecials_page = "";
var data_leadin_fares_url = "/nz/en/popups/compact-search-pop-up";
var data_flightspecials_pricesuffix = "";
var data_flightspecials_pricecurrency = "$";
var message_flightspecials_LinkSpecialsText = "Find flights";
var message_flightspecials_LinkLeadInText = "Book Now";
var message_flightspecials_leadInText = "Subject to Availability";
var data_bargainBin_HotFareText = "";
var data_bargainBin_SaleFareText = "";
var data_bargainBin_BusinessSaleText = "";
var json_hotelSpecial_url = "http://hotels.jetstar.com/search/list";
var json_hotelSpecial_api = "http://hotels.jetstar.com/api/v1/search.json";
var json_hotelSpecial_params = "?adults=2&daysToCheckIn=14&numberOfNights=1&sortBy=price&sortDir=asc&location=";
var data_hotelSpecial_priceStr = "Per night from  <span class='price'></span>";
var data_hotelSpecial_data = [{
    "searchStr": "AKL",
    "displayName": "Auckland",
    "imageUrl": "/nz/en//~/_media/Global/Images/Mobile/300x180/AKL.jpg"
}, {
    "searchStr": "ZQN",
    "displayName": "Queenstown",
    "imageUrl": "/nz/en//~/_media/Global/Images/Mobile/300x180/ZQN.jpg"
}, {
    "searchStr": "MEL",
    "displayName": "Melbourne",
    "imageUrl": "/nz/en//~/_media/Global/Images/Mobile/300x180/MEL.jpg"
}, {
    "searchStr": "BNE",
    "displayName": "Brisbane",
    "imageUrl": ""
}, {
    "searchStr": "CNS",
    "displayName": "Cairns",
    "imageUrl": ""
}, {
    "searchStr": "PER",
    "displayName": "Perth",
    "imageUrl": ""
}, {
    "searchStr": "DPS",
    "displayName": "Bali",
    "imageUrl": ""
}];
var data_hotelSpecialAgoda = [{
    "searchStr": "Auckland"
}, {
    "searchStr": "Queenstown"
}, {
    "searchStr": "Melbourne"
}, {
    "searchStr": "Brisbane"
}, {
    "searchStr": "Cairns"
}, {
    "searchStr": "Perth"
}, {
    "searchStr": "Bali"
}];
var json_agoda_api = "http://deals.agoda.com/api/JSON/";
var agoda_param_apikey = "08ae5bd8-c895-4607-afd6-80b621630e0e";
var agoda_param_siteid = "1657629";
var agoda_param_LengthOfStay = "1";
var agoda_param_MinStarRating = "1";
var agoda_param_MaxStarRating = "5";
var agoda_param_Currency = "NZD";
var agoda_param_Language = "en-nz";
var agoda_param_MinDailyRate = "100";
var agoda_param_MaxDailyRate = "2000";
var agoda_param_MinDiscountPercentage = "15";
var agoda_param_MinReviewScore = "1";
var agoda_discount_txt = "{percentVal}% OFF";
var agoda_rating_txt = "";
var agoda_priceString = "Per night from <span class='price'>$<span class='value'></span></span>";
var pe_switchedOn = false;
var pe_book_UID = "39b5379c652b";
var pe_booknow_UID = "39b5379c652b";
var pe_book_QID = "b59e5954ba6c";
var pe_booknow_QID = "9df496572198";
var pe_waitingPage = "";
var pe_FilteredPages = ['.packages', '.destinations'];
var messageGV_firstName = "Enter a first name";
var messageGV_lastName = "Enter a last name";
var messageGV_email = "Enter a valid email";
var messageGV_RecipientMessage = "Enter a personal message with < 250 characters";
var messageGV_cardName = "Enter cardholder name";
var messageGV_MonthRequired = "Select a month";
var messageGV_expiryDate = "Select an expiry date in the future";
var messageGV_cvv = "Enter a valid security number";
var messageGV_cardUnaccepted = "Credit card type is not accepted";
var messageGV_cardRequired = "Enter credit card number";
var messageGV_cardValid = "Enter a valid credit card";
var json_valid_dates = "/nz/en/services/compactsearchservice?token=289&action=LoadValidDates";
var json_currencylist = "/nz/en/services/compactsearchservice?token=289&action=LoadCurrencyList";
var message_saleDirectionBoth = "Flight is available in both directions";
var message_saleDirectionOne = "Flight is only available in the direction shown";
var findFlightsHeading = "Find Flights";
var importantInfoHeading = "Important Information";
var closeText = "Close";
var flight_academy_videos = "/_global/FlightAcademy/xml/nz/videoinfo.xml?token=289";
var flight_academy_xmlfile = "/_global/FlightAcademy/xml/nz/videoinfo-modal.xml?token=289";
var booking_engine_currency = "";
var data_countryArray = ['New Zealand', 'Australia', 'Cambodia', 'China (including Hong Kong SAR, Macau SAR and Taiwan)', 'Cook Islands', 'Fiji', 'France', 'Hong Kong', 'Indonesia', 'Italy', 'Japan', 'Macau', 'Malaysia', 'Myanmar', 'Philippines', 'Singapore', 'South Korea', 'Sri Lanka', 'Taiwan', 'Thailand', 'United Arab Emirates', 'United Kingdom', 'USA', 'Vietnam'];
var data_locations = [
    [0, 'Auckland', 'AKL'],
    [0, 'Christchurch', 'CHC'],
    [0, 'Dunedin', 'DUD'],
    [0, 'Napier', 'NPE'],
    [0, 'Nelson', 'NSN'],
    [0, 'New Plymouth', 'NPL'],
    [0, 'Palmerston North', 'PMR'],
    [0, 'Queenstown', 'ZQN'],
    [0, 'Wellington', 'WLG'],
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
    [8, 'Bali (Denpasar)', 'DPS'],
    [8, 'Jakarta', 'CGK'],
    [8, 'Medan - Kualanamu ', 'KNO'],
    [8, 'Palembang', 'PLM'],
    [8, 'Pekanbaru', 'PKU'],
    [8, 'Surabaya', 'SUB'],
    [10, 'Fukuoka', 'FUK'],
    [10, 'Kagoshima', 'KOJ'],
    [10, 'Kochi', 'KCZ'],
    [10, 'Kumamoto', 'KMJ'],
    [10, 'Matsuyama', 'MYJ'],
    [10, 'Miyako (Shimojishima)', 'SHI'],
    [10, 'Miyazaki', 'KMI'],
    [10, 'Nagasaki', 'NGS'],
    [10, 'Nagoya (Chubu)', 'NGO'],
    [10, 'Oita', 'OIT'],
    [10, 'Okinawa (Naha)', 'OKA'],
    [10, 'Osaka', 'KIX|OSA'],
    [10, 'Sapporo (New Chitose)', 'CTS'],
    [10, 'Shonai', 'SYO'],
    [10, 'Takamatsu', 'TAK'],
    [10, 'Tokyo (Narita)', 'NRT|TYO'],
    [12, 'Kuala Lumpur', 'KUL'],
    [12, 'Penang', 'PEN'],
    [13, 'Yangon', 'RGN'],
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
var data_flightOrigins = [0, 1, 2, 6, 7, 8, 9, 12, 13, 16, 18, 19, 20, 23, 27, 28, 30, 31, 35, 38, 40, 41, 42, 44, 47, 51, 52, 54, 56, 59, 60, 63, 65, 66, 68, 69, 71, 75, 76, 77, 78, 79, 81, 82, 83, 84, 85, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 116, 117, 122, 126];
var data_flightDestinations = {
    'AKL': [{
        id: 9,
        code: 'ADL',
        curr: []
    }, {
        id: 41,
        code: 'AVV|GEX',
        curr: []
    }, {
        id: 12,
        code: 'AYQ|AYQ',
        curr: []
    }, {
        id: 113,
        code: 'BKK|XBK',
        curr: []
    }, {
        id: 16,
        code: 'BNE',
        curr: []
    }, {
        id: 13,
        code: 'BNK|BBY',
        curr: []
    }, {
        id: 84,
        code: 'CGK',
        curr: []
    }, {
        id: 1,
        code: 'CHC',
        curr: []
    }, {
        id: 19,
        code: 'CNS',
        curr: []
    }, {
        id: 101,
        code: 'CTS',
        curr: []
    }, {
        id: 83,
        code: 'DPS',
        curr: []
    }, {
        id: 23,
        code: 'DRW',
        curr: []
    }, {
        id: 2,
        code: 'DUD',
        curr: []
    }, {
        id: 89,
        code: 'FUK',
        curr: []
    }, {
        id: 66,
        code: 'HAK',
        curr: []
    }, {
        id: 31,
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
        id: 100,
        code: 'KIX|OSA',
        curr: []
    }, {
        id: 85,
        code: 'KNO',
        curr: []
    }, {
        id: 90,
        code: 'KOJ',
        curr: []
    }, {
        id: 105,
        code: 'KUL',
        curr: []
    }, {
        id: 35,
        code: 'LST',
        curr: []
    }, {
        id: 51,
        code: 'MCY',
        curr: []
    }, {
        id: 42,
        code: 'MEL',
        curr: []
    }, {
        id: 38,
        code: 'MKY',
        curr: []
    }, {
        id: 109,
        code: 'MNL',
        curr: []
    }, {
        id: 93,
        code: 'MYJ',
        curr: []
    }, {
        id: 104,
        code: 'NRT|TYO',
        curr: []
    }, {
        id: 44,
        code: 'NTL',
        curr: []
    }, {
        id: 98,
        code: 'OIT',
        curr: []
    }, {
        id: 99,
        code: 'OKA',
        curr: []
    }, {
        id: 27,
        code: 'OOL',
        curr: []
    }, {
        id: 47,
        code: 'PER',
        curr: []
    }, {
        id: 59,
        code: 'PNH',
        curr: []
    }, {
        id: 81,
        code: 'RAR',
        curr: []
    }, {
        id: 110,
        code: 'SIN',
        curr: []
    }, {
        id: 88,
        code: 'SUB',
        curr: []
    }, {
        id: 52,
        code: 'SYD',
        curr: []
    }, {
        id: 103,
        code: 'TAK',
        curr: []
    }, {
        id: 77,
        code: 'TPE',
        curr: []
    }, {
        id: 54,
        code: 'TSV',
        curr: []
    }, {
        id: 8,
        code: 'WLG',
        curr: []
    }, {
        id: 7,
        code: 'ZQN',
        curr: []
    }],
    'CHC': [{
        id: 9,
        code: 'ADL',
        curr: []
    }, {
        id: 0,
        code: 'AKL',
        curr: []
    }, {
        id: 41,
        code: 'AVV|GEX',
        curr: []
    }, {
        id: 12,
        code: 'AYQ|AYQ',
        curr: []
    }, {
        id: 113,
        code: 'BKK|XBK',
        curr: []
    }, {
        id: 16,
        code: 'BNE',
        curr: []
    }, {
        id: 13,
        code: 'BNK|BBY',
        curr: []
    }, {
        id: 19,
        code: 'CNS',
        curr: []
    }, {
        id: 83,
        code: 'DPS',
        curr: []
    }, {
        id: 23,
        code: 'DRW',
        curr: []
    }, {
        id: 2,
        code: 'DUD',
        curr: []
    }, {
        id: 31,
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
        id: 28,
        code: 'HTI|HTI',
        curr: []
    }, {
        id: 100,
        code: 'KIX|OSA',
        curr: []
    }, {
        id: 35,
        code: 'LST',
        curr: []
    }, {
        id: 51,
        code: 'MCY',
        curr: []
    }, {
        id: 42,
        code: 'MEL',
        curr: []
    }, {
        id: 38,
        code: 'MKY',
        curr: []
    }, {
        id: 82,
        code: 'NAN',
        curr: []
    }, {
        id: 3,
        code: 'NPE',
        curr: []
    }, {
        id: 104,
        code: 'NRT|TYO',
        curr: []
    }, {
        id: 44,
        code: 'NTL',
        curr: []
    }, {
        id: 27,
        code: 'OOL',
        curr: []
    }, {
        id: 47,
        code: 'PER',
        curr: []
    }, {
        id: 6,
        code: 'PMR',
        curr: []
    }, {
        id: 56,
        code: 'PPP',
        curr: []
    }, {
        id: 81,
        code: 'RAR',
        curr: []
    }, {
        id: 110,
        code: 'SIN',
        curr: []
    }, {
        id: 52,
        code: 'SYD',
        curr: []
    }, {
        id: 54,
        code: 'TSV',
        curr: []
    }, {
        id: 8,
        code: 'WLG',
        curr: []
    }, {
        id: 7,
        code: 'ZQN',
        curr: []
    }],
    'DUD': [{
        id: 9,
        code: 'ADL',
        curr: []
    }, {
        id: 0,
        code: 'AKL',
        curr: []
    }, {
        id: 1,
        code: 'CHC',
        curr: []
    }, {
        id: 42,
        code: 'MEL',
        curr: []
    }, {
        id: 4,
        code: 'NSN',
        curr: []
    }, {
        id: 8,
        code: 'WLG',
        curr: []
    }],
    'PMR': [{
        id: 52,
        code: 'SYD',
        curr: []
    }],
    'ZQN': [{
        id: 9,
        code: 'ADL',
        curr: []
    }, {
        id: 0,
        code: 'AKL',
        curr: []
    }, {
        id: 41,
        code: 'AVV|GEX',
        curr: []
    }, {
        id: 16,
        code: 'BNE',
        curr: []
    }, {
        id: 1,
        code: 'CHC',
        curr: []
    }, {
        id: 19,
        code: 'CNS',
        curr: []
    }, {
        id: 83,
        code: 'DPS',
        curr: []
    }, {
        id: 23,
        code: 'DRW',
        curr: []
    }, {
        id: 31,
        code: 'HBA',
        curr: []
    }, {
        id: 35,
        code: 'LST',
        curr: []
    }, {
        id: 42,
        code: 'MEL',
        curr: []
    }, {
        id: 3,
        code: 'NPE',
        curr: []
    }, {
        id: 5,
        code: 'NPL',
        curr: []
    }, {
        id: 104,
        code: 'NRT|TYO',
        curr: []
    }, {
        id: 44,
        code: 'NTL',
        curr: []
    }, {
        id: 27,
        code: 'OOL',
        curr: []
    }, {
        id: 47,
        code: 'PER',
        curr: []
    }, {
        id: 81,
        code: 'RAR',
        curr: []
    }, {
        id: 126,
        code: 'SGN',
        curr: []
    }, {
        id: 52,
        code: 'SYD',
        curr: []
    }, {
        id: 54,
        code: 'TSV',
        curr: []
    }, {
        id: 8,
        code: 'WLG',
        curr: []
    }],
    'WLG': [{
        id: 9,
        code: 'ADL',
        curr: []
    }, {
        id: 0,
        code: 'AKL',
        curr: []
    }, {
        id: 113,
        code: 'BKK|XBK',
        curr: []
    }, {
        id: 16,
        code: 'BNE',
        curr: []
    }, {
        id: 13,
        code: 'BNK|BBY',
        curr: []
    }, {
        id: 84,
        code: 'CGK',
        curr: []
    }, {
        id: 1,
        code: 'CHC',
        curr: []
    }, {
        id: 19,
        code: 'CNS',
        curr: []
    }, {
        id: 83,
        code: 'DPS',
        curr: []
    }, {
        id: 2,
        code: 'DUD',
        curr: []
    }, {
        id: 31,
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
        id: 35,
        code: 'LST',
        curr: []
    }, {
        id: 51,
        code: 'MCY',
        curr: []
    }, {
        id: 42,
        code: 'MEL',
        curr: []
    }, {
        id: 104,
        code: 'NRT|TYO',
        curr: []
    }, {
        id: 44,
        code: 'NTL',
        curr: []
    }, {
        id: 27,
        code: 'OOL',
        curr: []
    }, {
        id: 47,
        code: 'PER',
        curr: []
    }, {
        id: 81,
        code: 'RAR',
        curr: []
    }, {
        id: 110,
        code: 'SIN',
        curr: []
    }, {
        id: 52,
        code: 'SYD',
        curr: []
    }, {
        id: 7,
        code: 'ZQN',
        curr: []
    }],
    'ADL': [{
        id: 0,
        code: 'AKL',
        curr: []
    }, {
        id: 41,
        code: 'AVV|GEX',
        curr: []
    }, {
        id: 12,
        code: 'AYQ|AYQ',
        curr: []
    }, {
        id: 113,
        code: 'BKK|XBK',
        curr: []
    }, {
        id: 16,
        code: 'BNE',
        curr: []
    }, {
        id: 13,
        code: 'BNK|BBY',
        curr: []
    }, {
        id: 84,
        code: 'CGK',
        curr: []
    }, {
        id: 1,
        code: 'CHC',
        curr: []
    }, {
        id: 19,
        code: 'CNS',
        curr: []
    }, {
        id: 101,
        code: 'CTS',
        curr: []
    }, {
        id: 83,
        code: 'DPS',
        curr: []
    }, {
        id: 23,
        code: 'DRW',
        curr: []
    }, {
        id: 2,
        code: 'DUD',
        curr: []
    }, {
        id: 89,
        code: 'FUK',
        curr: []
    }, {
        id: 31,
        code: 'HBA',
        curr: []
    }, {
        id: 69,
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
        id: 28,
        code: 'HTI|HTI',
        curr: []
    }, {
        id: 100,
        code: 'KIX|OSA',
        curr: []
    }, {
        id: 90,
        code: 'KOJ',
        curr: []
    }, {
        id: 105,
        code: 'KUL',
        curr: []
    }, {
        id: 51,
        code: 'MCY',
        curr: []
    }, {
        id: 42,
        code: 'MEL',
        curr: []
    }, {
        id: 109,
        code: 'MNL',
        curr: []
    }, {
        id: 93,
        code: 'MYJ',
        curr: []
    }, {
        id: 104,
        code: 'NRT|TYO',
        curr: []
    }, {
        id: 44,
        code: 'NTL',
        curr: []
    }, {
        id: 98,
        code: 'OIT',
        curr: []
    }, {
        id: 99,
        code: 'OKA',
        curr: []
    }, {
        id: 27,
        code: 'OOL',
        curr: []
    }, {
        id: 106,
        code: 'PEN',
        curr: []
    }, {
        id: 47,
        code: 'PER',
        curr: []
    }, {
        id: 59,
        code: 'PNH',
        curr: []
    }, {
        id: 110,
        code: 'SIN',
        curr: []
    }, {
        id: 88,
        code: 'SUB',
        curr: []
    }, {
        id: 52,
        code: 'SYD',
        curr: []
    }, {
        id: 103,
        code: 'TAK',
        curr: []
    }, {
        id: 54,
        code: 'TSV',
        curr: []
    }, {
        id: 40,
        code: 'VIZ|MEL',
        curr: []
    }, {
        id: 8,
        code: 'WLG',
        curr: []
    }, {
        id: 7,
        code: 'ZQN',
        curr: []
    }],
    'AYQ|AYQ': [{
        id: 9,
        code: 'ADL',
        curr: []
    }, {
        id: 0,
        code: 'AKL',
        curr: []
    }, {
        id: 41,
        code: 'AVV|GEX',
        curr: []
    }, {
        id: 16,
        code: 'BNE',
        curr: []
    }, {
        id: 1,
        code: 'CHC',
        curr: []
    }, {
        id: 19,
        code: 'CNS',
        curr: []
    }, {
        id: 101,
        code: 'CTS',
        curr: []
    }, {
        id: 23,
        code: 'DRW',
        curr: []
    }, {
        id: 100,
        code: 'KIX|OSA',
        curr: []
    }, {
        id: 42,
        code: 'MEL',
        curr: []
    }, {
        id: 104,
        code: 'NRT|TYO',
        curr: []
    }, {
        id: 44,
        code: 'NTL',
        curr: []
    }, {
        id: 27,
        code: 'OOL',
        curr: []
    }, {
        id: 47,
        code: 'PER',
        curr: []
    }, {
        id: 52,
        code: 'SYD',
        curr: []
    }, {
        id: 40,
        code: 'VIZ|MEL',
        curr: []
    }],
    'BNK|BBY': [{
        id: 9,
        code: 'ADL',
        curr: []
    }, {
        id: 0,
        code: 'AKL',
        curr: []
    }, {
        id: 41,
        code: 'AVV|GEX',
        curr: []
    }, {
        id: 1,
        code: 'CHC',
        curr: []
    }, {
        id: 19,
        code: 'CNS',
        curr: []
    }, {
        id: 83,
        code: 'DPS',
        curr: []
    }, {
        id: 31,
        code: 'HBA',
        curr: []
    }, {
        id: 116,
        code: 'HKT',
        curr: []
    }, {
        id: 100,
        code: 'KIX|OSA',
        curr: []
    }, {
        id: 35,
        code: 'LST',
        curr: []
    }, {
        id: 42,
        code: 'MEL',
        curr: []
    }, {
        id: 104,
        code: 'NRT|TYO',
        curr: []
    }, {
        id: 52,
        code: 'SYD',
        curr: []
    }, {
        id: 8,
        code: 'WLG',
        curr: []
    }],
    'BNE': [{
        id: 9,
        code: 'ADL',
        curr: []
    }, {
        id: 0,
        code: 'AKL',
        curr: []
    }, {
        id: 41,
        code: 'AVV|GEX',
        curr: []
    }, {
        id: 12,
        code: 'AYQ|AYQ',
        curr: []
    }, {
        id: 113,
        code: 'BKK|XBK',
        curr: []
    }, {
        id: 1,
        code: 'CHC',
        curr: []
    }, {
        id: 19,
        code: 'CNS',
        curr: []
    }, {
        id: 101,
        code: 'CTS',
        curr: []
    }, {
        id: 83,
        code: 'DPS',
        curr: []
    }, {
        id: 23,
        code: 'DRW',
        curr: []
    }, {
        id: 89,
        code: 'FUK',
        curr: []
    }, {
        id: 31,
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
        id: 28,
        code: 'HTI|HTI',
        curr: []
    }, {
        id: 100,
        code: 'KIX|OSA',
        curr: []
    }, {
        id: 90,
        code: 'KOJ',
        curr: []
    }, {
        id: 35,
        code: 'LST',
        curr: []
    }, {
        id: 42,
        code: 'MEL',
        curr: []
    }, {
        id: 38,
        code: 'MKY',
        curr: []
    }, {
        id: 109,
        code: 'MNL',
        curr: []
    }, {
        id: 93,
        code: 'MYJ',
        curr: []
    }, {
        id: 104,
        code: 'NRT|TYO',
        curr: []
    }, {
        id: 44,
        code: 'NTL',
        curr: []
    }, {
        id: 98,
        code: 'OIT',
        curr: []
    }, {
        id: 47,
        code: 'PER',
        curr: []
    }, {
        id: 56,
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
        id: 52,
        code: 'SYD',
        curr: []
    }, {
        id: 103,
        code: 'TAK',
        curr: []
    }, {
        id: 54,
        code: 'TSV',
        curr: []
    }, {
        id: 40,
        code: 'VIZ|MEL',
        curr: []
    }, {
        id: 8,
        code: 'WLG',
        curr: []
    }, {
        id: 10,
        code: 'WSY',
        curr: []
    }, {
        id: 7,
        code: 'ZQN',
        curr: []
    }],
    'BQB': [{
        id: 42,
        code: 'MEL',
        curr: []
    }, {
        id: 40,
        code: 'VIZ|MEL',
        curr: []
    }],
    'CNS': [{
        id: 9,
        code: 'ADL',
        curr: []
    }, {
        id: 0,
        code: 'AKL',
        curr: []
    }, {
        id: 41,
        code: 'AVV|GEX',
        curr: []
    }, {
        id: 12,
        code: 'AYQ|AYQ',
        curr: []
    }, {
        id: 16,
        code: 'BNE',
        curr: []
    }, {
        id: 13,
        code: 'BNK|BBY',
        curr: []
    }, {
        id: 1,
        code: 'CHC',
        curr: []
    }, {
        id: 101,
        code: 'CTS',
        curr: []
    }, {
        id: 83,
        code: 'DPS',
        curr: []
    }, {
        id: 23,
        code: 'DRW',
        curr: []
    }, {
        id: 89,
        code: 'FUK',
        curr: []
    }, {
        id: 31,
        code: 'HBA',
        curr: []
    }, {
        id: 69,
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
        code: 'KCZ',
        curr: []
    }, {
        id: 100,
        code: 'KIX|OSA',
        curr: []
    }, {
        id: 95,
        code: 'KMI',
        curr: []
    }, {
        id: 92,
        code: 'KMJ',
        curr: []
    }, {
        id: 90,
        code: 'KOJ',
        curr: []
    }, {
        id: 105,
        code: 'KUL',
        curr: []
    }, {
        id: 42,
        code: 'MEL',
        curr: []
    }, {
        id: 38,
        code: 'MKY',
        curr: []
    }, {
        id: 93,
        code: 'MYJ',
        curr: []
    }, {
        id: 96,
        code: 'NGS',
        curr: []
    }, {
        id: 104,
        code: 'NRT|TYO',
        curr: []
    }, {
        id: 44,
        code: 'NTL',
        curr: []
    }, {
        id: 98,
        code: 'OIT',
        curr: []
    }, {
        id: 99,
        code: 'OKA',
        curr: []
    }, {
        id: 27,
        code: 'OOL',
        curr: []
    }, {
        id: 106,
        code: 'PEN',
        curr: []
    }, {
        id: 47,
        code: 'PER',
        curr: []
    }, {
        id: 75,
        code: 'PVG',
        curr: []
    }, {
        id: 94,
        code: 'SHI',
        curr: []
    }, {
        id: 110,
        code: 'SIN',
        curr: []
    }, {
        id: 52,
        code: 'SYD',
        curr: []
    }, {
        id: 102,
        code: 'SYO',
        curr: []
    }, {
        id: 103,
        code: 'TAK',
        curr: []
    }, {
        id: 77,
        code: 'TPE',
        curr: []
    }, {
        id: 40,
        code: 'VIZ|MEL',
        curr: []
    }, {
        id: 8,
        code: 'WLG',
        curr: []
    }, {
        id: 78,
        code: 'WUH',
        curr: []
    }, {
        id: 7,
        code: 'ZQN',
        curr: []
    }],
    'CBR': [{
        id: 83,
        code: 'DPS',
        curr: []
    }, {
        id: 116,
        code: 'HKT',
        curr: []
    }],
    'DRW': [{
        id: 9,
        code: 'ADL',
        curr: []
    }, {
        id: 0,
        code: 'AKL',
        curr: []
    }, {
        id: 41,
        code: 'AVV|GEX',
        curr: []
    }, {
        id: 12,
        code: 'AYQ|AYQ',
        curr: []
    }, {
        id: 113,
        code: 'BKK|XBK',
        curr: []
    }, {
        id: 16,
        code: 'BNE',
        curr: []
    }, {
        id: 84,
        code: 'CGK',
        curr: []
    }, {
        id: 1,
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
        id: 19,
        code: 'CNS',
        curr: []
    }, {
        id: 108,
        code: 'CRK',
        curr: []
    }, {
        id: 101,
        code: 'CTS',
        curr: []
    }, {
        id: 83,
        code: 'DPS',
        curr: []
    }, {
        id: 89,
        code: 'FUK',
        curr: []
    }, {
        id: 66,
        code: 'HAK',
        curr: []
    }, {
        id: 31,
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
        id: 100,
        code: 'KIX|OSA',
        curr: []
    }, {
        id: 85,
        code: 'KNO',
        curr: []
    }, {
        id: 90,
        code: 'KOJ',
        curr: []
    }, {
        id: 105,
        code: 'KUL',
        curr: []
    }, {
        id: 35,
        code: 'LST',
        curr: []
    }, {
        id: 42,
        code: 'MEL',
        curr: []
    }, {
        id: 38,
        code: 'MKY',
        curr: []
    }, {
        id: 109,
        code: 'MNL',
        curr: []
    }, {
        id: 93,
        code: 'MYJ',
        curr: []
    }, {
        id: 82,
        code: 'NAN',
        curr: []
    }, {
        id: 104,
        code: 'NRT|TYO',
        curr: []
    }, {
        id: 44,
        code: 'NTL',
        curr: []
    }, {
        id: 98,
        code: 'OIT',
        curr: []
    }, {
        id: 99,
        code: 'OKA',
        curr: []
    }, {
        id: 27,
        code: 'OOL',
        curr: []
    }, {
        id: 106,
        code: 'PEN',
        curr: []
    }, {
        id: 47,
        code: 'PER',
        curr: []
    }, {
        id: 59,
        code: 'PNH',
        curr: []
    }, {
        id: 56,
        code: 'PPP',
        curr: []
    }, {
        id: 60,
        code: 'REP',
        curr: []
    }, {
        id: 107,
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
        id: 88,
        code: 'SUB',
        curr: []
    }, {
        id: 76,
        code: 'SWA',
        curr: []
    }, {
        id: 52,
        code: 'SYD',
        curr: []
    }, {
        id: 77,
        code: 'TPE',
        curr: []
    }, {
        id: 7,
        code: 'ZQN',
        curr: []
    }],
    'OOL': [{
        id: 9,
        code: 'ADL',
        curr: []
    }, {
        id: 0,
        code: 'AKL',
        curr: []
    }, {
        id: 41,
        code: 'AVV|GEX',
        curr: []
    }, {
        id: 12,
        code: 'AYQ|AYQ',
        curr: []
    }, {
        id: 113,
        code: 'BKK|XBK',
        curr: []
    }, {
        id: 84,
        code: 'CGK',
        curr: []
    }, {
        id: 1,
        code: 'CHC',
        curr: []
    }, {
        id: 19,
        code: 'CNS',
        curr: []
    }, {
        id: 101,
        code: 'CTS',
        curr: []
    }, {
        id: 83,
        code: 'DPS',
        curr: []
    }, {
        id: 23,
        code: 'DRW',
        curr: []
    }, {
        id: 89,
        code: 'FUK',
        curr: []
    }, {
        id: 31,
        code: 'HBA',
        curr: []
    }, {
        id: 69,
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
        code: 'KCZ',
        curr: []
    }, {
        id: 100,
        code: 'KIX|OSA',
        curr: []
    }, {
        id: 92,
        code: 'KMJ',
        curr: []
    }, {
        id: 90,
        code: 'KOJ',
        curr: []
    }, {
        id: 105,
        code: 'KUL',
        curr: []
    }, {
        id: 35,
        code: 'LST',
        curr: []
    }, {
        id: 42,
        code: 'MEL',
        curr: []
    }, {
        id: 109,
        code: 'MNL',
        curr: []
    }, {
        id: 93,
        code: 'MYJ',
        curr: []
    }, {
        id: 82,
        code: 'NAN',
        curr: []
    }, {
        id: 96,
        code: 'NGS',
        curr: []
    }, {
        id: 3,
        code: 'NPE',
        curr: []
    }, {
        id: 5,
        code: 'NPL',
        curr: []
    }, {
        id: 104,
        code: 'NRT|TYO',
        curr: []
    }, {
        id: 4,
        code: 'NSN',
        curr: []
    }, {
        id: 44,
        code: 'NTL',
        curr: []
    }, {
        id: 98,
        code: 'OIT',
        curr: []
    }, {
        id: 99,
        code: 'OKA',
        curr: []
    }, {
        id: 106,
        code: 'PEN',
        curr: []
    }, {
        id: 47,
        code: 'PER',
        curr: []
    }, {
        id: 6,
        code: 'PMR',
        curr: []
    }, {
        id: 59,
        code: 'PNH',
        curr: []
    }, {
        id: 75,
        code: 'PVG',
        curr: []
    }, {
        id: 94,
        code: 'SHI',
        curr: []
    }, {
        id: 110,
        code: 'SIN',
        curr: []
    }, {
        id: 52,
        code: 'SYD',
        curr: []
    }, {
        id: 102,
        code: 'SYO',
        curr: []
    }, {
        id: 103,
        code: 'TAK',
        curr: []
    }, {
        id: 77,
        code: 'TPE',
        curr: []
    }, {
        id: 8,
        code: 'WLG',
        curr: []
    }, {
        id: 7,
        code: 'ZQN',
        curr: []
    }],
    'HTI|HTI': [{
        id: 9,
        code: 'ADL',
        curr: []
    }, {
        id: 41,
        code: 'AVV|GEX',
        curr: []
    }, {
        id: 16,
        code: 'BNE',
        curr: []
    }, {
        id: 1,
        code: 'CHC',
        curr: []
    }, {
        id: 101,
        code: 'CTS',
        curr: []
    }, {
        id: 89,
        code: 'FUK',
        curr: []
    }, {
        id: 100,
        code: 'KIX|OSA',
        curr: []
    }, {
        id: 90,
        code: 'KOJ',
        curr: []
    }, {
        id: 42,
        code: 'MEL',
        curr: []
    }, {
        id: 93,
        code: 'MYJ',
        curr: []
    }, {
        id: 104,
        code: 'NRT|TYO',
        curr: []
    }, {
        id: 98,
        code: 'OIT',
        curr: []
    }, {
        id: 99,
        code: 'OKA',
        curr: []
    }, {
        id: 47,
        code: 'PER',
        curr: []
    }, {
        id: 52,
        code: 'SYD',
        curr: []
    }, {
        id: 103,
        code: 'TAK',
        curr: []
    }],
    'HBA': [{
        id: 9,
        code: 'ADL',
        curr: []
    }, {
        id: 0,
        code: 'AKL',
        curr: []
    }, {
        id: 41,
        code: 'AVV|GEX',
        curr: []
    }, {
        id: 113,
        code: 'BKK|XBK',
        curr: []
    }, {
        id: 16,
        code: 'BNE',
        curr: []
    }, {
        id: 13,
        code: 'BNK|BBY',
        curr: []
    }, {
        id: 84,
        code: 'CGK',
        curr: []
    }, {
        id: 1,
        code: 'CHC',
        curr: []
    }, {
        id: 19,
        code: 'CNS',
        curr: []
    }, {
        id: 101,
        code: 'CTS',
        curr: []
    }, {
        id: 83,
        code: 'DPS',
        curr: []
    }, {
        id: 23,
        code: 'DRW',
        curr: []
    }, {
        id: 89,
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
        id: 100,
        code: 'KIX|OSA',
        curr: []
    }, {
        id: 90,
        code: 'KOJ',
        curr: []
    }, {
        id: 105,
        code: 'KUL',
        curr: []
    }, {
        id: 51,
        code: 'MCY',
        curr: []
    }, {
        id: 42,
        code: 'MEL',
        curr: []
    }, {
        id: 38,
        code: 'MKY',
        curr: []
    }, {
        id: 109,
        code: 'MNL',
        curr: []
    }, {
        id: 93,
        code: 'MYJ',
        curr: []
    }, {
        id: 104,
        code: 'NRT|TYO',
        curr: []
    }, {
        id: 44,
        code: 'NTL',
        curr: []
    }, {
        id: 98,
        code: 'OIT',
        curr: []
    }, {
        id: 99,
        code: 'OKA',
        curr: []
    }, {
        id: 27,
        code: 'OOL',
        curr: []
    }, {
        id: 47,
        code: 'PER',
        curr: []
    }, {
        id: 59,
        code: 'PNH',
        curr: []
    }, {
        id: 110,
        code: 'SIN',
        curr: []
    }, {
        id: 52,
        code: 'SYD',
        curr: []
    }, {
        id: 103,
        code: 'TAK',
        curr: []
    }, {
        id: 54,
        code: 'TSV',
        curr: []
    }, {
        id: 8,
        code: 'WLG',
        curr: []
    }, {
        id: 7,
        code: 'ZQN',
        curr: []
    }],
    'LST': [{
        id: 0,
        code: 'AKL',
        curr: []
    }, {
        id: 113,
        code: 'BKK|XBK',
        curr: []
    }, {
        id: 16,
        code: 'BNE',
        curr: []
    }, {
        id: 13,
        code: 'BNK|BBY',
        curr: []
    }, {
        id: 84,
        code: 'CGK',
        curr: []
    }, {
        id: 1,
        code: 'CHC',
        curr: []
    }, {
        id: 19,
        code: 'CNS',
        curr: []
    }, {
        id: 101,
        code: 'CTS',
        curr: []
    }, {
        id: 83,
        code: 'DPS',
        curr: []
    }, {
        id: 23,
        code: 'DRW',
        curr: []
    }, {
        id: 89,
        code: 'FUK',
        curr: []
    }, {
        id: 69,
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
        id: 100,
        code: 'KIX|OSA',
        curr: []
    }, {
        id: 90,
        code: 'KOJ',
        curr: []
    }, {
        id: 105,
        code: 'KUL',
        curr: []
    }, {
        id: 51,
        code: 'MCY',
        curr: []
    }, {
        id: 42,
        code: 'MEL',
        curr: []
    }, {
        id: 93,
        code: 'MYJ',
        curr: []
    }, {
        id: 104,
        code: 'NRT|TYO',
        curr: []
    }, {
        id: 44,
        code: 'NTL',
        curr: []
    }, {
        id: 98,
        code: 'OIT',
        curr: []
    }, {
        id: 99,
        code: 'OKA',
        curr: []
    }, {
        id: 27,
        code: 'OOL',
        curr: []
    }, {
        id: 106,
        code: 'PEN',
        curr: []
    }, {
        id: 47,
        code: 'PER',
        curr: []
    }, {
        id: 52,
        code: 'SYD',
        curr: []
    }, {
        id: 103,
        code: 'TAK',
        curr: []
    }, {
        id: 8,
        code: 'WLG',
        curr: []
    }, {
        id: 7,
        code: 'ZQN',
        curr: []
    }],
    'MKY': [{
        id: 0,
        code: 'AKL',
        curr: []
    }, {
        id: 41,
        code: 'AVV|GEX',
        curr: []
    }, {
        id: 16,
        code: 'BNE',
        curr: []
    }, {
        id: 1,
        code: 'CHC',
        curr: []
    }, {
        id: 19,
        code: 'CNS',
        curr: []
    }, {
        id: 23,
        code: 'DRW',
        curr: []
    }, {
        id: 31,
        code: 'HBA',
        curr: []
    }, {
        id: 42,
        code: 'MEL',
        curr: []
    }, {
        id: 44,
        code: 'NTL',
        curr: []
    }, {
        id: 47,
        code: 'PER',
        curr: []
    }, {
        id: 52,
        code: 'SYD',
        curr: []
    }],
    'VIZ|MEL': [{
        id: 9,
        code: 'ADL',
        curr: []
    }, {
        id: 0,
        code: 'AKL',
        curr: []
    }, {
        id: 12,
        code: 'AYQ|AYQ',
        curr: []
    }, {
        id: 113,
        code: 'BKK|XBK',
        curr: []
    }, {
        id: 16,
        code: 'BNE',
        curr: []
    }, {
        id: 13,
        code: 'BNK|BBY',
        curr: []
    }, {
        id: 18,
        code: 'BQB',
        curr: []
    }, {
        id: 84,
        code: 'CGK',
        curr: []
    }, {
        id: 1,
        code: 'CHC',
        curr: []
    }, {
        id: 19,
        code: 'CNS',
        curr: []
    }, {
        id: 101,
        code: 'CTS',
        curr: []
    }, {
        id: 122,
        code: 'DAD',
        curr: []
    }, {
        id: 83,
        code: 'DPS',
        curr: []
    }, {
        id: 23,
        code: 'DRW',
        curr: []
    }, {
        id: 2,
        code: 'DUD',
        curr: []
    }, {
        id: 89,
        code: 'FUK',
        curr: []
    }, {
        id: 66,
        code: 'HAK',
        curr: []
    }, {
        id: 31,
        code: 'HBA',
        curr: []
    }, {
        id: 29,
        code: 'HIS',
        curr: []
    }, {
        id: 69,
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
        id: 28,
        code: 'HTI|HTI',
        curr: []
    }, {
        id: 9,
        code: 'ADL',
        curr: []
    }, {
        id: 100,
        code: 'KIX|OSA',
        curr: []
    }, {
        id: 85,
        code: 'KNO',
        curr: []
    }, {
        id: 90,
        code: 'KOJ',
        curr: []
    }, {
        id: 105,
        code: 'KUL',
        curr: []
    }, {
        id: 35,
        code: 'LST',
        curr: []
    }, {
        id: 51,
        code: 'MCY',
        curr: []
    }, {
        id: 38,
        code: 'MKY',
        curr: []
    }, {
        id: 109,
        code: 'MNL',
        curr: []
    }, {
        id: 93,
        code: 'MYJ',
        curr: []
    }, {
        id: 82,
        code: 'NAN',
        curr: []
    }, {
        id: 104,
        code: 'NRT|TYO',
        curr: []
    }, {
        id: 44,
        code: 'NTL',
        curr: []
    }, {
        id: 98,
        code: 'OIT',
        curr: []
    }, {
        id: 99,
        code: 'OKA',
        curr: []
    }, {
        id: 27,
        code: 'OOL',
        curr: []
    }, {
        id: 47,
        code: 'PER',
        curr: []
    }, {
        id: 6,
        code: 'PMR',
        curr: []
    }, {
        id: 59,
        code: 'PNH',
        curr: []
    }, {
        id: 56,
        code: 'PPP',
        curr: []
    }, {
        id: 81,
        code: 'RAR',
        curr: []
    }, {
        id: 107,
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
        id: 88,
        code: 'SUB',
        curr: []
    }, {
        id: 52,
        code: 'SYD',
        curr: []
    }, {
        id: 74,
        code: 'SYX',
        curr: []
    }, {
        id: 103,
        code: 'TAK',
        curr: []
    }, {
        id: 77,
        code: 'TPE',
        curr: []
    }, {
        id: 54,
        code: 'TSV',
        curr: []
    }, {
        id: 8,
        code: 'WLG',
        curr: []
    }, {
        id: 7,
        code: 'ZQN',
        curr: []
    }],
    'AVV|GEX': [{
        id: 9,
        code: 'ADL',
        curr: []
    }, {
        id: 0,
        code: 'AKL',
        curr: []
    }, {
        id: 12,
        code: 'AYQ|AYQ',
        curr: []
    }, {
        id: 16,
        code: 'BNE',
        curr: []
    }, {
        id: 13,
        code: 'BNK|BBY',
        curr: []
    }, {
        id: 1,
        code: 'CHC',
        curr: []
    }, {
        id: 19,
        code: 'CNS',
        curr: []
    }, {
        id: 83,
        code: 'DPS',
        curr: []
    }, {
        id: 23,
        code: 'DRW',
        curr: []
    }, {
        id: 31,
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
        id: 28,
        code: 'HTI|HTI',
        curr: []
    }, {
        id: 51,
        code: 'MCY',
        curr: []
    }, {
        id: 38,
        code: 'MKY',
        curr: []
    }, {
        id: 44,
        code: 'NTL',
        curr: []
    }, {
        id: 27,
        code: 'OOL',
        curr: []
    }, {
        id: 47,
        code: 'PER',
        curr: []
    }, {
        id: 52,
        code: 'SYD',
        curr: []
    }, {
        id: 54,
        code: 'TSV',
        curr: []
    }, {
        id: 7,
        code: 'ZQN',
        curr: []
    }],
    'MEL': [{
        id: 9,
        code: 'ADL',
        curr: []
    }, {
        id: 0,
        code: 'AKL',
        curr: []
    }, {
        id: 12,
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
        id: 16,
        code: 'BNE',
        curr: []
    }, {
        id: 13,
        code: 'BNK|BBY',
        curr: []
    }, {
        id: 18,
        code: 'BQB',
        curr: []
    }, {
        id: 84,
        code: 'CGK',
        curr: []
    }, {
        id: 1,
        code: 'CHC',
        curr: []
    }, {
        id: 19,
        code: 'CNS',
        curr: []
    }, {
        id: 108,
        code: 'CRK',
        curr: []
    }, {
        id: 101,
        code: 'CTS',
        curr: []
    }, {
        id: 128,
        code: 'CXR',
        curr: []
    }, {
        id: 83,
        code: 'DPS',
        curr: []
    }, {
        id: 23,
        code: 'DRW',
        curr: []
    }, {
        id: 2,
        code: 'DUD',
        curr: []
    }, {
        id: 89,
        code: 'FUK',
        curr: []
    }, {
        id: 66,
        code: 'HAK',
        curr: []
    }, {
        id: 31,
        code: 'HBA',
        curr: []
    }, {
        id: 69,
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
        id: 28,
        code: 'HTI|HTI',
        curr: []
    }, {
        id: 127,
        code: 'HUI',
        curr: []
    }, {
        id: 100,
        code: 'KIX|OSA',
        curr: []
    }, {
        id: 85,
        code: 'KNO',
        curr: []
    }, {
        id: 90,
        code: 'KOJ',
        curr: []
    }, {
        id: 105,
        code: 'KUL',
        curr: []
    }, {
        id: 35,
        code: 'LST',
        curr: []
    }, {
        id: 51,
        code: 'MCY',
        curr: []
    }, {
        id: 38,
        code: 'MKY',
        curr: []
    }, {
        id: 109,
        code: 'MNL',
        curr: []
    }, {
        id: 93,
        code: 'MYJ',
        curr: []
    }, {
        id: 82,
        code: 'NAN',
        curr: []
    }, {
        id: 3,
        code: 'NPE',
        curr: []
    }, {
        id: 5,
        code: 'NPL',
        curr: []
    }, {
        id: 104,
        code: 'NRT|TYO',
        curr: []
    }, {
        id: 4,
        code: 'NSN',
        curr: []
    }, {
        id: 44,
        code: 'NTL',
        curr: []
    }, {
        id: 98,
        code: 'OIT',
        curr: []
    }, {
        id: 99,
        code: 'OKA',
        curr: []
    }, {
        id: 27,
        code: 'OOL',
        curr: []
    }, {
        id: 106,
        code: 'PEN',
        curr: []
    }, {
        id: 47,
        code: 'PER',
        curr: []
    }, {
        id: 6,
        code: 'PMR',
        curr: []
    }, {
        id: 59,
        code: 'PNH',
        curr: []
    }, {
        id: 56,
        code: 'PPP',
        curr: []
    }, {
        id: 81,
        code: 'RAR',
        curr: []
    }, {
        id: 107,
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
        id: 88,
        code: 'SUB',
        curr: []
    }, {
        id: 52,
        code: 'SYD',
        curr: []
    }, {
        id: 103,
        code: 'TAK',
        curr: []
    }, {
        id: 54,
        code: 'TSV',
        curr: []
    }, {
        id: 8,
        code: 'WLG',
        curr: []
    }, {
        id: 78,
        code: 'WUH',
        curr: []
    }, {
        id: 7,
        code: 'ZQN',
        curr: []
    }],
    'NTL': [{
        id: 9,
        code: 'ADL',
        curr: []
    }, {
        id: 0,
        code: 'AKL',
        curr: []
    }, {
        id: 41,
        code: 'AVV|GEX',
        curr: []
    }, {
        id: 12,
        code: 'AYQ|AYQ',
        curr: []
    }, {
        id: 16,
        code: 'BNE',
        curr: []
    }, {
        id: 1,
        code: 'CHC',
        curr: []
    }, {
        id: 19,
        code: 'CNS',
        curr: []
    }, {
        id: 101,
        code: 'CTS',
        curr: []
    }, {
        id: 83,
        code: 'DPS',
        curr: []
    }, {
        id: 23,
        code: 'DRW',
        curr: []
    }, {
        id: 89,
        code: 'FUK',
        curr: []
    }, {
        id: 31,
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
        id: 100,
        code: 'KIX|OSA',
        curr: []
    }, {
        id: 90,
        code: 'KOJ',
        curr: []
    }, {
        id: 35,
        code: 'LST',
        curr: []
    }, {
        id: 42,
        code: 'MEL',
        curr: []
    }, {
        id: 38,
        code: 'MKY',
        curr: []
    }, {
        id: 93,
        code: 'MYJ',
        curr: []
    }, {
        id: 104,
        code: 'NRT|TYO',
        curr: []
    }, {
        id: 98,
        code: 'OIT',
        curr: []
    }, {
        id: 99,
        code: 'OKA',
        curr: []
    }, {
        id: 27,
        code: 'OOL',
        curr: []
    }, {
        id: 47,
        code: 'PER',
        curr: []
    }, {
        id: 56,
        code: 'PPP',
        curr: []
    }, {
        id: 110,
        code: 'SIN',
        curr: []
    }, {
        id: 103,
        code: 'TAK',
        curr: []
    }, {
        id: 8,
        code: 'WLG',
        curr: []
    }, {
        id: 7,
        code: 'ZQN',
        curr: []
    }],
    'PER': [{
        id: 9,
        code: 'ADL',
        curr: []
    }, {
        id: 0,
        code: 'AKL',
        curr: []
    }, {
        id: 41,
        code: 'AVV|GEX',
        curr: []
    }, {
        id: 12,
        code: 'AYQ|AYQ',
        curr: []
    }, {
        id: 113,
        code: 'BKK|XBK',
        curr: []
    }, {
        id: 16,
        code: 'BNE',
        curr: []
    }, {
        id: 84,
        code: 'CGK',
        curr: []
    }, {
        id: 1,
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
        id: 19,
        code: 'CNS',
        curr: []
    }, {
        id: 101,
        code: 'CTS',
        curr: []
    }, {
        id: 83,
        code: 'DPS',
        curr: []
    }, {
        id: 23,
        code: 'DRW',
        curr: []
    }, {
        id: 89,
        code: 'FUK',
        curr: []
    }, {
        id: 66,
        code: 'HAK',
        curr: []
    }, {
        id: 31,
        code: 'HBA',
        curr: []
    }, {
        id: 69,
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
        id: 28,
        code: 'HTI|HTI',
        curr: []
    }, {
        id: 100,
        code: 'KIX|OSA',
        curr: []
    }, {
        id: 85,
        code: 'KNO',
        curr: []
    }, {
        id: 90,
        code: 'KOJ',
        curr: []
    }, {
        id: 105,
        code: 'KUL',
        curr: []
    }, {
        id: 35,
        code: 'LST',
        curr: []
    }, {
        id: 51,
        code: 'MCY',
        curr: []
    }, {
        id: 42,
        code: 'MEL',
        curr: []
    }, {
        id: 38,
        code: 'MKY',
        curr: []
    }, {
        id: 109,
        code: 'MNL',
        curr: []
    }, {
        id: 93,
        code: 'MYJ',
        curr: []
    }, {
        id: 104,
        code: 'NRT|TYO',
        curr: []
    }, {
        id: 44,
        code: 'NTL',
        curr: []
    }, {
        id: 98,
        code: 'OIT',
        curr: []
    }, {
        id: 99,
        code: 'OKA',
        curr: []
    }, {
        id: 27,
        code: 'OOL',
        curr: []
    }, {
        id: 106,
        code: 'PEN',
        curr: []
    }, {
        id: 59,
        code: 'PNH',
        curr: []
    }, {
        id: 56,
        code: 'PPP',
        curr: []
    }, {
        id: 60,
        code: 'REP',
        curr: []
    }, {
        id: 107,
        code: 'RGN',
        curr: []
    }, {
        id: 110,
        code: 'SIN',
        curr: []
    }, {
        id: 88,
        code: 'SUB',
        curr: []
    }, {
        id: 76,
        code: 'SWA',
        curr: []
    }, {
        id: 52,
        code: 'SYD',
        curr: []
    }, {
        id: 103,
        code: 'TAK',
        curr: []
    }, {
        id: 77,
        code: 'TPE',
        curr: []
    }, {
        id: 8,
        code: 'WLG',
        curr: []
    }, {
        id: 7,
        code: 'ZQN',
        curr: []
    }],
    'MCY': [{
        id: 9,
        code: 'ADL',
        curr: []
    }, {
        id: 0,
        code: 'AKL',
        curr: []
    }, {
        id: 41,
        code: 'AVV|GEX',
        curr: []
    }, {
        id: 1,
        code: 'CHC',
        curr: []
    }, {
        id: 101,
        code: 'CTS',
        curr: []
    }, {
        id: 83,
        code: 'DPS',
        curr: []
    }, {
        id: 89,
        code: 'FUK',
        curr: []
    }, {
        id: 31,
        code: 'HBA',
        curr: []
    }, {
        id: 116,
        code: 'HKT',
        curr: []
    }, {
        id: 100,
        code: 'KIX|OSA',
        curr: []
    }, {
        id: 35,
        code: 'LST',
        curr: []
    }, {
        id: 42,
        code: 'MEL',
        curr: []
    }, {
        id: 104,
        code: 'NRT|TYO',
        curr: []
    }, {
        id: 47,
        code: 'PER',
        curr: []
    }, {
        id: 52,
        code: 'SYD',
        curr: []
    }, {
        id: 8,
        code: 'WLG',
        curr: []
    }],
    'SYD': [{
        id: 9,
        code: 'ADL',
        curr: []
    }, {
        id: 0,
        code: 'AKL',
        curr: []
    }, {
        id: 41,
        code: 'AVV|GEX',
        curr: []
    }, {
        id: 12,
        code: 'AYQ|AYQ',
        curr: []
    }, {
        id: 113,
        code: 'BKK|XBK',
        curr: []
    }, {
        id: 16,
        code: 'BNE',
        curr: []
    }, {
        id: 13,
        code: 'BNK|BBY',
        curr: []
    }, {
        id: 84,
        code: 'CGK',
        curr: []
    }, {
        id: 1,
        code: 'CHC',
        curr: []
    }, {
        id: 19,
        code: 'CNS',
        curr: []
    }, {
        id: 101,
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
        id: 83,
        code: 'DPS',
        curr: []
    }, {
        id: 23,
        code: 'DRW',
        curr: []
    }, {
        id: 89,
        code: 'FUK',
        curr: []
    }, {
        id: 125,
        code: 'HAN',
        curr: []
    }, {
        id: 31,
        code: 'HBA',
        curr: []
    }, {
        id: 69,
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
        id: 28,
        code: 'HTI|HTI',
        curr: []
    }, {
        id: 127,
        code: 'HUI',
        curr: []
    }, 


{
    id: 30,
    code: 'HVB',
    curr: []
  },

    {
        id: 100,
        code: 'KIX|OSA',
        curr: []
    }, {
        id: 90,
        code: 'KOJ',
        curr: []
    }, {
        id: 105,
        code: 'KUL',
        curr: []
    }, {
        id: 35,
        code: 'LST',
        curr: []
    }, {
        id: 51,
        code: 'MCY',
        curr: []
    }, {
        id: 42,
        code: 'MEL',
        curr: []
    }, {
        id: 38,
        code: 'MKY',
        curr: []
    }, {
        id: 109,
        code: 'MNL',
        curr: []
    }, {
        id: 93,
        code: 'MYJ',
        curr: []
    }, {
        id: 82,
        code: 'NAN',
        curr: []
    }, {
        id: 3,
        code: 'NPE',
        curr: []
    }, {
        id: 5,
        code: 'NPL',
        curr: []
    }, {
        id: 104,
        code: 'NRT|TYO',
        curr: []
    }, {
        id: 98,
        code: 'OIT',
        curr: []
    }, {
        id: 99,
        code: 'OKA',
        curr: []
    }, {
        id: 27,
        code: 'OOL',
        curr: []
    }, {
        id: 47,
        code: 'PER',
        curr: []
    }, {
        id: 6,
        code: 'PMR',
        curr: []
    }, {
        id: 59,
        code: 'PNH',
        curr: []
    }, {
        id: 56,
        code: 'PPP',
        curr: []
    }, {
        id: 129,
        code: 'PQC',
        curr: []
    }, {
        id: 81,
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
        id: 103,
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
        id: 54,
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
        id: 8,
        code: 'WLG',
        curr: []
    }, {
        id: 78,
        code: 'WUH',
        curr: []
    }, {
        id: 7,
        code: 'ZQN',
        curr: []
    }],
    'TSV': [{
        id: 9,
        code: 'ADL',
        curr: []
    }, {
        id: 0,
        code: 'AKL',
        curr: []
    }, {
        id: 41,
        code: 'AVV|GEX',
        curr: []
    }, {
        id: 16,
        code: 'BNE',
        curr: []
    }, {
        id: 1,
        code: 'CHC',
        curr: []
    }, {
        id: 83,
        code: 'DPS',
        curr: []
    }, {
        id: 31,
        code: 'HBA',
        curr: []
    }, {
        id: 117,
        code: 'HNL',
        curr: []
    }, {
        id: 100,
        code: 'KIX|OSA',
        curr: []
    }, {
        id: 42,
        code: 'MEL',
        curr: []
    }, {
        id: 104,
        code: 'NRT|TYO',
        curr: []
    }, {
        id: 52,
        code: 'SYD',
        curr: []
    }, {
        id: 7,
        code: 'ZQN',
        curr: []
    }],
    'PPP': [{
        id: 9,
        code: 'ADL',
        curr: []
    }, {
        id: 16,
        code: 'BNE',
        curr: []
    }, {
        id: 1,
        code: 'CHC',
        curr: []
    }, {
        id: 83,
        code: 'DPS',
        curr: []
    }, {
        id: 23,
        code: 'DRW',
        curr: []
    }, {
        id: 42,
        code: 'MEL',
        curr: []
    }, {
        id: 44,
        code: 'NTL',
        curr: []
    }, {
        id: 47,
        code: 'PER',
        curr: []
    }, {
        id: 52,
        code: 'SYD',
        curr: []
    }],
    'PNH': [{
        id: 9,
        code: 'ADL',
        curr: []
    }, {
        id: 0,
        code: 'AKL',
        curr: []
    }, {
        id: 84,
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
        id: 83,
        code: 'DPS',
        curr: []
    }, {
        id: 23,
        code: 'DRW',
        curr: []
    }, {
        id: 31,
        code: 'HBA',
        curr: []
    }, {
        id: 116,
        code: 'HKT',
        curr: []
    }, {
        id: 105,
        code: 'KUL',
        curr: []
    }, {
        id: 42,
        code: 'MEL',
        curr: []
    }, {
        id: 109,
        code: 'MNL',
        curr: []
    }, {
        id: 27,
        code: 'OOL',
        curr: []
    }, {
        id: 106,
        code: 'PEN',
        curr: []
    }, {
        id: 47,
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
        id: 88,
        code: 'SUB',
        curr: []
    }, {
        id: 52,
        code: 'SYD',
        curr: []
    }, {
        id: 77,
        code: 'TPE',
        curr: []
    }],
    'REP': [{
        id: 84,
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
        id: 23,
        code: 'DRW',
        curr: []
    }, {
        id: 116,
        code: 'HKT',
        curr: []
    }, {
        id: 105,
        code: 'KUL',
        curr: []
    }, {
        id: 109,
        code: 'MNL',
        curr: []
    }, {
        id: 47,
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
        id: 0,
        code: 'AKL',
        curr: []
    }, {
        id: 113,
        code: 'BKK|XBK',
        curr: []
    }, {
        id: 84,
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
        id: 83,
        code: 'DPS',
        curr: []
    }, {
        id: 23,
        code: 'DRW',
        curr: []
    }, {
        id: 116,
        code: 'HKT',
        curr: []
    }, {
        id: 85,
        code: 'KNO',
        curr: []
    }, {
        id: 105,
        code: 'KUL',
        curr: []
    }, {
        id: 42,
        code: 'MEL',
        curr: []
    }, {
        id: 106,
        code: 'PEN',
        curr: []
    }, {
        id: 47,
        code: 'PER',
        curr: []
    }, {
        id: 107,
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
        id: 84,
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
        id: 83,
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
        id: 9,
        code: 'ADL',
        curr: [{
            'caption': 'HK Dollar',
            'value': 'HKD'
        }]
    }, {
        id: 19,
        code: 'CNS',
        curr: [{
            'caption': 'HK Dollar',
            'value': 'HKD'
        }]
    }, {
        id: 101,
        code: 'CTS',
        curr: [{
            'caption': 'HK Dollar',
            'value': 'HKD'
        }]
    }, {
        id: 89,
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
        id: 91,
        code: 'KCZ',
        curr: [{
            'caption': 'HK Dollar',
            'value': 'HKD'
        }]
    }, {
        id: 100,
        code: 'KIX|OSA',
        curr: [{
            'caption': 'HK Dollar',
            'value': 'HKD'
        }]
    }, {
        id: 95,
        code: 'KMI',
        curr: [{
            'caption': 'HK Dollar',
            'value': 'HKD'
        }]
    }, {
        id: 92,
        code: 'KMJ',
        curr: [{
            'caption': 'HK Dollar',
            'value': 'HKD'
        }]
    }, {
        id: 90,
        code: 'KOJ',
        curr: [{
            'caption': 'HK Dollar',
            'value': 'HKD'
        }]
    }, {
        id: 35,
        code: 'LST',
        curr: [{
            'caption': 'HK Dollar',
            'value': 'HKD'
        }]
    }, {
        id: 42,
        code: 'MEL',
        curr: [{
            'caption': 'HK Dollar',
            'value': 'HKD'
        }]
    }, {
        id: 93,
        code: 'MYJ',
        curr: [{
            'caption': 'HK Dollar',
            'value': 'HKD'
        }]
    }, {
        id: 96,
        code: 'NGS',
        curr: [{
            'caption': 'HK Dollar',
            'value': 'HKD'
        }]
    }, {
        id: 104,
        code: 'NRT|TYO',
        curr: [{
            'caption': 'HK Dollar',
            'value': 'HKD'
        }]
    }, {
        id: 98,
        code: 'OIT',
        curr: [{
            'caption': 'HK Dollar',
            'value': 'HKD'
        }]
    }, {
        id: 99,
        code: 'OKA',
        curr: [{
            'caption': 'HK Dollar',
            'value': 'HKD'
        }]
    }, {
        id: 27,
        code: 'OOL',
        curr: [{
            'caption': 'HK Dollar',
            'value': 'HKD'
        }]
    }, {
        id: 47,
        code: 'PER',
        curr: [{
            'caption': 'HK Dollar',
            'value': 'HKD'
        }]
    }, {
        id: 94,
        code: 'SHI',
        curr: []
    }, {
        id: 52,
        code: 'SYD',
        curr: [{
            'caption': 'HK Dollar',
            'value': 'HKD'
        }]
    }, {
        id: 102,
        code: 'SYO',
        curr: []
    }, {
        id: 103,
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
    'PVG': [{
        id: 19,
        code: 'CNS',
        curr: []
    }, {
        id: 101,
        code: 'CTS',
        curr: []
    }, {
        id: 89,
        code: 'FUK',
        curr: []
    }, {
        id: 91,
        code: 'KCZ',
        curr: []
    }, {
        id: 100,
        code: 'KIX|OSA',
        curr: []
    }, {
        id: 95,
        code: 'KMI',
        curr: []
    }, {
        id: 92,
        code: 'KMJ',
        curr: []
    }, {
        id: 90,
        code: 'KOJ',
        curr: []
    }, {
        id: 93,
        code: 'MYJ',
        curr: []
    }, {
        id: 96,
        code: 'NGS',
        curr: []
    }, {
        id: 104,
        code: 'NRT|TYO',
        curr: []
    }, {
        id: 98,
        code: 'OIT',
        curr: []
    }, {
        id: 99,
        code: 'OKA',
        curr: []
    }, {
        id: 27,
        code: 'OOL',
        curr: []
    }, {
        id: 94,
        code: 'SHI',
        curr: []
    }, {
        id: 102,
        code: 'SYO',
        curr: []
    }, {
        id: 103,
        code: 'TAK',
        curr: []
    }],
    'SWA': [{
        id: 84,
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
        id: 83,
        code: 'DPS',
        curr: []
    }, {
        id: 23,
        code: 'DRW',
        curr: []
    }, {
        id: 116,
        code: 'HKT',
        curr: []
    }, {
        id: 105,
        code: 'KUL',
        curr: []
    }, {
        id: 109,
        code: 'MNL',
        curr: []
    }, {
        id: 47,
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
        id: 77,
        code: 'TPE',
        curr: []
    }],
    'TPE': [{
        id: 0,
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
        id: 84,
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
        id: 19,
        code: 'CNS',
        curr: [{
            'caption': 'TW Dollar',
            'value': 'TWD'
        }]
    }, {
        id: 101,
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
        id: 83,
        code: 'DPS',
        curr: [{
            'caption': 'TW Dollar',
            'value': 'TWD'
        }]
    }, {
        id: 23,
        code: 'DRW',
        curr: [{
            'caption': 'TW Dollar',
            'value': 'TWD'
        }]
    }, {
        id: 89,
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
        id: 91,
        code: 'KCZ',
        curr: [{
            'caption': 'TW Dollar',
            'value': 'TWD'
        }]
    }, {
        id: 100,
        code: 'KIX|OSA',
        curr: [{
            'caption': 'TW Dollar',
            'value': 'TWD'
        }]
    }, {
        id: 95,
        code: 'KMI',
        curr: [{
            'caption': 'TW Dollar',
            'value': 'TWD'
        }]
    }, {
        id: 92,
        code: 'KMJ',
        curr: [{
            'caption': 'TW Dollar',
            'value': 'TWD'
        }]
    }, {
        id: 85,
        code: 'KNO',
        curr: [{
            'caption': 'TW Dollar',
            'value': 'TWD'
        }]
    }, {
        id: 90,
        code: 'KOJ',
        curr: [{
            'caption': 'TW Dollar',
            'value': 'TWD'
        }]
    }, {
        id: 105,
        code: 'KUL',
        curr: [{
            'caption': 'TW Dollar',
            'value': 'TWD'
        }]
    }, {
        id: 42,
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
        id: 93,
        code: 'MYJ',
        curr: [{
            'caption': 'TW Dollar',
            'value': 'TWD'
        }]
    }, {
        id: 97,
        code: 'NGO',
        curr: [{
            'caption': 'TW Dollar',
            'value': 'TWD'
        }]
    }, {
        id: 96,
        code: 'NGS',
        curr: [{
            'caption': 'TW Dollar',
            'value': 'TWD'
        }]
    }, {
        id: 104,
        code: 'NRT|TYO',
        curr: [{
            'caption': 'TW Dollar',
            'value': 'TWD'
        }]
    }, {
        id: 98,
        code: 'OIT',
        curr: [{
            'caption': 'TW Dollar',
            'value': 'TWD'
        }]
    }, {
        id: 99,
        code: 'OKA',
        curr: [{
            'caption': 'TW Dollar',
            'value': 'TWD'
        }]
    }, {
        id: 27,
        code: 'OOL',
        curr: [{
            'caption': 'TW Dollar',
            'value': 'TWD'
        }]
    }, {
        id: 106,
        code: 'PEN',
        curr: [{
            'caption': 'TW Dollar',
            'value': 'TWD'
        }]
    }, {
        id: 47,
        code: 'PER',
        curr: [{
            'caption': 'TW Dollar',
            'value': 'TWD'
        }]
    }, {
        id: 59,
        code: 'PNH',
        curr: [{
            'caption': 'TW Dollar',
            'value': 'TWD'
        }]
    }, {
        id: 107,
        code: 'RGN',
        curr: [{
            'caption': 'TW Dollar',
            'value': 'TWD'
        }]
    }, {
        id: 94,
        code: 'SHI',
        curr: []
    }, {
        id: 94,
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
        id: 88,
        code: 'SUB',
        curr: [{
            'caption': 'TW Dollar',
            'value': 'TWD'
        }]
    }, {
        id: 76,
        code: 'SWA',
        curr: [{
            'caption': 'TW Dollar',
            'value': 'TWD'
        }]
    }, {
        id: 102,
        code: 'SYO',
        curr: []
    }, {
        id: 103,
        code: 'TAK',
        curr: [{
            'caption': 'TW Dollar',
            'value': 'TWD'
        }]
    }, {
        id: 40,
        code: 'VIZ|MEL',
        curr: [{
            'caption': 'TW Dollar',
            'value': 'TWD'
        }]
    }],
    'WUH': [{
        id: 19,
        code: 'CNS',
        curr: []
    }, {
        id: 42,
        code: 'MEL',
        curr: []
    }, {
        id: 52,
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
        id: 0,
        code: 'AKL',
        curr: []
    }, {
        id: 1,
        code: 'CHC',
        curr: []
    }, {
        id: 42,
        code: 'MEL',
        curr: []
    }, {
        id: 3,
        code: 'NPE',
        curr: []
    }, {
        id: 5,
        code: 'NPL',
        curr: []
    }, {
        id: 4,
        code: 'NSN',
        curr: []
    }, {
        id: 6,
        code: 'PMR',
        curr: []
    }, {
        id: 52,
        code: 'SYD',
        curr: []
    }, {
        id: 8,
        code: 'WLG',
        curr: []
    }, {
        id: 7,
        code: 'ZQN',
        curr: []
    }],
    'NAN': [{
        id: 1,
        code: 'CHC',
        curr: []
    }, {
        id: 23,
        code: 'DRW',
        curr: []
    }, {
        id: 42,
        code: 'MEL',
        curr: []
    }, {
        id: 27,
        code: 'OOL',
        curr: []
    }, {
        id: 52,
        code: 'SYD',
        curr: []
    }],
    'DPS': [{
        id: 9,
        code: 'ADL',
        curr: []
    }, {
        id: 0,
        code: 'AKL',
        curr: []
    }, {
        id: 41,
        code: 'AVV|GEX',
        curr: []
    }, {
        id: 113,
        code: 'BKK|XBK',
        curr: []
    }, {
        id: 16,
        code: 'BNE',
        curr: []
    }, {
        id: 13,
        code: 'BNK|BBY',
        curr: []
    }, {
        id: 20,
        code: 'CBR',
        curr: []
    }, {
        id: 1,
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
        id: 19,
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
        id: 23,
        code: 'DRW',
        curr: []
    }, {
        id: 89,
        code: 'FUK',
        curr: []
    }, {
        id: 66,
        code: 'HAK',
        curr: []
    }, {
        id: 31,
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
        id: 100,
        code: 'KIX|OSA',
        curr: []
    }, {
        id: 85,
        code: 'KNO',
        curr: []
    }, {
        id: 105,
        code: 'KUL',
        curr: []
    }, {
        id: 35,
        code: 'LST',
        curr: []
    }, {
        id: 51,
        code: 'MCY',
        curr: []
    }, {
        id: 42,
        code: 'MEL',
        curr: []
    }, {
        id: 109,
        code: 'MNL',
        curr: []
    }, {
        id: 104,
        code: 'NRT|TYO',
        curr: []
    }, {
        id: 44,
        code: 'NTL',
        curr: []
    }, {
        id: 27,
        code: 'OOL',
        curr: []
    }, {
        id: 106,
        code: 'PEN',
        curr: []
    }, {
        id: 47,
        code: 'PER',
        curr: []
    }, {
        id: 59,
        code: 'PNH',
        curr: []
    }, {
        id: 56,
        code: 'PPP',
        curr: []
    }, {
        id: 107,
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
        id: 76,
        code: 'SWA',
        curr: []
    }, {
        id: 52,
        code: 'SYD',
        curr: []
    }, {
        id: 77,
        code: 'TPE',
        curr: []
    }, {
        id: 54,
        code: 'TSV',
        curr: []
    }, {
        id: 40,
        code: 'VIZ|MEL',
        curr: []
    }, {
        id: 8,
        code: 'WLG',
        curr: []
    }, {
        id: 7,
        code: 'ZQN',
        curr: []
    }],
    'CGK': [{
        id: 9,
        code: 'ADL',
        curr: []
    }, {
        id: 0,
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
        id: 23,
        code: 'DRW',
        curr: []
    }, {
        id: 89,
        code: 'FUK',
        curr: []
    }, {
        id: 66,
        code: 'HAK',
        curr: []
    }, {
        id: 125,
        code: 'HAN',
        curr: []
    }, {
        id: 31,
        code: 'HBA',
        curr: []
    }, {
        id: 69,
        code: 'HKG',
        curr: []
    }, {
        id: 116,
        code: 'HKT',
        curr: []
    }, {
        id: 100,
        code: 'KIX|OSA',
        curr: []
    }, {
        id: 105,
        code: 'KUL',
        curr: []
    }, {
        id: 35,
        code: 'LST',
        curr: []
    }, {
        id: 42,
        code: 'MEL',
        curr: []
    }, {
        id: 109,
        code: 'MNL',
        curr: []
    }, {
        id: 99,
        code: 'OKA',
        curr: []
    }, {
        id: 27,
        code: 'OOL',
        curr: []
    }, {
        id: 106,
        code: 'PEN',
        curr: []
    }, {
        id: 47,
        code: 'PER',
        curr: []
    }, {
        id: 59,
        code: 'PNH',
        curr: []
    }, {
        id: 60,
        code: 'REP',
        curr: []
    }, {
        id: 107,
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
        id: 76,
        code: 'SWA',
        curr: []
    }, {
        id: 52,
        code: 'SYD',
        curr: []
    }, {
        id: 77,
        code: 'TPE',
        curr: []
    }, {
        id: 8,
        code: 'WLG',
        curr: []
    }],
    'KNO': [{
        id: 0,
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
        id: 83,
        code: 'DPS',
        curr: []
    }, {
        id: 23,
        code: 'DRW',
        curr: []
    }, {
        id: 89,
        code: 'FUK',
        curr: []
    }, {
        id: 66,
        code: 'HAK',
        curr: []
    }, {
        id: 116,
        code: 'HKT',
        curr: []
    }, {
        id: 100,
        code: 'KIX|OSA',
        curr: []
    }, {
        id: 105,
        code: 'KUL',
        curr: []
    }, {
        id: 42,
        code: 'MEL',
        curr: []
    }, {
        id: 109,
        code: 'MNL',
        curr: []
    }, {
        id: 99,
        code: 'OKA',
        curr: []
    }, {
        id: 106,
        code: 'PEN',
        curr: []
    }, {
        id: 47,
        code: 'PER',
        curr: []
    }, {
        id: 60,
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
        id: 77,
        code: 'TPE',
        curr: []
    }],
    'SUB': [{
        id: 9,
        code: 'ADL',
        curr: []
    }, {
        id: 0,
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
        id: 23,
        code: 'DRW',
        curr: []
    }, {
        id: 89,
        code: 'FUK',
        curr: []
    }, {
        id: 116,
        code: 'HKT',
        curr: []
    }, {
        id: 100,
        code: 'KIX|OSA',
        curr: []
    }, {
        id: 105,
        code: 'KUL',
        curr: []
    }, {
        id: 42,
        code: 'MEL',
        curr: []
    }, {
        id: 109,
        code: 'MNL',
        curr: []
    }, {
        id: 99,
        code: 'OKA',
        curr: []
    }, {
        id: 106,
        code: 'PEN',
        curr: []
    }, {
        id: 47,
        code: 'PER',
        curr: []
    }, {
        id: 59,
        code: 'PNH',
        curr: []
    }, {
        id: 107,
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
        id: 77,
        code: 'TPE',
        curr: []
    }],
    'FUK': [{
        id: 9,
        code: 'ADL',
        curr: []
    }, {
        id: 0,
        code: 'AKL',
        curr: []
    }, {
        id: 16,
        code: 'BNE',
        curr: []
    }, {
        id: 84,
        code: 'CGK',
        curr: []
    }, {
        id: 19,
        code: 'CNS',
        curr: []
    }, {
        id: 101,
        code: 'CTS',
        curr: []
    }, {
        id: 83,
        code: 'DPS',
        curr: []
    }, {
        id: 23,
        code: 'DRW',
        curr: []
    }, {
        id: 31,
        code: 'HBA',
        curr: []
    }, {
        id: 69,
        code: 'HKG',
        curr: []
    }, {
        id: 116,
        code: 'HKT',
        curr: []
    }, {
        id: 28,
        code: 'HTI|HTI',
        curr: []
    }, {
        id: 91,
        code: 'KCZ',
        curr: []
    }, {
        id: 100,
        code: 'KIX|OSA',
        curr: []
    }, {
        id: 85,
        code: 'KNO',
        curr: []
    }, {
        id: 105,
        code: 'KUL',
        curr: []
    }, {
        id: 35,
        code: 'LST',
        curr: []
    }, {
        id: 51,
        code: 'MCY',
        curr: []
    }, {
        id: 42,
        code: 'MEL',
        curr: []
    }, {
        id: 109,
        code: 'MNL',
        curr: []
    }, {
        id: 97,
        code: 'NGO',
        curr: []
    }, {
        id: 104,
        code: 'NRT|TYO',
        curr: []
    }, {
        id: 44,
        code: 'NTL',
        curr: []
    }, {
        id: 99,
        code: 'OKA',
        curr: []
    }, {
        id: 27,
        code: 'OOL',
        curr: []
    }, {
        id: 106,
        code: 'PEN',
        curr: []
    }, {
        id: 47,
        code: 'PER',
        curr: []
    }, {
        id: 75,
        code: 'PVG',
        curr: []
    }, {
        id: 94,
        code: 'SHI',
        curr: []
    }, {
        id: 110,
        code: 'SIN',
        curr: []
    }, {
        id: 88,
        code: 'SUB',
        curr: []
    }, {
        id: 52,
        code: 'SYD',
        curr: []
    }, {
        id: 102,
        code: 'SYO',
        curr: []
    }, {
        id: 77,
        code: 'TPE',
        curr: []
    }],
    'KOJ': [{
        id: 9,
        code: 'ADL',
        curr: []
    }, {
        id: 0,
        code: 'AKL',
        curr: []
    }, {
        id: 16,
        code: 'BNE',
        curr: []
    }, {
        id: 19,
        code: 'CNS',
        curr: []
    }, {
        id: 101,
        code: 'CTS',
        curr: []
    }, {
        id: 23,
        code: 'DRW',
        curr: []
    }, {
        id: 31,
        code: 'HBA',
        curr: []
    }, {
        id: 28,
        code: 'HTI|HTI',
        curr: []
    }, {
        id: 91,
        code: 'KCZ',
        curr: []
    }, {
        id: 92,
        code: 'KMJ',
        curr: []
    }, {
        id: 35,
        code: 'LST',
        curr: []
    }, {
        id: 42,
        code: 'MEL',
        curr: []
    }, {
        id: 97,
        code: 'NGO',
        curr: []
    }, {
        id: 104,
        code: 'NRT|TYO',
        curr: []
    }, {
        id: 44,
        code: 'NTL',
        curr: []
    }, {
        id: 99,
        code: 'OKA',
        curr: []
    }, {
        id: 27,
        code: 'OOL',
        curr: []
    }, {
        id: 47,
        code: 'PER',
        curr: []
    }, {
        id: 75,
        code: 'PVG',
        curr: []
    }, {
        id: 94,
        code: 'SHI',
        curr: []
    }, {
        id: 52,
        code: 'SYD',
        curr: []
    }, {
        id: 102,
        code: 'SYO',
        curr: []
    }, {
        id: 77,
        code: 'TPE',
        curr: []
    }],
    'KCZ': [{
        id: 19,
        code: 'CNS',
        curr: []
    }, {
        id: 108,
        code: 'CRK',
        curr: []
    }, {
        id: 101,
        code: 'CTS',
        curr: []
    }, {
        id: 89,
        code: 'FUK',
        curr: []
    }, {
        id: 69,
        code: 'HKG',
        curr: []
    }, {
        id: 100,
        code: 'KIX|OSA',
        curr: []
    }, {
        id: 95,
        code: 'KMI',
        curr: []
    }, {
        id: 92,
        code: 'KMJ',
        curr: []
    }, {
        id: 90,
        code: 'KOJ',
        curr: []
    }, {
        id: 109,
        code: 'MNL',
        curr: []
    }, {
        id: 96,
        code: 'NGS',
        curr: []
    }, {
        id: 104,
        code: 'NRT|TYO',
        curr: []
    }, {
        id: 98,
        code: 'OIT',
        curr: []
    }, {
        id: 99,
        code: 'OKA',
        curr: []
    }, {
        id: 27,
        code: 'OOL',
        curr: []
    }, {
        id: 75,
        code: 'PVG',
        curr: []
    }, {
        id: 94,
        code: 'SHI',
        curr: []
    }, {
        id: 102,
        code: 'SYO',
        curr: []
    }, {
        id: 77,
        code: 'TPE',
        curr: []
    }],
    'KMJ': [{
        id: 19,
        code: 'CNS',
        curr: []
    }, {
        id: 108,
        code: 'CRK',
        curr: []
    }, {
        id: 101,
        code: 'CTS',
        curr: []
    }, {
        id: 69,
        code: 'HKG',
        curr: []
    }, {
        id: 91,
        code: 'KCZ',
        curr: []
    }, {
        id: 100,
        code: 'KIX|OSA',
        curr: []
    }, {
        id: 90,
        code: 'KOJ',
        curr: []
    }, {
        id: 109,
        code: 'MNL',
        curr: []
    }, {
        id: 104,
        code: 'NRT|TYO',
        curr: []
    }, {
        id: 99,
        code: 'OKA',
        curr: []
    }, {
        id: 27,
        code: 'OOL',
        curr: []
    }, {
        id: 75,
        code: 'PVG',
        curr: []
    }, {
        id: 94,
        code: 'SHI',
        curr: []
    }, {
        id: 110,
        code: 'SIN',
        curr: []
    }, {
        id: 102,
        code: 'SYO',
        curr: []
    }, {
        id: 77,
        code: 'TPE',
        curr: []
    }],
    'MYJ': [{
        id: 9,
        code: 'ADL',
        curr: []
    }, {
        id: 0,
        code: 'AKL',
        curr: []
    }, {
        id: 16,
        code: 'BNE',
        curr: []
    }, {
        id: 19,
        code: 'CNS',
        curr: []
    }, {
        id: 101,
        code: 'CTS',
        curr: []
    }, {
        id: 23,
        code: 'DRW',
        curr: []
    }, {
        id: 31,
        code: 'HBA',
        curr: []
    }, {
        id: 28,
        code: 'HTI|HTI',
        curr: []
    }, {
        id: 35,
        code: 'LST',
        curr: []
    }, {
        id: 42,
        code: 'MEL',
        curr: []
    }, {
        id: 109,
        code: 'MNL',
        curr: []
    }, {
        id: 96,
        code: 'NGS',
        curr: []
    }, {
        id: 104,
        code: 'NRT|TYO',
        curr: []
    }, {
        id: 44,
        code: 'NTL',
        curr: []
    }, {
        id: 99,
        code: 'OKA',
        curr: []
    }, {
        id: 27,
        code: 'OOL',
        curr: []
    }, {
        id: 47,
        code: 'PER',
        curr: []
    }, {
        id: 75,
        code: 'PVG',
        curr: []
    }, {
        id: 94,
        code: 'SHI',
        curr: []
    }, {
        id: 52,
        code: 'SYD',
        curr: []
    }, {
        id: 102,
        code: 'SYO',
        curr: []
    }, {
        id: 77,
        code: 'TPE',
        curr: []
    }],
    'SHI': [{
        id: 19,
        code: 'CNS',
        curr: []
    }, {
        id: 101,
        code: 'CTS',
        curr: []
    }, {
        id: 89,
        code: 'FUK',
        curr: []
    }, {
        id: 69,
        code: 'HKG',
        curr: []
    }, {
        id: 91,
        code: 'KCZ',
        curr: []
    }, {
        id: 100,
        code: 'KIX|OSA',
        curr: []
    }, {
        id: 95,
        code: 'KMI',
        curr: []
    }, {
        id: 92,
        code: 'KMJ',
        curr: []
    }, {
        id: 90,
        code: 'KOJ',
        curr: []
    }, {
        id: 109,
        code: 'MNL',
        curr: []
    }, {
        id: 93,
        code: 'MYJ',
        curr: []
    }, {
        id: 96,
        code: 'NGS',
        curr: []
    }, {
        id: 104,
        code: 'NRT|TYO',
        curr: []
    }, {
        id: 98,
        code: 'OIT',
        curr: []
    }, {
        id: 27,
        code: 'OOL',
        curr: []
    }, {
        id: 75,
        code: 'PVG',
        curr: []
    }, {
        id: 103,
        code: 'TAK',
        curr: []
    }, {
        id: 77,
        code: 'TPE',
        curr: []
    }],
    'KMI': [{
        id: 19,
        code: 'CNS',
        curr: []
    }, {
        id: 101,
        code: 'CTS',
        curr: []
    }, {
        id: 91,
        code: 'KCZ',
        curr: []
    }, {
        id: 100,
        code: 'KIX|OSA',
        curr: []
    }, {
        id: 109,
        code: 'MNL',
        curr: []
    }, {
        id: 93,
        code: 'MYJ',
        curr: []
    }, {
        id: 104,
        code: 'NRT|TYO',
        curr: []
    }, {
        id: 99,
        code: 'OKA',
        curr: []
    }, {
        id: 27,
        code: 'OOL',
        curr: []
    }, {
        id: 75,
        code: 'PVG',
        curr: []
    }, {
        id: 94,
        code: 'SHI',
        curr: []
    }, {
        id: 110,
        code: 'SIN',
        curr: []
    }, {
        id: 102,
        code: 'SYO',
        curr: []
    }, {
        id: 103,
        code: 'TAK',
        curr: []
    }, {
        id: 77,
        code: 'TPE',
        curr: []
    }],
    'NGS': [{
        id: 19,
        code: 'CNS',
        curr: []
    }, {
        id: 101,
        code: 'CTS',
        curr: []
    }, {
        id: 69,
        code: 'HKG',
        curr: []
    }, {
        id: 91,
        code: 'KCZ',
        curr: []
    }, {
        id: 100,
        code: 'KIX|OSA',
        curr: []
    }, {
        id: 109,
        code: 'MNL',
        curr: []
    }, {
        id: 93,
        code: 'MYJ',
        curr: []
    }, {
        id: 104,
        code: 'NRT|TYO',
        curr: []
    }, {
        id: 99,
        code: 'OKA',
        curr: []
    }, {
        id: 27,
        code: 'OOL',
        curr: []
    }, {
        id: 75,
        code: 'PVG',
        curr: []
    }, {
        id: 94,
        code: 'SHI',
        curr: []
    }, {
        id: 102,
        code: 'SYO',
        curr: []
    }, {
        id: 103,
        code: 'TAK',
        curr: []
    }, {
        id: 77,
        code: 'TPE',
        curr: []
    }],
    'NGO': [{
        id: 101,
        code: 'CTS',
        curr: []
    }, {
        id: 89,
        code: 'FUK',
        curr: []
    }, {
        id: 90,
        code: 'KOJ',
        curr: []
    }, {
        id: 109,
        code: 'MNL',
        curr: []
    }, {
        id: 99,
        code: 'OKA',
        curr: []
    }, {
        id: 77,
        code: 'TPE',
        curr: []
    }],
    'OIT': [{
        id: 9,
        code: 'ADL',
        curr: []
    }, {
        id: 0,
        code: 'AKL',
        curr: []
    }, {
        id: 16,
        code: 'BNE',
        curr: []
    }, {
        id: 19,
        code: 'CNS',
        curr: []
    }, {
        id: 101,
        code: 'CTS',
        curr: []
    }, {
        id: 23,
        code: 'DRW',
        curr: []
    }, {
        id: 31,
        code: 'HBA',
        curr: []
    }, {
        id: 69,
        code: 'HKG',
        curr: []
    }, {
        id: 28,
        code: 'HTI|HTI',
        curr: []
    }, {
        id: 91,
        code: 'KCZ',
        curr: []
    }, {
        id: 35,
        code: 'LST',
        curr: []
    }, {
        id: 42,
        code: 'MEL',
        curr: []
    }, {
        id: 104,
        code: 'NRT|TYO',
        curr: []
    }, {
        id: 44,
        code: 'NTL',
        curr: []
    }, {
        id: 99,
        code: 'OKA',
        curr: []
    }, {
        id: 27,
        code: 'OOL',
        curr: []
    }, {
        id: 47,
        code: 'PER',
        curr: []
    }, {
        id: 75,
        code: 'PVG',
        curr: []
    }, {
        id: 94,
        code: 'SHI',
        curr: []
    }, {
        id: 52,
        code: 'SYD',
        curr: []
    }, {
        id: 102,
        code: 'SYO',
        curr: []
    }, {
        id: 77,
        code: 'TPE',
        curr: []
    }],
    'OKA': [{
        id: 9,
        code: 'ADL',
        curr: []
    }, {
        id: 0,
        code: 'AKL',
        curr: []
    }, {
        id: 113,
        code: 'BKK|XBK',
        curr: []
    }, {
        id: 16,
        code: 'BNE',
        curr: []
    }, {
        id: 84,
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
        id: 19,
        code: 'CNS',
        curr: []
    }, {
        id: 101,
        code: 'CTS',
        curr: []
    }, {
        id: 122,
        code: 'DAD',
        curr: []
    }, {
        id: 23,
        code: 'DRW',
        curr: []
    }, {
        id: 89,
        code: 'FUK',
        curr: []
    }, {
        id: 31,
        code: 'HBA',
        curr: []
    }, {
        id: 69,
        code: 'HKG',
        curr: []
    }, {
        id: 116,
        code: 'HKT',
        curr: []
    }, {
        id: 28,
        code: 'HTI|HTI',
        curr: []
    }, {
        id: 91,
        code: 'KCZ',
        curr: []
    }, {
        id: 100,
        code: 'KIX|OSA',
        curr: []
    }, {
        id: 95,
        code: 'KMI',
        curr: []
    }, {
        id: 92,
        code: 'KMJ',
        curr: []
    }, {
        id: 85,
        code: 'KNO',
        curr: []
    }, {
        id: 90,
        code: 'KOJ',
        curr: []
    }, {
        id: 105,
        code: 'KUL',
        curr: []
    }, {
        id: 35,
        code: 'LST',
        curr: []
    }, {
        id: 42,
        code: 'MEL',
        curr: []
    }, {
        id: 109,
        code: 'MNL',
        curr: []
    }, {
        id: 93,
        code: 'MYJ',
        curr: []
    }, {
        id: 97,
        code: 'NGO',
        curr: []
    }, {
        id: 96,
        code: 'NGS',
        curr: []
    }, {
        id: 104,
        code: 'NRT|TYO',
        curr: []
    }, {
        id: 44,
        code: 'NTL',
        curr: []
    }, {
        id: 98,
        code: 'OIT',
        curr: []
    }, {
        id: 27,
        code: 'OOL',
        curr: []
    }, {
        id: 106,
        code: 'PEN',
        curr: []
    }, {
        id: 47,
        code: 'PER',
        curr: []
    }, {
        id: 59,
        code: 'PNH',
        curr: []
    }, {
        id: 75,
        code: 'PVG',
        curr: []
    }, {
        id: 107,
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
        id: 88,
        code: 'SUB',
        curr: []
    }, {
        id: 52,
        code: 'SYD',
        curr: []
    }, {
        id: 102,
        code: 'SYO',
        curr: []
    }, {
        id: 103,
        code: 'TAK',
        curr: []
    }, {
        id: 77,
        code: 'TPE',
        curr: []
    }],
    'KIX|OSA': [{
        id: 9,
        code: 'ADL',
        curr: []
    }, {
        id: 0,
        code: 'AKL',
        curr: []
    }, {
        id: 12,
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
        id: 16,
        code: 'BNE',
        curr: []
    }, {
        id: 13,
        code: 'BNK|BBY',
        curr: []
    }, {
        id: 84,
        code: 'CGK',
        curr: []
    }, {
        id: 1,
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
        id: 19,
        code: 'CNS',
        curr: []
    }, {
        id: 108,
        code: 'CRK',
        curr: []
    }, {
        id: 101,
        code: 'CTS',
        curr: []
    }, {
        id: 122,
        code: 'DAD',
        curr: []
    }, {
        id: 83,
        code: 'DPS',
        curr: []
    }, {
        id: 23,
        code: 'DRW',
        curr: []
    }, {
        id: 89,
        code: 'FUK',
        curr: []
    }, {
        id: 31,
        code: 'HBA',
        curr: []
    }, {
        id: 69,
        code: 'HKG',
        curr: []
    }, {
        id: 116,
        code: 'HKT',
        curr: []
    }, {
        id: 28,
        code: 'HTI|HTI',
        curr: []
    }, {
        id: 91,
        code: 'KCZ',
        curr: []
    }, {
        id: 95,
        code: 'KMI',
        curr: []
    }, {
        id: 92,
        code: 'KMJ',
        curr: []
    }, {
        id: 85,
        code: 'KNO',
        curr: []
    }, {
        id: 105,
        code: 'KUL',
        curr: []
    }, {
        id: 35,
        code: 'LST',
        curr: []
    }, {
        id: 51,
        code: 'MCY',
        curr: []
    }, {
        id: 42,
        code: 'MEL',
        curr: []
    }, {
        id: 109,
        code: 'MNL',
        curr: []
    }, {
        id: 96,
        code: 'NGS',
        curr: []
    }, {
        id: 104,
        code: 'NRT|TYO',
        curr: []
    }, {
        id: 44,
        code: 'NTL',
        curr: []
    }, {
        id: 99,
        code: 'OKA',
        curr: []
    }, {
        id: 27,
        code: 'OOL',
        curr: []
    }, {
        id: 106,
        code: 'PEN',
        curr: []
    }, {
        id: 47,
        code: 'PER',
        curr: []
    }, {
        id: 75,
        code: 'PVG',
        curr: []
    }, {
        id: 126,
        code: 'SGN',
        curr: []
    }, {
        id: 94,
        code: 'SHI',
        curr: []
    }, {
        id: 110,
        code: 'SIN',
        curr: []
    }, {
        id: 88,
        code: 'SUB',
        curr: []
    }, {
        id: 52,
        code: 'SYD',
        curr: []
    }, {
        id: 102,
        code: 'SYO',
        curr: []
    }, {
        id: 77,
        code: 'TPE',
        curr: []
    }, {
        id: 54,
        code: 'TSV',
        curr: []
    }],
    'CTS': [{
        id: 9,
        code: 'ADL',
        curr: []
    }, {
        id: 0,
        code: 'AKL',
        curr: []
    }, {
        id: 12,
        code: 'AYQ|AYQ',
        curr: []
    }, {
        id: 16,
        code: 'BNE',
        curr: []
    }, {
        id: 19,
        code: 'CNS',
        curr: []
    }, {
        id: 23,
        code: 'DRW',
        curr: []
    }, {
        id: 89,
        code: 'FUK',
        curr: []
    }, {
        id: 31,
        code: 'HBA',
        curr: []
    }, {
        id: 69,
        code: 'HKG',
        curr: []
    }, {
        id: 28,
        code: 'HTI|HTI',
        curr: []
    }, {
        id: 91,
        code: 'KCZ',
        curr: []
    }, {
        id: 100,
        code: 'KIX|OSA',
        curr: []
    }, {
        id: 92,
        code: 'KMJ',
        curr: []
    }, {
        id: 90,
        code: 'KOJ',
        curr: []
    }, {
        id: 35,
        code: 'LST',
        curr: []
    }, {
        id: 51,
        code: 'MCY',
        curr: []
    }, {
        id: 42,
        code: 'MEL',
        curr: []
    }, {
        id: 109,
        code: 'MNL',
        curr: []
    }, {
        id: 93,
        code: 'MYJ',
        curr: []
    }, {
        id: 97,
        code: 'NGO',
        curr: []
    }, {
        id: 96,
        code: 'NGS',
        curr: []
    }, {
        id: 104,
        code: 'NRT|TYO',
        curr: []
    }, {
        id: 44,
        code: 'NTL',
        curr: []
    }, {
        id: 98,
        code: 'OIT',
        curr: []
    }, {
        id: 99,
        code: 'OKA',
        curr: []
    }, {
        id: 27,
        code: 'OOL',
        curr: []
    }, {
        id: 47,
        code: 'PER',
        curr: []
    }, {
        id: 75,
        code: 'PVG',
        curr: []
    }, {
        id: 94,
        code: 'SHI',
        curr: []
    }, {
        id: 110,
        code: 'SIN',
        curr: []
    }, {
        id: 52,
        code: 'SYD',
        curr: []
    }, {
        id: 102,
        code: 'SYO',
        curr: []
    }, {
        id: 103,
        code: 'TAK',
        curr: []
    }, {
        id: 77,
        code: 'TPE',
        curr: []
    }, {
        id: 40,
        code: 'VIZ|MEL',
        curr: []
    }],
    'SYO': [{
        id: 19,
        code: 'CNS',
        curr: []
    }, {
        id: 101,
        code: 'CTS',
        curr: []
    }, {
        id: 89,
        code: 'FUK',
        curr: []
    }, {
        id: 69,
        code: 'HKG',
        curr: []
    }, {
        id: 91,
        code: 'KCZ',
        curr: []
    }, {
        id: 100,
        code: 'KIX|OSA',
        curr: []
    }, {
        id: 95,
        code: 'KMI',
        curr: []
    }, {
        id: 92,
        code: 'KMJ',
        curr: []
    }, {
        id: 90,
        code: 'KOJ',
        curr: []
    }, {
        id: 109,
        code: 'MNL',
        curr: []
    }, {
        id: 93,
        code: 'MYJ',
        curr: []
    }, {
        id: 96,
        code: 'NGS',
        curr: []
    }, {
        id: 104,
        code: 'NRT|TYO',
        curr: []
    }, {
        id: 98,
        code: 'OIT',
        curr: []
    }, {
        id: 99,
        code: 'OKA',
        curr: []
    }, {
        id: 27,
        code: 'OOL',
        curr: []
    }, {
        id: 75,
        code: 'PVG',
        curr: []
    }, {
        id: 103,
        code: 'TAK',
        curr: []
    }, {
        id: 77,
        code: 'TPE',
        curr: []
    }],
    'TAK': [{
        id: 9,
        code: 'ADL',
        curr: []
    }, {
        id: 0,
        code: 'AKL',
        curr: []
    }, {
        id: 16,
        code: 'BNE',
        curr: []
    }, {
        id: 19,
        code: 'CNS',
        curr: []
    }, {
        id: 101,
        code: 'CTS',
        curr: []
    }, {
        id: 31,
        code: 'HBA',
        curr: []
    }, {
        id: 28,
        code: 'HTI|HTI',
        curr: []
    }, {
        id: 95,
        code: 'KMI',
        curr: []
    }, {
        id: 35,
        code: 'LST',
        curr: []
    }, {
        id: 42,
        code: 'MEL',
        curr: []
    }, {
        id: 109,
        code: 'MNL',
        curr: []
    }, {
        id: 96,
        code: 'NGS',
        curr: []
    }, {
        id: 104,
        code: 'NRT|TYO',
        curr: []
    }, {
        id: 44,
        code: 'NTL',
        curr: []
    }, {
        id: 99,
        code: 'OKA',
        curr: []
    }, {
        id: 27,
        code: 'OOL',
        curr: []
    }, {
        id: 47,
        code: 'PER',
        curr: []
    }, {
        id: 75,
        code: 'PVG',
        curr: []
    }, {
        id: 94,
        code: 'SHI',
        curr: []
    }, {
        id: 52,
        code: 'SYD',
        curr: []
    }, {
        id: 102,
        code: 'SYO',
        curr: []
    }, {
        id: 77,
        code: 'TPE',
        curr: []
    }],
    'NRT|TYO': [{
        id: 9,
        code: 'ADL',
        curr: []
    }, {
        id: 0,
        code: 'AKL',
        curr: []
    }, {
        id: 12,
        code: 'AYQ|AYQ',
        curr: []
    }, {
        id: 113,
        code: 'BKK|XBK',
        curr: []
    }, {
        id: 16,
        code: 'BNE',
        curr: []
    }, {
        id: 13,
        code: 'BNK|BBY',
        curr: []
    }, {
        id: 1,
        code: 'CHC',
        curr: []
    }, {
        id: 19,
        code: 'CNS',
        curr: []
    }, {
        id: 101,
        code: 'CTS',
        curr: []
    }, {
        id: 83,
        code: 'DPS',
        curr: []
    }, {
        id: 23,
        code: 'DRW',
        curr: []
    }, {
        id: 89,
        code: 'FUK',
        curr: []
    }, {
        id: 31,
        code: 'HBA',
        curr: []
    }, {
        id: 69,
        code: 'HKG',
        curr: []
    }, {
        id: 28,
        code: 'HTI|HTI',
        curr: []
    }, {
        id: 91,
        code: 'KCZ',
        curr: []
    }, {
        id: 100,
        code: 'KIX|OSA',
        curr: []
    }, {
        id: 95,
        code: 'KMI',
        curr: []
    }, {
        id: 92,
        code: 'KMJ',
        curr: []
    }, {
        id: 90,
        code: 'KOJ',
        curr: []
    }, {
        id: 35,
        code: 'LST',
        curr: []
    }, {
        id: 51,
        code: 'MCY',
        curr: []
    }, {
        id: 42,
        code: 'MEL',
        curr: []
    }, {
        id: 109,
        code: 'MNL',
        curr: []
    }, {
        id: 93,
        code: 'MYJ',
        curr: []
    }, {
        id: 96,
        code: 'NGS',
        curr: []
    }, {
        id: 44,
        code: 'NTL',
        curr: []
    }, {
        id: 98,
        code: 'OIT',
        curr: []
    }, {
        id: 99,
        code: 'OKA',
        curr: []
    }, {
        id: 27,
        code: 'OOL',
        curr: []
    }, {
        id: 47,
        code: 'PER',
        curr: []
    }, {
        id: 75,
        code: 'PVG',
        curr: []
    }, {
        id: 94,
        code: 'SHI',
        curr: []
    }, {
        id: 110,
        code: 'SIN',
        curr: []
    }, {
        id: 52,
        code: 'SYD',
        curr: []
    }, {
        id: 102,
        code: 'SYO',
        curr: []
    }, {
        id: 103,
        code: 'TAK',
        curr: []
    }, {
        id: 77,
        code: 'TPE',
        curr: []
    }, {
        id: 54,
        code: 'TSV',
        curr: []
    }, {
        id: 8,
        code: 'WLG',
        curr: []
    }, {
        id: 7,
        code: 'ZQN',
        curr: []
    }],
    'KUL': [{
        id: 9,
        code: 'ADL',
        curr: []
    }, {
        id: 0,
        code: 'AKL',
        curr: []
    }, {
        id: 113,
        code: 'BKK|XBK',
        curr: []
    }, {
        id: 84,
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
        id: 19,
        code: 'CNS',
        curr: []
    }, {
        id: 122,
        code: 'DAD',
        curr: []
    }, {
        id: 83,
        code: 'DPS',
        curr: []
    }, {
        id: 23,
        code: 'DRW',
        curr: []
    }, {
        id: 89,
        code: 'FUK',
        curr: []
    }, {
        id: 66,
        code: 'HAK',
        curr: []
    }, {
        id: 31,
        code: 'HBA',
        curr: []
    }, {
        id: 116,
        code: 'HKT',
        curr: []
    }, {
        id: 100,
        code: 'KIX|OSA',
        curr: []
    }, {
        id: 85,
        code: 'KNO',
        curr: []
    }, {
        id: 35,
        code: 'LST',
        curr: []
    }, {
        id: 42,
        code: 'MEL',
        curr: []
    }, {
        id: 109,
        code: 'MNL',
        curr: []
    }, {
        id: 99,
        code: 'OKA',
        curr: []
    }, {
        id: 27,
        code: 'OOL',
        curr: []
    }, {
        id: 47,
        code: 'PER',
        curr: []
    }, {
        id: 59,
        code: 'PNH',
        curr: []
    }, {
        id: 60,
        code: 'REP',
        curr: []
    }, {
        id: 107,
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
        id: 88,
        code: 'SUB',
        curr: []
    }, {
        id: 76,
        code: 'SWA',
        curr: []
    }, {
        id: 52,
        code: 'SYD',
        curr: []
    }, {
        id: 77,
        code: 'TPE',
        curr: []
    }],
    'PEN': [{
        id: 9,
        code: 'ADL',
        curr: []
    }, {
        id: 113,
        code: 'BKK|XBK',
        curr: []
    }, {
        id: 84,
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
        id: 19,
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
        id: 83,
        code: 'DPS',
        curr: []
    }, {
        id: 23,
        code: 'DRW',
        curr: []
    }, {
        id: 89,
        code: 'FUK',
        curr: []
    }, {
        id: 66,
        code: 'HAK',
        curr: []
    }, {
        id: 116,
        code: 'HKT',
        curr: []
    }, {
        id: 100,
        code: 'KIX|OSA',
        curr: []
    }, {
        id: 85,
        code: 'KNO',
        curr: []
    }, {
        id: 35,
        code: 'LST',
        curr: []
    }, {
        id: 42,
        code: 'MEL',
        curr: []
    }, {
        id: 109,
        code: 'MNL',
        curr: []
    }, {
        id: 99,
        code: 'OKA',
        curr: []
    }, {
        id: 27,
        code: 'OOL',
        curr: []
    }, {
        id: 47,
        code: 'PER',
        curr: []
    }, {
        id: 59,
        code: 'PNH',
        curr: []
    }, {
        id: 107,
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
        id: 88,
        code: 'SUB',
        curr: []
    }, {
        id: 77,
        code: 'TPE',
        curr: []
    }],
    'RGN': [{
        id: 113,
        code: 'BKK|XBK',
        curr: []
    }, {
        id: 84,
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
        id: 83,
        code: 'DPS',
        curr: []
    }, {
        id: 23,
        code: 'DRW',
        curr: []
    }, {
        id: 66,
        code: 'HAK',
        curr: []
    }, {
        id: 116,
        code: 'HKT',
        curr: []
    }, {
        id: 105,
        code: 'KUL',
        curr: []
    }, {
        id: 42,
        code: 'MEL',
        curr: []
    }, {
        id: 109,
        code: 'MNL',
        curr: []
    }, {
        id: 106,
        code: 'PEN',
        curr: []
    }, {
        id: 47,
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
        id: 88,
        code: 'SUB',
        curr: []
    }, {
        id: 77,
        code: 'TPE',
        curr: []
    }],
    'CRK': [{
        id: 113,
        code: 'BKK|XBK',
        curr: []
    }, {
        id: 84,
        code: 'CGK',
        curr: []
    }, {
        id: 112,
        code: 'CMB',
        curr: []
    }, {
        id: 83,
        code: 'DPS',
        curr: []
    }, {
        id: 23,
        code: 'DRW',
        curr: []
    }, {
        id: 66,
        code: 'HAK',
        curr: []
    }, {
        id: 116,
        code: 'HKT',
        curr: []
    }, {
        id: 91,
        code: 'KCZ',
        curr: []
    }, {
        id: 100,
        code: 'KIX|OSA',
        curr: []
    }, {
        id: 92,
        code: 'KMJ',
        curr: []
    }, {
        id: 85,
        code: 'KNO',
        curr: []
    }, {
        id: 105,
        code: 'KUL',
        curr: []
    }, {
        id: 42,
        code: 'MEL',
        curr: []
    }, {
        id: 106,
        code: 'PEN',
        curr: []
    }, {
        id: 47,
        code: 'PER',
        curr: []
    }, {
        id: 59,
        code: 'PNH',
        curr: []
    }, {
        id: 107,
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
        id: 88,
        code: 'SUB',
        curr: []
    }],
    'MNL': [{
        id: 9,
        code: 'ADL',
        curr: []
    }, {
        id: 0,
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
        id: 16,
        code: 'BNE',
        curr: [{
            'caption': 'PH Peso',
            'value': 'PHP'
        }, {
            'caption': 'US Dollar',
            'value': 'USD'
        }]
    }, {
        id: 84,
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
        id: 19,
        code: 'CNS',
        curr: [{
            'caption': 'PH Peso',
            'value': 'PHP'
        }, {
            'caption': 'US Dollar',
            'value': 'USD'
        }]
    }, {
        id: 101,
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
        id: 83,
        code: 'DPS',
        curr: [{
            'caption': 'PH Peso',
            'value': 'PHP'
        }, {
            'caption': 'US Dollar',
            'value': 'USD'
        }]
    }, {
        id: 23,
        code: 'DRW',
        curr: []
    }, {
        id: 89,
        code: 'FUK',
        curr: [{
            'caption': 'PH Peso',
            'value': 'PHP'
        }, {
            'caption': 'US Dollar',
            'value': 'USD'
        }]
    }, {
        id: 31,
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
        id: 91,
        code: 'KCZ',
        curr: []
    }, {
        id: 100,
        code: 'KIX|OSA',
        curr: [{
            'caption': 'PH Peso',
            'value': 'PHP'
        }, {
            'caption': 'US Dollar',
            'value': 'USD'
        }]
    }, {
        id: 95,
        code: 'KMI',
        curr: []
    }, {
        id: 92,
        code: 'KMJ',
        curr: []
    }, {
        id: 85,
        code: 'KNO',
        curr: [{
            'caption': 'PH Peso',
            'value': 'PHP'
        }, {
            'caption': 'US Dollar',
            'value': 'USD'
        }]
    }, {
        id: 105,
        code: 'KUL',
        curr: [{
            'caption': 'PH Peso',
            'value': 'PHP'
        }, {
            'caption': 'US Dollar',
            'value': 'USD'
        }]
    }, {
        id: 42,
        code: 'MEL',
        curr: [{
            'caption': 'PH Peso',
            'value': 'PHP'
        }, {
            'caption': 'US Dollar',
            'value': 'USD'
        }]
    }, {
        id: 93,
        code: 'MYJ',
        curr: []
    }, {
        id: 73,
        code: 'NGB',
        curr: [{
            'caption': 'PH Peso',
            'value': 'PHP'
        }, {
            'caption': 'US Dollar',
            'value': 'USD'
        }]
    }, {
        id: 97,
        code: 'NGO',
        curr: []
    }, {
        id: 96,
        code: 'NGS',
        curr: []
    }, {
        id: 104,
        code: 'NRT|TYO',
        curr: [{
            'caption': 'PH Peso',
            'value': 'PHP'
        }, {
            'caption': 'US Dollar',
            'value': 'USD'
        }]
    }, {
        id: 99,
        code: 'OKA',
        curr: [{
            'caption': 'PH Peso',
            'value': 'PHP'
        }, {
            'caption': 'US Dollar',
            'value': 'USD'
        }]
    }, {
        id: 27,
        code: 'OOL',
        curr: [{
            'caption': 'PH Peso',
            'value': 'PHP'
        }, {
            'caption': 'US Dollar',
            'value': 'USD'
        }]
    }, {
        id: 106,
        code: 'PEN',
        curr: []
    }, {
        id: 47,
        code: 'PER',
        curr: [{
            'caption': 'PH Peso',
            'value': 'PHP'
        }, {
            'caption': 'US Dollar',
            'value': 'USD'
        }]
    }, {
        id: 59,
        code: 'PNH',
        curr: []
    }, {
        id: 60,
        code: 'REP',
        curr: []
    }, {
        id: 107,
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
        id: 94,
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
        id: 88,
        code: 'SUB',
        curr: [{
            'caption': 'PH Peso',
            'value': 'PHP'
        }, {
            'caption': 'US Dollar',
            'value': 'USD'
        }]
    }, {
        id: 76,
        code: 'SWA',
        curr: []
    }, {
        id: 52,
        code: 'SYD',
        curr: [{
            'caption': 'PH Peso',
            'value': 'PHP'
        }, {
            'caption': 'US Dollar',
            'value': 'USD'
        }]
    }, {
        id: 102,
        code: 'SYO',
        curr: []
    }, {
        id: 103,
        code: 'TAK',
        curr: []
    }, {
        id: 77,
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
        id: 9,
        code: 'ADL',
        curr: []
    }, {
        id: 0,
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
        id: 16,
        code: 'BNE',
        curr: []
    }, {
        id: 84,
        code: 'CGK',
        curr: []
    }, {
        id: 1,
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
        id: 19,
        code: 'CNS',
        curr: []
    }, {
        id: 108,
        code: 'CRK',
        curr: []
    }, {
        id: 101,
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
        id: 83,
        code: 'DPS',
        curr: []
    }, {
        id: 23,
        code: 'DRW',
        curr: []
    }, {
        id: 89,
        code: 'FUK',
        curr: []
    }, {
        id: 66,
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
        id: 31,
        code: 'HBA',
        curr: []
    }, {
        id: 68,
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
        id: 100,
        code: 'KIX|OSA',
        curr: []
    }, {
        id: 95,
        code: 'KMI',
        curr: []
    }, {
        id: 92,
        code: 'KMJ',
        curr: []
    }, {
        id: 85,
        code: 'KNO',
        curr: []
    }, {
        id: 105,
        code: 'KUL',
        curr: [{
            'caption': 'AU Dollar',
            'value': 'AUD'
        }, {
            'caption': 'SG Dollar',
            'value': 'SGD'
        }]
    }, {
        id: 65,
        code: 'KWE',
        curr: []
    }, {
        id: 42,
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
        id: 97,
        code: 'NGO',
        curr: []
    }, {
        id: 104,
        code: 'NRT|TYO',
        curr: []
    }, {
        id: 44,
        code: 'NTL',
        curr: []
    }, {
        id: 99,
        code: 'OKA',
        curr: [{
            'caption': 'AU Dollar',
            'value': 'AUD'
        }, {
            'caption': 'SG Dollar',
            'value': 'SGD'
        }]
    }, {
        id: 27,
        code: 'OOL',
        curr: []
    }, {
        id: 106,
        code: 'PEN',
        curr: [{
            'caption': 'AU Dollar',
            'value': 'AUD'
        }, {
            'caption': 'SG Dollar',
            'value': 'SGD'
        }]
    }, {
        id: 47,
        code: 'PER',
        curr: [{
            'caption': 'AU Dollar',
            'value': 'AUD'
        }, {
            'caption': 'SG Dollar',
            'value': 'SGD'
        }]
    }, {
        id: 59,
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
        id: 60,
        code: 'REP',
        curr: [{
            'caption': 'AU Dollar',
            'value': 'AUD'
        }, {
            'caption': 'SG Dollar',
            'value': 'SGD'
        }]
    }, {
        id: 107,
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
        id: 88,
        code: 'SUB',
        curr: [{
            'caption': 'AU Dollar',
            'value': 'AUD'
        }, {
            'caption': 'SG Dollar',
            'value': 'SGD'
        }]
    }, {
        id: 76,
        code: 'SWA',
        curr: [{
            'caption': 'AU Dollar',
            'value': 'AUD'
        }, {
            'caption': 'SG Dollar',
            'value': 'SGD'
        }]
    }, {
        id: 52,
        code: 'SYD',
        curr: []
    }, {
        id: 77,
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
        id: 8,
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
    id: 52,
    code: 'SYD',
    curr: []
  }],

    'ICN': [{
        id: 41,
        code: 'AVV|GEX',
        curr: []
    }, {
        id: 42,
        code: 'MEL',
        curr: []
    }, {
        id: 27,
        code: 'OOL',
        curr: []
    }, {
        id: 47,
        code: 'PER',
        curr: []
    }, {
        id: 52,
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
        id: 84,
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
        id: 83,
        code: 'DPS',
        curr: [{
            'caption': 'US Dollar',
            'value': 'USD'
        }]
    }, {
        id: 23,
        code: 'DRW',
        curr: [{
            'caption': 'US Dollar',
            'value': 'USD'
        }]
    }, {
        id: 66,
        code: 'HAK',
        curr: [{
            'caption': 'US Dollar',
            'value': 'USD'
        }]
    }, {
        id: 68,
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
        id: 100,
        code: 'KIX|OSA',
        curr: [{
            'caption': 'US Dollar',
            'value': 'USD'
        }]
    }, {
        id: 85,
        code: 'KNO',
        curr: [{
            'caption': 'US Dollar',
            'value': 'USD'
        }]
    }, {
        id: 105,
        code: 'KUL',
        curr: [{
            'caption': 'US Dollar',
            'value': 'USD'
        }]
    }, {
        id: 65,
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
        id: 99,
        code: 'OKA',
        curr: [{
            'caption': 'US Dollar',
            'value': 'USD'
        }]
    }, {
        id: 106,
        code: 'PEN',
        curr: [{
            'caption': 'US Dollar',
            'value': 'USD'
        }]
    }, {
        id: 47,
        code: 'PER',
        curr: [{
            'caption': 'US Dollar',
            'value': 'USD'
        }]
    }, {
        id: 59,
        code: 'PNH',
        curr: [{
            'caption': 'US Dollar',
            'value': 'USD'
        }]
    }, {
        id: 60,
        code: 'REP',
        curr: [{
            'caption': 'US Dollar',
            'value': 'USD'
        }]
    }, {
        id: 107,
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
        id: 88,
        code: 'SUB',
        curr: [{
            'caption': 'US Dollar',
            'value': 'USD'
        }]
    }, {
        id: 76,
        code: 'SWA',
        curr: [{
            'caption': 'US Dollar',
            'value': 'USD'
        }]
    }, {
        id: 77,
        code: 'TPE',
        curr: [{
            'caption': 'US Dollar',
            'value': 'USD'
        }]
    }],
    'BKK|XBK': [{
        id: 9,
        code: 'ADL',
        curr: []
    }, {
        id: 0,
        code: 'AKL',
        curr: []
    }, {
        id: 16,
        code: 'BNE',
        curr: []
    }, {
        id: 84,
        code: 'CGK',
        curr: []
    }, {
        id: 1,
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
        id: 83,
        code: 'DPS',
        curr: []
    }, {
        id: 23,
        code: 'DRW',
        curr: []
    }, {
        id: 66,
        code: 'HAK',
        curr: []
    }, {
        id: 31,
        code: 'HBA',
        curr: []
    }, {
        id: 68,
        code: 'HFE',
        curr: []
    }, {
        id: 100,
        code: 'KIX|OSA',
        curr: []
    }, {
        id: 85,
        code: 'KNO',
        curr: []
    }, {
        id: 105,
        code: 'KUL',
        curr: []
    }, {
        id: 35,
        code: 'LST',
        curr: []
    }, {
        id: 42,
        code: 'MEL',
        curr: []
    }, {
        id: 109,
        code: 'MNL',
        curr: []
    }, {
        id: 104,
        code: 'NRT|TYO',
        curr: []
    }, {
        id: 99,
        code: 'OKA',
        curr: []
    }, {
        id: 27,
        code: 'OOL',
        curr: []
    }, {
        id: 106,
        code: 'PEN',
        curr: []
    }, {
        id: 47,
        code: 'PER',
        curr: []
    }, {
        id: 107,
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
        id: 88,
        code: 'SUB',
        curr: []
    }, {
        id: 52,
        code: 'SYD',
        curr: []
    }, {
        id: 77,
        code: 'TPE',
        curr: []
    }, {
        id: 8,
        code: 'WLG',
        curr: []
    }],
    'HKT': [{
        id: 9,
        code: 'ADL',
        curr: []
    }, {
        id: 0,
        code: 'AKL',
        curr: []
    }, {
        id: 41,
        code: 'AVV|GEX',
        curr: []
    }, {
        id: 16,
        code: 'BNE',
        curr: []
    }, {
        id: 13,
        code: 'BNK|BBY',
        curr: []
    }, {
        id: 20,
        code: 'CBR',
        curr: []
    }, {
        id: 84,
        code: 'CGK',
        curr: []
    }, {
        id: 1,
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
        id: 19,
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
        id: 83,
        code: 'DPS',
        curr: []
    }, {
        id: 23,
        code: 'DRW',
        curr: []
    }, {
        id: 89,
        code: 'FUK',
        curr: []
    }, {
        id: 66,
        code: 'HAK',
        curr: []
    }, {
        id: 31,
        code: 'HBA',
        curr: []
    }, {
        id: 68,
        code: 'HFE',
        curr: []
    }, {
        id: 100,
        code: 'KIX|OSA',
        curr: []
    }, {
        id: 85,
        code: 'KNO',
        curr: []
    }, {
        id: 105,
        code: 'KUL',
        curr: []
    }, {
        id: 35,
        code: 'LST',
        curr: []
    }, {
        id: 51,
        code: 'MCY',
        curr: []
    }, {
        id: 42,
        code: 'MEL',
        curr: []
    }, {
        id: 109,
        code: 'MNL',
        curr: []
    }, {
        id: 44,
        code: 'NTL',
        curr: []
    }, {
        id: 99,
        code: 'OKA',
        curr: []
    }, {
        id: 27,
        code: 'OOL',
        curr: []
    }, {
        id: 106,
        code: 'PEN',
        curr: []
    }, {
        id: 47,
        code: 'PER',
        curr: []
    }, {
        id: 59,
        code: 'PNH',
        curr: []
    }, {
        id: 60,
        code: 'REP',
        curr: []
    }, {
        id: 107,
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
        id: 88,
        code: 'SUB',
        curr: []
    }, {
        id: 76,
        code: 'SWA',
        curr: []
    }, {
        id: 52,
        code: 'SYD',
        curr: []
    }, {
        id: 77,
        code: 'TPE',
        curr: []
    }, {
        id: 40,
        code: 'VIZ|MEL',
        curr: []
    }, {
        id: 8,
        code: 'WLG',
        curr: []
    }],
    'HNL': [{
        id: 9,
        code: 'ADL',
        curr: []
    }, {
        id: 0,
        code: 'AKL',
        curr: []
    }, {
        id: 41,
        code: 'AVV|GEX',
        curr: []
    }, {
        id: 16,
        code: 'BNE',
        curr: []
    }, {
        id: 1,
        code: 'CHC',
        curr: []
    }, {
        id: 19,
        code: 'CNS',
        curr: []
    }, {
        id: 83,
        code: 'DPS',
        curr: []
    }, {
        id: 23,
        code: 'DRW',
        curr: []
    }, {
        id: 31,
        code: 'HBA',
        curr: []
    }, {
        id: 35,
        code: 'LST',
        curr: []
    }, {
        id: 42,
        code: 'MEL',
        curr: []
    }, {
        id: 44,
        code: 'NTL',
        curr: []
    }, {
        id: 27,
        code: 'OOL',
        curr: []
    }, {
        id: 47,
        code: 'PER',
        curr: []
    }, {
        id: 110,
        code: 'SIN',
        curr: []
    }, {
        id: 52,
        code: 'SYD',
        curr: []
    }, {
        id: 54,
        code: 'TSV',
        curr: []
    }, {
        id: 40,
        code: 'VIZ|MEL',
        curr: []
    }, {
        id: 8,
        code: 'WLG',
        curr: []
    }],
    'DAD': [{
        id: 113,
        code: 'BKK|XBK',
        curr: []
    }, {
        id: 84,
        code: 'CGK',
        curr: []
    }, {
        id: 112,
        code: 'CMB',
        curr: []
    }, {
        id: 23,
        code: 'DRW',
        curr: []
    }, {
        id: 66,
        code: 'HAK',
        curr: []
    }, {
        id: 116,
        code: 'HKT',
        curr: []
    }, {
        id: 100,
        code: 'KIX|OSA',
        curr: []
    }, {
        id: 85,
        code: 'KNO',
        curr: []
    }, {
        id: 105,
        code: 'KUL',
        curr: []
    }, {
        id: 109,
        code: 'MNL',
        curr: []
    }, {
        id: 84,
        code: 'CGK',
        curr: []
    }, {
        id: 107,
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
        }, {
            'caption': 'AU Dollar',
            'value': 'AUD'
        }]
    }, {
        id: 110,
        code: 'SIN',
        curr: []
    }, {
        id: 88,
        code: 'SUB',
        curr: []
    }, {
        id: 52,
        code: 'SYD',
        curr: []
    }, {
        id: 77,
        code: 'TPE',
        curr: []
    }, {
        id: 79,
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
        id: 84,
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
        id: 83,
        code: 'DPS',
        curr: []
    }, {
        id: 23,
        code: 'DRW',
        curr: []
    }, {
        id: 66,
        code: 'HAK',
        curr: []
    }, {
        id: 116,
        code: 'HKT',
        curr: []
    }, {
        id: 100,
        code: 'KIX|OSA',
        curr: []
    }, {
        id: 85,
        code: 'KNO',
        curr: []
    }, {
        id: 105,
        code: 'KUL',
        curr: []
    }, {
        id: 42,
        code: 'MEL',
        curr: []
    }, {
        id: 109,
        code: 'MNL',
        curr: []
    }, {
        id: 99,
        code: 'OKA',
        curr: []
    }, {
        id: 106,
        code: 'PEN',
        curr: []
    }, {
        id: 59,
        code: 'PNH',
        curr: []
    }, {
        id: 60,
        code: 'REP',
        curr: []
    }, {
        id: 107,
        code: 'RGN',
        curr: []
    }, {
        id: 110,
        code: 'SIN',
        curr: []
    }, {
        id: 88,
        code: 'SUB',
        curr: []
    }, {
        id: 52,
        code: 'SYD',
        curr: []
    }, {
        id: 77,
        code: 'TPE',
        curr: []
    }, {
        id: 79,
        code: 'XUZ',
        curr: []
    }]
};
var data_holidayOrigins = [0, 8, 1, 2]
var data_holidayDestinations = {
    'AKL': [{
        id: 9,
        code: 'ADL'
    }, {
        id: 13,
        code: 'BNK|BBY'
    }, {
        id: 83,
        code: 'DPS'
    }, {
        id: 113,
        code: 'BKK|XBK'
    }, {
        id: 19,
        code: 'CNS'
    }, {
        id: 1,
        code: 'CHC'
    }, {
        id: 23,
        code: 'DRW'
    }, {
        id: 2,
        code: 'DUD'
    }, {
        id: 27,
        code: 'OOL'
    }, {
        id: 125,
        code: 'HAN'
    }, {
        id: 31,
        code: 'HBA'
    }, {
        id: 126,
        code: 'SGN'
    }, {
        id: 69,
        code: 'HKG'
    }, {
        id: 117,
        code: 'HNL'
    }, {
        id: 34,
        code: 'OOL|KFF'
    }, {
        id: 105,
        code: 'KUL'
    }, {
        id: 35,
        code: 'LST'
    }, {
        id: 42,
        code: 'MEL'
    }, {
        id: 45,
        code: 'MCY|NSA'
    }, {
        id: 100,
        code: 'KIX|OSA'
    }, {
        id: 116,
        code: 'HKT'
    }, {
        id: 48,
        code: 'CNS|PTI'
    }, {
        id: 7,
        code: 'ZQN'
    }, {
        id: 110,
        code: 'SIN'
    }, {
        id: 52,
        code: 'SYD'
    }, {
        id: 77,
        code: 'TPE'
    }, {
        id: 104,
        code: 'NRT|TYO'
    }, {
        id: 8,
        code: 'WLG'
    }],
    'WLG': [{
        id: 0,
        code: 'AKL'
    }, {
        id: 19,
        code: 'CNS'
    }, {
        id: 1,
        code: 'CHC'
    }, {
        id: 126,
        code: 'SGN'
    }, {
        id: 105,
        code: 'KUL'
    }, {
        id: 42,
        code: 'MEL'
    }, {
        id: 59,
        code: 'PNH'
    }, {
        id: 116,
        code: 'HKT'
    }, {
        id: 7,
        code: 'ZQN'
    }, {
        id: 110,
        code: 'SIN'
    }],
    'CHC': [{
        id: 0,
        code: 'AKL'
    }, {
        id: 13,
        code: 'BNK|BBY'
    }, {
        id: 19,
        code: 'CNS'
    }, {
        id: 27,
        code: 'OOL'
    }, {
        id: 28,
        code: 'HTI|HTI'
    }, {
        id: 31,
        code: 'HBA'
    }, {
        id: 126,
        code: 'SGN'
    }, {
        id: 34,
        code: 'OOL|KFF'
    }, {
        id: 42,
        code: 'MEL'
    }, {
        id: 45,
        code: 'MCY|NSA'
    }, {
        id: 46,
        code: 'CNS|PCQ'
    }, {
        id: 48,
        code: 'CNS|PTI'
    }, {
        id: 7,
        code: 'ZQN'
    }, {
        id: 110,
        code: 'SIN'
    }, {
        id: 52,
        code: 'SYD'
    }, {
        id: 8,
        code: 'WLG'
    }],
    'DUD': [{
        id: 0,
        code: 'AKL'
    }, {
        id: 19,
        code: 'CNS'
    }, {
        id: 42,
        code: 'MEL'
    }]
};
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
    [0, 'Auckland', '3750', false, 'Agoda'],
    [0, 'Christchurch', '6167', false, 'Agoda'],
    [0, 'Dunedin', '2084', false, 'Agoda'],
    [0, 'Franz Josef Glacier', '5581', false, 'Agoda'],
    [0, 'Queenstown', '2566', false, 'Agoda'],
    [0, 'Rotorua', '11768', false, 'Agoda'],
    [0, 'Te Anu', '232', false, 'Agoda'],
    [0, 'Wanaka', '5056', false, 'Agoda'],
    [0, 'Wellington', '2704', false, 'Agoda'],
    [1, 'Adelaide', '11981', false, 'Agoda'],
    [1, 'Airlie Beach', '11611', false, 'Agoda'],
    [1, 'Albany', '17208', false, 'Agoda'],
    [1, 'Alice Springs', '5312', false, 'Agoda'],
    [1, 'Ayers Rock (Uluru)', '4457', false, 'Agoda'],
    [1, 'Ballina Byron', '17889', false, 'Agoda'],
    [1, 'Barossa Valley (SA)', '16613', false, 'Agoda'],
    [1, 'Blue Mountains (NSW)', '17892', false, 'Agoda'],
    [1, 'Brisbane', '9466', false, 'Agoda'],
    [1, 'Broome', '9824', false, 'Agoda'],
    [1, 'Byron Bay', '7694', false, 'Agoda'],
    [1, 'Cairns', '13550', false, 'Agoda'],
    [1, 'Canberra', '2051', false, 'Agoda'],
    [1, 'Cradle Mountain', '16614', false, 'Agoda'],
    [1, 'Darwin', '7138', false, 'Agoda'],
    [1, 'Daylesford', '6460', false, 'Agoda'],
    [1, 'Geelong', '5307', false, 'Agoda'],
    [1, 'Gold Coast', '16611', false, 'Agoda'],
    [1, 'Hamilton Island', '21448', false, 'Agoda'],
    [1, 'Hayman Island', 'E8793ADC-8198-4488-A3FC-4E5FD550FF24', false, 'Expedia'],
    [1, 'Hobart', '14983', false, 'Agoda'],
    [1, 'Hunter Valley', '17904', false, 'Agoda'],
    [1, 'Kings Canyon', '7336', false, 'Agoda'],
    [1, 'Kingscliff', '2216', false, 'Agoda'],
    [1, 'Launceston', '5757', false, 'Agoda'],
    [1, 'Mackay', '2975', false, 'Agoda'],
    [1, 'Margaret River Region (WA)', '1816', false, 'Agoda'],
    [1, 'Melbourne', '10372', false, 'Agoda'],
    [1, 'Newcastle', '18058', false, 'Agoda'],
    [1, 'Noosa', '', false, 'Agoda'],
    [1, 'Palm Cove', '', false, 'Agoda'],
    [1, 'Pemberton', '7469', false, 'Agoda'],
    [1, 'Perth', '11980', false, 'Agoda'],
    [1, 'Perth Region', '55566BA4-4FA0-45EE-B49F-F04418D3DA57', false, 'Expedia'],
    [1, 'Port Douglas', '684', false, 'Agoda'],
    [1, 'Rockhampton', '13685', false, 'Agoda'],
    [1, 'Sunshine Coast', '19930', false, 'Agoda'],
    [1, 'Sydney', '14370', false, 'Agoda'],
    [1, 'Sydney Surrounds (NSW)', 'DD9A6FF6-7DB7-4FF1-8F96-6C5BC11062B1', false, 'Expedia'],
    [1, 'Townsville', '15193', false, 'Agoda'],
    [1, 'Whitsunday Coast', '', false, 'Agoda'],
    [1, 'Yarra Valley', '17930', false, 'Agoda'],
    [2, 'Phnom Penh', '4816', false, 'Agoda'],
    [2, 'Siem Reap', '16917', false, 'Agoda'],
    [4, 'Aitutaki', '19094', false, 'Agoda'],
    [4, 'Rarotonga', '19095', false, 'Agoda'],
    [5, 'Coral Coast', '18301', false, 'Agoda'],
    [5, 'Denarau', '18302', false, 'Agoda'],
    [5, 'Nadi', '5057', false, 'Agoda'],
    [5, 'Suva', '18307', false, 'Agoda'],
    [7, 'Hong Kong', '16808', false, 'Agoda'],
    [8, 'Denpasar (Bali)', '17193', false, 'Agoda'],
    [8, 'Jakarta', '8691', false, 'Agoda'],
    [8, 'Medan', '21284', false, 'Agoda'],
    [8, 'Surabaya', '10779', false, 'Agoda'],
    [10, 'Fukuoka', '16527', false, 'Agoda'],
    [10, 'Hiroshima', '10554', false, 'Agoda'],
    [10, 'Kyoto', '1784', false, 'Agoda'],
    [10, 'Niseko', '30340', false, 'Agoda'],
    [10, 'Okinawa', '16366', false, 'Agoda'],
    [10, 'Osaka', '9590', false, 'Agoda'],
    [10, 'Sapporo', '3435', false, 'Agoda'],
    [10, 'Tokyo (Narita)', '5085', false, 'Agoda'],
    [11, 'Macau', '21397', false, 'Agoda'],
    [12, 'Kota Kinabalu', '5070', false, 'Agoda'],
    [12, 'Kuala Lumpur', '14524', false, 'Agoda'],
    [12, 'Kuching', '14523', false, 'Agoda'],
    [12, 'Langkawi', '16928', false, 'Agoda'],
    [12, 'Penang', '16087', false, 'Agoda'],
    [14, 'Boracay', '15903', false, 'Agoda'],
    [14, 'Cebu', '4001', false, 'Agoda'],
    [14, 'Manila', '1622', false, 'Agoda'],
    [15, 'Singapore', '4064', false, 'Agoda'],
    [18, 'Taipei', '4951', false, 'Agoda'],
    [19, 'Bangkok', '9395', false, 'Agoda'],
    [19, 'Chiang Mai', '7401', false, 'Agoda'],
    [19, 'Koh Phi Phi', '15878', false, 'Agoda'],
    [19, 'Koh Samui', '17198', false, 'Agoda'],
    [19, 'Krabi', '14865', false, 'Agoda'],
    [19, 'Pattaya', '8584', false, 'Agoda'],
    [19, 'Phuket', '16056', false, 'Agoda'],
    [22, 'Hawaii', '10793', false, 'Agoda'],
    [23, 'Can Tho', '16079', false, 'Agoda'],
    [23, 'Danang', '16440', false, 'Agoda'],
    [23, 'Hanoi', '2758', false, 'Agoda'],
    [23, 'Ho Chi Minh City', '13170', false, 'Agoda'],
    [23, 'Hue', '3738', false, 'Agoda'],
    [23, 'Nha Trang', '2679', false, 'Agoda'],
    [23, 'Vinh', '21501', false, 'Agoda']
];
var data_hostelArray = [
    [0, 'Auckland', 'CAuckland;New Zealand', false, 'Hostelworld'],
    [0, 'Christchurch', 'CChristchurch;NewZealand', false, 'Hostelworld'],
    [0, 'Queenstown', 'CQueenstown;New Zealand', false, 'Hostelworld'],
    [0, 'Rotorua', 'CRotorua;New Zealand', false, 'Hostelworld'],
    [0, 'Wellington', 'CWellington;New Zealand', false, 'Hostelworld'],
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
    [1, 'Launcetson', 'CLaunceston;Australia', false, 'Hostelworld'],
    [1, 'Mackay', 'CMackay;Australia', false, 'Hostelworld'],
    [1, 'Melbourne', 'CMelbourne;Australia', false, 'Hostelworld'],
    [1, 'Mooloolaba', 'CMooloolaba;Australia', false, 'Hostelworld'],
    [1, 'Newcastle', 'CNewcastle;Australia', false, 'Hostelworld'],
    [1, 'Noosa', 'CNoosa;Australia', false, 'Hostelworld'],
    [1, 'Perth', 'CPerth;Australia', false, 'Hostelworld'],
    [1, 'Port Douglas', 'CPort Douglas;Australia', false, 'Hostelworld'],
    [1, 'Rockhampton', 'CRockhampton;Australia', false, 'Hostelworld'],
    [1, 'Surfers Paradise', 'CSurfers Paradise;Australia', false, 'Hostelworld'],
    [1, 'Sydney', 'CSydney;Australia', false, 'Hostelworld'],
    [1, 'Townsville', 'CTownsville;Australia', false, 'Hostelworld'],
    [5, 'Fiji - Beachcomber Island', 'CBeachcomber Island;Fiji', false, 'Hostelworld'],
    [5, 'Fiji - Coral Coast', 'CCoral Coast;Fiji', false, 'Hostelworld'],
    [5, 'Fiji - Mana Beach', 'CMana Beach;Fiji', false, 'Hostelworld'],
    [5, 'Fiji - Nadi', 'CNada;Fiji', false, 'Hostelworld'],
    [7, 'Hong Kong', 'CHong Kong;Hong Kong', false, 'Hostelworld'],
    [8, 'Bali - Jimbaran Bay', 'CJimbaran;Indonesia', false, 'Hostelworld'],
    [8, 'Bali - Kuta Beach', 'CKuta Beach;Indonesia', false, 'Hostelworld'],
    [8, 'Bali - Nusa Dua', 'CNusa Dua;Indonesia', false, 'Hostelworld'],
    [8, 'Bali - Sanur', 'CSanur;Indonesia', false, 'Hostelworld'],
    [8, 'Bali - Ubud', 'CUbud;Indonesia', false, 'Hostelworld'],
    [8, 'Denpasar (Bali)', 'CBali;Indonesia', false, 'Hostelworld'],
    [8, 'Jakarta', 'CJakarta;Indonesia', false, 'Hostelworld'],
    [8, 'Surabaya', 'CSurabaya;Indonesia', false, 'Hostelworld'],
    [10, 'Osaka', 'COsaka;Japan', false, 'Hostelworld'],
    [10, 'Tokyo', 'CTokyo;Japan', false, 'Hostelworld'],
    [11, '', 'CMacau;Macau', false, 'Hostelworld'],
    [12, 'Kota Kinabalu', 'CKota Kinabalu;Malaysia', false, 'Hostelworld'],
    [12, 'Kuala Lumpur', 'CKuala Lumpur;Malaysia', false, 'Hostelworld'],
    [12, 'Kuching', 'CKuching;Malaysia', false, 'Hostelworld'],
    [14, 'Manila', 'CManila;Philippines', false, 'Hostelworld'],
    [15, 'Singapore', 'CSingapore;Singapore', false, 'Hostelworld'],
    [18, 'Taipei', 'CTaipei;Taiwan', false, 'Hostelworld'],
    [19, 'Bangkok', 'CBangkok;Thailand', false, 'Hostelworld'],
    [19, 'Phuket', 'CPhuket;Thailand', false, 'Hostelworld'],
    [22, 'Honolulu', 'CHonolulu;USA', false, 'Hostelworld']
];
/* WARNING: Airport DDI ({369C2E76-BF6D-408C-BBF8-948816B86C26}) not used for any origins in Origin Folder DDI ({242F52E2-11F6-40CF-817F-9185BEB37900}) */
/* WARNING: Airport HAP ({A58A9EC9-131C-4B1A-BFCF-5D2B9AEEF399}) not used for any origins in Origin Folder HAP ({851FD9D7-91D2-4C28-BA50-2CA2701E8E48}) */
/* WARNING: Airport SYX ({7F394E72-8C19-43D1-8D51-0A3958AFD79A}) not used for any origins in Origin Folder SYX ({12C3FCDA-533D-46A5-A577-E055A590043D}) */
/* WARNING: Country France not found in allLocations array. */
/* WARNING: Country Hong Kong not found in allLocations array. */
/* ERROR: Origin Folder CGK ({6AFA391A-7BE2-4D8D-A307-BF69D849959B}) has already been added for country Indonesia */
/* WARNING: Country Italy not found in allLocations array. */
/* WARNING: Country Macau not found in allLocations array. */
/* WARNING: Country Taiwan not found in allLocations array. */
/* WARNING: Country United Arab Emirates not found in allLocations array. */
/* WARNING: Country United Kingdom not found in allLocations array. */
/* WARNING: Airport VCA ({507C4FF8-EAE9-47A7-B392-52101D0D1EEC}) not used for any origins in Origin Folder VCA ({4491CF63-089F-4B2A-BE4F-549C08543A7E}) */
/* ERROR: Flight Schedule DAD-SWA ({FEDFB18C-AF5B-4D94-95CF-6DFBDEAF0B1A}) has invalid field 'Destination' */
/* ERROR: Flight Schedule SGN-SWA ({3711AE8F-3544-4260-906E-7E7691AC0EAF}) has invalid field 'Destination' */