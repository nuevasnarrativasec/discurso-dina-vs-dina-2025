// Utility function to stop video playback in a container
var stopVideo = function(container) {
    var iframe = container.querySelector("iframe");
    var video = container.querySelector("video");
    if (iframe) {
        var src = iframe.src;
        iframe.src = src; // Reset src to stop iframe content
    }
    if (video) {
        video.pause();
    }
};

// Function to handle click events for phrases to toggle desplegables
var handleFraseClick = function(fraseId, boxSelector) {
    var element = document.getElementById(fraseId);
    if (element) {
        element.addEventListener("click", function() {
            var box = document.querySelector(boxSelector);
            if (box) {
                box.classList.remove("salir");
                box.classList.add("active");
            } else {
                console.error(`Elemento con ID ${boxSelector} no encontrado`);
            }
        });
    } else {
        console.warn(`Elemento con ID ${fraseId} no encontrado`);
    }
};

// Function to handle click events for mobile phrases
var handleFraseClickMobile = function(fraseId, boxSelector) {
    handleFraseClick(fraseId, boxSelector); // Reuse handleFraseClick
};

// Array of phrases and their corresponding desplegable boxes
var frases = [
    { frase: "enganoso-1", box: "#box-desplegable-enganoso-1" },
    { frase: "enganoso-2", box: "#box-desplegable-enganoso-2" },
    { frase: "enganoso-3", box: "#box-desplegable-enganoso-3" },
    { frase: "enganoso-4", box: "#box-desplegable-enganoso-4" },
    { frase: "enganoso-5", box: "#box-desplegable-enganoso-5" },
    { frase: "enganoso-6", box: "#box-desplegable-enganoso-6" },
    { frase: "enganoso-7", box: "#box-desplegable-enganoso-7" },
    { frase: "falso-1", box: "#box-desplegable-falso-1" },
    { frase: "false-2", box: "#box-desplegable-falso-2" },
    { frase: "verdadero-1", box: "#box-desplegable-verdadero-1" },
    { frase: "verdadero-2", box: "#box-desplegable-verdadero-2" },
    { frase: "verdadero-3", box: "#box-desplegable-verdadero-3" },
    { frase: "verdadero-4", box: "#box-desplegable-verdadero-4" },
    { frase: "verdadero-5", box: "#box-desplegable-verdadero-5" },
    { frase: "verdadero-6", box: "#box-desplegable-verdadero-6" },
    { frase: "verdadero-7", box: "#box-desplegable-verdadero-7" },
    { frase: "destacada-nacional-1", box: "#box-desplegable-nacional-1" },
    { frase: "destacada-nacional-2", box: "#box-desplegable-nacional-2" },
    { frase: "destacada-nacional-3", box: "#box-desplegable-nacional-3" },
    { frase: "destacada-politica-1", box: "#box-desplegable-politica-1" },
    { frase: "destacada-politica-2", box: "#box-desplegable-politica-2" },
    { frase: "destacada-economia-1", box: "#box-desplegable-economia-1" },
    { frase: "destacada-economia-2", box: "#box-desplegable-economia-2" },
    { frase: "destacada-ecdata-1", box: "#box-desplegable-ecdata-1" },
    { frase: "quechua-1", box: "#box-desplegable-quechua-1" },
    { frase: "quechua-2", box: "#box-desplegable-quechua-2" },
    { frase: "quechua-3", box: "#box-desplegable-quechua-3" }
];

