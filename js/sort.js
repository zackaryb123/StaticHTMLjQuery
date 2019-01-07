function handleSortByDateReceived() {
  $('#accordion').on('click', '.sort-dateReceived', (event) => {
    let target = $(event.target).parent().parent().parent().parent().parent().attr('id');
    let customerId = target.split('collapse')[1];

    $.getJSON({
      url: `http://localhost:8090/customers/${customerId}`,
      type: 'GET',
      success: (data) => {
        console.log(data.files);
        let sortedFiles = sortByDateReceived(data.files);
        console.log(sortedFiles);
        $(`#files-js-${customerId}`).html('');
        sortedFiles.forEach(file => {
          $(`#files-js-${customerId}`).append(`
            <tr>
              <td>${file.dateReceived}</td>
              <td>${file.alertSent}</td>
              <td>${file.noRecords}</td>
              <td>${file.amount}</td>
              <td>${file.dateMoved}</td>
              <td>
                <div class="dropdown" style="display: inline-block; margin-left: 1rem; margin-bottom: .5rem;">
                    <button class="btn btn-sm btn-outline-secondary dropdown-toggle" type="button" id="dropdownSortBtn" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Action
                    </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownSortBtn">
                        <a id="action1-${customerId}-${file.fileId}" class="dropdown-item sort-customer" href="#">Move File</a>
                        <a id="action2-${customerId}-${file.fileId}" class="dropdown-item sort-numFiles" href="#">Disable</a>
                    </div>
                </div>
              </td>
            </tr>
            `)
        });
      },
      error: (err) => {
        console.log(err);
      }
    });
  })
}

function handleSortByAlertSent() {
  $('#accordion').on('click', '.sort-alertSent', (event) => {
    let target = $(event.target).parent().parent().parent().parent().parent().attr('id');
    let customerId = target.split('collapse')[1];

    $.getJSON({
      url: `http://localhost:8090/customers/${customerId}`,
      type: 'GET',
      success: (data) => {
        console.log(data.files);
        let sortedFiles = sortByAlertSent(data.files);
        console.log(sortedFiles);
        $(`#files-js-${customerId}`).html('');
        sortedFiles.forEach(file => {
          $(`#files-js-${customerId}`).append(`
            <tr>
              <td>${file.dateReceived}</td>
              <td>${file.alertSent}</td>
              <td>${file.noRecords}</td>
              <td>${file.amount}</td>
              <td>${file.dateMoved}</td>
              <td>
                <div class="dropdown" style="display: inline-block; margin-left: 1rem; margin-bottom: .5rem;">
                    <button class="btn btn-sm btn-outline-secondary dropdown-toggle" type="button" id="dropdownSortBtn" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Action
                    </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownSortBtn">
                        <a id="action1-${customerId}-${file.fileId}" class="dropdown-item sort-customer" href="#">Move File</a>
                        <a id="action2-${customerId}-${file.fileId}" class="dropdown-item sort-numFiles" href="#">Disable</a>
                    </div>
                </div>
              </td>
            </tr>
            `)
        });
      },
      error: (err) => {
        console.log(err);
      }
    });
  })
}

function handleSortByNumRecords() {
  $('#accordion').on('click', '.sort-noRecords', (event) => {
    let target = $(event.target).parent().parent().parent().parent().parent().attr('id');
    let customerId = target.split('collapse')[1];

    $.getJSON({
      url: `http://localhost:8090/customers/${customerId}`,
      type: 'GET',
      success: (data) => {
        console.log(data.files);
        let sortedFiles = sortByNumRecords(data.files);
        console.log(sortedFiles);
        $(`#files-js-${customerId}`).html('');
        sortedFiles.forEach(file => {
          $(`#files-js-${customerId}`).append(`
            <tr>
              <td>${file.dateReceived}</td>
              <td>${file.alertSent}</td>
              <td>${file.noRecords}</td>
              <td>${file.amount}</td>
              <td>${file.dateMoved}</td>
              <td>
                <div class="dropdown" style="display: inline-block; margin-left: 1rem; margin-bottom: .5rem;">
                    <button class="btn btn-sm btn-outline-secondary dropdown-toggle" type="button" id="dropdownSortBtn" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Action
                    </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownSortBtn">
                        <a id="action1-${customerId}-${file.fileId}" class="dropdown-item sort-customer" href="#">Move File</a>
                        <a id="action2-${customerId}-${file.fileId}" class="dropdown-item sort-numFiles" href="#">Disable</a>
                    </div>
                </div>
              </td>
            </tr>
            `)
        });
      },
      error: (err) => {
        console.log(err);
      }
    });
  })
}

