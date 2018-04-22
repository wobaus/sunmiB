import React from 'react';

const Resume = () => (
    <resume>
        <div className="container-fluid bg-2 text-left">
            <div className="container-fluid resumeSection">
                <h3><i class="fas fa-file"></i> Project  </h3> <br/>
                <h4>Smart Ring, 2018 March</h4>
                <p>A web application that displays nearby air quality using with Arduino, Adafruit MiCS5524 CO / Alcohol / VOC Gas Sensor.  </p>
                <p>Tools Used: Arduino, JavaScript. </p> 
                <br/>
                <h4>JustinThyme, 2017 November </h4>
                <p>An information web application used to guide users on best practices for their gardening projects. </p>
                <p>Features data storage, user-friendly UI, and dynamic reminders</p> 
                <p> Tools Used: Java, MySQL, JavaScript, CSS, HTML, Twilio, and SQL </p> 
                <p> I was in charge of taking logged in user info and display with edit functionality</p> 

            </div>
            <div className="container-fluid resumeSection">
                <h3><i class="fas fa-graduation-cap"></i> Education  </h3>
                <h4>Launch Code LC101, Portland,OR Apr 2017 - Nov 2017 </h4>
                <p> •	Pursued Java and Python coursework for 8 months to obtain a thorough understanding of both languages </p>
                <p> •	Studied algorithm (i.e. big-O notation), data structures (i.e. recursion, linked list), and computational thinking </p>
                <p> •	Collaborated on a group project with other developers using VCS and Github</p>
                <br/>
                <h4>Bachelor in Multi Media Business, Hannam University, Daejeon South Korea. </h4>
            </div>
            <div className="container-fluid resumeSection">
                <h3><i class="fas fa-briefcase"></i> Experience  </h3>
                <h4>Commercial Representative, Infinite Energy; Atlanta, GA Sep 2014 - Jan 2016 </h4>
                <p> •	Resolved problems related to natural gas contracts and account inquiries for over 1000 accounts including Chipotle and Chick-fil-a </p>
                <p> •	Negotiated natural gas market price for new clients and processed renewal contracts to retain old clients </p>
                <p> •	Executed and processed contracts for over a million-dollar revenue</p>
                <br/>
                <h4>Account Service, Infinite Energy; Atlanta, GA July 2007 - Sep 2014</h4>
                <p> •	Coordinated with sales rep and generated 30% of company revenue </p>
                <p> •	Worked closely with customer service and legal department to help customers with language barriers </p>

            </div>
        </div>
    </resume>
);

export default Resume;
