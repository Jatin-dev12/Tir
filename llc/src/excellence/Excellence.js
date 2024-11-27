import React, { useState } from 'react';
import '../App.css'; // Assuming we are using a separate CSS file for styles

const Excellence = () => {
  const [modalContent, setModalContent] = useState(null); // For storing the content of the modal

  // Function to handle click on plus icon
  const handlePlusClick = (content) => {
    setModalContent(content);
  };

  return (
    <section className="section-2">
      <div>
        <h1 style={{ color: "white", fontSize: "35px" }}>
          Sphere Of Excellence
        </h1>
        <p style={{ color: "white", fontSize: "21px" }}>
          Lorem ipsum dolor sit amet consectetur adipiscing elit, rhoncus vitae velit interdum gravida dictumst
          <br />sollicitudin fusce ornare curae quam turpis montes enim.
        </p>
      </div>

      <div>
        <div className="div-container">
          <div className="div-item">
            <h1 className="bottom-left-text">Technology</h1>
            <p className="bottom-left-text">
              Lorem ipsum dolor sit amet consectetur asgdjasdgakj, <br />aenean natoque etiam lacus ligula arcu dignissim cum
            </p>
            <div className="circle-icon" onClick={() => handlePlusClick('Technology')}>
              <img src={require('./Vector (7).png')} alt="+" className="plus-icon" />
            </div>
            Item 1
          </div>

          <div className="div-item">
            <h1 className="bottom-left-text">Strategy & Business Development</h1>
            <p className="bottom-left-text">
              Lorem ipsum dolor sit amet consectetur asgdjasdgakj, <br />aenean natoque etiam lacus ligula arcu dignissim cum
            </p>
            <div className="circle-icon" onClick={() => handlePlusClick('Strategy & Business Development')}>
              <img src={require('./Vector (7).png')} alt="+" className="plus-icon" />
            </div>
            Item 2
          </div>

          <div className="div-item">
            <h1 className="bottom-left-text">Finance</h1>
            <p className="bottom-left-text">
              Lorem ipsum dolor sit amet consectetur asgdjasdgakj, <br />aenean natoque etiam lacus ligula arcu dignissim cum
            </p>
            <div className="circle-icon" onClick={() => handlePlusClick('Finance')}>
              <img src={require('./Vector (7).png')} alt="+" className="plus-icon" />
            </div>
            Item 3
          </div>

          <div className="div-item">
            <h1 className="bottom-left-text">Heading 2</h1>
            <p className="bottom-left-text">
              Lorem ipsum dolor sit amet consectetur asgdjasdgakj, <br />aenean natoque etiam lacus ligula arcu dignissim cum
            </p>
            <div className="circle-icon" onClick={() => handlePlusClick('Heading 2')}>
              <img src={require('./Vector (7).png')} alt="+" className="plus-icon" />
            </div>
            Item 4
          </div>
        </div>
      </div>

      {/* Modal for detailed explanation */}
      {modalContent && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>{modalContent}</h2>
            <p>Here is the detailed explanation about {modalContent}...</p>
            <button onClick={() => setModalContent(null)}>Close</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Excellence;
