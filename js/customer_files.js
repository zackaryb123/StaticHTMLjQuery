function manageCustomerFiles() {
  let activeMenu = $('.sidebar-js').find('.active').attr('id');
  if(activeMenu === 'SideNav1') {
    return $.getJSON({
      url: 'http://localhost:8090/customers',
      type: 'GET',
      success: (data) => {
        console.log(data);
        handleCustomers(activeMenu, data);
      },
      error: (err) => {
        console.log(err);
      }
    });
  }
}

function handleCustomers(activeMenu, customers) {
  $.each(customers, (index, customer) => {
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
}

function handleFiles() {
  $('#accordion').on('click', '.customer-dropdown-js', () => {
    let customerId = $(event.target).attr('id');
    $(`#files-js-${customerId}`).html('');
    console.log(customerId);
    return $.getJSON({
      url: `http://localhost:8090/customers/${customerId}`,
      type: 'GET',
      success: (data) => {
        console.log(data);
        data.files.forEach((file) => {
          $(`#files-js-${customerId}`).append(`
            <tr>
              <td>${file.dateReceived}</td>
              <td>${file.alertSent}</td>
              <td>${file.noRecords}</td>
              <td>${file.amount}</td>
              <td>${file.dateMoved}</td>
              <td>
                <div class="d-flex justify-content-between">
                    <span class="small">Move File</span><input type="checkbox" aria-label="Checkbox for following text input">
                </div>
                <div class="d-flex justify-content-between">
                    <span class="small">Disable</span><input type="checkbox" aria-label="Checkbox for following text input">
                </div>
              </td>
            </tr>`)
        });
      },
      error: (err) => {
        console.log(err);
      }
    });
  });
}

$(document).ready(() => {
  manageCustomerFiles();
  handleFiles();
});