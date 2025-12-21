export default function Home() {
  return (
    <main className="min-h-screen bg-[#1a1612] text-[#FFF8E7]">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-screen px-4 py-20 relative overflow-hidden">
        {/* 따뜻한 조명 효과 배경 */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#2d241f] via-[#1a1612] to-[#1a1612] opacity-50"></div>
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#FFB84D] rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#FFA500] rounded-full blur-3xl opacity-15"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            마음에 드는 분이 없다면?<br />
            <span className="text-[#FFB84D] warm-glow-text">예치금 100% 전액 환불!</span>
          </h1>
          <p className="text-xl md:text-2xl text-[#FFF8E7]/90 mb-8 max-w-3xl mx-auto">
            직장인 검증 100%. 부담은 0%.<br />
            오직 <span className="text-[#FFB84D] font-semibold warm-glow-text">'만남'</span>에만 집중하세요!<br />
            최종 선택 시에도 응원의 마음으로 50%를 돌려드립니다!
          </p>
          <a 
            href="https://naver.me/G3P2Zipo" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-[#FFB84D] via-[#FFA500] to-[#FF8C00] hover:opacity-90 text-[#1a1612] font-bold py-4 px-10 rounded-lg text-lg transition duration-300 warm-glow shadow-lg"
          >
            지금 바로 부담 없이 신청하기 (선착순 마감)
          </a>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-20 px-4 bg-[#2d241f] relative">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-[#FFF8E7]">
            이런 고민 있으신가요?
          </h2>
          <div className="space-y-6 text-lg text-[#FFF8E7]/80">
            <p>비싼 참가비를 냈는데, 마음에 드는 사람이 없을까 봐 걱정되시나요?</p>
            <p>시간과 돈을 투자했는데 만족스럽지 않은 결과가 나올까 두려우신가요?</p>
            <p>진정성 있는 만남을 찾고 싶은데, 부담스러운 비용 때문에 망설여지시나요?</p>
          </div>
        </div>
      </section>

      {/* Core Features Section */}
      <section className="py-20 px-4 bg-[#1a1612] relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-[#FFF8E7]">
            진정성 있는 만남을 위한
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-16 text-[#FFB84D] warm-glow-text">
            3가지 약속
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-[#2d241f] p-8 rounded-lg border border-[#3d3429] hover:border-[#FFB84D] transition duration-300 warm-glow">
              <div className="text-4xl font-bold text-[#FFB84D] mb-4 warm-glow-text">1</div>
              <h4 className="text-2xl font-bold mb-4 text-[#FFF8E7]">불만족 시 0원, 만족 책임제</h4>
              <p className="text-[#FFF8E7]/80 leading-relaxed">
                참석 후 마음에 드는 이성이 없어 최종 선택을 포기하셨다면, 디파짓(예치금)을 <span className="text-[#FFB84D] font-semibold">100% 환불</span>! 시간 낭비, 돈 낭비 걱정 없이 오직 좋은 사람을 찾는 데에만 집중하세요!
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-[#2d241f] p-8 rounded-lg border border-[#3d3429] hover:border-[#FFB84D] transition duration-300 warm-glow">
              <div className="text-4xl font-bold text-[#FFB84D] mb-4 warm-glow-text">2</div>
              <h4 className="text-2xl font-bold mb-4 text-[#FFF8E7]">커플 응원 페이백</h4>
              <p className="text-[#FFF8E7]/80 leading-relaxed">
                용기 내어 최종 선택을 하셨다면? 그 용기를 응원하는 마음으로 디파짓의 <span className="text-[#FFB84D] font-semibold">50%를 환불</span>! 부담 없는 비용으로 설레는 인연을 만드세요!
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-[#2d241f] p-8 rounded-lg border border-[#3d3429] hover:border-[#FFB84D] transition duration-300 warm-glow">
              <div className="text-4xl font-bold text-[#FFB84D] mb-4 warm-glow-text">3</div>
              <h4 className="text-2xl font-bold mb-4 text-[#FFF8E7]">놓친 인연을 위한 시크릿 찬스</h4>
              <p className="text-[#FFF8E7]/80 leading-relaxed">
                매칭에 실패했더라도, 정말 놓치기 아쉬운 분이 있다면 운영진에게 알려주세요! 상호 합의 하에 딱 1번, 상대방의 연락처를 받을 수 있는 기회를 제공! (단, 상대방 거절 시 불가)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-20 px-4 bg-[#2d241f] relative">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-[#FFF8E7]">
            진행 프로세스
          </h2>
          
          <div className="space-y-8">
            {/* Step 1 */}
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-[#FFB84D] via-[#FFA500] to-[#FF8C00] flex items-center justify-center text-[#1a1612] font-bold text-xl warm-glow">
                1
              </div>
              <div className="flex-1">
                <h4 className="text-2xl font-bold mb-2 text-[#FFF8E7]">신청</h4>
                <p className="text-[#FFF8E7]/80">네이버 폼을 통해 간단하게 신청하세요!</p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-[#FFB84D] via-[#FFA500] to-[#FF8C00] flex items-center justify-center text-[#1a1612] font-bold text-xl warm-glow">
                2
              </div>
              <div className="flex-1">
                <h4 className="text-2xl font-bold mb-2 text-[#FFF8E7]">검증</h4>
                <p className="text-[#FFF8E7]/80">직장인 인증을 통해 진정성 있는 참가자만 선별!</p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-[#FFB84D] via-[#FFA500] to-[#FF8C00] flex items-center justify-center text-[#1a1612] font-bold text-xl warm-glow">
                3
              </div>
              <div className="flex-1">
                <h4 className="text-2xl font-bold mb-2 text-[#FFF8E7]">파티 진행</h4>
                <p className="text-[#FFF8E7]/80">편안한 분위기에서 다양한 분들과 로테이션으로 만나보세요!</p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-[#FFB84D] via-[#FFA500] to-[#FF8C00] flex items-center justify-center text-[#1a1612] font-bold text-xl warm-glow">
                4
              </div>
              <div className="flex-1">
                <h4 className="text-2xl font-bold mb-2 text-[#FFF8E7]">최종 선택</h4>
                <p className="text-[#FFF8E7]/80">마음에 드는 1~3순위 이성 기입 (선택 포기 가능)</p>
              </div>
            </div>

            {/* Step 5 */}
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-[#FFB84D] via-[#FFA500] to-[#FF8C00] flex items-center justify-center text-[#1a1612] font-bold text-xl warm-glow">
                5
              </div>
              <div className="flex-1">
                <h4 className="text-2xl font-bold mb-2 text-[#FFF8E7]">결과 발표 & 환급</h4>
                <ul className="text-[#FFF8E7]/80 space-y-2 mt-2">
                  <li>• 매칭 결과 개별 문자 발송</li>
                  <li>• 선택 미진행 시: 계좌로 예치금 <span className="text-[#FFB84D] font-semibold">100% 즉시 환불</span></li>
                  <li>• 선택 진행 시: 예치금 <span className="text-[#FFB84D] font-semibold">50% 환불</span> + 매칭 성공 시 연락처 교환</li>
                </ul>
              </div>
            </div>

            {/* Bonus Step */}
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#FFB84D]/20 border-2 border-[#FFB84D] flex items-center justify-center text-[#FFB84D] font-bold text-xl warm-glow">
                +
              </div>
              <div className="flex-1">
                <h4 className="text-2xl font-bold mb-2 text-[#FFB84D] warm-glow-text">아쉬운 분을 위한 1:1 연결 서비스</h4>
                <p className="text-[#FFF8E7]/80">운영진 중재를 통해 놓친 인연을 다시 연결!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-20 px-4 bg-[#1a1612]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-[#FFF8E7]">
            모집 대상 & 참가비 안내
          </h2>
          
          <div className="bg-[#2d241f] p-8 rounded-lg border border-[#3d3429] space-y-6 warm-glow">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-[#FFB84D] warm-glow-text">참가 자격</h3>
              <ul className="text-[#FFF8E7]/80 space-y-2">
                <li>• 직장인 (재직증명서 또는 명함 인증 필수)</li>
                <li>• 만 25세 이상</li>
                <li>• 진정성 있는 만남을 추구하시는 분</li>
              </ul>
            </div>
            
            <div className="pt-6 border-t border-[#3d3429]">
              <h3 className="text-2xl font-bold mb-4 text-[#FFB84D] warm-glow-text">참가 비용 (디파짓)</h3>
              <p className="text-3xl font-bold mb-4 text-[#FFF8E7]">남/녀 00,000원</p>
              <div className="text-[#FFF8E7]/70 space-y-2 text-sm">
                <p>※ 노쇼 방지 및 진정성 있는 참여를 위한 예치금 제도!</p>
                <p>※ 행사 종료 후 선택 여부에 따라 50% ~ 100% 환급!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-[#2d241f]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-[#FFF8E7]">
            자주 묻는 질문
          </h2>
          
          <div className="space-y-6">
            {/* FAQ 1 */}
            <div className="bg-[#1a1612] p-6 rounded-lg border border-[#3d3429] warm-glow">
              <h4 className="text-xl font-bold mb-3 text-[#FFB84D] warm-glow-text">Q. 정말 100% 환불이 되나요?</h4>
              <p className="text-[#FFF8E7]/80 leading-relaxed">
                네, 그렇습니다! 행사 종료 후 최종 매칭 용지에 '선택 안 함'을 체크해주시면, 묻지도 따지지도 않고 디파짓 전액을 돌려드립니다! 그만큼 퀄리티에 자신있습니다!
              </p>
            </div>

            {/* FAQ 2 */}
            <div className="bg-[#1a1612] p-6 rounded-lg border border-[#3d3429] warm-glow">
              <h4 className="text-xl font-bold mb-3 text-[#FFB84D] warm-glow-text">Q. 선택을 했는데 매칭이 안 되면요?</h4>
              <p className="text-[#FFF8E7]/80 leading-relaxed">
                최종 선택을 하셨으므로 규정에 따라 50% 환급 진행! 하지만 매칭이 안 된 아쉬움을 달래드리기 위해, <span className="text-[#FFB84D] font-semibold">상대방의 의사를 확인한 후 연락처를 전달받을 수 있는 '1회 연결 서비스'</span>를 무료로 제공!
              </p>
            </div>

            {/* FAQ 3 */}
            <div className="bg-[#1a1612] p-6 rounded-lg border border-[#3d3429] warm-glow">
              <h4 className="text-xl font-bold mb-3 text-[#FFB84D] warm-glow-text">Q. 연락처 제공은 무조건 되나요?</h4>
              <p className="text-[#FFF8E7]/80 leading-relaxed">
                아닙니다! 스토킹 등 불미스러운 일을 방지하기 위해 반드시 상대방이 '동의'했을 때만 제공! 안전하고 매너 있는 만남을 지향!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA Section */}
      <section className="py-20 px-4 bg-[#1a1612] relative overflow-hidden">
        {/* 따뜻한 조명 효과 */}
        <div className="absolute top-10 left-1/4 w-40 h-40 bg-[#FFB84D] rounded-full blur-3xl opacity-15"></div>
        <div className="absolute bottom-10 right-1/4 w-48 h-48 bg-[#FFA500] rounded-full blur-3xl opacity-10"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-[#FFF8E7]">
            밑져야 본전이라는 말은<br />
            이럴 때 쓰는거죠.
          </h2>
          <p className="text-xl md:text-2xl text-[#FFF8E7]/90 mb-8">
            마음에 안 들면 100% 환불!<br />
            당신은 잃을 게 없어!<br />
            지금 바로 신청하세요!
          </p>
          <a 
            href="https://naver.me/G3P2Zipo" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-[#FFB84D] via-[#FFA500] to-[#FF8C00] hover:opacity-90 text-[#1a1612] font-bold py-4 px-10 rounded-lg text-lg transition duration-300 warm-glow shadow-lg"
          >
            참가 신청하기
          </a>
        </div>
      </section>
    </main>
  );
}
