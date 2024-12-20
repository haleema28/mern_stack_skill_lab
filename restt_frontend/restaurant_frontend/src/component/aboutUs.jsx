import React from "react";

const AboutUs = () => {
    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>About Us</h1>
            <p style={styles.paragraph}>
                Welcome to <strong>Restaurant Management</strong>, your go-to platform for managing restaurants efficiently. Our mission is to provide an intuitive, user-friendly system that simplifies restaurant management and enhances productivity.
            </p>
            <p style={styles.paragraph}>
                Whether you are adding new restaurants, updating details, or keeping track of top-rated dishes, our platform is designed to make your life easier. With robust features and a seamless interface, we ensure all your restaurant management needs are met.
            </p>
            <p style={styles.paragraph}>
                <strong>Why Choose Us?</strong>
            </p>
            <ul style={styles.list}>
                <li>Easy-to-use management tools</li>
                <li>Real-time updates for restaurant data</li>
                <li>Modern and responsive design</li>
                <li>Secure and reliable infrastructure</li>
            </ul>
            <p style={styles.paragraph}>
                Thank you for choosing <strong>Restaurant Management</strong>. Together, let's build a smarter way to manage restaurants!
            </p>
        </div>
    );
};

const styles = {
    container: {
        padding: "20px",
        maxWidth: "800px",
        margin: "0 auto",
        fontFamily: "'Arial', sans-serif",
        color: "#333",
        lineHeight: "1.6",
    },
    heading: {
        fontSize: "2.5rem",
        textAlign: "center",
        marginBottom: "20px",
        color: "#007bff",
    },
    paragraph: {
        marginBottom: "15px",
        fontSize: "1.1rem",
    },
    list: {
        paddingLeft: "20px",
        listStyleType: "disc",
        marginBottom: "15px",
    },
};

export default AboutUs;
