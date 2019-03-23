import React, {Component} from "react";
import { Link } from "react-router-dom";

class Footer extends Component {
  render() {
    return (
      <div>
        <footer style={styles.footer}>
          <Link to='/pp/'>Privacy Policy</Link> -
          <Link to='/tos/'>Terms of Use</Link> -
          <a href='https://www.jetbrains.com/?from=SpaceflightNewsAPI' target='_blank' rel="noopener noreferrer">Jetbrains Software</a>
        </footer>
      </div>
    );
  }
}

const styles = {
  footer: {
    backgroundColor: '#2c3e50',
    color: 'white',
    padding: 5,
    textAlign: 'center'
  }
};

export default Footer;
