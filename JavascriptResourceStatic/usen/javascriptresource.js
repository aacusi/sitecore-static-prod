if (!window.console) {
    console = {
        log: function() {},
        info: function() {},
        debug: function() {},
        warn: function() {},
        error: function() {}
    };
}
var multiCityPageName = "/us/en/multicity";
var ChooseCategoryText = "Choose category";
var SiteName = "us_en_website";
var virtualFolder = "/us/en/";
var json_flightOrigin = "/us/en/services/compactsearchservice?token=289&action=LoadOrigins";
var json_flightDestination = "/us/en/services/compactsearchservice?token=289&action=LoadDestinations&origin=";
var json_holidayOrigin = "/us/en/services/holidayservice?token=289&action=LoadOrigins";
var json_holidayDestination = "/us/en/services/holidayservice?token=289&action=LoadDestinations&origin=";
var json_holiday = "/us/en/services/holidayservice?token=289";
var json_hotel = "/us/en/services/hotelservice?token=289&action=LoadHotelData";
var json_hostel = "/us/en/services/hotelservice?token=289&action=LoadHostelData";
var json_tweet = "/us/en/services/othercontrolsservice?token=289&action=GetTwitterFeed";
var json_localisation = "/us/en/services/othercontrolsservice?token=289&action=GetLocalisationUrl";
var json_travelalerts = "/us/en/services/travelalertsservice?token=289";
var json_holidayCompactSearch = "/us/en/services/holidayservice?token=289&action=LoadValidDates&origin=";
var json_customerPortal = "/us/en/services/customerenquiryservice?token=289";
var json_specialOffers = "/us/en/services/specialoffersservice?token=289";
var json_mobileSiteContent = "";
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
var json_Days = "/us/en/services/othercontrolsservice?token=289&action=GetMonthDays&MonthYear=";
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
var booking_engine_viewstate = "/wEPDwUBMGQYAQUeX19Db250cm9sc1JlcXVpcmVQb3N0QmFja0tleV9fFgEFJ01lbWJlckxvZ2luU2VhcmNoVmlldyRtZW1iZXJfUmVtZW1iZXJtZaXQj/rtlZ1hPS0zPQj+skvkM9qtml4xeXxQQ8y8k6xx";
var booking_engine_culture = "en-AU";
var booking_engine_language = "EN";
var site_culture = "en-AU";
var flight_status_yesterday = "Yesterday";
var flight_status_today = "Today";
var flight_status_tomorrow = "Tomorrow";
var flight_status_please_select = "Please Select";
var web_checkin_culture = "en-AU";
var message_loading = "Loading...";
var message_searching = "Searching...";
var message_validationFlights = "Please select your <strong>origin, destination</strong> and <strong>travel dates</strong> to search for flights";
var message_HoldidayPackagesErrorWarning = "";
var message_validationFlightsHotels = "Please select your <strong>location</strong> and <strong>check in/out dates</strong> to search";
var message_invalidOrigin = "Please select a valid <strong>Origin</strong> first";
var message_noFlightResults = "No locations matched your search.<br />Please try again or alternatively view <a href='http://www.jetstar.com/gx/en/planning-and-booking/where-we-go/route-map'>Jetstar\'s route map</a>";
var message_myJetstarErrorMessage = "Please ensure the following fields are filled in: ";
var message_selectOrigin = "Please select your Point of Origin";
var message_selectDestination = "Please select your Destination";
var message_selectHotel = "Please select a Hotel location";
var message_selectHostel = "Please select a Hostel location";
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
var offer_additional_routes = "True";
var additional_routes_text = "For other points of origin, please visit our Australian web site";
var additional_routes_link = "http://www.jetstar.com/au/en/home";
var recent_search_header_label = "";
var recent_search_single_label = "";
var recent_search_return_label = "";
var recent_search_multi_label = "";
var MobileBookingUrl = "";
var MobileCookieName = "";
var special_route_stopover = "/us/en/popups/special-route-stopover?token=289";
var max_passenger_allowed = "/us/en/popups/total-allowed-passengers?token=289";
var message_selectDepartDate_hotels = "Select your departure date";
var message_selectReturnDate_hotels = "Select your <span>return</span> date";
var max_flightspecials = "6";
var json_flightspecials_data = "";
var binError_imgSrc = "/us/en//~/_media/Jetstar Australia/Images/Homepage/Promo/bargin-bin-logo-small.png?bc=White";
var message_noFlightSpecials = "<p>There are currently no special offers available from this airport.</p> <p>Please check again soon or try another airport</p>";
var message_errorFlightSpecials = "<p>Please check our <a href='http://www.jetstar.com/au/en/special-offers'>special offers page</a></p>";
var binEmpty_MainHeadingMsg = "Sorry, there are no Bargain Bin fares from this location.";
var binEmpty_SubTextMsg = "Try adjusting your departing city or search via the flight section above.";
var binErr_MainHeadingMsg = "Sorry, there are no Bargain Bin fares from this location.";
var binErr_SubTextMsg = "Please check our <a href='special'>http://www.jetstar.com/au/en/special-offers'>special offers page</a>";
var data_flightspecials_default = "MEL";
var exclude_tax = false;
var data_flightspecials_page = "";
var data_leadin_fares_url = "/au/en/popups/compact-search-pop-up";
var data_flightspecials_pricesuffix = "";
var data_flightspecials_pricecurrency = "";
var message_flightspecials_LinkSpecialsText = "Find flights";
var message_flightspecials_LinkLeadInText = "Book Now";
var message_flightspecials_leadInText = "Subject to Availability";
var data_bargainBin_HotFareText = "Hot Fare";
var data_bargainBin_SaleFareText = "Sale Fare";
var data_bargainBin_BusinessSaleText = "Business Sale";
var json_hotelSpecial_url = "http://hotels.jetstar.com/search/list";
var json_hotelSpecial_api = "http://hotels.jetstar.com/api/v1/search.json";
var json_hotelSpecial_params = "?adults=2&daysToCheckIn=14&numberOfNights=1&sortBy=price&sortDir=asc&location=";
var data_hotelSpecial_priceStr = "Per night from  <span class='price'></span>";
var data_hotelSpecial_data = [{
    "searchStr": "BNK",
    "displayName": "Ballina Byron",
    "imageUrl": "/us/en//~/_media/Global/Images/Package tiles/byron-bay.jpg"
}, {
    "searchStr": "AYQ",
    "displayName": "Ayers Rock",
    "imageUrl": "/us/en//~/_media/Global/Images/Package tiles/ayers-uluru.jpg"
}, {
    "searchStr": "SYD",
    "displayName": "Sydney",
    "imageUrl": "/us/en//~/_media/Global/Images/Package tiles/sydney1.jpg"
}, {
    "searchStr": "ADL",
    "displayName": "Adelaide",
    "imageUrl": "/us/en//~/_media/Global/Images/Package tiles/adelaide.jpg"
}, {
    "searchStr": "MEL",
    "displayName": "Melbourne",
    "imageUrl": "/us/en//~/_media/Global/Images/Package tiles/melbourne.jpg"
}, {
    "searchStr": "PER",
    "displayName": "Perth",
    "imageUrl": "/us/en//~/_media/Global/Images/Package tiles/perth.jpg"
}];
var data_hotelSpecialAgoda = [{
    "searchStr": "Ballina Byron"
}, {
    "searchStr": "Ayers Rock"
}, {
    "searchStr": "Sydney"
}, {
    "searchStr": "Adelaide"
}, {
    "searchStr": "Melbourne"
}, {
    "searchStr": "Perth"
}];
var json_agoda_api = "";
var agoda_param_apikey = "";
var agoda_param_siteid = "";
var agoda_param_LengthOfStay = "1";
var agoda_param_MinStarRating = "";
var agoda_param_MaxStarRating = "";
var agoda_param_Currency = "";
var agoda_param_Language = "";
var agoda_param_MinDailyRate = "";
var agoda_param_MaxDailyRate = "";
var agoda_param_MinDiscountPercentage = "15";
var agoda_param_MinReviewScore = "";
var agoda_discount_txt = "";
var agoda_rating_txt = "";
var agoda_priceString = "<span class='price'><span class='value'></span></span>";
var pe_switchedOn = false;
var pe_book_UID = "39b5379c652b";
var pe_booknow_UID = "39b5379c652b";
var pe_book_QID = "b59e5954ba6c";
var pe_booknow_QID = "9df496572198";
var pe_waitingPage = "/us/en/waiting-page";
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
var json_valid_dates = "/us/en/services/compactsearchservice?token=289&action=LoadValidDates";
var json_currencylist = "/us/en/services/compactsearchservice?token=289&action=LoadCurrencyList";
var message_saleDirectionBoth = "Flight is available in both directions";
var message_saleDirectionOne = "Flight is only available in the direction shown";
var findFlightsHeading = "Find Flights";
var importantInfoHeading = "Important Information";
var closeText = "Close";
var flight_academy_videos = "";
var flight_academy_xmlfile = "";
var booking_engine_currency = "";
var data_countryArray = ['USA', 'Australia', 'Cambodia', 'China (including Hong Kong SAR, Macau SAR and Taiwan)', 'Cook Islands', 'Fiji', 'France', 'Hong Kong', 'Indonesia', 'Italy', 'Japan', 'Macau', 'Malaysia', 'Myanmar', 'New Zealand', 'Philippines', 'Singapore', 'South Korea', 'Sri Lanka', 'Taiwan', 'Thailand', 'United Arab Emirates', 'United Kingdom', 'Vietnam'];
var data_locations = [
    [0, 'Honolulu', 'HNL'],
    [1, 'Adelaide', 'ADL'],
    [1, 'Airlie Beach', 'WSY'],
    [1, 'Albany', 'PER|ALH'],
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
    [1, 'Uluru (Ayers Rock)', 'AYQ|AYQ'],
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
    [8, 'Medan (Kualanamu)', 'KNO'],
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
    [14, 'Auckland', 'AKL'],
    [14, 'Christchurch', 'CHC'],
    [14, 'Dunedin', 'DUD'],
    [14, 'Napier', 'NPE'],
    [14, 'Nelson', 'NSN'],
    [14, 'New Plymouth', 'NPL'],
    [14, 'Palmerston North', 'PMR'],
    [14, 'Queenstown', 'ZQN'],
    [14, 'Wellington', 'WLG'],
    [15, 'Clark', 'CRK'],
    [15, 'Manila', 'MNL'],
    [16, 'Singapore', 'SIN'],
    [17, 'Seoul (Incheon)', 'ICN'],
    [18, 'Colombo', 'CMB'],
    [20, 'Bangkok', 'BKK|XBK'],
    [20, 'Chiang Mai', 'CNX'],
    [20, 'Hat Yai', 'HDY'],
    [20, 'Phuket', 'HKT'],
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
var data_flightOrigins = [0];
var data_flightDestinations = {
    'HNL': [{
        id: 1,
        code: 'ADL',
        curr: []
    }, {
        id: 100,
        code: 'AKL',
        curr: []
    }, {
        id: 32,
        code: 'AVV|GEX',
        curr: []
    }, {
        id: 7,
        code: 'BNE',
        curr: []
    }, {
        id: 101,
        code: 'CHC',
        curr: []
    }, {
        id: 10,
        code: 'CNS',
        curr: []
    }, {
        id: 75,
        code: 'DPS',
        curr: []
    }, {
        id: 14,
        code: 'DRW',
        curr: []
    }, {
        id: 22,
        code: 'HBA',
        curr: []
    }, {
        id: 26,
        code: 'LST',
        curr: []
    }, {
        id: 33,
        code: 'MEL',
        curr: []
    }, {
        id: 35,
        code: 'NTL',
        curr: []
    }, {
        id: 18,
        code: 'OOL',
        curr: []
    }, {
        id: 38,
        code: 'PER',
        curr: []
    }, {
        id: 111,
        code: 'SIN',
        curr: []
    }, {
        id: 43,
        code: 'SYD',
        curr: []
    }, {
        id: 45,
        code: 'TSV',
        curr: []
    }, {
        id: 31,
        code: 'VIZ|MEL',
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
    [0, 'Honolulu', 'CHNL', true, 'Octopus'],
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
    [1, 'Dunsborough', 'MRB', false, 'Ready Rooms'],
    [1, 'Gold Coast', 'OOL', false, 'Ready Rooms'],
    [1, 'Hamilton Island', 'HTI', false, 'Ready Rooms'],
    [1, 'Hayman Island', 'HIS', false, 'Ready Rooms'],
    [1, 'Hobart', 'HBA', false, 'Ready Rooms'],
    [1, 'Hunter Valley', 'HTV', false, 'Ready Rooms'],
    [1, 'Launceston', 'LST', false, 'Ready Rooms'],
    [1, 'Long Island', 'HAP', false, 'Ready Rooms'],
    [1, 'Mackay', 'MKY', false, 'Ready Rooms'],
    [1, 'Margaret River Region', 'A11', false, 'Ready Rooms'],
    [1, 'Melbourne', 'MEL', false, 'Ready Rooms'],
    [1, 'Newcastle', 'NTL', false, 'Ready Rooms'],
    [1, 'Noosa', 'NSA', false, 'Ready Rooms'],
    [1, 'Palm Cove', 'PCQ', false, 'Ready Rooms'],
    [1, 'Pemberton', 'PEB', false, 'Ready Rooms'],
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
    [8, 'Denpasar (Bali)', 'ABALI', true, 'Octopus'],
    [8, 'Jakarta', 'AJKT', true, 'Octopus'],
    [8, 'Medan', 'CMES', true, 'Octopus'],
    [8, 'Surabaya', 'CSUB', true, 'Octopus'],
    [10, 'Osaka', 'AOSA', true, 'Octopus'],
    [10, 'Tokyo', 'ATYO', true, 'Octopus'],
    [11, 'Macau', 'CMFM', true, 'Octopus'],
    [12, 'Kota Kinabalu', 'CBKI', true, 'Octopus'],
    [12, 'Kuala Lumpur', 'CKUL', true, 'Octopus'],
    [12, 'Kuching', 'CKCH', true, 'Octopus'],
    [12, 'Penang', 'CPEN', true, 'Octopus'],
    [13, 'Yangon', 'CRGN', true, 'Octopus'],
    [14, 'Auckland', 'CAKL', true, 'Octopus'],
    [14, 'Christchurch', 'CHC', false, 'Ready Rooms'],
    [14, 'Queenstown', 'ZQN', false, 'Ready Rooms'],
    [14, 'Rotorua', 'ROT', false, 'Ready Rooms'],
    [14, 'Wellington', 'WLG', false, 'Ready Rooms'],
    [15, 'Manila', 'CMNL', true, 'Octopus'],
    [16, 'Singapore', 'ASIN', true, 'Octopus'],
    [19, '', 'CTPE', true, 'Octopus'],
    [20, 'Bangkok', 'ABKK', true, 'Octopus'],
    [20, 'Phuket', 'AHKT', true, 'Octopus'],
    [23, 'Can Tho', 'CVCA', true, 'Octopus'],
    [23, 'Danang', 'CDANN', true, 'Octopus'],
    [23, 'Ha Noi', 'CHAN', true, 'Octopus'],
    [23, 'Ho Chi Minh City', 'CSGN', true, 'Octopus'],
    [23, 'Hue', 'SHUEZ', true, 'Octopus'],
    [23, 'Nha Trang', 'CNHAT', true, 'Octopus'],
    [23, 'Vinh', 'CVII', true, 'Octopus']
];
var data_hostelArray = [
    [0, 'Honolulu', 'CHonolulu;USA', false, 'Hostelworld'],
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
    [8, 'Bali - Jimbaran Bay', 'CJimbaran Bay;Indonesia', false, 'Hostelworld'],
    [8, 'Bali - Kuta Beach', 'CKuta Beach;Indonesia', false, 'Hostelworld'],
    [8, 'Bali - Nusa Dua', 'CNusa Dua;Indonesia', false, 'Hostelworld'],
    [8, 'Bali - Sanur', 'CSanur;Indonesia', false, 'Hostelworld'],
    [8, 'Bali - Ubud', 'CUbud;Indonesia', false, 'Hostelworld'],
    [8, 'Bali', 'CBali;Indonesia', false, 'Hostelworld'],
    [8, 'Jakarta', 'CJakarta;Indonesia', false, 'Hostelworld'],
    [8, 'Surabaya', 'CSurabaya;Indonesia', false, 'Hostelworld'],
    [10, 'Osaka', 'COsaka;Japan', false, 'Hostelworld'],
    [10, 'Tokyo', 'CTokyo;Japan', false, 'Hostelworld'],
    [11, 'Macau', 'CMacau;Macau', false, 'Hostelworld'],
    [12, 'Kota Kinabalu', 'CKota Kinabalu;Malaysia', false, 'Hostelworld'],
    [12, 'Kuala Lumpur', 'CKuala Lumpur;Malaysia', false, 'Hostelworld'],
    [12, 'Kuching', 'CKuching;Malaysia', false, 'Hostelworld'],
    [12, 'Penang', 'CPenang;Malaysia', false, 'Hostelworld'],
    [14, 'Auckland', 'CAuckland;New Zealand', false, 'Hostelworld'],
    [14, 'Christchurch', 'CChristchurch;NewZealand', false, 'Hostelworld'],
    [14, 'Queenstown', 'CQueenstown;New Zealand', false, 'Hostelworld'],
    [14, 'Rotorua', 'CRotorua;New Zealand', false, 'Hostelworld'],
    [14, 'Wellington', 'CWellington;New Zealand', false, 'Hostelworld'],
    [15, 'Manila', 'CManila;Philippines', false, 'Hostelworld'],
    [16, 'Singapore', 'CSingapore;Singapore', false, 'Hostelworld'],
    [19, 'Taipei', 'CTaipei;Taiwan', false, 'Hostelworld'],
    [20, 'Bangkok', 'CBangkok;Thailand', false, 'Hostelworld'],
    [20, 'Phuket', 'CPhuket;Thailand', false, 'Hostelworld'],
    [23, 'Danang', 'CDanang;Vietnam', false, 'Hostelworld'],
    [23, 'Ho Chi Minh City', 'CHo Chi Minh City;Vietnam', false, 'Hostelworld'],
    [23, 'Hoi An', 'CHoi An;Vietnam', false, 'Hostelworld'],
    [23, 'Hue', 'CHue;Vietnam', false, 'Hostelworld'],
    [23, 'Nha Trang', 'CNha Trang;Vietnam', false, 'Hostelworld']
];
/* WARNING: Country France not found in allLocations array. */
/* WARNING: Country Hong Kong not found in allLocations array. */
/* WARNING: Country Italy not found in allLocations array. */
/* WARNING: Country Macau not found in allLocations array. */
/* WARNING: Country Taiwan not found in allLocations array. */
/* WARNING: Country United Arab Emirates not found in allLocations array. */
/* WARNING: Country United Kingdom not found in allLocations array. */