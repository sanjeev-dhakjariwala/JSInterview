/**
 * Callback hell example
 */

const fakeRequestCallback = (url, success, failure) => {
  const delay = Math.floor(Math.random() * 4500);
  setTimeout(() => {
    if (delay > 4000) {
      console.log(failure);
      failure(`Connection Timed out :(`);
    } else {
      console.log(success);
      success(`Here is your fake data from ${url}`);
    }
  }, delay);
};

fakeRequestCallback(
  `books.com/page1`,
  (response) => {
    console.log(response);
    fakeRequestCallback(
      `books.com/page2`,
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  },
  (error) => {
    console.log(error);
  }
);
/**
 * Callback hell example from BARD
 */
/* function readFromFile(filename, callback) {
  fs.readFile(filename, "utf8", function (err, data) {
    if (err) {
      return callback(err);
    }

    callback(null, data);
  });
}

function parseJSON(jsonString, callback) {
  try {
    const data = JSON.parse(jsonString);
    callback(null, data);
  } catch (err) {
    callback(err);
  }
}

function writeToFile(filename, data, callback) {
  fs.writeFile(filename, data, function (err) {
    if (err) {
      return callback(err);
    }

    callback(null);
  });
} */

// Read the JSON file
/* readFromFile("data.json", function (err, data) {
  if (err) {
    return console.log(err);
  }

  // Parse the JSON data
  parseJSON(data, function (err, data) {
    if (err) {
      return console.log(err);
    }

    // Write the parsed data to a new file
    writeToFile("output.json", JSON.stringify(data), function (err) {
      if (err) {
        return console.log(err);
      }

      console.log("The file was successfully written.");
    });
  });
}); */

/**
 * Callback hell example from ChatGPT
 */
/* getUserInfo(function (user) {
  getOrders(user.id, function (orders) {
    for (var i = 0; i < orders.length; i++) {
      getOrderDetails(orders[i].id, function (orderDetails) {
        processOrder(orderDetails, function (result) {
          console.log(result);
        });
      });
    }
  });
}); */
