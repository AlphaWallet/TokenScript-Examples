//<![CDATA[
class Token {

    constructor(tokenInstance) {
        this.props = tokenInstance;
        this.props.underlyingToken = this.props.label.replace("a", "");
        this.props.rate = (1 / (this.props.exchangeRate / 1e28)).toFixed(2);
        if(this.props.label === "aUSDC") {
            this.props.rate = (this.props.rate / 1e12).toFixed(2);
        } else if(this.props.label === "aWBTC") {
            this.props.rate = (this.props.rate / 1e10).toFixed(2);
        } else {
            this.props.rate = (this.props.rate / 1e18).toFixed(2)
        }
    }

    render() {
        const decimals18 = 1e+18;
        let aTokenBalance = (this.props.aTokenBalance / decimals18).toFixed(2);
        let tokenBalance = (this.props.tokenBalance / decimals18).toFixed(2);
        let interestRatePerBlock = this.props.supplyInterestRate;
        const averageBlocksPerYear = 2102400;
        let APR = (((interestRatePerBlock * averageBlocksPerYear) / decimals18) * 100).toFixed(2);
        return`
        <div class="ui container">
          <div class="ui segment">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACWCAYAAABkW7XSAAAABGdBTUEAALGPC/xhBQAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAABLKADAAQAAAABAAAAlgAAAABqg2PNAAAw60lEQVR4Ae19CYBUxbX2Xbt7BhBBVFySqNHE3yUmrjwVFRVRFBGREcI2DDFEDeZJoom/+uz/Ja6JopgNozAsCg6CC4KCwAiiMTyTaNTEp1GjRhNX1mF6ucv/nbpd3bdv357p6ZmeBU5Bz619+W7VuadOnapSFDaMACPACDACjAAjwAgwAowAI8AIMAKMACPACDACjAAjwAgwAowAI8AIMAKMACPACDACjAAjwAgwAowAI8AIMAKMACPACDACjAAjwAgwAowAI8AIMAKMACPACDACjAAjwAgwAowAI8AIMAKMACPACDACjAAjwAgwAowAI8AIMAKMACPACDACjAAjwAgwAowAI8AIMAKMACPACDACjAAjwAgwAowAI8AIMAKMACPACDACjAAjwAgwAowAI8AIMAKMACPACDACjAAjwAgwAowAI8AIMAKMACPACDACjAAjwAgwAowAI8AIMAKMACPACDACjAAjwAgwAowAI8AIMAKMACPACDACjAAjwAgwAowAI8AIMAKMACPACDACjAAjwAgwAowAI8AIMAKMACPACDACjAAjwAgwAowAI8AIMAKMACPACDACjAAjwAgwAowAI8AIMAKMACPACDACjAAjwAgwAowAI8AIMAK7PALxeFwb0/B6ZExDQ2SXb2yggfHGRmP6rJXRhoYGPRDU4c543NU6PNNOyrBhTOXx6aSm9Lhi1B5X4wpV+NvLNow0VO3bruscqrhuRHVVF0Vt1zXtBVtxfzf/4sFvVqjoLs32ul8u26uX2usyVXHPVhR3b9d1dU3R0qqqfAgcnoimti+YMaOmuSMqOTfeGNvWa8cVmqtdpLhKb0VVXk+nrHtm3DDypY7Iv9J5LJyx5CxVVa9AvQ9B/T93HOvBt/u+MQ8fOaeUshdcufhYU9UHqapTZdu2kv0qBFPDrSkZT19YlsILv0yATXEzxhfXS+7kwigKhSM+lesojoq6bLcVdcMFD0/6GwX3BLPbEyzipAx931mGaU7TNUNxbEtRXaJVeLEYtZpuKHYy9amSTtfN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"/>
            <span><bold><h3>${this.props.label} Balance: ${aTokenBalance}</h3></bold></span>
            <span><bold><h3>${this.props.underlyingToken} Balance: ${tokenBalance}</h3></bold></span>
            <span><bold><h3>Interest Rate: ${APR}%</h3></bold></span>
            <span><bold><h3>1 ${this.props.underlyingToken} = ${this.props.rate} ${this.props.label}</h3></bold></span>
          </div>
          <div id="inputBox">
              <bold><h3>Repay ${this.props.underlyingToken} to Aave</h3></bold>
              <span><input id="repayAmount" type="number"></span>
              <span><input id="debtHolder" type="text">${this.props.ownerAddress}</span>
          </div>
        </div>
`;
    }
}

web3.tokens.dataChanged = (oldTokens, updatedTokens, tokenCardId) => {
    const currentTokenInstance = web3.tokens.data.currentInstance;
    document.getElementById(tokenCardId).innerHTML = new Token(currentTokenInstance).render();
};
//]]>
