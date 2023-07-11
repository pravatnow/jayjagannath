 function getNumbers() {
      var district = document.getElementById("district").value.trim().toLowerCase();
      var resultElement = document.getElementById("result");
      
      // Clear previous results
      resultElement.innerHTML = "";

         // PN data for numbers
      var numbers = [];
      if (district === "cuttack") {
        numbers = [
        { "department": "Local Police Station", "number": "100" },
{ "department": "Elder Person Help Line", "number": "1090" },
{ "department": "Women Help Line", "number": "1091" },
{ "department": "Children Help Line", "number": "1098" },
{ "department": "Fire Help Line", "number": "101" },
{ "department": "Ambulance Help Line", "number": "108" },
{ "department": "Janani Ambulance Help Line", "number": "102" },
{ "department": "Traffic Help Line", "number": "1095" },
{ "department": "N.H.A.I. Help Line", "number": "1033" },

        ];
      } else if (district === "khordha") {
        numbers = [
        { "department": "Local Police Station", "number": "100" },
{ "department": "Elder Person Help Line", "number": "1090" },
{ "department": "Women Help Line", "number": "1091" },
{ "department": "Children Help Line", "number": "1098" },
{ "department": "Fire Help Line", "number": "101" },
{ "department": "Ambulance Help Line", "number": "108" },
{ "department": "Janani Ambulance Help Line", "number": "102" },
{ "department": "Traffic Help Line", "number": "1095" },
{ "department": "N.H.A.I. Help Line", "number": "1033" }
        ];
      } else if (district === "angul") {
        numbers = [
        { "department": "District Helpline Number (COVID-19)", "number": "1077, 06764-234218, 06764-230980" },
{ "department": "Ambulance", "number": "102, 108" },
{ "department": "Fire Station", "number": "101" },
{ "department": "Police Station", "number": "100" },
{ "department": "Call Alert (Crime Branch)", "number": "1090" },
{ "department": "Women Helpline", "number": "1091" },
{ "department": "Child Helpline", "number": "1098" },
{ "department": "Railway enquiry", "number": "139" },
{ "department": "All India Helpline for Passengers", "number": "138" },
{ "department": "Chief Minister Helpline", "number": "181" },
{ "department": "Indian Railway Security Helpline", "number": "182" },
{ "department": "Road Accident Management Service", "number": "1033" },
{ "department": "Public Grievance Cell DOT Hq", "number": "1063" },
{ "department": "Anti Corruption Helpline", "number": "1064" },
{ "department": "Relief Commission for Natural Calamities", "number": "1070" },
{ "department": "Rail Accident Helpline (Angul to Sambalpur)", "number": "1072" },
{ "department": "Rail Accident Helpline (Angul to Bhubaneswar)", "number": "1073" },
{ "department": "Control Room for District Collector, Angul", "number": "1077" },
{ "department": "National AIDS Helpline to NACO", "number": "1097" },
{ "department": "Free Legal Service Helpline", "number": "15100" },
{ "department": "Sashastra Seema Bal (SSB)", "number": "1903" },
{ "department": "Complaint of Electricity", "number": "1912" }
        ];

    } else if (district === "jagatsinghpur") {
        numbers = [
        { "department": "Local Police Station", "number": "100" },
{ "department": "Elder Person Help Line", "number": "1090" },
{ "department": "Children Help Line", "number": "1098" },
{ "department": "Fire Help Line", "number": "101" },
{ "department": "Ambulance Help Line", "number": "108" },
{ "department": "Janani Ambulance Help Line", "number": "102" }

    ];

} else if (district === "kendrapara") {
        numbers = [
        { "department": "Police", "number": "100" },
{ "department": "Fire", "number": "101" },
{ "department": "Ambulance (Janani Surakshya)", "number": "102" },
{ "department": "Traffic Police", "number": "103" },
{ "department": "State level helpline for Health", "number": "104" },
{ "department": "Ambulance", "number": "108" },
{ "department": "All in one Emergency Number", "number": "112" },
{ "department": "Indian Railway General Enquiry", "number": "131" },
{ "department": "Railway Enquiry", "number": "139" },
{ "department": "Domestic abuse and sexual violence - Women's Helpline", "number": "181" },
{ "department": "Directory Enquiry Service", "number": "197" },
{ "department": "Telephone Complaint Booking", "number": "198" },
{ "department": "Anti Corruption Helpline", "number": "1031" },
{ "department": "Emergency Relief Center on National Highways", "number": "1033" },
{ "department": "Anti Poison", "number": "1066" },
{ "department": "Air Accident", "number": "1071" },
{ "department": "Train Accident", "number": "1072" },
{ "department": "Road Accident/Traffic Help line", "number": "1073" },
{ "department": "Control room of District Collector/Magistrate", "number": "1077" },
{ "department": "Anti Terror Helpline/Alert All India", "number": "1090" },
{ "department": "Women Help line in Distress", "number": "1091" },
{ "department": "Earthquake Help line Service", "number": "1092" },
{ "department": "Natural Disaster Control room", "number": "1096" },
{ "department": "AIDS helpline", "number": "1097" },
{ "department": "Child abuse hotline", "number": "1098" },
{ "department": "Central Accident and Trauma Services", "number": "1099" },
{ "department": "Kisan Call Center", "number": "1551" },
{ "department": "LPG Emergency helpline Number", "number": "1906" },
{ "department": "Blood bank Information", "number": "1910" },
{ "department": "Eye Donation /Eye bank Information Service", "number": "1919" },
{ "department": "Aadhar Card-UIDAI", "number": "1947" },
{ "department": "Election Commission of India", "number": "1950" },
{ "department": "District Emergency Kendrapara", "number": "06727-232893" },
{ "department": "Indian Railway General Enquiry", "number": "1320, 131, 1321" },
{ "department": "National Consumer Helpline", "number": "1800-11-4000" },
{ "department": "Sramika Sahayata Helpline", "number": "155368/1800-3456703" }

    ];





} else if (district === "dhenkanal") {
        numbers = [
        { "department": "Revenue Helpline", "number": "1800-3002-6314" },
{ "department": "District Emergency Operation Centre", "number": "06762-221376" },
{ "department": "Child Helpline", "number": "1098" },
{ "department": "Women Helpline", "number": "1091" },
{ "department": "Crime Stopper", "number": "1090" },
{ "department": "Police Station", "number": "100" },
{ "department": "Fire Station", "number": "101" },
{ "department": "Ambulance", "number": "108" },
{ "department": "Janani Ambulance", "number": "102" },
{ "department": "Election Helpline", "number": "1950" }

    ];


} else if (district === "puri") {
        numbers = [
        { "department": "POLICE STATION HELP LINE", "number": "100" },
{ "department": "ELDER PERSON HELP LINE", "number": "1090" },
{ "department": "WOMEN HELP LINE", "number": "1091" },
{ "department": "CHILDREN HELP LINE", "number": "1098" },
{ "department": "FIRE STATION HELP LINE", "number": "101" },
{ "department": "AMBULANCE HELP LINE", "number": "108" },
{ "department": "JANANI EXPRESS AMBULANCE", "number": "102" },
{ "department": "NATIONAL HIGHWAY HELP LINE", "number": "1033" }

    ];

} else if (district === "jajpur") {
        numbers = [
        { "department": "Local Police station", "number": "100" },
{ "department": "Fire", "number": "101" },
{ "department": "Women helpline", "number": "1091" },
{ "department": "Child help Line", "number": "1098" },
{ "department": "Ambulance", "number": "108" },
{ "department": "Janani Ambulance", "number": "102" },
{ "department": "NHAI", "number": "1033" },
{ "department": "Elder Person help Line", "number": "1090" }

    ];

} else if (district === "kendujhar") {
        numbers = [
        { "department": "Disaster Emergency Operation Center", "number": "06766-255437/256911, Toll Free-177" },
{ "department": "Local Police Station", "number": "100" },
{ "department": "Covid Help Line", "number": "104/1075" },
{ "department": "Unified Emergency Help line", "number": "112" },
{ "department": "Elder Person Help Line", "number": "1090" },
{ "department": "Women Help Line", "number": "1091" },
{ "department": "Student Help Line", "number": "1098/18003456722" },
{ "department": "Fire Station Help Line", "number": "101" },
{ "department": "Ambulance Help Line", "number": "108" },
{ "department": "Janani Ambulance Help Line", "number": "102" },
{ "department": "Traffic Help Line", "number": "1095" },
{ "department": "N.H.A.I. Help Line", "number": "1033" },
{ "department": "BSNL Help Line", "number": "1503/1800-180-1503" },
{ "department": "Women’s Disaster Help Line", "number": "181" }

    ];

} else if (district === "bhadrak") {
        numbers = [
        { "department": "POLICE STATION HELP LINE", "number": "100" },
{ "department": "ELDER PERSON HELP LINE", "number": "1090" },
{ "department": "WOMEN HELP LINE", "number": "1091" },
{ "department": "CHILDREN HELP LINE", "number": "1098" },
{ "department": "FIRE STATION HELP LINE", "number": "101" },
{ "department": "AMBULANCE HELP LINE", "number": "108" },
{ "department": "JANANI EXPRESS AMBULANCE", "number": "102" },
{ "department": "NATIONAL HIGHWAY HELP LINE", "number": "1033" }

    ];

} else if (district === "malkangiri") {
        numbers = [

        { "department": "District Emergency, Malkangiri", "number": "1077 (Toll-free), 06861-231372" },
{ "department": "Police Station", "number": "100" },
{ "department": "Fire Station", "number": "112" },
{ "department": "Ambulance", "number": "102" },
{ "department": "Emergency Medical Service", "number": "108" },
{ "department": "Helpline No for Women in Distress", "number": "7827170170" },
{ "department": "Women Distress", "number": "181" },
{ "department": "Women Helpline", "number": "1091" },
{ "department": "Labour Helpline", "number": "155368" },
{ "department": "Children Helpline", "number": "1098" },
{ "department": "Kisan Call Center", "number": "1551" },
{ "department": "MyGov Toll Free Number for MannKiBaat for ideas and suggestions", "number": "1800-11-7800" },
{ "department": "Aadhar Card-UIDAI", "number": "1947" }

];



} else if (district === "mayurbhanj") {
        numbers = [

        { "department": "Child Helpline", "number": "1098" },
{ "department": "Police", "number": "100" },
{ "department": "Fire", "number": "101" },
{ "department": "State Level: Student HelpLine (Toll-free)", "number": "1800 345 6722" },
{ "department": "District Level: SAMPARKA Helpline", "number": "1800 345 6732" },
{ "department": "Help line no for Women in distress", "number": "1091" },
{ "department": "Citizen’s Call Center", "number": "155300" },
{ "department": "Ambulance Helpline", "number": "108/102" },
{ "department": "COVID-19 State Helpline", "number": "104" },
{ "department": "COVID-19 State Special Tele Medicine Helpline", "number": "14410" }
];



} else if (district === "balangir") {
        numbers = [
          { "department": "Local Police Station", "number": "100" },
          { "department": "Elder Person Help Line", "number": "1090" },
          { "department": "Women Help Line", "number": "1091" },
          { "department": "Children Help Line", "number": "1098" },
          { "department": "Fire Help Line", "number": "101" },
          { "department": "Ambulance Help Line", "number": "108" },
          { "department": "Janani Ambulance Help Line", "number": "102" },
          { "department": "Traffic Help Line", "number": "1095" },
          { "department": "N.H.A.I. Help Line", "number": "1033" }
];

} else if (district === "bargarh") {
        numbers = [
{ "department": "Local Police Station", "number": "100" },
{ "department": "Elder Person Help Line", "number": "1090" },
{ "department": "Women Help Line", "number": "1091" },
{ "department": "Children Help Line", "number": "1098" },
{ "department": "Fire Help Line", "number": "101" },
{ "department": "Ambulance Help Line", "number": "108" },
{ "department": "Janani Ambulance Help Line", "number": "102" },
{ "department": "Traffic Help Line", "number": "1095" },
{ "department": "N.H.A.I. Help Line", "number": "1033" }

];



} else if (district === "baleswar") {
        numbers = [
        { "department": "POLICE STATION HELP LINE", "number": "100" },
{ "department": "ELDER PERSON HELP LINE", "number": "1090" },
{ "department": "WOMEN HELP LINE", "number": "1091" },
{ "department": "CHILDREN HELP LINE", "number": "1098" },
{ "department": "FIRE STATION HELP LINE", "number": "101" },
{ "department": "AMBULANCE HELP LINE", "number": "108" },
{ "department": "JANANI EXPRESS AMBULANCE", "number": "102" },
{ "department": "NATIONAL HIGHWAY HELP LINE", "number": "1033" }
];


} else if (district === "koraput") {
        numbers = [
        { "department": "District Help Line", "number": "1077" },
{ "department": "Local Police Station", "number": "100" },
{ "department": "Elder Person Help Line", "number": "1090" },
{ "department": "Women Help Line", "number": "1091" },
{ "department": "Children Help Line", "number": "1098" },
{ "department": "Coastal helpline", "number": "1093" },
{ "department": "Fire Help Line", "number": "101" },
{ "department": "Ambulance Help Line", "number": "108" },
{ "department": "Janani Ambulance Help Line", "number": "102" },
{ "department": "Traffic Help Line", "number": "1095" },
{ "department": "N.H.A.I. Help Line", "number": "1033" }
];

} else if (district === "kalahandi") {
        numbers = [
        { "department": "District Control Room", "number": "06670-0230455" },
{ "department": "Fire-station", "number": "101" },
{ "department": "Police", "number": "100" },
{ "department": "Land Line Complain Booking", "number": "198" },
{ "department": "Citizen’s Call center", "number": "155300" },
{ "department": "Child Helpline", "number": "1098" },
{ "department": "Women Helpline", "number": "1091" },
{ "department": "Crime Stopper", "number": "1090" },
{ "department": "Rescue & Relief", "number": "1070" },
{ "department": "Ambulance", "number": "102, 108" },
{ "department": "Social Security", "number": "1800 345 7150" }
];

} else if (district === "subarnapur") {
        numbers = [
        { "department": "Local Police Station", "number": "100" },
{ "department": "Elder Person Help Line", "number": "1090" },
{ "department": "Women Help Line", "number": "1091" },
{ "department": "Children Help Line", "number": "1098" },
{ "department": "Fire Help Line", "number": "101" },
{ "department": "Ambulance Help Line", "number": "108" },
{ "department": "Janani Ambulance Help Line", "number": "102" }
];

} else if (district === "kandhamal") {
        numbers = [
            
        { "department": "Local Police Station", "number": "100" },
{ "department": "Elder Person Help Line", "number": "1090" },
{ "department": "Women Help Line", "number": "1091" },
{ "department": "Children Help Line", "number": "1098" },
{ "department": "Fire Help Line", "number": "101" },
{ "department": "Ambulance Help Line", "number": "108" },
{ "department": "Janani Ambulance Help Line", "number": "102" },
{ "department": "Traffic Help Line", "number": "1095" },
{ "department": "N.H.A.I. Help Line", "number": "1033" }
];

} else if (district === "boudh") {
        numbers = [
        { "department": "Local Police Station", "number": "100" },
{ "department": "Elder Person Help Line", "number": "1090" },
{ "department": "Women Help Line", "number": "1091" },
{ "department": "Children Help Line", "number": "1098" },
{ "department": "Fire Help Line", "number": "101" },
{ "department": "Ambulance Help Line", "number": "108" },
{ "department": "Janani Ambulance Help Line", "number": "102" },
{ "department": "Traffic Help Line", "number": "1095" },
{ "department": "NHAI Help Line", "number": "1033" },
{ "department": "BIJU SWASTHYA KALYAN YOJANA", "number": "155369" }
];


} else if (district === "nabarangpur") {
        numbers = [
        { "department": "District Emergency, Nabarangpur", "number": "1077 (Toll-free)" },
{ "department": "Police Station", "number": "100 (Toll-free), 06858-222301 (SP Office, Nabarangpur)" },
{ "department": "Fire Station", "number": "101" },
{ "department": "Ambulance", "number": "102" },
{ "department": "Emergency Medical Service", "number": "108" },
{ "department": "Women Distress", "number": "181" },
{ "department": "SwadharGruha(Women) Helpline", "number": "1091 (Tollfree)" },
{ "department": "Labour Helpline", "number": "155368" },
{ "department": "Children Helpline", "number": "1098" },
{ "department": "Kisan Call Center", "number": "18001801551" },
{ "department": "(APICOL)", "number": "0674-2354125,2354006" },
{ "department": "MyGov Toll Free Number for MannKiBaat for ideas and suggestions", "number": "1800-11-7800" },
{ "department": "Aadhar Card-UIDAI", "number": "1947" },
{ "department": "FS & CW Department, Odisha, Bhubaneswar", "number": "1967" },
{ "department": "Consumer Advice Centre, Bhubaneswar", "number": "18003456760" },
{ "department": "Citizen’s Call Center", "number": "155300" },
{ "department": "Crime Stopper", "number": "1090" }
];


} else if (district === "deogarh") {
        numbers = [
        { "department": "Ambulance Help Line", "number": "108" },
{ "department": "Children Help Line", "number": "1098" },
{ "department": "Elder Person Help Line", "number": "1090" },
{ "department": "Emergency Helpline", "number": "1077" },
{ "department": "Fire Help Line", "number": "101" },
{ "department": "Janani Ambulance Help Line", "number": "102" },
{ "department": "Local Police Station", "number": "100" },
{ "department": "N.H.A.I. Help Line", "number": "1033" },
{ "department": "Traffic Help Line", "number": "1095" },
{ "department": "Women Help Line", "number": "1091" }
];




} else if (district === "gajapati") {
        numbers = [
        { "department": "Local Police Station", "number": "100" },
{ "department": "Elder Person Help Line", "number": "1090" },
{ "department": "Women Help Line", "number": "1091" },
{ "department": "Children Help Line", "number": "1098" },
{ "department": "Fire Help Line", "number": "101" },
{ "department": "Ambulance Help Line", "number": "108" },
{ "department": "Janani Ambulance Help Line", "number": "102" },
{ "department": "Odisha Citizen’s Call Center", "number": "155335" },
{ "department": "Rescue & Relief", "number": "1070" }
];


} else if (district === "ganjam") {
        numbers = [
        { "department": "Child Helpline", "number": "1098" },
{ "department": "Women Helpline", "number": "1091" },
{ "department": "Ambulance", "number": "108" },
{ "department": "Local Police Station", "number": "100" },
{ "department": "Fire Help Line", "number": "101" },
{ "department": "Janani Ambulance Help Line", "number": "102" },
{ "department": "(COVID-19) District Helpline Number", "number": "9439983956" },
{ "department": "(COVID-19) District Helpline Number", "number": "0680-2224798" },
{ "department": "Traffic Help Line", "number": "1095" },
{ "department": "N.H.A.I. Help Line", "number": "1033" },
{ "department": "Citizen’s Call center", "number": "155300" }
];


} else if (district === "sundergarh") {
        numbers = [
        { "department": "National Toll Free Number (Covid)", "number": "1075" },
{ "department": "State COVID Helpline Number", "number": "104" },
{ "department": "Mo Sarkar Helpline Number", "number": "14545" },
{ "department": "Local Police Station", "number": "100, 112" },
{ "department": "District Helpline (Emergency)", "number": "1800 345 7461" },
{ "department": "Rourkela Helpline", "number": "1800 345 7468" },
{ "department": "Children Helpline", "number": "1098" },
{ "department": "Elders Help Line", "number": "1090" },
{ "department": "Women Helpline", "number": "1091" },
{ "department": "Fire Helpline", "number": "101" },
{ "department": "District Ambulance (DMF)", "number": "7077311234" },
{ "department": "Ambulance Helpline", "number": "108, 102" },
{ "department": "Janani Ambulance Helpline", "number": "102" },
{ "department": "Traffic Helpline", "number": "1095" },
{ "department": "N.H.A.I Helpline", "number": "1033" },
{ "department": "Railway Enquiry", "number": "139/131" }
];




} else if (district === "sambalpur") {
        numbers = [
        { "department": "School Student Helpline- Sampark Online", "number": "18003456722" },
{ "department": "Local Police Station", "number": "100" },
{ "department": "Crime Stopper", "number": "1090" },
{ "department": "Women Help Line", "number": "1091" },
{ "department": "Children Help Line (CHILDLINE)", "number": "1098" },
{ "department": "Fire Help Line", "number": "101" },
{ "department": "Janani Ambulance Help Line", "number": "102" },
{ "department": "Traffic Help Line", "number": "1095" },
{ "department": "N.H.A.I. Help Line", "number": "1033" },
{ "department": "Ambulance Help Line", "number": "108" }
];



} else if (district === "rayagada") {
        numbers = [
        { "department": "Local Police Station", "number": "100" },
{ "department": "Elder Person Help Line", "number": "1090" },
{ "department": "Women Help Line", "number": "1091" },
{ "department": "Children Help Line", "number": "1098" },
{ "department": "Fire Help Line", "number": "101" },
{ "department": "Ambulance Help Line", "number": "108" },
{ "department": "Janani Ambulance Help Line", "number": "102" },
{ "department": "Traffic Help Line", "number": "1095" },
{ "department": "N.H.A.I. Help Line", "number": "1033" }
];



} else if (district === "bhadrak") {
        numbers = [

];


} else if (district === "nayagarh") {
        numbers = [
        { "department": "Local Police Station", "number": "100" },
{ "department": "Fire station", "number": "101" },
{ "department": "Ambulance", "number": "108" },
{ "department": "Janani Express", "number": "102" },
{ "department": "Women Helpline", "number": "181" },
{ "department": "Child Helpline", "number": "1098" },
{ "department": "Elder Person Helpline", "number": "1090" },
{ "department": "Traffic Helpline", "number": "1095" },
{ "department": "Electricity Issues Helpline", "number": "1912" },
{ "department": "N.H.A.I Helpline", "number": "1033" }
];



} else if (district === "pune") {
        numbers = [
        { "department": "Election", "number": "1950" },
{ "department": "Police", "number": "100" },
{ "department": "Ambulance", "number": "108" },
{ "department": "Fire Brigade", "number": "104" },
{ "department": "Pune Municipal Corporation", "number": "1800-1030-222" },
{ "department": "Disaster Management Control Room", "number": "1077" },
{ "department": "Child Helpline", "number": "1098" },
{ "department": "Women Helpline", "number": "1091" },
{ "department": "NIC Service Desk", "number": "1800-111-555" },
{ "department": "Corona Virus Central Helpline", "number": "011-23978043/46" },
{ "department": "Corona Virus Maharashtra Helpline", "number": "020-26127394" }
];


} else if (district === "bhdrak") {
        numbers = [

];

} else if (district === "bhdrak") {
        numbers = [

];

} else if (district === "bhdrak") {
        numbers = [

];

} else if (district === "bhdrak") {
        numbers = [

];

} else if (district === "bhdrak") {
        numbers = [

];

} else if (district === "patiala") {
        numbers = [
        { "department": "Bus Stand, Patiala", "number": "01752311718" },
{ "department": "Railway Station, Patiala", "number": "131 132" },
{ "department": "Police Station", "number": "100" },
{ "department": "Fire", "number": "101" },
{ "department": "Ambulance", "number": "108" },
{ "department": "Flood Control Room", "number": "01752359999" },
{ "department": "Emergency (Rajindra Hospital)", "number": "01752214971" },
{ "department": "Telephone Inquiry", "number": "197" },
{ "department": "Covid-19 Helpline Number", "number": "0175-2350550" }
];


} else if (district === "jharsuguda") {
        numbers = [
        { "department": "Email Support", "number": "jsgmunicipality@yahoo.com" },
        { "department": "WhatsApp Support", "number": "+91-9827594648" },
        { "department": "E-mail ID", "number": "spjsd.orpol@nic.in" },
{ "department": "Emergency Contact (DIB)", "number": "06645-272566" }

];

} else if (district === "nuapada") {
        numbers = [
        { "department": "District Emergency, Nuapada", "number": "1077 (Toll-free), 06678-225357" },
{ "department": "Police Station", "number": "100 (Toll-free), 07749879020 (DIB, Nuapada)" },
{ "department": "Fire Station", "number": "101" },
{ "department": "Ambulance", "number": "102" },
{ "department": "Emergency Medical Service", "number": "108" },
{ "department": "Women Distress", "number": "181" },
{ "department": "SwadharGruha (Women) Helpline", "number": "1091 (Toll-free)" },
{ "department": "Labour Helpline", "number": "155368" },
{ "department": "Children Helpline", "number": "1098" },
{ "department": "Kisan Call Center", "number": "18001801551" },
{ "department": "(APICOL)", "number": "0674-2354125, 2354006" },
{ "department": "MyGov Toll Free Number for MannKiBaat for ideas and suggestions", "number": "1800-11-7800" },
{ "department": "Aadhar Card-UIDAI", "number": "1947" },
{ "department": "FS & CW Department, Odisha, Bhubaneswar", "number": "1967" },
{ "department": "Consumer Advice Centre, Bhubaneswar", "number": "18003456760" },
{ "department": "Citizen’s Call Center", "number": "155300" },
{ "department": "Crime Stopper", "number": "1090" }
];



} else if (district === "kullu") {
        numbers = [
        { "department": "Ambulance (Emergency Services)", "number": "108" },
{ "department": "Fire", "number": "101" },
{ "department": "Police", "number": "100" },
{ "department": "Deputy Commissioner (DC)", "number": "01902-222727" },
{ "department": "Superintendent of Police (SP)", "number": "01902-224700" },
{ "department": "Additional Deputy Commissioner (ADC)/Additional District Magistrate (ADM)", "number": "01902-222226" },
{ "department": "District Emergency Operations Cell (DEOC)", "number": "1077" },
{ "department": "Women Helpline", "number": "1091" },
{ "department": "Child Helpline", "number": "1098" },
{ "department": "Hoshiyar Singh Helpline", "number": "1090" },
{ "department": "Gudiya Helpline", "number": "1515" }
];


} else if (district === "shimla") {
        numbers = [
        { "department": "Gudiya Helpline", "number": "1515" },
{ "department": "Hoshiyar Singh Helpline", "number": "1090" },
{ "department": "Women Helpline", "number": "1091" },
{ "department": "Child Helpline", "number": "1098" },
{ "department": "Medical Helpline", "number": "102, 108" },
{ "department": "Cyber Crime Cell", "number": "0177-2621714(191)" },
{ "department": "Disaster Management Toll Free Number", "number": "1077" },
{ "department": "Disaster Management Control Room", "number": "2812344" },
{ "department": "Fire", "number": "101" },
{ "department": "Police", "number": "100" },
{ "department": "Report Against Corruption", "number": "0177-2629813" },
{ "department": "Registering complaints through SMS and WhatsApp messages pertaining to unauthorized/offending hoardings/posters/banners/arches/advertisements", "number": "Toll Free: 1916/Whats App: 9805201916" }
];


} else if (district === "ranchi") {
        numbers = [
        { "department": "Child Helpline", "number": "1098" },
{ "department": "Women Helpline", "number": "181" },
{ "department": "Police Helpline", "number": "100" },
{ "department": "Ambulance Service", "number": "108" }
];


} else if (district === "krishna") {
        numbers = [
        { "department": "Police", "number": "100" },
{ "department": "Fire", "number": "101" },
{ "department": "Ambulance", "number": "108" },
{ "department": "BSNL Helpline", "number": "1800-180-1503" },
{ "department": "State Call Centre", "number": "1100" }
];




} else if (district === "ahmedabad") {
        numbers = [
        { "department": "Citizen’s Call Center Helpline", "number": "155303" },
{ "department": "Child Helpline", "number": "1098" },
{ "department": "Women Helpline", "number": "181" },
{ "department": "Crime Stopper Helpline", "number": "1090" },
{ "department": "Rescue & Relief Helpline", "number": "1070" },
{ "department": "Ambulance Helpline", "number": "108, 102" },
{ "department": "District Helpline", "number": "+91 79 1077" },
{ "department": "District EOCs Helpline NO", "number": "+91 79 27560511" }
];



} else if (district === "gurugram") {
        numbers = [
        { "department": "Child Helpline", "number": "1098" },
{ "department": "Women Helpline", "number": "1091" },
{ "department": "Crime Stopper", "number": "1090" },
{ "department": "Commissioner of Rescue and Relief", "number": "1070" },
{ "department": "Municipal Corporation Gurugram Helpline No.", "number": "18001801817" },
{ "department": "UIDAI Toll Free No.", "number": "18003001947" }
];


} else if (district === "nagpur") {
        numbers = [
        { "department": "Citizen's Call center", "number": "155300" },
{ "department": "Child Helpline", "number": "1098" },
{ "department": "Women Helpline", "number": "1091" },
{ "department": "Crime Branch", "number": "0712-2566766" },
{ "department": "NIC Service Desk", "number": "1800-111-555" },
{ "department": "Ambulance", "number": "102, 108" },
{ "department": "PDS Helpline", "number": "1800-22-4950" },
{ "department": "Social Service Branch (SSB)", "number": "0712-2566628" }
];


} else if (district === "karnataka") {
        numbers = [
        { "department": "State Helpline Number", "number": "1902" },
{ "department": "Emergency Medical Support", "number": "104/97456 97456" },
{ "department": "Dasoha Food Helpline", "number": "155214" },
{ "department": "State COVID Control Room", "number": "1075, 080-46848600, 080-66692000, 9745697456, 080-1070 (SEOC), 9980299802 (Department of Information and Public Relations)" },
{ "department": "Health & Family Welfare", "number": "104" },
{ "department": "Food & Civil Suppliers", "number": "1967/18000-425-9339" },
{ "department": "Agriculture", "number": "080-22212818/080-22210237" },
{ "department": "Public Grievances", "number": "080-44554455" },
{ "department": "Ambulance", "number": "102/108" },
{ "department": "Women", "number": "181" },
{ "department": "Police", "number": "100" },
{ "department": "BBMP", "number": "080-22660000" },
{ "department": "Labour", "number": "155214" },
{ "department": "BESCOM", "number": "1912" },
{ "department": "BWSSB", "number": "1916" },
{ "department": "Social Welfare Department", "number": "155214" },
{ "department": "MGNREGA", "number": "18004258666" }
];

} else if (district === "kolkata") {
        numbers = [
        { "department": "Traffic Helpline", "number": "2000 / 2001" },
{ "department": "Senior Citizen Helpline", "number": "98300 88884" },
{ "department": "Women Helpline", "number": "1091" },
{ "department": "Medical Helpline", "number": "98300 79999" }
];

} else if (district === "delhi") {
        numbers = [
        { "department": "Child Helpline", "number": "1098" },
{ "department": "Disaster Helpline", "number": "1077" },
{ "department": "Women Helpline", "number": "1091" },
{ "department": "Doorstep Delivery", "number": "1076" },
{ "department": "Police", "number": "100" },
{ "department": "Fire & Rescue", "number": "101" },
{ "department": "Ambulance", "number": "102" },
{ "department": "NGMS", "number": "155271" }
];

} else if (district === "indore") {
        numbers = [
        { "department": "MY Hospital Indore", "number": "0731-2438100" },
{ "department": "INDORE POLICE", "number": "100" },
{ "department": "FIRE", "number": "101" },
{ "department": "AMBULANCE SERVICE", "number": "108" },
{ "department": "Senior Citizen Helpline", "number": "0731-2510308" },
{ "department": "CHILDREN HELPLINE", "number": "1098" },
{ "department": "DEAD ANIMAL", "number": "07312535555" },
{ "department": "SNAKE PICKER", "number": "9179137698" },
{ "department": "Women Helpline", "number": "1091" },
{ "department": "Election Helpline", "number": "1950" }
];



} else if (district === "thane") {
        numbers = [
        { "department": "PDS Helpline", "number": "1800-22-4950 & 1967" },
{ "department": "Child Helpline", "number": "1098" },
{ "department": "Women Helpline", "number": "1091" },
{ "department": "Crime Stopper", "number": "1090" },
{ "department": "Rescue & Relief", "number": "1070" },
{ "department": "Ambulance", "number": "102, 108" },
{ "department": "Police Control Room", "number": "100" },
{ "department": "Fire", "number": "101" },
{ "department": "IRCTC Help Line", "number": "1800-111-139" },
{ "department": "Anti Ragging", "number": "1800-180-5522" },
{ "department": "Kisan Call Centre", "number": "1551" },
{ "department": "Railway Enquiry", "number": "139" },
{ "department": "NIC Helpdesk", "number": "1800 111 555" }
];

} else if (district === "vadodara") {
        numbers = [
        { "department": "Police", "number": "100, 2415111" },
{ "department": "Fire Control Room", "number": "101" },
{ "department": "Disaster Cell", "number": "2427592" },
{ "department": "Ambulance Service", "number": "108" },
{ "department": "VMC Helpline", "number": "1800-233-0265" },
{ "department": "Gas Emergency", "number": "2344618" },
{ "department": "Helpline for Children", "number": "1098" },
{ "department": "Abhyam Women Helpline", "number": "181" },
{ "department": "Cyber Crime Helpline", "number": "1800-599-901,0265-2513630" },


{ "department": "VCARE", "number": "9409027166" },
{ "department": "VSPCA", "number": "6555552" },
{ "department": "GSPCA", "number": "9825011117" },
{ "department": "SSG Hospital", "number": "2424848" },
{ "department": "Bhailal Amin General Hospital", "number": "2286666" }
];

} else if (district === "ludhiana") {
        numbers = [
        { "department": "Police", "number": "100" },
{ "department": "Ambulance Health", "number": "108" },
{ "department": "HelpLine for Women", "number": "1091" },
{ "department": "Traffic HelpLine", "number": "1073" },
{ "department": "Fire department", "number": "101" },
{ "department": "Railway", "number": "139" },
{ "department": "Blood Bank,Red Cross Ludhiana", "number": "0161-2441257" }
];

} else if (district === "surat") {
        numbers = [
        { "department": "Emergencies District Helpline", "number": "+912612663200", "alt_number": "1077" },
{ "department": "District EOCs Helpline", "number": "+912612663200" },
{ "department": "Woman Helpline", "number": "1091" },
{ "department": "Child Helpline", "number": "1098" },
{ "department": "Ambulance helpline", "number": "108" },
{ "department": "Fire & Rescue", "number": "101" },
{ "department": "Commissioner of Rescue & Relief", "number": "1070" }
];
} else if (district === "bhopal") {
        numbers = [
        { "department": "CM Helpline", "number": "181" },
{ "department": "Child Helpline", "number": "1098" },
{ "department": "Police Helpline- DIAL100", "number": "100" },
{ "department": "Fire Emergency", "number": "101" },
{ "department": "Ambulance", "number": "108" },
{ "department": "Women Helpline", "number": "1090" },
{ "department": "Voter Helpline", "number": "1950" }
];

} else if (district === "agra") {
        numbers = [
        { "department": "CM Helpline", "number": "1076" },
{ "department": "NIC Service Desk", "number": "1800111555" },
{ "department": "Child Helpline", "number": "1098" },
{ "department": "UP 112 (Police)", "number": "112" },
{ "department": "Women Helpline", "number": "1090" },
{ "department": "UP Ambulance Service", "number": "108" },
{ "department": "Fire", "number": "101" }
];



} else if (district === "kanpur") {
        numbers = [
        { "department": "Citizen's Call center", "number": "1076" },
{ "department": "Child Helpline", "number": "1098" },
{ "department": "Police", "number": "100" },
{ "department": "Women Helpline", "number": "1090" },
{ "department": "Fire", "number": "101" },
{ "department": "Ambulance", "number": "102" }
];



} else if (district === "chennai") {
        numbers = [
        { "department": "Police", "number": "100" },
{ "department": "Fire Control", "number": "101" },
{ "department": "Ambulance of Fire Service Dept.", "number": "102" },
{ "department": "Traffice Police", "number": "103" },
{ "department": "Accident Helpline", "number": "108" },
{ "department": "Disaster Helpline", "number": "1077" },
{ "department": "Child Helpline", "number": "1098" },
{ "department": "Women Helpline", "number": "181" },
{ "department": "Lions Blood Bank", "number": "28415959" },
{ "department": "St. Johns Ambulance Association", "number": "28194630" },
{ "department": "Chennai Corporation Complaints", "number": "1913" },
{ "department": "Railways Reservation Enquiry", "number": "132" },
{ "department": "Automated Reservation Query", "number": "139" },
{ "department": "Tourist Enquiry", "number": "1913" },
{ "department": "Tourism Office of Govt. of Tamil Nadu", "number": "25368538" },
{ "department": "Tourism Office of Govt. of India", "number": "28460285" },
{ "department": "BSNL Telephone Directory Enquiry", "number": "197" },
{ "department": "BSNL Telephone Local Assistance", "number": "199" },
{ "department": "Eye Bank", "number": "1919" },
{ "department": "Gas Helpline", "number": "1716" }
];


} else if (district === "trivandrum") {
        numbers = [
        { "department": "Control Room", "number": "0471-2730067" },
{ "department": "Media Center", "number": "0471-2730087" },
{ "department": "National Emergency Number", "number": "112" },
{ "department": "Police", "number": "100" },
{ "department": "Fire", "number": "101" },
{ "department": "Ambulance", "number": "102" },
{ "department": "Disaster Management Services", "number": "0471-2730045" },
{ "department": "Women Helpline", "number": "1091" },
{ "department": "Women Helpline – (Domestic Abuse)", "number": "181" },
{ "department": "Aids Helpline", "number": "1097" },
{ "department": "Crime Stopper", "number": "1090" },
{ "department": "Railway Police Alert", "number": "9846200100" },
{ "department": "Highway Alert", "number": "9846100100" },
{ "department": "Road Accident Emergency Service", "number": "108" },
{ "department": "SMS Center", "number": "9497900000" },
{ "department": "Children In Difficult Situation", "number": "1098" },
{ "department": "Central Vigilance Commission", "number": "1964" },
{ "department": "Tourist Alert", "number": "9846300100" },
{ "department": "Pink Petrol", "number": "1515" },
{ "department": "District Emergency operation center", "number": "0471-2730045" }
];



} else if (district === "visakhapatnam") {
        numbers = [
        { "department": "COVID19 Control Room", "numbers": ["08912501233", "08912501244", "08912501255", "1800 4250 0002", "1800 599 24365", "104"] },
{ "department": "AP Citizen’s Call Center", "number": "1902" },
{ "department": "Child Helpline", "number": "1098" },
{ "department": "Women Helpline", "number": "181" },
{ "department": "Crime Stopper", "number": "1090" }
];



} else if (district === "hindu") {
        numbers = [
        { "department": "hindu", "number": "02066803300 " }
];




} else if (district === "bhadrak") {
        numbers = [

];



} else if (district === "bhadrak") {
        numbers = [

];



} else if (district === "varanasi") {
        numbers = [
        { "department": "Corona Control Helpline", "number": "0542-2508077, 8114001673" },
{ "department": "CM Helpline", "number": "1076" },
{ "department": "Police Helpline", "number": "112" },
{ "department": "Child Helpline", "number": "1098" },
{ "department": "Women Power-line", "number": "1091" },
{ "department": "Crime Stopper", "number": "1090" },
{ "department": "Ambulance Helpline", "number": "102" },
{ "department": "Ambulance Helpline-UP", "number": "108" }
];

} else if (district === "imphal") {
        numbers = [
        { "department": "RIMS Hospital Casualty", "number": "2414478" },
{ "department": "Manipur Fire Service", "number": "101" },
{ "department": "Child Line Imphal", "number": "1098" },
{ "department": "Police Emergency Call", "number": "100" }
];

} else if (district === "ahmedabad") {
        numbers = [
        { "department": "Citizen’s Call Center Helpline", "number": "155303" },
{ "department": "Child Helpline", "number": "1098" },
{ "department": "Women Helpline", "number": "181" },
{ "department": "Crime Stopper Helpline", "number": "1090" },
{ "department": "Rescue & Relief Helpline", "number": "1070" },
{ "department": "Ambulance Helpline", "number": "108, 102" },
{ "department": "District Helpline", "number": "+91 79 1077" },
{ "department": "District EOCs Helpline NO", "number": "+91 79 27560511" }
];

} else if (district === "hyderabad") {
        numbers = [
        { "department": "Citizen's Call center", "number": "155300" },
{ "department": "Child Helpline", "number": "1098" },
{ "department": "Women Helpline", "number": "1091" },
{ "department": "Electricity", "number": "1912" },
{ "department": "Fire", "number": "101" },
{ "department": "Tourist Information", "number": "1363" }
];




} else if (district === "lucknow") {
        numbers = [
        { "department": "Police", "number": "112" },
{ "department": "Fire", "number": "101" },
{ "department": "Ambulance", "number": "102/108" },
{ "department": "Women HelpLine", "number": "1090" },
{ "department": "Citizen’s Call Center", "number": "155300" },
{ "department": "Child Helpline", "number": "1098" },
{ "department": "Chief Minister Helpline", "number": "1076" },
{ "department": "UP Women Commission Helpline", "number": "1800-180-5220" }
];


} else if (district === "mumbai") {
        numbers = [
        { "department": "Citizen’s Call center", "number": "155300" },
{ "department": "Child Helpline", "number": "1098" },
{ "department": "Women Helpline", "number": "1091" },
{ "department": "Crime Stopper", "number": "1090" },
{ "department": "Commissioner of Rescue & Relief", "number": "1070" },
{ "department": "NIC Service Desk", "number": "1800 111 555" },
{ "department": "Chief Electoral Officer", "number": "1800-22-1950" },
{ "department": "PDS Helpline", "number": "1800 22 4950 & 1967" },
{ "department": "District Control Room", "number": "1077" },
{ "department": "Maharashtra Control Room", "number": "022 – 22027990" }
];

} else if (district === "patna") {
        numbers = [
        { "department": "DISTRICT CONTROL ROOM PATNA", "number": "0612-2219810" },
{ "department": "POLICE CONTROL ROOM PATNA", "number": "0612-2201977 / 78" },
{ "department": "JIGYASA (FOR GENERAL INFORMATION)", "number": "0612-2233333" },
{ "department": "KRISHI (HEALTHCARE)", "number": "0612-2200814" },
{ "department": "KRISHI (FARMER CALL CENTRE)", "number": "1551 / 18001801551" },
{ "department": "BIHAR KRISHAK AAYOG", "number": "0612-6452289" },
{ "department": "CHIEF ELECTORAL OFFICER", "number": "0612-2215106" },
{ "department": "CHIEF MINISTER PUBLIC GRIEVANCE OFFICE", "number": "0612-2205800" },
{ "department": "VIGILANCE", "number": "1800110180" },
{ "department": "CHILD HELPLINE CENTRE", "number": "1098" },
{ "department": "DISASTER MANAGEMENT CONTROL ROOM", "number": "0612-2217305" },
{ "department": "ENERGY DEPARTMENT, PATNA CONTROL ROOM", "number": "0612-2285032" },
{ "department": "FIRE BRIGADE CONTROL ROOM", "number": "0612-2222223 / 101" },
{ "department": "FOOD AND CONSUMER PROTECTION", "number": "0612-2210902" },
{ "department": "HEALTH DEPARTMENT", "number": "1911 / 102" },
{ "department": "MAHADALIT COMMISSION PATNA", "number": "0612-2521111" },
{ "department": "MUNICIPAL COOPERATION CONTROL ROOM", "number": "0612-2911134-35 / 3261372-73" },
{ "department": "ROAD CONSTRUCTION DEPARTMENT", "number": "18003456161" },
{ "department": "RIGHT TO INFORMATION", "number": "155311 / 18003456777" },
{ "department": "RURAL DEVELOPMENT", "number": "0612-2210000" },
{ "department": "WOMEN HELPLINE CENTRE", "number": "9304264570" },
{ "department": "SCHEDULED CASTE AND SCHEDULED TRIBE WELFARE", "number": "18003456345" }
];
      }

      // Display the numbers
      if (numbers.length > 0) {
        var heading = document.createElement("h3");
        heading.innerHTML = "Helpline numbers of <strong style='color: Red;'>" + district + "</strong>";
        resultElement.appendChild(heading);

        for (var i = 0; i < numbers.length; i++) {
          var department = numbers[i].department;
          var number = numbers[i].number;





          
          

          var resultItem = document.createElement("div");
          resultItem.innerHTML = "<strong>" + department + "</strong> No. <b>" + number + "</b>";
          resultElement.appendChild(resultItem);
        }
      } else {
        var noResultItem = document.createElement("div");
        noResultItem.innerHTML = "<ul><li>No numbers found for the entered district. </li> <li>Please check the spelling or try a different district</li><li>Double-check the spelling: Ensure that you have entered the correct spelling of the district. Sometimes, a small typo can lead to no results. Verify the spelling and try again.</li><li>Try alternative names: Some districts may have alternative or unofficial names that are commonly used. If the district you're searching for has a known alternative name, try using that name instead.</li><li>karnataka(state helpline numbers)</li>.";
        resultElement.appendChild(noResultItem);
      }
    }
