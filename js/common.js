/**
 * footer - 드롭다운 메뉴
 * */
document.addEventListener('DOMContentLoaded', () => {
  
  //회사소개, 공지사항
  const toggleDropdown = (event) => {
    const dropdownItem = event.currentTarget;
    const dropdownSublist = dropdownItem.querySelector('.corp-sub-list');

    if (dropdownSublist) {
      dropdownSublist.classList.toggle('show');
      dropdownItem.classList.toggle('active');
    }
  };

  // 모든 dropmenu 항목에 클릭 이벤트 리스너 추가
  const dropdownItems = document.querySelectorAll('.corp-item.dropmenu');
  dropdownItems.forEach(item => {
    item.addEventListener('click', toggleDropdown);
  });

  // 외부 클릭시, 메뉴 닫기
  document.addEventListener('click', (event) => {
    // 드롭다운 항목 클릭이 아닌 경우
    const isDropdownItem = Array.from(dropdownItems).some(item => item.contains(event.target));
    
    if (!isDropdownItem) {
      // 모든 서브 리스트에서 show 클래스 제거
      dropdownItems.forEach(item => {
        const dropdownSublist = item.querySelector('.corp-sub-list');
        if (dropdownSublist) {
          dropdownSublist.classList.remove('show');
          item.classList.remove('active');
        }
      });
    }
  });

  //관련사이트
  const dropbtn = document.querySelector('.dropbtn');
  const dropdown = document.querySelector('#drop-down');
  
  dropbtn.addEventListener('click', () => {
    dropdown.classList.toggle('show');
    dropbtn.classList.toggle('active');
  });
  // 드롭다운 외부 클릭 시 드롭다운 닫기
  document.addEventListener('click', (event) => {
    if (!dropbtn.contains(event.target) && !dropdown.contains(event.target)) {//두 조건이 모두 false일 때
      dropdown.classList.remove('show');
      dropbtn.classList.remove('active');
    }
  });
});