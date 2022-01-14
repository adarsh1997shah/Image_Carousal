//Globals
const corausalInterval = 4000;
let interval = null;

function resetInterval() {
	// clearing time ineterval.
	if (interval) {
		clearInterval(interval);
	}

	// Starting time interval again.
	interval = setInterval(
		() => slide("next", true, "onClickNext"),
		corausalInterval
	);
}

function updateOnNext(item, indicator_item) {
	if (item.next().length != 0) {
		item.next().addClass("active");
		indicator_item.next().addClass("indicator-active");
	} else {
		$(".image-carousel-items-wrap:first-child").addClass("active");
		$(".image-carousel-indicator:first-child").addClass("indicator-active");
	}
}

function updateOnPrev(item, indicator_item) {
	if (item.prev().length != 0) {
		item.prev().addClass("active");
		indicator_item.prev().addClass("indicator-active");
	} else {
		$(".image-carousel-items-wrap:last-child").addClass("active");
		$(".image-carousel-indicator:last-child").addClass("indicator-active");
	}
}

function slide(className, isResetInterval, type) {
	var item = $(".active");
	var indicator_item = $(".indicator-active");
	item.children().addClass(className);

	if (isResetInterval) {
		resetInterval();
	}

	setTimeout(function () {
		$(".image-carousel-items-wrap").removeClass("active");
		$(".image-carousel-indicator").removeClass("indicator-active");
		item.children().removeClass(className);

		if (type !== "onClickPrev") {
			updateOnNext(item, indicator_item);
		} else {
			updateOnPrev(item, indicator_item);
		}
	}, 600);
}

$(document).ready(function () {
	// For automatice carousal.
	interval = setInterval(
		() => slide("next", false, "auto"),
		corausalInterval
	);

	// For previous click card.
	$(".image-carousel-control-prev").on("click", () =>
		slide("prev", true, "onClickPrev")
	);

	// For next click card.
	$(".image-carousel-control-next").on("click", () =>
		slide("next", true, "onClickNext")
	);

	// For particular indicator click.
	$(".image-carousel-indicator").on("click", function () {
		var id = $(this).attr("id");

		resetInterval();

		$(".image-carousel-indicator").removeClass("indicator-active");
		$(".image-carousel-items-wrap").removeClass("active");

		$(this).addClass("indicator-active");
		$(`.items-wrap${id}`).addClass("active");
	});
});
