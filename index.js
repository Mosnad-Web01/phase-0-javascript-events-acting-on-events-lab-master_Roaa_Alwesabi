// الحصول على العنصر "dodger"
const dodger = document.getElementById("dodger");

// دالة لتحريك العنصر "dodger" إلى اليسار
function moveDodgerLeft() {
  // الحصول على القيمة الحالية للخاصية "left" وإزالة وحدة "px"
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);

  // التأكد من أن العنصر لم يصل إلى الحافة اليسرى
  if (left > 0) {
    // تحديث قيمة "left" لتحريك العنصر لليسار
    dodger.style.left = `${left - 1}px`;
  }
}

// دالة لتحريك العنصر "dodger" إلى اليمين
function moveDodgerRight() {
  // الحصول على القيمة الحالية للخاصية "left" وإزالة وحدة "px"
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);

  // التأكد من أن العنصر لم يصل إلى الحافة اليمنى
  if (left < 360) { // عرض العنصر "dodger" هو 40px، وحقل اللعبة هو 400px
    // تحديث قيمة "left" لتحريك العنصر لليمين
    dodger.style.left = `${left + 1}px`;
  }
}

// دالة لتحريك العنصر "dodger" لأعلى
function moveDodgerUp() {
  // الحصول على القيمة الحالية للخاصية "bottom" وإزالة وحدة "px"
  const bottomNumbers = dodger.style.bottom.replace("px", "");
  const bottom = parseInt(bottomNumbers, 10);

  // التأكد من أن العنصر لم يصل إلى الحافة العليا
  if (bottom < 380) { // ارتفاع العنصر "dodger" هو 20px، وحقل اللعبة هو 400px
    // تحديث قيمة "bottom" لتحريك العنصر لأعلى
    dodger.style.bottom = `${bottom + 1}px`;
  }
}

// دالة لتحريك العنصر "dodger" لأسفل
function moveDodgerDown() {
  // الحصول على القيمة الحالية للخاصية "bottom" وإزالة وحدة "px"
  const bottomNumbers = dodger.style.bottom.replace("px", "");
  const bottom = parseInt(bottomNumbers, 10);

  // التأكد من أن العنصر لم يصل إلى الحافة السفلية
  if (bottom > 0) {
    // تحديث قيمة "bottom" لتحريك العنصر لأسفل
    dodger.style.bottom = `${bottom - 1}px`;
  }
}

// إضافة مستمع للحدث "keydown" لتحريك العنصر استجابةً لضغط المفاتيح
document.addEventListener("keydown", function (event) {
  // التحقق من المفتاح الذي تم ضغطه
  if (event.key === "ArrowLeft") {
    moveDodgerLeft();
  } else if (event.key === "ArrowRight") {
    moveDodgerRight();
  } else if (event.key === "ArrowUp") {
    moveDodgerUp();
  } else if (event.key === "ArrowDown") {
    moveDodgerDown();
  }
});
