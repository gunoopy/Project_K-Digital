exports.mainPage = function(request, response){
    var html = `
    <!doctype html>
    <html lang="ko">
    <head>
    <meta charset="utf-8">
    <title>타다 : TADA</title>
    <link rel="stylesheet" href="css/style-tablet.css" >
    <link rel="stylesheet" href="css/style.css" >
    <script></script>
    <link href="css/SpoqaHanSans-kr.css" rel="stylesheet" type="text/css">
    <link href="css/animation.css" rel="stylesheet" type="text/css">
    <script type="text/javascript" async="" src="jquery/analytics.js"></script>
    <script async="" defer="" src="jquery/enp_tracker_self_hosted.min.js"></script>
    <script src="jquery/jquery.min.js"></script>
    <!--각 패널 이동 시 각 패널이 특정 위치(hanger, anchor)를 0으로 기준으로 각 패널의 상대적인 위치를 반환합니다.-->
    <script src="jquery/flicking.pkgd.min.js"></script>
    <script src="jquery/plugins.min.js"></script>
    <script async="" src="gtag/gtag"></script>
    <script src="jquery/social_sns_config_min.js" type="text/javascript" defer="" async=""></script>
    </head>

    <body class="animation animating animating1 animating2 animating3 animating4">
    <span itemscope="" itemtype="http://schema.org/Organization">
    <link itemprop="url" href="https://tadatada.com">
    <a itemprop="sameAs" href="https://post.naver.com/official_tada"></a>
    <a itemprop="sameAs" href="https://www.instagram.com/official.tada/"></a>
    <a itemprop="sameAs" href="https://www.facebook.com/official.tada"></a>
    <a itemprop="sameAs" href="https://www.youtube.com/channel/UCrs2eTlzLvxGHdSfVL4EU2A"></a>
    </span>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'UA-126022468-1');
    </script>
        <div class="content">
        <div class="menu tranparent" id="menu">
        <div class="content_wrapper">
            <div class="logo">
                <a href="#top">
                <img src="images/btn_home_logo@4x.png"></a>
            </div>
            <div class="menu_item desktop_tablet">
            <a href="#lineup" title="서비스 라인업"></div>
            서비스 라인업
            </a><!--after-->
            </a>
            <div class="menu_item desktop_tablet">
            <a href="#howtouse" title="이용방법"></div>
            이용방법
            </a><!--after-->
            <div class="menu_item desktop_tablet">
            <a href="apply" title="드라이버 지원"></div>
            드라이버 지원
            </a><!--after-->
            <div class="menu_item desktop_tablet">
            <a href="https://help.tadatada.com/hc/ko" title="도움말" target="_blank"></div>
            도움말
            </a><!--after-->
            <div class="menu_item desktop_tablet">
            <a href="login" title="서비스이용하기"></div>
            서비스이용하기
            </a><!--after-->
        </div></div></div>
        <div class="intro content_inner">
        <div class="img-wrap">
        <div class="img-box"> <img src="images/bg_main_01_desktop.jpg" style='align:center;' > </div>
        <div class="img-text"><h1>내 차니까, 타다 대리</h1><br>마음부터 편안한 대리운전 
        <div class="marketbtns clearfix desktop_tablet">
                    </div>
        </div>

            <div class="clearfix" style="overflow-x:hidden;">
                <div class="intro_headlines">
                    <div class="content_wrapper">
                        <div class="headline-content headline-flick headline-flick0">


                </div>
                <div class="clearfix mobile gray">
                <a href="#top" target="_blank"><div class="btn"><span>앱 다운로드</span><span class="disclose"></span></div></a>
                <div class="headline-content headline-flick headline-flick1">
                <div class="title desktop_tablet">바로 가는 편안함, 타다 라이트</div>
                <div class="title mobile">바로 가는 편안함<br>타다 라이트</div>
                <div class="subtitle">기본을 지키는 일상 이동</div>
                <div class="marketbtns clearfix desktop_tablet">
                    <a class="market googleplay" href="#top" target="_blank"><img src="images/ic_download_googleplay@3x.png"><div class="title">GOOGLE PLAY</div></a>
                    <a class="market appstore" href="#top" target="_blank"><img src="images/ic_download_appstore@3x.png"><div class="title">APP STORE</div></a>
                </div>
                <div class="clearfix mobile">
                <a href="#top" target="_blank"><div class="btn"><span>앱 다운로드</span><span class="disclose"></span></div></a>
                </div>
            </div>
                </div>
            <div class="indicator">
            <div class="bar headline-flick headline-flick0 visible selected"></div>
            <div class="bar headline-flick headline-flick1"></div>
            <div class="bar headline-flick headline-flick2"></div>
            </div>
            <div class="intro_slogan">
            <div id="animation1Container" class="container">
            <div class="line"></div>
            <div class="text">
                <h1>더 나은 이동이<br>더 나은 삶을 만든다는 믿음</h1>
                <p>
                타다는 새로운 이동의 기준을 제시하는<br>
                모빌리티 플랫폼입니다.<br>
                누구든, 언제나 더 나은 이동을 선택할 수 있도록<br>
                이동이 필요한 일상에 타다가 함께합니다.
                </p>
            </div>
            <div class="slogan">이동의 기본, 타다</div>
            </div>
        </div>
        <div id="description" class="description features clearfix descriptionSector">
        <div class="content_wrapper">
            <div class="features">
                <div class="item" id="animation2Item1">
                <img class="desktop_tablet" src="images/ic_feature_01_clean_mobile@4x@4x.jpg">
                <img class="mobile" src="images/ic_feature_01_clean_mobile@4x@4x.jpg">
                <div class="title">
                    더 편안하게
                </div>
                <div class="text">
                    <div class="line">안정적인 주행과 친절한 응대로</div>
                    <div class="line">편안한 이동 시간을 선사합니다.</div>
                </div>
                </div>
                <div class="item" id="animation2Item2">
                <img class="desktop_tablet" src="images/ic_feature_02_safe_mobile@4x@4x.jpg">
                <img class="mobile" src="images/ic_feature_02_safe_mobile@4x@4x.jpg">
                <div class="title">
                    더 안전하게
                </div>
                <div class="text">
                    <div class="line">정기적인 차내 소독과 전 탑승 보험 적용</div>
                    <div class="line">실시간 위치 전송으로 안심할 수 있습니다.</div>
                </div>
                </div>
                <div class="item" id="animation2Item3">
                <img class="desktop_tablet" src="images/ic_feature_03_honest_mobile@4x@4x.jpg">
                <img class="mobile" src="images/ic_feature_03_honest_mobile@4x@4x.jpg">
                <div class="title">
                    더 정직하게
                </div>
                <div class="text">
                    <div class="line">승차거부 없는 바로배차와</div>
                    <div class="line">상호 평가 시스템으로 마음 편히 이동하세요.</div>
                </div>
                </div>
            </div>
            </div>
        </div>
        <div id="lineup" class="service clearfix">
        <div class="service_headline">
            <div class="content_wrapper">
            <div class="head">
                <div class="line"></div>
                <div class="title" id="animation3Title">서비스 라인업</div>
            </div>
            <div class="services">
                <div class="selector_wrapper animation3Description">
                <div class="selector">
                    <div class="item photo-flick photo-flick0 selected" onclick="photoFlickMoveTo(0)"><div class="text">타다 대리<img class="new" src="images/ic-newbadge-small@3x.png"></div></div>
                    <div class="separator"></div>
                    <div class="item photo-flick photo-flick1" onclick="photoFlickMoveTo(1)"><div class="text">타다 라이트<img class="new" src="images/ic-newbadge-small@3x.png"></div></div>
                    <div class="separator"></div>
                    <div class="item photo-flick photo-flick2" onclick="photoFlickMoveTo(2)"><div class="text">타다 플러스</div></div>
                    <div class="separator"></div>
                    <div class="item photo-flick photo-flick3" onclick="photoFlickMoveTo(3)"><div class="text">타다 에어</div></div>
                    <div class="separator"></div>
                    <div class="item photo-flick photo-flick4" onclick="photoFlickMoveTo(4)"><div class="text">타다 프라이빗</div></div>
                    <div class="separator"></div>
                    <div class="item photo-flick photo-flick5" onclick="photoFlickMoveTo(5)"><div class="text">타다 골프</div></div>
                </div>
                </div>
                <div class="content">
                <div class="arrow left" onclick="movePhotoLeft()">
                    <img src="images/btn_lineup_left@3x.png">
                </div>
                <script>
                    var totalLineupPhotoCnt = document.querySelectorAll("#lineup .services .selector .item").length;
                    var photoLoadCnt = 0;
                    function photoLoaded() {
                    photoLoadCnt += 1;
                    if (photoLoadCnt == totalLineupPhotoCnt) {
                        try {
                        installPhotoFlicker();
                        } catch(e) {
                        }
                    }
                    }
                </script>
                <div class="photos" id="animation3Photo">
                    
                    
                    
                    
                    
                    
                <div class="eg-flick-viewport" style="position: relative; z-index: 2000; width: 100%; overflow: hidden; touch-action: pan-y; user-select: none; -webkit-user-drag: none; height: 266.992px; min-height: 100%;"><div class="eg-flick-camera" style="width: 100%; height: 100%; will-change: transform; transform: translate3d(28px, 0px, 0px);"><div class="photo eg-flick-panel" style="position: absolute; left: 0px; opacity: 1;">
                    <img onload="photoLoaded()" src="images/bg_lineup_daeri.png">
                    </div><div class="photo eg-flick-panel" style="position: absolute; left: 628.77px; opacity: 0.0427582;">
                    <img onload="photoLoaded()" src="images/bg_lineup_lite.png">
                    </div><div class="photo eg-flick-panel" style="position: absolute; left: 1257.54px;">
                    <img onload="photoLoaded()" src="images/bg_lineup_plus.png">
                    </div><div class="photo eg-flick-panel" style="position: absolute; left: 1886.31px;">
                    <img onload="photoLoaded()" src="images/bg_lineup_air.png">
                    </div><div class="photo eg-flick-panel" style="position: absolute; left: 2515.08px;">
                    <img onload="photoLoaded()" src="images/bg_lineup_private.png">
                    </div><div class="photo eg-flick-panel" style="position: absolute; left: 3143.85px;">
                    <img onload="photoLoaded()" src="images/bg_lineup_golf.png">
                    </div></div></div></div>
                <div class="desktop description">
                    <div class="photo-flick photo-flick0 selected animation3Description">
                    <div class="title">타다 대리<img class="new" src="images/ic-newbadge-small@3x.png"></div>
                    <div class="subtitle">이용자 평가 기반으로 운영되는<br>편안하고 안전한 대리운전 서비스</div>
                    </div>
                    <div class="photo-flick photo-flick1 animation3Description">
                    <div class="title">타다 라이트<img class="new" src="images/ic-newbadge-small@3x.png"></div>
                    <div class="subtitle">승차거부 없이 바로배차되는<br>쾌적한 일상 이동 서비스</div>
                    </div>
                    <div class="photo-flick photo-flick2 animation3Description">
                    <div class="title">타다 플러스</div>
                    <div class="subtitle">베테랑 드라이버가 운행하는<br>준고급 세단의 쾌적한 승차감</div>
                    </div>
                    <div class="photo-flick photo-flick3 animation3Description">
                    <div class="title">타다 에어</div>
                    <div class="subtitle">새벽 비행기, 단체 여행도 걱정 없는<br>공항 이동 예약 서비스</div>
                    </div>
                    <div class="photo-flick photo-flick4 animation3Description">
                    <div class="title">타다 프라이빗</div>
                    <div class="subtitle">결혼식, 가족 여행, 워크숍 등<br>일정에 맞춰 예약하는 시간 대절 서비스</div>
                    </div>
                    <div class="photo-flick photo-flick5 animation3Description">
                    <div class="title">타다 골프</div>
                    <div class="subtitle">편안한 라운딩을 위한<br>골프장 이동 예약 서비스</div>
                    </div>
                </div>
                <div class="arrow right" onclick="movePhotoRight()">
                    <img src="images/btn_lineup_right@3x.png">
                </div>
                </div>
                <div class="tablet_mobile description">
                <div class="photo-flick photo-flick0 selected animation3Description">
                    <div class="title">타다 대리<img class="new" src="images/ic-newbadge-big@3x.png"></div>
                    <div class="subtitle">이용자 평가 기반으로 운영되는<br>편안하고 안전한 대리운전 서비스</div>
                </div>
                <div class="photo-flick photo-flick1 animation3Description">
                    <div class="title">타다 라이트<img class="new" src="images/ic-newbadge-big@3x.png"></div>
                    <div class="subtitle">승차거부 없이 바로배차되는<br>쾌적한 일상 이동 서비스</div>
                </div>
                <div class="photo-flick photo-flick2 animation3Description">
                    <div class="title">타다 플러스</div>
                    <div class="subtitle">베테랑 드라이버가 운행하는<br>준고급 세단의 쾌적한 승차감</div>
                </div>
                <div class="photo-flick photo-flick3 animation3Description">
                    <div class="title">타다 에어</div>
                    <div class="subtitle">새벽 비행기, 단체 여행도 걱정 없는<br>공항 이동 예약 서비스</div>
                </div>
                <div class="photo-flick photo-flick4 animation3Description">
                    <div class="title">타다 프라이빗</div>
                    <div class="subtitle">결혼식, 가족 여행, 워크숍 등<br>일정에 맞춰 예약하는 시간 대절 서비스</div>
                </div>
                <div class="photo-flick photo-flick5 animation3Description">
                    <div class="title">타다 골프</div>
                    <div class="subtitle">편안한 라운딩을 위한<br>골프장 이동 예약 서비스</div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    </div>
    <div id="howtouse" class="howtouse">
        <div class="content_wrapper">
            <div class="content-mobile">
            <div class="title">
                앱 하나로 쉽고, 편하게<br>이동의 기본을 누리세요
            </div>
            </div>
            <div class="demo">
            <div class="arrow left" onclick="screens.prev()">
                <img class="desktop_tablet" src="images/btn_howto_left@4x.png">
                <img class="mobile" src="images/btn_howto_left@4x.png">
            </div>
            <div class="screenshot">
                <img class="frame desktop" src="images/bg_howto_mockup@4x.png">
                <img class="frame tablet_mobile" src="images/bg_howto_mockup_mobile@4x.png">
                <div id="screens" class="screens tablet_mobile">
                
                
                
                
                
                
                <div class="eg-flick-viewport" style="position: relative; z-index: 2000; width: 100%; overflow: hidden; touch-action: pan-y; user-select: none; -webkit-user-drag: none; height: 550px; min-height: 100%;"><div class="eg-flick-camera" style="width: 100%; height: 100%; will-change: transform; transform: translate3d(0px, 0px, 0px);"><img class="screen eg-flick-panel" src="images/bg_howto_1@3x.jpg" style="position: absolute; left: 0px;"><img class="screen eg-flick-panel" src="images/bg_howto_2@3x.jpg" style="position: absolute; left: 254px;"><img class="screen eg-flick-panel" src="images/bg_howto_3@3x.jpg" style="position: absolute; left: 508px;"><img class="screen eg-flick-panel" src="images/bg_howto_4@3x.jpg" style="position: absolute; left: 762px;"><img class="screen eg-flick-panel" src="images/bg_howto_5@3x.jpg" style="position: absolute; left: 1016px;"><img class="screen eg-flick-panel" src="images/bg_howto_6@3x.jpg" style="position: absolute; left: 1270px;"><img class="screen eg-flick-panel" src="images/bg_howto_1@3x.jpg" style="position: absolute; left: 1524px;"><img class="screen eg-flick-panel" src="images/bg_howto_2@3x.jpg" style="position: absolute; left: 1778px;"><img class="screen eg-flick-panel" src="images/bg_howto_3@3x.jpg" style="position: absolute; left: 2032px;"><img class="screen eg-flick-panel" src="images/bg_howto_4@3x.jpg" style="position: absolute; left: 2286px;"><img class="screen eg-flick-panel" src="images/bg_howto_5@3x.jpg" style="position: absolute; left: 2540px;"><img class="screen eg-flick-panel" src="images/bg_howto_6@3x.jpg" style="position: absolute; left: 2794px;"></div></div></div>
            </div>
            <div class="arrow right" onclick="screens.next()">
                <img class="desktop_tablet" src="images/btn_howto_right@4x.png">
                <img class="mobile" src="images/btn_howto_right@4x.png">
            </div>
            <div class="indicator">
                <div class="dot flick flick0 selected"></div>
                <div class="dot flick flick1"></div>
                <div class="dot flick flick2"></div>
                <div class="dot flick flick3"></div>
                <div class="dot flick flick4"></div>
                <div class="dot flick flick5"></div>
            </div>
            </div>
            <div class="content">
            <div class="title" id="animation4Title">
                앱 하나로 쉽고, 편하게<br>이동의 기본을 누리세요
            </div>
            <div class="func_title flick flick0 selected" id="animation4Text">가입도 간편하게</div>
            <div class="func_title flick flick1">모든 서비스를 앱 하나로</div>
            <div class="func_title flick flick2">실시간 예상 금액 확인</div>
            <div class="func_title flick flick3">편리한 도착 알림</div>
            <div class="func_title flick flick4">내 위치 전송으로 안전하게</div>
            <div class="func_title flick flick5">정직한 평가 시스템</div>
            <div class="func_description flick flick0 selected" id="animation4Description">
                휴대폰 번호로 간편하게 가입하고<br>
                결제 카드를 등록하세요.
            </div>
            <div class="func_description flick flick1">
                대리운전 서비스부터<br>
                차량 호출, 예약 서비스까지<br>
                하나의 앱으로 이용할 수 있어요.
            </div>
            <div class="func_description flick flick2">
                원하는 서비스를 선택하고<br>
                실시간 예상 금액을 확인하세요.
            </div>
            <div class="func_description flick flick3">
                도착 알림을 확인하고 호출한 차량에 탑승하세요.<br>
                (타다 대리도 도착 알림을 제공합니다.)
            </div>
            <div class="func_description flick flick4">
                이동 중 나의 위치를 확인하고<br>
                실시간 위치를 공유할 수 있습니다.
            </div>
            <div class="func_description flick flick5">
                이동 완료 후 드라이버를 평가할 수 있습니다.<br>
                이용자 평가 기반으로 서비스를 개선합니다.
            </div>
            </div>
        </div>
        </div>
        <div class="standard">
        <div class="content_wrapper">
            <h1>타다가 이끄는<br>새로운 이동의 기준</h1>
            <div class="description">
            하루 평균 이동 시간은 약 2시간.<br>
            매일 2시간을 쾌적하고 안전하게 보낼 수 있도록<br>
            타다는 이동의 기본을 지키며<br>
            더 나은 이동을, 더 나은 삶을 만들어갑니다.<br>
            편안한 이동이 필요한 순간 타다와 함께하세요.
            </div>
            <div class="slogan"></div>
        </div>
        </div>
        <script>
    function updateMenuBarBackgroundColor() {
        if (this.scrollY > 30) {
        // 스크롤이 30이상이면 무조건 불투명 상태이다.
        $('#menu').removeClass('transparent');
        } else {
        // 스크롤이 30이하라면 메뉴가 닫혀 있는 경우에만 투명상태이다.
        var menuItems = $("#menu_items");
        if(!menuItems.is(':visible')) {
            $('#menu').addClass('transparent');
        } else {
            $('#menu').removeClass('transparent');
        }
        }
    }
    


    function movePhotoLeft() {
        if (photos.getIndex() == 0) {
        photoFlickMoveTo(photos.getPanelCount() - 1);
        } else {
        photos.prev(0);
        }
    }
    function movePhotoRight() {
        if (photos.getIndex() == photos.getPanelCount() - 1) {
        photoFlickMoveTo(0);
        } else {
        photos.next(0);
        }
    }
    function onPhotoFlickChange(e) {
        // 이전에 선택된 탭, 설명, 인디케이터를 초기화하고 새로 선택된 것을 활성화시킨다.
        $('.photo-flick').removeClass('selected');
        $('.photo-flick' + e.index).addClass('selected');

        scrollSelectorIfNeeded(e.index);
    }
    function photoFlickMoveTo(index) {
        photos.moveTo(index, 0);
    }

    /* 아래로 스크롤하는 경우 메뉴 숨기기 */
    var prevScrollPos = window.pageYOffset;
    $(window).scroll(function(){
        var currentScrollPos = window.pageYOffset;
        var menu = document.getElementById("menu");
        if (currentScrollPos > 80) {
        menu.style.visibility = "visible"
        }
        if (currentScrollPos < 80) {
        menu.style.opacity = "1";
        menu.style.top = "0";
        } else if (prevScrollPos > currentScrollPos) {
        menu.style.opacity = "1";
        menu.style.top = "0";
        } else {
        if($("#menu_items").is(':visible')) {
            menu.style.opacity = "1";
            menu.style.top = "0";
        } else {
            menu.style.opacity = "1";
            menu.style.top = "-80px";
        }
        }
        prevScrollPos = currentScrollPos;
    });


    /* 스크롤 정도에 따라 애니메이션 활성화 */
    loadAnimation(this.scrollY);
    function loadAnimation(scrollPosition) {
        var bodyElem = $('body');
        if (scrollPosition > 120) {
            bodyElem.addClass('animating1');
        }
        if (scrollPosition > $('.features').offset().top - window.screen.height) {
            bodyElem.addClass('animating2');
        }
        if (scrollPosition > $('#lineup').offset().top - window.screen.height + 300) {
            bodyElem.addClass('animating3');
        }
        if (scrollPosition > $('.howtouse').offset().top - window.screen.height + 500) {
            bodyElem.addClass('animating4');
        }
    }
    $(window).scroll(function() {
        loadAnimation(window.pageYOffset);
    });

    function currentYPosition() {
        // Firefox, Chrome, Opera, Safari
        if (self.pageYOffset) return self.pageYOffset;
        // Internet Explorer 6 - standards mode
        if (document.documentElement && document.documentElement.scrollTop)
            return document.documentElement.scrollTop;
        // Internet Explorer 6, 7 and 8
        if (document.body.scrollTop) return document.body.scrollTop;
        return 0;
    }
    function getElementYPosition(elementId) {
        var elm = document.getElementById(elementId);
        var y = elm.offsetTop;
        var node = elm;
        while (node.offsetParent && node.offsetParent != document.body) {
            node = node.offsetParent;
            y += node.offsetTop;
        } return y;
    }
    </script>
    <script type="text/javascript">
    (function(a,g,e,n,t){a.enp=a.enp||function(){(a.enp.q=a.enp.q||[]).push(arguments)};
        n=g.createElement(e);n.async=!0;n.defer=!0;n.src="jquery/enp_tracker_self_hosted.min.js";
        t=g.getElementsByTagName(e)[0];t.parentNode.insertBefore(n,t)})(window,document,"script");
    enp('create', 'common', 'vcnc', { device:'B'});
    enp('send', 'common', 'vcnc');
    </script>

    <div class ="text">
    <div class ="footer">
        <h2 class="team_name">타다가 생각났조</h2>
        <p><strong>팀장</strong>&nbsp&nbsp&nbsp&nbsp방성호</p>
        <p><strong>팀원</strong>&nbsp&nbsp&nbsp&nbsp박수웅 박건우 염강현</p>
        <p class="company">multicampus K-Digital 1st Project</p>
    </div>
    </div>
    </body>
    </html>
    `;

    response.send(html);
}

