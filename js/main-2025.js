var stopVideo = function(e) {
		var t = e.querySelector("iframe"),
			a = e.querySelector("video");
		if (t) {
			var o = t.src;
			t.src = o
		}
		a && a.pause()
	},
	handleFraseClick = function(e, t) {
		document.getElementById(e).addEventListener("click", function() {
			let e = document.querySelector(t);
			e ? (e.classList.remove("salir"), e.classList.add("active")) : console.error(`Elemento con ID ${t} no encontrado`)
		})
	},
	frases = [{
		frase: "enganoso-1",
		box: "#box-desplegable-enganoso-1"
	}, {
		frase: "enganoso-2",
		box: "#box-desplegable-enganoso-2"
	}, {
		frase: "enganoso-3",
		box: "#box-desplegable-enganoso-3"
	}, {
		frase: "enganoso-4",
		box: "#box-desplegable-enganoso-4"
	}, {
		frase: "enganoso-5",
		box: "#box-desplegable-enganoso-5"
	}, {
		frase: "enganoso-6",
		box: "#box-desplegable-enganoso-6"
	}, {
		frase: "enganoso-7",
		box: "#box-desplegable-enganoso-7"
	}, {
		frase: "falso-1",
		box: "#box-desplegable-falso-1"
	}, {
		frase: "falso-2",
		box: "#box-desplegable-falso-2"
	}, {
		frase: "verdadero-1",
		box: "#box-desplegable-verdadero-1"
	}, {
		frase: "verdadero-2",
		box: "#box-desplegable-verdadero-2"
	}, {
		frase: "verdadero-3",
		box: "#box-desplegable-verdadero-3"
	}, {
		frase: "verdadero-4",
		box: "#box-desplegable-verdadero-4"
	}, {
		frase: "verdadero-5",
		box: "#box-desplegable-verdadero-5"
	}, {
		frase: "verdadero-6",
		box: "#box-desplegable-verdadero-6"
	}, {
		frase: "verdadero-7",
		box: "#box-desplegable-verdadero-7"
	}, {
		frase: "destacada-nacional-1",
		box: "#box-desplegable-nacional-1"
	}, {
		frase: "destacada-nacional-2",
		box: "#box-desplegable-nacional-2"
	}, {
		frase: "destacada-nacional-3",
		box: "#box-desplegable-nacional-3"
	}, {
		frase: "destacada-politica-1",
		box: "#box-desplegable-politica-1"
	}, {
		frase: "destacada-politica-2",
		box: "#box-desplegable-politica-2"
	}, {
		frase: "destacada-economia-1",
		box: "#box-desplegable-economia-1"
	}, {
		frase: "destacada-economia-2",
		box: "#box-desplegable-economia-2"
	}, {
		frase: "destacada-ecdata-1",
		box: "#box-desplegable-ecdata-1"
	}, {
		frase: "quechua-1",
		box: "#box-desplegable-quechua-1"
	}, {
		frase: "quechua-2",
		box: "#box-desplegable-quechua-2"
	}, {
		frase: "quechua-3",
		box: "#box-desplegable-quechua-3"
	}];
