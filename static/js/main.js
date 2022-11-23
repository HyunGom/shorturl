// jQuery to replace into shortened url string
$(document).on("submit", "#shortener", function (e) {
    e.preventDefault();
    $.ajax({
        type: "POST",
        url: "/create/",
        data: {
            link: $("#link").val(),
            csrfmiddlewaretoken: $("input[name=csrfmiddlewaretoken]").val(),
        },
        success: function (data) {
            base_url = "https://hkurls.up.railway.app/"
            $("h2").html(base_url + data)
        }

    });
});

// clip the new url
function ctrl_cv() {
    let url_link = document.getElementById("output").innerHTML
    navigator.clipboard.writeText(url_link);
}