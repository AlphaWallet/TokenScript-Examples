//<![CDATA[
class Token {

    constructor(token, card) {
        this.token = token;
        this.card = card;
        this.time = this.formatTimeStampTodayTime(this.card.timestamp.date) + " | " + this.formatTimeStamp(this.card.timestamp.date);
    }

    formatTimeStampTodayTime(time) {
        let a = new Date(time);
        let hours = a.getHours();
        let minutes = a.getMinutes();
        let ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0' + minutes : minutes;
        return hours + ':' + minutes + ' ' + ampm;
    }

    formatTimeStamp(time) {
        let a = new Date(time);
        let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
        let year = a.getFullYear();
        let month = months[a.getMonth()];
        let date = a.getDate();
        return date + ' ' + month + ' ' + year;
    }

    render() {
        return`
        <div>
            <div class="headerRectangle">
                <div class="date">
                    <p>${this.time}</p>
                </div>
                
                <div class="icons">
                    <img class="logo" src="data:image/png;base64,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">
                </div>
                
                <div class="depositContainer">
                    <p>Repaid DAI</p>
                </div>
            </div>
            
            <div class="separator"></div>
             
            <div class="amountBox">
                <p>- ${this.card._amountMinusFees / 1e+18} DAI</p>
            </div>
        </div>
`;
    }
}

web3.tokens.dataChanged = (oldTokens, updated, tokenIdCard) => {
    document.getElementById(tokenIdCard).innerHTML = new Token(updated.token, updated.card).render();
};
//]]>
