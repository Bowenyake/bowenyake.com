  var $$ = mdui.JQ;
    $$('.scroll').on('scroll', function (e) {
        var target = e.target;
        if (target.scrollHeight - target.scrollTop === target.clientHeight) {
            // Change Button
            document.getElementById('agree').removeAttribute('disabled')
        }
    })

    function agree() {
        mdui.confirm('我已经仔细阅读条款并确认我了解并认可其中全部内容', '服务条款确认',
            function () {
                snack()
            },
            function () {
                // Cancel
            }, {
                'confirmText': '确认，开始上网',
                'cancelText': '让我再想想……'
            }
        );
    }

    function snack() {
        mdui.snackbar({
            message: '服务条款确认！正在跳转至首页……',
            buttonText: '好的',
            onClick: function () {
                auth()
            },
            onButtonClick: function () {
                auth()
            },
            onClose: function () {
                auth()
            }
        });
    }

    function auth() {
        window.location.href = auth_target;
    }
