export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-screen px-4 py-20 relative overflow-hidden bg-gradient-to-b from-[#FAFAF8] to-white">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-gray-900">
            풋풋한 연애하고싶은<br />
            <span className="text-[#FF6B35]">집돌이 집순이들 모여라!</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
            직장인 검증 100%. 부담은 0%.<br />
            오직 <span className="text-[#FF6B35] font-semibold">'만남'</span>에만 집중하세요!
          </p>
          <div className="flex flex-col items-center gap-2">
            <a 
              href="https://naver.me/G3P2Zipo" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-[#FF6B35] to-[#FF8C42] hover:opacity-90 text-white font-bold py-4 px-10 rounded-lg text-lg transition duration-300 shadow-lg hover:shadow-xl"
            >
              지금 바로 부담 없이 신청하기
              <span className="block text-sm font-normal mt-1">선착순 마감</span>
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
                최종 선택이 없을 시, <span className="text-[#FF6B35] font-semibold">여성분들의 참가비 50%를 반환</span>해드립니다. 다른 모임과 달리 진정성 있는 만남을 위해 특별히 준비한 혜택입니다.
              </p>
            </div>

            {/* 차별점 2 */}
            <div className="bg-gray-50 p-8 rounded-lg border border-gray-200 hover:border-[#FF6B35] hover:shadow-lg transition duration-300">
              <div className="text-3xl mb-4">✅</div>
              <h4 className="text-2xl font-bold mb-4 text-gray-900">아르바이트생 없는 모임</h4>
              <p className="text-gray-600 leading-relaxed">
                <span className="text-[#FF6B35] font-semibold">아르바이트생은 절대 없습니다.</span> 모든 참가자는 직장인 인증을 완료한 분들만으로 구성되어 있어, 진정성 있는 만남을 보장합니다.
              </p>
            </div>

            {/* 차별점 3 */}
            <div className="bg-gray-50 p-8 rounded-lg border border-gray-200 hover:border-[#FF6B35] hover:shadow-lg transition duration-300">
              <div className="text-3xl mb-4">🎁</div>
              <h4 className="text-2xl font-bold mb-4 text-gray-900">추가비용 없는 번호 제공</h4>
              <p className="text-gray-600 leading-relaxed">
                일인당 한 명씩 필요하시다면, 상호 합의 하에 번호를 제공해드립니다. <span className="text-[#FF6B35] font-semibold">타 모임과 달리 추가비용이 전혀 없습니다.</span> 진정성 있는 만남을 위해 운영진이 중재해드립니다.
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
                <p className="text-gray-600">편안한 분위기에서 다양한 분들과 로테이션으로 만나보세요!</p>
              </div>
            </div>

            {/* Step 7 */}
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-[#FF6B35] to-[#FF8C42] flex items-center justify-center text-white font-bold text-xl shadow-md">
                7
              </div>
              <div className="flex-1">
                <h4 className="text-2xl font-bold mb-2 text-gray-900">최종 선택</h4>
                <p className="text-gray-600">마음에 드는 1~3순위 이성 기입 (선택 포기 가능)</p>
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
                  <li>• 선택 미진행 시: 계좌로 디파짓 <span className="text-[#FF6B35] font-semibold">100% 즉시 환불</span></li>
                  <li>• 선택 진행 시: 디파짓 <span className="text-[#FF6B35] font-semibold">50% 환불</span> + 매칭 성공 시 연락처 교환</li>
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
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900">
            모집 대상 & 참가비 안내
          </h2>
          
          <div className="bg-gray-50 p-8 rounded-lg border border-gray-200 space-y-6 shadow-sm">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-[#FF6B35]">참가 자격</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• 미혼 남여</li>
                <li>• 직장인 (재직증명서 또는 명함 인증 필수)</li>
                <li>• 만 25세 이상</li>
                <li>• 혼인관계증명서 제출 필수</li>
                <li>• 진정성 있는 만남을 추구하시는 분</li>
              </ul>
            </div>
            
            <div className="pt-6 border-t border-gray-200">
              <h3 className="text-2xl font-bold mb-4 text-[#FF6B35]">참가 비용</h3>
              <div className="mb-4">
                <p className="text-3xl font-bold text-gray-900 mb-2">남자: 40,000원</p>
                <p className="text-3xl font-bold text-gray-900">여자: 40,000원</p>
              </div>
            </div>

            <div className="pt-6 border-t border-gray-200">
              <h3 className="text-2xl font-bold mb-4 text-[#FF6B35]">디파짓</h3>
              <p className="text-lg text-gray-700 mb-4">참가비와 별도로 디파짓을 받습니다.</p>
              <div className="text-gray-500 space-y-2 text-sm">
                <p>※ 노쇼 방지 및 진정성 있는 참여를 위한 제도입니다.</p>
                <p>※ <span className="text-[#FF6B35] font-semibold">남여 모두 디파짓은 100% 환급</span>해드립니다.</p>
                <p>※ 행사 종료 후 여성참여자의 경우 최종선택을 하지 않으면 참가비의 50% 환급됩니다.</p>
              </div>
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
              <h4 className="text-xl font-bold mb-3 text-[#FF6B35]">Q. 선택을 했는데 매칭이 안 되면요?</h4>
              <p className="text-gray-600 leading-relaxed">
                최종 선택을 하셨으므로 규정에 따라 50% 환급 진행! 하지만 매칭이 안 된 아쉬움을 달래드리기 위해, <span className="text-[#FF6B35] font-semibold">상대방의 의사를 확인한 후 연락처를 전달받을 수 있는 '1회 연결 서비스'</span>를 무료로 제공!
              </p>
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
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
            밑져야 본전이라는 말은<br />
            이럴 때 쓰는거죠.
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
            개인의 프라이버시가 중요시되는 세상에서<br />
            점점 더 이성간 만남의 기회가 줄어들고 있어<br />
            아쉬움을 느꼈고, 지인들을 매칭해주면서<br />
            즐거움을 느껴 이 모임을 시작하게 됐습니다.<br />
            <br />
            지금 바로 신청하세요!
          </p>
          <div className="flex flex-col items-center gap-2">
            <a 
              href="https://naver.me/G3P2Zipo" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-[#FF6B35] to-[#FF8C42] hover:opacity-90 text-white font-bold py-4 px-10 rounded-lg text-lg transition duration-300 shadow-lg hover:shadow-xl"
            >
              참가 신청하기
              <span className="block text-sm font-normal mt-1">선착순 마감</span>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 px-4 bg-gray-50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-600 mb-2">문의사항이 있으시면 언제든지 연락주세요</p>
          <a 
            href="mailto:dhxoguq@gmail.com" 
            className="text-[#FF6B35] font-semibold hover:underline"
          >
            dhxoguq@gmail.com
          </a>
        </div>
      </section>
    </main>
  );
}