exports.applyPage = function(request, response){
    var html = `
    <!DOCTYPE html>
    <html lang="en" dir="ltr">
    <head>
        <meta charset="utf-8">
        <title>Apply</title>
        <link rel="stylesheet" href="/css/apply.css">
    </head>
    <body>
        <main class = "container">
        <div class="content">
            <div class="image" style = "background-color : #0B1015;">
            <img src="/images/apply01.jpg" alt="">
            </div>
            <div class="image">
            <img src="/images/apply02.jpg" alt="">
            </div>
            <div class="image" style = "background-color : #E8E8E9;">
            <img src="/images/apply03.jpg" alt="">
            </div>
            <div class="image" style = "background-color : #BFE3EC;">
            <img src="/images/apply04.jpg" alt="">
            </div>
            <div class="image">
            <img src="/images/apply05.jpg" alt="">
            </div>
            <div class="image">
            <img src="/images/apply06.jpg" alt="">
            </div>
            <div class="image" style = "background-color : #F0F1F2;">
            <img src="/images/apply07.jpg" alt="">
            </div>
            <div class="float-button-group" id = "apply_button" onclick = "openInNewTab('https://google.com');">지원하기</div>
        </div>
        </main>
        <script>
        function openInNewTab(url) {
            var win = window.open(url, '_blank');
            win.focus();
        }
        </script>

    </body>
    </html>
    `;
    response.send(html);
}

