import React from 'react';

function ContactSection({ onSubmit, isSending, sendStatus }) {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-section__inner">
        <h2 className="section-title">문의하기</h2>
        <p className="section-subtitle">
          프로그램, 제휴, 출강 문의를 남겨주시면 빠르게 답변드리겠습니다.
        </p>
        <form className="contact-form" onSubmit={onSubmit}>
          <label className="contact-form__field">
            <span>지역/원이름</span>
            <input
              type="text"
              name="location"
              placeholder="서울시 강남구 ㅇㅇ원"
              required
            />
          </label>
          <label className="contact-form__field">
            <span>연락처</span>
            <input type="tel" name="phone" placeholder="010-0000-0000" required />
          </label>
          <label className="contact-form__field">
            <span>원하는 과목/타임수</span>
            <input
              type="text"
              name="program"
              placeholder="체육 발레 각 30분 2타임"
              required
            />
          </label>
          <label className="contact-form__field">
            <span>요일/시간</span>
            <textarea
              name="schedule"
              rows="4"
              placeholder="월,화 10:00~13:00 (시간·요일 변경 가능 여부 O/X)"
              required
            />
          </label>
          <button type="submit" className="contact-form__submit">
            {isSending ? '보내는 중...' : '메일 보내기'}
          </button>
        </form>
        {sendStatus === 'success' && (
          <p className="contact-form__feedback contact-form__feedback--success">
            문의가 성공적으로 전송되었습니다. 빠르게 확인 후 연락드릴게요!
          </p>
        )}
        {sendStatus === 'error' && (
          <p className="contact-form__feedback contact-form__feedback--error">
            전송에 실패했습니다. 잠시 후 다시 시도하거나 1588-1181로 연락 부탁드립니다.
          </p>
        )}
      </div>
    </section>
  );
}

export default ContactSection;

