/* LANGUAGE 
================================================== */
if(typeof VMM != 'undefined') {
	VMM.Language = {
		lang: "fo",
		api: {
			wikipedia: "fo"
		},
		date: {
			month: ["januar", "februar", "mars", "aprÌl", "mai", "juni", "juli", "august", "september", "oktober", "november", "desember"],
			month_abbr: ["jan.", "febr.", "mars", "aprÌl", "mai", "juni", "juli", "aug.", "sept.", "okt.", "nov.", "des."],
			day: ["sunnudagur","m·nadagur", "t˝sdagur", "mikudagur", "hÛsdagur", "frÌggjadagur", "leygardagur"],
			day_abbr: ["sun.","m·n.", "t˝s.", "mik.", "hÛs.", "frÌ.", "ley."]
		}, 
		dateformats: {
			year: "yyyy",
			month_short: "mmm",
			month: "mmmm yyyy",
			full_short: "d'.' mmm",
			full: "d'.' mmmm yyyy",
			time_no_seconds_short: "HH:MM",
			time_no_seconds_small_date: "HH:MM'<br/><small>'d'.' mmmm yyyy'</small>'",
			full_long: "d'.' mmmm yyyy 'klokkan' HH:MM",
			full_long_small_date: "HH:MM'<br/><small>'d'.' mmm yyyy'</small>'"
		},
		messages: {
			loading_timeline: "Lesur inn tÌarr·s... ",
			return_to_title: "Aftur til byrjan",
			expand_timeline: "VÌka tÌarr·s",
			contract_timeline: "Minka tÌarr·s",
			wikipedia: "Fr· Wikipedia, tann frÊlsa alfr¯in",
			loading_content: "Lesur inn tilfar",
			loading: "Lesur inn"
		}
	}
}