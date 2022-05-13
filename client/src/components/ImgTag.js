import React from "react";

function importAll(r) {
	let images = {};
	r.keys().map((item, index) => {
		images[item.replace("./", "")] = r(item);
	});
	return images;
}

const about = importAll(
	require.context("../uploads/about", false, /\.(png|jpe?g|svg)$/)
);
const bridal = importAll(
	require.context("../uploads/bridal", false, /\.(png|jpe?g|svg)$/)
);
const commercial = importAll(
	require.context("../uploads/commercial", false, /\.(png|jpe?g|svg)$/)
);
const editorial = importAll(
	require.context("../uploads/editorial", false, /\.(png|jpe?g|svg)$/)
);
const general = importAll(
	require.context("../uploads/general", false, /\.(png|jpe?g|svg)$/)
);
const specialOccasions = importAll(
	require.context("../uploads/specialOccasions", false, /\.(png|jpe?g|svg)$/)
);

export default function ImgTag({ category, imgLink, alt, className }) {
	let imgURL = "";
	if (category === "bridal") {
		imgURL = bridal[imgLink].default;
	} else if (category === "commercial") {
		imgURL = commercial[imgLink].default;
	} else if (category === "editorial") {
		imgURL = editorial[imgLink].default;
	} else if (category === "general") {
		imgURL = general[imgLink].default;
	} else if (category === "specialOccasions") {
		imgURL = specialOccasions[imgLink].default;
	} else if (category === "about") {
		imgURL = about[imgLink].default;
	}
	return <img src={imgURL} alt={alt} className={className} />;
}
export { bridal, commercial, editorial, general, specialOccasions };
