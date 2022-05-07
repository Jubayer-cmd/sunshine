import React from "react";

const Blogs = () => {
  return (
    <div style={{ height: "100vh" }}>
      <h3 className="text-center text-primary">
        Difference between Node.JS and Javascript
      </h3>
      <p>
        Javascript is a programming language that is used for writing scripts on
        the website.Javascript can only be run in the browsers.
      </p>
      <p>
        NodeJS is a Javascript runtime environment.We can run Javascript outside
        the browser with the help of NodeJS.
      </p>
      <h3 className="text-center text-primary">
        When should you use nodejs and when should you use mongodb
      </h3>
      <p>
        When out website will be microservice. Node. js makes a good backend for
        these kinds of applications, providing serverless architecture and
        real-time communication support.
      </p>
      <p>
        MongoDB, and other NoSQL databases, are schemaless databases. This means
        that users can store unstructured data. The flexibility makes it easier
        to store data, yet also makes it more difficult to organize your data.
      </p>
      <h3 className="text-center text-primary">
        {" "}
        Differences between sql and nosql databases.
      </h3>
      <p>
        SQL is primarily called RDBMS or Relational Databases whereas NoSQL is a
        Non-relational or Distributed Database. Comparing SQL vs NoSQL database,
        SQL databases are table based databases whereas NoSQL databases can be
        document based, key-value pairs, graph databases. SQL databases are
        vertically scalable while NoSQL databases are horizontally scalable. SQL
        databases have a predefined schema whereas NoSQL databases use dynamic
        schema for unstructured data. Comparing NoSQL vs SQL performance, SQL
        requires specialized DB hardware for better performance while NoSQL uses
        commodity hardware.
      </p>
      <h3 className="text-center text-primary">
        What is the purpose of jwt and how does it work
      </h3>
      <p>
        JWT are mainly used for authentication. After a user logs in to an
        application, the application will create a JWT and send it back to the
        user. Subsequent requests by the user will include the JWT. The token
        tells the server what routes, services, and resources the user is
        allowed to access.
      </p>
    </div>
  );
};

export default Blogs;