exports.loginPage = function(request, response){
    var html = `
    <!DOCTYPE html>
    <html lang="en" dir="ltr">
    <head>
        <meta charset="utf-8">
        <title>로그인</title>
        <link rel="stylesheet" href="/css/login.css">
    </head>

    <body>
        <main class="container">
            <div class="logo_header">
            <a href="/"><img src="/images/logo.png" alt="타다로고"></a>
            </div>
            <form action="login_process" class="login_box" method="post">
            <input type="text" placeholder="ID" class="input_box" name="userID" id="userID" onkeyup="isBtnAble();">
            <input type="password" placeholder="PASSWORD" class="input_box" name="userPW" id="userPW" onkeyup="isBtnAble();">
            <input type="submit" id="login_btn" class = "login_btn" disabled>
            </form>
            <div class="footer">
            <span class="get_info" onclick = "joinUser();">회원가입</span>
            <span class="divide_article">|</span>
            <span class="get_info" onclick = "findPW();">비밀번호찾기</span>
            </div>
        </main>
        <script>
            function isBtnAble(){
            var lenID = document.getElementById("userID").value.length;
            var lenPW = document.getElementById("userPW").value.length;
            if (lenID > 0 & lenPW > 0) {
                document.getElementById("login_btn").disabled = false;
            }
            else{
                document.getElementById("login_btn").disabled = true;
            }
            }

            function joinUser(){
            alert("준비중입니다.");
            }
            function findPW(){
            alert("준비중입니다.");
            }
            
        </script>
    </body>
    </html>
    `;

    response.send(html);
}