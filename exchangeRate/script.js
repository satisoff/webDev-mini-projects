@media (min-width: 1025px)   {
    /* Styles for Laptop */
    * {
        margin: 0;
        padding: 0;
    }

    body {
        font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    }

    header {
        background-color: #1c1d21;
        height: 20vmin;
        color: #f1e3e4;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        font-size: 3vmin;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
    }
    .page-title {
        font-size: 8vmin;
    }

    main {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 80vmin;
        background-color: #bb9bb0;
    }

    .container {
        box-sizing: border-box;
        display: grid;
        height: 60%;
        width: 69%;
        padding: 50px 40px;
        border-radius: 20px;
        background-color: #fff;
        box-shadow: 0 0 0 black,
                    0 8px 20px black;
        grid-template-rows: repeat(2, 1fr);
        text-align: center;
    }

    .reverse-btn > img {
        height: 100%;
        width: 100%;
    }
    .reverse-btn {
        height: 50px;
        width: 50px;
        background: none;
        border-radius: 50%;
        object-fit: cover;
        border: none;
    }

    .top-row {
        display: flex;
        justify-content: space-around;
        align-items: center;
    }

    .from-box, .to-box {
        display: flex;
        justify-content: center;
        width: 100%;
    }

    .from-cont, .to-cont {
        width: 50%;
        border-radius: 10px;
        padding-left: 10px;
        margin-left: 20px;
        font-size: 1.5rem;
        border: 2px solid black;
    }

    .bottom-row {
        grid-row-start: 1;
        margin-top: 60px;
        margin-left: 20px;
        max-width: 80%;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }

    .from-amount, .to-amount {
        width: 15rem;
        height: 5rem;
        margin-right: 70px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.5rem;
        border-radius: 10px;
    }

    .submit-btn-box {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .submit-btn-box > button {
        font-size: 1.6rem;
        border: 1px solid white;
        border-radius: 50px;
        padding: 1rem 2rem;
        background-color: #ccbcbc;
        color: #1c1d21;
        font-weight: 700;
    }

    .submit:hover {
        cursor: pointer;
        border: 2px solid darkgray;
    }

    .amount-input {
        width: 100%;
        height: 100%;
        border: none;
        font-size: 1.5rem;
        border-radius: 10px;
        text-align: center;
        outline: none;
    }

    .footer {
        text-align: center;
        background-color: #bb9bb0;
    }
    .copyright > a{
        text-decoration: none;
    }
}

@media (max-width: 767px) {
    /* Styling for Mobile */
    * {
        margin: 0;
        padding: 0;
    }

    body {
        font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
        width: 100%;        
        height: 100%;
        position: relative;
    }

    header {
        background-color: #1c1d21;
        height: 20vmin;
        color: #f1e3e4;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        font-size: 3vmin;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        position: sticky;
        top: 0;
    }

    .page-title {
        font-size: 1.8rem;
    }
    .page-subtitle {
        font-size: 0.7rem;
    }

    main {
        display: flex;
        justify-content: center;
        padding-top: 4rem;
        height: 45rem;
        background-color: #bb9bb0;
    }

    .container {
        display: grid;
        height: 35rem;
        padding: 2rem 2rem;
        border-radius: 20px;
        background-color: #fff;
        box-shadow: 0 0 0 black,
                    0 8px 20px black;
        grid-template-rows: repeat(2, 1fr);
        text-align: center;
    }

    .top-row {
        width: 15rem;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
    .top-row > div {
        height: 3rem;
        padding: 0.6rem 0;
    }

    .reverse-btn > img {
        height: 100%;
        width: 100%;
    }
    .reverse-btn {
        height: 50px;
        width: 50px;
        background: none;
        border-radius: 50%;
        object-fit: cover;
        border: none;
    }

    .from-box, .to-box {
        display: flex;
        justify-content: center;
        width: 100%;
    }

    .from-cont, .to-cont {
        width: 50%;
        border-radius: 10px;
        padding-left: 10px;
        margin-left: 20px;
        font-size: 1.5rem;
        border: 2px solid black;
    }

    .bottom-row {
        grid-row-start: 1;
        margin-top: 1.5rem;
        width: 15rem;
        flex-wrap: wrap;
        display: flex;
        justify-content: space-around;
    }

    .from-amount, .to-amount {
        width: 15rem;
        height: 5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.5rem;
        border-radius: 10px;
        margin: 0.5rem 0;
    }

    .amount-input {
        width: 100%;
        height: 100%;
        border: none;
        font-size: 1.5rem;
        border-radius: 10px;
        text-align: center;
        outline: none;
    }
    
    .submit-btn-box {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 2.5rem;
    }
    .submit-btn-box > button {
        font-size: 1.6rem;
        border: 1px solid white;
        border-radius: 50px;
        padding: 1rem 2rem;
        background-color: #ccbcbc;
        color: #1c1d21;
        font-weight: 700;
    }

    .footer {
        text-align: center;
        background-color: #bb9bb0;
    }
    .copyright > a{
        text-decoration: none;
    }
}

@media screen and (min-width: 768px) and (max-width: 1024px) {
    /* Styles for tablets */
    * {
        margin: 0;
        padding: 0;
    }

    body {
        font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
        width: 100%;        
        height: 100%;
        position: relative;
    }

    header {
        background-color: #1c1d21;
        height: 20vmin;
        color: #f1e3e4;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        font-size: 3vmin;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        position: sticky;
        top: 0;
    }

    .page-title {
        font-size: 2.65rem;
    }
    .page-subtitle {
        font-size: 1rem;
    }

    main {
        display: flex;
        justify-content: center;
        padding-top: 4rem;
        height: 45rem;
        background-color: #bb9bb0;
    }

    .container {
        width: 50%;
        text-align: center;
        display: flex;
        justify-content: center;
        height: 35rem;
        padding: 2rem 2rem;
        border-radius: 20px;
        background-color: #fff;
        box-shadow: 0 0 0 black,
                    0 8px 20px black;
    }

    .top-row {
        width: 20rem;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
    .top-row > div {
        height: 3rem;
        padding: 0.8rem 0;
    }

    .reverse-btn > img {
        height: 100%;
        width: 100%;
    }
    .reverse-btn {
        height: 50px;
        width: 50px;
        background: none;
        border-radius: 50%;
        object-fit: cover;
        border: none;
    }

    .from-box, .to-box {
        display: flex;
        justify-content: center;
        width: 100%;
    }

    .from-cont, .to-cont {
        width: 75%;
        border-radius: 10px;
        padding-left: 10px;
        margin-left: 20px;
        font-size: 1.5rem;
        border: 2px solid black;
    }

    .bottom-row {
        grid-row-start: 1;
        margin-top: 1.5rem;
        width: 20rem;
        flex-wrap: wrap;
        display: flex;
        justify-content: space-around;
    }

    .from-amount, .to-amount {
        width: 20rem;
        height: 5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.5rem;
        border-radius: 10px;
        margin: 0.5rem 0;
    }

    .amount-input {
        width: 100%;
        height: 100%;
        border: none;
        font-size: 1.5rem;
        border-radius: 10px;
        text-align: center;
        outline: none;
    }
    
    .submit-btn-box {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 2.5rem;
        justify-self: center;
    }
    .submit-btn-box > button {
        font-size: 1.6rem;
        border: 1px solid white;
        border-radius: 50px;
        padding: 1rem 2rem;
        background-color: #ccbcbc;
        color: #1c1d21;
        font-weight: 700;
    }

    .footer {
        text-align: center;
        background-color: #bb9bb0;
    }
    .copyright > a{
        text-decoration: none;
    }
}
