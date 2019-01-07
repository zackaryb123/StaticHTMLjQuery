// Side Navigation
function sideNavigation() {
  $('#SideNav1').on('click', () => {
    $('#HeaderText').text('Customer Files');
    $('#CustomerFilesSection').attr('hidden', false);
    $('#ScriptConfigSection').attr('hidden', true);
    $('#UpdateCustomerSection').attr('hidden', true);
    $('#RegisterUserSection').attr('hidden', true);
    $('#AlarmSettingsSection').attr('hidden', true);

    $('#SideNav1').addClass('active');
    $('#SideNav2').removeClass('active');
    $('#SideNav3').removeClass('active');
    $('#SideNav4').removeClass('active');
    $('#SideNav5').removeClass('active');
  });

  $('#SideNav2').click(() => {
    $('#HeaderText').text('Email/Text Script Config');
    $('#CustomerFilesSection').attr('hidden', true);
    $('#ScriptConfigSection').attr('hidden', false);
    $('#UpdateCustomerSection').attr('hidden', true);
    $('#RegisterUserSection').attr('hidden', true);
    $('#AlarmSettingsSection').attr('hidden', true);

    $('#SideNav1').removeClass('active');
    $('#SideNav2').addClass('active');
    $('#SideNav3').removeClass('active');
    $('#SideNav4').removeClass('active');
    $('#SideNav5').removeClass('active');
  });

  $('#SideNav3').click(() => {
    $('#HeaderText').text('Update Customer');
    $('#CustomerFilesSection').attr('hidden', true);
    $('#ScriptConfigSection').attr('hidden', true);
    $('#UpdateCustomerSection').attr('hidden', false);
    $('#RegisterUserSection').attr('hidden', true);
    $('#AlarmSettingsSection').attr('hidden', true);

    $('#SideNav1').removeClass('active');
    $('#SideNav2').removeClass('active');
    $('#SideNav3').addClass('active');
    $('#SideNav4').removeClass('active');
    $('#SideNav5').removeClass('active');
  });

  $('#SideNav4').click(() => {
    $('#HeaderText').text('Register User');
    $('#CustomerFilesSection').attr('hidden', true);
    $('#ScriptConfigSection').attr('hidden', true);
    $('#UpdateCustomerSection').attr('hidden', true);
    $('#RegisterUserSection').attr('hidden', false);
    $('#AlarmSettingsSection').attr('hidden', true);

    $('#SideNav1').removeClass('active');
    $('#SideNav2').removeClass('active');
    $('#SideNav3').removeClass('active');
    $('#SideNav4').addClass('active');
    $('#SideNav5').removeClass('active');
  });

  $('#SideNav5').click(() => {
    $('#HeaderText').text('Alarm Settings');
    $('#CustomerFilesSection').attr('hidden', true);
    $('#ScriptConfigSection').attr('hidden', true);
    $('#UpdateCustomerSection').attr('hidden', true);
    $('#RegisterUserSection').attr('hidden', true);
    $('#AlarmSettingsSection').attr('hidden', false);


    $('#SideNav1').removeClass('active');
    $('#SideNav2').removeClass('active');
    $('#SideNav3').removeClass('active');
    $('#SideNav4').removeClass('active');
    $('#SideNav5').addClass('active');
  });
}

// Dropdown Navigation
function dropdownNavigation() {
  $('#DropdownNav1').click(() => {
    $('#HeaderText').text('Customer Files');
    $('#CustomerFilesSection').attr('hidden', false);
    $('#ScriptConfigSection').attr('hidden', true);
    $('#UpdateCustomerSection').attr('hidden', true);
    $('#RegisterUserSection').attr('hidden', true);
    $('#AlarmSettingsSection').attr('hidden', true);

    $('#SideNav1').addClass('active');
    $('#SideNav2').removeClass('active');
    $('#SideNav3').removeClass('active');
    $('#SideNav4').removeClass('active');
    $('#SideNav5').removeClass('active');
  });

  $('#DropdownNav2').click(() => {
    $('#HeaderText').text('Email/Text Script Config');
    $('#CustomerFilesSection').attr('hidden', true);
    $('#ScriptConfigSection').attr('hidden', false);
    $('#UpdateCustomerSection').attr('hidden', true);
    $('#RegisterUserSection').attr('hidden', true);
    $('#AlarmSettingsSection').attr('hidden', true);

    $('#SideNav1').removeClass('active');
    $('#SideNav2').addClass('active');
    $('#SideNav3').removeClass('active');
    $('#SideNav4').removeClass('active');
    $('#SideNav5').removeClass('active');
  });

  $('#DropdownNav3').click(() => {
    $('#HeaderText').text('Update Customer');
    $('#CustomerFilesSection').attr('hidden', true);
    $('#ScriptConfigSection').attr('hidden', true);
    $('#UpdateCustomerSection').attr('hidden', false);
    $('#RegisterUserSection').attr('hidden', true);
    $('#AlarmSettingsSection').attr('hidden', true);

    $('#SideNav1').removeClass('active');
    $('#SideNav2').removeClass('active');
    $('#SideNav3').addClass('active');
    $('#SideNav4').removeClass('active');
    $('#SideNav5').removeClass('active');
  });

  $('#DropdownNav4').click(() => {
    $('#HeaderText').text('Register User');
    $('#CustomerFilesSection').attr('hidden', true);
    $('#ScriptConfigSection').attr('hidden', true);
    $('#UpdateCustomerSection').attr('hidden', true);
    $('#RegisterUserSection').attr('hidden', false);
    $('#AlarmSettingsSection').attr('hidden', true);

    $('#SideNav1').removeClass('active');
    $('#SideNav2').removeClass('active');
    $('#SideNav3').removeClass('active');
    $('#SideNav4').addClass('active');
    $('#SideNav5').removeClass('active');
  });

  $('#DropdownNav5').click(() => {
    $('#HeaderText').text('Alarm Settings');
    $('#CustomerFilesSection').attr('hidden', true);
    $('#ScriptConfigSection').attr('hidden', true);
    $('#UpdateCustomerSection').attr('hidden', true);
    $('#RegisterUserSection').attr('hidden', true);
    $('#AlarmSettingsSection').attr('hidden', false);

    $('#SideNav1').removeClass('active');
    $('#SideNav2').removeClass('active');
    $('#SideNav3').removeClass('active');
    $('#SideNav4').removeClass('active');
    $('#SideNav5').addClass('active');
  });
}

$(document).ready(() => {
  sideNavigation();
  dropdownNavigation();
});