function handleSortByAmount() {
  $('#accordion').on('click', '.sort-amount', (event) => {
    let target = $(event.target).parent().parent().parent().parent().parent().attr('id');
    let customerId = target.split('collapse')[1];

    $.getJSON({
      url: `http://localhost:8090/customers/${customerId}`,
      type: 'GET',
      success: (data) => {
        console.log(data.files);
        let sortedFiles = sortByAmount(data.files);
        console.log(sortedFiles);
        $(`#files-js-${customerId}`).html('');
        sortedFiles.forEach(file => {
          $(`#files-js-${customerId}`).append(`
            <tr>
              <td>${file.dateReceived}</td>
              <td>${file.alertSent}</td>
              <td>${file.noRecords}</td>
              <td>${file.amount}</td>
              <td>${file.dateMoved}</td>
              <td>
                <div class="dropdown" style="display: inline-block; margin-left: 1rem; margin-bottom: .5rem;">
                    <button class="btn btn-sm btn-outline-secondary dropdown-toggle" type="button" id="dropdownSortBtn" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Action
                    </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownSortBtn">
                        <a id="action1-${customerId}-${file.fileId}" class="dropdown-item sort-customer" href="#">Move File</a>
                        <a id="action2-${customerId}-${file.fileId}" class="dropdown-item sort-numFiles" href="#">Disable</a>
                    </div>
                </div>
              </td>
            </tr>
            `)
        });
      },
      error: (err) => {
        console.log(err);
      }
    });
  })
}

function handleSortByDateMoved() {
  $('#accordion').on('click', '.sort-dateMoved', (event) => {
    let target = $(event.target).parent().parent().parent().parent().parent().attr('id');
    let customerId = target.split('collapse')[1];

    $.getJSON({
      url: `http://localhost:8090/customers/${customerId}`,
      type: 'GET',
      success: (data) => {
        console.log(data.files);
        let sortedFiles = sortByDateMoved(data.files);
        console.log(sortedFiles);
        $(`#files-js-${customerId}`).html('');
        sortedFiles.forEach(file => {
          $(`#files-js-${customerId}`).append(`
            <tr>
              <td>${file.dateReceived}</td>
              <td>${file.alertSent}</td>
              <td>${file.noRecords}</td>
              <td>${file.amount}</td>
              <td>${file.dateMoved}</td>
              <td>
                <div class="dropdown" style="display: inline-block; margin-left: 1rem; margin-bottom: .5rem;">
                    <button class="btn btn-sm btn-outline-secondary dropdown-toggle" type="button" id="dropdownSortBtn" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Action
                    </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownSortBtn">
                        <a id="action1-${customerId}-${file.fileId}" class="dropdown-item sort-customer" href="#">Move File</a>
                        <a id="action2-${customerId}-${file.fileId}" class="dropdown-item sort-numFiles" href="#">Disable</a>
                    </div>
                </div>
              </td>
            </tr>
            `)
        });
      },
      error: (err) => {
        console.log(err);
      }
    });
  })
}

function handleSortByCustomer() {
  $('.sort-customer').click(() => {
    $.getJSON({
      url: `http://localhost:8090/customers/`,
      type: 'GET',
      success: (data) => {
        console.log(data);
        let sortedCustomers = sortByCustomer(data);
        console.log(sortedCustomers);
        $('#accordion').html('');
        $.each(sortedCustomers, (index, customer) => {
          $('#accordion').append(
            `<tr>
              <td class="card">
                <div class="card-header" id="headingOne">
                  <h5 class="mb-0 d-flex justify-content-around">
                    <button id="${customer.customerId}" class="customer-dropdown-js btn btn-link" data-toggle="collapse" data-target="#collapse${customer.customerId}" aria-expanded="false" aria-controls="collapse${customer.customerId}">
                        ${customer.customerId}
                    </button>
                    <span>${customer.receivedFiles}</span>
                  </h5>
                </div>
                <div id="collapse${customer.customerId}" class="collapse" aria-labelledby="headingOne" data-parent="#accordion">
                  <table class="table table-striped table-sm">
                    <thead>
                    <tr>
                      <th><a href="#" class="sort-dateReceived">Date Received</a></th>
                      <th><a href="#" class="sort-alertSent">Alert Sent</a></th>
                      <th><a href="#" class="sort-noRecords"># Records</a></th>
                      <th><a href="#" class="sort-amount">Amount</a></th>
                      <th><a href="#" class="sort-dateMoved">Date Moved</a></th>
                      <th>Action</th>
                    </tr>
                    </thead>
                    <tbody id="files-js-${customer.customerId}">
                    
                    </tbody>
                  </table>
                </div>
              </td>
            </tr>`)
        });
      },
      error: (err) => {
        console.log(err);
      }
    })
  })
}

