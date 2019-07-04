import React, {Component} from "react";
import { Link } from "react-router-dom";

class Footer extends Component {
  render() {
    return (
      <div>
        <footer style={styles.footer}>
          <Link style={styles.text} to='/pp/'>Privacy Policy</Link> -
          <Link style={styles.text} to='/tos/'>Terms of Use</Link> -
          <a style={styles.text} href='https://www.jetbrains.com/?from=SpaceflightNewsAPI' target='_blank' rel="noopener noreferrer">Jetbrains Software</a>
        </footer>
      </div>
    );
  }
}

const styles = {
  footer: {
    backgroundColor: '#2196F3',
    color: 'white',
    padding: 5,
    textAlign: 'center'
  },
  text: {
    color: 'white'
  }
};

export default Footer;
