function manageCustomerSettings() {
  return $.getJSON({
    url: 'http://localhost:8090/customers',
    type: 'GET',
    success: (data) => {
      console.log("alarm");
      console.log(data);
      handleCustomerAlarms("SideNav5", data);
    },
    error: (err) => {
      console.log(err);
    }
  });

};

function handleCustomerAlarms(activeMenu, customers) {
  $('#accordionAlarm').html('');
  $.each(customers, (index, customer) => {
    $('#accordionAlarm').append(
      `<tr>
        <td class="card">
          <div class="card-header" id="headingOne">
            <h5 class="mb-0">
              <button id="${customer.customerId}" class="alarm-dropdown-js btn btn-link" data-toggle="collapse" data-target="#collapse${customer.customerId}" aria-expanded="false" aria-controls="collapse${customer.customerId}">
                  ${customer.customerId}
              </button>
            </h5>
          </div>
          <div id="collapse${customer.customerId}" class="collapse" aria-labelledby="headingOne" data-parent="#accordion">
            <table class="table table-striped table-sm">
              <thead>
                <tr>
                  <th><a href="#" class="">Initial Alert</a></th>
                  <th><a href="#" class="">5th of Month Alert</a></th>
                  <th><a href="#" class="">7th of Month Alert</a></th>
                </tr>
              </thead>
              <tbody id="alarm-js-${customer.customerId}">

              </tbody>
            </table>
          </div>
        </td>
      </tr>`)
  });
}

function handleAlarms() {
  $('#accordionAlarm').on('click', '.alarm-dropdown-js', () => {
    let customerId = $(event.target).attr('id');
    $(`#alarm-js-${customerId}`).html('');
    console.log(customerId);
    $(`#files-js-${customerId}`).html('');
    console.log(customerId);
    return $.getJSON({
      url: `http://localhost:8090/customers/${customerId}`,
      type: 'GET',
      success: (data) => {
        console.log(data);
          $(`#alarm-js-${data.customerId}`).append(`
            <tr>
              <th>
                <span id="1-${data.customerId}" class="alarmSetting btn btn-link">${data.alarmDateInitial.toUpperCase()}</span>
              </th>
              <th>
              <span id="5-${data.customerId}" class="alarmSetting btn btn-link">${data.alarmDateFifth.toUpperCase()}</span>
              </th>
              <th>
              <span id="7-${data.customerId}" class="alarmSetting btn btn-link">${data.alarmDateSeventh.toUpperCase()}</span>
              </th>
            </tr>`)
      }
    })
  })
}

function handleAlarmChange() {
  $('#accordionAlarm').on('click', '.alarmSetting' , () => {
    console.log("YN Click");
    let targetArr = $(event.target).attr('id').split('-');
    let alarm = targetArr[0];
    let customerId = targetArr[1];
    let value = $(event.target).html();
    console.log(alarm);
    console.log(customerId);

    if(value === "Y") {
      value = "N";
      $(event.target).html('N');
    }
    else {
      value = "Y";
      $(event.target).html('Y');
    }

    let newCust = {
      customerId:customerId
    };

    switch(alarm){
      case '1':
        newCust = {
          ...newCust,
          alarmDateInitial: value
        };
        break;
      case '5':
        newCust = {
          ...newCust,
          alarmDateFifth: value
        };
        break;
      case '7':
        newCust = {
          ...newCust,
          alarmDateSeventh: value
        };
        break;

    }

    console.log(newCust);

    return $.ajax({
      url: `http://localhost:8090/customers/alarm${alarm}/${customerId}`,
      type: 'PUT',
      data: JSON.stringify(newCust),
      contentType: 'application/json',
      success: (data) => {
        console.log(data);
        // manageCustomerSettings();
      },
      error: (err) => {
        console.log(err);
      }
    });
  });
}



$('#SideNav5').click(() => {
  console.log("clicked");
  manageCustomerSettings();
  handleAlarmChange();
});

$('#DropdownNav5').click(() => {
  manageCustomerSettings();
  handleAlarmChange();
});

$(document).ready(() => {
  handleAlarms();
})