function handleSortByReceivedFiles() {
  $('.sort-numFiles').click(() => {
    $.getJSON({
      url: `http://localhost:8090/customers/`,
      type: 'GET',
      success: (data) => {
        console.log(data);
        let sortedCustomers = sortByReceivedFiles(data);
        console.log(sortedCustomers);
        $('#accordion').html('');
        $.each(sortedCustomers, (index, customer) => {
          $('#accordion').append(
            `<tr>
              <td class="card">
                <div class="card-header" id="headingOne">
                  <h5 class="mb-0 d-flex justify-content-around">
                    <button id="${customer.customerId}" class="customer-dropdown-js btn btn-link" data-toggle="collapse" data-target="#collapse${customer.customerId}" aria-expanded="false" aria-controls="collapse${customer.customerId}">
                        ${customer.customerId}
                    </button>
                    <span>${customer.receivedFiles}</span>
                  </h5>
                </div>
                <div id="collapse${customer.customerId}" class="collapse" aria-labelledby="headingOne" data-parent="#accordion">
                  <table class="table table-striped table-sm">
                    <thead>
                    <tr>
                      <th><a href="#" class="sort-dateReceived">Date Received</a></th>
                      <th><a href="#" class="sort-alertSent">Alert Sent</a></th>
                      <th><a href="#" class="sort-noRecords"># Records</a></th>
                      <th><a href="#" class="sort-amount">Amount</a></th>
                      <th><a href="#" class="sort-dateMoved">Date Moved</a></th>
                      <th>Action</th>
                    </tr>
                    </thead>
                    <tbody id="files-js-${customer.customerId}">
                    
                    </tbody>
                  </table>
                </div>
              </td>
            </tr>`)
        });
      },
      error: (err) => {
        console.log(err);
      }
    })
  })
}

$(document).ready(() => {
  handleSortByDateReceived();
  handleSortByAlertSent();
  handleSortByNumRecords();
  handleSortByAmount();
  handleSortByDateMoved();
  handleSortByCustomer();
  handleSortByReceivedFiles();
});

const sortByDateReceived = (files) => {
  return files.sort((file1, file2) => {
    date1 = file1.dateReceived.split('/').reverse().join('/');
    date2 = file2.dateReceived.split('/').reverse().join('/');
    if (date1 < date2) {
      return -1;
    } else if (date1 > date2) {
      return 1;
    } else {
      return 0;
    }
  });
};

const sortByDateMoved = (files) => {
  return files.sort((file1, file2) => {
    date1 = file1.dateMoved.split('/').reverse().join('/');
    date2 = file2.dateMoved.split('/').reverse().join('/');
    if (date1 < date2) {
      return -1;
    } else if (date1 > date2) {
      return 1;
    } else {
      return 0;
    }
  });
};

const sortByAmount = (files) => {
  return files.sort((file1, file2) => {
    if(file1.amount < file2.amount) return -1;
    else if (file1.amount > file2.amount) return 1;
    else return 0;
  })
};

const sortByNumRecords = (files) => {
  return files.sort((file1, file2) => {
    if(file1.noRecords < file2.noRecords) return -1;
    else if (file1.noRecords > file2.noRecords) return 1;
    else return 0;
  })
};

const sortByAlertSent = (files) => {
  return files.sort((file1, file2) => {
    date1 = file1.alertSent.split('/').reverse().join('/');
    date2 = file2.alertSent.split('/').reverse().join('/');
    if (date1 < date2) {
      return -1;
    } else if (date1 > date2) {
      return 1;
    } else {
      return 0;
    }
  });
};

const sortByCustomer = (customers) => {
  return customers.sort((customer1, customer2) => {
    if(customer1.customerId < customer2.customerId) return -1;
    else if(customer1.customerId > customer2.customerId) return 1;
    else return 0;
  })
};

const sortByReceivedFiles = (customer) => {
  return customer.sort((customer1, customer2) => {
    if(customer1.receivedFiles < customer2.receivedFiles) return -1;
    else if(customer1.receivedFiles > customer2.receivedFiles) return 1;
    else return 0;
  })
};