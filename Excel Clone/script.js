$(document).ready(function () {

    for (let i = 1; i <= 100; i++) {

        let ans = "";
        let n = i;

        while (n > 0) {
            let rem = n % 26;

            if (rem == 0) {
                ans = "Z" + ans;
                n = Math.floor(n / 26) - 1;
            } else {
                ans = String.fromCharCode(rem - 1 + 65) + ans;
                n = Math.floor(n / 26);
            }
        }

        let column = $(`<div class="column-name colId-${i}" id="colCod-${ans}">${ans}</div>`)
        $(".column-name-container").append(column);

        let row = $(`<div class="row-name" id="rowId-${i}">${i}</div>`)
        $(".row-name-container").append(row);
    }

    for (let i = 1; i <= 100; i++) {
        let row = $(`<div class="cell-row"></div>`);
        for (let j = 1; j <= 100; j++) {
            let colCode = $(`.colId-${j}`).attr("id").split("-")[1];
            let column = $(`<div class="input-cell" contenteditable="false" id = "row-${i}-col-${j}" data="code-${colCode}"></div>`);
            row.append(column);
        }
        $(".input-cell-container").append(row);
    }

    $(".align-icon").click(function () {
        $(".align-icon.selected").removeClass("selected");
        $(this).addClass("selected");
    })

    $(".font-icon").click(function () {
        $(this).toggleClass("selected");
    })

    $(".input-cell").click(function (e) {
        $(".input-cell.selected-cell").removeClass("selected-cell");
        $(this).addClass("selected-cell");
    })

    $(".input-cell").dblclick(function () {
        $(".input-cell.selected-cell").removeClass("selected-cell");
        $(this).addClass("selected-cell");
        $(this).attr("contenteditable", "true");
        $(this).focus();
    })

    $(".input-cell-container").scroll(function () {
        $(".column-name-container").scrollLeft(this.scrollLeft);
        $(".row-name-container").scrollTop(this.scrollTop);
    })
})
