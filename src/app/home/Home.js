import React from 'react';

class Home extends React.Component {

  render() {
    return (
	    <div className="header-container">

	      <div className="header">
	        Ashhad's Pi
	      </div>

	      <div className="input-section">
	        <input type="file" />
	      </div>

	      <button className="store-btn">Store</button>

	      <form>
	          Upload a File:
	          <input type="file" name="myfile" id="fileToUpload" />
	          <input type="submit" name="submit" value="Upload File Now" />
	      </form>

	    </div>
    )
  }
}

export default (Home);