frases.forEach(function(e) {
	handleFraseClick(`frase-${e.frase}`, e.box), handleFraseClick(`frase-${e.frase}-movil`, e.box)
});
const botonesCerrar = document.getElementsByClassName("btn-cerrar");
for (let i = 0; i < botonesCerrar.length; i++) botonesCerrar[i].addEventListener("click", function() {
	let e = this.closest(".box-main-desplegable");
	e.classList.remove("active"), e.classList.add("salir"), stopVideo(e)
});
document.addEventListener("DOMContentLoaded", function() {
	function e(e, t) {
		let a = document.getElementById(t),
			o = document.getElementById(e);
		o.addEventListener("click", function() {
			let e = a.classList.toggle("collapsed");
			a.classList.toggle("expanded", !e), o.textContent = e ? "Ver m\xe1s" : "Ver menos"
		})
	}
	e("toggle-button", "text-container"), e("toggle-button-movil", "text-container-movil")
}), document.addEventListener("DOMContentLoaded", function() {
	let e = new IntersectionObserver(function e(t, a) {
			t.forEach(e => {
				e.isIntersecting && (function e() {
					let t = {
							"reloj-2025": {
								value: 18,
								color: "#FF292A"
							},
							"reloj-2024": {
								value: 36,
								color: "#FF292A"
							},
							"reloj-2025-movil": {
								value: 18,
								color: "#FF292A"
							},
							"reloj-2024-movil": {
								value: 36,
								color: "#FF292A"
							}
						},
						a = {
							animation: !0,
							animationEasing: "easeOutSine",
							percentageInnerCutout: 70,
							segmentShowStroke: !1
						};
					Object.keys(t).forEach(e => {
						let o = document.getElementById(e).getContext("2d"),
							n = [{
								value: t[e].value,
								color: t[e].color
							}, {
								value: 50,
								color: "#cfcfcf"
							}];
						new Chart(o).Doughnut(n, a)
					})
				}(), a.unobserve(e.target))
			})
		}, {
			root: null,
			rootMargin: "0px",
			threshold: .4
		}),
		t = document.querySelectorAll(".box-duracion-discurso");
	t.forEach(t => {
		e.observe(t)
	})
}), document.addEventListener("DOMContentLoaded", function() {
	let e = document.querySelectorAll(".bg-portada-ano-2023, .bg-portada-ano-2024");
	e.forEach(e => e.style.display = "block");
	let t = document.querySelectorAll(".lenguaje li");
	t.forEach(e => {
		e.addEventListener("click", function() {
			t.forEach(e => e.classList.remove("active")), this.classList.add("active");
			let e = document.querySelectorAll(".bg-analisis");
			e.forEach(e => {
				e.classList.contains("bg-portada-ano-2023") || e.classList.contains("bg-portada-ano-2024") || (e.style.display = "none")
			});
			let a = document.querySelectorAll(`.bg-${this.id}-2023, .bg-${this.id}-2024`);
			a.forEach(e => e.style.display = "block")
		})
	})
}), document.addEventListener("DOMContentLoaded", function() {
	function e(e) {
		let t = document.getElementById(e),
			a = "block" === t.style.display;
		document.querySelectorAll(".info-div").forEach(function(e) {
			e.style.display = "none"
		}), a || (t.style.display = "block", document.querySelector(".box-main-info").scrollIntoView({
			behavior: "smooth",
			block: "start"
		}))
	}
	document.getElementById("segment1").addEventListener("click", function() {
		e("info1")
	}), document.getElementById("segment2").addEventListener("click", function() {
		e("info2")
	}), document.getElementById("segment3").addEventListener("click", function() {
		e("info3")
	})
}), $(document).ready(function() {
	$(".box-head").on("click", function() {
		let e = $(this),
			t = e.next(".box-info-proyecto");
		if (e.hasClass("active")) {
			e.removeClass("active"), t.slideUp(), e.find(".flecha").attr("src", "/especiales-multimedia/promesometro-dina-boluarte/img/flecha-abajo.png");
			return
		}
		$(".box-head.active").removeClass("active").next(".box-info-proyecto").slideUp(), $(".box-head").find(".flecha").attr("src", "/especiales-multimedia/promesometro-dina-boluarte/img/flecha-abajo.png"), e.addClass("active"), t.slideDown(), e.find(".flecha").attr("src", "/especiales-multimedia/promesometro-dina-boluarte/img/flecha-arriba.png")
	})
}), document.addEventListener("DOMContentLoaded", function() {
	let e = document.querySelectorAll("#presidents-sentimiento li"),
		t = document.querySelectorAll(".box-sentimiento");

	function a(e) {
		t.forEach(t => {
			t.style.display = t.id === e ? "block" : "none"
		})
	}
	e.forEach(t => {
		t.addEventListener("click", function() {
			e.forEach(e => e.classList.remove("active-sentimiento")), this.classList.add("active-sentimiento"), a(this.getAttribute("data-target"))
		})
	}), document.querySelector("li[data-target='sentimiento-ollanta']").classList.add("active-sentimiento"), a("sentimiento-ollanta")
}), document.addEventListener("DOMContentLoaded", function() {
	let e = document.querySelectorAll(".anios li"),
		t = document.querySelectorAll(".box-palabras");
	e.forEach(function(a) {
		a.addEventListener("click", function() {
			let o = a.classList.contains("active");
			if (!o) {
				e.forEach(function(e) {
					e.classList.remove("active")
				}), t.forEach(function(e) {
					e.style.display = "none"
				}), a.classList.add("active");
				let n = a.getAttribute("data-target");
				document.querySelector(`.${n}`).style.display = "block"
			}
		})
	})
}), document.addEventListener("DOMContentLoaded", function() {
	let e = document.getElementById("siguiente-frase-destacada-nacional-1"),
		t = document.getElementById("siguiente-frase-destacada-nacional-1-movil"),
		a = document.querySelector(".box-main-desplegable-video-1-nacional"),
		o = document.getElementById("text-container"),
		n = document.getElementById("text-container-movil"),
		l = document.getElementById("frase-destacada-nacional-2"),
		s = document.getElementById("frase-destacada-nacional-2-movil");

	function c(e) {
		window.scrollTo({
			top: e.getBoundingClientRect().top + window.scrollY - 500,
			behavior: "smooth"
		})
	}

	function d(e) {
		let t = e ? s : l,
			d = e ? n : o;
		t && (d.classList.contains("collapsed") ? (d.classList.add("expanded"), setTimeout(() => {
				c(t)
			}, 2e3)) : (d.classList.add("expanded"), c(t))), a.classList.remove("active"), a.classList.add("salir"),
			function e(t) {
				let a = t.querySelector("iframe");
				if (a) {
					let o = a.src;
					a.src = "", a.src = o
				}
				let n = t.querySelector("video");
				n && n.pause()
			}(a)
	}
	e.addEventListener("click", function() {
		d(!1)
	}), $(t).click(function() {
		$("html, body").animate({
			scrollTop: $(s).offset().top - 500
		}, "slow"), d(!0)
	})
}), document.addEventListener("DOMContentLoaded", function() {
	let e = document.getElementById("siguiente-frase-destacada-nacional-2"),
		t = document.getElementById("siguiente-frase-destacada-nacional-2-movil"),
		a = document.querySelector(".box-main-desplegable-video-2-nacional"),
		o = document.getElementById("text-container"),
		n = document.getElementById("text-container-movil"),
		l = document.getElementById("frase-destacada-nacional-3"),
		s = document.getElementById("frase-destacada-nacional-3-movil");

	function c(e) {
		window.scrollTo({
			top: e.getBoundingClientRect().top + window.scrollY - 500,
			behavior: "smooth"
		})
	}

	function d(e) {
		let t = e ? s : l,
			d = e ? n : o;
		t && (d.classList.contains("collapsed") ? (d.classList.add("expanded"), setTimeout(() => {
				c(t)
			}, 2e3)) : (d.classList.add("expanded"), c(t))), a.classList.remove("active"), a.classList.add("salir"),
			function e(t) {
				let a = t.querySelector("iframe");
				if (a) {
					let o = a.src;
					a.src = "", a.src = o
				}
				let n = t.querySelector("video");
				n && n.pause()
			}(a)
	}
	e.addEventListener("click", function() {
		d(!1)
	}), $(t).click(function() {
		$("html, body").animate({
			scrollTop: $(s).offset().top - 500
		}, "slow"), d(!0)
	})
}), document.addEventListener("DOMContentLoaded", function() {
	let e = document.getElementById("siguiente-frase-destacada-politica-1"),
		t = document.getElementById("siguiente-frase-destacada-politica-1-movil"),
		a = document.querySelector(".box-main-desplegable-video-1-politica"),
		o = document.getElementById("text-container"),
		n = document.getElementById("text-container-movil"),
		l = document.getElementById("frase-destacada-politica-2"),
		s = document.getElementById("frase-destacada-politica-2-movil");

	function c(e) {
		window.scrollTo({
			top: e.getBoundingClientRect().top + window.scrollY - 500,
			behavior: "smooth"
		})
	}

	function d(e) {
		let t = e ? s : l,
			d = e ? n : o;
		t && (d.classList.contains("collapsed") ? (d.classList.add("expanded"), setTimeout(() => {
				c(t)
			}, 2e3)) : (d.classList.add("expanded"), c(t))), a.classList.remove("active"), a.classList.add("salir"),
			function e(t) {
				let a = t.querySelector("iframe");
				if (a) {
					let o = a.src;
					a.src = "", a.src = o
				}
				let n = t.querySelector("video");
				n && n.pause()
			}(a)
	}
	e.addEventListener("click", function() {
		d(!1)
	}), $(t).click(function() {
		$("html, body").animate({
			scrollTop: $(s).offset().top - 500
		}, "slow"), d(!0)
	})
}), document.addEventListener("DOMContentLoaded", function() {
	let e = document.getElementById("siguiente-frase-destacada-economia-1"),
		t = document.getElementById("siguiente-frase-destacada-economia-1-movil"),
		a = document.querySelector(".box-main-desplegable-video-1-economia"),
		o = document.getElementById("text-container"),
		n = document.getElementById("text-container-movil"),
		l = document.getElementById("frase-destacada-economia-2"),
		s = document.getElementById("frase-destacada-economia-2-movil");

	function c(e) {
		window.scrollTo({
			top: e.getBoundingClientRect().top + window.scrollY - 500,
			behavior: "smooth"
		})
	}

	function d(e) {
		let t = e ? s : l,
			d = e ? n : o;
		t && (d.classList.contains("collapsed") ? (d.classList.add("expanded"), setTimeout(() => {
				c(t)
			}, 2e3)) : (d.classList.add("expanded"), c(t))), a.classList.remove("active"), a.classList.add("salir"),
			function e(t) {
				let a = t.querySelector("iframe");
				if (a) {
					let o = a.src;
					a.src = "", a.src = o
				}
				let n = t.querySelector("video");
				n && n.pause()
			}(a)
	}
	e.addEventListener("click", function() {
		d(!1)
	}), $(t).click(function() {
		$("html, body").animate({
			scrollTop: $(s).offset().top - 500
		}, "slow"), d(!0)
	})
});