
(function ($) {
    var search = {
        dict: [],
        element: [],
        top: [],
        searchPosTitle: function (element) {
            let titles = element.querySelectorAll('th')
            titles.forEach((title) => {
                let react = title.getBoundingClientRect()
                this.dict.push(title.innerHTML)
                this.element.push(title)
                this.top.push(react.top)
                console.log(react.top)
            });
        },
        searchPosContent: function (element) {
            let tiles = element.querySelectorAll('td')

            tiles.forEach((t) => {
                if (t.innerHTML != "" && t.innerHTML != undefined) {
                    let react = t.getBoundingClientRect()
                    this.dict.push(t.innerHTML)
                    this.element.push(t)
                    this.top.push(react.top)
                }
            })
        },
        clickHtmL: function () {
            let input = $('.inputs')

            let value = input.val()
            console.log(value)
            let strvalue = "<p>" + input.val() + "</p>"
            let time = 0
            for (let i = 0; i < this.dict.length; i++) {
                v = this.dict[i]
                if (v.includes(value)) {
                    let i = this.dict.indexOf(v)
                    time = 0
                    scrollTo(0, 50 + i * 50)
                    for (let i = 0; i < this.element.length; i++) {
                        this.element[i].style.color = 'black'
                        this.element[i].style.background = 'none'
                    }
                    this.element[i].style.color = 'yellow'
                    this.element[i].style.background = 'rgb(0.8,0.8,0.8,0.2)'
                    break;

                }
                else if (value == v) {
                    let i = this.dict.indexOf(value)
                    scrollTo(0, 50 + i * 50)
                    for (let i = 0; i < this.element.length; i++) {
                        this.element[i].style.color = 'black'
                        this.element[i].style.background = 'none'
                    }
                    this.element[i].style.color = 'yellow'
                    this.element[i].style.background = 'rgb(0.8,0.8,0.8,0.2)'
                    break;

                }
                else if (strvalue == v) {
                    let i = this.dict.indexOf(value)
                    time = 0
                    scrollTo(0, 50 + i * 100)
                    for (let i = 0; i < this.element.length; i++) {
                        this.element[i].style.color = 'black'
                        this.element[i].style.background = 'none'
                    }
                    this.element[i].style.color = 'yellow'
                    this.element[i].style.background = 'rgb(0.8,0.8,0.8,0.2)'
                    break;
                }
            }
        }
    }
    $(document).ready(function () {
        let dom = document.getElementsByClassName('table-box')
        for (i = 0; i < 2; i++) {
            search.searchPosTitle(dom[i])
            search.searchPosContent(dom[i])
            //<p>*Amorphous Elemental Boron</p>
        }
        $(".searchBtn").on('click', function () {
            search.clickHtmL()
        })
    })

})(jQuery);