// Initialize frase click handlers
document.addEventListener("DOMContentLoaded", function() {
    frases.forEach(function(item) {
        handleFraseClick(`frase-${item.frase}`, item.box);
        handleFraseClickMobile(`frase-${item.frase}-movil`, item.box);
    });

    // Close button handlers for desplegables
    const botonesCerrar = document.getElementsByClassName("btn-cerrar");
    for (let i = 0; i < botonesCerrar.length; i++) {
        botonesCerrar[i].addEventListener("click", function() {
            let container = this.closest(".box-main-desplegable");
            if (container) {
                container.classList.remove("active");
                container.classList.add("salir");
                stopVideo(container);
            }
        });
    }

    // Toggle button handlers for text containers
    function setupToggleButton(toggleId, containerId) {
        let toggle = document.getElementById(toggleId);
        let container = document.getElementById(containerId);
        if (toggle && container) {
            toggle.addEventListener("click", function() {
                let isCollapsed = container.classList.toggle("collapsed");
                container.classList.toggle("expanded", !isCollapsed);
                toggle.textContent = isCollapsed ? "Ver más" : "Ver menos";
            });
        }
    }
    setupToggleButton("toggle-button", "text-container");
    setupToggleButton("toggle-button-movil", "text-container-movil");

    // Intersection observer for charts
    let observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                let clocks = {
                    "reloj-2025": { value: 27, color: "#FF292A" },
                    "reloj-2024": { value: 36, color: "#FF292A" },
                    "reloj-2025-movil": { value: 27, color: "#FF292A" },
                    "reloj-2024-movil": { value: 36, color: "#FF292A" }
                };
                let options = {
                    animation: true,
                    animationEasing: "easeOutSine",
                    percentageInnerCutout: 70,
                    segmentShowStroke: false
                };
                Object.keys(clocks).forEach(id => {
                    let ctx = document.getElementById(id).getContext("2d");
                    let data = [
                        { value: clocks[id].value, color: clocks[id].color },
                        { value: 50, color: "#cfcfcf" }
                    ];
                    new Chart(ctx).Doughnut(data, options);
                });
                observer.unobserve(entry.target);
            }
        });
    }, { root: null, rootMargin: "0px", threshold: 0.4 });
    document.querySelectorAll(".box-duracion-discurso").forEach(element => {
        observer.observe(element);
    });

    // Language and background display toggle
    let backgrounds = document.querySelectorAll(".bg-portada-ano-2023, .bg-portada-ano-2024");
    backgrounds.forEach(bg => bg.style.display = "block");
    let languageItems = document.querySelectorAll(".lenguaje li");
    languageItems.forEach(item => {
        item.addEventListener("click", function() {
            languageItems.forEach(li => li.classList.remove("active"));
            this.classList.add("active");
            let analysis = document.querySelectorAll(".bg-analisis");
            analysis.forEach(bg => {
                if (!bg.classList.contains("bg-portada-ano-2023") && !bg.classList.contains("bg-portada-ano-2024")) {
                    bg.style.display = "none";
                }
            });
            let selected = document.querySelectorAll(`.bg-${this.id}-2023, .bg-${this.id}-2024`);
            selected.forEach(bg => bg.style.display = "block");
        });
    });

    // Segment click handlers
    function handleSegmentClick(segmentId, infoId) {
        let segment = document.getElementById(segmentId);
        let info = document.getElementById(infoId);
        if (segment && info) {
            segment.addEventListener("click", function() {
                let isVisible = info.style.display === "block";
                document.querySelectorAll(".info-div").forEach(div => div.style.display = "none");
                if (!isVisible) {
                    info.style.display = "block";
                    document.querySelector(".box-main-info").scrollIntoView({ behavior: "smooth", block: "start" });
                }
            });
        }
    }
    handleSegmentClick("segment1", "info1");
    handleSegmentClick("segment2", "info2");
    handleSegmentClick("segment3", "info3");

    // Box head toggle
    $(document).ready(function() {
        $(".box-head").on("click", function() {
            let $head = $(this);
            let $info = $head.next(".box-info-proyecto");
            if ($head.hasClass("active")) {
                $head.removeClass("active");
                $info.slideUp();
                $head.find(".flecha").attr("src", "/especiales-multimedia/promesometro-dina-boluarte/img/flecha-abajo.png");
                return;
            }
            $(".box-head.active").removeClass("active").next(".box-info-proyecto").slideUp();
            $(".box-head").find(".flecha").attr("src", "/especiales-multimedia/promesometro-dina-boluarte/img/flecha-abajo.png");
            $head.addClass("active");
            $info.slideDown();
            $head.find(".flecha").attr("src", "/especiales-multimedia/promesometro-dina-boluarte/img/flecha-arriba.png");
        });
    });

    // Sentiment box toggle
    let sentimentItems = document.querySelectorAll("#presidents-sentimiento li");
    let sentimentBoxes = document.querySelectorAll(".box-sentimiento");
    function showSentimentBox(targetId) {
        sentimentBoxes.forEach(box => box.style.display = box.id === targetId ? "block" : "none");
    }
    sentimentItems.forEach(item => {
        item.addEventListener("click", function() {
            sentimentItems.forEach(li => li.classList.remove("active-sentimiento"));
            this.classList.add("active-sentimiento");
            showSentimentBox(this.getAttribute("data-target"));
        });
    });
    document.querySelector("li[data-target='sentimiento-ollanta']").classList.add("active-sentimiento");
    showSentimentBox("sentimiento-ollanta");

    // Year-based content toggle
    let yearItems = document.querySelectorAll(".anios li");
    let wordBoxes = document.querySelectorAll(".box-palabras");
    yearItems.forEach(item => {
        item.addEventListener("click", function() {
            if (!item.classList.contains("active")) {
                yearItems.forEach(li => li.classList.remove("active"));
                wordBoxes.forEach(box => box.style.display = "none");
                item.classList.add("active");
                let target = item.getAttribute("data-target");
                document.querySelector(`.${target}`).style.display = "block";
            }
        });
    });

    // Navigation handlers (e.g., siguiente-frase)
    function setupNavigation(prevId, prevMobileId, boxSelector, nextId, nextMobileId, textContainerId, textMobileContainerId) {
        let prev = document.getElementById(prevId);
        let prevMobile = document.getElementById(prevMobileId);
        let box = document.querySelector(boxSelector);
        let next = document.getElementById(nextId);
        let nextMobile = document.getElementById(nextMobileId);
        let textContainer = document.getElementById(textContainerId);
        let textMobileContainer = document.getElementById(textMobileContainerId);

        function scrollToTarget(target) {
            window.scrollTo({
                top: target.getBoundingClientRect().top + window.scrollY - 500,
                behavior: "smooth"
            });
        }

        function handleNavigation(isMobile) {
            let target = isMobile ? nextMobile : next;
            let container = isMobile ? textMobileContainer : textContainer;
            if (target && container) {
                if (container.classList.contains("collapsed")) {
                    container.classList.add("expanded");
                    setTimeout(() => scrollToTarget(target), 2000);
                } else {
                    container.classList.add("expanded");
                    scrollToTarget(target);
                }
            }
            if (box) {
                box.classList.remove("active");
                box.classList.add("salir");
                stopVideo(box);
            }
        }

        if (prev) {
            prev.addEventListener("click", function() { handleNavigation(false); });
        }
        if (prevMobile) {
            $(prevMobile).click(function() {
                $("html, body").animate({ scrollTop: $(nextMobile).offset().top - 500 }, "slow");
                handleNavigation(true);
            });
        }
    }

    setupNavigation(
        "siguiente-frase-destacada-nacional-1",
        "siguiente-frase-destacada-nacional-1-movil",
        ".box-main-desplegable-video-1-nacional",
        "frase-destacada-nacional-2",
        "frase-destacada-nacional-2-movil",
        "text-container",
        "text-container-movil"
    );
    setupNavigation(
        "siguiente-frase-destacada-nacional-2",
        "siguiente-frase-destacada-nacional-2-movil",
        ".box-main-desplegable-video-2-nacional",
        "frase-destacada-nacional-3",
        "frase-destacada-nacional-3-movil",
        "text-container",
        "text-container-movil"
    );
    setupNavigation(
        "siguiente-frase-destacada-politica-1",
        "siguiente-frase-destacada-politica-1-movil",
        ".box-main-desplegable-video-1-politica",
        "frase-destacada-politica-2",
        "frase-destacada-politica-2-movil",
        "text-container",
        "text-container-movil"
    );
    setupNavigation(
        "siguiente-frase-destacada-economia-1",
        "siguiente-frase-destacada-economia-1-movil",
        ".box-main-desplegable-video-1-economia",
        "frase-destacada-economia-2",
        "frase-destacada-economia-2-movil",
        "text-container",
        "text-container-movil"
    );
});