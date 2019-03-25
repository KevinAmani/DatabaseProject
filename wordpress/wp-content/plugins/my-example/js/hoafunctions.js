
var constants = {
  website:"",
  mainsite:"",
  login_status:true,
  username:'',
  password:'',
};


function Hoa_phone_button(){
  $('#hoa_page_1')
  .modal('show');
  console.log("work1!");
}


function Hoa_mail_button(){
  if(constants.login_status){
    user_login_email();
  }
  else{
    $('#hoa_page_2')
    .modal('show');
  }
}

function Hoa_chart_button(){
  if(constants.login_status){
    user_login_email();
  }else{
    $('#hoa_page_2')
    .modal('show');
  }
}

function Hoa_login_page_login(){
  $('hoa_page_1')
  .modal('show');
  constants.username = $('#hoa_username').val();
  constants.password = md5($('#hoa_password').val());
  console.log(constants.password);

  //send username and password to back-end
  axios.get('/hoa_login',{
    params:{
      username:constants.username,
      password:constants.password,
    }
  }
  ).then(function(response){
    constants.login_status = response.data.login_status;
  })

  if(constants.login_status){
      user_login_email();
  }else{
    login_faile();
  }

}

function user_login_email(){
  var html_str = '\
  <div id="hoa_email_form" class="ui longer modal">\
    <i class="close icon"></i>\
      <div class="header">\
        HOA Request Form\
      </div>\
    <div class="content">\
      <div class="ui top attached tabular menu">\
      <a class="item" data-tab="Request">Request</a>\
      <a class="item" data-tab="Report_1">Report_1</a>\
      <a class="item active" data-tab="Report_2">Report_2</a>\
    </div>\
    <div class="ui bottom attached tab segment" data-tab="Request">\
      <select class="ui dropdown">\
        <option value="">Gender</option>\
        <option value="0">Repair</option>\
        <option value="1">Other</option>\
      </select>\
    </div>\
    <div class="ui bottom attached tab segment" data-tab="Report_1">\
      Second\
    </div>\
    <div class="ui bottom attached tab segment active" data-tab="Report_2">\
      Third\
    </div>\
    </div>\
    <div class="actions">\
      <div class="ui positive right button">\
        Confirm\
      </div>\
    </div>\
  </div>';
  var insertDiv = document.getElementById("hoa_insert");
  insertDiv.innerHTML = html_str;
  $('#hoa_email_form')
  .modal('show');
  $('.menu .item')
  .tab();
  
}

function login_faile(){
  var html_str = '\
  <div id="hoa_page_failed"class="ui mini modal">\
    <i class="close icon"></i>\
      <div class="header">\
        HOA Login\
      </div>\
    <div class="content">\
      Sorry, you login failed.\
    </div>\
    <div class="actions">\
      <div class="ui positive right button">\
        Confirm\
      </div>\
    </div>\
  </div>';
  var insertDiv = document.getElementById("hoa_insert");
  insertDiv.innerHTML = html_str;
  $('#hoa_page_failed')
  .modal('show');

}

//MD5js
//hex_md5("")