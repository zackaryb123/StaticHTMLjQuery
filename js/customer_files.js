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

function clickCustomerFiles() {
  let activeMenu = $('.sidebar-js').on('click', '#SideNav1', () => {
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
  })
}


function updateDirectory() {
  $('#UpdateCustomers').click(() => {
    $.getJSON({
      url: `http://localhost:8090/customers/updateDirectory`,
      type: 'GET',
      success: (data) => {
        console.log(data);
        handleCustomers(null, data);
      },
      error: (err) => {
        console.log(err);
      }
    });
  })
}

function handleCustomers(activeMenu, customers) {
  $('#accordion').html('');
  $.each(customers, (index, customer) => {
    $('#accordion').append(
      `<tr>
        <td class="card">
          <div class="card-header" id="headingOne">
            <h5 class="mb-0">
              <a id="${customer.customerId}" class="customer-dropdown-js" style="cursor: pointer" data-toggle="collapse" data-target="#collapse${customer.customerId}" aria-expanded="false" aria-controls="collapse${customer.customerId}">
                  ${customer.customerId}
              </a>
              <span style="float: right;">${customer.receivedFiles} Files</span>
            </h5>
          </div>
          <div id="collapse${customer.customerId}" class="collapse" aria-labelledby="headingOne" data-parent="#accordion">
            <table class="table table-striped table-sm">
              <thead>
                <tr>
                  <th><a href="#" class="sort-fileName">Name</a></th>
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
    console.log(customerId);
    $(`#files-js-${customerId}`).html('');
    console.log(customerId);
    return $.getJSON({
      url: `http://localhost:8090/customers/${customerId}`,
      type: 'GET',
      success: (data) => {
        console.log(data);
        let formatDate = data.dateTransfered.split('T')[0];
        data.taxFiles.forEach((file, index) => {
          $(`#files-js-${customerId}`).append(`
            <tr>
              <td>${file.fileName}</td>
              <td>${formatDate}</td>
              <td>${file.alertSent === null ? 'Not Sent' : file.alertSent}</td>
              <td>${file.noRecords}</td>
              <td>${file.amount}</td>
              <td>${file.dateMoved === null ? 'Not Moved' : file.datemoved}</td>
              <td>
              <div class="dropdown" style="display: inline-block; margin-left: 1rem; margin-bottom: .5rem;">
                  <button class="btn btn-sm btn-link dropdown-toggle" type="button" id="dropdownActionBtn" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Action
                  </button>
                  <div class="dropdown-menu file-actions" aria-labelledby="dropdownActionBtn" style="text-align: center;">
                      <a href="#" id="action1-${customerId}-${file.fileId}" class="dropdown-item action1">Move</a>
                      <a href="#" id="action3-${customerId}-${file.fileId}" class="dropdown-item action3">Open</a>
                      <a href="#" id="action2-${customerId}-${file.fileId}" class="dropdown-item action2">Remove</a>
                  </div>
              </div>
              </td>
            </tr>`
          );

          if (file.status === 'Moved') {
            $(`#action1-${customerId}-${file.fileId}`).attr('disabled', true).val('Moved').html('Moved');
            $(`#action2-${customerId}-${file.fileId}`).attr({'disabled': true, 'hidden': true});
          }

          if (file.status === 'Disabled') {
            $(`#action1-${customerId}-${file.fileId}`).attr({'disabled': true, 'hidden': true});
            $(`#action2-${customerId}-${file.fileId}`).val('Disabled').html('Enable').addClass('btn-success');
          }

          if (file.status === 'Enabled') {
            $(`#action2-${customerId}-${file.fileId}`).val('Enabled').html('Disable').addClass('btn-danger');
            $(`#action1-${customerId}-${file.fileId}`).attr({'disabled': false, 'hidden': false});
          }
        })
      }
    })
  })
}


function handleFileAction() {
  $('#accordion').on('click','.file-actions',(event) => {
    let targetArr = $(event.target).attr('id').split('-');

    let target = $(event.target);

    let action = targetArr[0];
    let customerId = targetArr[1];
    let fileId = targetArr[2];

    if(action === 'action1'){
      $.ajax({
        type: 'PUT',
        contentType: 'application/json',
        url: `http://localhost:8090/files/status/${customerId}/${fileId}`,
        data: JSON.stringify({
          fileId: fileId,
          status: 'Moved'
        }),
        beforeSend: () => {
          target.attr('disabled', true).val('Moving').html('Moving...');
          $(`#action2-${customerId}-${fileId}`).attr({'disabled': true, 'hidden': true});
        },
        success: (data) => {
          console.log(data);
          target.attr('disabled', true).val('Moved').html('Moved');
          $(`#action2-${customerId}-${fileId}`).attr({'disabled': true, 'hidden': true});
        },
        error: (err) => {
          console.log(err);
        }
      })
    }

    if(action === 'action3') {
      let targetArr = $(event.target).attr('id').split('-');

      let action = targetArr[0];
      let customerId = targetArr[1];
      let fileId = targetArr[2];

      let fileName = $(event.target).val();
      console.log(customerId);
      console.log(fileName);
    }

    if(action === 'action2') {
      $.ajax({
        type: 'PUT',
        contentType: 'application/json',
        url: `http://localhost:8090/files/status/${customerId}/${fileId}`,
        data: JSON.stringify({
          fileId: fileId,
          status: target.val() === 'Disabled'?'Enabled':'Disabled'
        }),
        success: (data) => {
          console.log(data);
          if(data.status === 'Disabled') {
            target.html('Enable').val('Disabled').removeClass('btn-danger').addClass('btn-success');
            $(`#action1-${customerId}-${fileId}`).attr({'disabled': true, 'hidden': true});
          }
          if(data.status === 'Enabled'){
            target.html('Disable').val('Enabled').addClass('btn-danger').removeClass('btn-success');
            $(`#action1-${customerId}-${fileId}`).attr({'disabled': false, 'hidden': false});
          }
        },
        error: (err) => {
          console.log(err);
        }
      })
    }
  })
}

$(document).ready(() => {
  updateDirectory();
  manageCustomerFiles();
  handleFiles();
  handleFileAction();
  clickCustomerFiles();
});