var podcast_names = [
"DIPG",
"Be Yourself",
"Love",
"Happy",
"Listening",
"Well Wishers",
"Success",
"Languages",
"Crush",
"Bio Fuels",
"Afghanistan",
"Abraham Lincoln",
"Entrepreneur",
"Love v/s Goal",
"Introvert",
"Tuvalu",
"Simulation",
"Dignity of Labour",
"Negligence",
"Digitalization",
"Mars",
"Parenting",
"Mechanical",
"Dowry System",
"Cancer",
"College",
"Serial",
"Marvel Heroes",
"Yoga Day",
"Caste Virus",
"Animals",
"Genes",
"Disability",
"New member",
"Virology Lab",
"Water",


];

var podcast_links = [
"https://open.spotify.com/embed/episode/4vXUmhSQ6NjTY4sTx89pR9?utm_source=generator",
"https://open.spotify.com/episode/74JiyzO1hShz58wIUqsbcD?si=bg5u4qw3QTqcsDS7ljEu3g",
"https://open.spotify.com/episode/74JiyzO1hShz58wIUqsbcD?si=mSHl1IQ8QXG8f5gPDMeMzg",
"https://open.spotify.com/episode/5YXgqOInMPYWu1Uxad8oW4?si=nL_hxorAQ5C1fIgRxSqZpw",
"https://open.spotify.com/episode/1scAyRnZx7wU6V2zskEKIR?si=lzst1qmHRKyzMsHCyfVbvA",
"https://open.spotify.com/episode/7ITERAjzdr3TglFAMjfB7P?si=R_P_JgX4RGeJ1EtcvjHvcw",
"https://open.spotify.com/episode/0OLOKjpOxHO4PqqrPpafLB?si=U78q1IKHTsSfak4F3ArfIQ",
"https://open.spotify.com/episode/4k00s78ngggseaQzJRmJOn?si=bxgELV3hReSxJZEkUlPLxQ",
"https://open.spotify.com/episode/3bhWRXUZLqVs7MY78CMSpR?si=Uwx6thifQMC1iMxZGnPtCw",
"https://open.spotify.com/episode/1U9MPOZrOWHd3yXoJpWQ7L?si=7rVCpU8_Q-2AM8wlbEM9rg",
"https://open.spotify.com/episode/3h3rQLWI5xRFmVzN7b3AVb?si=jLrgJrIZTK2HOCuT1mlMpA",
"https://open.spotify.com/episode/7pStrpEsj7iI3uwmwY1NdR?si=F7cKYlK4TWaZffmtAXJjRA",
"https://open.spotify.com/episode/6dSU8NeZAWAf4365k0p4PI?si=B8ZI07gmQma6Plf0fMNbrw",
"https://open.spotify.com/episode/5Hhtrw1r7rEIzbwAWapD2z?si=kQaSwRONRGa2CMlukRvUIA",
"https://open.spotify.com/episode/5UhbKpfmHCoZmzGMEUeCIf?si=7eKcq-ANRKGS9jyVvB82vQ",
"https://open.spotify.com/episode/4GucabZ4OgqiRD6JQ8Susc?si=pj7Nzp00TSuPZdzoXLBjOQ",
"https://open.spotify.com/episode/7FcxcGgrjNM9xAZrLBko03?si=l8rnjJjcQ3mN3UbgyysKcQ",
"https://open.spotify.com/episode/2WXmglWATLAmWJimzoxn0p?si=9aHSJdobRVuT1Lzyscx6Cw",
"https://open.spotify.com/episode/6t3OdlKmUpPqelxx6ePBxf?si=3iX8whamQt69feVJmcOfwg",
"https://open.spotify.com/episode/5CCBYbadIoWroTlnrEjah5?si=QTckMetFRN6TucDAHoS6hA",
"https://open.spotify.com/episode/1ZmKnC8rgOSw0CKnTxhKM0?si=j_2vaSgWRv-LNhJXC42atQ",
"https://open.spotify.com/episode/0Zn5UNVsXLuc3tv06B3Bc2?si=RNtdtgnaROCLklkZKPqEzw",
"https://open.spotify.com/episode/5zjBvCUaAMylxRUsurdEFm?si=6w6nhouARd61GjiRQJNstQ",
"https://open.spotify.com/episode/2P2KW1bFntthxxrciX3I5z?si=2fEfPobkSk6VUCX3aHCiKg",
"https://open.spotify.com/episode/2idCScOgnUi4OK8PEJQY3D?si=opWGn3gZRh2HoNKFi01IPg",
"https://open.spotify.com/episode/6ELgLZTb28nQDYTfyUxZoF?si=Ehes7hqaSN-mWfod9zPiQw",
"https://open.spotify.com/episode/4tKmOKCCgmJNLxkVn0k8cF?si=7K4m1BXkSWSJ-YSOYFOhcg",
"https://open.spotify.com/episode/06mQpj8Vtq3ZieksAwGzsr?si=2_6FGqcNREa-A5X2hPnAxQ",
"https://open.spotify.com/episode/4HKq2GcjENto1LrLqm6jIN?si=V4Nwp9aCSVOqWyHlXCfCIw",
"https://open.spotify.com/episode/3E5BME6wEn7HsnyfUOLvQf?si=wk16LOE-TlWqp4rxYhcDeA",
"https://open.spotify.com/episode/76WOKE4PUN9Ygf1JuM1gOR?si=A9XO7hcmTU2g8xd6pfVd5g",
"https://open.spotify.com/episode/2UWO1Yboq2AvqvH8noggdZ?si=eJP6vP8DTwiLRoKyB-Yuuw",
"https://open.spotify.com/episode/6giDZZII0Vd8eDHva9UvpA?si=9kG_cLMgQou5T5vBJcwELA",
"https://open.spotify.com/episode/6SSkpd6zu2LPxfk6KeTx8a?si=_waQiDgLTwmglqD2wnh1lg",
"https://open.spotify.com/episode/61eptv8OF3qWFyu7Nzn8iV?si=OYcYAA1ARMmvHqnl3s0vYQ",
"https://open.spotify.com/episode/1hwutTi9I2SwKZISPbo5mI?si=SdYNwRiKQLiBkbwsHb1PjQ",
"https://open.spotify.com/episode/0X8M11uyEFuUv9vZ6eP6b8?si=3KmddFcwTIyFoRoQJvqUJQ",
"https://open.spotify.com/episode/07TKyYFqPyxxvP58FBNOe4?si=08r7zDAVTsW9I0QQCBfQ7Q",
"https://open.spotify.com/episode/1yJOhogNfSYmgGX2ueFbS6?si=_LGGBQSGSwaxXeXQ5Aw25g",
"https://open.spotify.com/embed-podcast/episode/74JiyzO1hShz58wIUqsbcD?utm_source=generator"
]

