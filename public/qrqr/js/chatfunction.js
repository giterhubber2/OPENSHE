console.log('chatfunction')

const db = firebase.firestore(firebase.initializeApp({
  apiKey: "AIzaSyAZaVfOOPYkw3kFTi1FlynQ41vT4IMXVpQ",
  authDomain: "pamalikasako.firebaseapp.com",
  databaseURL: "https://pamalikasako-default-rtdb.firebaseio.com",
  projectId: "pamalikasako",
  storageBucket: "pamalikasako.appspot.com",
  messagingSenderId: "393016043530",
  appId: "1:393016043530:web:356a22824be3f5d0ce57f3",
  measurementId: "G-FQ4XL0C28F"
}))


//time, convert from firebase to this format 23-03-12 11:34:03
//for now eres apr19
//<div class="sc-gLMgcV jRKUCB">23-03-12 11:34:03</div>

function userMessage(message) {
        var text = `<div class="sc-fvNhHS ePcyd">
                                 <div data-testid="MessageGroupNewUser" class="sc-kkmGkm kDHxlC">
                                    <div class="sc-jogDgT gzqtY">
                                       <div class="sc-bXmHAB ITGjV">
                                          <div data-testid="MessageGroupMessage" class="sc-hHSjgo eOOZxj">
                                             <div class="sc-iKUVsf egOQmQ">
                                                <div class="sc-jhDJEt ciiXUl">
                                                   <div class="sc-bwcZwS fzEMJB">
                                                      <div data-testid="AutoMessage" class="sc-bUQyIj fxhxXi">${message}</div>
                                                   </div>
                                                </div>
                                             </div>
                                             <div class="sc-gLMgcV jRKUCB"></div>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>`;
                              $('#m').append(text)
    };


function ellieMessage(message) {
    var text = `
    <div class="sc-fvNhHS ePcyd">
                                 <div data-testid="MessageGroupNewBot" class="sc-kkmGkm XgzNi">
                                    <div aria-hidden="true" class="sc-cTsKDU eHgqKZ"><span aria-hidden="true" class="sc-jtiXyc FTUMu"></span></div>
                                    <div class="sc-jogDgT gzqtY">
                                       <div class="sc-bXmHAB ITGjV">
                                          <div data-testid="MessageGroupMessage" class="sc-hHSjgo JRRzG">
                                             <div class="sc-iKUVsf egOQmQ">
                                                <div class="sc-jhDJEt ciiXUl">
                                                   <div class="sc-bwcZwS fzEMJB">
                                                      <div data-testid="AutoMessage" class="sc-bUQyIj eQhSXz">${message}</div>
                                                   </div>
                                                </div>
                                             </div>
                                             <div class="sc-gLMgcV gnrnxH"></div>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>`;
                              $('#m').append(text)
}

function who(_user, message) {

    if (_user != 'ellie') {
        userMessage(message)
    } else {
        ellieMessage(message)
    }

}


function chats(ref) {
    db.collection(ref).orderBy('time', 'asc').onSnapshot( (querySnapshot) => {
    querySnapshot.docChanges().forEach( (change) => {
                var d = change.doc.data()
                console.log(d)
                who(d.user, d.message)
    })
  })
}

const web = location.href.split('/').at(-1)
console.log(web);

chats(web)


// var tx = localStorage.getItem('support')
// console.log(tx)
// var tx = $('input[name="email"]').val(ttx)
// console.log(tx)

// chats(tx)



function chat(ref, message, user) {
  var id = db.collection(ref)

  var data = {
    time: new Date(),
    user: user,
    message: message,

  }

  id.add(data)
    .then( (doc) => {

    }).catch( (err) => {
      
    })
}




class chatConfigure {
    constructor (dom) {
        this.dom = dom;
    }

    async send() {
        var result;
        var L = this.dom.val().length
        var M = this.dom.val()
        var data = {message: M, result: ""}

        // console.log(M)
        if (L <= 1) {
            this.dom.val('')
            data.result = 'error';
            return data;
        } else {
            this.dom.val('')
            data.result = 'success';
            return data;
        }
        
    }
}

const newTest = new chatConfigure($('#message_text'))
function testM() {
    newTest.send().then( (data) => {
                console.log(data)
                if (data.result == 'success') {

                    chat(web, data.message, 'user')

                } else {
                    //
                }
            })
}

$('#message_text').on('keypress', function (e) {
        if (e.which == '13' && !event.shiftKey) {
            e.preventDefault()
            testM()
            setTimeout(() => {
    $('#message_text').val('')
  }, 500)

        } //first if done


    })
$('#send_message').on('click', function () {
    testM()
  setTimeout(() => {
    $('#message_text').val('')
  }, 500)
})




