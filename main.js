var player = /** @class */ (function () {
    function player(name) {
        this.ballscore = [];
        this.name = name;
    }
    player.prototype.insertscore = function (score) {
        this.ballscore.push(score);
    };
    player.prototype.getplayertotalscore = function () {
        var sum = 0;
        for (var _i = 0, _a = this.ballscore; _i < _a.length; _i++) {
            var i = _a[_i];
            sum += i;
        }
        return sum;
    };
    return player;
}());
var team = /** @class */ (function () {
    function team(name) {
        this.allplayers = [];
        this.name = name;
    }
    team.prototype.insert = function (player) {
        this.allplayers.push(player);
    };
    team.prototype.gettotalscore = function () {
        var sum = 0;
        this.allplayers.forEach(function (v) {
            sum += v.getplayertotalscore();
        });
        return sum;
    };
    team.prototype.getmaxscorer = function () {
        var scoreslist = [];
        for (var _i = 0, _a = this.allplayers; _i < _a.length; _i++) {
            var i = _a[_i];
            scoreslist.push(i.getplayertotalscore());
        }
        var scorers = [];
        this.allplayers.forEach(function (v) {
            if (v.getplayertotalscore() == Math.max.apply(Math, scoreslist))
                scorers.push(v.name);
        });
        this.maxplayers = scorers.join('\n');
    };
    return team;
}());
document.addEventListener('DOMContentLoaded', function () {
    var __header = document.createElement('header');
    __header.className = 'container-fluid';
    document.body.appendChild(__header);
    var __marquee = document.createElement('marquee');
    __header.appendChild(__marquee);
    var __nav = document.createElement('nav');
    __header.appendChild(__nav);
    __nav.className = 'nav';
    __nav.id = '_nav';
    var __ul = document.createElement('ul');
    __nav.appendChild(__ul);
    var __first = document.createElement('div');
    __first.className = 'first container-fluid';
    __first.id = '_first';
    document.body.appendChild(__first);
    var __section_first = document.createElement('section');
    __first.appendChild(__section_first);
    __section_first.className = 'row';
    var __h1_first = document.createElement('h1');
    __section_first.appendChild(__h1_first);
    var __span_h1_first = document.createElement('span');
    __section_first.appendChild(__span_h1_first);
    var __button_first = document.createElement('button');
    __section_first.appendChild(__button_first);
    //adding content
    __marquee.textContent = 'Play Cricket';
    __marquee.behavior = 'scroll';
    __marquee.width = '100%';
    __marquee.direction = 'right';
    __marquee.scrollAmount = 4;
    __ul.innerHTML += "<li class='active'><a href=\"#_first\">Home</a></li>\n\t\t\t\t\t<li><a href='#_second'>check your luck</a></li>\n\t\t\t\t\t<li><a>With computer</a></li>\n\t\t\t\t\t<li><a>Two Player<a></li>\n\t\t\t\t\t<li><a>world cup</a></li>";
    //first page text starts
    __h1_first.textContent = 'Welcome to have some fun';
    __span_h1_first.textContent = 'playing crciket';
    __button_first.type = 'button';
    __button_first.textContent = 'Play';
    __button_first.setAttribute('data-target', '#_second');
    __button_first.addEventListener('click', function (event) {
        // __nav.style.transition = 'transform 2000ms ease-out';
        // __nav.style.display = 'flow-root';
        // __nav.style.opacity = '1';
        // __marquee.style.display = 'none';
        window.location.href = '#_second';
    });
    document.querySelectorAll('.nav li').forEach(function (v) {
        v.addEventListener('click', function () {
            document.querySelector('.nav .active').classList.remove('active');
            this.classList.add('active');
        });
    });
    //second page starts
    var __second = document.createElement('div');
    document.body.appendChild(__second);
    __second.className = 'second container-fluid';
    __second.id = '_second';
    // let __form_second: HTMLFormElement = document.createElement('form');
    // __second.appendChild(__form_second);
    // __form_second.className = 'container-fluid';
    // let __team1_label_second: HTMLLabelElement = document.createElement('label');
    // __second.appendChild(__team1_label_second);
    // let __team1_input_second: HTMLInputElement = document.createElement('input');
    // __form_second.appendChild(__team1_input_second);
    // let __team2_label_second: HTMLLabelElement = document.createElement('label');
    // __second.appendChild(__team2_label_second);
    // let __team2_input_second: HTMLInputElement = document.createElement('input');
    // __form_second.appendChild(__team2_input_second);
    // let __submit_form_second: HTMLInputElement = document.createElement('input');
    // __form_second.appendChild(__submit_form_second);
    var __section_second = document.createElement('section');
    __second.appendChild(__section_second);
    __section_second.className = 'container-fluid';
    var __output = document.createElement('div');
    __section_second.appendChild(__output);
    __output.innerHTML = "\n\t\t\t\t\t\t<p></p>\n\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t<h2></h2>\n\t\t\t\t\t\t\t<p class=\"manofthematch\">man of the match : \n</p>\n\t\t\t\t\t\t\t<span><button>play again</button></span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<p></p>\n\t\t\t\t\t\t";
    __output.className = 'container-fluid row output';
    var __instructions_second = document.createElement('div');
    __instructions_second.className = 'row instructions';
    __section_second.appendChild(__instructions_second);
    var __button_first_team = document.createElement('button');
    __instructions_second.appendChild(__button_first_team);
    var __title_second = document.createElement('h1');
    __instructions_second.appendChild(__title_second);
    //__title_second.className = 'col-3 offset-4';
    var __button_second_team = document.createElement('button');
    __instructions_second.appendChild(__button_second_team);
    //__button_second_team.className = 'col-2';
    var __tables_second = document.createElement('div');
    __section_second.appendChild(__tables_second);
    __tables_second.className = 'container-fluid row tables';
    var __first_table_second = document.createElement('div');
    __tables_second.appendChild(__first_table_second);
    __first_table_second.className = 'col-md-12 col-lg-6 team1';
    var __second_table_second = document.createElement('div');
    __tables_second.appendChild(__second_table_second);
    __second_table_second.className = 'col-md-12 col-lg-6 team2';
    var datavalue = 1;
    var playernumber;
    function createTable() {
        Array.from(__tables_second.children).forEach(function (v) {
            v.innerHTML = "\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-3\">player</div>\n\t\t\t\t<div class=\"col-1\">B1</div>\n\t\t\t\t<div class=\"col-1\">B2</div>\n\t\t\t\t<div class=\"col-1\">B3</div>\n\t\t\t\t<div class=\"col-1\">B4</div>\n\t\t\t\t<div class=\"col-1\">B5</div>\n\t\t\t\t<div class=\"col-1\">B6</div>\n\t\t\t\t<div class=\"col-3\">Total</div>\n\t\t\t</div>";
            datavalue = 0;
            playernumber = 0;
            for (var i = 1; i <= 10; i++) {
                v.innerHTML += "\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-3\">player" + i + "</div>\n\t\t\t\t\t<div class=\"col-1 ball" + ++datavalue + "\"></div>\n\t\t\t\t\t<div class=\"col-1 ball" + ++datavalue + "\"></div>\n\t\t\t\t\t<div class=\"col-1 ball" + ++datavalue + "\"></div>\n\t\t\t\t\t<div class=\"col-1 ball" + ++datavalue + "\"></div>\n\t\t\t\t\t<div class=\"col-1 ball" + ++datavalue + "\"></div>\n\t\t\t\t\t<div class=\"col-1 ball" + ++datavalue + "\"></div>\n\t\t\t\t\t<div class=\"col-3 player" + ++playernumber + "\"></div>\n\t\t\t\t</div>";
            }
        });
    }
    createTable();
    __title_second.textContent = '0';
    __button_second_team.textContent = 'bowl';
    __button_second_team.type = 'button';
    __button_first_team.setAttribute('data-value', '1');
    __button_second_team.setAttribute('data-value', '2');
    __button_first_team.textContent = 'bat';
    __button_first_team.type = 'button';
    var team1 = new team('team1');
    var team2 = new team('team2');
    for (var _i = 0, _a = [team1, team2]; _i < _a.length; _i++) {
        var j = _a[_i];
        for (var i = 1; i <= 10; i++) {
            j.insert(new player("player" + i));
        }
    }
    var __teams_second = document.querySelectorAll('.col-lg-5');
    var btnpress = 0;
    var __seconds = 0;
    var isout = false;
    var iscomplete = 0;
    __instructions_second.addEventListener('click', function (event) {
        if (event.target.tagName == 'BUTTON') {
            if (!btnpress++) {
                var __seconds_display_1 = setInterval(timer, 1000);
                function timer() {
                    __title_second.textContent = "" + ++__seconds;
                    __title_second.classList.add('active');
                    if (__seconds == 60 || __seconds == 0) {
                        __title_second.textContent = '0';
                        Array.from(event.target.parentElement.children).forEach(function (v) {
                            v.style.display = 'inline-block';
                        });
                        event.target.style.display = 'none';
                        clearInterval(__seconds_display_1);
                        btnpress = 0;
                        __seconds = 0;
                        return;
                    }
                }
            }
            if (event.target.getAttribute('data-value') == '1') {
                getdata(btnpress, team1);
                document.querySelector('button[data-value="2"]').style.display = 'none';
            }
            else {
                getdata(btnpress, team2);
                document.querySelector('[data-value="1"]').style.display = 'none';
            }
            if (isout)
                btnpress += 6 - btnpress % 6;
            if (btnpress >= 60) {
                Array.from(event.target.parentElement.children).forEach(function (v) {
                    v.style.display = 'inline-block';
                });
                event.target.style.display = 'none';
                __seconds = 0;
                btnpress = 0;
                4;
                iscomplete++;
                if (iscomplete == 2) {
                    this.style.display = 'none';
                    displayoutput();
                }
                return;
            }
        }
    });
    function randomnumber(n) {
        var out = Math.floor(Math.random() * (n + 1));
        return out;
    }
    function getdata(count, team) {
        var ballscore = randomnumber(6);
        team.allplayers[Math.floor((count - 1) / 6)].insertscore(ballscore);
        isout = false;
        printintable(team);
        if (ballscore == 0 && count % 6)
            isout = true;
        return isout;
    }
    function printintable(team) {
        for (var j = 0; j < team.allplayers.length; j++) {
            for (var i = 0; i < team.allplayers[j].ballscore.length; i++) {
                document.querySelector("." + team.name + " .ball" + (6 * j + i + 1)).textContent = "" + team.allplayers[j]
                    .ballscore[i];
                document.querySelector("." + team.name + " .ball" + (6 * j + i + 1)).classList.add('active');
                document.querySelector("." + team.name + " .player" + (j + 1)).textContent = "" + team.allplayers[j].getplayertotalscore();
            }
        }
    }
    document.querySelector('.output button').addEventListener('click', function (event) {
        window.location.reload();
    });
    function displayoutput() {
        __output.style.visibility = 'visible';
        var team1score = team1.gettotalscore();
        var team2score = team2.gettotalscore();
        var winner = Math.max(team1score, team2score) == team1score ? team1 : team2;
        document.querySelector('h2').textContent = winner.name + " is the winner";
        __output.firstChild.textContent = "team1 has scored " + team1score;
        __output.lastChild.textContent = "team2 has scored " + team2score;
        winner.getmaxscorer();
        document.querySelector('.manofthematch').textContent += winner.maxplayers;
        if (team1score == team2score)
            document.querySelector('h2').textContent = 'it is a draw';
        else {
            document.querySelector("." + winner.name).classList.add('winner');
            if (winner.maxplayers.split(' ').length == 1) {
                document.querySelector("." + winner.name + " ." + winner.maxplayers).parentElement.classList.add('active');
            }
            else {
                winner.maxplayers.split(' ').forEach(function (v) {
                    document.querySelector("." + winner.name + " ." + v).parentElement.classList.add('active');
                });
            }
        }
    }
});
//# sourceMappingURL=main.js.map