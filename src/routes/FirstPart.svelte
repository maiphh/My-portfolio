<script>
    import Counter from "./Counter.svelte";
    </script>
    
    <div class="container">
        <div class="logo">
            <img src="\images\personal_logo\logo1-resize.png" alt="">
        </div>
    <div class="profile">
    
        
        <div class=" item intro">
            <div class="title">
                <p>Hi everyone, </p> 
               <p> Welcome To My Portfolio 👋</p>
            </div>
        </div>
        <div class="desciption item">
            <p>With a strong academic foundation in modern technologies and programming languages, as well as a good understanding of the IT industry, 
                I am well-prepared for IT roles. My commitment to staying updated with industry trends through self-learning makes me a valuable candidate.</p>
        </div>
    
        <div class="anchors">
            <div class="item"><p>experience</p></div>
            <div class="item"><p>project</p></div>
            <div class="item"><p>skill</p></div>
        </div>
        <div class="item info">
            <div class="ava">
                <div class="item ava-img"></div>
                <div class="name"></div>
            </div>
    
            <div class="score">
    
                <div class="item score-item gpa">
                    <div class='score-img'> <img src="\images\gmail logo.png" alt=""></div>
                    <div class="score-score">3.7/4</div>
                    <div class="score-sub">GPA</div>
                </div>
                <div class="item score-item ielts">
                    <div class='score-img'> <img src="\images\gmail logo.png" alt=""></div>
                    <div class="score-score">3.7/4</div>
                    <div class="score-sub">GPA</div>
                </div>
                <div class="item score-item clients">
                    <div class='score-img'> <img src="\images\gmail logo.png" alt=""></div>
                    <div class="score-score">3.7/4</div>
                    <div class="score-sub">GPA</div>
                </div>
                <div class="item score-item years">
                    <div class='score-img'> <img src="\images\gmail logo.png" alt=""></div>
                    <div class="score-score">3.7/4</div>
                    <div class="score-sub">GPA</div>
                </div>
            </div>
    
            <div class="contact-logos">
                <div class="contact-text">Contacts</div>
                <div class="item logos linkedin">
                    <img src="\images\linkedin logo.png" alt="">
                </div>
            
                <div class="item logos github">
                    <img src="\images\github logo.png" alt="">
                </div>
                
                <div class="item logos gmail">
                    <img src="\images\gmail logo.png" alt="">
                </div>
            
                <div class="item logos facebook">
                    <img src="..\src\lib\images\facebook logo.png" alt="">
                </div>
                
                </div>
            
        </div>
    
    </div>
    </div>
    
    <style>
    
    .container {
        margin-top: 3vh;
        margin-left: 3vw;
        margin-right: 3vw;
    }
    .logo {
        justify-self: start;
        align-self: start;
        margin-bottom: 5px;
    }
    .logo img{
        width: 7vw;
    }
    
    .profile {
        height: 93vh;
        width: 100vw;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr 1fr;
        gap: 15px;
    }
    
    .item {
        display:grid;
        background-color: #2b2b2b;
        border-radius: 2vw;
        align-items: center;
    
    }
    
    .info {
        grid-row: 1 / 5;
        grid-column: 3 / 4;
        background-color: #E7FE55;
        margin-right: 6vw;   
    }
    
    .ava {
        margin-top: 2vw;
        display: grid;
        justify-content: center;
        align-items: center;
    }
    
    .ava-img {
        width: 10vw;
        height: 10vw;
        min-width: 120px;
        min-height: 120px;
    }
    
    .score {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr;
        margin: 2vw;
        gap: 1vw;
    }
    
    .score-item {
        width: 10vw;
        height: 10vw;
        min-width: 120px;
        min-height: 120px;
        align-self: center;
        justify-self: center;
        background-color: #DAF051;
        border: none;
        display: grid;
        grid-template-rows: auto 2vw auto;
    }
    
    .score-img img{
        width: 20%;
        
        margin-left: 2vw;
        margin-top: 1.5vw;
    }
    
    .score-score {
        margin-top: -1vw;
        font-size: 2vw;
        font-weight: bolder;
        margin-left: 2vw;
        color: black;
    }
    
    .score-sub {
        margin-top: -0.7vw;
        font-size: 0.9vw;
        margin-left: 2vw;
        color: black;
    }
    
    .intro {
        grid-row: 1/3;
        grid-column: 1/3;
    }
    .intro .title {
        font-size: 3.5vw;
        font-weight: bolder;
        align-self: end;
        margin-left: 2vw;
        margin-bottom: 2vw;
    }
    
    .desciption{
        grid-row: 3/4;
        grid-column: 1/3;
    }
    .desciption p {
        font-size: 1.5vw;
        margin-left: 5vw;
        margin-right: 5vw;
        font-weight: lighter;
        align-self: center;
    }
    
    .anchors {
        grid-column: 1/3;
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 20px;
        }
    .anchors p{
        margin-left: 2vw;
    }
    
    
    
    .contact-logos{
        
        align-self: end;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: 1fr 1fr;
        width: auto;
        margin: 2vw;
    }
    
    .contact-text {
        grid-row: 1/2;
        grid-column: 1/5;
        margin: 1vw;
        color: black;
        font-weight: bolder;
        font-size: 1.2vw;
    }
    
    .logos {
        width: 3.5vw;
        height: 3.5vw;
        border-radius: 1vw;
        align-self: center;
        justify-self: center;
    }
    
    .linkedin {
        justify-content: center;
        align-items: center;
    }
    
    .linkedin img {
    
        width:1.7vw;
    }
    
    .github {
    
        justify-content: center;
        align-items: center;
    }
    
    .github img {
        width: 1.2vw;
    }
    .gmail {
    
        justify-content: center;
        align-items: center;
    }
    
    .gmail img {
        width: 1.7vw;
    }
    .facebook {
        justify-content: center;
        align-items: center;
        
    }
    .facebook img {
        width: 1.7vw;
    }
    </style>