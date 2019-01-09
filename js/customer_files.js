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
                <th><a href="#" class="sort-dateReceived">File</a></th>
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
        $.each(data.files, (index, file) => {
          $(`#files-js-${customerId}`).append(`
             <tr>
              <td>${file.fileName}</td>
              <td>
                <button id="OpenFile-${file.fileId}" class="btn btn-link">Open File</button>
              </td>
            </tr>
          `)
        })
      },
      error: (err) => {
        console.log(err);
      }
    });
  });
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
});