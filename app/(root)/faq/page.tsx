'use client';
import React, { useState } from 'react';


interface FAQItem {
  question: string;
  answer: React.ReactNode;
}

const FAQ: React.FC = () => {
  // Danh sách các câu hỏi và câu trả lời
  const faqs: FAQItem[] = [
    {
      question: '1. What is an API?',
      answer: 'APIs are mechanisms that enable two software components to communicate with each other using a set of definitions and protocols. For example, the weather bureau’s software system contains daily weather data. The weather app on your phone “talks” to this system via APIs and shows you daily weather updates on your phone.',
    },
    {
      question: '2. What does API stand for?',
      answer: 'API stands for Application Programming Interface. In the context of APIs, the word Application refers to any software with a distinct function. Interface can be thought of as a contract of service between two applications. This contract defines how the two communicate with each other using requests and responses. Their API documentation contains information on how developers are to structure those requests and responses.',
    },
    {
      question: '3. How do APIs work?',
      answer: 'API architecture is usually explained in terms of client and server. The application sending the request is called the client, and the application sending the response is called the server. So in the weather example, the bureau’s weather database is the server, and the mobile app is the client. ',
    },
    {
      question: '4. Who are we and how can our API help your business?',
      answer: (
        <>
          Our API provides a powerful and flexible way to connect your systems with external services, helping businesses save time and costs in software development. Below are some solutions our API can offer: <br />
          <b>a. Easy Integration:</b> Our API can be integrated into any application, enabling businesses to quickly and efficiently connect internal systems with external services. <br />
          <b>b. Workflow Automation:</b> The API helps automate tasks, from processing transactions to updating customer information, improving productivity and reducing errors.
          <br/>
          <b>c. Time-saving Development:</b> Instead of building features from scratch, our API provides pre-built functions, allowing you to save development time and focus on core functionalities.
          <br/>
          <b>d. Scalability:</b>The API allows businesses to expand their integration capabilities with other systems without changing the existing application architecture.
          <br/>
          <b>e. Security and High Performance:</b> Our API ensures secure transactions, protecting data and optimizing performance when handling large amounts of requests.
          <br/>
          <b>f. Scalable and Flexible:</b> Supporting multiple HTTP methods (GET, POST, PUT, DELETE), our API offers flexible solutions for handling requests from different systems, tailored to meet your business needs.
        </>
      )

    },
  ];


  const [openIndex, setOpenIndex] = useState<number | null>(null);


  const toggleAnswer = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(null); 
    } else {
      setOpenIndex(index); 
    }
  };

  return (
    <div style={styles.container}>
      
      <div style={styles.faqList}>
        {faqs.map((faq, index) => (
          <div key={index} style={styles.faqItem}>
            <div
              style={styles.question}
              onClick={() => toggleAnswer(index)}
            >
              <strong>{faq.question}</strong>
            </div>
            {openIndex === index && (
              <div style={styles.answer}>
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

//CSS
const styles = {
  container: {
    padding: '20px',
    maxWidth: '800px',
    margin: '0 auto',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  title: {
    textAlign: 'center',
    marginBottom: '20px',
    fontSize: '2rem',
    color: '#333',
  },
  faqList: {
    listStyle: 'none',
    padding: '0',
  },
  faqItem: {
    marginBottom: '15px',
    padding: '10px',
    backgroundColor: '#fff',
    borderRadius: '5px',
    boxShadow: '0 1px 4px rgba(0, 0, 0, 0.1)',
  },
  question: {
    fontSize: '1.1rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    color: '#0052cc',
  },
  answer: {
    marginTop: '10px',
    fontSize: '1rem',
    color: '#555',
  },
};

export default FAQ;
