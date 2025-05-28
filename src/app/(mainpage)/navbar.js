'use client';

import React from 'react';

const About = () => {
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#000', // Black background
      color: '#fff',           // White text for contrast
      height: '100vh',         // Full viewport height
      padding: '20px',         // Padding for spacing
      margin: '0',             // Remove default margin
    },
    title: {
      fontWeight: 'bold',
      fontSize: '36px',
      marginBottom: '20px',
      textAlign: 'center',
      color: '#fff',           // White text for title
    },
    description: {
      fontSize: '18px',
      maxWidth: '800px',
      textAlign: 'center',
      padding: '0 20px',
      color: '#fff',           // White text for description
    },
    gridContainer: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)', // 4 columns to alternate 2-3 pattern
      gap: '20px',
      width: '100%',
      maxWidth: '900px',
      marginTop: '40px',      // Space between description and grid
    },
    gridItem: {
      backgroundColor: '#ADD8E6', // Light Blue background for grid items
      padding: '20px',
      textAlign: 'center',
      borderRadius: '8px',
      width: '100%',            // Ensure the width is 100% within the column
      height: '200px',          // Fixed height to make items square-shaped
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      transition: 'transform 0.3s ease', // Add transition effect for hover
    },
    gridItemHover: {
      transform: 'scale(1.05)', // Slight zoom on hover
    },
    staggered: {
      gridRowEnd: 'span 1',  // Makes the item take up 1 row
      transform: 'translateY(-20px)', // Shift the item upward
    },
    staggeredItem: {
      gridRowEnd: 'span 1',  // Makes the item take up 2 rows for 3-item column
      transform: 'translateY(20px)', // Shift the item downward
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>About Us</h1>
      <p style={styles.description}>
        We are a team of passionate individuals committed to delivering high-quality solutions. Our mission is to provide excellent service and value to our clients through innovation, integrity, and dedication.
      </p>

      <div style={styles.gridContainer}>
        {/* Column 1 - 2 items */}
        <div style={{ ...styles.gridItem, ...styles.staggered }}>
          <h2>Item 1</h2>
          <p>Some information about the item.</p>
        </div>
        <div style={styles.gridItem}>
          <h2>Item 2</h2>
          <p>Some information about the item.</p>
        </div>

        {/* Column 2 - 3 items */}
        <div style={styles.gridItem}>
          <h2>Item 3</h2>
          <p>Some information about the item.</p>
        </div>
        <div style={{ ...styles.gridItem, ...styles.staggeredItem }}>
          <h2>Item 4</h2>
          <p>Some information about the item.</p>
        </div>
        <div style={styles.gridItem}>
          <h2>Item 5</h2>
          <p>Some information about the item.</p>
        </div>

        {/* Column 3 - 2 items */}
        <div style={{ ...styles.gridItem, ...styles.staggered }}>
          <h2>Item 6</h2>
          <p>Some information about the item.</p>
        </div>
        <div style={styles.gridItem}>
          <h2>Item 7</h2>
          <p>Some information about the item.</p>  
        </div>

        {/* Column 4 - 3 items */}
        <div style={styles.gridItem}>
          <h2>Item 8</h2>
          <p>Some information about the item.</p>
        </div>
        <div style={{ ...styles.gridItem, ...styles.staggeredItem }}>
          <h2>Item 9</h2>
          <p>Some information about the item.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
