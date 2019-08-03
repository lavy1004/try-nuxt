<template>
  <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">        
      <!-- container -->
      <div id="container" class="mediaquery login">
        <div id="content" class="etc">
          <div class="cell">
            <div class="inner">


                <h1 class="h-tit1 type_multitxt"><p>멀티캠퍼스<br>임직원교육센터</p></h1>

                <!-- 가이드 O : 로고 이미지일 경우 -->
                <h1 class="h-tit1 type_image" style="display:none;">
                    <img src="@/assets/img/login_logo_sds.png" alt="samsung sds">
                </h1>
                <!-- 가이드 O : 텍스트일 경우 -->
                <h1 class="h-tit1 type_txt" style="display:none;"><p>한국도로공사 연수원</p></h1>
                <!-- 가이드 O : 텍스트 2줄일 경우 -->
                <h1 class="h-tit1 type_multitxt" style="display:none;"><p>한국가스안전공사<br>사이버 연수원</p></h1>

                <!-- 가이드 X : 로고 이미지일 경우 -->
                <h1 class="h-tit1 type_image noguide" style="display:none;">
                    <img src="@/assets/img/login_logo_sds.png" alt="samsung sds">
                </h1>
                <!-- 가이드 X : 텍스트일 경우 -->
                <h1 class="h-tit1 type_txt noguide" style="display:none;"><p>한국도로공사 연수원</p></h1>
                <!-- 가이드 X : 텍스트 2줄일 경우 -->
                <h1 class="h-tit1 type_multitxt noguide" style="display:none;"><p>한국가스안전공사<br>사이버 연수원</p></h1>

                <fieldset class="loginBox">
                    <legend>아이디 비밀번호 입력</legend>
                    <ul class="loginList">
                        <li>
                            <slp-text-field classObject="underline" placeholder="아이디" v-model="user.id" :error="error.id" :message="message.id"></slp-text-field>
                        </li>
                        <li>
                            <slp-text-field classObject="underline" placeholder="비밀번호" v-model="user.passwd" :error="error.passwd" :message="message.passwd" type="password"></slp-text-field>
                        </li>
                    </ul>

                    <div class="loginChk">
                        <!-- 체크박스 체크 시 #container.login .loginBox input.chk:checked + .ico 의 background-position 속성 오류 존재-->
                        <slp-checkbox>아이디 저장</slp-checkbox>
                        <slp-checkbox v-model="showSlpComponent" @input="onCheckClick">자동 로그인</slp-checkbox>
                    </div>

                    <div class="loginBtn">
                        <slp-button title="로그인" :classObject="{'md': true, 'clr1': true}" @onClick="login"></slp-button>
                    </div>
                </fieldset>

                <ul class="loginEtcBtn">
                    <li><router-link :to="{ name: routerItems[1].routeName, params: routerItems[1].params }">{{routerItems[1].name }}</router-link></li>
                    <li><router-link :to="{ name: routerItems[2].routeName, params: routerItems[2].params }">{{routerItems[2].name }}</router-link></li>
                    <li><router-link :to="{ name: routerItems[0].routeName }">{{routerItems[0].name }}</router-link></li>
                </ul>

                <dl class="loginGuide">
                    <dt>초기 로그인 안내</dt>
                    <dd class="color_clr2">아이디 ex사번</dd>
                    <dd class="color_clr2">비밀번호  아이디와 동일</dd>
                    <dd>최초 접속 시 아이디와 비밀번호가 동일합니다.</dd>
                </dl>

            </div>
          </div>
        </div>
      </div>
      <!-- //container -->

      <slp-popup 
        v-if="showPopup"
        title="로그인 실패"      
        confirmInput="확인"
        @cancelClick="showPopup = !showPopup"
        @confirmClick="showPopup = !showPopup">
        <div class="ly-info">
          <p v-if="failCnt < 5">아아디/비밀번호가 일치하지 않습니다.<br>다시 확인하시기 바랍니다. 5회 실패 시 로그인이 불가합니다. (로그인 {{ failCnt }}회 실패하셨습니다.)</p>
          <p v-else>로그인에 5회 실패하였습니다. 5회 실패시 계정이 잠금되어 로그인이 불가합니다. 본인인증 후 이용해주세요</p>
        </div>
      </slp-popup>     

    </div>
    <!-- //wrap -->

</template>

