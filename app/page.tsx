
"use client";

import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Brand Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold tracking-wider text-gray-900">
              VERITAS
            </h1>
            <p className="text-xs md:text-sm text-gray-500 mt-1 tracking-widest">진정성 있는 만남</p>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-screen px-4 py-20 relative overflow-hidden bg-gradient-to-b from-sky-50 to-white pt-24">
        <div className="max-w-2xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight text-gray-900">
            집돌이 집순이들 모여라!
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-12">
            VERITAS 로테이션 소개팅
          </p>
          <div className="w-full max-w-md mx-auto mb-8">
            <div className="grid grid-cols-2 gap-3 mb-4">
              <a 
                href="https://naver.me/5xapdBCq" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-900 hover:bg-gray-800 text-white font-semibold py-3 px-2 rounded-xl text-xs md:text-sm transition duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-1.5 min-h-[72px] leading-tight"
              >
                <span className="text-base md:text-lg">✨</span>
                <span className="underline whitespace-nowrap">간단하게 자격 확인하기</span>
              </a>
              <a 
                href="https://open.kakao.com/o/s4YGJB7h" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#FEE500] hover:bg-[#FEE500]/90 text-gray-900 font-semibold py-3 px-2 rounded-xl text-xs md:text-sm transition duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-1.5 min-h-[72px] leading-tight"
              >
                <svg className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 3c5.799 0 10.5 3.664 10.5 8.185 0 4.52-4.701 8.184-10.5 8.184a13.5 13.5 0 0 1-1.727-.11l-4.408 2.883c-.501.265-.678.236-.472-.413l.892-3.678c-2.88-1.46-4.785-3.99-4.785-6.866C1.5 6.665 6.201 3 12 3z"/>
                </svg>
                <span className="whitespace-nowrap">카카오톡 문의하기</span>
              </a>
              <a 
                href="instagram://user?username=l__veritas"
                onClick={(e) => {
                  // 모바일이 아닌 경우 웹 URL로 폴백
                  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
                  if (!isMobile) {
                    e.preventDefault();
                    window.open('https://www.instagram.com/l__veritas/', '_blank');
                  }
                }}
                className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white font-semibold py-3 px-2 rounded-xl text-xs md:text-sm transition duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-1.5 min-h-[72px] leading-tight"
              >
                <svg className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <span className="whitespace-nowrap">인스타그램</span>
              </a>
              <a 
                href="https://open.kakao.com/o/sC4JHI9h" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#FEE500] hover:bg-[#FEE500]/90 text-gray-900 font-semibold py-3 px-2 rounded-xl text-xs md:text-sm transition duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-1.5 min-h-[72px] leading-tight"
              >
                <svg className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 3c5.799 0 10.5 3.664 10.5 8.185 0 4.52-4.701 8.184-10.5 8.184a13.5 13.5 0 0 1-1.727-.11l-4.408 2.883c-.501.265-.678.236-.472-.413l.892-3.678c-2.88-1.46-4.785-3.99-4.785-6.866C1.5 6.665 6.201 3 12 3z"/>
                </svg>
                <span className="whitespace-nowrap text-center">초대권 소지자 문의방</span>
              </a>
            </div>
            <a 
              href="#core-values"
              className="w-full bg-sky-100 hover:bg-sky-200 text-sky-500 font-semibold py-3 px-6 rounded-xl text-base transition duration-300 flex items-center justify-center gap-2"
            >
              <span>스크롤 해서 더 알아보기</span>
              <span className="text-xl">↓</span>
            </a>
          </div>
        </div>
      </section>

      {/* 핵심 가치 Section */}
      <section id="core-values" className="py-20 px-4 bg-gradient-to-b from-sky-50 to-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <span className="inline-block bg-sky-500 text-white px-4 py-1.5 rounded-full text-sm font-medium mb-4">
              핵심 가치
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-sky-500">
              VERITAS만의 약속
            </h2>
          </div>
          
          <div className="bg-white p-8 md:p-12 rounded-2xl border-2 border-sky-200 shadow-xl">
            <ul className="space-y-6 mb-8">
              <li className="flex items-start gap-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-sky-600 flex items-center justify-center mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  본 로테이션 소개팅은 최고의 매칭 만족도를 위해 잦은 모임을 진행하지 않습니다.
                </p>
              </li>
              <li className="flex items-start gap-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-sky-600 flex items-center justify-center mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  한 달에 단 <span className="font-bold text-sky-500">4</span><span className="font-bold text-sky-500">회</span>, 매 회차마다 매칭 퀄리티를 최우선으로 고려한 맞춤형 소개팅만을 진행합니다.
                </p>
              </li>
              <li className="flex items-start gap-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-sky-600 flex items-center justify-center mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  이러한 점 때문에 대기시간이 길어질 수 있다는 점을 양해 부탁드립니다.
                </p>
              </li>
            </ul>
            <div className="text-center pt-4 border-t border-gray-200">
              <p className="text-gray-700 flex items-center justify-center gap-2">
                <span className="text-xl">✨</span>
                <span>진정성 있는 만남을 위한 VERITAS의 약속</span>
                <span className="text-xl">✨</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Differentiation Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900">
            다른 로테이션 모임과의
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-16 text-sky-500">
            차별점
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* 차별점 1 - 여성분 특별 혜택 */}
            <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl transition duration-300">
              <div className="text-4xl mb-4">💝</div>
              <h4 className="text-2xl font-bold mb-4 text-gray-900">여성분 특별 혜택</h4>
              <p className="text-gray-600 leading-relaxed">
                최종 선택이 없을 시, 여성분들의 참가비 50%를 환급해드립니다. 다른 모임과 달리 진정성 있는 만남을 위해 특별히 준비한 혜택입니다.
              </p>
            </div>

            {/* 차별점 2 - 남성분 특별 혜택 */}
            <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl transition duration-300">
              <div className="text-4xl mb-4">🎯</div>
              <h4 className="text-2xl font-bold mb-4 text-gray-900">남성분 특별 혜택</h4>
              <p className="text-gray-600 leading-relaxed">
                최다득표 남성의 경우 참가비 50% 환급 이벤트! 많은 분들의 선택을 받은 남성분께 특별한 혜택을 드립니다.
              </p>
            </div>

            {/* 차별점 3 - 아르바이트생 없는 모임 */}
            <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl transition duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h4 className="text-2xl font-bold text-gray-900">아르바이트생 없는 모임</h4>
              </div>
              <p className="text-gray-600 leading-relaxed mb-2">
                아르바이트생은 절대 없습니다. 모든 참가자는 직장인 인증을 완료한 분들만으로 구성되어 있어, 진정성 있는 만남을 보장합니다.
              </p>
              <p className="text-sm text-gray-500 italic">
                ※아르바이트생은 운영자가 돈을 주고 참가를 부탁한 사람을 말함
              </p>
            </div>

            {/* 차별점 4 - 넓은 인력풀 */}
            <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl transition duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-3xl">🎓</div>
                <h4 className="text-2xl font-bold text-gray-900">넓은 인력풀</h4>
              </div>
              <div className="flex items-start gap-4">
                <Image 
                  src="/KakaoTalk_20251230_222633340.jpg" 
                  alt="졸업 사진" 
                  width={96}
                  height={96}
                  className="object-cover rounded-lg flex-shrink-0"
                />
                <p className="text-gray-600 leading-relaxed">
                  영남대학교, 경북대학교 출신 운영자들의 넓은 인력풀을 통해 다양한 분들과의 만남을 제공합니다. 다양한 직업과 배경을 가진 분들과의 만남이 가능합니다.
                </p>
              </div>
            </div>

            {/* 차별점 5 - 사후관리 서비스 */}
            <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl transition duration-300 md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-3xl">💌</div>
                <h4 className="text-2xl font-bold text-gray-900">사후관리 서비스</h4>
              </div>
              <p className="text-gray-600 leading-relaxed mb-3">
                모임이 끝난 후에도 인연의 끈이 이어질 수 있도록 소셜 브릿지 역할을 해드립니다. 아쉽게 짝을 만나지 못한 참여자들이 다른 모임분들과 연결될 수 있도록 도와주는 커뮤니티 케어 시스템입니다.
              </p>
              <p className="text-lg font-semibold text-sky-500">
                나만을 위한 특별한 인연, VERITAS가 끝까지 함께합니다
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
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-sky-600 flex items-center justify-center text-white font-bold text-xl shadow-md">
                1
              </div>
              <div className="flex-1">
                <h4 className="text-2xl font-bold mb-2 text-gray-900">신청</h4>
                <p className="text-gray-600">네이버 폼을 통해 간단하게 신청하세요!</p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-sky-600 flex items-center justify-center text-white font-bold text-xl shadow-md">
                2
              </div>
              <div className="flex-1">
                <h4 className="text-2xl font-bold mb-2 text-gray-900">검증</h4>
                <p className="text-gray-600">직장인 인증을 통해 진정성 있는 참가자만 선별!</p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-sky-600 flex items-center justify-center text-white font-bold text-xl shadow-md">
                3
              </div>
              <div className="flex-1">
                <h4 className="text-2xl font-bold mb-2 text-gray-900">인력풀 형성</h4>
                <p className="text-gray-600">검증된 참가자들로 인력풀을 구성합니다.</p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-sky-600 flex items-center justify-center text-white font-bold text-xl shadow-md">
                4
              </div>
              <div className="flex-1">
                <h4 className="text-2xl font-bold mb-2 text-gray-900">모임 날짜 공지</h4>
                <p className="text-gray-600">모임 일정을 확정하고 참가자들에게 공지합니다.</p>
              </div>
            </div>

            {/* Step 5 */}
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-sky-600 flex items-center justify-center text-white font-bold text-xl shadow-md">
                5
              </div>
              <div className="flex-1">
                <h4 className="text-2xl font-bold mb-2 text-gray-900">참여자 모집</h4>
                <p className="text-gray-600">인력풀에서 해당 모임에 참여할 분들을 모집합니다.</p>
              </div>
            </div>

            {/* Step 6 */}
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-sky-600 flex items-center justify-center text-white font-bold text-xl shadow-md">
                6
              </div>
              <div className="flex-1">
                <h4 className="text-2xl font-bold mb-2 text-gray-900">파티 진행</h4>
                <p className="text-gray-600 mb-2">편안한 분위기에서 다양한 분들과 로테이션으로 만나보세요!</p>
                <ul className="text-gray-600 space-y-1 list-disc list-inside">
                  <li>• ICE BREAKING TIME</li>
                  <li>• 1:1 로테이션 대화 TIME</li>
                </ul>
              </div>
            </div>

            {/* Step 7 */}
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-sky-600 flex items-center justify-center text-white font-bold text-xl shadow-md">
                7
              </div>
              <div className="flex-1">
                <h4 className="text-2xl font-bold mb-2 text-gray-900">최종 투표</h4>
                <p className="text-gray-600">마음에 드는 이성 두 분 (선택 포기 가능)</p>
              </div>
            </div>

            {/* Step 8 */}
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-sky-600 flex items-center justify-center text-white font-bold text-xl shadow-md">
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
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-sky-100 border-2 border-sky-600 flex items-center justify-center text-sky-500 font-bold text-xl">
                +
              </div>
              <div className="flex-1">
                <h4 className="text-2xl font-bold mb-2 text-sky-500">아쉬운 분을 위한 1:1 연결 서비스</h4>
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
          
          <div className="bg-white p-8 rounded-2xl border border-gray-200 space-y-8 shadow-lg">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-sky-500">참가 자격</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• 기혼자 및 이혼자 참여 불가 (사실혼 참여불가)</li>
                <li>• 대구에서 거주하고 있거나 거주할 예정인 직장인 (재직증명서 또는 명함 인증 필수)</li>
                <li>• (남) 1986 ~ 2002년생 / (여) 1986 ~ 2005년생</li>
                <li>• 진정성 있는 만남을 원하시는 분</li>
              </ul>
            </div>
            
            <div className="pt-6 border-t border-gray-200">
              <h3 className="text-2xl font-bold mb-6 text-sky-500">참가 비용</h3>
              <div className="mb-6">
                <p className="text-sm text-gray-500 mb-4">안내가격</p>
                <div className="flex justify-center gap-8 mb-6">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-gray-900">남성 50,000원</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-gray-900">여성 50,000원</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-sky-50 to-sky-100 p-6 rounded-xl border-2 border-sky-300">
                <p className="text-xl font-bold text-center mb-4 text-sky-500">
                  🎉 오픈특가 이벤트 🎉
                </p>
                <div className="flex justify-center gap-8 mb-4">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-gray-900">남성 참가자: 35,000원</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-gray-900">여성 참여자: 30,000원</p>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-sky-300">
                  <p className="text-lg font-semibold text-gray-700 mb-2">👭 여성 동반참여 특별 할인</p>
                  <p className="text-gray-600">동반참여자 1인당 5,000원 할인</p>
                  <p className="text-xl font-bold text-sky-500 mt-2">최대 할인가 10,000원 → 1인당 20,000원</p>
                </div>
                <p className="text-sm text-gray-600 mt-4 text-center">
                  모집 기간으로 평소에 로테이션 소개팅 체험해보고 싶은 분들의 많은 참여 부탁드립니다!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 주의사항 Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            ⚠️ 주의사항 (꼭 읽어주세요!)
          </h2>
          
          <div className="space-y-4">
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg">
              <div className="flex items-start gap-3">
                <span className="text-2xl">📢</span>
                <p className="text-gray-700 leading-relaxed">
                  원활한 매칭을 위해 일정이 조정될 수 있으며, 적절한 상대가 없을 경우 날짜 및 시간이 변경될 수 있습니다. (사전 개별 안내 예정)
                </p>
              </div>
            </div>

            <div className="bg-red-50 border-l-4 border-red-400 p-6 rounded-lg">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🚫</span>
                <p className="text-gray-700 leading-relaxed">
                  기혼자 및 이혼자 참여 불가: 법적 미혼 상태인 분만 가능하며, 위반 시 민·형사적 책임이 따를 수 있습니다.
                </p>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-sky-400 p-6 rounded-lg">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🛡️</span>
                <p className="text-gray-700 leading-relaxed">
                  철저한 신원 확인: 매칭을 위해 신분증, 직업/소득 관련 서류, 사진 등을 확인합니다. 제출 자료는 개인정보 보유기간 종료 후 즉시 폐기됩니다.
                </p>
              </div>
            </div>

            <div className="bg-orange-50 border-l-4 border-orange-400 p-6 rounded-lg">
              <div className="flex items-start gap-3">
                <span className="text-2xl">❌</span>
                <p className="text-gray-700 leading-relaxed">
                  허위 정보 기재 금지: 서류 조작 확인 시 즉시 퇴장 및 향후 참여 제한, 법적 책임이 따릅니다.
                </p>
              </div>
            </div>

            <div className="bg-purple-50 border-l-4 border-purple-400 p-6 rounded-lg">
              <div className="flex items-start gap-3">
                <span className="text-2xl">📸</span>
                <p className="text-gray-700 leading-relaxed">
                  사진 촬영 안내: 행사 중 홍보용 사진 촬영이 있을 수 있으나, 얼굴은 반드시 모자이크 처리됩니다. 촬영을 원치 않으시면 미리 말씀해 주세요!
                </p>
              </div>
            </div>

            <div className="bg-green-50 border-l-4 border-green-400 p-6 rounded-lg">
              <div className="flex items-start gap-3">
                <span className="text-2xl">⏰</span>
                <p className="text-gray-700 leading-relaxed">
                  지각/노쇼 금지: 시작 15분 전 도착 권장! 지각 또는 무단 불참 시 환불이 불가하며 타 참가자에게 피해를 줄 수 있습니다.
                </p>
              </div>
            </div>

            <div className="bg-gray-100 border-l-4 border-gray-400 p-6 rounded-lg">
              <div className="flex items-start gap-3">
                <span className="text-2xl">⚠️</span>
                <p className="text-gray-700 leading-relaxed">
                  매너 필수: 부적절한 언행이나 타인에게 불쾌감을 주는 행동 즉시 퇴장 조치됩니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900">
            자주 묻는 질문
          </h2>
          
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-lg">
              <h4 className="text-xl font-bold mb-3 text-sky-500">Q. 정말로 아르바이트생이 없나요?</h4>
              <p className="text-gray-600 leading-relaxed">
                네, 100% 결혼하고싶은 지인과 지인의 지인들 그리고 명함과 서류를 통해 증명된 사람들의 모임입니다. 아르바이트생은 절대 없으며, 모든 참가자는 직장인 인증을 완료한 분들만으로 구성되어 있어 진정성 있는 만남을 보장합니다.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-lg">
              <h4 className="text-xl font-bold mb-3 text-sky-500">Q. 참가비용 환급 문제</h4>
              <div className="text-gray-600 leading-relaxed space-y-2">
                <p>취소 시점에 따라 환급 정책이 다릅니다:</p>
                <ul className="list-disc list-inside space-y-1 ml-2">
                  <li>3일 전 취소 시: 참가비 100% 환급</li>
                  <li>하루 전 취소 시: 참가비 50% 환급</li>
                  <li>당일 취소 시: 참가비 환급 없음</li>
                </ul>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-lg">
              <h4 className="text-xl font-bold mb-3 text-sky-500">Q. 연락처 제공은 무조건 되나요?</h4>
              <p className="text-gray-600 leading-relaxed">
                아닙니다! 스토킹 등 불미스러운 일을 방지하기 위해 반드시 상대방이 '동의'했을 때만 제공! 안전하고 매너 있는 만남을 지향!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-sky-50 to-white">
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
              className="inline-block bg-gray-900 hover:bg-gray-800 text-white font-bold py-4 px-10 rounded-xl text-lg transition duration-300 shadow-lg hover:shadow-xl"
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
