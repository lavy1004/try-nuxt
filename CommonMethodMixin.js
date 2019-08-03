const CommonMethodMixin = {
    methods: {
        passwordCheck ( val, error, message ) {
        let err = error
        let msg = message

        if (!this.emptyCheck(val)) { // 비어있는지 체크했는데 아닌경우? 밑에는근데 비밀번호를 입력해주세요인걸봐서 비어있는경우인데..
            msg.password = '비밀번호를 입력해 주세요.'
            err.password = true
        } else if (!this.regexCheck( val, 'password')) {
            msg.password = '8~12자의 영문자, 특수문자 조합만 가능합니다'
            err.password = true
        }
        },
        nameCheck ( val, error, message ) {
        let err = error
        let msg = message

        if (!this.emptyCheck(val)) {
            msg.name = '성명을 입력해 주세요.'
            err.name = true
        }
        },
        phoneCheck ( val, error, message ) {
        let err = error
        let msg = message

        if (!this.emptyCheck(val)) {
            msg.phone = '휴대전화를 입력해 주세요.'
            err.phone = true
        } else if (!this.regexCheck( val, 'phone')) {
            msg.phone = '‘-’ 또는 띄어쓰기 없이 10자 이상 입력해주세요'
            err.phone = true
        }
        },
        emailCheck ( val, error, message ) {
        let err = error
        let msg = message

        if (!this.emptyCheck(val)) {
            msg.email = '이메일을 입력해 주세요.'
            err.email = true
        } else if (!this.regexCheck( val, 'email')) {
            msg.email = '이메일이 형식에 맞지 않습니다.'
            err.email = true
        }
        },

        /*
        name: regexCheck
        용도: 1) 정규표현식을 이용해서 타입에 따른 패턴 검사
        작성일: 2019.01.31
        작성자: 김정윤
        수정 계획: 타입 추가
        */
        regexCheck ( val, type) {
        let regex
        if ( type === 'email') {
            // 1. 이메일
            regex = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i
        } else if ( type === 'password' ) {
            // 2. 비밀번호 8~12자의 숫자, 영문자, 특수문자 모두 포함
            regex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,12}$/
        } else if ( type === 'phone') {
            // 3. 전화번호 01011112222
            regex = /^\d{2,3}\d{3,4}\d{4}$/
        }

        if (!regex.test(val)) {
            return false
        } else {
            return true
        }
        },
        /*
        name: emptyCheck
        용도: text-field의 입력값 여부를 검사
        작성일: 2019.01.31
        작성자: 김정윤
        수정 계획: 없음
        */
        emptyCheck ( val ) {
        if (val === '' || val === null || val === undefined) {
            return false
        } else {
            return true
        }
        },
        /*
        name: go
        용도: 라우터에 등록된 컴포넌트의 name을 기반으로 이동
        작성일: 2019.01.22
        작성자: 김정윤
        수정 계획: 파라미터 추가
        */
        go ( targetName ) {
        this.$router.push({'name': targetName})
        },
        /*
        name: goBack
        용도: 브라우저 히스토리 상 바로 전 페이지로 이동
        작성일: 2019.01.22
        작성자: 김정윤
        */
        goBack () {
        this.$router.go(-1)
        }
    }
    }

    export default CommonMethodMixin
