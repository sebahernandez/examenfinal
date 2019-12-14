const social = $("#share").jsSocials({
    url: document.location.href,
    text: "",
    showCount: true,
    showLabel: true,
    shares: [
        { share: "twitter", via: "artem_tabalin", hashtags: "search,google" },
       {share: "facebook", label: "facebook" },
        "googleplus",
        "linkedin",
        "pinterest",
        "stumbleupon",
        "whatsapp"
    ]
});



