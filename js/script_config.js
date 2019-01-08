function manageMessageScripts() {
    return $.getJSON({
      url: 'http://localhost:8090/messages',
      type: 'GET',
      success: (data) => {
        handleMessageScripts("SideNav2", data);
      },
      error: (err) => {
        console.log(err);
      }
    });
};

function handleMessageScripts(activeMenu, messages)
{
  $('#textMessage').val(messages.textMessage);
  $('#emailMessage').val(messages.emailMessage);
}

function handleUpdateScripts()
{
    let messages = {
        columnId: 1,
        textMessage: $('#textMessage').val(),
        emailMessage: $('#emailMessage').val()
    }

   
    return $.ajax({
        url: `http://localhost:8090/messages/update`,
        type: 'PUT',
        data: JSON.stringify(messages),
        contentType: 'application/json',
        success: (data) => {
          
          manageMessageScripts();
        },
        error: (err) => {
          console.log(err);
        }
    });
}

$('#SideNav2').click(() => {
    manageMessageScripts();
});
  
$('#DropdownNav2').click(() => {
    manageMessageScripts();
});

$('#updateScriptsBtn').click(() => {
    handleUpdateScripts();
})