export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-sky-50/30 via-blue-50/20 to-white text-gray-900">
      {/* Brand Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-sky-100/50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold tracking-wider text-gray-800">
              VERITAS
            </h1>
            <p className="text-xs md:text-sm text-gray-400 mt-1 tracking-widest">진정성 있는 만남</p>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-screen px-4 pt-20 sm:pt-24 pb-0 relative overflow-hidden bg-gradient-to-b from-sky-50/20 via-blue-50/10 to-white">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight text-gray-800 px-2">
            <span className="text-gray-900">집돌이 집순이들 모여라!</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 mb-6 sm:mb-8 max-w-3xl mx-auto font-light px-2">
            VERITAS 로테이션 소개팅
          </p>
          <div className="flex flex-col items-center justify-center gap-3 w-full px-2">
            <a 
              href="https://naver.me/5xapdBCq" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-gray-900 hover:bg-gray-800 text-white font-medium py-3.5 px-8 rounded-full text-sm sm:text-base w-full sm:w-auto transition-all duration-300 shadow-sm hover:shadow-md active:scale-95 text-center"
            >
              <span className="flex items-center justify-center gap-2">
                ✨ 지금 바로 간단한 자격 확인하기
              </span>
            </a>
            <a 
              href="https://open.kakao.com/o/s4YGJB7h" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-medium py-3.5 px-8 rounded-full text-sm sm:text-base w-full sm:w-auto transition-all duration-300 shadow-sm hover:shadow-md active:scale-95 text-center"
            >
              <span className="flex items-center justify-center gap-2">
                💬 카카오톡 문의하기
              </span>
            </a>
            <a 
              href="https://www.instagram.com/l__veritas" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-purple-400 to-pink-400 hover:from-purple-500 hover:to-pink-500 text-white font-medium py-3.5 px-8 rounded-full text-sm sm:text-base w-full sm:w-auto transition-all duration-300 shadow-sm hover:shadow-md active:scale-95 text-center"
            >
              <span className="flex flex-col items-center justify-center gap-0.5">
                <span className="flex items-center gap-2 text-base">
                  📸 인스타그램
                </span>
                <span className="text-xs font-normal">L-VERITAS</span>
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Scroll Hint - Between Hero and VERITAS Promise */}
      <div className="flex flex-col items-center justify-center pt-0 pb-2 sm:pb-3 gap-2 opacity-70">
        <span className="text-xs sm:text-sm text-gray-500 font-medium">더 알아보기</span>
        <svg 
          className="w-6 h-6 sm:w-8 sm:h-8 text-sky-400 animate-bounce" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>

      {/* VERITAS Promise Section */}
      <section className="py-8 sm:py-12 md:py-16 px-4 bg-gradient-to-b from-white via-sky-50/30 to-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-block mb-6 sm:mb-8">
            <span className="text-xs sm:text-sm font-semibold text-sky-500 uppercase tracking-wider px-4 py-2 bg-sky-50 rounded-full border border-sky-200">
              핵심 가치
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 text-gray-900 px-2">
            <span className="bg-gradient-to-r from-sky-600 via-blue-600 to-sky-600 bg-clip-text text-transparent">
              VERITAS만의 약속
            </span>
          </h2>
          
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl sm:rounded-3xl border-2 border-sky-200/50 shadow-xl p-6 sm:p-8 md:p-10 lg:p-12 max-w-4xl mx-auto">
            <div className="space-y-4 sm:space-y-5 md:space-y-6">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-r from-sky-400 to-blue-500 flex items-center justify-center mt-1">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"/>
                  </svg>
                </div>
                <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed text-left flex-1 font-medium">
                  본 로테이션 소개팅은 최고의 매칭 만족도를 위해 잦은 모임을 진행하지 않습니다.
                </p>
              </div>
              
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-r from-sky-400 to-blue-500 flex items-center justify-center mt-1">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"/>
                  </svg>
                </div>
                <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed text-left flex-1 font-medium">
                  한 달에 단 <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-sky-600">4회</span>, 매 회차마다 <span className="text-sky-600 font-bold">매칭 퀄리티를 최우선</span>으로 고려한 맞춤형 소개팅만을 진행합니다.
                </p>
              </div>
              
              <div className="flex items-start gap-3 sm:gap-4 mt-4 sm:mt-5">
                <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-r from-sky-400 to-blue-500 flex items-center justify-center mt-1">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"/>
                  </svg>
                </div>
                <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed text-left flex-1 font-medium">
                  이러한 점 때문에 <span className="text-sky-600 font-bold">대기시간이 길어질 수 있다는 점</span>을 양해 부탁드립니다.
                </p>
              </div>
            </div>
            
            <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-sky-100">
              <p className="text-sm sm:text-base text-gray-500 italic">
                ✨ 진정성 있는 만남을 위한 VERITAS의 약속 ✨
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Differentiation Section */}
      <section className="py-8 sm:py-12 md:py-16 px-4 bg-sky-50/20 relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-center mb-3 sm:mb-4 text-gray-800 px-2">
            다른 로테이션 모임과의
          </h2>
          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-center mb-8 sm:mb-12 md:mb-16 text-gray-700 px-2">
            차별점
          </h3>
          
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {/* 차별점 1 */}
            <div className="bg-white/70 p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl border border-sky-100 hover:border-sky-200 hover:shadow-md transition-all duration-300 backdrop-blur-sm">
              <div className="text-2xl sm:text-3xl mb-3 sm:mb-4">💝</div>
              <h4 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3 sm:mb-4 text-gray-900">여성분 특별 혜택</h4>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                최종 선택이 없을 시, <span className="text-gray-900 font-semibold">여성분들의 참가비 50%를 환급</span>해드립니다. 다른 모임과 달리 진정성 있는 만남을 위해 특별히 준비한 혜택입니다.
              </p>
            </div>

            {/* 차별점 2 */}
            <div className="bg-white/70 p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl border border-sky-100 hover:border-sky-200 hover:shadow-md transition-all duration-300 backdrop-blur-sm">
              <div className="text-2xl sm:text-3xl mb-3 sm:mb-4">🎯</div>
              <h4 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3 sm:mb-4 text-gray-900">남성분 특별 혜택</h4>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                <span className="text-gray-900 font-semibold">최다득표 남성의 경우 참가비 50% 환급 이벤트!</span> 많은 분들의 선택을 받은 남성분께 특별한 혜택을 드립니다.
              </p>
            </div>

            {/* 차별점 3 */}
            <div className="bg-white/70 p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl border border-sky-100 hover:border-sky-200 hover:shadow-md transition-all duration-300 backdrop-blur-sm">
              <div className="text-2xl sm:text-3xl mb-3 sm:mb-4">✅</div>
              <h4 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3 sm:mb-4 text-gray-900">아르바이트생 없는 모임</h4>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                <span className="text-gray-900 font-semibold">아르바이트생은 절대 없습니다.</span> 모든 참가자는 직장인 인증을 완료한 분들만으로 구성되어 있어, 진정성 있는 만남을 보장합니다.
              </p>
              <p className="text-gray-400 text-xs sm:text-sm mt-2">※아르바이트생은 운영자가 돈을 주고 참가를 부탁한 사람을 말함</p>
            </div>

            {/* 차별점 4 */}
            <div className="bg-white/70 p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl border border-sky-100 hover:border-sky-200 hover:shadow-md transition-all duration-300 backdrop-blur-sm">
              <div className="text-2xl sm:text-3xl mb-3 sm:mb-4">🎓</div>
              <h4 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3 sm:mb-4 text-gray-900">넓은 인력풀</h4>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center sm:items-start mb-3 sm:mb-4">
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-2xl bg-gradient-to-br from-sky-100 to-blue-100 border-2 border-sky-200 shadow-lg flex items-center justify-center overflow-hidden hover:scale-105 transition-all duration-300">
                    <img 
                      src="/KakaoTalk_20251230_222633340.jpg" 
                      alt="졸업 사진" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed flex-1">
                  <span className="text-gray-900 font-semibold">경희대학교, 경북대학교 출신 운영자들</span>의 넓은 인력풀을 통해 다양한 분들과의 만남을 제공합니다. 다양한 직업과 배경을 가진 분들과의 만남이 가능합니다.
                </p>
              </div>
            </div>

            {/* 차별점 5 */}
            <div className="bg-white/70 p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl border border-sky-100 hover:border-sky-200 hover:shadow-md transition-all duration-300 backdrop-blur-sm">
              <div className="text-2xl sm:text-3xl mb-3 sm:mb-4">💌</div>
              <h4 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3 sm:mb-4 text-gray-900">사후관리 서비스</h4>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                모임이 끝난 후에도 인연의 끈이 이어질 수 있도록 소셜 브릿지 역할을 해드립니다. 아쉽게 짝을 만나지 못한 참여자들이 다른 모임분들과 연결될 수 있도록 도와주는 커뮤니티 케어 시스템입니다.
              </p>
              <p className="text-sm sm:text-base text-gray-900 font-semibold mt-2">나만을 위한 특별한 인연, VERITAS가 끝까지 함께합니다</p>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 bg-white relative">
        <div className="max-w-5xl mx-auto relative z-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-center mb-8 sm:mb-12 md:mb-16 text-gray-800 px-2">
            진행 프로세스
          </h2>
          
          <div className="space-y-5 sm:space-y-6 md:space-y-8">
            {/* Step 1 */}
            <div className="flex gap-3 sm:gap-4 md:gap-6 items-start">
              <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-sky-400 flex items-center justify-center text-white font-medium text-lg sm:text-xl shadow-sm">
                1
              </div>
              <div className="flex-1">
                <h4 className="text-lg sm:text-xl md:text-2xl font-semibold mb-1 sm:mb-2 text-gray-800">신청</h4>
                <p className="text-sm sm:text-base text-gray-600 font-light">네이버 폼을 통해 간단하게 신청하세요!</p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex gap-3 sm:gap-4 md:gap-6 items-start">
              <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-sky-400 flex items-center justify-center text-white font-medium text-lg sm:text-xl shadow-sm">
                2
              </div>
              <div className="flex-1">
                <h4 className="text-lg sm:text-xl md:text-2xl font-semibold mb-1 sm:mb-2 text-gray-800">검증</h4>
                <p className="text-sm sm:text-base text-gray-600 font-light">직장인 인증을 통해 진정성 있는 참가자만 선별!</p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex gap-3 sm:gap-4 md:gap-6 items-start">
              <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-sky-400 flex items-center justify-center text-white font-medium text-lg sm:text-xl shadow-sm">
                3
              </div>
              <div className="flex-1">
                <h4 className="text-lg sm:text-xl md:text-2xl font-semibold mb-1 sm:mb-2 text-gray-800">인력풀 형성</h4>
                <p className="text-sm sm:text-base text-gray-600 font-light">검증된 참가자들로 인력풀을 구성합니다.</p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex gap-3 sm:gap-4 md:gap-6 items-start">
              <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-sky-400 flex items-center justify-center text-white font-medium text-lg sm:text-xl shadow-sm">
                4
              </div>
              <div className="flex-1">
                <h4 className="text-lg sm:text-xl md:text-2xl font-semibold mb-1 sm:mb-2 text-gray-800">모임 날짜 공지</h4>
                <p className="text-sm sm:text-base text-gray-600 font-light">모임 일정을 확정하고 참가자들에게 공지합니다.</p>
              </div>
            </div>

            {/* Step 5 */}
            <div className="flex gap-3 sm:gap-4 md:gap-6 items-start">
              <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-sky-400 flex items-center justify-center text-white font-medium text-lg sm:text-xl shadow-sm">
                5
              </div>
              <div className="flex-1">
                <h4 className="text-lg sm:text-xl md:text-2xl font-semibold mb-1 sm:mb-2 text-gray-800">참여자 모집</h4>
                <p className="text-sm sm:text-base text-gray-600 font-light">인력풀에서 해당 모임에 참여할 분들을 모집합니다.</p>
              </div>
            </div>

            {/* Step 6 */}
            <div className="flex gap-3 sm:gap-4 md:gap-6 items-start">
              <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-sky-400 flex items-center justify-center text-white font-medium text-lg sm:text-xl shadow-sm">
                6
              </div>
              <div className="flex-1">
                <h4 className="text-lg sm:text-xl md:text-2xl font-semibold mb-1 sm:mb-2 text-gray-800">파티 진행</h4>
                <p className="text-sm sm:text-base text-gray-600 mb-2 font-light">편안한 분위기에서 다양한 분들과 로테이션으로 만나보세요!</p>
                <ul className="text-sm sm:text-base text-gray-600 space-y-1 ml-2 font-light">
                  <li>• <span className="font-medium text-gray-800">ICE BREAKING TIME</span></li>
                  <li>• <span className="font-medium text-gray-800">1:1 로테이션 대화 TIME</span></li>
                </ul>
              </div>
            </div>

            {/* Step 7 */}
            <div className="flex gap-3 sm:gap-4 md:gap-6 items-start">
              <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-sky-400 flex items-center justify-center text-white font-medium text-lg sm:text-xl shadow-sm">
                7
              </div>
              <div className="flex-1">
                <h4 className="text-lg sm:text-xl md:text-2xl font-semibold mb-1 sm:mb-2 text-gray-800">최종 투표</h4>
                <p className="text-sm sm:text-base text-gray-600 font-light">마음에 드는 이성 두 분 (선택 포기 가능)</p>
              </div>
            </div>

            {/* Step 8 */}
            <div className="flex gap-3 sm:gap-4 md:gap-6 items-start">
              <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-sky-400 flex items-center justify-center text-white font-medium text-lg sm:text-xl shadow-sm">
                8
              </div>
              <div className="flex-1">
                <h4 className="text-lg sm:text-xl md:text-2xl font-semibold mb-1 sm:mb-2 text-gray-800">결과 발표</h4>
                <ul className="text-sm sm:text-base text-gray-600 space-y-1 sm:space-y-2 mt-1 sm:mt-2">
                  <li>• 매칭 결과 개별 문자 발송</li>
                  <li>• 매칭 성공 시 연락처 교환</li>
                </ul>
              </div>
            </div>

            {/* Bonus Step */}
            <div className="flex gap-3 sm:gap-4 md:gap-6 items-start">
              <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-sky-100 border-2 border-sky-200 flex items-center justify-center text-sky-600 font-medium text-lg sm:text-xl">
                +
              </div>
              <div className="flex-1">
                <h4 className="text-lg sm:text-xl md:text-2xl font-semibold mb-1 sm:mb-2 text-gray-800">아쉬운 분을 위한 1:1 연결 서비스</h4>
                <p className="text-sm sm:text-base text-gray-600">운영진 중재를 통해 놓친 인연을 다시 연결!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 bg-sky-50/20 relative">
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center mb-6 sm:mb-8 md:mb-12 text-gray-800 px-2">
            모집 대상 & 참가비 안내
          </h2>
          
          <div className="bg-white/70 p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl border border-sky-100 space-y-4 sm:space-y-6 shadow-sm backdrop-blur-sm">
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-gray-800">참가 자격</h3>
              <ul className="text-sm sm:text-base text-gray-600 space-y-1.5 sm:space-y-2">
                <li>• 기혼자 및 이혼자 참여 불가 (사실혼 참여불가)</li>
                <li>• 대구에서 거주하고 있거나 거주할 예정인 직장인 (재직증명서 또는 명함 인증 필수)</li>
                <li>• (남) 1986 ~ 2002년생 / (여) 1986 ~ 2005년생</li>
                <li>• 진정성 있는 만남을 원하시는 분</li>
              </ul>
            </div>
            
            <div className="pt-4 sm:pt-6 border-t border-sky-100">
              <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-gray-800">참가 비용</h3>
              <div className="mb-4 sm:mb-6">
                <div className="text-center mb-3 sm:mb-4">
                  <p className="text-xs sm:text-sm text-gray-500 mb-1 sm:mb-2">안내가격</p>
                  <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-6 text-sm sm:text-lg text-gray-400">
                    <span className="line-through">남성 50,000원</span>
                    <span className="line-through">여성 50,000원</span>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-sky-400 via-blue-400 to-sky-500 text-white p-4 sm:p-6 rounded-xl sm:rounded-2xl text-center mb-3 sm:mb-4 shadow-md">
                  <p className="text-base sm:text-lg font-semibold mb-2 sm:mb-3">🎉 오픈특가 이벤트 🎉</p>
                  <p className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 sm:mb-2">남성 참가자: 35,000원</p>
                  <p className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3">여성 참여자: 30,000원</p>
                  <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-white/30">
                    <p className="text-sm sm:text-base md:text-lg font-semibold mb-1 sm:mb-2">👭 여성 동반참여 특별 할인</p>
                    <p className="text-base sm:text-lg md:text-xl font-bold mb-1">동반참여자 1인당 5,000원 할인</p>
                    <p className="text-sm sm:text-base md:text-lg">최대 할인가 10,000원 → <span className="text-xl sm:text-2xl font-bold">1인당 20,000원</span></p>
                  </div>
                </div>
                <p className="text-center text-gray-600 text-xs sm:text-sm italic px-2">
                  모집 기간으로 평소에 로테이션 소개팅 체험해보고 싶은 분들의 많은 참여 부탁드립니다!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Warning Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 bg-white border-y border-sky-100/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center mb-6 sm:mb-8 md:mb-12 text-gray-800 px-2">
            ⚠️ 주의사항 (꼭 읽어주세요!)
          </h2>
          
          <div className="bg-white/70 p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl border border-sky-200/50 shadow-sm space-y-3 sm:space-y-4 backdrop-blur-sm">
            <div className="flex gap-2 sm:gap-3 items-start">
              <span className="text-xl sm:text-2xl flex-shrink-0">📢</span>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed flex-1">
                원활한 매칭을 위해 일정이 조정될 수 있으며, 적절한 상대가 없을 경우 날짜 및 시간이 변경될 수 있습니다. (사전 개별 안내 예정)
              </p>
            </div>

            <div className="flex gap-2 sm:gap-3 items-start">
              <span className="text-xl sm:text-2xl flex-shrink-0">🚫</span>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed flex-1">
                <span className="font-semibold text-gray-900">기혼자 및 이혼자 참여 불가:</span> 법적 미혼 상태인 분만 가능하며, 위반 시 민·형사적 책임이 따를 수 있습니다.
              </p>
            </div>

            <div className="flex gap-2 sm:gap-3 items-start">
              <span className="text-xl sm:text-2xl flex-shrink-0">🛡️</span>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed flex-1">
                <span className="font-semibold text-gray-900">철저한 신원 확인:</span> 매칭을 위해 신분증, 직업/소득 관련 서류, 사진 등을 확인합니다. 제출 자료는 개인정보 보유기간 종료 후 즉시 폐기됩니다.
              </p>
            </div>

            <div className="flex gap-2 sm:gap-3 items-start">
              <span className="text-xl sm:text-2xl flex-shrink-0">❌</span>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed flex-1">
                <span className="font-semibold text-gray-900">허위 정보 기재 금지:</span> 서류 조작 확인 시 즉시 퇴장 및 향후 참여 제한, 법적 책임이 따릅니다.
              </p>
            </div>

            <div className="flex gap-2 sm:gap-3 items-start">
              <span className="text-xl sm:text-2xl flex-shrink-0">📸</span>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed flex-1">
                <span className="font-semibold text-gray-900">사진 촬영 안내:</span> 행사 중 홍보용 사진 촬영이 있을 수 있으나, 얼굴은 반드시 모자이크 처리됩니다. 촬영을 원치 않으시면 미리 말씀해 주세요!
              </p>
            </div>

            <div className="flex gap-2 sm:gap-3 items-start">
              <span className="text-xl sm:text-2xl flex-shrink-0">⏰</span>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed flex-1">
                <span className="font-semibold text-gray-900">지각/노쇼 금지:</span> 시작 15분 전 도착 권장! 지각 또는 무단 불참 시 환불이 불가하며 타 참가자에게 피해를 줄 수 있습니다.
              </p>
            </div>

            <div className="flex gap-2 sm:gap-3 items-start">
              <span className="text-xl sm:text-2xl flex-shrink-0">⚠️</span>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed flex-1">
                <span className="font-semibold text-gray-900">매너 필수:</span> 부적절한 언행이나 타인에게 불쾌감을 주는 행동 즉시 퇴장 조치됩니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 bg-sky-50/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-center mb-8 sm:mb-12 md:mb-16 text-gray-800 px-2">
            자주 묻는 질문
          </h2>
          
          <div className="space-y-4 sm:space-y-5 md:space-y-6">
            {/* FAQ 1 */}
            <div className="bg-white/70 p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl border border-sky-200/50 shadow-sm backdrop-blur-sm">
              <h4 className="text-base sm:text-lg md:text-xl font-semibold mb-2 sm:mb-3 text-gray-800">Q. 정말로 아르바이트생이 없나요?</h4>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                네, <span className="text-gray-900 font-semibold">100% 결혼하고싶은 지인과 지인의 지인들 그리고 명함과 서류를 통해 증명된 사람들의 모임</span>입니다. 아르바이트생은 절대 없으며, 모든 참가자는 직장인 인증을 완료한 분들만으로 구성되어 있어 진정성 있는 만남을 보장합니다.
              </p>
            </div>

            {/* FAQ 2 */}
            <div className="bg-white/70 p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl border border-sky-200/50 shadow-sm backdrop-blur-sm">
              <h4 className="text-base sm:text-lg md:text-xl font-semibold mb-2 sm:mb-3 text-gray-800">Q. 참가비용 환급 문제</h4>
              <div className="text-sm sm:text-base text-gray-700 leading-relaxed space-y-1.5 sm:space-y-2">
                <p>취소 시점에 따라 환급 정책이 다릅니다:</p>
                <ul className="list-disc list-inside space-y-1 ml-2">
                  <li><span className="text-gray-900 font-semibold">3일 전 취소 시:</span> 참가비 100% 환급</li>
                  <li><span className="text-gray-900 font-semibold">하루 전 취소 시:</span> 참가비 50% 환급</li>
                  <li><span className="text-gray-900 font-semibold">당일 취소 시:</span> 참가비 환급 없음</li>
                </ul>
              </div>
            </div>

            {/* FAQ 3 */}
            <div className="bg-white/70 p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl border border-sky-200/50 shadow-sm backdrop-blur-sm">
              <h4 className="text-base sm:text-lg md:text-xl font-semibold mb-2 sm:mb-3 text-gray-800">Q. 연락처 제공은 무조건 되나요?</h4>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                아닙니다! 스토킹 등 불미스러운 일을 방지하기 위해 반드시 상대방이 '동의'했을 때만 제공! 안전하고 매너 있는 만남을 지향!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 bg-gradient-to-b from-sky-50/20 to-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed font-light px-2">
            개인의 프라이버시가 중요시되는 세상에서<br />
            점점 더 이성간 만남의 기회가 줄어들고 있어<br />
            아쉬움을 느꼈고, 지인들을 매칭해주면서<br />
            즐거움을 느껴 이 모임을 시작하게 됐습니다.<br />
            <br />
            <span className="text-gray-800 font-medium">지금 바로 신청하세요!</span>
          </p>
          <div className="flex flex-col items-center gap-2 px-2">
            <a 
              href="https://naver.me/5xapdBCq" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-sky-400 via-blue-400 to-sky-500 hover:from-sky-500 hover:via-blue-500 hover:to-sky-600 text-white font-medium py-3.5 sm:py-4 px-8 sm:px-10 rounded-full text-base sm:text-lg w-full sm:w-auto transition-all duration-300 shadow-md hover:shadow-lg active:scale-95 text-center"
            >
              자격 확인하기
              <span className="block text-xs sm:text-sm font-light mt-1">선착순 마감</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
