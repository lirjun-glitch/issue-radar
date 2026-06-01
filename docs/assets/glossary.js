const glossary = {
  impact: { title: '임팩트', body: '해당 이슈가 시장, 기업 의사결정, 정책, 소비자 행동에 미치는 잠재 영향의 크기다. 숫자가 높을수록 손익·전략·사회적 파급력이 크다.' },
  urgency: { title: '긴급성', body: '지금 관찰하거나 대응해야 할 시간 압박의 정도다. 높을수록 며칠~수주 내 의사결정 또는 포지션 조정이 필요하다.' },
  persistence: { title: '지속성', body: '일회성 뉴스가 아니라 구조적 흐름으로 남을 가능성이다. 높을수록 몇 주~몇 분기 이상 반복될 수 있다.' },
  bayesian: { title: '베이지안 판단', body: '새로운 증거가 들어올 때 기존 판단의 확률을 업데이트하는 방식이다. 단정 대신 가능성의 범위를 제시한다.' },
  trigger: { title: '트리거', body: '판단을 바꾸거나 행동을 유발할 수 있는 관찰 지표다. 예를 들어 가격, 정책 발표, 수주, 검색량, 자금 흐름 등이 해당한다.' },
  costtransfer: { title: '비용 전가', body: '한 주체의 비용이나 리스크가 다른 주체에게 넘어가는 구조다. 기업의 비용이 소비자 가격, 노동 강도, 지역사회 부담, 세금으로 옮겨갈 수 있다.' },
  msi: { title: 'MSI', body: 'Market Structural Integrity의 약자다. 시장의 저평가 정도, 리더십 집중도, 자금 흐름, 밸류에이션, 구조적 건강성을 함께 보는 판단 프레임이다.' }
};

function showTerm(key){
  const item = glossary[key];
  if(!item) return;
  const panel = document.getElementById('term-panel');
  panel.querySelector('h3').textContent = item.title;
  panel.querySelector('p').textContent = item.body;
  panel.hidden = false;
}

document.addEventListener('click', event => {
  const term = event.target.closest('[data-term]');
  const close = event.target.closest('[data-close-term]');
  if(term){ showTerm(term.dataset.term); }
  if(close){ document.getElementById('term-panel').hidden = true; }
});
