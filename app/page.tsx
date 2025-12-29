export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Brand Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold tracking-wider text-[#FF6B35]">
              VERITAS
            </h1>
            <p className="text-xs md:text-sm text-gray-500 mt-1 tracking-widest">진정성 있는 만남</p>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-screen px-4 py-20 relative overflow-hidden bg-gradient-to-b from-[#FAFAF8] to-white pt-24">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-gray-900">
            <span className="text-[#FF6B35]">집돌이 집순이들 모여라!</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
            직장인 검증 100%. 부담은 0%.<br />
            오직 <span className="text-[#FF6B35] font-semibold">'만남'</span>에만 집중하세요!
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 flex-wrap">
            <a 
              href="https://naver.me/5xapdBCq" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-[#FF6B35] to-[#FF8C42] hover:from-[#FF8C42] hover:to-[#FF6B35] text-white font-bold py-4 px-10 rounded-2xl text-lg transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 transform active:scale-95"
            >
              <span className="flex items-center justify-center gap-2">
                ✨ 지금 바로 간단한 자격 확인하기
              </span>
              <span className="block text-sm font-normal mt-1">선착순 마감</span>
            </a>
            <a 
              href="https://open.kakao.com/o/s4YGJB7h" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#FEE500] hover:bg-[#FDD835] text-gray-900 font-bold py-4 px-8 rounded-2xl text-lg transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 transform active:scale-95"
            >
              <span className="flex items-center justify-center gap-2">
                💬 카카오톡 문의하기
              </span>
            </a>
            <a 
              href="https://www.instagram.com/l__veritas" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCB045] hover:from-[#FCB045] hover:via-[#FD1D1D] hover:to-[#833AB4] text-white font-bold py-4 px-8 rounded-2xl text-lg transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 transform active:scale-95"
            >
              <span className="flex flex-col items-center justify-center gap-1">
                <span className="flex items-center gap-2">
                  📸 인스타그램
                </span>
                <span className="text-sm font-normal">L-VERITAS</span>
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">
            이런 고민 있으신가요?
          </h2>
          <div className="space-y-6 text-lg text-gray-600">
            <p>비싼 참가비를 냈는데, 마음에 드는 사람이 없을까 봐 걱정되시나요?</p>
            <p>시간과 돈을 투자했는데 만족스럽지 않은 결과가 나올까 두려우신가요?</p>
            <p>진정성 있는 만남을 찾고 싶은데, 부담스러운 비용 때문에 망설여지시나요?</p>
            <p>지인 소개팅은 선택의 폭이 좁고, 클럽이나 술집에서 만남은 너무 가볍고, 그렇다고 아무나 만나기엔 망설여지시나요?</p>
          </div>
        </div>
      </section>

      {/* Differentiation Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900">
            다른 로테이션 모임과의
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-16 text-[#FF6B35]">
            차별점
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* 차별점 1 */}
            <div className="bg-gray-50 p-8 rounded-lg border border-gray-200 hover:border-[#FF6B35] hover:shadow-lg transition duration-300">
              <div className="text-3xl mb-4">💝</div>
              <h4 className="text-2xl font-bold mb-4 text-gray-900">여성분 특별 혜택</h4>
              <p className="text-gray-600 leading-relaxed">
                최종 선택이 없을 시, <span className="text-[#FF6B35] font-semibold">여성분들의 참가비 70%를 환급</span>해드립니다. 다른 모임과 달리 진정성 있는 만남을 위해 특별히 준비한 혜택입니다.
              </p>
            </div>

            {/* 차별점 1-2 */}
            <div className="bg-gray-50 p-8 rounded-lg border border-gray-200 hover:border-[#FF6B35] hover:shadow-lg transition duration-300">
              <div className="text-3xl mb-4">🎯</div>
              <h4 className="text-2xl font-bold mb-4 text-gray-900">남성분 특별 혜택</h4>
              <p className="text-gray-600 leading-relaxed">
                <span className="text-[#FF6B35] font-semibold">최다득표 남성의 경우 참가비 50% 환급 이벤트!</span> 많은 분들의 선택을 받은 남성분께 특별한 혜택을 드립니다.
              </p>
            </div>

            {/* 차별점 2 */}
            <div className="bg-gray-50 p-8 rounded-lg border border-gray-200 hover:border-[#FF6B35] hover:shadow-lg transition duration-300">
              <div className="text-3xl mb-4">✅</div>
              <h4 className="text-2xl font-bold mb-4 text-gray-900">아르바이트생 없는 모임</h4>
              <p className="text-gray-600 leading-relaxed">
                <span className="text-[#FF6B35] font-semibold">아르바이트생은 절대 없습니다.</span> 모든 참가자는 직장인 인증을 완료한 분들만으로 구성되어 있어, 진정성 있는 만남을 보장합니다.
              </p>
              <p className="text-gray-500 text-sm mt-2">※아르바이트생은 운영자가 돈을 주고 참가를 부탁한 사람을 말함</p>
            </div>

            {/* 차별점 3 */}
            <div className="bg-gray-50 p-8 rounded-lg border border-gray-200 hover:border-[#FF6B35] hover:shadow-lg transition duration-300">
              <div className="text-3xl mb-4">🎁</div>
              <h4 className="text-2xl font-bold mb-4 text-gray-900">추가비용 없는 번호 제공</h4>
              <p className="text-gray-600 leading-relaxed mb-3">
                상호 선택에 실패했더라도 한쪽에서 선택했다면, 상호 허락하에 번호 제공의 기회가 무료로 제공됩니다.
              </p>
              <p className="text-gray-600 leading-relaxed mb-3">
                <span className="text-[#FF6B35] font-semibold">타 모임과 달리 추가비용이 전혀 없습니다.</span> 진정성 있는 만남을 위해 운영진이 중재해드리며, 안전하고 매너 있는 만남을 위해 상대방의 동의를 필수로 합니다.
              </p>
              <p className="text-gray-600 leading-relaxed">
                인연의 기회를 놓치지 않도록, 서로 마음이 맞는 분들께는 운영진이 적극적으로 연결을 도와드립니다.
              </p>
            </div>

            {/* 차별점 4 */}
            <div className="bg-gray-50 p-8 rounded-lg border border-gray-200 hover:border-[#FF6B35] hover:shadow-lg transition duration-300">
              <div className="text-3xl mb-4">🎓</div>
              <h4 className="text-2xl font-bold mb-4 text-gray-900">넓은 인력풀</h4>
              <p className="text-gray-600 leading-relaxed">
                <span className="text-[#FF6B35] font-semibold">영남대학교, 경북대학교 출신 운영자들</span>의 넓은 인력풀을 통해 다양한 분들과의 만남을 제공합니다. 다양한 직업과 배경을 가진 분들과의 만남이 가능합니다.
              </p>
            </div>

            {/* 차별점 5 */}
            <div className="bg-gray-50 p-8 rounded-lg border border-gray-200 hover:border-[#FF6B35] hover:shadow-lg transition duration-300">
              <div className="text-3xl mb-4">💌</div>
              <h4 className="text-2xl font-bold mb-4 text-gray-900">사후관리 서비스</h4>
              <p className="text-gray-600 leading-relaxed">
                모임이 끝난 후에도 인연의 끈이 이어질 수 있도록 소셜 브릿지 역할을 해드립니다. 아쉽게 짝을 만나지 못한 참여자들이 다른 모임분들과 연결될 수 있도록 도와주는 커뮤니티 케어 시스템입니다.
              </p>
              <p className="text-[#FF6B35] font-semibold mt-2">나만을 위한 특별한 인연, VERITAS가 끝까지 함께합니다</p>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900">
            진행 프로세스
          </h2>
          
          <div className="space-y-8">
            {/* Step 1 */}
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-[#FF6B35] to-[#FF8C42] flex items-center justify-center text-white font-bold text-xl shadow-md">
                1
              </div>
              <div className="flex-1">
                <h4 className="text-2xl font-bold mb-2 text-gray-900">신청</h4>
                <p className="text-gray-600">네이버 폼을 통해 간단하게 신청하세요!</p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-[#FF6B35] to-[#FF8C42] flex items-center justify-center text-white font-bold text-xl shadow-md">
                2
              </div>
              <div className="flex-1">
                <h4 className="text-2xl font-bold mb-2 text-gray-900">검증</h4>
                <p className="text-gray-600">직장인 인증을 통해 진정성 있는 참가자만 선별!</p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-[#FF6B35] to-[#FF8C42] flex items-center justify-center text-white font-bold text-xl shadow-md">
                3
              </div>
              <div className="flex-1">
                <h4 className="text-2xl font-bold mb-2 text-gray-900">인력풀 형성</h4>
                <p className="text-gray-600">검증된 참가자들로 인력풀을 구성합니다.</p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-[#FF6B35] to-[#FF8C42] flex items-center justify-center text-white font-bold text-xl shadow-md">
                4
              </div>
              <div className="flex-1">
                <h4 className="text-2xl font-bold mb-2 text-gray-900">모임 날짜 공지</h4>
                <p className="text-gray-600">모임 일정을 확정하고 참가자들에게 공지합니다.</p>
              </div>
            </div>

            {/* Step 5 */}
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-[#FF6B35] to-[#FF8C42] flex items-center justify-center text-white font-bold text-xl shadow-md">
                5
              </div>
              <div className="flex-1">
                <h4 className="text-2xl font-bold mb-2 text-gray-900">참여자 모집</h4>
                <p className="text-gray-600">인력풀에서 해당 모임에 참여할 분들을 모집합니다.</p>
              </div>
            </div>

            {/* Step 6 */}
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-[#FF6B35] to-[#FF8C42] flex items-center justify-center text-white font-bold text-xl shadow-md">
                6
              </div>
              <div className="flex-1">
                <h4 className="text-2xl font-bold mb-2 text-gray-900">파티 진행</h4>
                <p className="text-gray-600 mb-2">편안한 분위기에서 다양한 분들과 로테이션으로 만나보세요!</p>
                <ul className="text-gray-600 space-y-1 ml-2">
                  <li>• <span className="font-semibold text-[#FF6B35]">ICE BREAKING TIME</span></li>
                  <li>• <span className="font-semibold text-[#FF6B35]">1:1 로테이션 대화 TIME</span></li>
                </ul>
              </div>
            </div>

            {/* Step 7 */}
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-[#FF6B35] to-[#FF8C42] flex items-center justify-center text-white font-bold text-xl shadow-md">
                7
              </div>
              <div className="flex-1">
                <h4 className="text-2xl font-bold mb-2 text-gray-900">최종 투표</h4>
                <p className="text-gray-600">마음에 드는 이성 두 분 (선택 포기 가능)</p>
              </div>
            </div>

            {/* Step 8 */}
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-[#FF6B35] to-[#FF8C42] flex items-center justify-center text-white font-bold text-xl shadow-md">
                8
              </div>
              <div className="flex-1">
                <h4 className="text-2xl font-bold mb-2 text-gray-900">결과 발표</h4>
                <ul className="text-gray-600 space-y-2 mt-2">
                  <li>• 매칭 결과 개별 문자 발송</li>
                  <li>• 매칭 성공 시 연락처 교환</li>
                </ul>
              </div>
            </div>

            {/* Bonus Step */}
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#FF6B35]/10 border-2 border-[#FF6B35] flex items-center justify-center text-[#FF6B35] font-bold text-xl">
                +
              </div>
              <div className="flex-1">
                <h4 className="text-2xl font-bold mb-2 text-[#FF6B35]">아쉬운 분을 위한 1:1 연결 서비스</h4>
                <p className="text-gray-600">운영진 중재를 통해 놓친 인연을 다시 연결!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            모집 대상 & 참가비 안내
          </h2>
          
          <div className="bg-gray-50 p-8 rounded-lg border border-gray-200 space-y-6 shadow-sm">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-[#FF6B35]">참가 자격</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• 기혼자 및 이혼자 참여 불가 (사실혼 참여불가)</li>
                <li>• 대구 경북에서 일하고 있는 직장인 (재직증명서 또는 명함 인증 필수)</li>
                <li>• 만 25세 이상</li>
                <li>• 진정성 있는 만남을 원하시는 분</li>
              </ul>
            </div>
            
            <div className="pt-6 border-t border-gray-200">
              <h3 className="text-2xl font-bold mb-4 text-[#FF6B35]">참가 비용</h3>
              <div className="mb-6">
                <div className="text-center mb-4">
                  <p className="text-sm text-gray-500 mb-2">안내가격</p>
                  <div className="flex justify-center gap-6 text-lg text-gray-400">
                    <span className="line-through">남성 50,000원</span>
                    <span className="line-through">여성 50,000원</span>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-[#FF6B35] to-[#FF8C42] text-white p-6 rounded-lg text-center mb-4">
                  <p className="text-lg font-semibold mb-3">🎉 오픈특가 이벤트 🎉</p>
                  <p className="text-4xl font-bold mb-2">남성 참가자: 35,000원</p>
                  <p className="text-4xl font-bold mb-3">여성 참여자: 30,000원</p>
                  <div className="mt-4 pt-4 border-t border-white/30">
                    <p className="text-lg font-semibold mb-2">👭 여성 동반참여 특별 할인</p>
                    <p className="text-xl font-bold mb-1">동반참여자 1인당 5,000원 할인</p>
                    <p className="text-lg">최대 할인가 10,000원 → <span className="text-2xl font-bold">1인당 20,000원</span></p>
                  </div>
                </div>
                <p className="text-center text-gray-600 text-sm italic">
                  모집 기간으로 평소에 로테이션 소개팅 체험해보고 싶은 분들의 많은 참여 부탁드립니다!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Warning Section */}
      <section className="py-20 px-4 bg-yellow-50 border-y border-yellow-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            ⚠️ 주의사항 (꼭 읽어주세요!)
          </h2>
          
          <div className="bg-white p-8 rounded-lg border-2 border-yellow-400 shadow-lg space-y-4">
            <div className="flex gap-3 items-start">
              <span className="text-2xl">📢</span>
              <p className="text-gray-700 leading-relaxed flex-1">
                원활한 매칭을 위해 일정이 조정될 수 있으며, 적절한 상대가 없을 경우 날짜 및 시간이 변경될 수 있습니다. (사전 개별 안내 예정)
              </p>
            </div>

            <div className="flex gap-3 items-start">
              <span className="text-2xl">🚫</span>
              <p className="text-gray-700 leading-relaxed flex-1">
                <span className="font-semibold text-[#FF6B35]">기혼자 및 이혼자 참여 불가:</span> 법적 미혼 상태인 분만 가능하며, 위반 시 민·형사적 책임이 따를 수 있습니다.
              </p>
            </div>

            <div className="flex gap-3 items-start">
              <span className="text-2xl">🛡️</span>
              <p className="text-gray-700 leading-relaxed flex-1">
                <span className="font-semibold text-[#FF6B35]">철저한 신원 확인:</span> 매칭을 위해 신분증, 직업/소득 관련 서류, 사진 등을 확인합니다. 제출 자료는 개인정보 보유기간 종료 후 즉시 폐기됩니다.
              </p>
            </div>

            <div className="flex gap-3 items-start">
              <span className="text-2xl">❌</span>
              <p className="text-gray-700 leading-relaxed flex-1">
                <span className="font-semibold text-[#FF6B35]">허위 정보 기재 금지:</span> 서류 조작 확인 시 즉시 퇴장 및 향후 참여 제한, 법적 책임이 따릅니다.
              </p>
            </div>

            <div className="flex gap-3 items-start">
              <span className="text-2xl">📸</span>
              <p className="text-gray-700 leading-relaxed flex-1">
                <span className="font-semibold text-[#FF6B35]">사진 촬영 안내:</span> 행사 중 홍보용 사진 촬영이 있을 수 있으나, 얼굴은 반드시 모자이크 처리됩니다. 촬영을 원치 않으시면 미리 말씀해 주세요!
              </p>
            </div>

            <div className="flex gap-3 items-start">
              <span className="text-2xl">⏰</span>
              <p className="text-gray-700 leading-relaxed flex-1">
                <span className="font-semibold text-[#FF6B35]">지각/노쇼 금지:</span> 시작 15분 전 도착 권장! 지각 또는 무단 불참 시 환불이 불가하며 타 참가자에게 피해를 줄 수 있습니다.
              </p>
            </div>

            <div className="flex gap-3 items-start">
              <span className="text-2xl">⚠️</span>
              <p className="text-gray-700 leading-relaxed flex-1">
                <span className="font-semibold text-[#FF6B35]">매너 필수:</span> 부적절한 언행이나 타인에게 불쾌감을 주는 행동 즉시 퇴장 조치됩니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900">
            자주 묻는 질문
          </h2>
          
          <div className="space-y-6">
            {/* FAQ 1 */}
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
              <h4 className="text-xl font-bold mb-3 text-[#FF6B35]">Q. 정말로 아르바이트생이 없나요?</h4>
              <p className="text-gray-600 leading-relaxed">
                네, <span className="text-[#FF6B35] font-semibold">100% 결혼하고싶은 지인과 지인의 지인들 그리고 명함과 서류를 통해 증명된 사람들의 모임</span>입니다. 아르바이트생은 절대 없으며, 모든 참가자는 직장인 인증을 완료한 분들만으로 구성되어 있어 진정성 있는 만남을 보장합니다.
              </p>
            </div>

            {/* FAQ 2 */}
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
              <h4 className="text-xl font-bold mb-3 text-[#FF6B35]">Q. 참가비용 환급 문제</h4>
              <div className="text-gray-600 leading-relaxed space-y-2">
                <p>취소 시점에 따라 환급 정책이 다릅니다:</p>
                <ul className="list-disc list-inside space-y-1 ml-2">
                  <li><span className="text-[#FF6B35] font-semibold">3일 전 취소 시:</span> 참가비 100% 환급</li>
                  <li><span className="text-[#FF6B35] font-semibold">하루 전 취소 시:</span> 참가비 50% 환급</li>
                  <li><span className="text-[#FF6B35] font-semibold">당일 취소 시:</span> 참가비 환급 없음</li>
                </ul>
              </div>
            </div>

            {/* FAQ 3 */}
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
              <h4 className="text-xl font-bold mb-3 text-[#FF6B35]">Q. 연락처 제공은 무조건 되나요?</h4>
              <p className="text-gray-600 leading-relaxed">
                아닙니다! 스토킹 등 불미스러운 일을 방지하기 위해 반드시 상대방이 '동의'했을 때만 제공! 안전하고 매너 있는 만남을 지향!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
            개인의 프라이버시가 중요시되는 세상에서<br />
            점점 더 이성간 만남의 기회가 줄어들고 있어<br />
            아쉬움을 느꼈고, 지인들을 매칭해주면서<br />
            즐거움을 느껴 이 모임을 시작하게 됐습니다.<br />
            <br />
            지금 바로 신청하세요!
          </p>
          <div className="flex flex-col items-center gap-2">
            <a 
              href="https://naver.me/5xapdBCq" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-[#FF6B35] to-[#FF8C42] hover:opacity-90 text-white font-bold py-4 px-10 rounded-lg text-lg transition duration-300 shadow-lg hover:shadow-xl"
            >
              자격 확인하기
              <span className="block text-sm font-normal mt-1">선착순 마감</span>
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}