var i, j, k, n = podcast_names.length;



function get_names()
{
    var i, j, k, n =podcast_names.length;
    console.log(n);
    i = 0;
    while(i < n)
    {
        new_div = document.createElement("div");
        new_div.classList.add("container");
        new_div.classList.add("my-4");

        new_row = document.createElement("div");
        new_row.classList.add("row");

        j = 0;
        while(j ++ < 4)
        {
            new_col = document.createElement("div");
            new_col.classList.add("col-md-4", "col-sm-6", "col-xs-12", "col-lg-3");

            new_card = document.createElement("div");
            new_card.classList.add("card");

            new_image = new Image(100, 230);
            new_image.classList.add("card-img-top");
            new_image.src = "OpenUp.JPG";
            
            card_body = document.createElement("div");
            card_body.classList.add("card-body");

            card_title = document.createElement("h5");
            card_title.classList.add("card-title");
            card_title.innerHTML = podcast_names[i];

            para = document.createElement("p");
            para.classList.add("card-text");
            para.innerHTML = "Some quick example text to build on the card title and make up the bulk of the card's content.";

            button_div = document.createElement("div");
            button_div.classList.add("d-flex", "justify-content-between", "align-items-center");

            button_group = document.createElement("div");
            button_group.classList.add("btn-group");

            button = document.createElement("button");
            button.classList.add("btn", "btn-primary", "text", "btn-outline-light");
            button.innerHTML = "View";
            console.log(podcast_links[i]);
            // button.addEventListener("click", function(){window.open(podcast_links[i])});
            button.addEventListener("click", function(){window.location.href = podcast_links[i]});

            // Append all the elements
            button_group.appendChild(button);
            button_div.appendChild(button_group);
            card_body.appendChild(card_title);
            card_body.appendChild(para);
            card_body.appendChild(button_div);

            new_card.appendChild(new_image);
            new_card.appendChild(card_body);
            new_col.appendChild(new_card);

            new_row.appendChild(new_col);
            i ++;

            
        }
        new_div.appendChild(new_row);
        document.body.appendChild(new_div);        
    }

}

function display_image()
{
    var image = new Image();
    image.src = "OpenUp.JPG";
    document.body.appendChild(image);
}

