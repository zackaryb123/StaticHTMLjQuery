function manageCustomerSettings() {

  return $.getJSON({
    url: 'http://localhost:8090/customers',
    type: 'GET',
    success: (data) => {
      console.log("alarm");
      console.log(data);
      handleAlarmCustomers("SideNav5", data);
    },
    error: (err) => {
      console.log(err);
    }
  });

};

function handleAlarmCustomers(activeMenu, customers)
{
  $('#accordionAlarm').html("");

  $.each(customers, (index, customer) => {
    $('#accordionAlarm').append(
      `<tr>
        <td class="card">
          <div class="card-header" id="headingOne">
            <h5 class="mb-0 d-flex justify-content-around">
              <span>${customer.customerId}</span>
              <span id="1${customer.customerId}" class="alarmSetting btn btn-link">${customer.alarmDateInitial.toUpperCase()}</span>
              <span id="5${customer.customerId}" class="alarmSetting btn btn-link">${customer.alarmDateFifth.toUpperCase()}</span>
              <span id="7${customer.customerId}" class="alarmSetting btn btn-link">${customer.alarmDateSeventh.toUpperCase()}</span>
            </h5>
          </div>
        </td>
      </tr>`)
  });
}

function handleAlarmChange() {
  $('#accordionAlarm').on('click', '.alarmSetting' , () => {
    console.log("YN Click");
    let clickId = $(event.target).attr('id');
    console.log(clickId);
    let spot = clickId.substring(0,1);
    let alarmSpot = 'alarm' + spot;
    let customerId = clickId.substring(1);
    let YN = $(event.target).html();
    console.log(YN);
    if(YN === "Y")
      YN = "N";
    else
      YN = "Y";


    let newCust = {
      customerId:customerId
    };

    switch(spot){
      case '1':
        newCust = {
          ...newCust,
          alarmDateInitial: YN
        };
        break;
      case '5':
        newCust = {
          ...newCust,
          alarmDateFifth: YN
        };
        break;
      case '7':
        newCust = {
          ...newCust,
          alarmDateSeventh: YN
        };
        break;

    }

    console.log(newCust);

    return $.ajax({
      url: `http://localhost:8090/customers/${alarmSpot}/${customerId}`,
      type: 'PUT',
      data: JSON.stringify(newCust),
      contentType: 'application/json',
      success: (data) => {
        console.log(data);
        manageCustomerSettings();
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
