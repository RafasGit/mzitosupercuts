'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }

    return e(
        <form onSubmit={handleSubmit} style={styles.form}>
        <h1>Mpesa Payment Form</h1>
        {message && <p style={{ color: message.includes('failed') ? 'red' : 'green' }}>{message}</p>}
        <div style={styles.formGroup}>
          <label htmlFor="phone" style={styles.label}>Phone Number</label>
          <input
            type="number"
            id="phone"
            value={phone}
            onChange={handlePhoneChange}
            style={styles.input}
            required
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="accountNumber" style={styles.label}>Account Number</label>
          <input
            type="text"
            id="accountNumber"
            value={accountNumber}
            onChange={handleAccountNumberChange}
            style={styles.input}
            required
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="amount" style={styles.label}>Amount</label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={handleAmountChange}
            style={styles.input}
            required
          />
        </div>
        <button type="submit" style={styles.button}>Pay Now</button>
  
  
      </form>
    );
  }
}

const domContainer = document.querySelector('#like_button_container');
const root = ReactDOM.createRoot(domContainer);
root.render(e(LikeButton));