<script>
export default {
  name: 'Login',
  /* vue data */
  data () {
    return {
      temp: {
        id: 'hunsuk93',
        passwd: '1234'
      },
      failCnt: 0,
      user: {
        id: 'hunsuk93',
        passwd: '1234',
        coGroupCd: 'B2B_18_213',
        eduGroupCd: 'ASP0078'
      },
      error: {
        id: false,
        passwd: false
      },
      message: {
        id: '아이디를 입력해 주세요.',
        passwd: '비밀번호를 입력해 주세요.'
      },
      emailInfo: [
        {
          email: 'findesign@mulcam.com',
          name: '정해민'
        },
        {
          email: 'waterwater@mulcam.com',
          name: '정해수'
        },
        {
          email: 'yyoungjoung@mulcam.com',
          name: '김영중'
        }
      ],
      showPopup: false,
      showConfirm: false,
      loginMode: {
        'title': 'sds',
        'data': ''
      },
      btnClassObject: {
        'btn': true,
        'md': true,
        'clr1': true
      },
      routerItems: [
        {
          'name': '회원가입',
          'routeName': 'JoinType'
        },
        {
          'name': '아이디찾기',
          'routeName': 'LoginFind',
          'params': {
            'tabIdx': 1
          }
        },
        {
          'name': '비밀번호 찾기',
          'routeName': 'LoginFind',
          'params': {
            'tabIdx': 2
          }
        }
      ],
      showSlpComponent: false,
      radio: 'default',
      gender: 'male',
      switchVal1: false,
      switchVal2: 'Yes'
    }
  },
  watch: {
    'user.id': function (val) {
      if (val.length > 0) {
        this.error.id = false
      }
    },
    'user.passwd': function (val) {
      if (val.length > 0) {
        this.error.passwd = false
      }
    }
  },
  /* vue lifecycle */
  created () {
  },
  mounted () {
  },
  /* vue function */
  methods: {
    loginTemp () {
      if (this.hasValidationError()) {
        return
      }

      if ((this.user.id !== this.temp.id) || this.user.passwd !== this.temp.passwd) {
        this.failCnt += 1
        this.showPopup = true
      } else {
        this.$router.push({'name': 'LoginChangeId'})
      }
    },
    login: function () {
      if (this.hasValidationError()) {
        return
      }

      let uri = 'mrm/v1/permit/mobile/token'
      let header = {
        'MC-Co-Group': this.user.coGroupCd,
        'MC-Edu-Group': this.user.eduGroupCd
      }
      let body = {
        pushKeyId: 'pushKeyId',
        appId: 'appId',
        userInfo: {
          loginId: this.user.id,
          mbrPswd: this.user.passwd
        }
      }

      this.post(this, uri, body, header)
        .then((response) => {
          // 응답 데이터 처리
          const data = response.data
          if (data && data !== undefined) {
            if (data.status === 'OK') {
              var session = {}
              session.userId = this.user.id
              session.coGroupCode = this.user.coGroupCd
              session.eduGroupCode = this.user.eduGroupCd
              session.loginTime = new Date().getTime()
              session.timeout = window.vue.config.session.timeout
              session.authenticated = true
              console.log(session)
              this.getStore('root').dispatch('LOG_IN', {session})

              var token = {}
              token.tokenAuth = data.data.accessToken
              token.expireTime = data.data.expireTime
              this.getStore('token').dispatch('REGISTER', {token})

              this.$router.push({'name': 'LoginChangeId'})
            } else {
              console.log(data.message)
              this.$toast.show(data.message)
            }
          }
        }, (error) => {
          return Promise.reject(error)
        })
        .catch((error) => {
          console.log(error.response)
        })
    },
    hasValidationError: function () {
      let isError = true

      // 이름 체크
      if (!this.user.id) {
        this.error.id = true
        isError = true
      } else {
        this.error.id = false
        isError = false
      }

      // 비밀번호 체크
      if (!this.user.passwd) {
        this.error.passwd = true
        this.message.passwd = '비밀번호를 입력해 주세요.'
        isError = true
      } else {
        this.error.passwd = false
        isError = false
      }

      return isError
    },
    axiosHttpGetMethod: function () {
      let uri = 'mrm/sample'
      let params = {
      }
      let header = {
        'Accept': 'application/json',
        'Authorization': 'Bearer 9fe8ceda-0763-4f15-8305-b27b915768a9',
        'aaa': 'Bearer 3bd540e7-661c-4d91-a1da-352becdf0349',
        'asdklfjhwjlkejflka': 'go home'
      }

      this.get(this, uri, params, header)
        .then((response) => {
          // 응답 데이터 처리
          const data = response.data
          console.log(data)
        }, (error) => {
          return Promise.reject(error)
        })
        .catch((error) => {
          console.log(error.response)
        })
    },
    showToast: function () {
      // this.$toast.show({message: '0.5초짜리 토스트', duration: 500})
      this.$toast.show('토스트 팝업입니다.')
    },
    closePopup: function () {
      this.showPopup = false
      console.log('popupClose')
    },
    cancel: function () {
      this.showConfirm = false
      console.log('cancelClick')
    },
    confirm: function () {
      this.showConfirm = false
      console.log('confirmClick')
    },
    onCheckClick: function (c) {
      // console.log(c)
      this.showToast()
    }
  }
}
</script>

<style scoped>
</style>
